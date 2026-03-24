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
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent-red/10 via-background to-background z-0"></div>

            <Link href="/" className="absolute top-8 left-8 text-muted hover:text-white transition-colors flex items-center z-20">
                <ArrowLeft size={20} className="mr-2" /> Back to Home
            </Link>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="w-full max-w-md bg-secondary/30 backdrop-blur-xl border border-white/10 rounded-3xl p-8 relative z-10 shadow-2xl"
            >
                <div className="text-center mb-10">
                    <Link href="/" className="flex flex-col items-center justify-center space-y-4 group mb-2">
                        <div className="relative">
                            <Image src="/logo.png" alt="Shalom Dev" width={64} height={64} className="rounded-[2rem] shadow-2xl transform group-hover:rotate-12 group-hover:scale-110 transition-all duration-500 border border-white/10" />
                            <div className="absolute -inset-1 bg-accent-red/20 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </div>
                        <span className="text-4xl font-black font-heading tracking-tighter bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent group-hover:text-accent-red transition-all duration-300">
                            SHALOM <span className="text-accent-red">DEV</span>
                        </span>
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
                                    className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-red focus:ring-1 focus:ring-accent-red transition-all"
                                    placeholder="John Doe"
                                />
                                <div className="mt-5">
                                    <label className="block text-sm font-medium text-white/80 mb-2">Phone Number</label>
                                    <input
                                        type="tel"
                                        required
                                        className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-accent-red focus:ring-1 focus:ring-accent-red transition-all"
                                        placeholder="+250 788 000 000"
                                    />
                                </div>
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
                                className="w-full bg-background/50 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white focus:outline-none focus:border-accent-red focus:ring-1 focus:ring-accent-red transition-all"
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
                                className="w-full bg-background/50 border border-white/10 rounded-xl pl-12 pr-4 py-3 text-white focus:outline-none focus:border-accent-red focus:ring-1 focus:ring-accent-red transition-all"
                                placeholder="••••••••"
                            />
                        </div>
                    </div>

                    <Link
                        href="/dashboard"
                        className="w-full py-3.5 bg-accent-red hover:bg-red-600 text-white rounded-xl shadow-[0_0_20px_rgba(255,49,49,0.3)] transition-all flex items-center justify-center font-medium mt-6"
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
