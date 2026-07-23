"use client";

import Image from "next/image";
import { portfolio, site } from "@/lib/site";
import { asset } from "@/lib/paths";
import { useLanguage } from "@/components/LanguageProvider";
import { Reveal } from "@/components/motion";

const heights = ["h-[380px] sm:h-[480px]", "h-[460px] sm:h-[580px]", "h-[340px] sm:h-[440px]"];

export function Works() {
  const { lang, t } = useLanguage();
  const loop = [...portfolio, ...portfolio];

  return (
    <section id="works" className="relative overflow-hidden py-24 md:py-36">
      <div className="relative mx-auto max-w-[90rem] px-5 md:px-10 lg:px-14">
        <Reveal>
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div className="max-w-2xl">
              <p className="eyebrow">{t.works.eyebrow}</p>
              <h2 className="display-lg mt-5 text-mist">{t.works.title}</h2>
              <p className="lede mt-5">{t.works.support}</p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-brand px-6 py-3.5 text-sm font-bold text-ink transition-transform hover:scale-[1.03] hover:bg-white"
              >
                {t.works.moreFb}
              </a>
              <a
                href={site.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-mist transition-colors hover:border-brand hover:text-brand"
              >
                {t.works.moreIg}
              </a>
            </div>
          </div>
        </Reveal>
      </div>

      <div
        className="relative mt-16 overflow-hidden md:mt-24"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent, black 4%, black 96%, transparent)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, black 4%, black 96%, transparent)",
        }}
      >
        <div className="marquee-track flex items-end gap-4 px-4 md:gap-5">
          {loop.map((item, i) => (
            <a
              key={`${item.src}-${i}`}
              href={site.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className={`group relative block w-[260px] shrink-0 overflow-hidden rounded-[1.5rem] sm:w-[340px] md:w-[380px] ${heights[i % heights.length]}`}
            >
              <Image
                src={asset(item.src)}
                alt={item.title[lang]}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="380px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent opacity-90" />
              <div className="absolute inset-x-0 bottom-0 translate-y-2 p-6 opacity-90 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="font-display text-2xl tracking-tight text-mist">
                  {item.title[lang]}
                </p>
                <p className="mt-2 text-sm text-mist/55">{item.caption[lang]}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
