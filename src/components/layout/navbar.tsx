"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import CustomCursor from "@/components/ui/CustomCursor";
import { cn } from "@/lib/utils";
import { siteData } from "@/lib/site-data";

const navItems = [
  { name: "Home", href: "#home", id: "home" },
  { name: "About", href: "#about", id: "about" },
  { name: "Education", href: "#education", id: "education" },
  { name: "Skills", href: "#skills", id: "skills" },
  { name: "Projects", href: "#projects", id: "projects" },
  { name: "Open Source", href: "#open-source", id: "open-source" },
  { name: "Hackathons", href: "#hackathons", id: "hackathons" },
  { name: "Certificates", href: "#certificates", id: "certificates" },
  { name: "Contact", href: "#contact", id: "contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navRef = useRef<HTMLElement>(null);

  // Apply solid navbar style after scrolling down.
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track the active section for nav highlighting.
  useEffect(() => {
    const sectionIds = navItems.map((item) => item.id);
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  return (
    <>
      <header
      ref={navRef}
      data-no-splash
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-white/80 backdrop-blur-md py-3"
          : "bg-white md:bg-transparent py-3 md:py-5"
      )}
    >
      <CustomCursor containerRef={navRef} />
      <div className="container mx-auto px-6 max-w-6xl flex items-center justify-between">
        <Link href="#home" className="text-xl md:text-2xl font-black tracking-tighter text-foreground hover:scale-105 transition-transform duration-300">
          {siteData.shortName}
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 bg-white px-6 py-2.5 rounded-full border border-gray-100 shadow-sm">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "text-sm font-bold transition-all relative group",
                  isActive ? "text-foreground" : "text-gray-500 hover:text-foreground"
                )}
              >
                {item.name}
                <span
                  className={cn(
                    "absolute -bottom-1 left-1/2 -translate-x-1/2 h-1 bg-[#5ce68b] rounded-t-lg transition-all duration-300",
                    isActive ? "w-1/2" : "w-0 group-hover:w-1/2"
                  )}
                />
              </Link>
            );
          })}
        </nav>

        {/* Mobile Toggle Button */}
        <button
          suppressHydrationWarning
          className="lg:hidden p-2 text-foreground active:scale-95 transition-transform"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6 stroke-[3]" /> : <Menu className="h-6 w-6 stroke-[3]" />}
        </button>
      </div>
    </header>

    {/* Mobile Nav Overlay - Moved outside <header> to prevent backdrop-blur clipping bugs */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-[100]">
          <div 
             className="absolute inset-0 bg-black/40 backdrop-blur-sm" 
             onClick={() => setIsOpen(false)} 
          />
          <div className="absolute inset-y-0 right-0 w-[80vw] max-w-sm bg-white shadow-2xl flex flex-col transform transition-transform duration-300">
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
              <span className="text-foreground text-2xl font-black tracking-tighter">{siteData.shortName}</span>
              <button 
                  onClick={() => setIsOpen(false)} 
                  className="p-2 bg-gray-50 hover:bg-gray-100 rounded-full transition-colors"
                  aria-label="Close menu"
              >
                <X className="h-5 w-5 text-foreground stroke-[3]" />
              </button>
            </div>
            <nav className="flex flex-col p-6 gap-2 overflow-y-auto">
              {navItems.map((item) => {
                const isActive = activeSection === item.id;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      "text-base md:text-lg font-black tracking-tight rounded-xl px-5 py-4 transition-all duration-300 flex items-center justify-between",
                      isActive 
                        ? "bg-[#111111] text-white shadow-lg shadow-black/10 translate-x-2" 
                        : "text-gray-500 hover:text-foreground hover:bg-gray-50 hover:translate-x-1"
                    )}
                    onClick={() => setIsOpen(false)}
                  >
                    <span>{item.name}</span>
                    {isActive && <div className="w-2 h-2 rounded-full bg-[#5ce68b]" />}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
