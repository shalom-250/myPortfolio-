import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-secondary/50 border-t border-border pt-16 pb-8 mt-24">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <Link href="/" className="text-3xl font-heading font-bold tracking-tighter mb-4 flex items-center space-x-2">
                            <Image src="/logo.png" alt="Shalom Dev" width={40} height={40} className="rounded-md" />
                            <span>Shalom Dev<span className="text-accent-red">.</span></span>
                        </Link>
                        <p className="text-muted max-w-sm mt-4 text-sm leading-relaxed">
                            Building Scalable Systems with Precision & Elegance. Luxury Web & Mobile Experiences Engineered for Performance.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold mb-6">Quick Links</h4>
                        <ul className="space-y-3">
                            <li><Link href="#about" className="text-muted text-sm hover:text-accent-red transition-colors">About</Link></li>
                            <li><Link href="#projects" className="text-muted text-sm hover:text-accent-red transition-colors">Projects</Link></li>
                            <li><Link href="#services" className="text-muted text-sm hover:text-accent-red transition-colors">Services</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-white font-semibold mb-6">Connect</h4>
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
                    <p>&copy; {new Date().getFullYear()} Shalom Dev. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
