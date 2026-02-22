"use client";

import { Section } from "@/components/ui/section";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Github, Linkedin, Twitter } from "lucide-react";
import { cn } from "@/lib/utils";

export function Hero() {
    return (
        <Section id="home" className="pt-32 min-h-[95vh] flex items-center pb-16">
            <div className="grid lg:grid-cols-[3fr_2fr] gap-12 items-center">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                    className="space-y-6 text-center lg:text-left order-2 lg:order-1"
                >
                    <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-tight mb-4 text-gray-900">
                        Hi, I&apos;m{" "}
                        <span className="gradient-text">Busss</span>
                    </h1>
                    <h2 className="text-xl md:text-2xl text-gray-600 font-medium">
                        CSE Student | Aspiring Software Engineer
                    </h2>
                    <p className="text-lg text-gray-500 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                        I love building practical projects, learning daily, and aiming for a
                        great career in tech.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
                        <Link
                            href="#projects"
                            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full bg-gray-900 text-white text-sm font-semibold hover:bg-gray-700 transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5"
                        >
                            View Projects
                        </Link>
                        <Link
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-8 py-3.5 rounded-full border border-gray-300 text-gray-700 text-sm font-semibold bg-white hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 shadow-sm hover:-translate-y-0.5"
                        >
                            Download Resume
                        </Link>
                    </div>

                    <div className="flex gap-3 justify-center lg:justify-start pt-2">
                        <SocialLink href="https://github.com/Basavaraj8143" icon={<Github />} label="GitHub" />
                        <SocialLink href="https://linkedin.com/in/basavaraj-ningasani-0796712a5" icon={<Linkedin />} label="LinkedIn" />
                        <SocialLink href="https://x.com/yourusername" icon={<Twitter />} label="Twitter" />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative mx-auto order-1 lg:order-2"
                >
                    <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80">
                        {/* Soft colored rings */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 rounded-full border-2 border-green-200 scale-110"
                        />
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 rounded-full border-2 border-teal-200 scale-125"
                        />

                        <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-white shadow-2xl z-10">
                            <Image
                                src="/img.jpg"
                                alt="Busss"
                                fill
                                className="object-cover transition-transform hover:scale-110 duration-500"
                                priority
                            />
                        </div>

                        {/* Subtle green glow */}
                        <div className="absolute inset-0 bg-green-100 blur-3xl -z-10 rounded-full scale-150 opacity-60" />
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
            className="p-3 rounded-full border border-gray-200 bg-white text-gray-600 hover:text-gray-900 hover:border-gray-300 hover:bg-gray-50 transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
            aria-label={label}
        >
            {icon}
        </a>
    );
}
