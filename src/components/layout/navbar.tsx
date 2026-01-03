"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Education", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Hackathons", href: "#hackathons" },
    { name: "Certificates", href: "#certificates" },
    { name: "Contact", href: "#contact" },
];

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={cn(
                "fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 w-[95%] max-w-4xl rounded-full border",
                scrolled
                    ? "bg-white/10 backdrop-blur-2xl border-white/20 shadow-xl shadow-black/10 py-3 px-6"
                    : "bg-white/5 backdrop-blur-xl border-white/10 shadow-lg shadow-black/5 py-4 px-4"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                <Link href="#home" className="text-xl font-bold tracking-tight">
                    Portfolio
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-6">
                    {navItems.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium hover:text-primary transition-colors"
                        >
                            {item.name}
                        </Link>
                    ))}
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="lg:hidden p-2"
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
                        className="fixed inset-0 bg-black/50 z-40 lg:hidden"
                        onClick={() => setIsOpen(false)}
                    />
                    <div className="fixed inset-y-0 right-0 w-3/4 bg-gray-900 z-50 shadow-lg lg:hidden transform transition-transform duration-300 ease-in-out translate-x-0 animate-in slide-in-from-right-full">
                        <div className="flex justify-between items-center p-4">
                            <span className="text-white text-lg font-semibold">Portfolio</span>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-white hover:text-gray-300"
                            >
                                <X className="h-6 w-6" />
                            </button>
                        </div>
                        <nav className="flex flex-col p-4 gap-2">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-white text-lg font-medium hover:bg-gray-700 rounded-lg px-4 py-3 transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </nav>
                    </div>
                </>
            )}
        </header>
    );
}
