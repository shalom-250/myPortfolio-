"use client";

import { use } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Monitor, Smartphone, Layout } from "lucide-react";
import { FaGithub } from "react-icons/fa";

// This would ideally come from a data file or API
const projects = [
    {
        id: 1,
        title: "FinTech Platform",
        category: "Full Stack",
        description: "A comprehensive fintech solution for modern asset management.",
        details: "Built with Next.js 14 and NestJS, this platform features real-time market data, secure transaction processing, and a multi-currency wallet system. The design follows a strict minimalist luxury aesthetic to cater to high-net-worth individuals.",
        tech: ["Next.js", "NestJS", "PostgreSQL", "Tailwind CSS", "Framer Motion"],
        stats: [
            { label: "Performance", value: "98/100" },
            { label: "Security", value: "AES-256" },
            { label: "Active Users", value: "10K+" }
        ]
    },
    {
        id: 2,
        title: "Luxury E-Commerce",
        category: "Web App",
        usp: "Premium User Experience Design & Development",
        description: "A high-end retail experience for premium fashion brands.",
        details: "This bespoke e-commerce platform focuses on visual storytelling and cinematic product reveals. Featuring a custom headless CMS integration and a high-performance checkout flow optimized for conversions.",
        tech: ["React", "Next.js", "Shopify Engine", "Framer Motion", "Stripe"],
        stats: [
            { label: "Lighthouse", value: "100/100" },
            { label: "Conversions", value: "+45%" },
            { label: "Mobile Ready", value: "100%" }
        ]
    }
];

export default function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    // Find project by ID
    const project = projects.find(p => p.id === parseInt(id)) || projects[0];

    const isLuxuryProject = project.id === 2;

    return (
        <div className="pt-32 pb-24 min-h-screen bg-background">
            <div className="container mx-auto px-6">
                <Link
                    href="/#projects"
                    className="inline-flex items-center text-muted hover:text-accent-red transition-colors mb-12 group"
                >
                    <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Projects
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="px-4 py-1.5 bg-accent-red/10 text-accent-red rounded-full text-sm font-bold uppercase tracking-widest mb-6 inline-block">
                            {project.category}
                        </span>
                        <h1 className="text-5xl md:text-7xl font-heading font-extrabold mb-8 leading-tight">
                            {project.title}
                        </h1>

                        {isLuxuryProject && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                className="mb-10 p-6 bg-accent-red/10 border-l-4 border-accent-red rounded-r-2xl"
                            >
                                <p className="text-xl font-heading font-bold text-accent-red uppercase tracking-tighter">
                                    Premium User Experience Design & Development
                                </p>
                            </motion.div>
                        )}

                        <p className="text-xl text-muted mb-10 leading-relaxed">
                            {project.details}
                        </p>

                        <div className="grid grid-cols-3 gap-8 mb-12 border-y border-border/50 py-8">
                            {project.stats.map((stat) => (
                                <div key={stat.label}>
                                    <div className="text-3xl font-bold text-accent-red mb-1">{stat.value}</div>
                                    <div className="text-sm text-muted uppercase tracking-wider">{stat.label}</div>
                                </div>
                            ))}
                        </div>

                        <div className="flex flex-wrap gap-4 mb-12">
                            {project.tech.map((t) => (
                                <span key={t} className="px-4 py-2 bg-secondary rounded-xl text-sm font-medium border border-border/50">
                                    {t}
                                </span>
                            ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-6">
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 px-8 py-4 bg-accent-red hover:bg-red-600 text-white rounded-2xl font-bold flex items-center justify-center transition-all shadow-xl shadow-red-500/20 hover:shadow-red-500/40 hover:-translate-y-1 relative overflow-hidden group"
                            >
                                <span className="relative z-10 flex items-center">
                                    Live Preview <ExternalLink size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </span>
                                <motion.div
                                    className="absolute inset-0 bg-white/20"
                                    initial={{ x: "-100%" }}
                                    whileHover={{ x: "100%" }}
                                    transition={{ duration: 0.6, ease: "easeInOut" }}
                                />
                            </a>
                            <a
                                href="#"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex-1 px-8 py-4 bg-secondary hover:bg-secondary/80 text-foreground py-4 rounded-2xl font-bold flex items-center justify-center transition-all border border-border/50 hover:-translate-y-1"
                            >
                                Source Code <FaGithub size={20} className="ml-2" />
                            </a>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative rounded-3xl overflow-hidden bg-secondary border border-border/50 aspect-video group"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-accent-red/10 to-transparent"></div>
                        <div className="absolute inset-0 flex items-center justify-center">
                            <div className="flex space-x-12">
                                <Monitor size={120} className="text-accent-red/20" />
                                <Smartphone size={120} className="text-accent-red/10" />
                            </div>
                        </div>
                        <div className="absolute bottom-8 left-8 right-8 p-6 bg-background/80 backdrop-blur-md rounded-2xl border border-white/10 opacity-0 group-hover:opacity-100 transition-opacity">
                            <p className="text-sm font-medium text-foreground">Premium User Experience Design & Development</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
