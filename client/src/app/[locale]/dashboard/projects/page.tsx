"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import {
    FileText, Clock, CheckCircle2, AlertCircle,
    ChevronRight, MoreVertical, ExternalLink, X,
    Download, MessageSquare, PauseCircle, PlayCircle
} from "lucide-react";

const projects = [
    {
        id: "PRJ-001",
        name: "Luxury E-Commerce Platform",
        status: "Development",
        progress: 65,
        dueDate: "April 15, 2026",
        category: "Web App",
        details: "A high-end retail experience for premium fashion brands. Currently integrating the headless CMS and optimizing the checkout flow.",
        milestones: [
            { name: "Brand Identity", status: "completed" },
            { name: "Frontend Architecture", status: "completed" },
            { name: "CMS Integration", status: "current" },
            { name: "Beta Testing", status: "pending" },
        ]
    },
    {
        id: "PRJ-002",
        name: "FinTech Dashboard",
        status: "Planning",
        progress: 15,
        dueDate: "May 20, 2026",
        category: "Systems",
        details: "Robust architecture meeting world-class interface for asset management. Focusing on real-time data synchronization.",
        milestones: [
            { name: "System Requirements", status: "completed" },
            { name: "Architecture Design", status: "current" },
            { name: "API Development", status: "pending" },
        ]
    }
];

