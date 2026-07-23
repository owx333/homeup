"use client";

import Image from "next/image";
import { journeySteps } from "@/lib/site";
import { asset } from "@/lib/paths";
import { useLanguage } from "@/components/LanguageProvider";
import { Reveal, Stagger, StaggerItem } from "@/components/motion";

export function Process() {
  const { lang, t } = useLanguage();

  return (
    <section id="process" className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_10%,rgba(255,98,11,0.14),transparent_50%)]" />

      <div className="relative mx-auto max-w-[90rem]">
        <Reveal>
          <div className="grid gap-5 md:grid-cols-[1.15fr_0.85fr] md:items-end">
            <div>
              <p className="eyebrow">{t.process.eyebrow}</p>
              <h2 className="display-lg mt-4 text-mist">{t.process.title}</h2>
            </div>
            <p className="lede md:text-right">{t.process.support}</p>
          </div>
        </Reveal>

        <Stagger className="mt-12 grid gap-4 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3 lg:gap-5">
          {journeySteps.map((item) => (
            <StaggerItem key={item.step}>
              <article className="group flex h-full flex-col overflow-hidden rounded-[1.35rem] border border-white/10 bg-ink-elevated">
                <div className="relative aspect-[16/11] overflow-hidden">
                  <Image
                    src={asset(item.src)}
                    alt={item.title[lang]}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent opacity-80" />
                  <span className="absolute top-4 left-4 font-display text-4xl leading-none text-brand md:text-5xl">
                    {item.step}
                  </span>
                </div>
                <div className="flex flex-1 flex-col p-5 md:p-6">
                  <h3 className="font-display text-xl tracking-tight text-mist md:text-2xl">
                    {item.title[lang]}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.description[lang]}
                  </p>
                </div>
              </article>
            </StaggerItem>
          ))}
        </Stagger>

        <p className="mt-8 text-xs text-muted">{t.process.note}</p>
      </div>
    </section>
  );
}
