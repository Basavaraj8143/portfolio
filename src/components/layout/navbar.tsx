"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import CustomCursor from "@/components/ui/CustomCursor";

const navItems = [
    { name: "Home", href: "#home", id: "home" },
    { name: "About", href: "#about", id: "about" },
    { name: "Education", href: "#education", id: "education" },
    { name: "Skills", href: "#skills", id: "skills" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Hackathons", href: "#hackathons", id: "hackathons" },
    { name: "Certificates", href: "#certificates", id: "certificates" },
    { name: "Contact", href: "#contact", id: "contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState("home");
    const navRef = useRef<HTMLElement>(null);

    // Scroll → white navbar
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // IntersectionObserver → track active section
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

        return () => observers.forEach((o) => o.disconnect());
    }, []);

    return (
        <header
            ref={navRef}
            data-no-splash
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                scrolled
                    ? "bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm py-3"
                    : "bg-transparent py-4"
            )}
        >
            <CustomCursor containerRef={navRef} />
            <div className="container mx-auto px-6 max-w-6xl flex items-center justify-between">
                <Link href="#home" className="text-xl font-bold tracking-tight text-gray-900">
                    Portfolio
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-8">
                    {navItems.map((item) => {
                        const isActive = activeSection === item.id;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "text-sm font-medium transition-colors relative group",
                                    isActive ? "text-gray-900" : "text-gray-500 hover:text-gray-900"
                                )}
                            >
                                {item.name}
                                {/* Active underline */}
                                <span
                                    className={cn(
                                        "absolute -bottom-0.5 left-0 h-0.5 bg-gradient-to-r from-green-500 to-teal-500 rounded-full transition-all duration-300",
                                        isActive ? "w-full" : "w-0 group-hover:w-full"
                                    )}
                                />
                            </Link>
                        );
                    })}
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    suppressHydrationWarning
                    className="lg:hidden p-2 text-gray-700 hover:text-gray-900 transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                    aria-label="Toggle menu"
                >
                    {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                </button>
            </div>

            {/* Mobile Nav */}
            {isOpen && (
                <>
                    <div
                        className="fixed inset-0 bg-black/20 z-40 lg:hidden"
                        onClick={() => setIsOpen(false)}
                    />
                    <div className="fixed inset-y-0 right-0 w-3/4 bg-white z-50 shadow-2xl lg:hidden border-l border-gray-100">
                        <div className="flex justify-between items-center p-5 border-b border-gray-100">
                            <span className="text-gray-900 text-lg font-semibold">Portfolio</span>
                            <button onClick={() => setIsOpen(false)} className="text-gray-600 hover:text-gray-900">
                                <X className="h-6 w-6" />
                            </button>
                        </div>
                        <nav className="flex flex-col p-5 gap-1">
                            {navItems.map((item) => {
                                const isActive = activeSection === item.id;
                                return (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={cn(
                                            "text-base font-medium rounded-lg px-4 py-3 transition-colors",
                                            isActive
                                                ? "bg-green-50 text-green-700 font-semibold"
                                                : "text-gray-700 hover:bg-gray-50"
                                        )}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                );
                            })}
                        </nav>
                    </div>
                </>
            )}
        </header>
    );
}
