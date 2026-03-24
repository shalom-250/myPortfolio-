"use client";

import { motion } from "framer-motion";
import { 
    BarChart3, TrendingUp, PieChart, Calendar, 
    ArrowUpRight, ArrowDownRight, Activity, Zap 
} from "lucide-react";
import Link from "next/link";

export default function AnalyticsPage() {
    const kpis = [
        { label: "Completion Rate", value: "84%", trend: "+5.2%", color: "text-accent-red" },
        { label: "Support Tickets", value: "2", trend: "-1", color: "text-green-500" },
        { label: "Resources Used", value: "128h", trend: "+12h", color: "text-yellow-500" },
    ];

    return (
        <div className="max-w-6xl mx-auto space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <motion.h1
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl font-heading font-bold text-foreground mb-2"
                    >
                        Project Analytics
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="text-muted"
                    >
                        Detailed performance metrics for your active ecosystem.
                    </motion.p>
                </div>
                <Link 
                    href="/dashboard"
                    className="p-3 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/10 transition-colors"
                >
                    <Activity size={20} className="text-accent-red" />
                </Link>
            </div>

            {/* KPI Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {kpis.map((kpi, i) => (
                    <motion.div
                        key={kpi.label}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-secondary p-6 rounded-3xl border border-border shadow-lg"
                    >
                        <p className="text-xs font-bold text-muted uppercase tracking-wider mb-2">{kpi.label}</p>
                        <div className="flex items-end justify-between">
                            <h3 className="text-4xl font-heading font-bold text-foreground">{kpi.value}</h3>
                            <span className={`text-xs font-bold flex items-center ${kpi.trend.startsWith('+') ? 'text-green-500' : 'text-accent-red'}`}>
                                {kpi.trend} {kpi.trend.startsWith('+') ? <TrendingUp size={12} className="ml-1" /> : <ArrowDownRight size={12} className="ml-1" />}
                            </span>
                        </div>
                    </motion.div>
                ))}
            </div>

            {/* Main Charts Mock */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.4 }}
                    className="bg-secondary p-8 rounded-[2rem] border border-border shadow-xl min-h-[400px] flex flex-col"
                >
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="font-bold flex items-center">
                            <BarChart3 size={20} className="mr-2 text-accent-red" /> Velocity Tracking
                        </h3>
                        <span className="text-xs text-muted">Last 30 Days</span>
                    </div>
                    <div className="flex-grow flex items-end justify-between space-x-2">
                        {[40, 70, 45, 90, 65, 80, 50].map((h, i) => (
                            <motion.div 
                                key={i}
                                initial={{ height: 0 }}
                                animate={{ height: `${h}%` }}
                                transition={{ delay: 0.6 + (i * 0.1), duration: 1 }}
                                className="w-full bg-accent-red/20 border-t-2 border-accent-red rounded-t-lg relative group"
                            >
                                <div className="absolute -top-10 left-1/2 -translate-x-1/2 bg-accent-red text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                                    {h}%
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                    className="bg-secondary p-8 rounded-[2rem] border border-border shadow-xl min-h-[400px] flex flex-col"
                >
                    <div className="flex items-center justify-between mb-8">
                        <h3 className="font-bold flex items-center">
                            <PieChart size={20} className="mr-2 text-accent-red" /> Resource Allocation
                        </h3>
                        <span className="text-xs text-muted">Current Sprint</span>
                    </div>
                    <div className="flex-grow flex items-center justify-center">
                        <div className="relative w-48 h-48 rounded-full border-[12px] border-white/5 flex items-center justify-center">
                            <div className="text-center font-heading">
                                <span className="text-3xl font-bold">72%</span>
                                <p className="text-[10px] text-muted uppercase">Efficiency</p>
                            </div>
                            <svg className="absolute inset-0 w-full h-full -rotate-90">
                                <circle 
                                    cx="96" cy="96" r="84" 
                                    className="fill-none stroke-accent-red stroke-[12px] [stroke-dasharray:527] [stroke-dashoffset:150]"
                                />
                            </svg>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4 mt-8">
                        <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 rounded-full bg-accent-red" />
                            <span className="text-xs text-muted">Development</span>
                        </div>
                        <div className="flex items-center space-x-2">
                            <div className="w-3 h-3 rounded-full bg-white/10" />
                            <span className="text-xs text-muted">Review / Quality</span>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
