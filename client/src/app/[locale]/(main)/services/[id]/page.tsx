"use client";

import { use } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
    ArrowLeft, CheckCircle2, Rocket, Globe,
    ShieldCheck, BarChart3, Zap, Layers
} from "lucide-react";

export default function ServiceDetail({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    // Basic mapping for demo purposes
    const serviceData: Record<string, any> = {
        "luxury-web": {
            title: "Luxury Web Design",
            tagline: "High-end visual storytelling and conversion optimization.",
            content: "My luxury web design service is for brands that settle for nothing but the best. We focus on liquid-smooth animations, cinematic backgrounds, and typography that commands attention.",
            benefits: [
                { title: "Bespoke Design", desc: "No templates. Every pixel is crafted from scratch to align with your brand." },
                { title: "Fluid Motion", desc: "Framer Motion and GSAP integrations for a premium, interactive feel." },
                { title: "Speed First", desc: "95+ Lighthouse scores guaranteed for seamless user experience." }
            ]
        },
        "full-stack": {
            title: "Full-Stack Platforms",
            tagline: "Robust architecture meeting world-class interface.",
            content: "From real-time fintech dashboards to complex e-commerce engines, I build scalable systems using Next.js, NestJS, and PostgreSQL.",
            benefits: [
                { title: "Scalable Core", desc: "Microservices or monoliths designed for enterprise growth." },
                { title: "Real-time Sync", desc: "WebSockets and real-time data handling for modern apps." },
                { title: "Secure APIs", desc: "JWT, OAuth, and field-level encryption for mission-critical data." }
            ]
        }
    };

    const service = serviceData[id] || serviceData["luxury-web"];

    return (
        <div className="pt-32 pb-24 min-h-screen bg-background">
            <div className="container mx-auto px-6 max-w-5xl">
                <Link
                    href="/services"
                    className="inline-flex items-center text-muted hover:text-accent-red transition-colors mb-12 group"
                >
                    <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Services
                </Link>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1 className="text-5xl md:text-8xl font-heading font-extrabold mb-6 leading-tight">
                        {service.title.split(" ").slice(0, -1).join(" ")} <span className="text-accent-red">{service.title.split(" ").pop()}</span>
                    </h1>
                    <p className="text-2xl text-muted mb-16 max-w-3xl leading-relaxed">
                        {service.tagline}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
                        {service.benefits.map((benefit: any, index: number) => (
                            <motion.div
                                key={benefit.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                                className="bg-secondary p-8 rounded-3xl border border-border/50"
                            >
                                <Zap className="text-accent-red mb-6" size={32} />
                                <h3 className="text-xl font-bold mb-4">{benefit.title}</h3>
                                <p className="text-muted leading-relaxed">{benefit.desc}</p>
                            </motion.div>
                        ))}
                    </div>

                    <div className="bg-secondary/30 rounded-3xl p-12 border border-border/50 mb-20">
                        <div className="max-w-3xl">
                            <h2 className="text-3xl font-bold mb-8 italic">The Approach</h2>
                            <p className="text-xl text-foreground/80 leading-relaxed mb-8">
                                {service.content}
                            </p>
                            <div className="flex flex-wrap gap-12 mt-12">
                                <div className="flex items-center">
                                    <Rocket size={24} className="text-accent-red mr-3" />
                                    <span className="font-bold">Fast Delivery</span>
                                </div>
                                <div className="flex items-center">
                                    <Globe size={24} className="text-accent-red mr-3" />
                                    <span className="font-bold">Global Scale</span>
                                </div>
                                <div className="flex items-center">
                                    <ShieldCheck size={24} className="text-accent-red mr-3" />
                                    <span className="font-bold">Enterprise Security</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-center">
                        <Link
                            href="/#contact"
                            className="inline-flex px-12 py-5 bg-accent-red hover:bg-red-600 text-white rounded-2xl font-bold text-xl transition-all shadow-xl shadow-red-500/20"
                        >
                            Start a Project Now
                        </Link>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
