"use client";

import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Layout, Server, Database, PenTool, Code, Layers } from "lucide-react";
import { motion } from "framer-motion";

const skillsData = [
    {
        category: "Frontend",
        icon: <Layout className="w-6 h-6" />,
        skills: ["HTML5", "CSS3", "JavaScript", "React", "Next.js"],
    },
    {
        category: "Backend",
        icon: <Server className="w-6 h-6" />,
        skills: ["Node.js", "Python", "Express", "Django", "REST APIs"],
    },
    {
        category: "Database",
        icon: <Database className="w-6 h-6" />,
        skills: ["MySQL", "PostgreSQL", "MongoDB", "Firebase", "Redis"],
    },
    {
        category: "Tools",
        icon: <PenTool className="w-6 h-6" />,
        skills: ["Git", "Docker", "VS Code", "Postman", "Figma"],
    },
    {
        category: "Languages",
        icon: <Code className="w-6 h-6" />,
        skills: ["JavaScript", "Python", "Java", "C++", "TypeScript"],
    },
    {
        category: "Others",
        icon: <Layers className="w-6 h-6" />,
        skills: ["AWS", "Linux", "Agile", "CI/CD", "Testing"],
    },
];

export function Skills() {
    return (
        <Section id="skills" className="bg-muted/30">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">My Skills</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {skillsData.map((category, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <Card className="h-full hover:shadow-md transition-shadow min-h-[180px]">
                            <CardContent className="pt-6 p-6 text-center">
                                <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-primary/10 text-primary mb-4">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl lg:text-2xl font-bold mb-4">{category.category}</h3>
                                <div className="flex flex-wrap justify-center gap-2">
                                    {category.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1 bg-background border rounded-full text-sm lg:text-base font-medium hover:bg-foreground hover:text-background hover:scale-105 transition-all cursor-default"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
