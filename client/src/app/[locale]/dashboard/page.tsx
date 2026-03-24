"use client";

import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, Clock, FileText, ArrowUpRight, X, Activity, BarChart3, TrendingUp } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { useState } from "react";

export default function DashboardOverview() {
    const t = useTranslations("DashboardOverview");
    const [selectedActivity, setSelectedActivity] = useState<any>(null);

    const stats = [
        { name: t("stats.activeProjects"), value: "2", icon: FileText, color: "text-accent-red", trend: "+12%" },
        { name: t("stats.pendingTasks"), value: "5", icon: Clock, color: "text-yellow-500", trend: "-2" },
        { name: t("stats.completedMilestones"), value: "12", icon: CheckCircle2, color: "text-green-500", trend: t("stats.allTime") },
    ];

    return (
        <div className="max-w-6xl mx-auto space-y-8">
            <div>
                <motion.h1
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl font-heading font-bold text-foreground mb-2"
                >
                    {t("welcome")}, John
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="text-muted"
                >
                    {t("subtitle")}
                </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stats.map((stat, i) => (
                    <Link key={stat.name} href="/dashboard/analytics">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 + 0.1 }}
                            whileHover={{ y: -5 }}
                            className="h-full bg-secondary border border-border rounded-3xl p-6 relative overflow-hidden group shadow-lg cursor-pointer"
                        >
                            <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110 duration-500"></div>
                            <div className="flex justify-between items-start mb-6 relative z-10">
                                <div className={`p-3 rounded-2xl bg-white/5 ${stat.color} border border-white/5`}>
                                    <stat.icon size={24} />
                                </div>
                                <span className="text-[10px] font-bold uppercase tracking-wider text-muted group-hover:text-foreground transition-colors flex items-center">
                                    {t("viewDetails")} <ArrowUpRight size={10} className="ml-1" />
                                </span>
                            </div>
                            <h3 className="text-4xl font-heading font-bold text-foreground mb-1 relative z-10">{stat.value}</h3>
                            <div className="flex items-center justify-between relative z-10">
                                <p className="text-sm text-muted font-medium">{stat.name}</p>
                                <span className={`text-[10px] font-bold ${stat.trend.startsWith('+') ? 'text-green-500' : 'text-muted'}`}>
                                    {stat.trend}
                                </span>
                            </div>
                        </motion.div>
                    </Link>
                ))}
            </div>

            <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-xl font-bold font-heading text-foreground mt-12 mb-6"
            >
                {t("recentActivity")}
            </motion.h2>

            <div className="bg-secondary border border-border rounded-3xl overflow-hidden shadow-lg">
                <div className="divide-y divide-white/5">
                    {[
                        { 
                            id: 1,
                            tag: "Update", 
                            title: "Homepage design finalized and approved", 
                            time: "2 hours ago", 
                            status: "Completed",
                            details: "Final review was conducted with the stakeholders. All visual assets and copy have been signed off for development.",
                            subActivities: [
                                "Visual Identity Approval",
                                "Responsive Layout Verification",
                                "Mobile Prototype Sign-off"
                            ]
                        },
                        { 
                            id: 2,
                            tag: "Invoice", 
                            title: "Payment #002 received for milestone 1", 
                            time: "1 day ago", 
                            status: "Paid",
                            details: "Escrow payment has been successfully released. Milestone 1 (Discovery & Architecture) is now fully reconciled.",
                            subActivities: [
                                "Escrow Verification",
                                "Invoice Generation",
                                "Account Reconciliation"
                            ]
                        },
                        { 
                            id: 3,
                            tag: "Project", 
                            title: "Backend API integration started", 
                            time: "2 days ago", 
                            status: "In Progress",
                            details: "Authentication layer and core database schemas are currently being implemented.",
                            subActivities: [
                                "Auth Module Initialization",
                                "Prisma Schema Design",
                                "Environment Config"
                            ]
                        },
                    ].map((activity, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 + 0.5 }}
                            onClick={() => setSelectedActivity(activity)}
                            className="p-6 md:px-8 flex flex-col sm:flex-row sm:items-center justify-between hover:bg-white/[0.02] transition-colors cursor-pointer group"
                        >
                            <div className="flex items-start sm:items-center space-x-4 mb-4 sm:mb-0">
                                <span className="px-3 py-1.5 bg-background/50 border border-white/5 text-xs font-medium text-muted rounded-full min-w-[80px] text-center">
                                    {activity.tag}
                                </span>
                                <div>
                                    <h4 className="text-foreground font-medium group-hover:text-accent-red transition-colors">{activity.title}</h4>
                                    <p className="text-xs text-muted mt-1">{activity.time}</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-6 sm:space-x-4">
                                <span className={`text-xs font-medium px-4 py-1.5 rounded-full ${activity.status === "Completed" || activity.status === "Paid"
                                    ? "bg-green-500/10 text-green-500 border border-green-500/20"
                                    : "bg-accent-red/10 text-accent-red border border-accent-red/20"
                                    }`}>
                                    {activity.status}
                                </span>
                                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent-red/20 transition-colors">
                                    <ArrowUpRight size={16} className="text-muted group-hover:text-accent-red transition-colors" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Activity Detail Drawer */}
            <AnimatePresence>
                {selectedActivity && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedActivity(null)}
                            className="fixed inset-0 bg-background/60 backdrop-blur-md z-[60]"
                        />
                        <motion.div
                            initial={{ x: "100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "100%" }}
                            transition={{ type: "spring", damping: 25, stiffness: 200 }}
                            className="fixed right-0 top-0 h-full w-full max-w-md bg-secondary border-l border-white/10 p-8 z-[70] shadow-2xl overflow-y-auto"
                        >
                            <div className="flex items-center justify-between mb-8">
                                <div className="flex items-center space-x-2 text-accent-red">
                                    <Activity size={20} />
                                    <span className="text-sm font-bold uppercase tracking-widest">{t("activityDetail")}</span>
                                </div>
                                <button
                                    onClick={() => setSelectedActivity(null)}
                                    className="p-2 hover:bg-white/10 rounded-full transition-colors"
                                >
                                    <X size={24} />
                                </button>
                            </div>

                            <div className="space-y-8">
                                <div>
                                    <span className="text-xs font-medium text-muted px-3 py-1 bg-white/5 rounded-full mb-4 inline-block tracking-wider uppercase">
                                        {selectedActivity.tag}
                                    </span>
                                    <h3 className="text-2xl font-bold font-heading text-white leading-tight">
                                        {selectedActivity.title}
                                    </h3>
                                    <p className="text-sm text-muted mt-2">{selectedActivity.time}</p>
                                </div>

                                <div className="p-6 bg-white/[0.02] border border-white/5 rounded-3xl">
                                    <p className="text-foreground/80 leading-relaxed italic text-sm">
                                        "{selectedActivity.details}"
                                    </p>
                                </div>

                                <div>
                                    <h4 className="text-sm font-bold text-white mb-6 uppercase tracking-widest flex items-center">
                                        <TrendingUp size={16} className="mr-2 text-accent-red" /> Related Milestones
                                    </h4>
                                    <div className="space-y-4">
                                        {selectedActivity.subActivities.map((sub: string, idx: number) => (
                                            <div key={idx} className="flex items-center space-x-3 p-4 bg-white/5 rounded-2xl border border-white/5">
                                                <div className="w-1.5 h-1.5 rounded-full bg-accent-red" />
                                                <span className="text-sm font-medium text-foreground/70">{sub}</span>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                <div className="pt-8 border-t border-white/5">
                                    <Link
                                        href="/dashboard/projects"
                                        onClick={() => setSelectedActivity(null)}
                                        className="w-full py-4 bg-accent-red hover:bg-red-600 text-white rounded-2xl font-bold flex items-center justify-center transition-all group"
                                    >
                                        {t("viewProject")} <ArrowUpRight size={20} className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}
