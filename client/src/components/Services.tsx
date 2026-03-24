"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Check, ArrowRight, Sparkles, Rocket, Zap, Shield } from "lucide-react";

const services = [
    {
        id: "luxury-web",
        title: "Luxury Web Design",
        price: "From RFW 2,499,000",
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
        id: "full-stack",
        title: "Full Stack Platform",
        price: "From RFW 5,999,000",
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
        id: "mobile-apps",
        title: "Mobile App Development",
        price: "From RFW 4,999,000",
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
        <section id="services" className="py-32 bg-secondary relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-accent/5 rounded-l-full filter blur-[100px] transform translate-x-1/2 pointer-events-none"></div>

            <div className="container mx-auto px-6 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-heading font-extrabold mb-6">
                        Elite <span className="text-accent-red">Services</span>
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
                            className={`relative bg-background rounded-3xl p-8 flex flex-col transition-all shadow-sm hover:shadow-md ${service.popular
                                ? "border-t-4 border-accent-red shadow-[0_10px_40px_rgba(255,49,49,0.1)] transform md:-translate-y-4"
                                : "hover:border-t-4 hover:border-accent-red/40"
                                }`}
                        >
                            {service.popular && (
                                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                                    <span className="bg-gradient-to-r from-accent-red to-red-600 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
                                        Most Popular
                                    </span>
                                </div>
                            )}

                            <h3 className="text-2xl font-bold font-heading text-white mb-2">{service.title}</h3>
                            <p className="text-muted mb-8 pb-8 flex-grow leading-relaxed">
                                {service.description}
                            </p>

                            <ul className="space-y-4 mb-8">
                                {service.features.map((feature) => (
                                    <li key={feature} className="flex items-start">
                                        <Check size={18} className="text-accent-red mr-3 flex-shrink-0 mt-0.5" />
                                        <span className="text-foreground/80 text-sm font-medium">{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="flex flex-col space-y-3">
                                <Link
                                    href={`/services/${service.id}`}
                                    className="w-full py-4 bg-secondary hover:bg-secondary/80 text-foreground border border-border rounded-xl flex items-center justify-center font-bold transition-all"
                                >
                                    Learn More <ArrowRight size={18} className="ml-2" />
                                </Link>
                                <Link
                                    href="/#contact"
                                    className={`w-full py-4 rounded-xl flex items-center justify-center font-bold transition-all ${service.popular
                                        ? "bg-accent-red hover:bg-red-600 text-white shadow-[0_0_15px_rgba(255,49,49,0.4)]"
                                        : "bg-background hover:bg-background/80 text-foreground border border-border"
                                        }`}
                                >
                                    Request Quote
                                </Link>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="mt-16 text-center"
                >
                    <Link
                        href="/services"
                        className="inline-flex items-center text-muted hover:text-accent-red transition-colors group text-sm font-medium tracking-widest uppercase"
                    >
                        Explore All Services <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                    </Link>
                </motion.div>
            </div>

            {/* Section Divider */}
            <div className="flex justify-center py-16">
                <div className="h-px w-32 bg-gradient-to-r from-transparent via-accent-red/30 to-transparent"></div>
            </div>
        </section>
    );
}
