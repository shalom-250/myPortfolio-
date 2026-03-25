"use client";

import { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { Link, usePathname } from "@/i18n/routing";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
    LayoutDashboard, FileText, MessageSquare, Settings, LogOut,
    Menu, X, Bell, Check, Trash2, ArrowUpRight, BarChart3,
    ChevronLeft, ChevronRight, Globe
} from "lucide-react";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import SmoothScroll from "@/components/SmoothScroll";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
    const t = useTranslations("DashboardLayout");
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [notificationsOpen, setNotificationsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const [notifications, setNotifications] = useState([
        { id: 1, title: t("notif.milestone.title"), message: t("notif.milestone.msg"), time: "2m ago", read: false },
        { id: 2, title: t("notif.message.title"), message: t("notif.message.msg"), time: "1h ago", read: false },
        { id: 3, title: t("notif.invoice.title"), message: t("notif.invoice.msg"), time: "5h ago", read: true },
    ]);
    const pathname = usePathname() || "";

    const unreadCount = notifications.filter(n => !n.read).length;

    const markAllAsRead = () => {
        setNotifications(notifications.map(n => ({ ...n, read: true })));
    };

    const clearNotifications = () => {
        setNotifications([]);
    };

    const navItems = [
        { name: t("nav.overview"), href: "/dashboard", icon: LayoutDashboard },
        { name: t("nav.projects"), href: "/dashboard/projects", icon: FileText },
        { name: t("nav.contract"), href: "/dashboard/contract", icon: FileText },
        { name: t("nav.analytics"), href: "/dashboard/analytics", icon: BarChart3 },
        { name: t("nav.messages"), href: "/dashboard/messages", icon: MessageSquare },
        { name: t("nav.settings"), href: "/dashboard/settings", icon: Settings },
    ];

    return (
        <div className="min-h-screen bg-background flex">
            {/* Mobile Sidebar Overlay */}
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/60 z-40 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            {/* Sidebar */}
            <aside
                className={`fixed top-0 left-0 h-full bg-background dark:bg-background backdrop-blur-xl shadow-2xl shadow-black/[0.05] dark:shadow-none z-50 transform transition-all duration-300 ease-in-out ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
                    } ${isCollapsed ? "w-20" : "w-64"}`}
            >
                <div className="h-20 flex items-center justify-between px-6 border-b border-black/[0.03] dark:border-white/[0.03]">
                    <Link href="/" className="flex items-center">
                        <Image src="/logo.png" alt="Shalom Developer" width={36} height={36} className="rounded-lg shadow-md" />
                        {!isCollapsed && (
                            <motion.span
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="ml-3 font-heading font-black text-xl italic tracking-tighter"
                            >
                                SHALOM
                            </motion.span>
                        )}
                    </Link>
                    <button
                        suppressHydrationWarning
                        className="text-muted hover:text-accent-red transition-colors"
                        onClick={() => isCollapsed ? setIsCollapsed(false) : setIsCollapsed(true)}
                    >
                        {isCollapsed ? <ChevronRight size={20} /> : <ChevronLeft size={20} />}
                    </button>
                </div>

                <nav className="p-4 space-y-2">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`group relative flex items-center ${isCollapsed ? "justify-center" : "space-x-3 px-4"} py-3 rounded-xl transition-all ${isActive
                                    ? "bg-accent-red/10 text-accent-red"
                                    : "text-muted hover:bg-black/5 dark:hover:bg-white/5 hover:text-foreground"
                                    }`}
                                title={isCollapsed ? item.name : ""}
                            >
                                <item.icon size={20} className={isActive ? "text-accent-red" : "group-hover:text-white text-muted"} />
                                {!isCollapsed && (
                                    <motion.span
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="font-medium text-sm"
                                    >
                                        {item.name}
                                    </motion.span>
                                )}
                                {isActive && (
                                    <motion.div
                                        layoutId="sidebar-active"
                                        className="absolute left-0 top-0 bottom-0 w-1 bg-accent-red rounded-r-full"
                                    />
                                )}
                            </Link>
                        );
                    })}
                </nav>

                <div className="absolute bottom-0 w-full p-4 border-t border-black/5 dark:border-white/5">
                    <div className={`flex items-center ${isCollapsed ? "justify-center" : "space-x-3 px-4"} py-3 mb-2 bg-black/5 dark:bg-white/5 rounded-xl`}>
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent-red to-red-600 flex items-center justify-center text-white font-bold shadow-lg shrink-0">
                            JD
                        </div>
                        {!isCollapsed && (
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                            >
                                <p className="text-sm font-medium text-foreground">John Doe</p>
                                <p className="text-xs text-accent-red font-bold">{t("premiumClient")}</p>
                            </motion.div>
                        )}
                    </div>
                    <Link
                        href="/login"
                        className={`flex items-center justify-center ${isCollapsed ? "" : "space-x-2"} w-full py-3 text-muted hover:text-red-500 hover:bg-red-500/10 rounded-xl transition-colors mt-2 font-bold`}
                        title={isCollapsed ? t("signOut") : ""}
                    >
                        <LogOut size={16} />
                        {!isCollapsed && <span className="font-medium text-sm">{t("signOut")}</span>}
                    </Link>
                </div>
            </aside>

            {/* Main Content */}
            <main className="flex-1 flex flex-col min-h-screen relative overflow-hidden bg-[var(--main-content-bg)]">
                {/* Top Header - Now Shadow-based */}
                <header
                    style={{
                        left: !mounted ? 0 : (sidebarOpen ? 0 : (window.innerWidth >= 1024 ? (isCollapsed ? 80 : 256) : 0)),
                        width: !mounted ? '100%' : (window.innerWidth >= 1024 ? `calc(100% - ${isCollapsed ? 80 : 256}px)` : '100%')
                    }}
                    className="h-20 flex items-center justify-between px-6 md:px-10 fixed top-0 bg-background/80 dark:bg-background/80 backdrop-blur-md z-40 transition-all duration-300 shadow-sm shadow-black/[0.03] dark:shadow-white/[0.02]"
                >
                    <div className="flex items-center">
                        <button
                            suppressHydrationWarning
                            className="lg:hidden text-foreground p-2 mr-4 rounded-lg hover:bg-black/5 dark:hover:bg-white/5"
                            onClick={() => setSidebarOpen(true)}
                        >
                            <Menu size={24} />
                        </button>
                        <h2 className="text-lg font-medium text-foreground hidden sm:block font-heading">
                            {navItems.find(item => item.href === pathname)?.name || t("dashboard")}
                        </h2>
                    </div>

                    <div className="flex items-center space-x-6 relative">
                        {/* Integrated Language Switcher */}
                        <div className="hidden md:block">
                            <LanguageSwitcher />
                        </div>
                        <div className="relative">
                            <Link
                                href="/dashboard/messages"
                                className="relative p-2.5 rounded-xl text-muted hover:text-accent-red hover:bg-accent-red/5 transition-all group flex items-center justify-center"
                            >
                                <MessageSquare size={20} className="group-hover:scale-110 transition-transform duration-300" />
                                <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-accent-red rounded-full border-2 border-background animate-pulse"></span>
                                <span className="absolute -top-1 -right-1 min-w-[18px] h-[18px] bg-accent-red text-white text-[9px] font-black flex items-center justify-center rounded-full shadow-[0_0_12px_rgba(255,51,51,0.4)] border border-white/20 transform group-hover:-translate-y-0.5 transition-transform">
                                    2
                                </span>
                            </Link>
                        </div>

                        <div className="relative">
                            <button
                                suppressHydrationWarning
                                onClick={() => setNotificationsOpen(!notificationsOpen)}
                                className={`relative p-2 rounded-full transition-all ${notificationsOpen ? "bg-accent-red/20 text-accent-red" : "text-muted hover:text-foreground hover:bg-white/5"}`}
                            >
                                <Bell size={20} />
                                {unreadCount > 0 && (
                                    <span className="absolute top-1.5 right-1.5 w-2.5 h-2.5 bg-accent-red rounded-full border-2 border-background animate-pulse"></span>
                                )}
                            </button>

                            {/* Notifications Dropdown */}
                            <AnimatePresence>
                                {notificationsOpen && (
                                    <>
                                        <div className="fixed inset-0 z-[60]" onClick={() => setNotificationsOpen(false)} />
                                        <motion.div
                                            initial={{ opacity: 0, scale: 0.95, y: 10, x: 20 }}
                                            animate={{ opacity: 1, scale: 1, y: 0, x: 0 }}
                                            exit={{ opacity: 0, scale: 0.95, y: 10, x: 20 }}
                                            className="absolute right-0 mt-4 w-80 md:w-96 bg-secondary border border-white/10 rounded-[2rem] shadow-2xl z-[70] overflow-hidden backdrop-blur-xl"
                                        >
                                            <div className="p-6 border-b border-white/5 flex items-center justify-between">
                                                <h3 className="font-bold text-white flex items-center">
                                                    {t("notifTitle")} {unreadCount > 0 && <span className="ml-2 px-2 py-0.5 bg-accent-red text-white text-[10px] rounded-full">{unreadCount}</span>}
                                                </h3>
                                                <div className="flex items-center space-x-2">
                                                    <button onClick={markAllAsRead} className="text-[10px] font-bold uppercase tracking-wider text-muted hover:text-accent-red transition-colors flex items-center">
                                                        <Check size={12} className="mr-1" /> {t("readAll")}
                                                    </button>
                                                </div>
                                            </div>

                                            <div className="max-h-[400px] overflow-y-auto">
                                                {notifications.length > 0 ? (
                                                    <div className="divide-y divide-white/5">
                                                        {notifications.map((n) => (
                                                            <div key={n.id} className={`p-5 hover:bg-white/[0.02] transition-colors relative group ${!n.read ? "bg-accent-red/[0.03]" : ""}`}>
                                                                {!n.read && <div className="absolute left-0 top-0 bottom-0 w-1 bg-accent-red" />}
                                                                <div className="flex justify-between items-start mb-1">
                                                                    <h4 className={`text-sm font-bold ${!n.read ? "text-white" : "text-muted"}`}>{n.title}</h4>
                                                                    <span className="text-[10px] text-muted">{n.time}</span>
                                                                </div>
                                                                <p className="text-xs text-muted leading-relaxed">{n.message}</p>
                                                            </div>
                                                        ))}
                                                    </div>
                                                ) : (
                                                    <div className="p-12 text-center">
                                                        <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
                                                            <Bell size={24} className="text-muted/30" />
                                                        </div>
                                                        <p className="text-sm font-medium text-muted">All caught up!</p>
                                                    </div>
                                                )}
                                            </div>

                                            {notifications.length > 0 ? (
                                                <div className="flex divide-x divide-border border-t border-border">
                                                    <button
                                                        onClick={clearNotifications}
                                                        className="flex-1 p-4 text-[10px] font-bold text-muted hover:text-accent-red hover:bg-black/5 dark:hover:bg-white/5 transition-all flex items-center justify-center uppercase tracking-widest"
                                                    >
                                                        <Trash2 size={12} className="mr-2" /> {t("clearAll")}
                                                    </button>
                                                    <Link
                                                        href="/dashboard/notifications"
                                                        onClick={() => setNotificationsOpen(false)}
                                                        className="flex-1 p-4 text-[10px] font-bold text-muted hover:text-accent-red hover:bg-black/5 dark:hover:bg-white/5 transition-all flex items-center justify-center uppercase tracking-widest"
                                                    >
                                                        {t("viewAll")} <ArrowUpRight size={12} className="ml-2" />
                                                    </Link>
                                                </div>
                                            ) : null}
                                        </motion.div>
                                    </>
                                )}
                            </AnimatePresence>
                        </div>
                        <Link href="/" className="text-sm font-medium px-5 py-2 bg-white/5 hover:bg-white/10 rounded-full text-foreground transition-colors border border-white/10 hidden sm:block">
                            {t("backToPortfolio")}
                        </Link>
                    </div>
                </header>

                {/* Page Content with Offset-Aware SmoothScroll */}
                <div className="flex-1 relative">
                    <SmoothScroll
                        marginLeft={!mounted ? 0 : (window.innerWidth >= 1024 ? (isCollapsed ? 80 : 256) : 0)}
                        width={!mounted ? '100%' : (window.innerWidth >= 1024 ? `calc(100% - ${isCollapsed ? 80 : 256}px)` : '100%')}
                        paddingTop={80} // Header height
                    >
                        <div className="p-6 md:p-10">
                            {children}
                        </div>
                    </SmoothScroll>
                </div>
            </main>
        </div>
    );
}
