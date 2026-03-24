"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Paperclip, MoreVertical, Search, CheckCheck } from "lucide-react";

export default function Messages() {
    const [message, setMessage] = useState("");

    const d = new Date();
    const time = d.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    const [chatHistory, setChatHistory] = useState([
        { id: 1, sender: "EliteDev", text: "Hello John! I've reviewed the requirements for the new feature.", time: "09:42 AM", isMe: false },
        { id: 2, sender: "EliteDev", text: "The API integration will take about 2 days. Let me know if that works.", time: "09:43 AM", is.Me: false },
        { id: 3, sender: "John Doe", text: "That sounds perfect. Can we also include the Stripe webhook?", time: "10:15 AM", isMe: true },
        { id: 4, sender: "EliteDev", text: "Absolutely, I'll add that to the current sprint.", time: "10:20 AM", isMe: false },
    ]);

    const handleSend = (e: React.FormEvent) => {
        e.preventDefault();
        if (!message.trim()) return;

        setChatHistory([
            ...chatHistory,
            { id: Date.now(), sender: "John Doe", text: message, time, isMe: true }
        ]);
        setMessage("");
    };

    return (
        <div className="max-w-6xl mx-auto h-[calc(100vh-140px)] flex bg-secondary/10 border border-white/5 rounded-3xl overflow-hidden shadow-2xl">
            {/* Sidebar - Contacts */}
            <div className="w-80 border-r border-white/5 bg-background/50 flex-col hidden md:flex">
                <div className="p-6 border-b border-white/5">
                    <h2 className="text-xl font-heading font-bold text-white mb-4">Messages</h2>
                    <div className="relative">
                        <Search size={16} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted" />
                        <input
                            type="text"
                            placeholder="Search conversations..."
                            className="w-full bg-white/5 border border-white/10 rounded-xl py-2 pl-10 pr-4 text-sm text-white focus:outline-none focus:border-accent"
                        />
                    </div>
                </div>

                <div className="flex-1 overflow-y-auto overflow-x-hidden p-2">
                    {/* Active Conversation */}
                    <div className="p-4 rounded-2xl bg-white/10 cursor-pointer flex items-center space-x-4 relative">
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-accent rounded-r-full"></div>
                        <div className="relative">
                            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-accent to-orange-600 flex items-center justify-center text-white font-bold text-lg">
                                ED
                            </div>
                            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-background"></div>
                        </div>
                        <div className="flex-1 min-w-0">
                            <div className="flex justify-between items-baseline mb-1">
                                <h4 className="text-white font-medium truncate">EliteDev</h4>
                                <span className="text-xs text-accent">10:20 AM</span>
                            </div>
                            <p className="text-sm text-muted truncate">Absolutely, I'll add that to the sprint.</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Chat Area */}
            <div className="flex-1 flex flex-col bg-background/20 relative">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full filter blur-[100px] pointer-events-none"></div>

                {/* Chat Header */}
                <div className="py-4 px-6 border-b border-white/5 flex justify-between items-center bg-background/40 backdrop-blur-md z-10">
                    <div className="flex items-center space-x-4 p-1">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-accent to-orange-600 flex items-center justify-center text-white font-bold">
                            ED
                        </div>
                        <div>
                            <h3 className="text-white font-medium">EliteDev Support</h3>
                            <p className="text-xs text-green-400 flex items-center">
                                <span className="w-1.5 h-1.5 bg-green-400 rounded-full mr-1.5"></span> Online
                            </p>
                        </div>
                    </div>
                    <button className="p-2 text-muted hover:text-white rounded-full hover:bg-white/5 transition-colors">
                        <MoreVertical size={20} />
                    </button>
                </div>

                {/* Chat Messages */}
                <div className="flex-1 overflow-y-auto p-6 space-y-6 z-10">
                    <div className="text-center text-xs text-muted my-4">Today</div>

                    {chatHistory.map((msg) => (
                        <motion.div
                            key={msg.id}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className={`flex ${msg.isMe ? "justify-end" : "justify-start"}`}
                        >
                            <div className={`max-w-[70%] ${msg.isMe ? "order-1" : "order-2"}`}>
                                <div className={`px-5 py-3 rounded-2xl ${msg.isMe
                                        ? "bg-accent text-white rounded-tr-none shadow-[0_5px_15px_rgba(237,112,20,0.2)]"
                                        : "bg-white/10 border border-white/5 text-white/90 rounded-tl-none"
                                    }`}>
                                    <p className="text-sm md:text-base leading-relaxed">{msg.text}</p>
                                </div>
                                <div className={`flex items-center mt-1.5 text-xs text-muted ${msg.isMe ? "justify-end" : "justify-start"}`}>
                                    <span>{msg.time}</span>
                                    {msg.isMe && <CheckCheck size={14} className="ml-1.5 text-accent" />}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Chat Input */}
                <div className="p-4 bg-background/40 backdrop-blur-md border-t border-white/5 z-10">
                    <form onSubmit={handleSend} className="flex items-end space-x-3 bg-white/5 border border-white/10 rounded-2xl p-2 transition-all focus-within:border-accent/50 focus-within:bg-white/10">
                        <button type="button" className="p-3 text-muted hover:text-white rounded-xl hover:bg-white/10 transition-colors">
                            <Paperclip size={20} />
                        </button>
                        <textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Type your message..."
                            className="flex-1 bg-transparent text-white placeholder-white/30 resize-none outline-none py-3 px-2 max-h-32 min-h-[44px]"
                            rows={1}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' && !e.shiftKey) {
                                    e.preventDefault();
                                    // For React synthetic event we pass a custom mock event or call handleSend safely
                                    handleSend(e as unknown as React.FormEvent);
                                }
                            }}
                        />
                        <button
                            type="submit"
                            disabled={!message.trim()}
                            className="p-3 bg-accent disabled:opacity-50 disabled:hover:scale-100 hover:scale-105 text-white rounded-xl shadow-[0_0_15px_rgba(237,112,20,0.3)] transition-all"
                        >
                            <Send size={20} />
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
