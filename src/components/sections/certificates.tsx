"use client";

import { Section } from "@/components/ui/section";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "lucide-react"; // Using Badge icon as placeholder if needed, but UI has specific badges
import Image from "next/image";
import { motion } from "framer-motion";

const certificatesData = [
    {
        title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
        issuer: "Oracle University",
        description: "Certified in foundational AI and Oracle Cloud Infrastructure concepts, covering AI principles, OCI services, and their applications in cloud-based solutions.",
        image: "/oracle.png",
        badge: "Completion",
        link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=3EA9F032D808B3DC6892EE9A7A41C02A9F4D905BE76AC47928E30BAD94A77AA3",
    },
    {
        title: "Cybersecurity Analyst Job Simulation",
        issuer: "Forage in collaboration with Tata",
        description: "Completed practical tasks in Identity & Access Management (IAM), IAM strategy assessment, custom IAM solutions, and platform integration.",
        image: "/tata.png",
        badge: "Verified",
        link: "https://www.theforage.com/simulations/tata/cybersecurity-sbda",
    },
    {
        title: "Data Structures & Algorithms in C",
        issuer: "Great Learning",
        description: "Learned fundamental and advanced DSA concepts using C, including arrays, linked lists, stacks, queues, trees, sorting, and searching techniques.",
        image: "/dsa_in_c.png",
        badge: "Excellence",
        link: "https://www.mygreatlearning.com/certificate/KAFSXQDV",
    },
];

export function Certificates() {
    return (
        <Section id="certificates">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-900">Certificates</h2>
            <p className="text-center text-gray-500 mb-12 text-lg">My professional credentials</p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {certificatesData.map((cert, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                        <Card className="h-full hover:shadow-lg transition-all duration-300">
                            {/* Aspect ratio container for image */}
                            <div className="relative aspect-video w-full overflow-hidden bg-gray-100 border-b rounded-t-2xl">
                                <Image
                                    src={cert.image}
                                    alt={cert.title}
                                    fill
                                    className="object-cover transition-transform hover:scale-105"
                                />
                            </div>

                            <CardContent className="p-6 flex flex-col h-[calc(100%-aspect-ratio)]">
                                <h3 className="text-lg font-bold mb-1 line-clamp-2 text-gray-900" title={cert.title}>
                                    {cert.title}
                                </h3>
                                <p className="text-sm font-medium text-green-600 mb-3">{cert.issuer}</p>

                                <p className="text-gray-500 text-sm mb-6 flex-grow line-clamp-4">
                                    {cert.description}
                                </p>

                                <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-100">
                                    <span className="px-2.5 py-0.5 rounded-full border border-gray-200 bg-gray-50 text-gray-600 text-xs font-semibold">
                                        {cert.badge}
                                    </span>
                                    <a
                                        href={cert.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-sm font-medium text-gray-600 hover:text-green-600 hover:underline transition-colors flex items-center gap-1"
                                    >
                                        View Credential →
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
