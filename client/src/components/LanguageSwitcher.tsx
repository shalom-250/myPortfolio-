"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { Globe, Check, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const languages = [
  { code: "en", name: "English", native: "English", flag: "/flag/en.jpg" },
  { code: "rw", name: "Kinyarwanda", native: "Kinyarwanda", flag: "/flag/rw.jpg" },
  { code: "fr", name: "French", native: "Français", flag: "/flag/fr.jpg" },
  { code: "sw", name: "Swahili", native: "Kiswahili", flag: "/flag/sw.p.jpg" },
  { code: "ar", name: "Arabic", native: "العربية", flag: "/flag/ar.jpg" },
  { code: "es", name: "Spanish", native: "Español", flag: "/flag/es.jpg" },
  { code: "de", name: "German", native: "Deutsch", flag: "/flag/German.jpg" },
  { code: "pt", name: "Portuguese", native: "Português", flag: "/flag/Portuguese.jpg" },
  { code: "zh", name: "Chinese", native: "中文", flag: "/flag/Chinese.jpg" },
  { code: "hi", name: "Hindi", native: "हिन्दी", flag: "/flag/Hindi.jpg" },
];

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLanguage = languages.find((l) => l.code === locale) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLanguageChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
    setIsOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-1.5 rounded-full bg-secondary/30 hover:bg-secondary/50 border border-white/5 hover:border-white/10 transition-all text-sm font-medium text-foreground/80 hover:text-white group backdrop-blur-md"
      >
        <div className="relative w-5 h-5 rounded-full overflow-hidden border border-white/10 group-hover:scale-110 transition-transform duration-300">
          <Image
            src={currentLanguage.flag}
            alt={currentLanguage.name}
            fill
            sizes="20px"
            className="object-cover"
          />
        </div>
        <span className="hidden sm:inline-block font-heading">{currentLanguage.native}</span>
        <span className="sm:hidden font-heading uppercase text-[10px] tracking-widest">{currentLanguage.code}</span>
        <ChevronDown size={14} className={`text-muted group-hover:text-accent-red transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
            className="absolute right-0 mt-3 w-64 bg-[#0A0A0A]/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl z-[100] overflow-hidden py-3"
          >
            <div className="px-5 py-2 text-[10px] font-bold text-muted uppercase tracking-[0.2em] border-b border-white/5 mb-2">
              Select Aesthetics
            </div>
            <div className="px-2 space-y-1">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl transition-all group ${
                    locale === lang.code 
                      ? "bg-accent-red/10 text-accent-red shadow-[inset_0_0_20px_rgba(237,112,20,0.05)]" 
                      : "text-muted hover:bg-white/5 hover:text-foreground"
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    <div className="relative w-8 h-5 rounded-[4px] overflow-hidden border border-white/5 group-hover:border-white/20 transition-colors shadow-sm">
                      <Image
                        src={lang.flag}
                        alt={lang.name}
                        fill
                        sizes="32px"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex flex-col items-start">
                      <span className="font-heading font-semibold text-sm leading-tight">{lang.native}</span>
                      <span className="text-[10px] opacity-40 font-medium uppercase tracking-wider">{lang.name}</span>
                    </div>
                  </div>
                  {locale === lang.code ? (
                    <motion.div layoutId="active-lang">
                      <Check size={16} className="text-accent-red" />
                    </motion.div>
                  ) : null}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
