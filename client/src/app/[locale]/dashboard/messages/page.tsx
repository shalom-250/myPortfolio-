"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Paperclip, MoreHorizontal, User, Circle, FileText, ChevronRight, ChevronLeft } from "lucide-react";

const projectThreads = [
    {
        id: "PRJ-001",
        name: "Luxury E-Commerce Platform",
        lastMessage: "The project architecture is ready...",
        time: "10:42 PM",
        status: "Online",
        staff: {
            name: "Shalom Dev",
            role: "Full Stack Architect",
            avatar: "S"
        },
        messages: [
            { id: 1, sender: "staff", text: "Hello John! I've finished the initial architecture for the E-Commerce platform. Would you like to review the tech stack tonight?", time: "10:42 PM" },
            { id: 2, sender: "client", text: "That sounds great, Shalom. Let's touch base at 9 PM. Is the NestJS backend fully configured?", time: "10:45 PM" },
            { id: 3, sender: "staff", text: "Absolutely. The Prisma ORM layer and PostgreSQL schema are 100% complete. I'll share the API docs shortly.", time: "11:02 PM" },
        ]
    },
    {
        id: "PRJ-002",
        name: "FinTech Dashboard",
        lastMessage: "Security audit is complete.",
        time: "2h ago",
        status: "Away",
        staff: {
            name: "Alexander",
            role: "UI/UX Designer",
            avatar: "A"
        },
        messages: [
            { id: 1, sender: "staff", text: "Hi! I've updated the dashboard components to follow the new high-trust design system.", time: "Yesterday" },
            { id: 2, sender: "client", text: "The new charts look incredible. Can we emphasize the red accents a bit more?", time: "Today" },
            { id: 3, sender: "staff", text: "Done. Just pushed the update to the Studio preview.", time: "2h ago" },
        ]
    }
];

