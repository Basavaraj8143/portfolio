"use client";

import { Section } from "@/components/ui/section";
import { siteData } from "@/lib/site-data";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { ArrowRight, Mail, Phone, MapPin, Send } from "lucide-react";
import { useEffect, useState } from "react";

export function Contact() {
    // Form State
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
        } catch {
            setStatus("error");
        }
    }

    // Parallax mouse tracking
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            mouseX.set((e.clientX / window.innerWidth - 0.5) * 2);
            mouseY.set((e.clientY / window.innerHeight - 0.5) * 2);
        };
        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, [mouseX, mouseY]);

    // Transformation layers for parallax
    const x1 = useTransform(mouseX, [-1, 1], [-30, 30]);
    const y1 = useTransform(mouseY, [-1, 1], [-30, 30]);

    const x2 = useTransform(mouseX, [-1, 1], [40, -40]);
    const y2 = useTransform(mouseY, [-1, 1], [40, -40]);

    const x3 = useTransform(mouseX, [-1, 1], [-20, 20]);
    const y3 = useTransform(mouseY, [-1, 1], [20, -20]);

    return (
        <Section id="contact" className="py-12 md:py-32 relative overflow-hidden bg-[#fdfbf7]">

            {/* --- Interactive Floating Graphics (Parallax) --- */}
            {/* Top Left Yellow Star */}
            <motion.div
                style={{ x: x1, y: y1 }}
                className="absolute top-[2%] left-[2%] md:top-[10%] md:left-[15%] opacity-60 md:opacity-80 scale-75 md:scale-100"
            >
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M20 2L20 12" stroke="#facc15" strokeWidth="3" strokeLinecap="round" />
                    <path d="M20 28L20 38" stroke="#facc15" strokeWidth="3" strokeLinecap="round" />
                    <path d="M38 20L28 20" stroke="#facc15" strokeWidth="3" strokeLinecap="round" />
                    <path d="M12 20L2 20" stroke="#facc15" strokeWidth="3" strokeLinecap="round" />
                    <path d="M32.7279 7.27214L25.6568 14.3432" stroke="#facc15" strokeWidth="3" strokeLinecap="round" />
                    <path d="M14.3432 25.6568L7.27214 32.7279" stroke="#facc15" strokeWidth="3" strokeLinecap="round" />
                    <path d="M32.7279 32.7279L25.6568 25.6568" stroke="#facc15" strokeWidth="3" strokeLinecap="round" />
                    <path d="M14.3432 14.3432L7.27214 7.27213" stroke="#facc15" strokeWidth="3" strokeLinecap="round" />
                </svg>
            </motion.div>

            {/* Middle Left Green Swirl */}
            <motion.div
                style={{ x: x2, y: y2 }}
                className="absolute top-[12%] left-[-5%] md:top-[30%] md:left-[10%] opacity-50 md:opacity-90 scale-50 md:scale-100"
            >
                <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="scale-x-[-1]">
                    <path d="M20 80 C 20 20, 80 20, 80 40" stroke="#5ce68b" strokeWidth="4" strokeLinecap="round" fill="none" />
                    <path d="M70 30 L 80 40 L 90 30" stroke="#5ce68b" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                </svg>
            </motion.div>

            {/* Top Right Purple Squiggle */}
            <motion.div
                style={{ x: x3, y: y3 }}
                className="absolute top-[6%] right-[-2%] md:top-[15%] md:right-[15%] opacity-50 md:opacity-70 scale-75 md:scale-100"
            >
                <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10 50 Q 30 10 50 50 T 90 50" stroke="#a78bfa" strokeWidth="3" strokeLinecap="round" fill="none" />
                    <circle cx="90" cy="50" r="3" fill="#a78bfa" />
                    <path d="M8 48 L 12 52 M 8 52 L 12 48" stroke="#a78bfa" strokeWidth="3" strokeLinecap="round" />
                </svg>
            </motion.div>

            {/* --- Main Content --- */}

            <div className="max-w-6xl mx-auto relative z-10 px-3 sm:px-6">

                {/* Minimalist CTA Header */}
                <div className="flex flex-col items-center justify-center text-center mb-20 md:mb-28">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-foreground tracking-tighter mb-4 md:mb-6 leading-[1.1]"
                    >
                        Let&apos;s build something <br className="hidden sm:block" />
                        <span className="italic font-serif font-medium text-gray-800"> amazing together.</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="text-lg md:text-xl text-gray-500 font-medium max-w-xl leading-relaxed"
                    >
                        Whether you&apos;re a recruiter, founder, or bring specialized engineering knowledge — my inbox is always open.
                    </motion.p>
                </div>

                {/* Form & Info Layout */}
                <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 w-full">

                    {/* Left: Info */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-8"
                    >
                        <div>
                            <h3 className="text-3xl font-extrabold mb-4 text-foreground tracking-tight">Let&apos;s Connect</h3>
                            <p className="text-gray-500 leading-relaxed font-medium">
                                I&apos;m currently looking for internship opportunities and would be glad to discuss how my skills
                                can add value to your team. Always open to meaningful conversations.
                            </p>
                        </div>

                        <div className="bg-white rounded-[1.5rem] md:rounded-[2rem] p-6 lg:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-2 border-gray-100">
                            <h4 className="text-xl font-bold mb-4 text-foreground tracking-tight">Internship Interests</h4>
                            <ul className="space-y-3">
                                {[
                                    "Backend Development & API Design",
                                    "Full-Stack Web Development",
                                    "Database Management",
                                    "Cloud Computing & DevOps"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-600 font-medium">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#5ce68b]" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="grid gap-4 bg-white rounded-[2rem] p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border-2 border-gray-100">
                            <ContactItem icon={<Mail className="w-5 h-5" />} label="Email" value={siteData.email} color="bg-[#38bdf8]" />
                            <ContactItem icon={<Phone className="w-5 h-5" />} label="Phone" value={siteData.phone} color="bg-[#5ce68b]" />
                            <ContactItem icon={<MapPin className="w-5 h-5" />} label="Location" value={siteData.location} color="bg-[#facc15]" />
                        </div>
                    </motion.div>

                    {/* Right: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="bg-white rounded-[1.5rem] md:rounded-[2rem] p-6 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.08)] border-2 border-gray-100"
                    >
                        <h3 className="text-2xl font-bold mb-8 text-foreground tracking-tight">Send a Message</h3>
                        <form onSubmit={handleSubmit} className="space-y-5">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-bold text-gray-700 uppercase tracking-wider">Name</label>
                                <input
                                    id="name"
                                    name="name"
                                    required
                                    className="flex h-12 w-full rounded-xl border-2 border-gray-100 bg-gray-50 px-4 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5ce68b] focus:border-transparent focus:bg-white transition-all font-medium"
                                    placeholder="John Doe"
                                    suppressHydrationWarning
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-bold text-gray-700 uppercase tracking-wider">Email</label>
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    required
                                    className="flex h-12 w-full rounded-xl border-2 border-gray-100 bg-gray-50 px-4 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5ce68b] focus:border-transparent focus:bg-white transition-all font-medium"
                                    placeholder="john@example.com"
                                    suppressHydrationWarning
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-bold text-gray-700 uppercase tracking-wider">Subject</label>
                                <input
                                    id="subject"
                                    name="subject"
                                    required
                                    className="flex h-12 w-full rounded-xl border-2 border-gray-100 bg-gray-50 px-4 py-2 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5ce68b] focus:border-transparent focus:bg-white transition-all font-medium"
                                    placeholder="Collaboration / Internship"
                                    suppressHydrationWarning
                                />
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-bold text-gray-700 uppercase tracking-wider">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    required
                                    rows={5}
                                    className="flex w-full rounded-xl border-2 border-gray-100 bg-gray-50 px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#5ce68b] focus:border-transparent focus:bg-white transition-all font-medium resize-none"
                                    placeholder="Hello, I'd like to discuss..."
                                    suppressHydrationWarning
                                />
                            </div>

                            <button
                                type="submit"
                                disabled={status === "submitting"}
                                suppressHydrationWarning
                                className="w-full inline-flex items-center justify-center gap-2 mt-4 px-8 py-4 rounded-xl bg-[#111111] hover:bg-[#5ce68b] text-white hover:text-[#111111] text-sm font-black uppercase tracking-widest transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
                            >
                                {status === "submitting" ? (
                                    "Sending..."
                                ) : (
                                    <>Send Message <Send className="ml-2 w-4 h-4" /></>
                                )}
                            </button>

                            {status === "success" && (
                                <div className="p-4 bg-green-50 border border-green-200 rounded-xl mt-4">
                                    <p className="text-green-700 text-sm font-bold text-center">
                                        Message sent successfully! I'll get back to you soon.
                                    </p>
                                </div>
                            )}
                            {status === "error" && (
                                <div className="p-4 bg-red-50 border border-red-200 rounded-xl mt-4">
                                    <p className="text-red-700 text-sm font-bold text-center">
                                        Something went wrong. Please try again or use direct email.
                                    </p>
                                </div>
                            )}
                        </form>
                    </motion.div>
                </div>
            </div>
        </Section>
    );
}

function ContactItem({ icon, label, value, color }: { icon: React.ReactNode; label: string; value: string; color: string }) {
    return (
        <div className="flex items-center gap-4 group cursor-default p-2 rounded-xl hover:bg-gray-50 transition-colors w-full">
            <div className={`w-12 h-12 rounded-xl ${color} flex-shrink-0 flex items-center justify-center text-[#111111] shadow-sm transform group-hover:scale-105 transition-transform`}>
                {icon}
            </div>
            <div className="min-w-0 flex-1 pr-2">
                <p className="text-xs font-black uppercase tracking-widest text-gray-400 mb-0.5">{label}</p>
                <p className="font-bold text-gray-800 text-[13px] md:text-sm break-all">{value}</p>
            </div>
        </div>
    );
}
