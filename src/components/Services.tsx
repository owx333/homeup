"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/components/LanguageProvider";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";

export function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="section-pad section-light relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-6 top-10 z-0 hidden select-none text-[min(18vw,12rem)] leading-none text-ink/[0.045] lg:block"
        style={{ fontFamily: "var(--font-display), system-ui, sans-serif" }}
      >
        01
      </div>

      <div className="relative z-10 mx-auto max-w-[90rem]">
        <Reveal>
          <div className="grid gap-6 md:grid-cols-[1.15fr_0.85fr] md:items-end md:gap-16">
            <div className="min-w-0">
              <p className="eyebrow">{t.services.eyebrow}</p>
              <h2 className="display-lg mt-5">{t.services.title}</h2>
            </div>
            <p className="lede relative z-10 max-w-md md:justify-self-end md:pb-2 md:text-right">
              {t.services.support}
            </p>
          </div>
        </Reveal>

        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-5">
          {t.services.items.map((service, index) => (
            <StaggerItem key={service.title}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 320, damping: 24 }}
                className="group relative flex h-full flex-col overflow-hidden rounded-[1.35rem] border border-ink/10 bg-white p-6 shadow-[0_10px_30px_rgba(10,9,8,0.06)] transition-shadow hover:border-brand/35 hover:shadow-[0_18px_40px_rgba(10,9,8,0.1)] md:p-7"
              >
                <span
                  aria-hidden
                  className="absolute inset-y-0 left-0 w-[3px] bg-brand/70 transition-all group-hover:w-1 group-hover:bg-brand"
                />
                <span className="font-display text-4xl leading-none tracking-tight text-brand/35 transition-colors group-hover:text-brand md:text-5xl">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 font-display text-[1.45rem] tracking-tight text-ink md:text-[1.75rem]">
                  {service.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-ink/55 md:text-[0.95rem]">
                  {service.description}
                </p>
              </motion.article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
