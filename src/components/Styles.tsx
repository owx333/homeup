"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { styleLooks } from "@/lib/site";
import { asset } from "@/lib/paths";
import { useLanguage } from "@/components/LanguageProvider";
import { Reveal } from "@/components/motion";

export function Styles() {
  const { lang, t } = useLanguage();
  const [active, setActive] = useState(0);
  const look = styleLooks[active];

  return (
    <section id="styles" className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_20%_0%,rgba(255,98,11,0.12),transparent_45%)]" />

      <div className="relative mx-auto max-w-[90rem]">
        <Reveal>
          <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr] md:items-end">
            <div>
              <p className="eyebrow">{t.styles.eyebrow}</p>
              <h2 className="display-lg mt-4 text-mist">{t.styles.title}</h2>
            </div>
            <p className="lede md:text-right">{t.styles.support}</p>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-6 lg:mt-14 lg:grid-cols-[1.35fr_0.75fr] lg:gap-8">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] border border-white/10 bg-ink-elevated sm:aspect-[16/10]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={look.id}
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.45 }}
                >
                  <Image
                    src={asset(look.src)}
                    alt={look.title[lang]}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                <p className="font-display text-3xl tracking-tight text-mist md:text-5xl">
                  {look.title[lang]}
                </p>
                <p className="mt-3 max-w-lg text-sm text-mist/70 md:text-base">
                  {look.blurb[lang]}
                </p>
                <a
                  href={`https://wa.me/60162554355?text=${encodeURIComponent(
                    lang === "zh"
                      ? `Hi HomeUP，我对「${look.title.zh}」风格有兴趣，想咨询。`
                      : `Hi HomeUP, I'm interested in the ${look.title.en} style.`,
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex rounded-full bg-brand px-5 py-2.5 text-sm font-bold text-ink transition-transform hover:scale-[1.03]"
                >
                  {t.styles.cta}
                </a>
              </div>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-2 lg:gap-4">
            {styleLooks.map((item, i) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActive(i)}
                className={`group relative aspect-[4/3] overflow-hidden rounded-2xl border text-left transition-all ${
                  i === active
                    ? "border-brand ring-2 ring-brand/40"
                    : "border-white/10 hover:border-white/30"
                }`}
              >
                <Image
                  src={asset(item.src)}
                  alt={item.title[lang]}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="200px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent" />
                <span className="absolute inset-x-0 bottom-0 p-3 font-display text-sm tracking-tight text-mist md:text-base">
                  {item.title[lang]}
                </span>
              </button>
            ))}
          </div>
        </div>

        <p className="mt-6 text-xs text-muted md:mt-8">{t.styles.note}</p>
      </div>
    </section>
  );
}
