"use client";

import { use } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { 
    FileText, Clock, CheckCircle2, AlertCircle, 
    ArrowUpRight, BarChart3, PieChart, Activity, 
    Zap, Download, MessageSquare, ExternalLink,
    TrendingUp, ArrowDownRight, ChevronLeft
} from "lucide-react";

// In a real app, this would be fetched from an API
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
        ],
        kpis: [
            { label: "Completion Rate", value: "65%", trend: "+5.2%", color: "text-accent-red" },
            { label: "Active Sprints", value: "3", trend: "On Track", color: "text-green-500" },
            { label: "Resources", value: "84h", trend: "+12h", color: "text-yellow-500" },
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
        ],
        kpis: [
            { label: "Design Phase", value: "90%", trend: "+15%", color: "text-accent-red" },
            { label: "Architecture", value: "Draft", trend: "In Review", color: "text-yellow-500" },
            { label: "Security", value: "V1", trend: "Certified", color: "text-green-500" },
        ]
    }
];

export default function ProjectDetail({ params }: { params: Promise<{ id: string }> }) {
    const resolvedParams = use(params);
    const project = projects.find(p => p.id === resolvedParams.id) || projects[0];

    return (
        <div className="max-w-7xl mx-auto space-y-10 pb-20">
            {/* Header & Breadcrumbs */}
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div>
                    <Link 
                        href="/dashboard/projects" 
                        className="flex items-center text-xs font-bold uppercase tracking-widest text-muted hover:text-accent-red transition-colors mb-4 group"
                    >
                        <ChevronLeft size={14} className="mr-1 group-hover:-translate-x-1 transition-transform" /> Back to Projects
                    </Link>
                    <div className="flex items-center space-x-4">
                        <div className="w-16 h-16 bg-accent-red/10 rounded-3xl flex items-center justify-center text-accent-red">
                            <FileText size={32} />
                        </div>
                        <div>
                            <div className="flex items-center space-x-3">
                                <h1 className="text-4xl font-heading font-bold text-foreground">{project.name}</h1>
                                <span className="text-[10px] font-bold uppercase tracking-widest px-3 py-1 bg-white/5 border border-white/10 rounded-full text-muted">
                                    {project.id}
                                </span>
                            </div>
                            <p className="text-muted mt-1 font-medium">{project.category} Ecosystem • Target: {project.dueDate}</p>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-3">
                    <button className="flex-1 md:flex-none px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl text-xs font-bold transition-all flex items-center justify-center">
                        <Download size={16} className="mr-2" /> Specs
                    </button>
                    <Link 
                        href="/dashboard/messages"
                        className="flex-1 md:flex-none px-6 py-3 bg-accent-red hover:bg-red-600 text-white rounded-2xl text-xs font-bold transition-all shadow-lg shadow-red-500/20 flex items-center justify-center"
                    >
                        <MessageSquare size={16} className="mr-2" /> Contact Dev
                    </Link>
                </div>
            </div>

            {/* Top Stats Bar */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {project.kpis.map((kpi, i) => (
                    <motion.div
                        key={kpi.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-secondary p-8 rounded-[2rem] border border-border shadow-lg"
                    >
                        <p className="text-[10px] font-bold text-muted uppercase tracking-widest mb-3">{kpi.label}</p>
                        <div className="flex items-end justify-between">
                            <h3 className="text-4xl font-heading font-bold text-foreground">{kpi.value}</h3>
                            <span className={`text-[10px] font-bold flex items-center px-2 py-1 bg-white/5 rounded-full ${kpi.trend.includes('+') || kpi.trend === "On Track" ? 'text-green-500' : 'text-accent-red'}`}>
                                {kpi.trend} {kpi.trend.includes('+') ? <TrendingUp size={12} className="ml-1" /> : null}
                            </span>
                        </div>
                    </motion.div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Left Column: Progress & Milestones */}
                <div className="lg:col-span-2 space-y-8">
                    {/* Progress Detail */}
                    <div className="bg-secondary p-10 rounded-[2.5rem] border border-border shadow-xl">
                        <div className="flex justify-between items-end mb-8">
                            <div>
                                <h3 className="text-2xl font-bold font-heading mb-1 text-foreground">Global Progress</h3>
                                <p className="text-sm text-muted italic">" {project.details} "</p>
                            </div>
                            <span className="text-4xl font-heading font-bold text-accent-red">{project.progress}%</span>
                        </div>
                        <div className="h-4 w-full bg-black/10 dark:bg-white/5 rounded-full overflow-hidden mb-12">
                            <motion.div
                                initial={{ width: 0 }}
                                animate={{ width: `${project.progress}%` }}
                                transition={{ duration: 1.5, ease: "easeOut" }}
                                className="h-full bg-accent-red rounded-full shadow-[0_0_20px_rgba(255,49,49,0.4)]"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {project.milestones.map((ms, idx) => (
                                <div key={idx} className={`p-6 rounded-3xl border transition-all ${
                                    ms.status === "completed" ? "bg-green-500/5 border-green-500/10" :
                                    ms.status === "current" ? "bg-accent-red/5 border-accent-red/20 shadow-inner" :
                                    "bg-black/5 dark:bg-white/5 border-border opacity-60"
                                }`}>
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center space-x-2">
                                            {ms.status === "completed" ? <CheckCircle2 size={18} className="text-green-500" /> :
                                                ms.status === "current" ? <Clock size={18} className="text-accent-red animate-pulse" /> :
                                                <AlertCircle size={18} className="text-muted" />}
                                            <span className="text-[10px] font-bold uppercase tracking-widest text-muted">
                                                {ms.status}
                                            </span>
                                        </div>
                                    </div>
                                    <p className="font-bold text-foreground text-lg">{ms.name}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Analytics Integration: Velocity Tracking */}
                    <div className="bg-secondary p-10 rounded-[2.5rem] border border-border shadow-xl min-h-[400px] flex flex-col">
                        <div className="flex items-center justify-between mb-10">
                            <div>
                                <h3 className="text-2xl font-bold font-heading mb-1 flex items-center">
                                    <BarChart3 size={24} className="mr-3 text-accent-red" /> Sprint Velocity
                                </h3>
                                <p className="text-sm text-muted uppercase tracking-widest font-bold">Performance Tracking</p>
                            </div>
                            <div className="flex space-x-2">
                                <span className="px-3 py-1 bg-white/5 rounded-full text-[10px] font-bold text-muted uppercase">Last 30 Days</span>
                            </div>
                        </div>
                        <div className="h-64 flex items-end justify-between space-x-3 mb-4 px-2">
                            {[40, 70, 45, 90, 65, 80, 50, 75, 60, 85].map((h, i) => (
                                <motion.div 
                                    key={i}
                                    initial={{ height: 0 }}
                                    animate={{ height: `${h}%` }}
                                    transition={{ delay: 0.3 + (i * 0.05), duration: 0.8 }}
                                    className="w-full bg-accent-red/20 dark:bg-accent-red/20 border-t-4 border-accent-red rounded-t-xl relative group cursor-pointer transition-all hover:bg-accent-red/30 shadow-[0_0_15px_rgba(255,49,49,0.1)]"
                                >
                                    <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-accent-red text-white text-[10px] py-1.5 px-3 rounded-lg shadow-xl opacity-0 group-hover:opacity-100 transition-opacity z-10 whitespace-nowrap font-bold">
                                        Sprint {i + 1}: {h}%
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column: Allocation & Metadata */}
                <div className="space-y-8">
                    {/* Resource Allocation View */}
                    <div className="bg-secondary p-10 rounded-[2.5rem] border border-border shadow-xl">
                        <h3 className="text-xl font-bold font-heading mb-8 flex items-center">
                            <PieChart size={20} className="mr-3 text-accent-red" /> Resources
                        </h3>
                        <div className="relative w-40 h-40 mx-auto mb-10">
                            <div className="absolute inset-0 rounded-full border-[10px] border-black/10 dark:border-white/5 flex items-center justify-center">
                                <div className="text-center font-heading">
                                    <span className="text-3xl font-bold">72%</span>
                                    <p className="text-[10px] text-muted uppercase font-bold tracking-widest">Efficiency</p>
                                </div>
                            </div>
                            <svg className="absolute inset-0 w-full h-full -rotate-90">
                                <motion.circle 
                                    cx="80" cy="80" r="72" 
                                    initial={{ strokeDashoffset: 452 }}
                                    animate={{ strokeDashoffset: 130 }}
                                    transition={{ delay: 0.5, duration: 1.5, ease: "easeOut" }}
                                    className="fill-none stroke-accent-red stroke-[10px] [stroke-dasharray:452]"
                                />
                            </svg>
                        </div>
                        <div className="space-y-4">
                            <div className="p-4 bg-background/50 border border-border rounded-2xl flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                    <div className="w-2 h-3 bg-accent-red rounded-full" />
                                    <span className="text-xs font-bold text-muted">Dev Effort</span>
                                </div>
                                <span className="text-xs font-bold font-heading">65%</span>
                            </div>
                            <div className="p-4 bg-background/50 border border-border rounded-2xl flex items-center justify-between">
                                <div className="flex items-center space-x-3">
                                    <div className="w-2 h-3 bg-white/20 rounded-full" />
                                    <span className="text-xs font-bold text-muted">QA & Review</span>
                                </div>
                                <span className="text-xs font-bold font-heading">35%</span>
                            </div>
                        </div>
                    </div>

                    {/* Metadata & Actions */}
                    <div className="bg-secondary p-10 rounded-[2.5rem] border border-border shadow-xl">
                        <h3 className="text-xl font-bold font-heading mb-8 flex items-center">
                            <Zap size={20} className="mr-3 text-accent-red" /> Ecosystem Specs
                        </h3>
                        <div className="space-y-6">
                            <div>
                                <p className="text-[10px] font-bold uppercase tracking-widest text-muted mb-2 font-bold">Deployment URL</p>
                                <a 
                                    href={`https://prod-v1.shalom.dev/${project.id.toLowerCase()}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="font-bold text-sm flex items-center group cursor-pointer text-foreground hover:text-accent-red transition-colors"
                                >
                                    <ExternalLink size={14} className="mr-2 text-accent-red group-hover:scale-110 transition-transform" /> 
                                    prod-v1.shalom.dev
                                </a>
                            </div>
                            <div className="pt-6 border-t border-border">
                                <p className="text-[10px] font-bold uppercase tracking-widest text-muted mb-2 font-bold">Last Security Audit</p>
                                <p className="text-sm font-bold text-green-500 flex items-center">
                                    <Activity size={14} className="mr-2" /> Certified Secure (Mar 20)
                                </p>
                            </div>
                            <Link 
                                href={`/dashboard/studio/${project.id}`}
                                className="w-full mt-6 py-4 bg-accent-red hover:bg-red-600 text-white rounded-2xl font-bold text-xs shadow-xl shadow-red-500/20 active:scale-95 transition-all flex items-center justify-center translate-y-0 hover:-translate-y-1"
                            >
                                Open in Studio Suite
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
