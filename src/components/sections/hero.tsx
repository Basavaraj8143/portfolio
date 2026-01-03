"use client";

import { Section } from "@/components/ui/section";
import { buttonVariants } from "@/components/ui/button";
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
                    transition={{ duration: 0.5 }}
                    className="space-y-6 text-center lg:text-left order-2 lg:order-1"
                >
                    <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight leading-tight mb-4">
                        Hi, I&apos;m <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-600 animate-gradient-x">Busss</span>
                    </h1>
                    <h2 className="text-xl md:text-2xl text-foreground font-medium">
                        CSE Student | Aspiring Software Engineer
                    </h2>
                    <p className="text-lg text-foreground/80 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                        I love building practical projects, learning daily, and aiming for a
                        great career in tech.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                        <Link href="#projects" className={cn(buttonVariants({ size: "lg" }), "bg-gradient-to-r from-violet-600 to-indigo-600 hover:from-violet-700 hover:to-indigo-700 border-0 shadow-lg shadow-violet-500/25 text-white font-semibold")}>
                            View Projects
                        </Link>
                        <Link
                            href="/resume.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className={cn(buttonVariants({ variant: "outline", size: "lg" }), "backdrop-blur-sm bg-white/10 border-white/30 hover:bg-white/20 hover:border-white/40 text-white font-semibold shadow-lg")}
                        >
                            Download Resume
                        </Link>
                    </div>

                    <div className="flex gap-4 justify-center lg:justify-start pt-4">
                        <SocialLink href="https://github.com/Basavaraj8143" icon={<Github />} label="GitHub" />
                        <SocialLink href="https://linkedin.com/in/basavaraj-ningasani-0796712a5" icon={<Linkedin />} label="LinkedIn" />
                        <SocialLink href="https://x.com/yourusername" icon={<Twitter />} label="Twitter" />
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative mx-auto order-1 lg:order-2"
                >
                    <div className="relative w-44 h-46 md:w-64 md:h-64 lg:w-80 lg:h-80">
                        {/* Rotating rings */}
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 rounded-full border border-violet-500/30 scale-110 shadow-[0_0_30px_rgba(124,58,237,0.2)]"
                        />
                        <motion.div
                            animate={{ rotate: -360 }}
                            transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                            className="absolute inset-0 rounded-full border border-cyan-500/30 scale-125 shadow-[0_0_30px_rgba(45,212,191,0.2)]"
                        />

                        <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-background shadow-2xl z-10">
                            <Image
                                src="/img.jpg"
                                alt="Busss"
                                fill
                                className="object-cover transition-transform hover:scale-110 duration-500"
                                priority
                            />
                        </div>

                        {/* Soft Glow behind image */}
                        <div className="absolute inset-0 bg-primary/20 blur-3xl -z-10 rounded-full scale-150" />
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
            className="p-3 rounded-full border bg-white/10 border-white/20 hover:bg-white/20 hover:border-white/30 transition-all duration-300 hover:-translate-y-1 shadow-lg text-white hover:text-white/90"
            aria-label={label}
        >
            {icon}
        </a>
    );
}
