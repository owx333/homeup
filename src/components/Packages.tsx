"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { whatsappByKey } from "@/lib/site";
import { asset } from "@/lib/paths";
import { useLanguage } from "@/components/LanguageProvider";
import { Reveal } from "@/components/motion";

const packageImages = {
  reno: "/stock/styles/contemporary.jpg",
  ownstay: "/stock/styles/warm.jpg",
  manage: "/stock/styles/elegant.jpg",
} as const;

export function Packages() {
  const { lang, t } = useLanguage();
  const [ownstay, reno, manage] = t.packages.items;
  const sidePackages = [
    { pkg: ownstay, image: packageImages.ownstay },
    { pkg: manage, image: packageImages.manage },
  ];

  return (
    <section id="packages" className="section-pad relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_80%_0%,rgba(255,98,11,0.18),transparent_50%)]" />

      <div className="relative mx-auto max-w-[90rem]">
        <Reveal>
          <p className="eyebrow">{t.packages.eyebrow}</p>
          <div className="mt-5 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <h2 className="display-lg max-w-2xl text-mist">{t.packages.title}</h2>
            <p className="lede">{t.packages.support}</p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-5 md:mt-16 md:grid-cols-12 md:gap-5">
          <Reveal className="md:col-span-7 md:row-span-2">
            <motion.article
              whileHover={{ y: -4 }}
              className="relative flex h-full min-h-[32rem] flex-col overflow-hidden rounded-[2rem] border border-brand/40 bg-brand text-ink lg:flex-row"
            >
              <div className="relative z-10 flex flex-1 flex-col p-7 md:p-9 lg:max-w-[52%]">
                <span className="w-fit rounded-full bg-ink px-3.5 py-1.5 text-[11px] font-bold uppercase tracking-wider text-brand">
                  {lang === "zh" ? "热门" : "Popular"}
                </span>
                <p className="mt-8 text-xs font-bold uppercase tracking-[0.22em] text-ink/55">
                  {reno.audience}
                </p>
                <h3 className="mt-3 font-display text-4xl tracking-tight md:text-[3.25rem]">
                  {reno.title}
                </h3>
                <ul className="mt-7 flex-1 space-y-3">
                  {reno.points.map((point) => (
                    <li key={point} className="flex gap-3 text-sm font-medium md:text-base">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-ink" />
                      {point}
                    </li>
                  ))}
                </ul>
                <a
                  href={whatsappByKey(reno.hrefKey)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex justify-center rounded-full bg-ink px-6 py-4 text-sm font-bold text-mist transition-transform hover:scale-[1.03]"
                >
                  {reno.cta}
                </a>
              </div>

              <div className="relative min-h-[14rem] flex-1 lg:min-h-full">
                <Image
                  src={asset(packageImages.reno)}
                  alt={reno.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand via-brand/20 to-transparent lg:bg-gradient-to-l lg:from-transparent lg:via-brand/25 lg:to-brand/80" />
              </div>
            </motion.article>
          </Reveal>

          {sidePackages.map(({ pkg, image }, i) => (
            <Reveal key={pkg.title} delay={0.08 + i * 0.06} className="md:col-span-5">
              <motion.article
                whileHover={{ y: -4 }}
                className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-white/12 bg-ink-elevated shadow-[0_12px_40px_rgba(0,0,0,0.35)] transition-colors hover:border-brand/40"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={asset(image)}
                    alt={pkg.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 40vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink-elevated via-ink/30 to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-6 md:p-7">
                  <p className="text-xs font-bold uppercase tracking-[0.22em] text-brand">
                    {pkg.audience}
                  </p>
                  <h3 className="mt-3 font-display text-2xl tracking-tight text-mist md:text-3xl">
                    {pkg.title}
                  </h3>
                  <ul className="mt-5 flex-1 space-y-2.5">
                    {pkg.points.map((point) => (
                      <li key={point} className="flex gap-3 text-sm text-muted">
                        <span className="mt-1.5 size-1.5 shrink-0 rounded-full bg-brand" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={whatsappByKey(pkg.hrefKey)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-7 inline-flex w-fit justify-center rounded-full border border-white/20 bg-white/[0.03] px-6 py-3 text-sm font-bold text-mist transition-colors hover:border-brand hover:text-brand"
                  >
                    {pkg.cta}
                  </a>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
