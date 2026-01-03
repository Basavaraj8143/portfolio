"use client";

import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { buttonVariants } from "@/components/ui/button";
import { Github, Camera } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

const projectsData = [
    {
        title: "Airline Reservation System",
        description: "A complete booking system with PHP, MySQL, and a modern frontend.",
        image: "/back.jpg",
        tags: ["HTML", "CSS", "PHP", "MySQL"],
        links: { github: "#", snapshot: "#" },
    },
    {
        title: "Criminal Management System",
        description: "A DBMS project for maintaining criminal records with role-based access.",
        image: "/back.jpg",
        tags: ["HTML", "CSS", "PHP", "MySQL"],
        links: { github: "#", snapshot: "#" },
    },
    {
        title: "NEO-LEDGER X",
        description: "A FinTech hackathon project featuring facial recognition sign-up/login.",
        image: "/back.jpg",
        tags: ["React", "JavaScript", "Node.js"],
        links: { github: "#", snapshot: "#" },
    },
    {
        title: "Email Scraper Tool",
        description: "A hackathon tool that generates business links and scrapes contact emails.",
        image: "/back.jpg",
        tags: ["Python", "Flask", "Ollama", "CSV"],
        links: { github: "#", snapshot: "#" },
    },
    {
        title: "Fake News Detector",
        description: "A Chrome extension using Gemini API for fake news and deepfake detection.",
        image: "/back.jpg",
        tags: ["JavaScript", "Chrome API", "Gemini"],
        links: { github: "#", snapshot: "#" },
    },
    {
        title: "Restaurant Management System",
        description: "A mini project to manage orders, menus, and reservations using PHP + MySQL.",
        image: "/back.jpg",
        tags: ["HTML", "CSS", "PHP", "MySQL"],
        links: { github: "#", snapshot: "#" },
    },
];

export function Projects() {
    return (
        <Section id="projects">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
                <p className="text-muted-foreground text-lg">A showcase of my recent work</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectsData.map((project, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <Card className="h-full overflow-hidden flex flex-col group hover:shadow-xl transition-all duration-300 border-border/50">
                            <div className="relative h-48 w-full overflow-hidden bg-muted">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                />
                            </div>
                            <CardContent className="p-6 flex flex-col flex-grow">
                                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>

                                <p className="text-muted-foreground mb-4 text-sm leading-relaxed flex-grow">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-2.5 py-0.5 rounded-full bg-secondary text-secondary-foreground text-xs font-medium"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-3 pt-2">
                                    <a
                                        href={project.links.snapshot}
                                        className={buttonVariants({ variant: "outline", size: "sm", className: "w-full gap-2 text-xs" })}
                                    >
                                        <Camera className="w-3.5 h-3.5" /> Snapshots
                                    </a>
                                    <a
                                        href={project.links.github}
                                        className={buttonVariants({ variant: "primary", size: "sm", className: "w-full gap-2 text-xs" })}
                                    >
                                        <Github className="w-3.5 h-3.5" /> Code
                                    </a>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