export default function DashboardMessages() {
    const [threads, setThreads] = useState(projectThreads);
    const [selectedProjectId, setSelectedProjectId] = useState(projectThreads[0].id);
    const [showChatMobile, setShowChatMobile] = useState(false);
    const [messageInput, setMessageInput] = useState("");
    const fileInputRef = useRef<HTMLInputElement>(null);

    const activeThread = threads.find(p => p.id === selectedProjectId) || threads[0];

    const handleSendMessage = () => {
        if (!messageInput.trim()) return;

        const newMessage = {
            id: Date.now(),
            sender: "client",
            text: messageInput,
            time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        };

        setThreads(prev => prev.map(t => 
            t.id === selectedProjectId 
            ? { ...t, messages: [...t.messages, newMessage], lastMessage: messageInput, time: "Just now" } 
            : t
        ));
        setMessageInput("");
    };

    const handleAttachmentClick = () => {
        fileInputRef.current?.click();
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            // Mock attachment message
            const newMessage = {
                id: Date.now(),
                sender: "client",
                text: `📎 Attached: ${file.name}`,
                time: "Just now"
            };
            setThreads(prev => prev.map(t => 
                t.id === selectedProjectId 
                ? { ...t, messages: [...t.messages, newMessage] } 
                : t
            ));
        }
    };

    const handleProjectSelect = (id: string) => {
        setSelectedProjectId(id);
        setShowChatMobile(true);
    };

    return (
        <div className="h-[calc(100vh-140px)] flex bg-secondary border border-border rounded-3xl overflow-hidden shadow-2xl relative">
            {/* Sidebar / Projects */}
            <div className={`${showChatMobile ? "hidden md:flex" : "flex"} w-full md:w-80 border-r border-white/5 flex-col bg-background/20 backdrop-blur-md z-10`}>
                <div className="p-6 border-b border-white/5 flex items-center justify-between">
                    <h2 className="text-xl font-bold font-heading">Project Inbox</h2>
                    <span className="text-[10px] font-bold px-2 py-0.5 bg-white/5 rounded-full text-muted">{projectThreads.length}</span>
                </div>
                <div className="flex-1 overflow-y-auto p-4 space-y-3">
                    {threads.map((thread) => (
                        <div 
                            key={thread.id}
                            onClick={() => handleProjectSelect(thread.id)}
                            className={`p-4 rounded-2xl cursor-pointer transition-all border ${
                                selectedProjectId === thread.id 
                                ? "bg-accent-red/10 border-accent-red/20 shadow-lg shadow-red-500/5 translate-x-1" 
                                : "bg-transparent border-transparent hover:bg-white/5"
                            }`}
                        >
                            <div className="flex items-center space-x-3">
                                <div className={`w-10 h-10 rounded-xl flex items-center justify-center text-white font-bold text-xs ${
                                    selectedProjectId === thread.id ? "bg-accent-red" : "bg-white/5 border border-white/10"
                                }`}>
                                    <FileText size={16} />
                                </div>
                                <div className="flex-1 overflow-hidden">
                                    <div className="flex justify-between items-center mb-0.5">
                                        <p className="font-bold text-sm truncate pr-2">{thread.name}</p>
                                        <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                                            thread.status === "Online" ? "bg-green-500" : "bg-yellow-500"
                                        }`} />
                                    </div>
                                    <p className="text-[10px] text-muted truncate italic opacity-60">
                                        {thread.staff.name}: {thread.lastMessage}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Chat Area */}
            <div className={`${showChatMobile ? "flex" : "hidden md:flex"} flex-1 flex-col relative z-0 animate-in fade-in slide-in-from-right-4 duration-300`}>
                {/* Chat Header */}
                <div className="p-4 md:p-6 border-b border-white/5 flex justify-between items-center bg-background/10 backdrop-blur-md">
                    <div className="flex items-center space-x-4">
                        <button 
                            onClick={() => setShowChatMobile(false)}
                            className="md:hidden p-2 -ml-2 text-muted hover:text-accent-red transition-colors"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <div className="relative">
                            <div className="w-12 h-12 rounded-full bg-accent-red flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-red-500/20">
                                {activeThread.staff.avatar}
                            </div>
                            <div className={`absolute -bottom-0.5 -right-0.5 w-3.5 h-3.5 rounded-full border-2 border-background ${
                                activeThread.status === "Online" ? "bg-green-500" : "bg-yellow-500"
                            }`}></div>
                        </div>
                        <div>
                            <h3 className="font-bold font-heading text-lg">{activeThread.name}</h3>
                            <p className="text-xs text-muted flex items-center">
                                <span className="text-accent-red font-bold mr-1">{activeThread.staff.name}</span> • {activeThread.staff.role}
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center space-x-2">
                        <button className="px-4 py-2 border border-white/10 rounded-xl text-[10px] font-bold uppercase tracking-widest hover:bg-white/5 transition-all hidden lg:block">
                            Project Files
                        </button>
                        <button 
                            suppressHydrationWarning
                            className="p-2 text-muted hover:text-foreground hover:bg-white/5 rounded-full transition-colors"
                        >
                            <MoreHorizontal size={24} />
                        </button>
                    </div>
                </div>

                {/* Messages Container */}
                <div className="flex-1 overflow-y-auto p-10 space-y-8 custom-scrollbar">
                    <div className="flex justify-center">
                        <span className="text-[10px] font-bold uppercase tracking-widest px-4 py-1 bg-white/5 border border-white/10 rounded-full text-muted">Sprint Sync</span>
                    </div>

                    <AnimatePresence mode="wait">
                        <motion.div
                            key={selectedProjectId}
                            initial={{ opacity: 0, scale: 0.98 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="space-y-8"
                        >
                            {activeThread.messages.map((msg) => (
                                <div 
                                    key={msg.id}
                                    className={`flex items-start space-x-4 ${msg.sender === "client" ? "flex-row-reverse space-x-reverse" : ""}`}
                                >
                                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-[10px] shrink-0 border border-white/10 ${
                                        msg.sender === "staff" ? "bg-accent-red" : "bg-black/5 dark:bg-zinc-800"
                                    }`}>
                                        {msg.sender === "staff" ? activeThread.staff.avatar : "JD"}
                                    </div>
                                    <div className={`max-w-[70%] p-5 rounded-2xl shadow-xl ${
                                        msg.sender === "staff" 
                                        ? "bg-secondary border border-border rounded-tl-none" 
                                        : "bg-accent-red text-white rounded-tr-none shadow-red-500/10"
                                    }`}>
                                        <div className="flex justify-between items-center mb-1.5 gap-4">
                                            <span className="text-[10px] font-bold uppercase tracking-widest opacity-60">
                                                {msg.sender === "staff" ? activeThread.staff.name : "You"}
                                            </span>
                                            <span className="text-[10px] opacity-40 font-mono">{msg.time}</span>
                                        </div>
                                        <p className="text-sm leading-relaxed">{msg.text}</p>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Input Area */}
                <div className="p-8 bg-background/30 backdrop-blur-xl border-t border-white/5">
                    <div className="max-w-4xl mx-auto flex items-center space-x-4">
                        <input 
                            type="file" 
                            ref={fileInputRef} 
                            onChange={handleFileChange} 
                            className="hidden" 
                        />
                        <button 
                            suppressHydrationWarning
                            onClick={handleAttachmentClick}
                            className="p-3 text-muted hover:text-accent-red transition-colors"
                        >
                            <Paperclip size={22} />
                        </button>
                        <div className="flex-1 relative">
                            <input
                                suppressHydrationWarning
                                type="text"
                                value={messageInput}
                                onChange={(e) => setMessageInput(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && handleSendMessage()}
                                placeholder={`Message ${activeThread.staff.name} about ${activeThread.id}...`}
                                className="w-full bg-background border border-white/10 rounded-2xl px-6 py-5 text-sm focus:outline-none focus:ring-1 focus:ring-accent-red transition-all shadow-inner placeholder:text-muted/50"
                            />
                            <button 
                                suppressHydrationWarning
                                onClick={handleSendMessage}
                                className="absolute right-3 top-2.5 p-2.5 bg-accent-red text-white rounded-xl hover:bg-red-600 transition-all shadow-lg shadow-red-500/20 active:scale-95 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                                disabled={!messageInput.trim()}
                            >
                                <Send size={20} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
