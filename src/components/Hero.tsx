"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { heroSlides, whatsappByKey } from "@/lib/site";
import { asset } from "@/lib/paths";
import { useLanguage } from "@/components/LanguageProvider";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const { t } = useLanguage();
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % heroSlides.length);
    }, 4800);
    return () => window.clearInterval(id);
  }, [reduce]);

  return (
    <section id="top" className="relative isolate min-h-[100svh] overflow-hidden grain">
      <div className="absolute inset-0">
        <AnimatePresence mode="popLayout">
          <motion.div
            key={heroSlides[index]}
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8, ease }}
          >
            <Image
              src={asset(heroSlides[index])}
              alt=""
              fill
              priority={index === 0}
              className="object-cover img-drift"
              sizes="100vw"
            />
          </motion.div>
        </AnimatePresence>
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/30 to-transparent" />
        <div className="absolute bottom-0 left-0 h-[50%] w-full bg-gradient-to-t from-ink to-transparent" />
        <div className="absolute -left-32 bottom-10 size-[28rem] rounded-full bg-brand/20 blur-[130px]" />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-[92rem] flex-col justify-end px-5 pb-11 pt-28 md:px-10 md:pb-14 lg:px-14">
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.7, ease }}
          className="mb-3 text-[11px] font-bold uppercase tracking-[0.36em] text-brand md:mb-4 md:text-xs"
        >
          {t.hero.tagline}
        </motion.p>

        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12, duration: 0.95, ease }}
          className="font-display leading-[0.86] tracking-[-0.04em] text-mist"
        >
          <span className="block text-[clamp(4.5rem,22vw,8rem)] md:hidden">
            HOME
            <span className="mt-[-0.08em] block text-brand">UP</span>
          </span>
          <span className="hidden whitespace-nowrap text-[clamp(5.5rem,13vw,10.5rem)] md:block">
            HOME<span className="text-brand">UP</span>
          </span>
        </motion.h1>

        <div className="mt-5 flex max-w-2xl flex-col gap-4 md:mt-6 md:gap-5">
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.75, ease }}
            className="font-display text-[clamp(1.2rem,2.4vw,1.85rem)] leading-[1.2] tracking-[-0.03em] text-mist"
          >
            {t.hero.headline}
          </motion.p>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.38, duration: 0.7, ease }}
            className="max-w-lg text-[0.95rem] leading-relaxed text-mist/70 md:text-base"
          >
            {t.hero.support}
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.48, duration: 0.7, ease }}
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
              href="#styles"
              className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-8 py-4 text-sm font-semibold text-mist backdrop-blur-md transition-colors hover:border-brand hover:text-brand"
            >
              {t.hero.ctaSecondary}
            </a>
          </motion.div>
        </div>

        <div className="mt-8 flex items-center gap-2 md:mt-10">
          {heroSlides.map((src, i) => (
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
      </div>
    </section>
  );
}
