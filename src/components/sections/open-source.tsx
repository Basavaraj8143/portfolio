"use client";

import { useRef } from "react";
import { Section } from "@/components/ui/section";
import { GitPullRequest, GitMerge, ExternalLink, ChevronLeft, ChevronRight, Github } from "lucide-react";
import { motion } from "framer-motion";

// Placeholder data - Please update the links and titles!
const openSourceData = [
    {
        repo: "hoppscotch/hoppscotch",
        title: "CLI Test Logic Fix (PR #6122)",
        description: "Fixed inverted logic in hasFailedTestCases that returned wrong test result values. Collaborated with maintainers to refine the fix, ensuring hasAllTestsPassed correctly reflects intent across the codebase.",
        status: "Merged",
        icon: <GitMerge className="w-4 h-4" />,
        link: "https://github.com/hoppscotch/hoppscotch/pull/6122",
        logoColor: "bg-[#31C48D]", // Hoppscotch Green
    },
    {
        repo: "electron/electron",
        title: "Chinese Localization Fix",
        description: "Fixed incorrect translation of MenuItem enum values in Chinese API docs. Corrected <code> tag formatting, punctuation, broken links, and duplicate strings. Cleared all Crowdin validation errors.",
        status: "Resolved",
        icon: <GitMerge className="w-4 h-4" />,
        link: "https://github.com/electron/electron",
        logoColor: "bg-[#2B2E3A]", // Electron Dark
    },
    {
        repo: "supabase/cli",
        title: "Gzipped Seed File Support (PR #5105)",
        description: "Added support for .sql.gz seed files with automatic decompression during database seeding. Implemented extension-based detection, change tracking, and rigorous seeding flow tests.",
        status: "Open",
        icon: <GitPullRequest className="w-4 h-4" />,
        link: "https://github.com/supabase/cli/pull/5105",
        logoColor: "bg-[#3ECF8E]", // Supabase Green
    }
];

export function OpenSource() {
    const scrollRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const scrollAmount = window.innerWidth * 0.60; 
            scrollRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth"
            });
        }
    };

    return (
        <Section id="open-source" className="py-20 md:py-32 bg-[#fdfbf7]">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-5 text-center text-foreground tracking-tight">Open Source</h2>
            <p className="text-center text-gray-500 font-medium text-lg md:text-xl mb-12">Proud contributions to the community</p>

            <div 
                ref={scrollRef}
                className="flex flex-row md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4 md:px-0 overflow-x-auto md:overflow-x-visible snap-x snap-mandatory hide-scrollbar pb-6 md:pb-0"
            >
                {openSourceData.map((pr, index) => {
                    let badgeColor = "bg-[#facc15] text-[#111111]"; // Default yellow for Open
                    if (pr.status === "Merged" || pr.status === "Resolved") badgeColor = "bg-[#a78bfa] text-white"; // Purple for Merged/Resolved

                    return (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="w-[85vw] sm:w-[50vw] md:w-auto flex-shrink-0 snap-center md:snap-align-none"
                        >
                            <div className="h-full bg-white rounded-[1.5rem] md:rounded-[2rem] p-5 md:p-6 lg:p-8 flex flex-col shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-2 border-gray-100 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group">
                                
                                {/* Header */}
                                <div className="flex justify-between items-start mb-5 md:mb-6">
                                    <div className={`w-12 h-12 md:w-14 md:h-14 rounded-xl md:rounded-[1.2rem] flex items-center justify-center shadow-md flex-shrink-0 ${pr.logoColor}`}>
                                        <Github className="w-6 h-6 md:w-7 md:h-7 text-white mix-blend-overlay" />
                                    </div>
                                    <div className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[10px] md:text-xs font-black uppercase tracking-widest shadow-sm ${badgeColor}`}>
                                        {pr.icon} {pr.status}
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="flex-grow">
                                    <p className="text-xs md:text-sm font-bold text-gray-400 mb-2">{pr.repo}</p>
                                    <h3 className="text-xl md:text-2xl font-bold mb-3 text-foreground tracking-tight leading-snug">{pr.title}</h3>
                                    <p className="text-sm md:text-base text-gray-500 font-medium leading-relaxed mb-6 md:mb-8">
                                        {pr.description}
                                    </p>
                                </div>
                                
                                {/* Footer CTA */}
                                <div className="pt-4 border-t-2 border-gray-50 mt-auto">
                                    <a
                                        href={pr.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 md:py-4 rounded-xl bg-gray-50 hover:bg-[#5ce68b] text-foreground text-sm md:text-base font-black tracking-wide transition-all shadow-sm group-hover:text-[#111111]"
                                    >
                                        View Pull Request <ExternalLink className="w-4 h-4 ml-1" />
                                    </a>
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
