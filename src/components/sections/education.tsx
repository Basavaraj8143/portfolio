"use client";

import { useEffect, useRef, useState } from "react";
import { animate, motion, useMotionValue, useSpring } from "framer-motion";
import { Calendar, GraduationCap, MapPin, Star } from "lucide-react";
import { Section } from "@/components/ui/section";

function Counter({ to }: { to: number }) {
  const [val, setVal] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (hasAnimated.current) return;
    hasAnimated.current = true;

    const controls = animate(0, to, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (v) => setVal(Number(v.toFixed(2))),
    });

    return controls.stop;
  }, [to]);

  return <>{val}</>;
}

// Fixed spark values to keep server and client HTML identical during hydration.
const SPARKS = [
  { id: 0, x: 12.4, y: 16.8, size: 3.6, delay: 0.2, dur: 3.2 },
  { id: 1, x: 24.1, y: 71.3, size: 4.3, delay: 1.1, dur: 4.4 },
  { id: 2, x: 38.7, y: 42.9, size: 2.8, delay: 0.7, dur: 3.0 },
  { id: 3, x: 51.5, y: 83.2, size: 5.1, delay: 1.9, dur: 4.8 },
  { id: 4, x: 63.9, y: 25.4, size: 3.2, delay: 0.5, dur: 3.7 },
  { id: 5, x: 74.6, y: 58.1, size: 4.9, delay: 2.2, dur: 5.0 },
  { id: 6, x: 86.2, y: 37.6, size: 2.5, delay: 1.4, dur: 3.4 },
  { id: 7, x: 19.8, y: 90.4, size: 3.9, delay: 2.8, dur: 4.1 },
  { id: 8, x: 31.6, y: 8.5, size: 2.7, delay: 3.1, dur: 3.3 },
  { id: 9, x: 46.3, y: 63.7, size: 5.3, delay: 0.9, dur: 5.2 },
  { id: 10, x: 68.5, y: 12.9, size: 3.1, delay: 2.5, dur: 3.6 },
  { id: 11, x: 91.7, y: 76.4, size: 4.2, delay: 1.6, dur: 4.6 },
];

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
          onMouseEnter={() => {
            scale.set(1.025);
            glowOpacity.set(1);
            setHovered(true);
          }}
          onMouseLeave={() => {
            rotateX.set(0);
            rotateY.set(0);
            scale.set(1);
            glowOpacity.set(0);
            setHovered(false);
          }}
          style={{ rotateX, rotateY, scale, transformStyle: "preserve-3d", position: "relative", zIndex: 1 }}
          className="relative bg-white border border-gray-200 rounded-3xl p-8 md:p-10 shadow-sm overflow-hidden cursor-pointer"
        >
          <motion.div
            className="absolute inset-0 rounded-3xl pointer-events-none"
            animate={hovered ? { opacity: 1, backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] } : { opacity: 0 }}
            transition={{
              backgroundPosition: { duration: 4, repeat: Infinity, ease: "linear" },
              opacity: { duration: 0.3 },
            }}
            style={{
              padding: "2px",
              background: "linear-gradient(270deg, #16a34a, #0891b2, #a3e635, #16a34a)",
              backgroundSize: "400% 400%",
              WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
              WebkitMaskComposite: "destination-out",
              maskComposite: "exclude",
            }}
          />

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

          <div className="absolute -top-12 -right-12 w-56 h-56 bg-green-100 rounded-full opacity-40 pointer-events-none" />
          <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-teal-100 rounded-full opacity-30 pointer-events-none" />

          <div className="relative flex flex-col md:flex-row md:items-center gap-6">
            <motion.div
              animate={hovered ? { rotate: [0, -8, 8, 0], scale: 1.12 } : { rotate: 0, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-2xl shadow-lg shadow-green-200"
              style={{ background: "linear-gradient(135deg, #16a34a, #0891b2)" }}
            >
              <GraduationCap className="w-8 h-8 text-white" />
            </motion.div>

            <div className="flex-grow">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold bg-black text-white px-3 py-1 rounded-full">
                  <Calendar className="w-3 h-3" /> 2023 - 2027
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

              <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-1">Bachelor of Engineering</h3>
              <p className="text-base font-semibold text-green-600 mb-3">Computer Science &amp; Engineering</p>

              <div className="flex items-center gap-1.5 text-gray-500 text-sm mb-5">
                <MapPin className="w-4 h-4 text-gray-400 flex-shrink-0" />
                KLE Institute of Technology, Hubli
              </div>

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
