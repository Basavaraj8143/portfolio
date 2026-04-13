"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Github } from "lucide-react";
import Image from "next/image";

const projectsData = [
    {
        title: "Studium",
        description: "A lightweight Electron desktop browser for PDF-heavy study sessions with predictable memory usage and focused study controls.",
        image: "/projects/studium.svg",
        tags: ["JavaScript", "HTML", "CSS"],
        links: { github: "https://github.com/Basavaraj8143/studium" },
    },
    {
        title: "AgriSense",
        description: "An AI-powered smart farming platform with crop recommendation, pest detection, market insights, and multilingual support.",
        image: "/projects/agrisense.png",
        tags: ["HTML", "JavaScript", "Python"],
        links: { github: "https://github.com/Basavaraj8143/agrisense" },
    },
    {
        title: "Audio2Notes AI",
        description: "Transforms lecture audio into structured study notes with transcription, cleanup, and grounded Q&A over transcripts.",
        image: "/projects/audio2notes-ai.png",
        tags: ["Python", "JavaScript", "HTML"],
        links: { github: "https://github.com/Basavaraj8143/audio2notes-ai" },
    },
    {
        title: "Distributed Storage System",
        description: "A scalable distributed storage system with replication, heartbeat-based failure detection, and automatic re-replication.",
        image: "/projects/distributed-storage-system.png",
        tags: ["Java", "Distributed Systems", "Storage"],
        links: { github: "https://github.com/Basavaraj8143/distributed-storage-system" },
    },
    {
        title: "Smart Flight Analytics",
        description: "A machine learning web app that predicts flight ticket prices and provides data-driven travel analytics.",
        image: "/projects/smart-flight-analytics.png",
        tags: ["Jupyter Notebook", "Python", "ML"],
        links: { github: "https://github.com/Basavaraj8143/smart-flight-analytics" },
    },
    {
        title: "Riskrader BGK Hackathon",
        description: "An AI-powered fraud detection platform combining pattern matching, ML scoring, and LLM assistance for cybercrime reporting.",
        image: "/projects/riskrader-bgk-hackathon.png",
        tags: ["JavaScript", "Python", "FinTech"],
        links: { github: "https://github.com/Basavaraj8143/Riskrader-BGK-Hackathon" },
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
                <div className="relative h-40 md:h-44 w-full overflow-hidden bg-gray-100">
                    <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>

                {/* Content */}
                <div className="p-5 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-2 text-gray-900 group-hover:text-green-600 transition-colors">
                        {project.title}
                    </h3>

                    <p className="text-gray-500 mb-4 text-sm leading-relaxed line-clamp-4">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-2.5 py-0.5 rounded-full bg-gray-100 text-gray-600 border border-gray-200 text-xs font-medium"
                            >
                                {tag}
                            </span>
                        ))}
                    </div>

                    <div className="pt-2">
                        {project.links.github ? (
                            <a
                                href={project.links.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-gray-900 text-white text-xs font-semibold hover:bg-gray-700 transition-all"
                            >
                                <Github className="w-3.5 h-3.5" /> View Code
                            </a>
                        ) : (
                            <span className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-gray-300 text-white text-xs font-semibold cursor-not-allowed">
                                <Github className="w-3.5 h-3.5" /> Code Soon
                            </span>
                        )}
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

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projectsData.map((project, index) => (
                    <TiltCard key={index} project={project} index={index} />
                ))}
            </div>
        </Section>
    );
}
