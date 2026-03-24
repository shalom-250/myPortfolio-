"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { User, Bell, Palette, Save } from "lucide-react";
import ThemeToggle from "@/components/ThemeToggle";

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
                        <h2 className="text-xl font-bold font-heading text-foreground">Profile Information</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-widest text-muted mb-2 ml-1">Full Name</label>
                            <input
                                suppressHydrationWarning
                                type="text"
                                defaultValue="John Doe"
                                className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-1 focus:ring-accent-red transition-all"
                            />
                        </div>
                        <div>
                            <label className="block text-xs font-bold uppercase tracking-widest text-muted mb-2 ml-1">Email Address</label>
                            <input
                                suppressHydrationWarning
                                type="email"
                                defaultValue="john@example.com"
                                className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:ring-1 focus:ring-accent-red transition-all"
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
                        <NotificationSettings />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                        className="bg-secondary border border-border rounded-3xl p-8"
                    >
                        <div className="flex items-center space-x-3 mb-8">
                            <Palette className="text-accent-red" size={24} />
                            <h2 className="text-xl font-bold font-heading text-foreground">Appearance</h2>
                        </div>
                        <div className="flex items-center justify-between p-4 bg-background border border-border rounded-xl">
                            <div>
                                <p className="font-bold text-sm text-foreground">Theme Mode</p>
                                <p className="text-xs text-muted">Switch between dark and light aesthetics</p>
                            </div>
                            <ThemeToggle />
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

function NotificationSettings() {
    const [settings, setSettings] = useState({
        project: true,
        messages: true,
        security: true
    });

    const toggles = [
        { id: 'project', label: "Project Updates", desc: "Get notified when milestones are reached" },
        { id: 'messages', label: "Direct Messages", desc: "Alerts for new messages in chat" },
        { id: 'security', label: "Security Alerts", desc: "Important account activity notices" }
    ] as const;

    return (
        <>
            <div className="flex items-center space-x-3 mb-8">
                <Bell className="text-accent-red" size={24} />
                <h2 className="text-xl font-bold font-heading text-foreground">Notifications</h2>
            </div>
            <div className="space-y-4">
                {toggles.map((item) => (
                    <div key={item.id} className="flex items-center justify-between py-2 group">
                        <div>
                            <p className="font-bold text-sm text-foreground group-hover:text-accent-red transition-colors">{item.label}</p>
                            <p className="text-xs text-muted leading-relaxed">{item.desc}</p>
                        </div>
                        <button 
                            onClick={() => setSettings(prev => ({ ...prev, [item.id]: !prev[item.id] }))}
                            className={`w-12 h-6 rounded-full relative transition-all duration-300 ${
                                settings[item.id as keyof typeof settings] ? "bg-accent-red shadow-[0_0_15px_rgba(255,49,49,0.3)]" : "bg-black/10 dark:bg-white/10"
                            }`}
                        >
                            <motion.div 
                                animate={{ x: settings[item.id as keyof typeof settings] ? 26 : 4 }}
                                className="absolute top-1 w-4 h-4 bg-white rounded-full shadow-sm"
                            />
                        </button>
                    </div>
                ))}
            </div>
        </>
    );
}
