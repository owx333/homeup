"use client";

import { site, whatsappByKey } from "@/lib/site";
import { useLanguage } from "@/components/LanguageProvider";
import { Logo } from "@/components/Logo";
import { Reveal } from "@/components/motion";

export function Contact() {
  const { t } = useLanguage();

  return (
    <section id="contact" className="relative overflow-hidden">
      <div className="absolute inset-0 brand-shimmer" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_20%,rgba(0,0,0,0.12),transparent_40%),radial-gradient(circle_at_90%_80%,rgba(0,0,0,0.28),transparent_45%)]" />

      <div className="relative mx-auto grid max-w-[90rem] gap-12 px-5 py-24 md:grid-cols-[1.2fr_0.8fr] md:items-end md:gap-16 md:px-10 md:py-32 lg:px-14">
        <Reveal>
          <Logo size={100} className="mb-10 shadow-[0_24px_70px_rgba(0,0,0,0.28)]" />
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-ink/55">
            {t.contact.eyebrow}
          </p>
          <h2 className="mt-4 font-display text-[clamp(2.4rem,5vw,4.8rem)] leading-[0.95] tracking-[-0.04em] text-ink">
            {t.contact.title}
          </h2>
          <p className="mt-5 max-w-md text-base leading-relaxed text-ink/70 md:text-lg">
            {t.contact.support}
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-ink px-8 py-4 text-sm font-bold text-mist transition-transform hover:scale-[1.03]"
            >
              {t.contact.cta}
            </a>
            <a
              href={whatsappByKey("visit")}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-ink/25 px-8 py-4 text-sm font-semibold text-ink transition-colors hover:bg-ink/10"
            >
              {t.contact.ctaVisit}
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="space-y-7 rounded-[2rem] border border-ink/10 bg-ink/10 p-8 backdrop-blur-md md:p-10">
            {[
              {
                label: t.contact.call,
                node: (
                  <a
                    href={`tel:${site.phoneTel}`}
                    className="mt-1 block font-display text-3xl tracking-tight text-ink hover:underline"
                  >
                    {site.phone}
                  </a>
                ),
              },
              {
                label: t.contact.email,
                node: (
                  <a
                    href={`mailto:${site.email}`}
                    className="mt-1 block text-lg font-medium text-ink hover:underline"
                  >
                    {site.email}
                  </a>
                ),
              },
              {
                label: t.contact.visit,
                node: (
                  <a
                    href={site.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-1 block text-base leading-relaxed text-ink hover:underline"
                  >
                    {site.address}
                    <br />
                    {site.city}
                  </a>
                ),
              },
              {
                label: t.contact.hours,
                node: (
                  <p className="mt-1 text-base leading-relaxed text-ink">
                    {site.hoursWeekday}
                    <br />
                    {site.hoursWeekend}
                  </p>
                ),
              },
              {
                label: t.contact.company,
                node: (
                  <p className="mt-1 text-base font-semibold text-ink">{site.legalName}</p>
                ),
              },
            ].map((row) => (
              <div key={row.label}>
                <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-ink/45">
                  {row.label}
                </p>
                {row.node}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
