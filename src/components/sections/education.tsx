"use client";

import { motion } from "framer-motion";
import { Calendar, GraduationCap, MapPin, Star } from "lucide-react";
import { Section } from "@/components/ui/section";

export function Education() {
  return (
    <Section id="education" className="py-12 md:py-16 bg-[#fdfbf7]">
      <div className="text-center mb-10">
        <h2 className="text-3xl md:text-4xl font-extrabold mb-3 text-foreground tracking-tight">Education</h2>
        <p className="text-base text-gray-500 font-medium">My academic background</p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <div className="h-full bg-white rounded-[2rem] p-6 md:p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] border-[2px] border-[#f2efe9] transition-all duration-300 relative group overflow-hidden">
          
          <div className="relative flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex-shrink-0 w-16 h-16 flex items-center justify-center rounded-[1.25rem] bg-[#5ce68b] text-[#111111] shadow-sm transform group-hover:scale-105 transition-transform duration-300">
              <GraduationCap className="w-8 h-8" />
            </div>

            <div className="flex-grow">
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-black bg-[#111111] text-white px-2.5 py-1 rounded-full uppercase tracking-wider">
                  <Calendar className="w-3 h-3" /> 2023 - 2027
                </span>
                <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-xs font-black bg-[#5ce68b] text-[#111111] px-2.5 py-1 rounded-full uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#111111] animate-pulse" />
                  Ongoing
                </span>
              </div>

              <h3 className="text-2xl md:text-3xl font-extrabold text-foreground mb-1 tracking-tight">Bachelor of Engineering</h3>
              <p className="text-base md:text-lg font-bold text-[#5ce68b] mb-3">Computer Science &amp; Engineering</p>

              <div className="flex items-center gap-1.5 text-gray-500 text-sm font-medium mb-5">
                <MapPin className="w-4 h-4 text-gray-400 flex-shrink-0" />
                KLE Institute of Technology, Hubli
              </div>

              <div className="flex flex-wrap gap-3">
                <div className="flex items-center gap-2.5 bg-gray-50 border-2 border-gray-100 rounded-xl px-4 py-2 shrink-0">
                  <Star className="w-4 h-4 text-[#facc15]" />
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">CGPA</p>
                    <p className="text-sm font-black text-foreground">
                      8.43 <span className="text-[10px] font-bold text-gray-400">/ 10</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 bg-gray-50 border-2 border-gray-100 rounded-xl px-4 py-2 shrink-0">
                  <GraduationCap className="w-4 h-4 text-[#38bdf8]" />
                  <div>
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Semester</p>
                    <p className="text-sm font-black text-foreground">
                      6th <span className="text-[10px] font-bold text-gray-400">completed</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
