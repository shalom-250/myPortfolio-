"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { LayoutDashboard, Users, FileText, MessageSquare, Settings, LogOut, Menu, X, Bell, LayoutTemplate } from "lucide-react";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const pathname = usePathname() || "";

    const navItems = [
        { name: "Overview", href: "/admin", icon: LayoutDashboard },
        { name: "Orders", href: "/admin/orders", icon: FileText },
        { name: "Clients", href: "/admin/clients", icon: Users },
        { name: "Messages", href: "/admin/messages", icon: MessageSquare },
        { name: "Projects", href: "/admin/projects", icon: LayoutTemplate },
        { name: "Settings", href: "/admin/settings", icon: Settings },
    ];

    return (
        <div className="min-h-screen bg-background flex">
            {sidebarOpen && (
                <div
                    className="fixed inset-0 bg-black/60 z-40 lg:hidden"
                    onClick={() => setSidebarOpen(false)}
                />
            )}

            <aside
                className={`fixed top-0 left-0 h-full w-64 bg-background/95 backdrop-blur-xl border-r border-white/5 z-50 transform transition-transform duration-300 ease-in-out ${sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
                    }`}
            >
                <div className="h-20 flex items-center justify-between px-6 border-b border-white/5">
                    <Link href="/" className="text-2xl font-heading font-bold tracking-tighter">
                        Elite<span className="text-accent">Admin</span>
                    </Link>
                    <button className="lg:hidden text-white hover:text-accent" onClick={() => setSidebarOpen(false)}>
                        <X size={20} />
                    </button>
                </div>

                <nav className="p-4 space-y-2">
                    {navItems.map((item) => {
                        const isActive = pathname === item.href;
                        return (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`group relative flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${isActive
                                        ? "bg-accent/10 text-accent"
                                        : "text-muted hover:bg-white/5 hover:text-white"
                                    }`}
                            >
                                <item.icon size={20} className={isActive ? "text-accent" : "group-hover:text-white text-muted"} />
                                <span className="font-medium text-sm">{item.name}</span>
                                {isActive && (
                                    <motion.div
                                        layoutId="admin-sidebar-active"
                                        className="absolute left-0 top-0 bottom-0 w-1 bg-accent rounded-r-full"
                                    />
                                )}
                            </Link>
                        );
                    })}
                </nav>

                <div className="absolute bottom-0 w-full p-4 border-t border-white/5">
                    <div className="flex items-center space-x-3 px-4 py-3 mb-2 bg-white/5 rounded-xl">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-white/20 to-white/5 border border-white/10 flex items-center justify-center text-white font-bold shadow-lg">
                            ME
                        </div>
                        <div>
                            <p className="text-sm font-medium text-white">Admin</p>
                            <p className="text-xs text-accent">Superuser</p>
                        </div>
                    </div>
                </div>
            </aside>

            <main className="flex-1 lg:ml-64 flex flex-col min-h-screen relative overflow-hidden">
                <header className="h-20 border-b border-white/5 flex items-center justify-between px-6 md:px-10 sticky top-0 bg-background/80 backdrop-blur-md z-30">
                    <div className="flex items-center">
                        <button
                            className="lg:hidden text-white p-2 mr-4 rounded-lg hover:bg-white/5"
                            onClick={() => setSidebarOpen(true)}
                        >
                            <Menu size={24} />
                        </button>
                        <h2 className="text-lg font-medium text-white hidden sm:block">
                            {navItems.find(item => item.href === pathname)?.name || "Dashboard"}
                        </h2>
                    </div>

                    <div className="flex items-center space-x-4">
                        <button className="relative p-2 text-muted hover:text-white rounded-full hover:bg-white/5 transition-colors">
                            <Bell size={20} />
                            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full border border-background"></span>
                        </button>
                        <Link href="/" className="text-sm font-medium px-5 py-2 bg-white/5 hover:bg-white/10 rounded-full text-white transition-colors border border-white/10 hidden sm:block">
                            View Site
                        </Link>
                    </div>
                </header>

                <div className="flex-1 p-6 md:p-10 overflow-y-auto">
                    {children}
                </div>
            </main>
        </div>
    );
}
