"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Clock, FileText, ArrowUpRight } from "lucide-react";

export default function DashboardOverview() {
    const stats = [
        { name: "Active Projects", value: "2", icon: FileText, color: "text-blue-400" },
        { name: "Pending Tasks", value: "5", icon: Clock, color: "text-accent-red" },
        { name: "Completed Milestones", value: "12", icon: CheckCircle2, color: "text-green-400" },
    ];

    return (
        <div className="max-w-6xl mx-auto space-y-8">
            <div>
                <motion.h1
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl font-heading font-bold text-foreground mb-2"
                >
                    Welcome back, John
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="text-muted"
                >
                    Here's what's happening with your projects today.
                </motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {stats.map((stat, i) => (
                    <motion.div
                        key={stat.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 + 0.1 }}
                        className="bg-secondary border border-border rounded-3xl p-6 relative overflow-hidden group shadow-lg"
                    >
                        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110 duration-500"></div>
                        <div className="flex justify-between items-start mb-6 relative z-10">
                            <div className={`p-3 rounded-2xl bg-white/5 ${stat.color} border border-white/5`}>
                                <stat.icon size={24} />
                            </div>
                        </div>
                        <h3 className="text-4xl font-heading font-bold text-foreground mb-1 relative z-10">{stat.value}</h3>
                        <p className="text-sm text-muted font-medium relative z-10">{stat.name}</p>
                    </motion.div>
                ))}
            </div>

            <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-xl font-bold font-heading text-foreground mt-12 mb-6"
            >
                Recent Activity
            </motion.h2>

            <div className="bg-secondary border border-border rounded-3xl overflow-hidden shadow-lg">
                <div className="divide-y divide-white/5">
                    {[
                        { tag: "Update", title: "Homepage design finalized and approved", time: "2 hours ago", status: "Completed" },
                        { tag: "Invoice", title: "Payment #002 received for milestone 1", time: "1 day ago", status: "Paid" },
                        { tag: "Project", title: "Backend API integration started", time: "2 days ago", status: "In Progress" },
                    ].map((activity, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: i * 0.1 + 0.5 }}
                            className="p-6 md:px-8 flex flex-col sm:flex-row sm:items-center justify-between hover:bg-secondary transition-colors cursor-pointer group"
                        >
                            <div className="flex items-start sm:items-center space-x-4 mb-4 sm:mb-0">
                                <span className="px-3 py-1.5 bg-background/50 border border-white/5 text-xs font-medium text-muted rounded-full min-w-[80px] text-center">
                                    {activity.tag}
                                </span>
                                <div>
                                    <h4 className="text-foreground font-medium group-hover:text-accent transition-colors">{activity.title}</h4>
                                    <p className="text-xs text-muted mt-1">{activity.time}</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-6 sm:space-x-4">
                                <span className={`text-xs font-medium px-4 py-1.5 rounded-full ${activity.status === "Completed" || activity.status === "Paid"
                                    ? "bg-green-500/10 text-green-400 border border-green-500/20"
                                    : "bg-accent/10 text-accent border border-accent/20"
                                    }`}>
                                    {activity.status}
                                </span>
                                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent/20 transition-colors">
                                    <ArrowUpRight size={16} className="text-muted group-hover:text-accent transition-colors" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
