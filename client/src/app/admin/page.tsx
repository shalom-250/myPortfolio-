"use client";

import { motion } from "framer-motion";
import { DollarSign, Users, Briefcase, Activity, ArrowUpRight, TrendingUp } from "lucide-react";

export default function AdminOverview() {
    const stats = [
        { name: "Total Revenue", value: "$42,500", icon: DollarSign, color: "text-green-400", change: "+12%" },
        { name: "Active Clients", value: "14", icon: Users, color: "text-blue-400", change: "+3" },
        { name: "Ongoing Projects", value: "6", icon: Briefcase, color: "text-orange-400", change: "-1" },
        { name: "Profile Views", value: "1,240", icon: Activity, color: "text-purple-400", change: "+24%" },
    ];

    return (
        <div className="max-w-6xl mx-auto space-y-8">
            <div>
                <h1 className="text-3xl font-heading font-bold text-white mb-2">System Overview</h1>
                <p className="text-muted">Monitor your platform's performance and incoming requests.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, i) => (
                    <motion.div
                        key={stat.name}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        className="bg-secondary/20 border border-white/5 rounded-3xl p-6 relative group"
                    >
                        <div className="flex justify-between items-start mb-4">
                            <div className={`p-3 rounded-2xl bg-white/5 ${stat.color} border border-white/5`}>
                                <stat.icon size={20} />
                            </div>
                            <span className="flex items-center text-xs font-medium text-green-400 bg-green-500/10 px-2 py-1 rounded-lg">
                                <TrendingUp size={12} className="mr-1" /> {stat.change}
                            </span>
                        </div>
                        <h3 className="text-3xl font-heading font-bold text-white mb-1">{stat.value}</h3>
                        <p className="text-sm text-muted font-medium">{stat.name}</p>
                    </motion.div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
                {/* Recent Orders Table */}
                <div className="lg:col-span-2 bg-secondary/20 border border-white/5 rounded-3xl p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-bold text-white">Recent Requests</h2>
                        <button className="text-sm text-accent hover:text-white transition-colors">View All</button>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-white/10 text-muted text-sm">
                                    <th className="pb-3 font-medium">Client</th>
                                    <th className="pb-3 font-medium">Project Type</th>
                                    <th className="pb-3 font-medium">Budget</th>
                                    <th className="pb-3 font-medium">Status</th>
                                    <th className="pb-3 font-medium">Action</th>
                                </tr>
                            </thead>
                            <tbody className="text-sm divide-y divide-white/5">
                                {[
                                    { name: "Sarah Connor", type: "Luxury Web Design", budget: "$5k-$10k", status: "New" },
                                    { name: "TechCorp Inc.", type: "Full Stack Platform", budget: "$25k+", status: "In Discussion" },
                                    { name: "Michael Smith", type: "Mobile App", budget: "$10k-$25k", status: "Proposal Sent" },
                                    { name: "Elena Gray", type: "Web App Maintenance", budget: "<$5k", status: "Rejected" },
                                ].map((req, i) => (
                                    <tr key={i} className="group hover:bg-white/5 transition-colors">
                                        <td className="py-4 text-white font-medium">{req.name}</td>
                                        <td className="py-4 text-muted">{req.type}</td>
                                        <td className="py-4 text-muted">{req.budget}</td>
                                        <td className="py-4">
                                            <span className={`px-3 py-1 text-xs font-medium rounded-full ${req.status === 'New' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' :
                                                    req.status === 'In Discussion' ? 'bg-orange-500/10 text-orange-400 border border-orange-500/20' :
                                                        req.status === 'Proposal Sent' ? 'bg-green-500/10 text-green-400 border border-green-500/20' :
                                                            'bg-red-500/10 text-red-400 border border-red-500/20'
                                                }`}>
                                                {req.status}
                                            </span>
                                        </td>
                                        <td className="py-4">
                                            <button className="text-muted hover:text-accent transition-colors"><ArrowUpRight size={16} /></button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Quick Actions / Messages */}
                <div className="bg-secondary/20 border border-white/5 rounded-3xl p-6">
                    <h2 className="text-xl font-bold text-white mb-6">Unread Messages</h2>
                    <div className="space-y-4">
                        {[
                            { name: "TechCorp Inc.", time: "10 min ago", msg: "Can we review the latest DB schema design?" },
                            { name: "Sarah Connor", time: "2 hours ago", msg: "I've uploaded the brand assets you requested." },
                            { name: "James Wilson", time: "1 day ago", msg: "The app looks amazing! Let's arrange a call." },
                        ].map((msg, i) => (
                            <div key={i} className="p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors cursor-pointer group">
                                <div className="flex justify-between items-center mb-2">
                                    <h4 className="text-white font-medium text-sm group-hover:text-accent transition-colors">{msg.name}</h4>
                                    <span className="text-xs text-muted">{msg.time}</span>
                                </div>
                                <p className="text-sm text-muted truncate">{msg.msg}</p>
                            </div>
                        ))}
                    </div>
                    <button className="w-full mt-6 py-3 border border-white/10 rounded-xl text-sm font-medium text-white hover:bg-white/5 transition-colors">
                        Go to Inbox
                    </button>
                </div>
            </div>
        </div>
    );
}
