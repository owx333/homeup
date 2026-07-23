"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { heroSlides, whatsappByKey } from "@/lib/site";
import { asset } from "@/lib/paths";
import { useLanguage } from "@/components/LanguageProvider";

const ease = [0.22, 1, 0.36, 1] as const;

export function Hero() {
  const { t } = useLanguage();
  const reduce = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [active, setActive] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { threshold: 0.15 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  useEffect(() => {
    if (reduce || !active) return;
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % heroSlides.length);
    }, 5200);
    return () => window.clearInterval(id);
  }, [reduce, active]);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative isolate min-h-[100svh] overflow-hidden grain"
    >
      <div className="absolute inset-0">
        {heroSlides.map((src, i) => {
          const dist = Math.min(
            Math.abs(i - index),
            heroSlides.length - Math.abs(i - index),
          );
          // Keep current + neighbors mounted for smooth crossfade without decoding all 6.
          if (dist > 1) return null;
          return (
            <div
              key={src}
              className="absolute inset-0 transition-opacity duration-1000 ease-out will-change-[opacity]"
              style={{ opacity: i === index ? 1 : 0 }}
              aria-hidden={i !== index}
            >
              <Image
                src={asset(src)}
                alt=""
                fill
                priority={i === 0}
                loading={i === 0 ? "eager" : "lazy"}
                decoding="async"
                className="object-cover"
                sizes="100vw"
              />
            </div>
          );
        })}
        <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-ink/25" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/80 via-ink/30 to-transparent" />
        <div className="absolute bottom-0 left-0 h-[50%] w-full bg-gradient-to-t from-ink to-transparent" />
        <div className="absolute -left-24 bottom-8 size-[18rem] rounded-full bg-brand/18 blur-3xl md:size-[22rem]" />
      </div>

      <div className="relative mx-auto flex min-h-[100svh] max-w-[92rem] flex-col justify-end px-5 pb-11 pt-28 md:px-10 md:pb-14 lg:px-14">
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05, duration: 0.55, ease }}
          className="mb-3 text-[11px] font-bold uppercase tracking-[0.36em] text-brand md:mb-4 md:text-xs"
        >
          {t.hero.tagline}
        </motion.p>

        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7, ease }}
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
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.55, ease }}
            className="font-display text-[clamp(1.15rem,2.2vw,1.7rem)] leading-[1.35] tracking-normal text-mist md:tracking-[-0.02em]"
          >
            {t.hero.headline}
          </motion.p>

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.28, duration: 0.5, ease }}
            className="max-w-lg text-[0.95rem] leading-relaxed text-mist/70 md:text-base"
          >
            {t.hero.support}
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.5, ease }}
            className="flex flex-wrap items-center gap-3"
          >
            <a
              href={whatsappByKey("homeowner")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-brand px-8 py-4 text-sm font-extrabold text-ink shadow-[0_18px_50px_rgba(255,98,11,0.4)] transition-transform hover:scale-[1.03] hover:bg-white"
            >
              {t.hero.ctaPrimary}
            </a>
            <a
              href="#styles"
              className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/5 px-8 py-4 text-sm font-semibold text-mist backdrop-blur-sm transition-colors hover:border-brand hover:text-brand"
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
