"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageSquare, Clock, Globe } from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function ContactPage() {
    const t = useTranslations("Contact");
    const [formStatus, setFormStatus] = useState<"idle" | "submitting" | "success">("idle");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setFormStatus("submitting");
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        setFormStatus("success");
    };

    return (
        <div className="pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="inline-flex items-center space-x-2 px-4 py-2 bg-accent-red/10 rounded-full text-accent-red mb-6"
                    >
                        <MessageSquare size={16} />
                        <span className="text-xs font-bold uppercase tracking-widest">{t("badge")}</span>
                    </motion.div>
                    <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 italic">
                        {t("title.start")} <span className="text-accent-red not-italic">{t("title.highlight")}</span>
                    </h1>
                    <p className="text-muted text-lg max-w-2xl mx-auto">
                        {t("description")}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                className="p-8 bg-secondary/30 border border-border rounded-3xl hover:border-accent-red/20 transition-all group"
                            >
                                <div className="w-12 h-12 bg-accent-red/10 rounded-2xl flex items-center justify-center text-accent-red mb-6 group-hover:scale-110 transition-transform">
                                    <Mail size={24} />
                                </div>
                                <h3 className="text-xl font-bold mb-2">{t("info.email.label")}</h3>
                                <p className="text-muted text-sm break-all font-medium">shalom.dev@elite.com</p>
                                <p className="text-accent-red text-[10px] font-bold uppercase tracking-widest mt-4">{t("info.email.sub")}</p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.1 }}
                                className="p-8 bg-secondary/30 border border-border rounded-3xl hover:border-accent-red/20 transition-all group"
                            >
                                <div className="w-12 h-12 bg-accent-red/10 rounded-2xl flex items-center justify-center text-accent-red mb-6 group-hover:scale-110 transition-transform">
                                    <Phone size={24} />
                                </div>
                                <h3 className="text-xl font-bold mb-2">{t("info.phone.label")}</h3>
                                <p className="text-muted text-sm font-medium">+250 788 000 000</p>
                                <p className="text-accent-red text-[10px] font-bold uppercase tracking-widest mt-4">{t("info.phone.sub")}</p>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="p-8 bg-secondary/30 border border-border rounded-3xl overflow-hidden relative group"
                        >
                            <div className="relative z-10">
                                <div className="flex items-center space-x-4 mb-6">
                                    <div className="w-12 h-12 bg-accent-red/10 rounded-2xl flex items-center justify-center text-accent-red">
                                        <MapPin size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold">{t("info.location.label")}</h3>
                                        <p className="text-muted text-sm">{t("info.location.sub")}</p>
                                    </div>
                                </div>
                                <div className="space-y-4">
                                    <div className="flex items-center space-x-3 text-sm text-muted">
                                        <Globe size={16} className="text-accent-red" />
                                        <span>Kigali, Rwanda • Remote Worldwide</span>
                                    </div>
                                    <div className="flex items-center space-x-3 text-sm text-muted">
                                        <Clock size={16} className="text-accent-red" />
                                        <span>Mon - Fri • 09:00 - 18:00 (GMT+2)</span>
                                    </div>
                                </div>
                            </div>
                            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                                <MapPin size={160} />
                            </div>
                        </motion.div>
                    </div>

                    {/* Contact Form */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="bg-secondary/30 border border-border rounded-[40px] p-8 md:p-12 shadow-2xl relative overflow-hidden"
                    >
                        {formStatus === "success" ? (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="h-full flex flex-col items-center justify-center text-center py-12"
                            >
                                <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mb-6">
                                    <Send size={40} />
                                </div>
                                <h3 className="text-3xl font-bold mb-4">{t("form.success.title")}</h3>
                                <p className="text-muted mb-8">{t("form.success.message")}</p>
                                <button
                                    onClick={() => setFormStatus("idle")}
                                    className="px-8 py-3 bg-white/5 hover:bg-white/10 rounded-full font-bold transition-all"
                                >
                                    {t("form.success.button")}
                                </button>
                            </motion.div>
                        ) : (
                            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-muted ml-1">{t("form.name")}</label>
                                        <input
                                            required
                                            type="text"
                                            className="w-full bg-background/50 border border-border focus:border-accent-red/50 rounded-2xl px-6 py-4 outline-none transition-all font-medium text-sm"
                                            placeholder="Shalom Dev"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-muted ml-1">{t("form.email")}</label>
                                        <input
                                            required
                                            type="email"
                                            className="w-full bg-background/50 border border-border focus:border-accent-red/50 rounded-2xl px-6 py-4 outline-none transition-all font-medium text-sm"
                                            placeholder="hello@world.com"
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-muted ml-1">{t("form.subject")}</label>
                                    <select className="w-full bg-background/50 border border-border focus:border-accent-red/50 rounded-2xl px-6 py-4 outline-none transition-all font-medium text-sm appearance-none">
                                        <option>{t("form.options.new")}</option>
                                        <option>{t("form.options.legal")}</option>
                                        <option>{t("form.options.support")}</option>
                                    </select>
                                </div>
                                <div className="space-y-2">
                                    <label className="text-[10px] font-bold uppercase tracking-widest text-muted ml-1">{t("form.message")}</label>
                                    <textarea
                                        required
                                        rows={5}
                                        className="w-full bg-background/50 border border-border focus:border-accent-red/50 rounded-2xl px-6 py-4 outline-none transition-all font-medium text-sm resize-none"
                                        placeholder={t("form.placeholder")}
                                    />
                                </div>
                                <button
                                    disabled={formStatus === "submitting"}
                                    type="submit"
                                    className="w-full py-5 bg-accent-red hover:bg-red-600 disabled:bg-muted text-white rounded-2xl font-black text-lg flex items-center justify-center transition-all shadow-xl shadow-red-500/20 group"
                                >
                                    {formStatus === "submitting" ? (
                                        <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                    ) : (
                                        <>
                                            {t("form.submit")}
                                            <Send size={20} className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                                        </>
                                    )}
                                </button>
                            </form>
                        )}
                        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-accent-red/10 blur-[100px] pointer-events-none" />
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
