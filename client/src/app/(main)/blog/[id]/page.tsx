"use client";

import { use } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, User, Share2, Tag } from "lucide-react";

export default function BlogPost({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    return (
        <div className="pt-32 pb-24 min-h-screen bg-background text-foreground">
            <article className="container mx-auto px-6 max-w-4xl">
                <Link
                    href="/blog"
                    className="inline-flex items-center text-muted hover:text-accent-red transition-colors mb-12 group"
                >
                    <ArrowLeft size={20} className="mr-2 group-hover:-translate-x-1 transition-transform" /> Back to Blog
                </Link>

                <motion.header
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <div className="flex items-center space-x-4 mb-8">
                        <span className="px-4 py-1.5 bg-accent-red/10 text-accent-red rounded-full text-xs font-bold uppercase tracking-widest">
                            Design
                        </span>
                        <div className="flex items-center text-muted text-sm">
                            <Calendar size={16} className="mr-2" /> March 20, 2026
                        </div>
                        <div className="flex items-center text-muted text-sm">
                            <Clock size={16} className="mr-2" /> 5 min read
                        </div>
                    </div>

                    <h1 className="text-4xl md:text-6xl font-heading font-extrabold mb-10 leading-tight">
                        The Future of Luxury Web Design in 2026
                    </h1>

                    <div className="flex items-center justify-between py-8 border-y border-border/50">
                        <div className="flex items-center">
                            <div className="w-12 h-12 bg-accent-red/10 rounded-full flex items-center justify-center text-accent-red font-bold mr-4">
                                S
                            </div>
                            <div>
                                <div className="font-bold text-foreground">Shalom</div>
                                <div className="text-xs text-muted">Full Stack Developer</div>
                            </div>
                        </div>
                        <button className="p-3 bg-secondary rounded-full hover:bg-secondary/80 transition-all border border-border/50">
                            <Share2 size={20} />
                        </button>
                    </div>
                </motion.header>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="prose prose-invert prose-lg max-w-none prose-headings:font-heading prose-headings:text-foreground prose-p:text-foreground/80"
                >
                    <p className="text-2xl font-medium leading-relaxed mb-12 text-foreground">
                        In the rapidly evolving world of digital experiences, the concept of "luxury" is undergoing a profound transformation. As we move into 2026, the intersection of advanced engineering and minimalist aesthetics is creating a new standard for premium design.
                    </p>

                    <h2 className="text-3xl font-bold mb-6 mt-12">The Shift to Meaningful Minimalism</h2>
                    <p className="mb-8">
                        Luxury is no longer about excess or complex gradients. In 2026, it is about intentionality and clarity. A premium digital experience is one that respects the user's focus, providing a seamless path to value without the "noise" of traditional web elements.
                    </p>

                    <blockquote className="border-l-4 border-accent-red pl-8 my-12 italic text-2xl font-light text-foreground/90">
                        "The ultimate luxury is peace of mind. In design, this translates to an interface that is so intuitive and clean that it feels like second nature."
                    </blockquote>

                    <h2 className="text-3xl font-bold mb-6 mt-12">AI as a Design Partner</h2>
                    <p className="mb-8">
                        Artificial Intelligence is not replacing the designer; it is elevating the designer's ability to create hyper-personalized experiences. By analyzing user behavior in real-time, we can now adapt layouts, typography, and even color palettes to suit the individual's context, making every interaction feel custom-built.
                    </p>

                    <div className="my-16 bg-secondary p-12 rounded-3xl border border-border/50">
                        <h3 className="text-2xl font-bold mb-4">Key Takeaways for 2026</h3>
                        <ul className="space-y-4 text-foreground/80 list-disc pl-6">
                            <li>Prioritize negative space to enhance focus and premium feel.</li>
                            <li>Integrate micro-animations that provide functional feedback, not just visual flair.</li>
                            <li>Develop with a mobile-first, high-performance mindset to ensure seamlessness on all devices.</li>
                        </ul>
                    </div>
                </motion.div>

                <footer className="mt-20 pt-12 border-t border-border/50">
                    <div className="flex items-center space-x-6">
                        <div className="flex items-center text-muted hover:text-accent-red cursor-pointer transition-colors">
                            <Tag size={16} className="mr-2" /> Design
                        </div>
                        <div className="flex items-center text-muted hover:text-accent-red cursor-pointer transition-colors">
                            <Tag size={16} className="mr-2" /> Luxury
                        </div>
                        <div className="flex items-center text-muted hover:text-accent-red cursor-pointer transition-colors">
                            <Tag size={16} className="mr-2" /> 2026
                        </div>
                    </div>
                </footer>
            </article>
        </div>
    );
}
