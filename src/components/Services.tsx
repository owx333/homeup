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

        <Stagger className="mt-12 md:mt-16">
          {t.services.items.map((service, index) => (
            <StaggerItem key={service.title}>
              <motion.article
                whileHover={{ x: 8 }}
                transition={{ type: "spring", stiffness: 280, damping: 24 }}
                className="group grid items-baseline gap-2 border-t border-ink/10 py-7 md:grid-cols-[6rem_minmax(0,1fr)_minmax(0,1.1fr)] md:gap-10 md:py-9"
              >
                <span className="font-display text-4xl leading-none tracking-tight text-brand/40 transition-colors group-hover:text-brand md:text-6xl">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-[1.65rem] tracking-tight text-ink md:text-[2.35rem]">
                  {service.title}
                </h3>
                <p className="max-w-md text-sm leading-relaxed text-ink/55 md:justify-self-end md:text-right md:text-base">
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
