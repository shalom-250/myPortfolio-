"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import Link from "next/link";

const services = [
    {
        title: "Luxury Web Design",
        price: "From $2,499",
        description: "Premium, high-performance websites with stunning visuals and micro-interactions.",
        features: [
            "Custom UI/UX Design",
            "Framer Motion Animations",
            "SEO Optimization",
            "Responsive PWA",
            "CMS Integration"
        ],
        popular: false,
    },
    {
        title: "Full Stack Platform",
        price: "From $5,999",
        description: "Scalable web applications with complex backends, databases, and APIs.",
        features: [
            "Everything in Web Design",
            "Custom Backend Architecture",
            "Database Strategy",
            "Authentication & Security",
            "Payment Gateway Integration"
        ],
        popular: true,
    },
    {
        title: "Mobile App Development",
        price: "From $4,999",
        description: "Cross-platform mobile applications for iOS and Android with native performance.",
        features: [
            "React Native / Expo",
            "App Store Deployment",
            "Push Notifications",
            "Offline Sync",
            "Real-time Features"
        ],
        popular: false,
    }
];

export default function Services() {
    return (
        <section id="services" className="py-32 bg-secondary/10 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 rounded-l-full filter blur-[100px] transform translate-x-1/2"></div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-heading font-extrabold mb-6">
                        Elite <span className="text-accent">Services</span>
                    </h2>
                    <p className="text-muted text-lg max-w-2xl mx-auto">
                        Comprehensive solutions tailored for high-end clients.
                        From luxury landing pages to enterprise-grade platforms.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className={`relative bg-background border rounded-3xl p-8 flex flex-col ${service.popular
                                    ? "border-accent shadow-[0_0_30px_rgba(237,112,20,0.15)] transform md:-translate-y-4"
                                    : "border-white/10 hover:border-white/20"
                                }`}
                        >
                            {service.popular && (
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <span className="bg-gradient-to-r from-accent to-orange-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                                        Most Popular
                                    </span>
                                </div>
                            )}

                            <h3 className="text-2xl font-bold font-heading text-white mb-2">{service.title}</h3>
                            <div className="text-3xl font-bold text-accent mb-4">{service.price}</div>
                            <p className="text-muted mb-8 pb-8 border-b border-white/10 flex-grow leading-relaxed">
                                {service.description}
                            </p>

                            <ul className="space-y-4 mb-8">
                                {service.features.map((feature) => (
                                    <li key={feature} className="flex items-start">
                                        <CheckCircle2 size={20} className="text-accent mr-3 flex-shrink-0 mt-0.5" />
                                        <span className="text-white/80 text-sm font-medium">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <Link
                                href="#contact"
                                className={`w-full py-4 rounded-xl flex items-center justify-center font-medium transition-all ${service.popular
                                        ? "bg-accent hover:bg-orange-600 text-white shadow-[0_0_15px_rgba(237,112,20,0.4)]"
                                        : "bg-white/5 hover:bg-white/10 text-white border border-white/10"
                                    }`}
                            >
                                Request Quote <ArrowRight size={18} className="ml-2" />
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
