"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Section } from "@/components/ui/section";
import { ExternalLink, X } from "lucide-react";

const certificatesData = [
  {
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    issuer: "Oracle University",
    description:
      "Certified in foundational AI and Oracle Cloud Infrastructure concepts, covering AI principles, OCI services, and cloud-based solution patterns.",
    image: "/oracle.png",
    badge: "Completion",
    link: "https://catalog-education.oracle.com/pls/certview/sharebadge?id=3EA9F032D808B3DC6892EE9A7A41C02A9F4D905BE76AC47928E30BAD94A77AA3",
  },
  {
    title: "Cybersecurity Analyst Job Simulation",
    issuer: "Forage in collaboration with Tata",
    description:
      "Completed practical tasks in Identity and Access Management (IAM), IAM strategy assessment, custom IAM solutions, and platform integration.",
    image: "/tata.png",
    badge: "Verified",
    link: "https://www.theforage.com/simulations/tata/cybersecurity-sbda",
  },
  {
    title: "Data Structures and Algorithms in C",
    issuer: "Great Learning",
    description:
      "Learned core and advanced DSA concepts using C, including arrays, linked lists, stacks, queues, trees, sorting, and searching techniques.",
    image: "/dsa_in_c.png",
    badge: "Excellence",
    link: "https://www.mygreatlearning.com/certificate/KAFSXQDV",
  },
];

export function Certificates() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <Section id="certificates" className="py-12">
      <h2 className="text-3xl md:text-4xl font-black mb-3 text-center text-foreground tracking-tight">Certificates</h2>
      <p className="text-center text-gray-500 mb-10 text-base font-medium">My professional credentials</p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {certificatesData.map((cert, index) => {
            let badgeColor = "bg-[#5ce68b] text-[#111111]";
            if (cert.badge === "Excellence") badgeColor = "bg-[#facc15] text-[#111111]";
            if (cert.badge === "Verified") badgeColor = "bg-[#38bdf8] text-[#111111]";

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <div className="flex items-center gap-3 sm:gap-4 bg-white rounded-2xl p-3 shadow-sm border-2 border-gray-100 hover:border-gray-300 hover:shadow-md transition-all duration-200 group">
                  {/* Thumbnail Image - Clicking opens lightbox */}
                  <div 
                      className="relative w-14 sm:w-16 h-14 sm:h-12 flex-shrink-0 rounded-lg overflow-hidden bg-gray-50 border border-gray-100 cursor-zoom-in"
                      onClick={() => setSelectedImage(cert.image)}
                      title="View Certificate Image"
                  >
                      <Image src={cert.image} alt={cert.title} fill className="object-cover group-hover:scale-110 transition-transform duration-300" />
                      <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors flex items-center justify-center" />
                  </div>
                  
                  {/* Content Container - Clicking goes to link */}
                  <a 
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-grow min-w-0 flex flex-col justify-center cursor-pointer"
                  >
                    <h3 className="text-xs sm:text-sm font-black text-foreground line-clamp-2 group-hover:text-black transition-colors" title={cert.title}>
                      {cert.title}
                    </h3>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mt-1 w-full">
                        <span className="text-[10px] sm:text-xs font-bold text-gray-400 truncate w-full sm:w-auto flex-grow">{cert.issuer}</span>
                        <span className={`self-start sm:self-auto px-2 py-0.5 rounded-full ${badgeColor} text-[8px] sm:text-[9px] font-black uppercase tracking-wider flex-shrink-0`}>
                            {cert.badge}
                        </span>
                    </div>
                  </a>

                  {/* Icon */}
                  <a 
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden sm:block flex-shrink-0 mr-1"
                  >
                    <ExternalLink className="w-4 h-4 text-gray-300 group-hover:text-black flex-shrink-0 transition-colors" />
                  </a>
                </div>
              </motion.div>
            );
        })}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 sm:p-8 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full bg-transparent rounded-2xl overflow-hidden shadow-2xl flex items-center justify-center cursor-default"
            >
              <button 
                 onClick={() => setSelectedImage(null)}
                 className="absolute top-2 right-2 sm:top-4 sm:right-4 z-10 w-10 h-10 bg-black/60 hover:bg-black text-white rounded-full flex items-center justify-center transition-all hover:scale-105"
                 title="Close"
              >
                  <X className="w-5 h-5" />
              </button>
              {/* Note: using standard img tag here prevents layout jank with unknown dimensions in a modal */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                 src={selectedImage} 
                 alt="Certificate Overlay" 
                 className="w-auto h-auto max-w-full max-h-[85vh] object-contain rounded-lg" 
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
