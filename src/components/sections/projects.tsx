"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Github, Camera } from "lucide-react";
import Image from "next/image";

const projectsData = [
    {
        title: "Airline Reservation System",
        description: "A complete booking system with PHP, MySQL, and a modern frontend.",
        image: "/back.jpg",
        tags: ["HTML", "CSS", "PHP", "MySQL"],
        links: { github: "#", snapshot: "#" },
    },
    {
        title: "Criminal Management System",
        description: "A DBMS project for maintaining criminal records with role-based access.",
        image: "/back.jpg",
        tags: ["HTML", "CSS", "PHP", "MySQL"],
        links: { github: "#", snapshot: "#" },
    },
    {
        title: "NEO-LEDGER X",
        description: "A FinTech hackathon project featuring facial recognition sign-up/login.",
        image: "/back.jpg",
        tags: ["React", "JavaScript", "Node.js"],
        links: { github: "#", snapshot: "#" },
    },
    {
        title: "Email Scraper Tool",
        description: "A hackathon tool that generates business links and scrapes contact emails.",
        image: "/back.jpg",
        tags: ["Python", "Flask", "Ollama", "CSV"],
        links: { github: "#", snapshot: "#" },
    },
    {
        title: "Fake News Detector",
        description: "A Chrome extension using Gemini API for fake news and deepfake detection.",
        image: "/back.jpg",
        tags: ["JavaScript", "Chrome API", "Gemini"],
        links: { github: "#", snapshot: "#" },
    },
    {
        title: "Restaurant Management System",
        description: "A mini project to manage orders, menus, and reservations using PHP + MySQL.",
        image: "/back.jpg",
        tags: ["HTML", "CSS", "PHP", "MySQL"],
        links: { github: "#", snapshot: "#" },
    },
];

const springCfg = { damping: 30, stiffness: 100, mass: 2 };

function TiltCard({ project, index }: { project: typeof projectsData[0]; index: number }) {
    const ref = useRef<HTMLDivElement>(null);
    const rotateX = useSpring(useMotionValue(0), springCfg);
    const rotateY = useSpring(useMotionValue(0), springCfg);
    const scale = useSpring(1, springCfg);

    // Tooltip follow-cursor state
    const tooltipX = useMotionValue(0);
    const tooltipY = useMotionValue(0);
    const tooltipOpacity = useSpring(0, { damping: 20, stiffness: 300 });
    const rotateFigcaption = useSpring(0, { stiffness: 350, damping: 30, mass: 1 });
    const [lastOffsetY, setLastOffsetY] = useState(0);

    function handleMouse(e: React.MouseEvent<HTMLDivElement>) {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const offsetX = e.clientX - rect.left - rect.width / 2;
        const offsetY = e.clientY - rect.top - rect.height / 2;
        rotateX.set((offsetY / (rect.height / 2)) * -8);
        rotateY.set((offsetX / (rect.width / 2)) * 8);
        // Tooltip position relative to card
        tooltipX.set(e.clientX - rect.left);
        tooltipY.set(e.clientY - rect.top);
        rotateFigcaption.set(-(offsetY - lastOffsetY) * 0.6);
        setLastOffsetY(offsetY);
    }

    function handleEnter() {
        scale.set(1.03);
        tooltipOpacity.set(1);
    }
    function handleLeave() {
        rotateX.set(0);
        rotateY.set(0);
        scale.set(1);
        tooltipOpacity.set(0);
        rotateFigcaption.set(0);
    }

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{ perspective: "800px" }}
        >
            <motion.div
                ref={ref}
                onMouseMove={handleMouse}
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
                style={{ rotateX, rotateY, scale, transformStyle: "preserve-3d" }}
                className="h-full bg-white border border-gray-200 rounded-2xl overflow-hidden flex flex-col shadow-sm group cursor-pointer relative"
            >
                {/* Cursor-following tooltip */}
                <motion.span
                    className="pointer-events-none absolute z-50 rounded px-2.5 py-1 text-[11px] font-semibold bg-white text-gray-800 shadow-md border border-gray-100"
                    style={{ x: tooltipX, y: tooltipY, opacity: tooltipOpacity, rotate: rotateFigcaption, translateX: '-50%', translateY: '-130%' }}
                >
                    {project.title}
                </motion.span>
                {/* Image */}
                <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-green-600 transition-colors">
                        {project.title}
                    </h3>

                    <p className="text-gray-500 mb-4 text-sm leading-relaxed flex-grow">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-600 border border-gray-200 text-xs font-medium"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="flex gap-3 pt-2">
                        <a
                            href={project.links.snapshot}
                            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-gray-300 text-gray-700 text-xs font-semibold hover:bg-gray-50 transition-all"
                        >
                            <Camera className="w-3.5 h-3.5" /> Snapshots
                        </a>
                        <a
                            href={project.links.github}
                            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-gray-900 text-white text-xs font-semibold hover:bg-gray-700 transition-all"
                        >
                            <Github className="w-3.5 h-3.5" /> Code
                        </a>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}

export function Projects() {
    return (
        <Section id="projects">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">My Projects</h2>
                <p className="text-gray-500 text-lg">A showcase of my recent work</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectsData.map((project, index) => (
                    <TiltCard key={index} project={project} index={index} />
                ))}
            </div>
        </Section>
    );
}
