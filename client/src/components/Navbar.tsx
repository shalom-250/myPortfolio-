"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
    { name: "About", href: "/#about" },
    { name: "Projects", href: "/projects" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
];

import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled
                ? "bg-background/80 backdrop-blur-xl py-4 shadow-sm"
                : "bg-transparent py-6"
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="text-2xl font-heading font-bold tracking-tighter flex items-center space-x-2">
                    <Image src="/logo.png" alt="Shalom Dev" width={32} height={32} className="rounded-md" />
                    <span className="text-foreground">Shalom<span className="text-accent-red">.</span></span>
                </Link>
                <div className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium text-muted hover:text-accent-red transition-colors"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="flex items-center space-x-4">
                        <ThemeToggle />
                        <Link
                            href="#contact"
                            className="px-6 py-2.5 bg-accent-red hover:bg-red-600 text-white text-sm font-medium rounded-full transition-all shadow-[0_0_15px_rgba(255,49,49,0.3)] hover:shadow-[0_0_25px_rgba(255,49,49,0.5)] transform hover:-translate-y-0.5"
                        >
                            Hire Me
                        </Link>
                    </div>
                </div>
                <button
                    className="md:hidden text-white p-2 rounded-full hover:bg-white/5 transition-colors"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-background/95 backdrop-blur-lg border-b border-white/10 overflow-hidden"
                    >
                        <div className="px-6 py-6 flex flex-col space-y-6">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-lg font-medium text-muted hover:text-accent-red"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <div className="pt-4 border-t border-white/10">
                                <Link
                                    href="#contact"
                                    className="inline-block px-8 py-3 bg-accent-red text-white text-base font-medium rounded-full shadow-[0_0_15px_rgba(255,49,49,0.3)]"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Hire Me
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
