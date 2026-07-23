"use client";

import { useRef, useState, useCallback, type PointerEvent } from "react";
import Image from "next/image";
import { beforeAfterPairs } from "@/lib/site";
import { asset } from "@/lib/paths";
import { useLanguage } from "@/components/LanguageProvider";
import { Reveal } from "@/components/motion";

function CompareSlider({
  before,
  after,
  beforeLabel,
  afterLabel,
  title,
}: {
  before: string;
  after: string;
  beforeLabel: string;
  afterLabel: string;
  title: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);

  const update = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(90, Math.max(10, next)));
  }, []);

  const onPointerDown = (e: PointerEvent<HTMLDivElement>) => {
    dragging.current = true;
    e.currentTarget.setPointerCapture(e.pointerId);
    update(e.clientX);
  };
  const onPointerMove = (e: PointerEvent<HTMLDivElement>) => {
    if (!dragging.current) return;
    update(e.clientX);
  };
  const onPointerUp = () => {
    dragging.current = false;
  };

  return (
    <div
      ref={ref}
      className="relative aspect-[16/11] touch-none overflow-hidden rounded-[1.5rem] border border-ink/10 bg-ink select-none"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerCancel={onPointerUp}
      role="img"
      aria-label={title}
    >
      <Image src={asset(after)} alt="" fill className="object-cover" sizes="800px" />
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <Image src={asset(before)} alt="" fill className="object-cover" sizes="800px" />
      </div>

      <div
        className="absolute inset-y-0 z-10 w-0.5 -translate-x-1/2 bg-brand"
        style={{ left: `${pos}%` }}
      >
        <div className="absolute top-1/2 left-1/2 flex size-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-brand bg-ink text-[11px] font-extrabold tracking-tight text-brand shadow-[0_8px_30px_rgba(0,0,0,0.45)]">
          ◀▶
        </div>
      </div>

      <span className="absolute top-4 left-4 rounded-full bg-ink/75 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-mist backdrop-blur">
        {beforeLabel}
      </span>
      <span className="absolute top-4 right-4 rounded-full bg-brand px-3 py-1 text-[10px] font-bold uppercase tracking-[0.18em] text-ink">
        {afterLabel}
      </span>
    </div>
  );
}

export function BeforeAfter() {
  const { lang, t } = useLanguage();

  return (
    <section id="before-after" className="section-pad section-light relative overflow-hidden">
      <div className="relative mx-auto max-w-[90rem]">
        <Reveal>
          <div className="grid gap-5 md:grid-cols-[1.2fr_0.8fr] md:items-end">
            <div>
              <p className="eyebrow">{t.beforeAfter.eyebrow}</p>
              <h2 className="display-lg mt-4">{t.beforeAfter.title}</h2>
            </div>
            <p className="lede md:text-right">{t.beforeAfter.support}</p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-10 md:mt-14 md:grid-cols-2 md:gap-8">
          {beforeAfterPairs.map((pair, i) => (
            <Reveal key={pair.id} delay={i * 0.08}>
              <CompareSlider
                before={pair.before}
                after={pair.after}
                beforeLabel={t.beforeAfter.before}
                afterLabel={t.beforeAfter.after}
                title={pair.title[lang]}
              />
              <h3 className="mt-5 font-display text-2xl tracking-tight text-ink md:text-3xl">
                {pair.title[lang]}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/55 md:text-base">
                {pair.caption[lang]}
              </p>
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-xs text-ink/45">{t.beforeAfter.note}</p>
      </div>
    </section>
  );
}
