"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { Reveal } from "@/components/motion";

export function Areas() {
  const { t } = useLanguage();

  return (
    <section className="section-pad section-light relative overflow-hidden">
      <div className="relative mx-auto max-w-[90rem]">
        <Reveal>
          <div className="grid gap-8 md:grid-cols-[1fr_1.1fr] md:items-end">
            <div>
              <p className="eyebrow">{t.areas.eyebrow}</p>
              <h2 className="display-lg mt-5">{t.areas.title}</h2>
            </div>
            <p className="lede md:justify-self-end md:text-right">{t.areas.support}</p>
          </div>
        </Reveal>

        <div className="mt-14 flex flex-wrap gap-x-8 gap-y-5 md:mt-20 md:gap-x-12">
          {t.areas.items.map((area, i) => (
            <span
              key={`area-${i}`}
              className="font-display text-xl tracking-tight text-ink/80 transition-colors hover:text-brand md:text-3xl"
            >
              {area}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
