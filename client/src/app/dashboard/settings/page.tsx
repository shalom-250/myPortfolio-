"use client";

import { motion } from "framer-motion";
import { User, Bell, Shield, Palette, Save } from "lucide-react";

export default function DashboardSettings() {
    return (
        <div className="max-w-4xl mx-auto space-y-8 font-sans">
            <div>
                <motion.h1
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-3xl font-heading font-bold text-foreground mb-2"
                >
                    Account Settings
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                    className="text-muted"
                >
                    Manage your profile, security, and project preferences.
                </motion.p>
            </div>

            <div className="space-y-6">
                {/* Profile Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="bg-secondary border border-border rounded-3xl p-8"
                >
                    <div className="flex items-center space-x-3 mb-8">
                        <User className="text-accent-red" size={24} />
                        <h2 className="text-xl font-bold font-heading">Profile Information</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-widest text-muted mb-2 ml-1">Full Name</label>
                            <input
                                type="text"
                                defaultValue="John Doe"
                                className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-1 focus:ring-accent-red transition-all"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-widest text-muted mb-2 ml-1">Email Address</label>
                            <input
                                type="email"
                                defaultValue="john@example.com"
                                className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-1 focus:ring-accent-red transition-all"
                            />
                        </div>
                    </div>
                </motion.div>

                {/* Notifications & Security */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-secondary border border-border rounded-3xl p-8"
                    >
                        <div className="flex items-center space-x-3 mb-8">
                            <Bell className="text-accent-red" size={24} />
                            <h2 className="text-xl font-bold font-heading">Notifications</h2>
                        </div>
                        <div className="space-y-4">
                            {[
                                { label: "Project Updates", desc: "Get notified when milestones are reached" },
                                { label: "Direct Messages", desc: "Alerts for new messages in chat" },
                                { label: "Security Alerts", desc: "Important account activity notices" }
                            ].map((item, i) => (
                                <div key={i} className="flex items-center justify-between py-2">
                                    <div>
                                        <p className="font-bold text-sm">{item.label}</p>
                                        <p className="text-xs text-muted">{item.desc}</p>
                                    </div>
                                    <div className="w-10 h-5 bg-accent-red rounded-full relative cursor-pointer shadow-[0_0_10px_rgba(255,49,49,0.3)]">
                                        <div className="absolute right-1 top-1 w-3 h-3 bg-white rounded-full"></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-secondary border border-border rounded-3xl p-8"
                    >
                        <div className="flex items-center space-x-3 mb-8">
                            <Shield className="text-accent-red" size={24} />
                            <h2 className="text-xl font-bold font-heading">Security</h2>
                        </div>
                        <div className="space-y-4">
                            <button className="w-full text-left p-4 bg-background/50 border border-white/10 rounded-xl hover:border-accent-red/30 transition-all group">
                                <p className="font-bold text-sm group-hover:text-accent-red transition-colors">Change Password</p>
                                <p className="text-xs text-muted">Update your login credentials</p>
                            </button>
                            <button className="w-full text-left p-4 bg-background/50 border border-white/10 rounded-xl hover:border-accent-red/30 transition-all group">
                                <p className="font-bold text-sm group-hover:text-accent-red transition-colors">Two-Factor Auth</p>
                                <p className="text-xs text-muted">Secure your account with 2FA</p>
                            </button>
                        </div>
                    </motion.div>
                </div>

                <div className="pt-6 flex justify-end">
                    <button className="px-10 py-4 bg-accent-red hover:bg-red-600 text-white rounded-2xl font-bold flex items-center shadow-xl shadow-red-500/20 active:scale-95 transition-all">
                        <Save size={20} className="mr-2" /> Save Changes
                    </button>
                </div>
            </div>
        </div>
    );
}
