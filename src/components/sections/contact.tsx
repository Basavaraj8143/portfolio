"use client";

import { Section } from "@/components/ui/section";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export function Contact() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const form = e.currentTarget;
        const data = new FormData(form);

        setStatus("submitting");

        try {
            const response = await fetch("https://formspree.io/f/xvgqeqob", {
                method: "POST",
                body: data,
                headers: {
                    'Accept': 'application/json'
                }
            });

            if (response.ok) {
                setStatus("success");
                form.reset();
            } else {
                setStatus("error");
            }
        } catch (error) {
            setStatus("error");
        }
    }

    return (
        <Section id="contact" className="bg-gray-50">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Get in Touch</h2>
                <p className="text-lg text-gray-500">Detailed messages are appreciated!</p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
                {/* Contact Info */}
                <div className="space-y-8">
                    <div>
                        <h3 className="text-2xl font-bold mb-4 text-gray-900">Let&apos;s Connect</h3>
                        <p className="text-gray-500 leading-relaxed">
                            I&apos;m currently looking for internship opportunities and would be glad to discuss how my skills
                            can add value to your team. Always open to meaningful conversations.
                        </p>
                    </div>

                    <div className="bg-white border border-gray-200 rounded-2xl p-6 space-y-2">
                        <h4 className="font-semibold mb-2 text-gray-900">Internship Interests:</h4>
                        <ul className="list-disc list-inside space-y-1 text-gray-500">
                            <li>Backend Development & API Design</li>
                            <li>Full-Stack Web Development</li>
                            <li>Database Management</li>
                            <li>Cloud Computing & DevOps</li>
                        </ul>
                    </div>

                    <div className="grid gap-6">
                        <ContactItem icon={<Mail />} label="Email" value="basavarajningasani123@gmail.com" />
                        <ContactItem icon={<Phone />} label="Phone" value="+91 7019910124" />
                        <ContactItem icon={<MapPin />} label="Location" value="Karnataka, India" />
                    </div>
                </div>

                {/* Form */}
                <div className="bg-white border border-gray-200 rounded-2xl p-6 md:p-8 shadow-sm">
                    <h3 className="text-xl font-bold mb-6 text-gray-900">Send a Message</h3>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-medium text-gray-700">Name</label>
                            <input
                                id="name"
                                name="name"
                                required
                                className="flex h-10 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                                placeholder="John Doe"
                                suppressHydrationWarning
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-medium text-gray-700">Email</label>
                            <input
                                id="email"
                                name="email"
                                type="email"
                                required
                                className="flex h-10 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                                placeholder="john@example.com"
                                suppressHydrationWarning
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="subject" className="text-sm font-medium text-gray-700">Subject</label>
                            <input
                                id="subject"
                                name="subject"
                                required
                                className="flex h-10 w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                                placeholder="Collaboration / Internship"
                                suppressHydrationWarning
                            />
                        </div>

                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                required
                                rows={4}
                                className="flex w-full rounded-xl border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                                placeholder="Hello, I'd like to discuss..."
                                suppressHydrationWarning
                            />
                        </div>

                        <button type="submit" disabled={status === "submitting"} suppressHydrationWarning className="w-full inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-gray-900 text-white text-sm font-semibold hover:bg-gray-700 transition-all disabled:opacity-50 disabled:cursor-not-allowed">
                            {status === "submitting" ? (
                                "Sending..."
                            ) : (
                                <>Send Message <Send className="ml-2 w-4 h-4" /></>
                            )}
                        </button>

                        {status === "success" && (
                            <p className="text-green-600 text-sm font-medium text-center mt-2 animate-in fade-in">
                                Message sent successfully!
                            </p>
                        )}
                        {status === "error" && (
                            <p className="text-red-500 text-sm font-medium text-center mt-2 animate-in fade-in">
                                Something went wrong. Please try again.
                            </p>
                        )}
                    </form>
                </div>
            </div>
        </Section>
    );
}

function ContactItem({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
    return (
        <div className="flex items-center gap-4 group">
            <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600 group-hover:bg-green-600 group-hover:text-white transition-colors">
                {icon}
            </div>
            <div>
                <p className="text-xs uppercase font-bold tracking-wider text-gray-400">{label}</p>
                <p className="font-medium text-gray-800">{value}</p>
            </div>
        </div>
    );
}
