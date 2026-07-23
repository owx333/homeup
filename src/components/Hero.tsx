"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { portfolio, whatsappByKey } from "@/lib/site";
import { useLanguage } from "@/components/LanguageProvider";

const slides = portfolio.map((p) => p.src);
const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const { t } = useLanguage();
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 4800);
    return () => window.clearInterval(id);
  }, [reduce]);

  return (
    <section id="top" className="relative isolate min-h-[100svh] overflow-hidden grain">
      <div className="absolute inset-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={slides[index]}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8, ease }}
          >
            <Image
              src={slides[index]}
              alt=""
              fill
              priority={index === 0}
              className="object-cover img-drift"
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/45 to-ink/15" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/75 via-ink/25 to-transparent md:from-ink/70 md:via-ink/15" />
        <div className="absolute bottom-0 left-0 h-[55%] w-full bg-gradient-to-t from-ink via-ink/80 to-transparent" />
        <div className="absolute -left-32 bottom-10 size-[28rem] rounded-full bg-brand/20 blur-[130px]" />
      </div>

      <div className="pointer-events-none absolute right-6 top-1/2 hidden -translate-y-1/2 xl:block">
        <p className="rotate-90 whitespace-nowrap text-[11px] font-bold uppercase tracking-[0.45em] text-white/35">
          Damansara · Klang Valley
        </p>
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-[92rem] flex-col justify-end px-5 pb-12 pt-28 md:px-10 md:pb-14 lg:px-14">
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.7, ease }}
          className="mb-4 text-[11px] font-bold uppercase tracking-[0.36em] text-brand md:mb-5 md:text-xs"
        >
          {t.hero.tagline}
        </motion.p>

        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 48 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 1, ease }}
          className="font-display leading-[0.84] tracking-[-0.04em] text-mist"
        >
          {/* Stacked on small screens — poster impact, never clips */}
          <span className="block text-[clamp(5.25rem,26vw,9rem)] md:hidden">
            HOME
            <span className="mt-[-0.1em] block text-brand">UP</span>
          </span>
          <span className="hidden whitespace-nowrap text-[clamp(6.5rem,15vw,12.5rem)] md:block">
            HOME<span className="text-brand">UP</span>
          </span>
        </motion.h1>

        <div className="mt-6 flex max-w-2xl flex-col gap-5 md:mt-8 md:gap-6">
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.8, ease }}
            className="font-display text-[clamp(1.25rem,2.6vw,2rem)] leading-[1.2] tracking-[-0.03em] text-mist"
          >
            {t.hero.headline}
          </motion.p>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38, duration: 0.75, ease }}
            className="max-w-md text-[0.95rem] leading-relaxed text-mist/70 md:text-base"
          >
            {t.hero.support}
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.48, duration: 0.75, ease }}
            className="flex flex-wrap items-center gap-3"
          >
            <a
              href={whatsappByKey("homeowner")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-brand px-8 py-4 text-sm font-extrabold text-ink shadow-[0_18px_50px_rgba(255,98,11,0.4)] transition-all hover:scale-[1.04] hover:bg-white"
            >
              {t.hero.ctaPrimary}
            </a>
            <a
              href="#works"
              className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-8 py-4 text-sm font-semibold text-mist backdrop-blur-md transition-colors hover:border-brand hover:text-brand"
            >
              {t.hero.ctaSecondary}
            </a>
          </motion.div>
        </div>

        <div className="mt-9 flex items-end justify-between gap-6 md:mt-11">
          <div className="flex items-center gap-2">
            {slides.map((src, i) => (
              <button
                key={src}
                type="button"
                aria-label={`Slide ${i + 1}`}
                onClick={() => setIndex(i)}
                className={`h-1 rounded-full transition-all duration-500 ${
                  i === index ? "w-11 bg-brand" : "w-4 bg-white/25 hover:bg-white/45"
                }`}
              />
            ))}
          </div>

          <a
            href="#services"
            className="scroll-cue hidden items-center gap-2 text-[10px] font-bold uppercase tracking-[0.28em] text-white/45 md:inline-flex"
          >
            Scroll
            <span className="block h-8 w-px bg-gradient-to-b from-brand to-transparent" />
          </a>
        </div>
      </div>
    </section>
  );
}
