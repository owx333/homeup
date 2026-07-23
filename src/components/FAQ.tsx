"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";
import { Reveal } from "@/components/motion";

export function FAQ() {
  const { t } = useLanguage();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="section-pad">
      <div className="mx-auto max-w-3xl">
        <Reveal>
          <p className="eyebrow">{t.faq.eyebrow}</p>
          <h2 className="display-lg mt-5 text-mist">{t.faq.title}</h2>
        </Reveal>

        <div className="mt-14 divide-y divide-white/10 border-y border-white/10">
          {t.faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex w-full items-start justify-between gap-6 py-6 text-left md:py-7"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-lg tracking-tight text-mist md:text-2xl">
                    {item.q}
                  </span>
                  <span
                    className={`mt-1 flex size-8 shrink-0 items-center justify-center rounded-full border border-white/15 text-brand transition-transform ${isOpen ? "rotate-45 bg-brand text-ink" : ""}`}
                    aria-hidden
                  >
                    +
                  </span>
                </button>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-7 text-sm leading-relaxed text-muted md:text-base">
                        {item.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
