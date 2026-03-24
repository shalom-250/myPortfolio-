"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Layout, ExternalLink, Filter } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const projects = [
    {
        id: 1,
        title: "FinTech Platform",
        category: "Systems",
        description: "A comprehensive fintech solution for modern asset management.",
        tech: ["Next.js", "NestJS", "PostgreSQL"],
    },
    {
        id: 2,
        title: "E-Commerce Luxury",
        category: "Web Apps",
        description: "High-end shopping experience with seamless animations.",
        tech: ["React", "Tailwind", "Framer"],
    },
    {
        id: 3,
        title: "AI Dashboard",
        category: "Systems",
        description: "Intelligent analytics dashboard with real-time data visualization.",
        tech: ["Python", "React", "Radix UI"],
    },
    {
        id: 4,
        title: "Health Tracker",
        category: "Mobile Apps",
        description: "Intuitive health and fitness tracking for mobile platforms.",
        tech: ["React Native", "Firebase", "Expo"],
    }
];

const categories = ["All", "Web Apps", "Mobile Apps", "Systems"];

export default function ProjectsPage() {
    const [filter, setFilter] = useState("All");

    const filteredProjects = filter === "All"
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <div className="pt-32 pb-24 min-h-screen bg-background">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h1 className="text-4xl md:text-7xl font-heading font-extrabold mb-6">
                        The <span className="text-accent-red">Gallery</span>
                    </h1>
                    <p className="text-muted text-lg max-w-2xl mx-auto">
                        Explore the complete collection of high-performance systems and luxury interfaces I've engineered.
                    </p>
                </motion.div>

                <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
                    <Filter size={20} className="text-accent-red mr-2" />
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            suppressHydrationWarning
                            className={`px-8 py-2.5 rounded-full text-sm font-bold transition-all ${filter === cat
                                ? "bg-accent-red text-white shadow-lg shadow-red-500/20"
                                : "bg-secondary text-muted hover:text-foreground border border-border/50"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className="bg-secondary rounded-3xl overflow-hidden group border border-border/50 hover:border-accent-red/30 transition-all hover:translate-y-[-4px]"
                            >
                                <div className="p-10">
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="px-4 py-1.5 bg-accent-red/10 text-accent-red rounded-full text-xs font-bold uppercase tracking-widest">
                                            {project.category}
                                        </div>
                                        <div className="flex space-x-3">
                                            <FaGithub size={20} className="text-muted hover:text-foreground cursor-pointer transition-colors" />
                                            <ArrowRight size={20} className="text-muted" />
                                        </div>
                                    </div>

                                    <h2 className="text-3xl font-bold mb-4 group-hover:text-accent-red transition-colors">
                                        {project.title}
                                    </h2>

                                    <p className="text-muted text-lg mb-8 leading-relaxed">
                                        {project.description}
                                    </p>

                                    <div className="flex flex-wrap gap-3 mb-10">
                                        {project.tech.map((t) => (
                                            <span key={t} className="text-sm font-medium px-4 py-1.5 bg-background rounded-xl border border-border/50">
                                                {t}
                                            </span>
                                        ))}
                                    </div>

                                    <Link
                                        href={`/projects/${project.id}`}
                                        className="inline-flex items-center px-8 py-3 bg-accent-red hover:bg-red-600 text-white rounded-2xl font-bold transition-all shadow-lg shadow-red-500/10"
                                    >
                                        View Case Study <Layout size={18} className="ml-2" />
                                    </Link>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
}
