"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";

export function Testimonials() {
  const { t } = useLanguage();

  return (
    <section className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-20 -translate-x-1/2 select-none font-display text-[40vw] leading-none text-white/[0.03]">
        ”
      </div>

      <div className="relative mx-auto max-w-[90rem]">
        <Reveal>
          <p className="eyebrow">{t.testimonials.eyebrow}</p>
          <h2 className="display-lg mt-5 max-w-3xl text-mist">{t.testimonials.title}</h2>
          <p className="lede mt-5">{t.testimonials.support}</p>
        </Reveal>

        <Stagger className="mt-16 space-y-0 md:mt-24">
          {t.testimonials.items.map((item, i) => (
            <StaggerItem key={item.name}>
              <blockquote
                className={`grid gap-6 border-t border-white/10 py-10 md:grid-cols-[1fr_auto] md:items-end md:gap-16 md:py-14 ${
                  i === t.testimonials.items.length - 1 ? "border-b" : ""
                }`}
              >
                <p className="font-display text-[clamp(1.5rem,3.2vw,2.75rem)] leading-[1.15] tracking-[-0.03em] text-mist">
                  “{item.quote}”
                </p>
                <footer className="text-xs font-bold uppercase tracking-[0.22em] text-brand md:pb-2 md:text-right">
                  {item.name}
                </footer>
              </blockquote>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
