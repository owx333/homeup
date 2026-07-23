"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";

export function WhyUs() {
  const { t } = useLanguage();

  return (
    <section className="section-pad relative overflow-hidden bg-ink-elevated">
      <div className="relative mx-auto max-w-[90rem]">
        <Reveal>
          <div className="grid gap-5 md:grid-cols-[1fr_1fr] md:items-end">
            <div>
              <p className="eyebrow">{t.why.eyebrow}</p>
              <h2 className="display-lg mt-4 text-mist">{t.why.title}</h2>
            </div>
            <p className="lede md:text-right">{t.why.support}</p>
          </div>
        </Reveal>

        <Stagger className="mt-12 grid gap-px overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/10 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
          {t.why.items.map((item, i) => (
            <StaggerItem key={item.title}>
              <article className="h-full bg-ink p-6 md:p-7">
                <span className="font-display text-4xl leading-none text-brand">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-5 font-display text-xl tracking-tight text-mist md:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">{item.description}</p>
              </article>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
