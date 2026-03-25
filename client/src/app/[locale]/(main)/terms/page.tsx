"use client";

import { motion } from "framer-motion";
import { FileCheck, CreditCard, Clock, Settings, ShieldCheck, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function TermsAndConditions() {
    const t = useTranslations("Terms");

    return (
        <div className="pt-32 pb-20 px-6">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16"
                >
                    <div className="flex items-center space-x-2 text-accent-red mb-4">
                        <FileCheck size={20} />
                        <span className="text-xs font-bold uppercase tracking-widest">{t("badge")}</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">{t("title")}</h1>
                    <p className="text-muted text-lg max-w-2xl leading-relaxed">
                        {t("description")}
                    </p>
                </motion.div>

                <div className="space-y-12">
                    <section className="bg-secondary/30 border border-border rounded-3xl p-8 md:p-12 group hover:border-accent-red/20 transition-all">
                        <div className="flex items-center space-x-4 mb-6">
                            <div className="p-3 bg-accent-red/10 rounded-2xl text-accent-red">
                                <FileCheck size={24} />
                            </div>
                            <h2 className="text-2xl font-bold font-heading">{t("sections.engagement.title")}</h2>
                        </div>
                        <div className="space-y-4 text-muted leading-relaxed">
                            <p>{t("sections.engagement.content1")}</p>
                            <p>{t("sections.engagement.content2")}</p>
                        </div>
                    </section>

                    <section className="bg-secondary/30 border border-border rounded-3xl p-8 md:p-12 group hover:border-accent-red/20 transition-all">
                        <div className="flex items-center space-x-4 mb-6">
                            <div className="p-3 bg-accent-red/10 rounded-2xl text-accent-red">
                                <CreditCard size={24} />
                            </div>
                            <h2 className="text-2xl font-bold font-heading">{t("sections.payment.title")}</h2>
                        </div>
                        <div className="space-y-4 text-muted leading-relaxed">
                            <p>{t("sections.payment.content1")}</p>
                            <p>{t("sections.payment.content2")}</p>
                        </div>
                    </section>

                    <section className="bg-secondary/30 border border-border rounded-3xl p-8 md:p-12 group hover:border-accent-red/20 transition-all">
                        <div className="flex items-center space-x-4 mb-6">
                            <div className="p-3 bg-accent-red/10 rounded-2xl text-accent-red">
                                <ShieldCheck size={24} />
                            </div>
                            <h2 className="text-2xl font-bold font-heading">{t("sections.maintenance.title")}</h2>
                        </div>
                        <div className="space-y-4 text-muted leading-relaxed">
                            <p>{t("sections.maintenance.content1")}</p>
                        </div>
                    </section>

                    <section className="bg-secondary/30 border border-border rounded-3xl p-8 md:p-12 group hover:border-accent-red/20 transition-all">
                        <div className="flex items-center space-x-4 mb-6">
                            <div className="p-3 bg-accent-red/10 rounded-2xl text-accent-red">
                                <Settings size={24} />
                            </div>
                            <h2 className="text-2xl font-bold font-heading">{t("sections.hosting.title")}</h2>
                        </div>
                        <div className="space-y-4 text-muted leading-relaxed">
                            <p>{t("sections.hosting.content1")}</p>
                        </div>
                    </section>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-20 text-center"
                >
                    <p className="text-muted text-sm">{t("footer.agreement")}</p>
                </motion.div>
            </div>
        </div>
    );
}
