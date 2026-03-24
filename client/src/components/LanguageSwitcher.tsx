"use client";

import { useLocale } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";
import { Globe, Check } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const languages = [
  { code: "rw", name: "Kinyarwanda", native: "Kinyarwanda" },
  { code: "en", name: "English", native: "English" },
  { code: "fr", name: "French", native: "Français" },
  { code: "sw", name: "Swahili", native: "Kiswahili" },
  { code: "ar", name: "Arabic", native: "العربية" },
  { code: "es", name: "Spanish", native: "Español" },
  { code: "de", name: "German", native: "Deutsch" },
  { code: "pt", name: "Portuguese", native: "Português" },
  { code: "zh", name: "Chinese", native: "中文" },
  { code: "hi", name: "Hindi", native: "हिन्दी" },
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
        className="flex items-center space-x-2 px-3 py-2 rounded-full bg-secondary/50 hover:bg-secondary border border-white/5 transition-all text-sm font-medium text-foreground/80 hover:text-white group"
      >
        <Globe size={16} className="text-accent-red group-hover:rotate-12 transition-transform duration-300" />
        <span className="hidden sm:inline">{currentLanguage.native}</span>
        <span className="sm:hidden">{currentLanguage.code.toUpperCase()}</span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute right-0 mt-3 w-56 bg-background/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl z-[100] overflow-hidden py-2"
          >
            <div className="px-4 py-2 text-[10px] font-bold text-muted uppercase tracking-widest border-b border-white/5 mb-1">
              Select Language
            </div>
            <div className="max-h-[350px] overflow-y-auto scrollbar-hide">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => handleLanguageChange(lang.code)}
                  className={`w-full flex items-center justify-between px-4 py-3 hover:bg-accent-red/10 transition-colors text-sm ${
                    locale === lang.code ? "text-accent-red font-bold" : "text-muted hover:text-foreground"
                  }`}
                >
                  <div className="flex flex-col items-start translate-x-0 group-hover:translate-x-1 transition-transform">
                    <span className="font-semibold">{lang.native}</span>
                    <span className="text-[10px] opacity-60 font-normal">{lang.name}</span>
                  </div>
                  {locale === lang.code && <Check size={16} className="text-accent-red" />}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
