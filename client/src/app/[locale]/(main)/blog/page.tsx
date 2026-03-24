"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, Clock, User } from "lucide-react";

const posts = [
    {
        id: 1,
        title: "The Future of Luxury Web Design in 2026",
        excerpt: "Discover how AI and minimalist aesthetics are reshaping the high-end digital landscape...",
        date: "March 20, 2026",
        author: "Shalom",
        readTime: "5 min read",
        category: "Design"
    },
    {
        id: 2,
        title: "Building Scalable Platforms with NestJS and Next.js",
        excerpt: "A deep dive into the architectural patterns used for high-performance full-stack applications...",
        date: "March 15, 2026",
        author: "Shalom",
        readTime: "8 min read",
        category: "Engineering"
    },
    {
        id: 3,
        title: "Why Minimalism is the Ultimate Luxury",
        excerpt: "Exploring the 'less is more' philosophy in digital products and how it drives premium value...",
        date: "March 10, 2026",
        author: "Shalom",
        readTime: "4 min read",
        category: "Philosophy"
    }
];

export default function BlogPage() {
    return (
        <div className="pt-32 pb-24 min-h-screen bg-background">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
                    <h1 className="text-4xl md:text-7xl font-heading font-extrabold mb-6">
                        The <span className="text-accent-red">Blog</span>
                    </h1>
                    <p className="text-muted text-lg max-w-2xl mx-auto">
                        Insights, tutorials, and reflections on design, engineering, and digital growth.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {posts.map((post, index) => (
                        <motion.article
                            key={post.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            className="bg-secondary rounded-3xl overflow-hidden group hover:translate-y-[-8px] transition-all border border-border/50"
                        >
                            <div className="p-8">
                                <div className="flex items-center justify-between mb-6">
                                    <span className="px-3 py-1 bg-accent-red/10 text-accent-red rounded-full text-xs font-bold uppercase tracking-wider">
                                        {post.category}
                                    </span>
                                    <div className="flex items-center text-muted text-xs">
                                        <Clock size={14} className="mr-1" /> {post.readTime}
                                    </div>
                                </div>

                                <h2 className="text-2xl font-bold text-foreground mb-4 group-hover:text-accent-red transition-colors">
                                    {post.title}
                                </h2>

                                <p className="text-muted mb-8 line-clamp-3">
                                    {post.excerpt}
                                </p>

                                <div className="flex items-center justify-between pt-6 border-t border-border/50">
                                    <div className="flex items-center text-sm text-foreground/70">
                                        <Calendar size={14} className="mr-2" /> {post.date}
                                    </div>
                                    <Link
                                        href={`/blog/${post.id}`}
                                        className="text-accent-red font-bold flex items-center hover:opacity-80 transition-opacity"
                                    >
                                        Read More <ArrowRight size={18} className="ml-1" />
                                    </Link>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </div>
    );
}
