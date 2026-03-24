"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, ChevronRight, ChevronLeft } from "lucide-react";

import { useTranslations } from "next-intl";

export default function Contact() {
    const t = useTranslations("Contact");
    const [step, setStep] = useState(1);
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        projectType: "",
        scopeType: "",
        timeline: "",
        details: "",
        srsDocument: null as File | null,
    });

    const handleChange = (e: any) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const nextStep = () => setStep((s) => Math.min(s + 1, 3));
    const prevStep = () => setStep((s) => Math.max(s - 1, 1));

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // Simulate form submission delay
        setTimeout(() => {
            setSubmitted(true);
        }, 1000);
    };

    return (
        <section id="contact" className="py-32 relative">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-6xl font-heading font-extrabold mb-6">
                        {t("title")} <span className="text-accent-red">{t("project")}</span>
                    </h2>
                    <p className="text-muted text-lg max-w-2xl mx-auto">
                        {t("description")}
                    </p>
                </motion.div>

                <div className="max-w-3xl mx-auto bg-background dark:bg-secondary rounded-3xl p-8 md:p-12 relative overflow-hidden shadow-2xl dark:shadow-none border border-border/50">
                    {/* Progress Bar */}
                    {!submitted && (
                        <div className="mb-12">
                            <div className="flex justify-between mb-4">
                                <span className={`text-xs md:text-sm font-medium ${step >= 1 ? "text-accent-red" : "text-muted"}`}>{t("personalInfo")}</span>
                                <span className={`text-xs md:text-sm font-medium ${step >= 2 ? "text-accent-red" : "text-muted"}`}>{t("projectScope")}</span>
                                <span className={`text-xs md:text-sm font-medium ${step >= 3 ? "text-accent-red" : "text-muted"}`}>{t("details")}</span>
                            </div>
                            <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full bg-accent-red"
                                    initial={{ width: "33%" }}
                                    animate={{ width: `${(step / 3) * 100}%` }}
                                    transition={{ duration: 0.4 }}
                                />
                            </div>
                        </div>
                    )}

                    <AnimatePresence mode="wait">
                        {!submitted ? (
                            <motion.form
                                key={step}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                onSubmit={handleSubmit}
                                className="space-y-6"
                            >
                                {step === 1 && (
                                    <div className="space-y-6">
                                        <div>
                                            <label className="block text-sm font-medium text-foreground/80 mb-2">{t("fullName")}</label>
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                suppressHydrationWarning
                                                className="w-full bg-background rounded-xl px-4 py-4 text-foreground placeholder-muted focus:outline-none focus:ring-1 focus:ring-accent-red transition-all"
                                                placeholder="e.g. John Doe"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-foreground/80 mb-2">{t("phoneNumber")}</label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                suppressHydrationWarning
                                                className="w-full bg-secondary/20 border border-border rounded-xl px-4 py-4 text-foreground placeholder-muted focus:outline-none focus:ring-1 focus:ring-accent-red transition-all"
                                                placeholder="+250 788 000 000"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-foreground/80 mb-2">{t("email")}</label>
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                suppressHydrationWarning
                                                className="w-full bg-secondary/20 border border-border rounded-xl px-4 py-4 text-foreground placeholder-muted focus:outline-none focus:ring-1 focus:ring-accent-red transition-all"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>
                                )}

                                {step === 2 && (
                                    <div className="space-y-6">
                                        <div>
                                            <label className="block text-sm font-medium text-foreground/80 mb-2">{t("projectType")}</label>
                                            <select
                                                name="projectType"
                                                required
                                                value={formData.projectType}
                                                onChange={handleChange}
                                                suppressHydrationWarning
                                                className="w-full bg-background rounded-xl px-4 py-4 text-foreground focus:outline-none focus:ring-1 focus:ring-accent-red transition-all appearance-none"
                                            >
                                                <option value="" className="bg-background dark:bg-secondary">Select a service</option>
                                                <option value="web" className="bg-background dark:bg-secondary">Luxury Web Design</option>
                                                <option value="platform" className="bg-background dark:bg-secondary">Full Stack Platform</option>
                                                <option value="mobile" className="bg-background dark:bg-secondary">Mobile App Development</option>
                                                <option value="maintenance" className="bg-background dark:bg-secondary">Elite System Maintenance</option>
                                                <option value="mentorship" className="bg-background dark:bg-secondary">Professional Mentorship</option>
                                                <option value="other" className="bg-background dark:bg-secondary">Other / Consulting</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-foreground/80 mb-2">{t("objective")}</label>
                                            <select
                                                name="scopeType"
                                                required
                                                value={formData.scopeType}
                                                onChange={handleChange}
                                                suppressHydrationWarning
                                                className="w-full bg-secondary/20 border border-border rounded-xl px-4 py-4 text-foreground focus:outline-none focus:ring-1 focus:ring-accent-red transition-all appearance-none"
                                            >
                                                <option value="" className="bg-background dark:bg-secondary">Select primary goal</option>
                                                <option value="branding" className="bg-background dark:bg-secondary">Elite Brand Identity & Digital Presence</option>
                                                <option value="mvp" className="bg-background dark:bg-secondary">Scalable MVP / Market Entry</option>
                                                <option value="expansion" className="bg-background dark:bg-secondary">Business Expansion & Automation</option>
                                                <option value="revamp" className="bg-background dark:bg-secondary">System Overhaul & Performance Optimization</option>
                                            </select>
                                        </div>
                                    </div>
                                )}

                                {step === 3 && (
                                    <div className="space-y-6">
                                        <div>
                                            <label className="block text-sm font-medium text-foreground/80 mb-2">{t("projectDetails")}</label>
                                            <textarea
                                                name="details"
                                                required
                                                rows={4}
                                                value={formData.details}
                                                onChange={handleChange}
                                                suppressHydrationWarning
                                                className="w-full bg-background rounded-xl px-4 py-4 text-foreground placeholder-muted focus:outline-none focus:ring-1 focus:ring-accent-red transition-all resize-none"
                                                placeholder="Describe your vision and requirements..."
                                            ></textarea>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-foreground/80 mb-2">{t("srs")}</label>
                                            <div className="relative group/file">
                                                <input
                                                    type="file"
                                                    name="srsDocument"
                                                    onChange={(e) => setFormData({ ...formData, srsDocument: e.target.files?.[0] || null })}
                                                    className="hidden"
                                                    id="srs-upload"
                                                    suppressHydrationWarning
                                                />
                                                <label
                                                    htmlFor="srs-upload"
                                                    className="flex items-center justify-between w-full bg-secondary/30 border border-dashed border-border rounded-xl px-4 py-4 cursor-pointer group-hover/file:border-accent-red transition-all"
                                                >
                                                    <span className="text-muted text-sm truncate">
                                                        {formData.srsDocument ? formData.srsDocument.name : "Upload Specification Document (PDF/Doc)..."}
                                                    </span>
                                                    <div className="px-3 py-1 bg-accent-red/10 text-accent-red rounded-lg text-xs font-semibold">
                                                        Browse
                                                    </div>
                                                </label>
                                            </div>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-foreground/80 mb-2">{t("timeline")}</label>
                                            <input
                                                type="text"
                                                name="timeline"
                                                value={formData.timeline}
                                                onChange={handleChange}
                                                suppressHydrationWarning
                                                className="w-full bg-secondary/20 border border-border rounded-xl px-4 py-4 text-foreground placeholder-muted focus:outline-none focus:ring-1 focus:ring-accent-red transition-all"
                                                placeholder="e.g., 2-3 months, ASAP"
                                            />
                                        </div>
                                    </div>
                                )}

                                <div className="flex justify-between pt-6 mt-8">
                                    {step > 1 ? (
                                        <button
                                            type="button"
                                            onClick={prevStep}
                                            suppressHydrationWarning
                                            className="px-6 py-3 bg-secondary text-foreground rounded-xl transition-all flex items-center font-medium"
                                        >
                                            <ChevronLeft size={18} className="mr-2" /> {t("back")}
                                        </button>
                                    ) : <div></div>}

                                    {step < 3 ? (
                                        <button
                                            type="button"
                                            onClick={nextStep}
                                            suppressHydrationWarning
                                            className="px-6 py-3 bg-accent-red hover:bg-red-600 text-white rounded-xl shadow-[0_0_15px_rgba(255,49,49,0.3)] transition-all flex items-center font-medium"
                                        >
                                            {t("continue")} <ChevronRight size={18} className="ml-2" />
                                        </button>
                                    ) : (
                                        <button
                                            type="submit"
                                            suppressHydrationWarning
                                            className="px-8 py-3 bg-accent-red hover:bg-red-600 text-white rounded-xl shadow-[0_0_15px_rgba(255,49,49,0.3)] transition-all flex items-center font-medium"
                                        >
                                            {t("submit")} <Send size={18} className="ml-2" />
                                        </button>
                                    )}
                                </div>
                            </motion.form>
                        ) : (
                            <motion.div
                                key="success"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-center py-12"
                            >
                                <div className="w-20 h-20 bg-accent-red/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <CheckCircle2 size={40} className="text-accent-red" />
                                </div>
                                <h3 className="text-3xl font-bold font-heading text-foreground mb-4">{t("successTitle")}</h3>
                                <p className="text-muted mb-8 max-w-md mx-auto">
                                    {t("successMessage")}
                                </p>
                                <button
                                    onClick={() => { setSubmitted(false); setStep(1); }}
                                    className="px-8 py-3 bg-secondary hover:bg-secondary/80 border border-border text-foreground rounded-xl font-medium transition-all"
                                >
                                    {t("sendAnother")}
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>

            {/* Section Divider */}
            <div className="flex justify-center py-16">
                <div className="h-px w-32 bg-gradient-to-r from-transparent via-accent-red/30 to-transparent"></div>
            </div>
        </section>
    );
}
