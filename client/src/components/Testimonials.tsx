"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import Image from "next/image";

const testimonialAvatars: Record<string, string> = {
    aura: "/testimonials/avatar1.jpg",
    vanguard: "/testimonials/avatar2.jpg",
    nimbus: "/testimonials/avatar3.jpg",
    // Mapping keys to names in component for fallback
    sarah: "/testimonials/avatar1.jpg",
    david: "/testimonials/avatar2.jpg",
    aisha: "/testimonials/avatar3.jpg"
};

const testimonialRatings: Record<string, number> = {
    sarah: 5,
    david: 5,
    aisha: 5
};

import { useTranslations } from "next-intl";

export default function Testimonials() {
    const t = useTranslations("Testimonials");
    const testimonialsData = t.raw("items");
    const testimonialKeys = Object.keys(testimonialsData);

    return (
        <section id="testimonials" className="py-24 bg-background relative overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-heading font-bold mb-4">
                        {t("title")} <span className="text-accent-red">{t("client")}</span>
                    </h2>
                    <p className="text-muted max-w-2xl mx-auto text-lg">
                        {t("description")}
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonialKeys.map((key, index) => {
                        const testimonial = testimonialsData[key];
                        return (
                            <motion.div
                                key={key}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-secondary p-8 rounded-3xl relative group hover:shadow-xl transition-all border border-border/50"
                            >
                                <Quote className="absolute top-6 right-8 w-10 h-10 text-accent-red/10 group-hover:text-accent-red/20 transition-colors" />

                                <div className="flex mb-4">
                                    {[...Array(testimonialRatings[key] || 5)].map((_, i) => (
                                        <Star key={i} size={16} className="text-accent-red fill-accent-red mr-1" />
                                    ))}
                                </div>

                                <p className="text-foreground/80 mb-8 italic leading-relaxed">
                                    "{testimonial.content}"
                                </p>

                                <div className="flex items-center">
                                    <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4 border-2 border-accent-red/20">
                                        <div className="w-full h-full bg-accent-red/10 flex items-center justify-center text-accent-red font-bold">
                                            {testimonial.name.charAt(0)}
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                                        <p className="text-muted text-sm">{testimonial.role}</p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>

            {/* Section Divider */}
            <div className="flex justify-center py-16">
                <div className="h-px w-32 bg-gradient-to-r from-transparent via-accent-red/30 to-transparent"></div>
            </div>
        </section>
    );
}
