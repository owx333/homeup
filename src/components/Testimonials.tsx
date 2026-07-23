"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";

const frames = [
  "border-brand/45 bg-gradient-to-br from-brand/20 via-ink-elevated to-ink-elevated",
  "border-white/15 bg-gradient-to-br from-white/[0.07] via-ink-elevated to-ink-elevated",
  "border-brand/30 bg-gradient-to-br from-brand/10 via-ink-elevated to-ink",
] as const;

export function Testimonials() {
  const { t } = useLanguage();

  return (
    <section className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_50%_0%,rgba(255,98,11,0.1),transparent_50%)]" />

      <div className="relative mx-auto max-w-[90rem]">
        <Reveal>
          <p className="eyebrow">{t.testimonials.eyebrow}</p>
          <h2 className="display-lg mt-5 max-w-3xl text-mist">{t.testimonials.title}</h2>
          <p className="lede mt-5">{t.testimonials.support}</p>
        </Reveal>

        <Stagger className="mt-12 grid gap-4 md:mt-16 md:grid-cols-3 md:gap-5">
          {t.testimonials.items.map((item, i) => (
            <StaggerItem key={item.name}>
              <motion.blockquote
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300, damping: 24 }}
                className={`relative flex h-full flex-col overflow-hidden rounded-[1.75rem] border p-7 shadow-[0_14px_40px_rgba(0,0,0,0.28)] md:p-8 ${frames[i % frames.length]}`}
              >
                <span
                  aria-hidden
                  className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-brand via-brand-hot to-transparent"
                />
                <span className="font-display text-5xl leading-none text-brand/50">”</span>
                <p className="mt-4 flex-1 font-display text-xl leading-snug tracking-tight text-mist md:text-2xl">
                  {item.quote}
                </p>
                <footer className="mt-8 flex items-center justify-between gap-3 border-t border-white/10 pt-5">
                  <span className="text-xs font-bold uppercase tracking-[0.18em] text-brand">
                    {item.name}
                  </span>
                  <span className="text-brand" aria-hidden>
                    ★★★★★
                  </span>
                </footer>
              </motion.blockquote>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
