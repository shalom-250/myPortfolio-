"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, ChevronRight, ChevronLeft } from "lucide-react";

export default function Contact() {
    const [step, setStep] = useState(1);
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        projectType: "",
        budget: "",
        timeline: "",
        details: "",
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
                        Start a <span className="text-accent">Project</span>
                    </h2>
                    <p className="text-muted text-lg max-w-2xl mx-auto">
                        Ready to bring your vision to life? Fill out the form below to request a quote
                        or schedule a consultation.
                    </p>
                </motion.div>

                <div className="max-w-3xl mx-auto bg-secondary/10 border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden backdrop-blur-sm shadow-2xl">
                    {/* Progress Bar */}
                    {!submitted && (
                        <div className="mb-12">
                            <div className="flex justify-between mb-4">
                                <span className={`text-xs md:text-sm font-medium ${step >= 1 ? "text-accent" : "text-muted"}`}>Personal Info</span>
                                <span className={`text-xs md:text-sm font-medium ${step >= 2 ? "text-accent" : "text-muted"}`}>Project Scope</span>
                                <span className={`text-xs md:text-sm font-medium ${step >= 3 ? "text-accent" : "text-muted"}`}>Details</span>
                            </div>
                            <div className="h-1 bg-white/10 rounded-full overflow-hidden">
                                <motion.div
                                    className="h-full bg-accent"
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
                                            <label className="block text-sm font-medium text-white/80 mb-2">Full Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleChange}
                                                className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/30 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                                                placeholder="e.g. John Doe"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-white/80 mb-2">Email Address</label>
                                            <input
                                                type="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleChange}
                                                className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/30 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>
                                )}

                                {step === 2 && (
                                    <div className="space-y-6">
                                        <div>
                                            <label className="block text-sm font-medium text-white/80 mb-2">Project Type</label>
                                            <select
                                                name="projectType"
                                                required
                                                value={formData.projectType}
                                                onChange={handleChange}
                                                className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all appearance-none"
                                            >
                                                <option value="" className="bg-[#1f1f1f]">Select a service</option>
                                                <option value="web" className="bg-[#1f1f1f]">Luxury Web Design</option>
                                                <option value="platform" className="bg-[#1f1f1f]">Full Stack Platform</option>
                                                <option value="mobile" className="bg-[#1f1f1f]">Mobile App Development</option>
                                                <option value="other" className="bg-[#1f1f1f]">Other / Consulting</option>
                                            </select>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-white/80 mb-2">Estimated Budget</label>
                                            <select
                                                name="budget"
                                                required
                                                value={formData.budget}
                                                onChange={handleChange}
                                                className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-4 text-white focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all appearance-none"
                                            >
                                                <option value="" className="bg-[#1f1f1f]">Select budget range</option>
                                                <option value="<5k" className="bg-[#1f1f1f]">Under $5,000</option>
                                                <option value="5k-10k" className="bg-[#1f1f1f]">$5,000 - $10,000</option>
                                                <option value="10k-25k" className="bg-[#1f1f1f]">$10,000 - $25,000</option>
                                                <option value=">25k" className="bg-[#1f1f1f]">$25,000+</option>
                                            </select>
                                        </div>
                                    </div>
                                )}

                                {step === 3 && (
                                    <div className="space-y-6">
                                        <div>
                                            <label className="block text-sm font-medium text-white/80 mb-2">Project Details</label>
                                            <textarea
                                                name="details"
                                                required
                                                rows={4}
                                                value={formData.details}
                                                onChange={handleChange}
                                                className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/30 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all resize-none"
                                                placeholder="Tell me about your project, goals, and any specific requirements..."
                                            ></textarea>
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-white/80 mb-2">Desired Timeline (Optional)</label>
                                            <input
                                                type="text"
                                                name="timeline"
                                                value={formData.timeline}
                                                onChange={handleChange}
                                                className="w-full bg-background/50 border border-white/10 rounded-xl px-4 py-4 text-white placeholder-white/30 focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-all"
                                                placeholder="e.g., 2-3 months, ASAP"
                                            />
                                        </div>
                                    </div>
                                )}

                                <div className="flex justify-between pt-6 border-t border-white/10 mt-8">
                                    {step > 1 ? (
                                        <button
                                            type="button"
                                            onClick={prevStep}
                                            className="px-6 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl transition-all flex items-center font-medium"
                                        >
                                            <ChevronLeft size={18} className="mr-2" /> Back
                                        </button>
                                    ) : <div></div>}

                                    {step < 3 ? (
                                        <button
                                            type="button"
                                            onClick={nextStep}
                                            className="px-6 py-3 bg-accent hover:bg-orange-600 text-white rounded-xl shadow-[0_0_15px_rgba(237,112,20,0.3)] transition-all flex items-center font-medium"
                                        >
                                            Continue <ChevronRight size={18} className="ml-2" />
                                        </button>
                                    ) : (
                                        <button
                                            type="submit"
                                            className="px-8 py-3 bg-accent hover:bg-orange-600 text-white rounded-xl shadow-[0_0_15px_rgba(237,112,20,0.3)] transition-all flex items-center font-medium"
                                        >
                                            Submit Request <Send size={18} className="ml-2" />
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
                                <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                                    <CheckCircle2 size={40} className="text-accent" />
                                </div>
                                <h3 className="text-3xl font-bold font-heading text-white mb-4">Request Received</h3>
                                <p className="text-muted mb-8 max-w-md mx-auto">
                                    Thank you for reaching out, {formData.name || "friend"}. I've received your project details and will be in touch within 24 hours to discuss the next steps.
                                </p>
                                <button
                                    onClick={() => { setSubmitted(false); setStep(1); }}
                                    className="px-8 py-3 bg-white/5 hover:bg-white/10 border border-white/10 text-white rounded-xl font-medium transition-all"
                                >
                                    Send Another Request
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
}
