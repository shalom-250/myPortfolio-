import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
    const t = useTranslations("Footer");
    const navT = useTranslations("Navbar");
    return (
        <footer className="bg-secondary/50 border-t border-border pt-16 pb-8 mt-24">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="flex items-center space-x-3 group mb-4">
                            <Image src="/logo.png" alt="Shalom Dev" width={40} height={40} className="rounded-xl shadow-lg transform group-hover:scale-105 transition-transform duration-300" />
                            <span className="text-2xl font-black font-heading tracking-tighter bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent group-hover:text-accent-red transition-colors">
                                SHALOM <span className="text-accent-red">DEV</span>
                            </span>
                        </Link>
                        <p className="text-muted max-w-sm mt-4 text-sm leading-relaxed">
                            {t("description")}
                        </p>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold mb-6">{t("quickLinks")}</h4>
                        <ul className="space-y-3">
                            <li><Link href="#about" className="text-muted text-sm hover:text-accent-red transition-colors">{navT("about")}</Link></li>
                            <li><Link href="#projects" className="text-muted text-sm hover:text-accent-red transition-colors">{navT("projects")}</Link></li>
                            <li><Link href="#services" className="text-muted text-sm hover:text-accent-red transition-colors">{navT("services")}</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold mb-6">{t("connect")}</h4>
                        <div className="flex space-x-4">
                            <a href="https://github.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center text-muted hover:text-accent-red hover:border-accent-red hover:bg-accent-red/10 transition-all">
                                <FaGithub size={18} />
                            </a>
                            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center text-muted hover:text-accent-red hover:border-accent-red hover:bg-accent-red/10 transition-all">
                                <FaLinkedin size={18} />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-secondary border border-border flex items-center justify-center text-muted hover:text-accent-red hover:border-accent-red hover:bg-accent-red/10 transition-all">
                                <FaTwitter size={18} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="border-t border-border pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-muted">
                    <p>&copy; {new Date().getFullYear()} Shalom Dev. {t("allRights")}</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="/privacy" className="hover:text-white transition-colors">{t("privacy")}</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">{t("terms")}</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
