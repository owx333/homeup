"use client";

import { motion } from "framer-motion";
import { whatsappByKey } from "@/lib/site";
import { useLanguage } from "@/components/LanguageProvider";
import { Reveal } from "@/components/motion";

export function Packages() {
  const { lang, t } = useLanguage();
  const [ownstay, reno, manage] = t.packages.items;

  return (
    <section id="packages" className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_0%,rgba(255,98,11,0.18),transparent_50%)]" />

      <div className="relative mx-auto max-w-[90rem]">
        <Reveal>
          <p className="eyebrow">{t.packages.eyebrow}</p>
          <div className="mt-5 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 className="display-lg max-w-2xl text-mist">{t.packages.title}</h2>
            <p className="lede">{t.packages.support}</p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 md:mt-20 md:grid-cols-12 md:gap-5">
          <Reveal className="md:col-span-7 md:row-span-2">
            <motion.article
              whileHover={{ y: -6 }}
              className="relative flex h-full min-h-[30rem] flex-col overflow-hidden rounded-[2.25rem] bg-brand p-8 text-ink md:p-11"
            >
              <div className="absolute -right-20 top-0 size-72 rounded-full bg-white/25 blur-3xl" />
              <div className="absolute bottom-0 left-0 h-40 w-full bg-gradient-to-t from-brand-deep/40 to-transparent" />
              <span className="relative w-fit rounded-full bg-ink px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-brand">
                {lang === "zh" ? "热门" : "Popular"}
              </span>
              <p className="relative mt-10 text-xs font-bold uppercase tracking-[0.22em] text-ink/55">
                {reno.audience}
              </p>
              <h3 className="relative mt-3 font-display text-4xl tracking-tight md:text-[3.5rem]">
                {reno.title}
              </h3>
              <ul className="relative mt-8 flex-1 space-y-3.5">
                {reno.points.map((point) => (
                  <li key={point} className="flex gap-3 text-sm font-medium md:text-base">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-ink" />
                    {point}
                  </li>
                ))}
              </ul>
              <a
                href={whatsappByKey(reno.hrefKey)}
                target="_blank"
                rel="noopener noreferrer"
                className="relative mt-10 inline-flex justify-center rounded-full bg-ink px-6 py-4 text-sm font-bold text-mist transition-transform hover:scale-[1.03]"
              >
                {reno.cta}
              </a>
            </motion.article>
          </Reveal>

          {[ownstay, manage].map((pkg, i) => (
            <Reveal key={pkg.title} delay={0.08 + i * 0.06} className="md:col-span-5">
              <motion.article
                whileHover={{ y: -6 }}
                className="flex h-full flex-col border-y border-white/12 bg-transparent py-8 md:border-y-0 md:border-l md:border-white/12 md:py-2 md:pl-8"
              >
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand">
                  {pkg.audience}
                </p>
                <h3 className="mt-4 font-display text-2xl tracking-tight text-mist md:text-3xl">
                  {pkg.title}
                </h3>
                <ul className="mt-6 flex-1 space-y-3">
                  {pkg.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm text-muted">
                      <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand" />
                      {point}
                    </li>
                  ))}
                </ul>
                <a
                  href={whatsappByKey(pkg.hrefKey)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex w-fit justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-bold text-mist transition-colors hover:border-brand hover:text-brand"
                >
                  {pkg.cta}
                </a>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
