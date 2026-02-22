"use client";

import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Target, Heart, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

export function About() {
    return (
        <Section id="about" className="bg-gray-50">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">About Me</h2>
                <p className="text-lg text-gray-500 leading-relaxed">
                    I&apos;m <strong className="text-gray-900">Busss</strong>, a Computer Science student passionate about problem solving,
                    building impactful projects, and continuously improving my skills.
                    My goal is to become a skilled software engineer and contribute to
                    real-world tech solutions.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <HighlightCard
                    icon={<Target className="w-8 h-8" />}
                    title="Focus"
                    description="Web Development, DBMS Projects, and Problem Solving"
                    delay={0.1}
                />
                <HighlightCard
                    icon={<Heart className="w-8 h-8" />}
                    title="Interests"
                    description="AI Tools, Full-Stack Projects, Hackathons"
                    delay={0.2}
                />
                <HighlightCard
                    icon={<TrendingUp className="w-8 h-8" />}
                    title="Goal"
                    description="Securing a good job and growing in tech industry"
                    delay={0.3}
                />
            </div>
        </Section>
    );
}

function HighlightCard({ icon, title, description, delay }: { icon: React.ReactNode; title: string; description: string; delay: number }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay }}
        >
            <Card className="h-full text-center max-w-[280px] mx-auto">
                <CardContent className="pt-6 flex flex-col items-center gap-4">
                    <div className="p-3 rounded-full bg-green-50 text-green-600 mb-2">
                        {icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
                    <p className="text-gray-500">{description}</p>
                </CardContent>
            </Card>
        </motion.div>
    );
}
