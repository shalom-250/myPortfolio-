"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Code2 } from "lucide-react";

const heroImages = [
    "/images/xg.png",
    "/images/gh.png",
    "/images/sa.png",
    "/images/tkv.png",
];

import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function Hero() {
    const t = useTranslations("Hero");
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentImage((prev) => (prev + 1) % heroImages.length);
        }, 10000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-32">
            {/* Cinematic Background Slideshow */}
            <div className="absolute inset-0 z-0">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={heroImages[currentImage]}
                        initial={{ opacity: 0, scale: 1.1 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                        className="absolute inset-0 w-full h-full"
                    >
                        <Image
                            src={heroImages[currentImage]}
                            alt="Hero Presentation"
                            fill
                            className="object-cover object-top"
                            sizes="100vw"
                            priority
                        />
                    </motion.div>
                </AnimatePresence>
            </div>



            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="inline-flex items-center space-x-2 bg-secondary rounded-full px-4 py-2 mb-8"
                >
                    <Code2 size={16} className="text-accent-red" />
                    <span className="text-sm font-medium text-muted tracking-wide uppercase">Shalom Dev</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold tracking-tight mb-6"
                >
                    {t("title1")} <br />
                    <span className="text-muted italic font-light">&</span>{" "}
                    <span className="text-accent-red">{t("title2")}</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="text-lg md:text-2xl text-muted max-w-3xl mx-auto mb-12 font-light leading-relaxed"
                >
                    {t("subtitle")}
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
                >
                    <Link
                        href="#contact"
                        className="w-full sm:w-auto px-8 py-4 bg-accent-red hover:bg-red-600 text-white font-medium rounded-full transition-all shadow-[0_0_20px_rgba(255,49,49,0.4)] hover:shadow-[0_0_35px_rgba(255,49,49,0.6)] flex items-center justify-center transform hover:-translate-y-1"
                    >
                        {t("hireMe")} <ArrowRight size={20} className="ml-2" />
                    </Link>
                    <Link
                        href="#projects"
                        className="w-full sm:w-auto px-8 py-4 bg-secondary/80 hover:bg-secondary border border-border/80 text-foreground font-medium rounded-full transition-all flex items-center justify-center backdrop-blur-sm shadow-sm"
                    >
                        {t("viewProjects")}
                    </Link>
                </motion.div>
            </div>

            {/* Section Divider */}
            <div className="absolute bottom-0 left-0 w-full flex justify-center pb-8">
                <div className="h-px w-32 bg-gradient-to-r from-transparent via-accent-red/30 to-transparent"></div>
            </div>
        </section>
    );
}
