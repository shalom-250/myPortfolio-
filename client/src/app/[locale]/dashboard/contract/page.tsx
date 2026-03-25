"use client";

import { motion } from "framer-motion";
import { 
  FileText, Download, Upload, Clock, CheckCircle2, 
  AlertCircle, ChevronRight, Shield, Calendar, CreditCard,
  ExternalLink, Printer, Share2, MoreVertical
} from "lucide-react";
import { useTranslations } from "next-intl";
import { useState } from "react";

export default function ContractPage() {
    const t = useTranslations("DashboardContract");
    const [status, setStatus] = useState<"pending" | "signed" | "review">("pending");

    const contractDetails = [
        { label: t("details.type"), value: "Full Stack Development Agreement", icon: FileText },
        { label: t("details.id"), value: "SHL-2024-0892", icon: Shield },
        { label: t("details.date"), value: new Date().toLocaleDateString(), icon: Calendar },
        { label: t("details.value"), value: "RFW 5,999,000", icon: CreditCard },
    ];

    return (
        <div className="space-y-12 pb-24">
            {/* Header Area with Glassmorphic Floating Style */}
            <div className="flex flex-col xl:flex-row xl:items-center justify-between gap-8">
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <div className="flex items-center space-x-3 mb-4">
                        <div className="h-px w-8 bg-accent-red"></div>
                        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-accent-red italic">Documentation Suite</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-black font-heading tracking-tighter mb-4 italic">
                        {t("title").split(' ')[0]} <span className="text-accent-red not-italic">{t("title").split(' ')[1]}</span>
                    </h1>
                    <p className="text-muted text-lg max-w-xl font-medium opacity-70 leading-relaxed italic">
                        {t("subtitle")}
                    </p>
                </motion.div>

                <motion.div 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-wrap items-center gap-4"
                >
                    <button className="group flex items-center space-x-3 px-8 py-4 bg-white/5 hover:bg-white/10 rounded-2xl font-black text-xs uppercase tracking-widest transition-all border border-white/5 hover:border-white/20 backdrop-blur-md">
                        <Download size={18} className="text-accent-red group-hover:scale-125 transition-transform" />
                        <span>{t("downloadBtn")}</span>
                    </button>
                    <button className="group flex items-center space-x-3 px-8 py-4 bg-accent-red hover:bg-red-600 text-white rounded-2xl font-black text-xs uppercase tracking-widest transition-all shadow-2xl shadow-red-500/30 border border-white/20">
                        <Upload size={18} className="group-hover:scale-125 transition-transform" />
                        <span>{t("uploadBtn")}</span>
                    </button>
                    <div className="w-px h-10 bg-white/10 mx-2 hidden md:block"></div>
                    <button className="p-4 bg-white/5 hover:bg-white/10 rounded-2xl border border-white/5 transition-colors text-muted hover:text-white">
                        <Printer size={18} />
                    </button>
                </motion.div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                {/* Left Side: Intelligence & Metadata */}
                <div className="lg:col-span-4 space-y-8">
                    {/* Status & Insight Card */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="relative group overflow-hidden"
                    >
                        <div className="absolute inset-0 bg-gradient-to-br from-accent-red/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                        <div className="relative bg-secondary/20 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-10 shadow-2xl">
                            <div className="flex items-center justify-between mb-10">
                                <h3 className="text-sm font-black uppercase tracking-[0.2em] text-white flex items-center italic">
                                    <Clock size={16} className="mr-3 text-accent-red" />
                                    {t("statusTitle")}
                                </h3>
                                <div className="flex space-x-1">
                                    {[1,2,3].map(i => <div key={i} className={`w-1 h-1 rounded-full ${i <= 2 ? 'bg-accent-red' : 'bg-white/20'}`}></div>)}
                                </div>
                            </div>
                            
                            <div className="flex items-center mb-12 p-6 bg-white/5 rounded-3xl border border-white/5 relative overflow-hidden group/status">
                                <div className="absolute -right-4 -top-4 w-24 h-24 bg-accent-red/10 rounded-full blur-3xl group-hover/status:bg-accent-red/20 transition-colors"></div>
                                <div className={`relative p-4 rounded-2xl mr-5 shadow-inner ${status === "pending" ? "bg-amber-500/20 text-amber-500" : "bg-green-500/20 text-green-500"}`}>
                                    {status === "pending" ? <AlertCircle size={32} /> : <CheckCircle2 size={32} />}
                                </div>
                                <div className="relative">
                                    <p className="text-[9px] font-black uppercase tracking-[0.2em] text-muted mb-1.5 opacity-60">{t("currentStatus")}</p>
                                    <p className="text-2xl font-black font-heading tracking-tight italic flex items-center">
                                        {status === "pending" ? t("statusPending") : t("statusSigned")}
                                        <ChevronRight size={16} className="ml-2 text-accent-red opacity-0 group-hover/status:opacity-100 transition-opacity" />
                                    </p>
                                </div>
                            </div>

                            <div className="space-y-2">
                                {contractDetails.map((detail, i) => (
                                    <div key={i} className="flex justify-between items-center p-4 hover:bg-white/5 rounded-2xl transition-all border border-transparent hover:border-white/5 group/detail">
                                        <div className="flex items-center">
                                            <detail.icon size={14} className="mr-3 text-muted group-hover/detail:text-accent-red transition-colors" />
                                            <span className="text-xs font-bold text-muted group-hover/detail:text-white transition-colors">{detail.label}</span>
                                        </div>
                                        <span className="text-xs font-black text-white italic">{detail.value}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </motion.div>

                    {/* Legal Compliance & Security Insight */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                        className="bg-black/40 backdrop-blur-xl border border-accent-red/20 rounded-[2rem] p-8 relative overflow-hidden group shadow-xl"
                    >
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:scale-150 group-hover:opacity-10 transition-all duration-1000">
                           <Shield size={120} />
                        </div>
                        <div className="relative flex items-center text-accent-red mb-4">
                            <div className="p-2 bg-accent-red/10 rounded-lg mr-3">
                                <Shield size={20} />
                            </div>
                            <h4 className="font-black uppercase tracking-widest text-xs italic">{t("legalNoticeTitle")}</h4>
                        </div>
                        <p className="relative text-xs text-muted leading-relaxed font-medium italic opacity-80">
                            {t("legalNoticeText")}
                        </p>
                    </motion.div>
                </div>

                {/* Right Side: Elite Contract Viewer (Paper Experience) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                    className="lg:col-span-8 relative group"
                >
                    {/* Viewer Controls Layer */}
                    <div className="absolute top-8 right-8 z-40 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <button className="p-2.5 bg-white/10 hover:bg-accent-red rounded-xl backdrop-blur-xl text-white transition-all shadow-lg">
                            <Share2 size={16} />
                        </button>
                        <button className="p-2.5 bg-white/10 hover:bg-accent-red rounded-xl backdrop-blur-xl text-white transition-all shadow-lg">
                            <MoreVertical size={16} />
                        </button>
                    </div>

                    <div className="bg-[#050505] border border-white/10 rounded-[3rem] overflow-hidden flex flex-col min-h-[900px] shadow-[0_40px_100px_rgba(0,0,0,0.8)] relative">
                        {/* Decorative Texture Layer */}
                        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
                        
                        {/* Status Bar */}
                        <div className="relative p-10 border-b border-white/5 flex items-center justify-between bg-white/[0.02]">
                            <div className="flex items-center space-x-4">
                                <div className="p-3 bg-accent-red/10 rounded-2xl text-accent-red shadow-inner">
                                    <FileText size={24} />
                                </div>
                                <div className="space-y-1">
                                    <h3 className="text-xl font-black font-heading tracking-tight italic">{t("templateHeader")}</h3>
                                    <div className="flex items-center text-[9px] font-black text-muted uppercase tracking-[0.2em]">
                                        <span className="text-accent-red mr-2">v2.4</span>
                                        <span className="w-1 h-1 bg-white/20 rounded-full mx-2"></span>
                                        <span>Standard Enterprise Agreement</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center space-x-3 px-5 py-2.5 bg-green-500/10 border border-green-500/20 rounded-2xl">
                                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                                <span className="text-[10px] font-black text-green-500 uppercase tracking-widest leading-none italic">System Verified</span>
                            </div>
                        </div>

                        {/* Document Content */}
                        <div className="relative flex-1 p-12 md:p-20 overflow-y-auto scrollbar-hide bg-gradient-to-b from-transparent via-white/[0.01] to-white/[0.02]">
                            <div className="max-w-3xl mx-auto space-y-16 py-12 text-base text-muted/70 leading-8 font-serif italic">
                                {/* Elegant Document Header */}
                                <div className="text-center space-y-6 mb-24 relative">
                                    <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-40 h-px bg-gradient-to-r from-transparent via-accent-red to-transparent opacity-50"></div>
                                    <p className="text-[10px] uppercase tracking-[0.5em] font-sans font-black text-accent-red mb-2">Protocol 8821-X</p>
                                    <h2 className="text-5xl md:text-6xl font-heading font-black text-white not-italic tracking-tighter leading-none">
                                        {t("contractTitle")}
                                    </h2>
                                    <div className="flex items-center justify-center space-x-4 text-[9px] uppercase tracking-[0.3em] font-sans font-black text-muted/50">
                                        <span>Secure</span>
                                        <span className="w-1 h-1 bg-accent-red rounded-full"></span>
                                        <span>Confidential</span>
                                        <span className="w-1 h-1 bg-accent-red rounded-full"></span>
                                        <span>Irrevocable</span>
                                    </div>
                                </div>

                                {/* Refined Section Styling */}
                                {[
                                    { title: t("sections.intro.title"), content: t("sections.intro.content") },
                                    { title: t("sections.scope.title"), content: t("sections.scope.content"), list: t.raw("sections.scope.items") },
                                    { title: t("sections.payment.title"), content: t("sections.payment.content") }
                                ].map((section, idx) => (
                                    <motion.div 
                                        key={idx}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        className="space-y-6 relative group/section"
                                    >
                                        <div className="absolute -left-12 top-0 text-[10px] font-black text-accent-red opacity-20 group-hover/section:opacity-100 transition-opacity font-sans py-1">
                                            0{idx + 1}
                                        </div>
                                        <h4 className="text-white font-black font-sans uppercase tracking-[0.25em] text-xs flex items-center italic">
                                            <span className="w-12 h-px bg-accent-red mr-4 group-hover:w-20 transition-all duration-700" />
                                            {section.title}
                                        </h4>
                                        <p className="pl-0 border-l-2 border-transparent group-hover:border-accent-red/10 group-hover:pl-6 transition-all duration-500">
                                            {section.content}
                                        </p>
                                        {section.list && (
                                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-0 py-4 font-sans not-italic">
                                                {section.list.map((item: string, i: number) => (
                                                    <li key={i} className="flex items-start space-x-3 p-4 bg-white/[0.02] border border-white/5 rounded-2xl hover:border-accent-red/20 transition-colors">
                                                        <CheckCircle2 size={16} className="text-accent-red mt-0.5 shrink-0" />
                                                        <span className="text-xs font-bold leading-relaxed">{item}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        )}
                                    </motion.div>
                                ))}

                                {/* Digital Signatures Section */}
                                <div className="pt-32 mt-32 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-16 font-sans italic relative">
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 px-8 py-2 bg-black border border-white/10 rounded-full text-[9px] font-black uppercase tracking-[0.4em] text-muted">
                                        Verification Required
                                    </div>
                                    
                                    <div className="space-y-10 group/sig">
                                        <div className="flex items-center space-x-3">
                                            <Shield size={14} className="text-accent-red" />
                                            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-muted group-hover/sig:text-white transition-colors">Developer Entity</p>
                                        </div>
                                        <div className="h-24 flex items-center relative">
                                            <div className="absolute inset-0 bg-accent-red/5 blur-3xl rounded-full opacity-0 group-hover/sig:opacity-100 transition-opacity"></div>
                                            <p className="text-5xl font-signature text-accent-red relative transform -rotate-3 hover:rotate-0 transition-transform duration-700 cursor-default select-none">Shalom Developer</p>
                                        </div>
                                        <div className="h-px bg-gradient-to-r from-accent-red to-transparent w-full opacity-30" />
                                        <p className="text-[8px] font-black uppercase tracking-widest text-muted/30">Verified via Blockchain Hash 0x921...8821</p>
                                    </div>

                                    <div className="space-y-10 group/sig-client">
                                        <div className="flex items-center space-x-3">
                                            <Calendar size={14} className="text-muted" />
                                            <p className="text-[10px] font-black uppercase tracking-[0.3em] text-muted group-hover/sig-client:text-white transition-colors">Client Authority</p>
                                        </div>
                                        <div className="h-24 border-2 border-dashed border-white/5 rounded-[2.5rem] flex flex-col items-center justify-center group-hover/sig-client:border-accent-red/30 transition-all bg-white/[0.01] cursor-pointer hover:bg-white/[0.03]">
                                            <CheckCircle2 size={24} className="text-muted/10 mb-2 group-hover/sig-client:text-accent-red group-hover/sig-client:animate-bounce" />
                                            <span className="text-[10px] uppercase font-black text-muted/20 tracking-widest group-hover/sig-client:text-accent-red transition-colors italic">{t("pending")}</span>
                                        </div>
                                        <div className="h-px bg-white/10 w-full" />
                                        <button className="text-[9px] font-black uppercase tracking-widest text-accent-red hover:underline transition-all">Request Immediate Sign-off</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
