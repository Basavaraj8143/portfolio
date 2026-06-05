"use client";

import { useRef, useState } from "react";
import { Section } from "@/components/ui/section";
import Image from "next/image";
import { ExternalLink, Trophy, Users, Mic, ChevronLeft, ChevronRight, Shield, Cpu, Lock } from "lucide-react";
import { motion } from "framer-motion";

const hackathonsData = [
    {
        title: "Vibe-A-Thon",
        role: "App Developer",
        description: "Built a stealth emergency-response application powered by Twilio for automated SOS alerts and live audio evidence. Features gesture-based activation and a critical offline GPS auto-send fallback to transmit coordinates even without internet connectivity. (React Native • TypeScript • Expo • Twilio)",
        image: "/images/vibeathon.png",
        badge: "Recognition",
        icon: <Shield className="w-4 h-4" />,
        link: "https://github.com/Basavaraj8143/vibe_a_thon.git",
    },
    {
        title: "WAVE Hackathon 3.0",
        role: "AI/ML Developer",
        description: "Ranked among the Top 12 out of 150+ competing teams. Built an AI-powered fraud detection and cybercrime assistance platform that analyzes scam messages using hybrid ML models, semantic analysis, and LLMs. The system extracts evidence, generates cybercrime reports, and helps users identify digital financial fraud in real time. (Python • FastAPI • React • Ollama • DeepSeek • Gemini • Scikit-Learn)",
        image: "/images/wave3.jpeg",
        badge: "Top 12 Finalist",
        icon: <Cpu className="w-4 h-4" />,
        link: "https://github.com/Basavaraj8143/Riskrader-BGK-Hackathon",
    },
    {
        title: "Hackkshetra 2.0",
        role: "Team Leader",
        description: "Shortlisted from the online round and advanced to the Top 15 finalists in the AgriTech domain during a 24-hour national-level hackathon at VVCE Mysore. Collaborated with the team to develop and present an innovative solution under tight deadlines while competing against teams from multiple institutions. (React • Python • FastAPI • AI/ML)",
        image: "/images/hackkshetra.jpeg",
        badge: "🏅 Finalist",
        icon: <Users className="w-4 h-4" />,
        link: "https://github.com/Basavaraj8143/agrisense",
    },
    {
        title: "HackFusion 2.0",
        role: "Backend Developer",
        description: "Developed a multi-tenant Role-Based Access Control (RBAC) security platform that detects indirect privilege escalation through graph traversal algorithms. The system enforces tenant isolation, analyzes role inheritance chains, generates explainable access decisions, and maintains comprehensive audit logs for security monitoring. (Node.js • Express • React • MongoDB • D3.js • JWT)",
        image: "/images/hackfusion2.0.jpeg",
        badge: "Participant",
        icon: <Lock className="w-4 h-4" />,
        link: "https://github.com/Basavaraj8143/rbac-firewall.git",
    },
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
        title: "Hyperthon 2025",
        role: "Presenter",
        description: "Presented Viklang Banking System - an inclusive digital banking solution for differently-abled individuals featuring face recognition login, voice-enabled navigation, high-contrast UI, and full keyboard accessibility.",
        image: "/hyperthon.jpg",
        badge: "Participant",
        icon: <Mic className="w-4 h-4" />,
        link: "https://github.com/Basavaraj8143/INS-CSE-37-10277.git",
    },
];

