"use client";

import { motion } from "framer-motion";
import { Send, Paperclip, MoreHorizontal, User, Circle } from "lucide-react";

export default function DashboardMessages() {
    return (
        <div className="h-[calc(100vh-140px)] flex bg-secondary border border-border rounded-3xl overflow-hidden shadow-2xl">
            {/* Sidebar / Contacts */}
            <div className="w-full md:w-80 border-r border-white/5 flex flex-col bg-background/20 backdrop-blur-md">
                <div className="p-6 border-b border-white/5">
                    <h2 className="text-xl font-bold font-heading">Messages</h2>
                </div>
                <div className="flex-1 overflow-y-auto p-4 space-y-2">
                    <div className="p-4 bg-accent-red/10 border border-accent-red/20 rounded-2xl cursor-pointer">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 rounded-full bg-accent-red flex items-center justify-center text-white font-bold">S</div>
                            <div className="flex-1 overflow-hidden">
                                <div className="flex justify-between items-center">
                                    <p className="font-bold text-sm">Shalom Dev</p>
                                    <span className="text-[10px] text-accent-red font-bold uppercase">Online</span>
                                </div>
                                <p className="text-xs text-muted truncate mt-0.5 italic">"The project architecture is ready..."</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Chat Area */}
            <div className="hidden md:flex flex-1 flex-col">
                {/* Chat Header */}
                <div className="p-6 border-b border-white/5 flex justify-between items-center bg-background/10 backdrop-blur-md">
                    <div className="flex items-center space-x-4">
                        <div className="relative">
                            <div className="w-12 h-12 rounded-full bg-accent-red flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-red-500/20">S</div>
                            <div className="absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-background"></div>
                        </div>
                        <div>
                            <h3 className="font-bold font-heading">Shalom Dev</h3>
                            <p className="text-xs text-muted">Full Stack Architect</p>
                        </div>
                    </div>
                    <button className="p-2 text-muted hover:text-foreground hover:bg-white/5 rounded-full transition-colors">
                        <MoreHorizontal size={24} />
                    </button>
                </div>

                {/* Messages Container */}
                <div className="flex-1 overflow-y-auto p-8 space-y-6">
                    <div className="flex justify-center">
                        <span className="text-[10px] font-bold uppercase tracking-widest px-4 py-1 bg-white/5 border border-white/10 rounded-full text-muted">Yesterday</span>
                    </div>

                    <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 rounded-full bg-accent-red flex items-center justify-center text-white font-bold text-xs">S</div>
                        <div className="max-w-[70%] bg-white/5 border border-white/10 rounded-2xl rounded-tl-none p-4">
                            <p className="text-sm leading-relaxed">Hello John! I've finished the initial architecture for the E-Commerce platform. Would you like to review the tech stack tonight?</p>
                            <span className="text-[10px] text-muted mt-2 block">10:42 PM</span>
                        </div>
                    </div>

                    <div className="flex flex-row-reverse items-start space-x-4 space-x-reverse">
                        <div className="w-8 h-8 rounded-full bg-secondary border border-white/10 flex items-center justify-center text-white font-bold text-xs shadow-inner">JD</div>
                        <div className="max-w-[70%] bg-accent-red text-white rounded-2xl rounded-tr-none p-4 shadow-lg shadow-red-500/10">
                            <p className="text-sm leading-relaxed font-medium">That sounds great, Shalom. Let's touch base at 9 PM. Is the NestJS backend fully configured?</p>
                            <span className="text-[10px] text-white/70 mt-2 block">10:45 PM</span>
                        </div>
                    </div>

                    <div className="flex items-start space-x-4">
                        <div className="w-8 h-8 rounded-full bg-accent-red flex items-center justify-center text-white font-bold text-xs">S</div>
                        <div className="max-w-[70%] bg-white/5 border border-white/10 rounded-2xl rounded-tl-none p-4">
                            <p className="text-sm leading-relaxed">Absolutely. The Prisma ORM layer and PostgreSQL schema are 100% complete. I'll share the API docs shortly.</p>
                            <span className="text-[10px] text-muted mt-2 block">11:02 PM</span>
                        </div>
                    </div>
                </div>

                {/* Input Area */}
                <div className="p-6 bg-background/30 backdrop-blur-xl border-t border-white/5">
                    <div className="max-w-4xl mx-auto flex items-center space-x-4">
                        <button className="p-3 text-muted hover:text-accent-red transition-colors">
                            <Paperclip size={24} />
                        </button>
                        <div className="flex-1 relative">
                            <input
                                type="text"
                                placeholder="Type your message..."
                                className="w-full bg-background border border-white/10 rounded-2xl px-6 py-4 text-sm focus:outline-none focus:ring-1 focus:ring-accent-red transition-all"
                            />
                            <button className="absolute right-3 top-2 p-2 bg-accent-red text-white rounded-xl hover:bg-red-600 transition-all shadow-lg shadow-red-500/20 active:scale-95">
                                <Send size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
