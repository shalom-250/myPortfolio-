"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
    Check, ArrowRight, Sparkles, Rocket, Zap, Shield,
    Palette, Code, Smartphone, Globe, BarChart, Lock
} from "lucide-react";

const services = [
    {
        id: "luxury-web",
        title: "Luxury Web Design",
        description: "Bespoke digital experiences for premium brands. Focused on high-end aesthetics, liquid-smooth animations, and conversion-optimized layouts.",
        icon: Palette,
        price: "From RFW 5,000,000",
        features: ["Custom visual identity", "Framr Motion animations", "Liquid responsiveness", "SEO optimization"]
    },
    {
        id: "full-stack",
        title: "Full-Stack Platforms",
        description: "Complex, scalable web applications built with Next.js and NestJS. Including robust backend architecture, databases, and secure APIs.",
        icon: Code,
        price: "From RFW 15,000,000",
        features: ["NestJS/Node.js backend", "Prisma/PostgreSQL", "Real-time updates", "Cloud deployment"]
    },
    {
        id: "mobile-apps",
        title: "Mobile App Development",
        description: "High-performance native and cross-platform mobile applications using React Native and Expo. Seamless user experiences on iOS and Android.",
        icon: Smartphone,
        price: "From RFW 10,000,000",
        features: ["Native performance", "Push notifications", "App Store deployment", "Offline support"]
    },
    {
        id: "consulting",
        title: "Technical Consulting",
        description: "Strategic advice on software architecture, performance optimization, and scaling digital products for enterprise growth.",
        icon: Globe,
        price: "RFW 1,000,000 / Session",
        features: ["Architecture review", "Performance audit", "Team mentoring", "Tech stack migration"]
    }
];

export default function ServicesPage() {
    return (
        <div className="pt-32 pb-24 min-h-screen bg-background text-foreground">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h1 className="text-4xl md:text-7xl font-heading font-extrabold mb-6">
                        Elite <span className="text-accent-red">Services</span>
                    </h1>
                    <p className="text-muted text-lg max-w-2xl mx-auto">
                        Precision engineering and luxury design tailored to your vision.
                        I build platforms that don't just work—they wow.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-secondary p-10 rounded-3xl relative group border border-border/50 hover:border-accent-red/30 transition-all hover:translate-y-[-4px]"
                        >
                            <div className="w-16 h-16 bg-accent-red/10 rounded-2xl flex items-center justify-center text-accent-red mb-8 group-hover:scale-110 transition-transform">
                                <service.icon size={32} />
                            </div>

                            <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                            <p className="text-muted text-lg mb-8 leading-relaxed">
                                {service.description}
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                                {service.features.map((feature) => (
                                    <div key={feature} className="flex items-center text-foreground/80">
                                        <Check size={18} className="text-accent-red mr-3" />
                                        <span className="text-sm font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="flex flex-col sm:flex-row items-center justify-between pt-8 border-t border-border/50 gap-6">
                                <div className="text-xl font-bold text-accent-red">{service.price}</div>
                                <Link
                                    href={`/services/${service.id}`}
                                    className="w-full sm:w-auto px-8 py-3 bg-accent-red hover:bg-red-600 text-white rounded-2xl font-bold flex items-center justify-center transition-all shadow-lg shadow-red-500/10"
                                >
                                    Get Details <ArrowRight size={20} className="ml-2" />
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
