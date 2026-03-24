"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Code2 } from "lucide-react";

export default function Hero() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-32">
            {/* Animated Background Gradients */}
            <div className="absolute inset-0 z-0 opacity-40">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full mix-blend-screen filter blur-[128px] animate-blob"></div>
                <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-white/10 rounded-full mix-blend-screen filter blur-[128px] animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-1/4 left-1/2 w-96 h-96 bg-accent/10 rounded-full mix-blend-screen filter blur-[128px] animate-blob animation-delay-4000"></div>
            </div>

            <div className="container mx-auto px-6 relative z-10 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-2 mb-8"
                >
                    <Code2 size={16} className="text-accent" />
                    <span className="text-sm font-medium text-white/80 tracking-wide uppercase">Elite Developer</span>
                </motion.div>

                <motion.h1
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    className="text-5xl md:text-7xl lg:text-8xl font-heading font-extrabold tracking-tight mb-6"
                >
                    Full Stack Developer <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/40 italic font-light">
                        &
                    </span>{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-orange-400">
                        Mobile Specialist
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                    className="text-lg md:text-2xl text-muted max-w-3xl mx-auto mb-12 font-light leading-relaxed"
                >
                    Building Scalable Systems with Precision & Elegance.
                    Luxury Web & Mobile Experiences Engineered for Performance.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
                    className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6"
                >
                    <Link
                        href="#contact"
                        className="w-full sm:w-auto px-8 py-4 bg-accent hover:bg-orange-600 text-white font-medium rounded-full transition-all shadow-[0_0_20px_rgba(237,112,20,0.4)] hover:shadow-[0_0_35px_rgba(237,112,20,0.6)] flex items-center justify-center transform hover:-translate-y-1"
                    >
                        Hire Me <ArrowRight size={20} className="ml-2" />
                    </Link>
                    <Link
                        href="#projects"
                        className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium rounded-full transition-all flex items-center justify-center backdrop-blur-sm"
                    >
                        View Projects
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}
