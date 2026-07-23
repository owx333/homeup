"use client";

import { useLanguage } from "@/components/LanguageProvider";
import { useInViewPlay } from "@/hooks/useInViewPlay";

export function TrustBar() {
  const { t } = useLanguage();
  const { ref, playing } = useInViewPlay<HTMLElement>();
  const loop = [...t.trust.items, ...t.trust.items, ...t.trust.items];

  return (
    <section
      ref={ref}
      className="relative overflow-hidden border-y border-white/8 bg-brand py-5 md:py-7"
    >
      <div
        className={`marquee-slow flex items-center gap-10 whitespace-nowrap px-6 md:gap-16 ${
          playing ? "" : "is-paused"
        }`}
      >
        {loop.map((item, i) => (
          <div key={`${item.label}-${i}`} className="flex items-baseline gap-3 md:gap-4">
            <span className="font-display text-2xl tracking-tight text-ink md:text-4xl">
              {item.value}
            </span>
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-ink/60 md:text-sm">
              {item.label}
            </span>
            <span className="ml-6 text-ink/25 md:ml-10" aria-hidden>
              /
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
