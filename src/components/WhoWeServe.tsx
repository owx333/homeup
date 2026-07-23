"use client";

import { whatsappByKey } from "@/lib/site";
import { useLanguage } from "@/components/LanguageProvider";
import { Reveal } from "@/components/motion";

export function WhoWeServe() {
  const { t } = useLanguage();

  return (
    <section className="section-pad">
      <div className="mx-auto max-w-[90rem]">
        <Reveal>
          <p className="eyebrow">{t.who.eyebrow}</p>
          <h2 className="display-lg mt-5 max-w-3xl text-mist">{t.who.title}</h2>
        </Reveal>

        <div className="mt-14 grid gap-10 md:mt-20 md:grid-cols-2 md:gap-16">
          <Reveal delay={0.05}>
            <article className="group flex h-full flex-col border-t-2 border-white/15 pt-8">
              <h3 className="font-display text-3xl tracking-tight text-mist md:text-5xl">
                {t.who.homeownersTitle}
              </h3>
              <p className="mt-5 flex-1 text-base leading-relaxed text-muted md:text-lg">
                {t.who.homeownersBody}
              </p>
              <a
                href={whatsappByKey("homeowner")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-fit rounded-full border border-white/20 px-6 py-3.5 text-sm font-bold text-mist transition-colors hover:border-brand hover:text-brand"
              >
                {t.who.homeownersCta}
              </a>
            </article>
          </Reveal>
          <Reveal delay={0.12}>
            <article className="group flex h-full flex-col border-t-2 border-brand pt-8">
              <h3 className="font-display text-3xl tracking-tight text-mist md:text-5xl">
                {t.who.investorsTitle}
              </h3>
              <p className="mt-5 flex-1 text-base leading-relaxed text-muted md:text-lg">
                {t.who.investorsBody}
              </p>
              <a
                href={whatsappByKey("investor")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex w-fit rounded-full bg-brand px-6 py-3.5 text-sm font-bold text-ink transition-transform hover:scale-[1.03] hover:bg-white"
              >
                {t.who.investorsCta}
              </a>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