function HackathonCard({ hackathon, index }: { hackathon: typeof hackathonsData[0]; index: number }) {
    const [isExpanded, setIsExpanded] = useState(false);
    
    let badgeColor = "bg-[#5ce68b] text-[#111111]";
    if (hackathon.badge === "Winner") badgeColor = "bg-[#facc15] text-[#111111]";
    if (hackathon.badge === "Recognition") badgeColor = "bg-[#38bdf8] text-[#111111]";
    if (hackathon.badge === "Top 12 Finalist") badgeColor = "bg-[#a78bfa] text-[#111111]";
    if (hackathon.badge === "🏅 Finalist") badgeColor = "bg-[#fb923c] text-[#111111]";

    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="w-[85vw] sm:w-[50vw] md:w-[calc((100%-24px)/2)] lg:w-[calc((100%-48px)/3)] h-full flex-shrink-0 snap-center"
        >
            <div className="h-full bg-card rounded-[2rem] overflow-hidden flex flex-col shadow-sm border-2 border-border hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group">
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
                    <h3 className="text-2xl font-bold mb-3 text-foreground tracking-tight line-clamp-2">{hackathon.title}</h3>
                    <p className={`text-muted-foreground text-sm md:text-base leading-relaxed ${isExpanded ? "" : "line-clamp-4"} mb-2`}>
                        {hackathon.description}
                    </p>
                    
                    {hackathon.description.length > 150 && (
                        <button
                            suppressHydrationWarning
                            onClick={() => setIsExpanded(!isExpanded)}
                            className="text-xs font-bold text-[#38bdf8] hover:underline self-start mb-4"
                        >
                            {isExpanded ? "Read Less" : "Read More"}
                        </button>
                    )}
                    
                    <div className="mt-auto pt-2">
                        {hackathon.link ? (
                            <a
                                href={hackathon.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-[1.5rem] bg-foreground text-background text-sm font-bold hover:bg-primary hover:text-primary-foreground transition-all shadow-sm group-hover:bg-primary group-hover:text-primary-foreground"
                            >
                                View Project <ExternalLink className="w-4 h-4" />
                            </a>
                        ) : (
                            <span className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-[1.5rem] bg-muted text-muted-foreground text-sm font-bold cursor-not-allowed">
                                Project Details Soon
                            </span>
                        )}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}

export function Hackathons() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const scrollAmount = scrollRef.current.clientWidth * 0.85;
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

            <div className="relative max-w-6xl mx-auto px-4 md:px-0">
                <div 
                    ref={scrollRef}
                    className="flex flex-row gap-6 overflow-x-auto snap-x snap-mandatory hide-scrollbar pb-6 scroll-smooth"
                >
                    {hackathonsData.map((hackathon, index) => (
                        <HackathonCard key={index} hackathon={hackathon} index={index} />
                    ))}
                </div>

                {/* Left Arrow Button (Desktop only) */}
                <button 
                    suppressHydrationWarning
                    onClick={() => scroll("left")} 
                    className="absolute md:-left-6 lg:-left-16 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/90 backdrop-blur-sm border-2 border-gray-100 rounded-full hover:bg-gray-100 active:scale-95 transition-all shadow-md hidden md:flex items-center justify-center dark:bg-card/90 dark:border-border dark:hover:bg-muted"
                    aria-label="Scroll left"
                >
                    <ChevronLeft className="w-5 h-5 text-foreground" />
                </button>

                {/* Right Arrow Button (Desktop only) */}
                <button 
                    suppressHydrationWarning
                    onClick={() => scroll("right")} 
                    className="absolute md:-right-6 lg:-right-16 top-1/2 -translate-y-1/2 z-10 p-3 bg-white/90 backdrop-blur-sm border-2 border-gray-100 rounded-full hover:bg-gray-100 active:scale-95 transition-all shadow-md hidden md:flex items-center justify-center dark:bg-card/90 dark:border-border dark:hover:bg-muted"
                    aria-label="Scroll right"
                >
                    <ChevronRight className="w-5 h-5 text-foreground" />
                </button>
            </div>

            {/* Mobile Navigation Arrows (Below Carousel, Hidden on Desktop) */}
            <div className="flex md:hidden justify-center items-center gap-4 mt-6">
                <button 
                    suppressHydrationWarning
                    onClick={() => scroll("left")} 
                    className="p-3 bg-white border-2 border-gray-100 rounded-full hover:bg-gray-100 active:scale-95 transition-all shadow-sm flex items-center justify-center dark:bg-card dark:border-border dark:hover:bg-muted"
                    aria-label="Scroll left"
                >
                    <ChevronLeft className="w-5 h-5 text-foreground" />
                </button>
                <button 
                    suppressHydrationWarning
                    onClick={() => scroll("right")} 
                    className="p-3 bg-white border-2 border-gray-100 rounded-full hover:bg-gray-100 active:scale-95 transition-all shadow-sm flex items-center justify-center dark:bg-card dark:border-border dark:hover:bg-muted"
                    aria-label="Scroll right"
                >
                    <ChevronRight className="w-5 h-5 text-foreground" />
                </button>
            </div>
        </Section>
    );
}
