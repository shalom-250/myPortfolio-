"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from "./LanguageSwitcher";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
    const t = useTranslations("Navbar");
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navLinks = [
        { name: t("home"), href: "/" },
        { name: t("projects"), href: "/projects" },
        { name: t("services"), href: "/services" },
        { name: t("blog"), href: "/blog" },
        { name: t("about"), href: "/#about" },
    ];

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
            className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${scrolled
                ? "bg-background/80 backdrop-blur-xl py-4 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.3)] border-white/5"
                : "bg-background/40 backdrop-blur-md py-6 border-white/0"
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center space-x-3 group">
                    <Image src="/logo.png" alt="Shalom Dev" width={40} height={40} className="rounded-xl shadow-lg transform group-hover:scale-105 transition-transform duration-300" />
                    <span className="text-xl font-black font-heading tracking-tighter bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent group-hover:text-accent-red transition-colors">
                        SHALOM <span className="text-accent-red">DEV</span>
                    </span>
                </Link>
                <div className="hidden md:flex items-center space-x-6">
                    {navLinks.map((link, i) => (
                        <motion.div
                            key={link.name}
                            animate={{
                                scale: [1, 1.05, 1],
                                opacity: [0.8, 1, 0.8]
                            }}
                            transition={{
                                duration: 3,
                                repeat: Infinity,
                                repeatDelay: 7, // Total cycle = 10s
                                delay: i * 0.1
                            }}
                        >
                            <Link
                                href={link.href}
                                className="text-sm font-medium text-foreground hover:text-accent-red transition-colors whitespace-nowrap"
                            >
                                {link.name}
                            </Link>
                        </motion.div>
                    ))}
                    <div className="flex items-center space-x-4 border-l border-white/10 pl-6">
                        <LanguageSwitcher />
                        <Link
                            href="/login"
                            className="text-sm font-bold text-foreground/80 hover:text-accent-red transition-all px-2"
                        >
                            {t("portal")}
                        </Link>
                        <Link
                            href="#contact"
                            className="px-6 py-2.5 bg-accent-red hover:bg-red-600 text-white text-sm font-medium rounded-full transition-all shadow-[0_0_15px_rgba(255,49,49,0.3)] hover:shadow-[0_0_25px_rgba(255,49,49,0.5)] transform hover:-translate-y-0.5"
                        >
                            {t("hireMe")}
                        </Link>
                    </div>
                </div>
                <button
                    className="md:hidden text-foreground p-2 rounded-full hover:bg-accent-red/10 transition-colors"
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
                            <div className="pt-4 border-t border-border flex flex-col space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-medium text-muted">{t("themeMode")}</span>
                                    <ThemeToggle />
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-medium text-muted">{t("language")}</span>
                                    <LanguageSwitcher />
                                </div>
                                <Link
                                    href="/login"
                                    className="text-lg font-medium text-accent-red"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {t("clientPortal")}
                                </Link>
                                <Link
                                    href="#contact"
                                    className="inline-block px-8 py-3 bg-accent-red text-white text-base font-medium rounded-full text-center shadow-[0_0_15px_rgba(255,49,49,0.3)]"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {t("hireMe")}
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
