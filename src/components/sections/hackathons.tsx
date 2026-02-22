"use client";

import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";
import { ExternalLink, Trophy, Users, Mic } from "lucide-react";
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
    return (
        <Section id="hackathons" className="bg-gray-50">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-900">Hackathons &amp; Competitions</h2>
            <p className="text-center text-gray-500 mb-12 text-lg">Events I&apos;ve participated in</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {hackathonsData.map((hackathon, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <Card className="h-full overflow-hidden flex flex-col hover:border-black transition-colors">
                            <div className="relative h-48 w-full border-b">
                                <Image
                                    src={hackathon.image}
                                    alt={hackathon.title}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute top-4 right-4 bg-black text-white px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider shadow-lg">
                                    {hackathon.badge}
                                </div>
                            </div>
                            <CardContent className="p-6 flex flex-col flex-grow">
                                <div className="flex items-center gap-2 mb-2 text-sm text-green-600 font-medium">
                                    {hackathon.icon}
                                    <span>{hackathon.role}</span>
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-gray-900">{hackathon.title}</h3>
                                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-grow">
                                    {hackathon.description}
                                </p>
                                {hackathon.link && (
                                    <a
                                        href={hackathon.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-gray-300 text-gray-700 text-sm font-semibold hover:bg-gray-50 transition-all mt-auto"
                                    >
                                        View Project <ExternalLink className="w-3 h-3" />
                                    </a>
                                )}
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
