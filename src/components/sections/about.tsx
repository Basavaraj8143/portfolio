"use client";

import { useRef, useState, useEffect } from "react";
import { Section } from "@/components/ui/section";
import { Target, Heart, TrendingUp, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { siteData } from "@/lib/site-data";

export function About() {
    const scrollRef = useRef<HTMLDivElement>(null);
    const [isPaused, setIsPaused] = useState(false);

    useEffect(() => {
        if (isPaused) return;
        
        const interval = setInterval(() => {
            if (scrollRef.current) {
                const el = scrollRef.current;
                const maxScrollLeft = el.scrollWidth - el.clientWidth;
                
                // Only act if there is overflow (mobile horizontal scroll)
                if (maxScrollLeft > 0) {
                    if (el.scrollLeft >= maxScrollLeft - 10) {
                        // Reached the end, smooth scroll all the way back to 0
                        el.scrollTo({ left: 0, behavior: "smooth" });
                    } else {
                        // Move right one card roughly
                        el.scrollBy({ left: window.innerWidth * 0.85, behavior: "smooth" });
                    }
                }
            }
        }, 3000);

        return () => clearInterval(interval);
    }, [isPaused]);

    return (
        <Section id="about" className="py-20 md:py-32">
            <div className="text-center max-w-4xl mx-auto mb-20">
                <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-foreground tracking-tight">About Me</h2>
                <p className="text-lg md:text-xl text-gray-500 leading-relaxed font-medium">
                    I&apos;m <strong className="text-foreground font-black">{siteData.shortName}</strong>, a Computer Science student passionate about problem solving,
                    building impactful projects, and continuously improving my skills.
                    My goal is to become a skilled software engineer and contribute to
                    real-world tech solutions.
                </p>
            </div>

            {/* Mobile Swipe Hint */}
            <div className="flex md:hidden justify-end px-6 mb-4 text-gray-400 items-center opacity-50">
                <ArrowRight className="w-4 h-4 animate-pulse" />
            </div>

            {/* Container turns into horizontal scroll on mobile, grid on desktop */}
            <div 
                ref={scrollRef}
                onMouseEnter={() => setIsPaused(true)}
                onMouseLeave={() => setIsPaused(false)}
                onTouchStart={() => setIsPaused(true)}
                onTouchEnd={() => setIsPaused(false)}
                className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar md:grid md:grid-cols-3 gap-6 max-w-5xl mx-auto px-4 md:px-0 pb-8 md:pb-0"
            >
                <HighlightCard
                    icon={<Target className="w-8 h-8" />}
                    title="Focus"
                    description="Web Development, DBMS Projects, and Problem Solving"
                    bgColor="bg-[#5ce68b]"
                    accentHover="group-hover:opacity-80"
                    delay={0.1}
                />
                <HighlightCard
                    icon={<Heart className="w-8 h-8" />}
                    title="Interests"
                    description="AI Tools, Full-Stack Projects, Hackathons"
                    bgColor="bg-[#38bdf8]"
                    accentHover="group-hover:opacity-80"
                    delay={0.2}
                />
                <HighlightCard
                    icon={<TrendingUp className="w-8 h-8" />}
                    title="Goal"
                    description="Securing a good job and growing in tech industry"
                    bgColor="bg-[#facc15]"
                    accentHover="group-hover:opacity-80"
                    delay={0.3}
                />
            </div>
        </Section>
    );
}

interface HighlightCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    bgColor: string;
    accentHover: string;
    delay: number;
}

function HighlightCard({ icon, title, description, bgColor, accentHover, delay }: HighlightCardProps) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
            className="flex-shrink-0 w-[85vw] sm:w-[350px] md:w-auto snap-center"
        >
            <div className="h-full bg-white rounded-[2rem] p-8 md:p-10 text-center flex flex-col items-center shadow-sm border-2 border-gray-100 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group cursor-default">
                <div className={`p-5 rounded-full ${bgColor} text-[#111111] mb-6 shadow-md transition-opacity ${accentHover}`}>
                    {icon}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 tracking-tight transition-colors">
                    {title}
                </h3>
                <p className="text-gray-500 font-medium leading-relaxed">
                    {description}
                </p>
            </div>
        </motion.div>
    );
}
