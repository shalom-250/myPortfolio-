"use client";

import { motion } from "framer-motion";
import { Shield, Lock, Eye, FileText, ChevronRight } from "lucide-react";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";

export default function PrivacyPolicy() {
    const t = useTranslations("Privacy");

    return (
        <div className="pt-32 pb-20 px-6">
            <div className="max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16"
                >
                    <div className="flex items-center space-x-2 text-accent-red mb-4">
                        <Shield size={20} />
                        <span className="text-xs font-bold uppercase tracking-widest">{t("badge")}</span>
                    </div>
                    <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">{t("title")}</h1>
                    <p className="text-muted text-lg max-w-2xl leading-relaxed">
                        {t("description")}
                    </p>
                </motion.div>

                <div className="space-y-12">
                    <section className="bg-secondary/30 border border-border rounded-3xl p-8 md:p-12 hover:border-accent-red/20 transition-all">
                        <div className="flex items-center space-x-4 mb-6">
                            <div className="p-3 bg-accent-red/10 rounded-2xl text-accent-red">
                                <Lock size={24} />
                            </div>
                            <h2 className="text-2xl font-bold font-heading">{t("sections.data.title")}</h2>
                        </div>
                        <div className="space-y-4 text-muted leading-relaxed">
                            <p>{t("sections.data.content1")}</p>
                            <p>{t("sections.data.content2")}</p>
                        </div>
                    </section>

                    <section className="bg-secondary/30 border border-border rounded-3xl p-8 md:p-12 hover:border-accent-red/20 transition-all">
                        <div className="flex items-center space-x-4 mb-6">
                            <div className="p-3 bg-accent-red/10 rounded-2xl text-accent-red">
                                <Eye size={24} />
                            </div>
                            <h2 className="text-2xl font-bold font-heading">{t("sections.transparency.title")}</h2>
                        </div>
                        <div className="space-y-4 text-muted leading-relaxed">
                            <p>{t("sections.transparency.content1")}</p>
                            <p>{t("sections.transparency.content2")}</p>
                        </div>
                    </section>

                    <section className="bg-secondary/30 border border-border rounded-3xl p-8 md:p-12 hover:border-accent-red/20 transition-all">
                        <div className="flex items-center space-x-4 mb-6">
                            <div className="p-3 bg-accent-red/10 rounded-2xl text-accent-red">
                                <FileText size={24} />
                            </div>
                            <h2 className="text-2xl font-bold font-heading">{t("sections.contract.title")}</h2>
                        </div>
                        <div className="space-y-4 text-muted leading-relaxed">
                            <p>{t("sections.contract.content1")}</p>
                        </div>
                    </section>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-20 p-8 border border-white/5 rounded-3xl flex flex-col md:flex-row items-center justify-between text-center md:text-left"
                >
                    <div>
                        <h3 className="text-xl font-bold mb-2">{t("footer.question")}</h3>
                        <p className="text-muted text-sm italic">{t("footer.lastUpdated")}: {new Date().toLocaleDateString()}</p>
                    </div>
                    <Link href="/contact" className="mt-6 md:mt-0 px-8 py-3 bg-white/5 hover:bg-white/10 rounded-full font-bold transition-all flex items-center">
                        {t("footer.contactLegal")} <ChevronRight size={16} className="ml-2" />
                    </Link>
                </motion.div>
            </div>
        </div>
    );
}
