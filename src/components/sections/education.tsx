"use client";

import { useRef, useState, useEffect } from "react";
import { Section } from "@/components/ui/section";
import { motion, useMotionValue, useSpring, animate } from "framer-motion";
import { GraduationCap, MapPin, Calendar, Star } from "lucide-react";

/* ── animated counter ── */
function Counter({ to, suffix = "" }: { to: number; suffix?: string }) {
    const [val, setVal] = useState(0);
    const ref = useRef(false);
    useEffect(() => {
        if (ref.current) return;
        ref.current = true;
        const controls = animate(0, to, {
            duration: 2,
            ease: "easeOut",
            onUpdate: (v) => setVal(parseFloat(v.toFixed(2))),
        });
        return controls.stop;
    }, [to]);
    return <>{val}{suffix}</>;
}

/* ── floating sparkle dots ── */
const SPARKS = Array.from({ length: 12 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: 2 + Math.random() * 4,
    delay: Math.random() * 4,
    dur: 2.5 + Math.random() * 3,
}));

const springCfg = { damping: 25, stiffness: 120, mass: 1.5 };

export function Education() {
    const ref = useRef<HTMLDivElement>(null);
    const rotateX = useSpring(useMotionValue(0), springCfg);
    const rotateY = useSpring(useMotionValue(0), springCfg);
    const scale = useSpring(1, springCfg);
    const glowOpacity = useSpring(0, { damping: 20, stiffness: 200 });
    const [hovered, setHovered] = useState(false);

    function handleMouse(e: React.MouseEvent<HTMLDivElement>) {
        if (!ref.current) return;
        const rect = ref.current.getBoundingClientRect();
        const ox = e.clientX - rect.left - rect.width / 2;
        const oy = e.clientY - rect.top - rect.height / 2;
        rotateX.set((oy / (rect.height / 2)) * -10);
        rotateY.set((ox / (rect.width / 2)) * 10);
    }

    return (
        <Section id="education">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">Education</h2>
                <p className="text-gray-500 text-lg">My academic background</p>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="max-w-3xl mx-auto"
                style={{ perspective: "900px" }}
            >
                {/* glow ring behind card */}
                <motion.div
                    className="absolute inset-0 rounded-3xl pointer-events-none"
                    style={{
                        opacity: glowOpacity,
                        background: "radial-gradient(ellipse at center, rgba(16,163,74,0.25) 0%, transparent 70%)",
                        filter: "blur(18px)",
                        zIndex: 0,
                    }}
                />

                <motion.div
                    ref={ref}
                    onMouseMove={handleMouse}
                    onMouseEnter={() => { scale.set(1.025); glowOpacity.set(1); setHovered(true); }}
                    onMouseLeave={() => { rotateX.set(0); rotateY.set(0); scale.set(1); glowOpacity.set(0); setHovered(false); }}
                    style={{ rotateX, rotateY, scale, transformStyle: "preserve-3d", position: "relative", zIndex: 1 }}
                    className="relative bg-white border border-gray-200 rounded-3xl p-8 md:p-10 shadow-sm overflow-hidden cursor-pointer"
                >
                    {/* animated gradient border on hover */}
                    <motion.div
                        className="absolute inset-0 rounded-3xl pointer-events-none"
                        animate={hovered
                            ? { opacity: 1, backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }
                            : { opacity: 0 }}
                        transition={{ backgroundPosition: { duration: 4, repeat: Infinity, ease: "linear" }, opacity: { duration: 0.3 } }}
                        style={{
                            padding: "2px",
                            background: "linear-gradient(270deg, #16a34a, #0891b2, #a3e635, #16a34a)",
                            backgroundSize: "400% 400%",
                            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                            WebkitMaskComposite: "destination-out",
                            maskComposite: "exclude",
                        }}
                    />

                    {/* floating sparkle dots */}
                    <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
                        {SPARKS.map((s) => (
                            <motion.div
                                key={s.id}
                                className="absolute rounded-full bg-green-400"
                                style={{ left: `${s.x}%`, top: `${s.y}%`, width: s.size, height: s.size }}
                                animate={{ opacity: [0, 0.7, 0], scale: [0.5, 1.4, 0.5], y: [0, -18, 0] }}
                                transition={{ duration: s.dur, delay: s.delay, repeat: Infinity, ease: "easeInOut" }}
                            />
                        ))}
                    </div>

                    {/* decorative blobs */}
                    <div className="absolute -top-12 -right-12 w-56 h-56 bg-green-100 rounded-full opacity-40 pointer-events-none" />
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-teal-100 rounded-full opacity-30 pointer-events-none" />

                    {/* card content */}
                    <div className="relative flex flex-col md:flex-row md:items-center gap-6">

                        {/* icon — rotates & shines on hover */}
                        <motion.div
                            animate={hovered ? { rotate: [0, -8, 8, 0], scale: 1.12 } : { rotate: 0, scale: 1 }}
                            transition={{ duration: 0.6 }}
                            className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-2xl shadow-lg shadow-green-200"
                            style={{ background: "linear-gradient(135deg, #16a34a, #0891b2)" }}
                        >
                            <GraduationCap className="w-8 h-8 text-white" />
                        </motion.div>

                        <div className="flex-grow">
                            {/* badges */}
                            <div className="flex flex-wrap items-center gap-2 mb-3">
                                <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-black text-white px-3 py-1 rounded-full">
                                    <Calendar className="w-3 h-3" /> 2023 – 2027
                                </span>
                                <motion.span
                                    animate={{ scale: [1, 1.05, 1] }}
                                    transition={{ duration: 2, repeat: Infinity }}
                                    className="inline-flex items-center gap-1.5 text-xs font-semibold bg-green-100 text-green-700 px-3 py-1 rounded-full"
                                >
                                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                    Ongoing
                                </motion.span>

                            </div>

                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">
                                Bachelor of Engineering
                            </h3>
                            <p className="text-base font-semibold text-green-600 mb-3">
                                Computer Science &amp; Engineering
                            </p>

                            <div className="flex items-center gap-1.5 text-gray-500 text-sm mb-5">
                                <MapPin className="w-4 h-4 text-gray-400 flex-shrink-0" />
                                KLE Institute of Technology, Hubli
                            </div>

                            {/* stat chips with counter animation */}
                            <div className="flex flex-wrap gap-4">
                                <motion.div
                                    whileHover={{ scale: 1.08, boxShadow: "0 0 0 2px #16a34a" }}
                                    className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 transition-shadow"
                                >
                                    <Star className="w-4 h-4 text-green-500" />
                                    <div>
                                        <p className="text-xs text-gray-400 leading-none">CGPA</p>
                                        <p className="text-sm font-bold text-gray-900">
                                            <Counter to={8.43} /> <span className="text-xs font-normal text-gray-400">/ 10</span>
                                        </p>
                                    </div>
                                </motion.div>

                                <motion.div
                                    whileHover={{ scale: 1.08, boxShadow: "0 0 0 2px #0891b2" }}
                                    className="flex items-center gap-2 bg-gray-50 border border-gray-200 rounded-xl px-4 py-2.5 transition-shadow"
                                >
                                    <GraduationCap className="w-4 h-4 text-teal-500" />
                                    <div>
                                        <p className="text-xs text-gray-400 leading-none">Semester</p>
                                        <p className="text-sm font-bold text-gray-900">
                                            6th <span className="text-xs font-normal text-gray-400">completed</span>
                                        </p>
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </motion.div>
        </Section>
    );
}
