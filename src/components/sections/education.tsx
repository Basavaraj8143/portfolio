"use client";

import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Award, BookOpen, Home } from "lucide-react";
import { motion } from "framer-motion";

const educationData = [
    {
        icon: <Award className="w-6 h-6" />,
        year: "2023 – 2027",
        title: "Bachelor of Engineering in Computer Science",
        institution: "KLE Institute of Technology, Hubli",
        grade: "CGPA: 8.4 (till 4th sem)",
    },
    {
        icon: <BookOpen className="w-6 h-6" />,
        year: "2022 – 2023",
        title: "Pre-University (Science)",
        institution: "Sainiketan Pu college, Jamakhandi",
        grade: "92%",
    },
    {
        icon: <Home className="w-6 h-6" />,
        year: "2009 – 2021",
        title: "High School",
        institution: "Pushpatayi high school, Jamakhandi",
        grade: "97%",
    },
];

export function Education() {
    return (
        <Section id="education">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-900">Education</h2>
            <p className="text-center text-gray-500 mb-12 text-lg">My academic background</p>
            <div className="grid md:grid-cols-3 gap-4">
                {educationData.map((edu, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <Card className="h-full hover:border-primary/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-black/10">
                            <CardContent className="pt-6 flex flex-col items-start h-full">
                                <div className="mb-4 text-green-600 bg-green-50 p-3 rounded-lg">
                                    {edu.icon}
                                </div>
                                <span className="text-sm font-semibold bg-black text-white py-1 px-3 rounded-full mb-3">
                                    {edu.year}
                                </span>
                                <h3 className="text-xl font-bold mb-2 text-gray-900">{edu.title}</h3>
                                <p className="text-gray-500 mb-4 flex-grow">{edu.institution}</p>
                                <div className="mt-auto">
                                    <span className="inline-block border border-gray-300 text-gray-700 font-semibold px-4 py-1.5 rounded-full text-sm hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-colors cursor-default">
                                        {edu.grade}
                                    </span>
                                </div>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </Section>
    );
}
