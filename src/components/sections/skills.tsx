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
        <Section id="skills">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-900">My Skills</h2>
            <p className="text-center text-gray-500 mb-12 text-lg">Technologies I work with</p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                {skillsData.map((category, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.08 }}
                    >
                        <Card className="h-full min-h-[180px]">
                            <CardContent className="pt-6 p-6 text-center">
                                <div className="mx-auto w-12 h-12 flex items-center justify-center rounded-full bg-green-50 text-green-600 mb-4">
                                    {category.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-gray-900">{category.category}</h3>
                                <div className="flex flex-wrap justify-center gap-2">
                                    {category.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1 bg-gray-50 border border-gray-200 rounded-full text-sm font-medium text-gray-600 hover:bg-gray-900 hover:text-white hover:border-gray-900 hover:scale-105 transition-all cursor-default"
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
