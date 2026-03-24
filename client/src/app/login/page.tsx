"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Lock, Mail, ArrowRight, ArrowLeft } from "lucide-react";

export default function Login() {
    const [isLogin, setIsLogin] = useState(true);

    return (
        <div className="min-h-screen bg-background flex flex-col items-center justify-center relative overflow-hidden p-6 text-white">
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/10 via-background to-background z-0"></div>

            <Link href="/" className="absolute top-8 left-8 text-muted hover:text-white transition-colors flex items-center z-20">
                <ArrowLeft size={20} className="mr-2" /> Back to Home
            </Link>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-md bg-secondary/30 backdrop-blur-xl border border-white/10 rounded-3xl p-8 relative z-10 shadow-2xl"
            >
                <div className="text-center mb-8">
                    <Link href="/" className="text-3xl font-heading font-bold tracking-tighter mb-2 flex items-center justify-center space-x-2">
                        <Image src="/logo.png" alt="Shalom Dev" width={36} height={36} className="rounded-md" />
                        <span>Shalom<span className="text-accent">.</span></span>
                    </Link>
                    <h2 className="text-xl font-medium mt-4">Client Portal</h2>
                    <p className="text-muted text-sm mt-2">
                        {isLogin ? "Sign in to manage your projects" : "Create an account to track progress"}
                    </p>
                </div>
                <form className="space-y-5">
                    <AnimatePresence mode="popLayout">
                        {!isLogin && (
                            <motion.div
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                            >
                                <label className="block text-sm font-medium text-white/80 mb-2">Full Name</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                                    placeholder="John Doe"
                                />
                            </motion.div>
                        )}
                    </AnimatePresence>

                    <div>
                        <label className="block text-sm font-medium text-white/80 mb-2">Email Address</label>
                        <div className="relative">
                            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted">
                                <Mail size={18} />
                            </span>
                            <input
                                type="email"
                                required
                                className="w-full bg-background/50 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                                placeholder="john@example.com"
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-white/80 mb-2">Password</label>
                        <div className="relative">
                            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted">
                                <Lock size={18} />
                            </span>
                            <input
                                type="password"
                                required
                                className="w-full bg-background/50 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                                placeholder="••••••••"
                            />
                        </div>
                    </div>

                    <Link
                        href="/dashboard"
                        className="w-full py-3.5 bg-accent hover:bg-orange-600 text-white rounded-xl shadow-[0_0_20px_rgba(237,112,20,0.3)] transition-all flex items-center justify-center font-medium mt-6"
                    >
                        {isLogin ? "Sign In" : "Create Account"} <ArrowRight size={18} className="ml-2" />
                    </Link>
                </form>

                <div className="mt-8 text-center">
                    <button
                        onClick={() => setIsLogin(!isLogin)}
                        className="text-muted hover:text-white text-sm transition-colors"
                    >
                        {isLogin ? "Don't have an account? Sign up" : "Already have an account? Sign in"}
                    </button>
                </div>
            </motion.div>
        </div>
    );
}
