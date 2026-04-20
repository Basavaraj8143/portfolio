"use client";

import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Twitter, ArrowRight } from "lucide-react";
import { siteData } from "@/lib/site-data";

export function Hero() {
    return (
        <Section id="home" noPadding className="min-h-[calc(100vh-4rem)] flex items-center pt-8 sm:pt-20 pb-4">
            <div className="grid lg:grid-cols-[3fr_2fr] gap-4 sm:gap-8 md:gap-12 items-center py-2 md:py-16">
                
                {/* --- Text Content --- */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-2 sm:space-y-5 text-center lg:text-left order-2 lg:order-1"
                >
                    <h1 className="text-5xl sm:text-6xl md:text-8xl font-extrabold tracking-tight leading-[1.05] sm:leading-tight mb-1 sm:mb-4 text-foreground">
                        Hi, I&apos;m{" "}
                        <span className="text-foreground">{siteData.shortName}</span>
                    </h1>
                    <h2 className="text-lg sm:text-2xl md:text-3xl text-gray-600 font-semibold mb-2 sm:mb-6">
                        {siteData.role}
                    </h2>
                    <p className="text-sm sm:text-lg text-gray-500 max-w-lg mx-auto lg:mx-0 leading-snug sm:leading-relaxed mb-2 sm:mb-0">
                        {siteData.bio}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start pt-1 sm:pt-2">
                        <Link
                            href="#projects"
                            className="inline-flex items-center justify-center gap-2 px-6 py-3 sm:px-8 sm:py-4 rounded-full bg-[#5ce68b] text-[#111111] text-sm sm:text-base font-black tracking-wide hover:bg-[#111111] hover:text-white transition-all duration-300 shadow-md hover:shadow-lg hover:-translate-y-1"
                        >
                            View Projects <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                        </Link>
                        <Link
                            href={siteData.resumePath}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-6 py-3 sm:px-8 sm:py-4 rounded-full border-2 border-gray-200 text-foreground text-sm sm:text-base font-black tracking-wide bg-transparent hover:border-gray-300 hover:bg-gray-50 transition-all duration-200 shadow-sm hover:-translate-y-1"
                        >
                            Download Resume
                        </Link>
                    </div>

                    <div className="flex gap-3 justify-center lg:justify-start pt-2 sm:pt-4">
                        <SocialLink href={siteData.social.github} icon={<Github className="w-4 h-4 sm:w-5 sm:h-5"/>} label="GitHub" />
                        <SocialLink href={siteData.social.linkedin} icon={<Linkedin className="w-4 h-4 sm:w-5 sm:h-5"/>} label="LinkedIn" />
                        {siteData.social.twitter ? (
                            <SocialLink href={siteData.social.twitter} icon={<Twitter className="w-4 h-4 sm:w-5 sm:h-5"/>} label="Twitter" />
                        ) : null}
                    </div>
                </motion.div>

                {/* --- Photo --- */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative mx-auto order-1 lg:order-2 mt-4 sm:mt-0"
                >
                    {/* Increased mobile size to balance screen real estate */}
                    <div className="relative w-44 h-56 sm:w-56 sm:h-72 md:w-64 md:h-[340px] lg:w-[300px] lg:h-[380px] group mx-auto lg:ml-auto lg:mr-0">
                        {/* Simple static photo frame without hover translations */}
                        <div className="absolute inset-0 rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden bg-white border-4 border-white shadow-xl z-10">
                            <Image
                                src="/img.jpg"
                                alt={siteData.name}
                                fill
                                className="object-cover scale-[1.25] object-center"
                                priority
                            />
                        </div>
                    </div>
                </motion.div>
            </div>
        </Section>
    );
}

function SocialLink({ href, icon, label }: { href: string; icon: React.ReactNode; label: string }) {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 sm:p-3 rounded-full border border-gray-200 bg-white text-gray-600 hover:text-gray-900 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
            aria-label={label}
        >
            {icon}
        </a>
    );
}
