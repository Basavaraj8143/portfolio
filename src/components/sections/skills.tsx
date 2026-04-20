"use client";

import { useRef } from "react";
import { Section } from "@/components/ui/section";
import { Layout, Server, Database, PenTool, Code, Layers, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const skillsData = [
    {
        category: "Frontend",
        icon: <Layout className="w-8 h-8" />,
        color: "bg-[#38bdf8]",
        skills: ["HTML5", "CSS3", "JavaScript", "React", "Next.js"],
    },
    {
        category: "Backend",
        icon: <Server className="w-8 h-8" />,
        color: "bg-[#5ce68b]",
        skills: ["Node.js", "Python", "Express", "Django", "REST APIs"],
    },
    {
        category: "Database",
        icon: <Database className="w-8 h-8" />,
        color: "bg-[#facc15]",
        skills: ["MySQL", "PostgreSQL", "MongoDB", "Firebase", "Redis"],
    },
    {
        category: "Tools",
        icon: <PenTool className="w-8 h-8" />,
        color: "bg-[#f87171]",
        skills: ["Git", "Docker", "VS Code", "Postman", "Figma"],
    },
    {
        category: "Languages",
        icon: <Code className="w-8 h-8" />,
        color: "bg-[#a78bfa]",
        skills: ["JavaScript", "Python", "Java", "C++", "TypeScript"],
    },
    {
        category: "Others",
        icon: <Layers className="w-8 h-8" />,
        color: "bg-[#fb923c]",
        skills: ["AWS", "Linux", "Agile", "CI/CD", "Testing"],
    },
];

export function Skills() {
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
        <Section id="skills" className="py-20 md:py-32">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-5 text-center text-foreground tracking-tight">My Skills</h2>
            
            <p className="text-center text-gray-500 font-medium text-lg md:text-xl mb-12">Technologies I work with</p>
            
            <div 
                ref={scrollRef}
                className="grid grid-rows-2 md:grid-rows-none grid-flow-col md:grid-flow-row md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto px-4 md:px-0 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory hide-scrollbar pb-6 md:pb-0"
            >
                {skillsData.map((category, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.08 }}
                        className="w-[85vw] sm:w-[50vw] md:w-auto h-full flex-shrink-0 snap-center md:snap-align-none"
                    >
                        <div className="h-full bg-white rounded-2xl md:rounded-[2rem] p-4 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] border-[2px] border-[#f2efe9] hover:-translate-y-1 md:hover:-translate-y-2 transition-all duration-300 group flex flex-col md:items-center md:text-center">
                            
                            <div className="flex items-center md:flex-col gap-3 md:gap-0 mb-3 md:mb-5 w-full md:w-auto">
                                <div className={`flex-shrink-0 w-12 h-12 md:mx-auto md:w-14 md:h-14 lg:w-16 lg:h-16 flex items-center justify-center rounded-xl md:rounded-[1.25rem] ${category.color} text-[#111111] md:mb-5 shadow-sm transition-transform duration-300 group-hover:scale-105 md:group-hover:scale-110`}>
                                    {category.icon}
                                </div>
                                <h3 className="text-lg md:text-2xl font-bold text-foreground tracking-tight">{category.category}</h3>
                            </div>
                            
                            <div className="flex flex-wrap md:justify-center gap-1.5 md:gap-2.5 mt-auto w-full">
                                {category.skills.map((skill) => (
                                    <span
                                        key={skill}
                                        className="px-2.5 py-1 md:px-4 md:py-2 bg-gray-50 border-2 border-gray-100 rounded-lg md:rounded-full text-[11px] md:text-sm font-bold text-gray-700 hover:bg-[#111111] hover:text-white hover:border-[#111111] md:hover:scale-105 transition-all cursor-default shadow-sm"
                                    >
                                        {skill}
                                    </span>
                                ))}
                            </div>

                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Mobile Navigation Arrows (Below Carousel) */}
            <div className="flex md:hidden justify-center items-center gap-4 mt-6">
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
