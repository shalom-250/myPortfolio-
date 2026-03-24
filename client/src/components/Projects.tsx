"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";

const categories = ["All", "Web Apps", "Mobile Apps", "Systems"];

const projects = [
    {
        id: 1,
        title: "Aura E-Commerce Platform",
        category: "Web Apps",
        description: "A luxury fashion e-commerce platform with real-time inventory and modern checkout experience.",
        tech: ["Next.js", "Tailwind", "PostgreSQL", "Stripe"],
    },
    {
        id: 2,
        title: "Vanguard Fitness App",
        category: "Mobile Apps",
        description: "Cross-platform mobile application for personalized workout tracking and analytics.",
        tech: ["React Native", "NestJS", "MongoDB", "Redux"],
    },
    {
        id: 3,
        title: "Nimbus Cloud ERP",
        category: "Systems",
        description: "Enterprise resource planning system with modular architecture and role-based access.",
        tech: ["React", "Go", "PostgreSQL", "Docker"],
    },
    {
        id: 4,
        title: "Luxe Real Estate",
        category: "Web Apps",
        description: "High-end real estate listing platform with interactive maps and animated transitions.",
        tech: ["Vue.js", "Laravel", "MySQL", "AWS S3"],
    },
];

export default function Projects() {
    const [filter, setFilter] = useState("All");

    const filteredProjects = filter === "All"
        ? projects
        : projects.filter(p => p.category === filter);

    return (
        <section id="projects" className="py-32 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="flex flex-col md:flex-row md:items-end justify-between mb-16"
                >
                    <div className="max-w-2xl">
                        <h2 className="text-4xl md:text-6xl font-heading font-extrabold mb-6">
                            Selected <span className="text-accent">Work</span>
                        </h2>
                        <p className="text-muted text-lg">
                            A collection of digital experiences I've engineered.
                            Translating complex problems into elegant, scalable solutions.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-2 mt-8 md:mt-0">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setFilter(cat)}
                                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${filter === cat
                                        ? "bg-accent text-white shadow-[0_0_15px_rgba(237,112,20,0.4)]"
                                        : "bg-white/5 text-muted hover:bg-white/10 hover:text-white border border-white/5"
                                    }`}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>
                </motion.div>

                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <AnimatePresence mode="popLayout">
                        {filteredProjects.map((project) => (
                            <motion.div
                                key={project.id}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4 }}
                                className="group relative bg-secondary/20 border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-colors"
                            >
                                <div className="relative h-72 w-full bg-gradient-to-br from-white/5 to-white/0 overflow-hidden flex items-center justify-center">
                                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent opacity-50"></div>
                                    <span className="text-5xl md:text-6xl font-heading font-bold text-white/10 group-hover:text-white/20 transition-colors duration-500 z-10">
                                        {project.title.split(' ')[0]}
                                    </span>

                                    {/* Overlay on hover */}
                                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm z-20">
                                        <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-accent transition-all transform -translate-y-4 group-hover:translate-y-0 duration-300 delay-100">
                                            <ExternalLink size={20} />
                                        </a>
                                        <a href="#" className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white hover:bg-accent transition-all transform translate-y-4 group-hover:translate-y-0 duration-300 delay-150">
                                            <Github size={20} />
                                        </a>
                                    </div>
                                </div>

                                <div className="p-8">
                                    <div className="flex justify-between items-start mb-4">
                                        <h3 className="text-2xl font-bold font-heading text-white group-hover:text-accent transition-colors">
                                            {project.title}
                                        </h3>
                                        <span className="text-xs font-medium px-3 py-1 bg-white/5 text-muted rounded-full whitespace-nowrap ml-4">
                                            {project.category}
                                        </span>
                                    </div>
                                    <p className="text-muted mb-6 leading-relaxed">
                                        {project.description}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {project.tech.map((t) => (
                                            <span key={t} className="text-xs font-medium px-3 py-1 bg-accent/10 text-accent rounded-full border border-accent/20">
                                                {t}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
}
