"use client";

import { motion } from "framer-motion";
import { Server, Smartphone, Layout, Database } from "lucide-react";

const skills = [
    { category: "Frontend", icon: Layout, items: ["React", "Next.js", "Tailwind CSS", "Framer Motion", "Zustand"] },
    { category: "Backend", icon: Server, items: ["Node.js", "NestJS", "Laravel", "Python", "GraphQL"] },
    { category: "Mobile", icon: Smartphone, items: ["React Native", "Expo", "Swift", "Kotlin", "PWA"] },
    { category: "DevOps & DB", icon: Database, items: ["PostgreSQL", "MongoDB", "Redis", "Docker", "AWS"] },
];

export default function About() {
    return (
        <section id="about" className="py-24 bg-secondary/5 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
                        About <span className="text-accent">Me</span>
                    </h2>
                    <p className="text-muted max-w-2xl mx-auto text-lg leading-relaxed">
                        I'm a full-stack developer dedicated to building premium digital experiences.
                        I bridge the gap between complex engineering and elegant design.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {skills.map((skill, index) => (
                        <motion.div
                            key={skill.category}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors group"
                        >
                            <skill.icon className="w-10 h-10 text-accent mb-6 group-hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-semibold text-white mb-4">{skill.category}</h3>
                            <div className="flex flex-wrap gap-2">
                                {skill.items.map((item) => (
                                    <span
                                        key={item}
                                        className="px-3 py-1 bg-white/5 text-muted text-sm rounded-full border border-white/5"
                                    >
                                        {item}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
