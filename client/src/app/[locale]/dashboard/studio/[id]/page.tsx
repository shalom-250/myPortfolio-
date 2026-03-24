"use client";

import { use, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
    ChevronLeft, Terminal, Layout, Code2,
    Cpu, Share2, Maximize2, RefreshCcw,
    Wifi, ShieldCheck, Zap, MessageSquare,
    Play, GitBranch, Globe, Search
} from "lucide-react";

// Shared data access (Mock)
const projects = [
    {
        id: "PRJ-001",
        name: "Luxury E-Commerce Platform",
        tech: ["Next.js", "Tailwind v4", "NestJS", "PostgreSQL"],
        lastSync: "Active now",
        branch: "feature/checkout-refactor"
    },
    {
        id: "PRJ-002",
        name: "FinTech Dashboard",
        tech: ["React Native", "TypeScript", "AWS Lambda"],
        lastSync: "2 mins ago",
        branch: "main"
    }
];

export default function ProjectStudio({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = use(params);
    const project = projects.find(p => p.id === resolvedParams.id) || projects[0];
    const [activeTab, setActiveTab] = useState("code");
    const [terminalLines, setTerminalLines] = useState<string[]>([]);

    useEffect(() => {
        const lines = [
            `> Initializing ${project.name} ecosystem...`,
            `> Connecting to PostgreSQL cluster @ alpha-west-1...`,
            `> Verifying SSL certificates... [OK]`,
            `> Compiling edge functions for ${resolvedParams.id}...`,
            `> Listening for changes on branch: ${project.branch}`
        ];

        lines.forEach((line, i) => {
            setTimeout(() => {
                setTerminalLines(prev => [...prev, line]);
            }, i * 800);
        });
    }, [project.name, project.branch, resolvedParams.id]);

    return (
        <div className="h-[calc(100vh-140px)] flex flex-col gap-6 font-sans">
            {/* Studio Header */}
            <div className="flex items-center justify-between bg-secondary/50 backdrop-blur-md border border-border p-6 rounded-[2rem] shadow-xl">
                <div className="flex items-center space-x-6">
                    <Link
                        href={`/dashboard/projects/${resolvedParams.id}`}
                        className="p-3 bg-background border border-border rounded-2xl hover:bg-accent-red/10 hover:text-accent-red transition-all group"
                    >
                        <ChevronLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                    </Link>
                    <div>
                        <div className="flex items-center space-x-3">
                            <h1 className="text-2xl font-heading font-bold text-foreground">Project Studio</h1>
                            <span className="px-2 py-0.5 bg-accent-red/10 text-accent-red rounded text-[10px] font-bold uppercase tracking-widest border border-accent-red/20 flex items-center">
                                <span className="w-1.5 h-1.5 bg-accent-red rounded-full mr-1.5 animate-pulse" /> Live Now
                            </span>
                        </div>
                        <p className="text-xs text-muted mt-1 flex items-center">
                            <GitBranch size={12} className="mr-1.5" /> {project.branch} • {project.lastSync}
                        </p>
                    </div>
                </div>

                <div className="hidden md:flex items-center space-x-2 bg-background/50 border border-border p-1.5 rounded-2xl">
                    {["Code", "Design", "Ecosystem"].map(tab => (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab.toLowerCase())}
                            className={`px-6 py-2 rounded-xl text-xs font-bold transition-all ${activeTab === tab.toLowerCase()
                                    ? "bg-accent-red text-white shadow-lg shadow-red-500/20"
                                    : "text-muted hover:text-foreground hover:bg-white/5"
                                }`}
                        >
                            {tab}
                        </button>
                    ))}
                </div>

                <div className="flex items-center space-x-3">
                    <button className="p-3 text-muted hover:text-accent-red transition-colors">
                        <Share2 size={20} />
                    </button>
                    <button className="p-3 text-muted hover:text-accent-red transition-colors font-bold">
                        <Maximize2 size={20} />
                    </button>
                </div>
            </div>

            {/* Studio Body */}
            <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-6 overflow-hidden">
                {/* Main Workspace (Tabs) */}
                <div className="lg:col-span-8 bg-secondary/50 backdrop-blur-md border border-border rounded-[2.5rem] overflow-hidden flex flex-col shadow-2xl">
                    <div className="p-6 border-b border-border flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            {activeTab === "code" ? <Code2 size={20} className="text-accent-red" /> :
                                activeTab === "design" ? <Layout size={20} className="text-accent-red" /> :
                                    <Globe size={20} className="text-accent-red" />}
                            <span className="text-sm font-bold capitalize">{activeTab} Preview</span>
                        </div>
                        <div className="flex items-center space-x-4">
                            <div className="flex items-center space-x-2 text-[10px] font-bold text-muted uppercase tracking-widest">
                                <div className="w-2 h-2 bg-green-500 rounded-full" />
                                <span>Syncing</span>
                            </div>
                            <button className="p-2 bg-white/5 rounded-lg hover:text-accent-red transition-colors">
                                <RefreshCcw size={16} />
                            </button>
                        </div>
                    </div>

                    <div className="flex-1 overflow-auto p-0 bg-background/30 custom-scrollbar">
                        <AnimatePresence mode="wait">
                            {activeTab === "code" ? (
                                <motion.div
                                    key="code"
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="p-8 font-mono text-sm leading-relaxed text-foreground/80"
                                >
                                    <pre className="space-y-1">
                                        <code className="block text-accent-red/70">// Active Work: Checkout flow optimization</code>
                                        <code className="block text-green-500">export function CheckoutPage() {'{'}</code>
                                        <code className="block ml-4">const [status, setStatus] = useState("idle");</code>
                                        <code className="block ml-4 text-accent-red">useEffect(() ={'>'} {'{'}</code>
                                        <code className="block ml-8 opacity-60">console.log("Initializing secure lane...");</code>
                                        <code className="block ml-4 text-accent-red">{'}'}, []);</code>
                                        <code className="block mt-4 text-muted">// TODO: Finalize tax calculation logic</code>
                                        <code className="block ml-4 text-green-500">return (</code>
                                        <code className="block ml-8">{'<'}div className="luxury-container" /{'>'}</code>
                                        <code className="block ml-4 text-green-500">);</code>
                                        <code className="block">{'}'}</code>
                                    </pre>
                                </motion.div>
                            ) : activeTab === "design" ? (
                                <motion.div
                                    key="design"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="h-full flex items-center justify-center p-12"
                                >
                                    <div className="w-full max-w-2xl aspect-video bg-zinc-900 rounded-3xl border border-white/10 shadow-3xl relative overflow-hidden group">
                                        <div className="absolute inset-0 bg-gradient-to-br from-accent-red/20 to-transparent opacity-50" />
                                        <div className="absolute inset-0 flex items-center justify-center">
                                            <div className="text-center group-hover:scale-105 transition-transform duration-500">
                                                <Layout size={60} className="text-accent-red mx-auto mb-4" />
                                                <p className="font-heading font-bold text-xl uppercase tracking-widest">Interface Proof v2.4</p>
                                                <p className="text-xs text-muted mt-2">Final Review Stage</p>
                                            </div>
                                        </div>
                                    </div>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="ecosystem"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="p-10 space-y-8"
                                >
                                    <div className="grid grid-cols-2 gap-6">
                                        <div className="p-6 bg-secondary/50 border border-border rounded-3xl">
                                            <div className="flex items-center space-x-3 mb-4 text-accent-red">
                                                <Cpu size={20} />
                                                <span className="text-xs font-bold uppercase">Backend Status</span>
                                            </div>
                                            <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                                                <div className="h-full w-4/5 bg-accent-red" />
                                            </div>
                                            <p className="text-[10px] text-muted mt-2 font-bold">CPU Load: 24% | Memory: 512MB</p>
                                        </div>
                                        <div className="p-6 bg-secondary/50 border border-border rounded-3xl">
                                            <div className="flex items-center space-x-3 mb-4 text-green-500">
                                                <ShieldCheck size={20} />
                                                <span className="text-xs font-bold uppercase">Security Guard</span>
                                            </div>
                                            <p className="text-lg font-bold">WAF Active</p>
                                            <p className="text-[10px] text-muted mt-2 font-bold">Last threat blocked 4h ago</p>
                                        </div>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>

                {/* Sidebar: Terminal & Collaboration */}
                <div className="lg:col-span-4 flex flex-col gap-6 overflow-hidden">
                    {/* Elite Terminal */}
                    <div className="flex-1 bg-zinc-950 border border-white/5 rounded-[2.5rem] flex flex-col overflow-hidden shadow-2xl">
                        <div className="p-6 border-b border-white/5 flex items-center justify-between bg-zinc-900/50">
                            <div className="flex items-center space-x-3">
                                <Terminal size={18} className="text-green-500" />
                                <span className="text-xs font-bold uppercase font-mono tracking-widest text-green-500">System Logs</span>
                            </div>
                            <div className="flex space-x-1">
                                <div className="w-2 h-2 rounded-full bg-red-500/50" />
                                <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                                <div className="w-2 h-2 rounded-full bg-green-500/50" />
                            </div>
                        </div>
                        <div className="flex-1 p-6 font-mono text-[10px] leading-relaxed text-green-500/80 overflow-y-auto">
                            {terminalLines.map((line, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    className="mb-1"
                                >
                                    {line}
                                </motion.div>
                            ))}
                            <div className="animate-pulse w-2 h-4 bg-green-500/50 inline-block mt-1" />
                        </div>
                    </div>

                    {/* Collaboration Hub */}
                    <div className="bg-secondary/80 backdrop-blur-xl border border-border rounded-[2.5rem] p-8 shadow-2xl">
                        <h3 className="text-sm font-bold flex items-center mb-6">
                            <Zap size={16} className="text-accent-red mr-2" /> Sprint Actions
                        </h3>
                        <div className="space-y-3">
                            <a
                                href="https://github.com/shalom-250/real-estate-app"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="w-full flex items-center justify-between p-4 bg-background border border-border rounded-2xl hover:border-accent-red transition-all group"
                            >
                                <div className="flex items-center space-x-3">
                                    <GitBranch size={16} className="text-accent-red" />
                                    <span className="text-xs font-bold">View Source (GitHub)</span>
                                </div>
                                <Search size={14} className="text-muted group-hover:text-accent-red" />
                            </a>
                            <button className="w-full flex items-center justify-between p-4 bg-background border border-border rounded-2xl hover:border-accent-red transition-all group">
                                <div className="flex items-center space-x-3">
                                    <MessageSquare size={16} className="text-accent-red" />
                                    <span className="text-xs font-bold">Request Review</span>
                                </div>
                                <Link href="/dashboard/messages" className="text-[10px] text-muted uppercase font-bold group-hover:text-accent-red">Quick Ping</Link>
                            </button>
                        </div>
                        <div className="mt-8 pt-8 border-t border-border">
                            <div className="flex items-center space-x-3 mb-4">
                                <div className="w-8 h-8 rounded-full bg-zinc-800 border border-white/5 flex items-center justify-center text-[10px] font-bold">S</div>
                                <p className="text-[10px] font-bold text-muted uppercase">Developer Online</p>
                            </div>
                            <div className="h-1.5 w-full bg-black/10 dark:bg-white/5 rounded-full overflow-hidden">
                                <div className="h-full w-full bg-accent-red" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
