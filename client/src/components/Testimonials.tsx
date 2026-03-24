"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import Image from "next/image";

const testimonials = [
    {
        name: "Sarah Johnson",
        role: "CEO, TechFlow",
        content: "Working with Shalom was a game-changer for our platform. The attention to detail and engineering excellence is second to none.",
        avatar: "/testimonials/avatar1.jpg",
        rating: 5
    },
    {
        name: "David Chen",
        role: "Founder, Zenith AI",
        content: "The luxury aesthetic they brought to our web presence immediately increased our conversion rate. Truly a top-tier developer.",
        avatar: "/testimonials/avatar2.jpg",
        rating: 5
    },
    {
        name: "Aisha Kamali",
        role: "Product Manager, Nile Pay",
        content: "Highly professional and delivered a complex fintech platform ahead of schedule. The code quality is exceptional.",
        avatar: "/testimonials/avatar3.jpg",
        rating: 5
    }
];

export default function Testimonials() {
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
                        Client <span className="text-accent-red">Testimonials</span>
                    </h2>
                    <p className="text-muted max-w-2xl mx-auto text-lg">
                        Hear from the innovators and leaders I've had the privilege to partner with.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-secondary p-8 rounded-3xl relative group hover:shadow-xl transition-all border border-border/50"
                        >
                            <Quote className="absolute top-6 right-8 w-10 h-10 text-accent-red/10 group-hover:text-accent-red/20 transition-colors" />

                            <div className="flex mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
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
                    ))}
                </div>
            </div>

            {/* Section Divider */}
            <div className="flex justify-center py-16">
                <div className="h-px w-32 bg-gradient-to-r from-transparent via-accent-red/30 to-transparent"></div>
            </div>
        </section>
    );
}
