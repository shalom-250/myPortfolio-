"use client";

import { motion } from "framer-motion";
import { Server, Smartphone, Layout, Database } from "lucide-react";
import { FaAws } from "react-icons/fa";
import {
    SiReact, SiNextdotjs, SiTailwindcss, SiFramer,
    SiNodedotjs, SiNestjs, SiLaravel, SiPython, SiGraphql,
    SiExpo, SiSwift, SiKotlin, SiPwa,
    SiPostgresql, SiMongodb, SiRedis, SiDocker
} from "react-icons/si";

const skills = [
    {
        category: "Frontend",
        icon: Layout,
        items: [
            { name: "React", icon: SiReact },
            { name: "Next.js", icon: SiNextdotjs },
            { name: "Tailwind", icon: SiTailwindcss },
            { name: "Framer", icon: SiFramer },
            { name: "Zustand", icon: SiReact } // Fallback to React icon for state
        ]
    },
    {
        category: "Backend",
        icon: Server,
        items: [
            { name: "Node.js", icon: SiNodedotjs },
            { name: "NestJS", icon: SiNestjs },
            { name: "Laravel", icon: SiLaravel },
            { name: "Python", icon: SiPython },
            { name: "GraphQL", icon: SiGraphql }
        ]
    },
    {
        category: "Mobile",
        icon: Smartphone,
        items: [
            { name: "Native", icon: SiReact },
            { name: "Expo", icon: SiExpo },
            { name: "Swift", icon: SiSwift },
            { name: "Kotlin", icon: SiKotlin },
            { name: "PWA", icon: SiPwa }
        ]
    },
    {
        category: "DevOps & DB",
        icon: Database,
        items: [
            { name: "PostgreSQL", icon: SiPostgresql },
            { name: "MongoDB", icon: SiMongodb },
            { name: "Redis", icon: SiRedis },
            { name: "Docker", icon: SiDocker },
            { name: "AWS", icon: FaAws }
        ]
    },
];

export default function About() {
    return (
        <section id="about" className="py-24 bg-secondary relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
                        About <span className="text-accent-red">Me</span>
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
                            className="bg-background rounded-2xl p-6 hover:translate-y-[-4px] transition-all group shadow-sm hover:shadow-md border-t-2 border-accent-red/20 hover:border-accent-red"
                        >
                            <skill.icon className="w-10 h-10 text-accent-red mb-6 group-hover:scale-110 transition-transform" />
                            <h3 className="text-xl font-semibold text-foreground mb-4">{skill.category}</h3>
                            <div className="flex flex-wrap gap-3">
                                {skill.items.map((item) => (
                                    <span
                                        key={item.name}
                                        className="flex items-center space-x-2 px-3 py-1.5 bg-secondary/50 text-muted hover:text-accent-red hover:bg-accent-red/5 text-xs font-medium rounded-lg transition-all border border-transparent hover:border-accent-red/20"
                                    >
                                        <item.icon size={14} />
                                        <span>{item.name}</span>
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Section Divider */}
            <div className="flex justify-center py-12">
                <div className="h-px w-32 bg-gradient-to-r from-transparent via-accent-red/30 to-transparent"></div>
            </div>
        </section>
    );
}
