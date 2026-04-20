"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Section } from "@/components/ui/section";
import { Github, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const projectsData = [
    {
        title: "Studium",
        description: "A lightweight Electron desktop browser for PDF-heavy study sessions with predictable memory usage and focused study controls.",
        image: "/projects/studium.png",
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

    const bgColors = [
        "bg-[#5ce68b]", // Green
        "bg-[#38bdf8]", // Blue
        "bg-[#facc15]", // Yellow
        "bg-[#f87171]", // Red
        "bg-[#a78bfa]", // Purple
        "bg-[#fb923c]", // Orange
    ];
    const cardBgColor = bgColors[index % bgColors.length];

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            style={{ perspective: "800px" }}
            className="w-[85vw] sm:w-[50vw] md:w-auto h-full flex-shrink-0 snap-center md:snap-align-none"
        >
            <motion.div
                ref={ref}
                onMouseMove={handleMouse}
                onMouseEnter={handleEnter}
                onMouseLeave={handleLeave}
                style={{ rotateX, rotateY, scale, transformStyle: "preserve-3d" }}
                className={`h-full ${cardBgColor} rounded-[2rem] overflow-hidden flex flex-col group cursor-pointer relative shadow-md`}
            >
                {/* Cursor-following tooltip */}
                <motion.span
                    className="pointer-events-none absolute z-50 rounded px-2.5 py-1 text-[11px] font-semibold bg-white text-gray-800 shadow-md border border-gray-100 hidden md:block"
                    style={{ x: tooltipX, y: tooltipY, opacity: tooltipOpacity, rotate: rotateFigcaption, translateX: '-50%', translateY: '-130%' }}
                >
                    {project.title}
                </motion.span>
                {/* Image */}
                <div className="relative h-48 md:h-52 w-full overflow-hidden p-6 pb-0">
                    <div className="relative w-full h-full rounded-t-2xl overflow-hidden shadow-lg transform translate-y-4 group-hover:translate-y-2 transition-transform duration-500 bg-white">
                        <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                    </div>
                </div>

                {/* Content */}
                <div className="p-6 pt-5 bg-white flex flex-col flex-grow rounded-b-[2rem] m-1 mt-0">
                    <h3 className="text-2xl font-bold mb-2 text-foreground group-hover:text-green-600 transition-colors tracking-tight line-clamp-1">
                        {project.title}
                    </h3>

                    <p className="text-gray-500 mb-4 text-sm leading-relaxed line-clamp-4">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4 mt-auto">
                        {project.tags.map((tag) => (
                            <span
                                key={tag}
                                className="px-3 py-1 rounded-full bg-gray-100 text-[#111111] text-xs font-bold"
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
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const scrollAmount = window.innerWidth * 0.60; // Reduced to let snap behavior accurately center the next card
            scrollRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth"
            });
        }
    };

    return (
        <Section id="projects" className="py-20 md:py-32">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-5 text-center text-foreground tracking-tight">My Projects</h2>
            <p className="text-center text-gray-500 font-medium text-lg md:text-xl mb-12">A showcase of my recent work</p>

            <div 
                ref={scrollRef}
                className="flex flex-row md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 md:px-0 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory hide-scrollbar pb-6 md:pb-0"
            >
                {projectsData.map((project, index) => (
                    <TiltCard key={index} project={project} index={index} />
                ))}
            </div>

            {/* Mobile Navigation Arrows (Below Carousel) */}
            <div className="flex md:hidden justify-center items-center gap-4 mt-2">
                <button 
                    onClick={() => scroll("left")} 
                    className="p-3 bg-white border-2 border-gray-100 rounded-full hover:bg-gray-100 active:scale-95 transition-all shadow-sm flex items-center justify-center"
                    aria-label="Scroll left"
                >
                    <ChevronLeft className="w-5 h-5 text-gray-700" />
                </button>
                <button 
                    onClick={() => scroll("right")} 
                    className="p-3 bg-white border-2 border-gray-100 rounded-full hover:bg-gray-100 active:scale-95 transition-all shadow-sm flex items-center justify-center"
                    aria-label="Scroll right"
                >
                    <ChevronRight className="w-5 h-5 text-gray-700" />
                </button>
            </div>
        </Section>
    );
}
