"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";

export function Process() {
  const { t } = useLanguage();

  return (
    <section id="process" className="section-pad section-light relative overflow-hidden">
      <div className="relative mx-auto max-w-[90rem]">
        <Reveal>
          <p className="eyebrow">{t.process.eyebrow}</p>
          <h2 className="display-lg mt-5 max-w-3xl">{t.process.title}</h2>
          <p className="lede mt-5">{t.process.support}</p>
        </Reveal>

        <Stagger className="relative mt-16 md:mt-24">
          <div className="pointer-events-none absolute left-0 right-0 top-8 hidden h-px bg-ink/10 lg:block" />
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {t.process.steps.map((item) => (
              <StaggerItem key={item.step}>
                <div className="group relative">
                  <div className="mb-6 flex items-center gap-4">
                    <span className="relative z-10 flex size-16 items-center justify-center rounded-full bg-ink font-display text-2xl text-brand shadow-[0_0_0_8px_#f8f3ec]">
                      {item.step}
                    </span>
                    <span className="h-px flex-1 bg-ink/10 lg:hidden" />
                  </div>
                  <h3 className="font-display text-2xl tracking-tight text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/55 md:text-base">
                    {item.description}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </div>
        </Stagger>
      </div>
    </section>
  );
}
