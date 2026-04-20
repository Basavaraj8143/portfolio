"use client";

import { useRef } from "react";
import { Section } from "@/components/ui/section";
import Image from "next/image";
import { ExternalLink, Trophy, Users, Mic, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

const hackathonsData = [
    {
        title: "Insignia Hackathon 2025",
        role: "Team Leader",
        description: "Built a Business Intelligence Tool that scraped emails from websites using filters like country, city, industry, and count, exporting results into CSV for outreach automation.",
        image: "/insignia.jpg",
        badge: "Recognition",
        icon: <Users className="w-4 h-4" />,
        link: "https://github.com/Basavaraj8143/INS-CSE-37-10277.git",
    },
    {
        title: "CodeStorm Hackathon",
        role: "Backend Developer",
        description: "Created a Criminal Management System using PHP & MySQL with role-based access.",
        image: "/back.jpg",
        badge: "Winner",
        icon: <Trophy className="w-4 h-4" />,
        link: null,
    },
    {
        title: "Hyperthon 2025",
        role: "Presenter",
        description: "Presented Viklang Banking System - an inclusive digital banking solution for differently-abled individuals featuring face recognition login, voice-enabled navigation, high-contrast UI, and full keyboard accessibility.",
        image: "/hyperthon.jpg",
        badge: "Participant",
        icon: <Mic className="w-4 h-4" />,
        link: "https://github.com/Basavaraj8143/INS-CSE-37-10277.git",
    },
];

export function Hackathons() {
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
        <Section id="hackathons" className="py-20 md:py-32">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-5 text-center text-foreground tracking-tight">Hackathons</h2>
            <p className="text-center text-gray-500 font-medium text-lg md:text-xl mb-12">Events I&apos;ve participated in</p>

            <div 
                ref={scrollRef}
                className="flex flex-row md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 md:px-0 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory hide-scrollbar pb-6 md:pb-0"
            >
                {hackathonsData.map((hackathon, index) => {
                    let badgeColor = "bg-[#5ce68b] text-[#111111]";
                    if (hackathon.badge === "Winner") badgeColor = "bg-[#facc15] text-[#111111]";
                    if (hackathon.badge === "Recognition") badgeColor = "bg-[#38bdf8] text-[#111111]";

                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="w-[85vw] sm:w-[50vw] md:w-auto h-full flex-shrink-0 snap-center md:snap-align-none"
                        >
                            <div className="h-full bg-white rounded-[2rem] overflow-hidden flex flex-col shadow-sm border-2 border-gray-100 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group">
                                <div className="p-2 pb-0">
                                    <div className="relative h-48 md:h-52 w-full rounded-t-[1.5rem] rounded-b-md overflow-hidden bg-gray-100">
                                        <Image
                                            src={hackathon.image}
                                            alt={hackathon.title}
                                            fill
                                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                                        />
                                        <div className={`absolute top-4 right-4 ${badgeColor} px-4 py-1.5 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-wider shadow-md`}>
                                            {hackathon.badge}
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6 pt-5 flex flex-col flex-grow">
                                    <div className="flex items-center gap-2 mb-2 text-sm text-[#38bdf8] font-bold uppercase tracking-wide">
                                        {hackathon.icon}
                                        <span>{hackathon.role}</span>
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3 text-foreground tracking-tight line-clamp-1">{hackathon.title}</h3>
                                    <p className="text-gray-500 text-sm md:text-base leading-relaxed mb-6 line-clamp-4">
                                        {hackathon.description}
                                    </p>
                                    
                                    <div className="mt-auto pt-2">
                                        {hackathon.link ? (
                                            <a
                                                href={hackathon.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[1.5rem] bg-[#111111] text-white text-sm font-bold hover:bg-gray-800 transition-all shadow-sm group-hover:bg-[#5ce68b] group-hover:text-[#111111]"
                                            >
                                                View Project <ExternalLink className="w-4 h-4" />
                                            </a>
                                        ) : (
                                            <span className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-[1.5rem] bg-gray-100 text-gray-400 text-sm font-bold cursor-not-allowed">
                                                Project Details Soon
                                            </span>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
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
