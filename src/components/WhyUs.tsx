"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";

export function WhyUs() {
  const { t } = useLanguage();

  return (
    <section className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute right-[-4%] top-10 select-none font-display text-[26vw] leading-none text-white/[0.035]">
        UP
      </div>

      <div className="relative mx-auto max-w-[90rem]">
        <Reveal>
          <div className="max-w-3xl">
            <p className="eyebrow">{t.why.eyebrow}</p>
            <h2 className="display-lg mt-5 text-mist">{t.why.title}</h2>
            <p className="lede mt-5">{t.why.support}</p>
          </div>
        </Reveal>

        <Stagger className="mt-16 grid gap-x-10 gap-y-12 sm:grid-cols-2 lg:grid-cols-4 md:mt-24">
          {t.why.items.map((item, i) => (
            <StaggerItem key={item.title}>
              <article className="group relative h-full border-t border-brand/50 pt-6">
                <span className="font-display text-5xl leading-none text-brand/30 transition-colors group-hover:text-brand">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-6 font-display text-xl tracking-tight text-mist md:text-2xl">
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
