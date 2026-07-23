"use client";

import { motion, useReducedMotion } from "framer-motion";
import { site } from "@/lib/site";
import { useLanguage } from "@/components/LanguageProvider";

export function FloatingWhatsApp() {
  const { t } = useLanguage();
  const reduce = useReducedMotion();

  return (
    <motion.a
      href={site.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.nav.whatsapp}
      className="pulse-ring fixed bottom-5 right-5 z-50 inline-flex items-center gap-2 rounded-full bg-brand px-4 py-3 text-sm font-semibold text-ink shadow-[0_12px_40px_rgba(255,90,0,0.45)] md:bottom-8 md:right-8"
      initial={reduce ? false : { opacity: 0, y: 24, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ delay: 1.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      whileHover={reduce ? undefined : { scale: 1.05 }}
      whileTap={{ scale: 0.97 }}
    >
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M20.5 3.5A11 11 0 0 0 3.2 17.7L2 22l4.4-1.15A11 11 0 1 0 20.5 3.5Zm-8.5 17a9.1 9.1 0 0 1-4.64-1.27l-.33-.2-2.61.69.7-2.54-.22-.34A9.1 9.1 0 1 1 12 20.5Zm5-6.7c-.27-.14-1.6-.79-1.85-.88s-.43-.13-.61.14-.7.88-.86 1.06-.32.2-.59.07a7.4 7.4 0 0 1-2.17-1.34 8.2 8.2 0 0 1-1.5-1.87c-.16-.27 0-.42.12-.55s.27-.32.4-.48.18-.27.27-.45.05-.34-.02-.48-.61-1.47-.84-2.01c-.22-.52-.45-.45-.61-.46h-.52a1 1 0 0 0-.73.34 3.05 3.05 0 0 0-.95 2.27 5.3 5.3 0 0 0 1.11 2.8 12.1 12.1 0 0 0 4.64 4.1c.65.28 1.15.45 1.55.57a3.72 3.72 0 0 0 1.71.11 2.8 2.8 0 0 0 1.84-1.3 2.28 2.28 0 0 0 .16-1.3c-.07-.11-.25-.18-.52-.32Z" />
      </svg>
      <span className="hidden sm:inline">{t.nav.whatsapp}</span>
    </motion.a>
  );
}