export default function DashboardProjects() {
    const [isNewRequestOpen, setIsNewRequestOpen] = useState(false);
    const [activeMenu, setActiveMenu] = useState<string | null>(null);

    return (
        <div className="max-w-6xl mx-auto space-y-8 relative">
            {/* Header */}
            <div className="flex justify-between items-end">
                <div>
                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl font-heading font-bold text-foreground mb-2"
                    >
                        Your Projects
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="text-muted"
                    >
                        Track progress and manage your active service requests.
                    </motion.p>
                </div>
                <button
                    onClick={() => setIsNewRequestOpen(true)}
                    className="px-6 py-2.5 bg-accent-red hover:bg-red-600 text-white rounded-full font-bold text-sm transition-all shadow-lg shadow-red-500/20 active:scale-95"
                >
                    New Request
                </button>
            </div>

            {/* Projects List */}
            <div className="grid grid-cols-1 gap-6">
                {projects.map((project, i) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-secondary border border-border rounded-3xl overflow-hidden group hover:border-accent-red/30 transition-all shadow-lg relative"
                    >
                        <div className="p-8">
                            <div className="flex justify-between items-start mb-6">
                                <div className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-accent-red/10 rounded-2xl flex items-center justify-center text-accent-red">
                                        <FileText size={24} />
                                    </div>
                                    <div>
                                        <div className="flex items-center space-x-3">
                                            <h3 className="text-xl font-bold font-heading">{project.name}</h3>
                                            <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 bg-white/5 border border-white/10 rounded text-muted">
                                                {project.id}
                                            </span>
                                        </div>
                                        <p className="text-sm text-muted mt-1">{project.category} • Due {project.dueDate}</p>
                                    </div>
                                </div>
                                <div className="flex items-center space-x-2 relative">
                                    <span className={`text-xs font-bold px-4 py-1.5 rounded-full border ${project.status === "Development" ? "bg-accent-red/10 text-accent-red border-accent-red/20" : "bg-white/5 text-muted border-white/10"
                                        }`}>
                                        {project.status}
                                    </span>
                                    <button
                                        onClick={() => setActiveMenu(activeMenu === project.id ? null : project.id)}
                                        className="p-2 text-muted hover:text-foreground rounded-lg hover:bg-white/5 transition-colors"
                                    >
                                        <MoreVertical size={20} />
                                    </button>

                                    {/* Action Menu */}
                                    <AnimatePresence>
                                        {activeMenu === project.id && (
                                            <motion.div
                                                initial={{ opacity: 0, scale: 0.95, y: 10 }}
                                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                                exit={{ opacity: 0, scale: 0.95, y: 10 }}
                                                className="absolute right-0 top-12 w-48 bg-background border border-white/10 rounded-2xl shadow-2xl z-20 overflow-hidden"
                                            >
                                                <div className="p-2 space-y-1">
                                                    <button className="w-full text-left px-4 py-2.5 text-xs font-bold hover:bg-accent-red/10 hover:text-accent-red rounded-xl transition-all flex items-center">
                                                        <Download size={14} className="mr-2" /> Download Specs
                                                    </button>
                                                    <Link
                                                        href="/dashboard/messages"
                                                        className="w-full text-left px-4 py-2.5 text-xs font-bold hover:bg-accent-red/10 hover:text-accent-red rounded-xl transition-all flex items-center"
                                                    >
                                                        <MessageSquare size={14} className="mr-2" /> Message Dev
                                                    </Link>
                                                    <button className="w-full text-left px-4 py-2.5 text-xs font-bold hover:bg-white/5 hover:text-yellow-500 rounded-xl transition-all flex items-center">
                                                        <PauseCircle size={14} className="mr-2" /> Pause Project
                                                    </button>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>

                            <div className="mb-8">
                                <div className="flex justify-between text-sm mb-2">
                                    <span className="text-muted font-medium">Overall Progress</span>
                                    <span className="text-foreground font-bold">{project.progress}%</span>
                                </div>
                                <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden">
                                    <motion.div
                                        initial={{ width: 0 }}
                                        animate={{ width: `${project.progress}%` }}
                                        transition={{ duration: 1, delay: 0.5 }}
                                        className="h-full bg-accent-red rounded-full shadow-[0_0_10px_rgba(255,49,49,0.5)]"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                                {project.milestones.map((ms, idx) => (
                                    <div key={idx} className={`p-4 rounded-2xl border ${ms.status === "completed" ? "bg-green-500/5 border-green-500/10" :
                                        ms.status === "current" ? "bg-accent-red/5 border-accent-red/20" :
                                            "bg-white/5 border-white/10 opacity-50"
                                        }`}>
                                        <div className="flex items-center space-x-2 mb-2">
                                            {ms.status === "completed" ? <CheckCircle2 size={16} className="text-green-500" /> :
                                                ms.status === "current" ? <Clock size={16} className="text-accent-red animate-pulse" /> :
                                                    <AlertCircle size={16} className="text-muted" />}
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-muted">
                                                {ms.status}
                                            </span>
                                        </div>
                                        <p className="text-xs font-bold text-foreground">{ms.name}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-white/5 px-8 py-4 flex justify-between items-center text-xs">
                            <div className="flex items-center text-muted">
                                <Clock size={14} className="mr-2" />
                                Last update 2 hours ago
                            </div>
                            <Link
                                href={`/dashboard/projects/${project.id}`}
                                className="flex items-center text-accent-red font-bold hover:underline"
                            >
                                View Full Details <ChevronRight size={14} className="ml-1" />
                            </Link>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Modals Overlay */}
            <AnimatePresence>
                {/* New Request Modal */}
                {isNewRequestOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center px-6">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="absolute inset-0 bg-background/80 backdrop-blur-xl"
                            onClick={() => setIsNewRequestOpen(false)}
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="bg-secondary border border-white/10 w-full max-w-xl rounded-3xl p-10 relative z-10 shadow-2xl"
                        >
                            <button
                                onClick={() => setIsNewRequestOpen(false)}
                                className="absolute top-6 right-6 p-2 text-muted hover:text-foreground hover:bg-white/5 rounded-full transition-all"
                            >
                                <X size={24} />
                            </button>
                            <h2 className="text-3xl font-heading font-bold mb-2">Start New Project</h2>
                            <p className="text-muted mb-8 text-sm">Fill in the details to request a new elite service session.</p>

                            <form className="space-y-6">
                                <div>
                                    <label className="block text-[10px] font-bold uppercase tracking-widest text-muted mb-2 ml-1">Project Name</label>
                                    <input type="text" placeholder="e.g. Mobile App Redesign" className="w-full bg-background border border-white/10 rounded-xl px-4 py-4 text-foreground focus:ring-1 focus:ring-accent-red outline-none" />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div>
                                        <label className="block text-[10px] font-bold uppercase tracking-widest text-muted mb-2 ml-1">Service Type</label>
                                        <select className="w-full bg-background border border-white/10 rounded-xl px-4 py-4 text-foreground focus:ring-1 focus:ring-accent-red outline-none">
                                            <option>Luxury Web</option>
                                            <option>Full-Stack App</option>
                                            <option>Consultation</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-[10px] font-bold uppercase tracking-widest text-muted mb-2 ml-1">Budget Range</label>
                                        <input type="text" placeholder="RFW 5M+" className="w-full bg-background border border-white/10 rounded-xl px-4 py-4 text-foreground focus:ring-1 focus:ring-accent-red outline-none" />
                                    </div>
                                </div>
                                <button className="w-full py-5 bg-accent-red hover:bg-red-600 text-white rounded-2xl font-bold flex items-center justify-center transition-all shadow-xl shadow-red-500/20 active:scale-95">
                                    Submit Request <ChevronRight size={20} className="ml-2" />
                                </button>
                            </form>
                        </motion.div>
                    </div>
                )}

            </AnimatePresence>
        </div>
    );
}
