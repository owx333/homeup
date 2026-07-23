"use client";

import { site } from "@/lib/site";
import { useLanguage } from "@/components/LanguageProvider";
import { Logo } from "@/components/Logo";

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="border-t border-white/8 px-5 py-12 md:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center gap-3">
          <Logo size={48} animated={false} />
          <div>
            <p className="font-display text-lg font-bold tracking-tight text-mist">
              {site.name}
            </p>
            <p className="text-sm text-muted">{t.footer.tagline}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-6 text-sm font-medium text-muted">
          <a
            href={site.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-brand"
          >
            Instagram
          </a>
          <a
            href={site.social.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-brand"
          >
            Facebook
          </a>
          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-brand"
          >
            WhatsApp
          </a>
        </div>
      </div>

      <p className="mx-auto mt-10 max-w-6xl text-xs text-muted/70">
        © {new Date().getFullYear()} {site.legalName}. {t.footer.rights}
      </p>
    </footer>
  );
}
