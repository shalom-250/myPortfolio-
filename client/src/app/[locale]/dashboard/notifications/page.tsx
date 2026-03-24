"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { 
    Bell, Check, Trash2, Filter, 
    MoreVertical, ArrowUpRight, Clock, 
    CheckCircle2, MessageSquare, CreditCard, AlertCircle
} from "lucide-react";

const initialNotifications = [
    { 
        id: 1, 
        type: "milestone",
        title: "Milestone Completed", 
        message: "The Homepage Design phase has been successfully finalized and approved by your team.", 
        time: "2 hours ago", 
        read: false,
        icon: CheckCircle2,
        color: "text-green-500",
        bg: "bg-green-500/10"
    },
    { 
        id: 2, 
        type: "message",
        title: "New Message from Shalom", 
        message: "I've uploaded the new API documentation for the backend integration. Please review at your earliest convenience.", 
        time: "5 hours ago", 
        read: false,
        icon: MessageSquare,
        color: "text-accent-red",
        bg: "bg-accent-red/10"
    },
    { 
        id: 3, 
        type: "payment",
        title: "Invoice Paid", 
        message: "Payment for 'Phase 1: Discovery' has been confirmed and reconciled.", 
        time: "1 day ago", 
        read: true,
        icon: CreditCard,
        color: "text-blue-500",
        bg: "bg-blue-500/10"
    },
    { 
        id: 4, 
        type: "system",
        title: "Security Update", 
        message: "A new login was detected from a new device in Kigali, Rwanda.", 
        time: "2 days ago", 
        read: true,
        icon: AlertCircle,
        color: "text-yellow-500",
        bg: "bg-yellow-500/10"
    },
];

export default function NotificationsPage() {
    const [notifications, setNotifications] = useState(initialNotifications);
    const [filter, setFilter] = useState("all");

    const filteredNotifications = notifications.filter(n => {
        if (filter === "unread") return !n.read;
        if (filter === "read") return n.read;
        return true;
    });

    const markAsRead = (id: number) => {
        setNotifications(notifications.map(n => n.id === id ? { ...n, read: true } : n));
    };

    const deleteNotification = (id: number) => {
        setNotifications(notifications.filter(n => n.id !== id));
    };

    const markAllRead = () => {
        setNotifications(notifications.map(n => ({ ...n, read: true })));
    };

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <motion.h1 
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-3xl font-heading font-bold text-foreground mb-2"
                    >
                        Notifications
                    </motion.h1>
                    <p className="text-muted">Stay updated with your project progress and account activity.</p>
                </div>
                <div className="flex items-center space-x-3">
                    <button 
                        onClick={markAllRead}
                        className="px-4 py-2 text-xs font-bold uppercase tracking-widest text-muted hover:text-accent-red border border-white/5 bg-white/5 rounded-xl transition-all"
                    >
                        Mark all as read
                    </button>
                    <Link 
                        href="/dashboard/settings"
                        className="p-2 bg-white/5 border border-white/5 rounded-xl text-muted hover:text-foreground transition-colors inline-block"
                    >
                        <SettingsPageLink />
                    </Link>
                </div>
            </div>

            {/* Filters */}
            <div className="flex items-center space-x-2 bg-secondary p-1.5 rounded-2xl border border-border w-fit">
                {["all", "unread", "read"].map((f) => (
                    <button
                        key={f}
                        onClick={() => setFilter(f)}
                        className={`px-6 py-2 rounded-xl text-xs font-bold uppercase tracking-widest transition-all ${
                            filter === f 
                            ? "bg-accent-red text-white shadow-lg" 
                            : "text-muted hover:text-foreground hover:bg-white/5"
                        }`}
                    >
                        {f}
                    </button>
                ))}
            </div>

            {/* Notifications List */}
            <div className="space-y-4">
                <AnimatePresence mode="popLayout">
                    {filteredNotifications.length > 0 ? (
                        filteredNotifications.map((n, i) => (
                            <motion.div
                                key={n.id}
                                layout
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.95 }}
                                transition={{ delay: i * 0.05 }}
                                className={`group relative bg-secondary border border-border rounded-3xl p-6 transition-all hover:shadow-xl ${!n.read ? "bg-accent-red/[0.02] border-accent-red/20 shadow-red-500/5" : ""}`}
                            >
                                <div className="flex items-start justify-between gap-6">
                                    <div className="flex items-start space-x-6">
                                        <div className={`mt-1 p-4 rounded-2xl ${n.bg} ${n.color} flex-shrink-0 border border-white/5`}>
                                            <n.icon size={24} />
                                        </div>
                                        <div>
                                            <div className="flex items-center space-x-3 mb-2">
                                                <h3 className={`text-lg font-bold ${!n.read ? "text-foreground" : "text-muted"}`}>{n.title}</h3>
                                                {!n.read && <span className="w-2 h-2 bg-accent-red rounded-full animate-pulse" />}
                                            </div>
                                            <p className="text-muted leading-relaxed mb-4 max-w-2xl">{n.message}</p>
                                            <div className="flex items-center space-x-4 text-xs font-medium text-muted/60">
                                                <span className="flex items-center"><Clock size={12} className="mr-1.5" /> {n.time}</span>
                                                <span className="uppercase tracking-widest">• {n.type}</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="flex flex-col items-center space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                        {!n.read && (
                                            <button 
                                                onClick={() => markAsRead(n.id)}
                                                className="p-2 bg-white/5 hover:bg-green-500/20 text-muted hover:text-green-500 rounded-lg transition-all"
                                                title="Mark as read"
                                            >
                                                <Check size={18} />
                                            </button>
                                        )}
                                        <button 
                                            onClick={() => deleteNotification(n.id)}
                                            className="p-2 bg-white/5 hover:bg-accent-red/20 text-muted hover:text-accent-red rounded-lg transition-all"
                                            title="Delete"
                                        >
                                            <Trash2 size={18} />
                                        </button>
                                    </div>
                                </div>
                            </motion.div>
                        ))
                    ) : (
                        <div className="text-center py-24 bg-secondary border border-dashed border-white/10 rounded-[3rem]">
                            <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Bell size={32} className="text-muted/20" />
                            </div>
                            <h3 className="text-xl font-bold text-muted uppercase tracking-widest">No notifications found</h3>
                            <p className="text-muted/60 mt-2">You're all caught up with your project stream.</p>
                        </div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

function SettingsPageLink() {
    return (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 1 1 0 3.46l-.15.1a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1 0-3.46l.15-.1a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"></path><circle cx="12" cy="12" r="3"></circle></svg>
    )
}
