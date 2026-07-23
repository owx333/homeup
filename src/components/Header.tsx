"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { site } from "@/lib/site";
import { useLanguage } from "@/components/LanguageProvider";
import { Logo } from "@/components/Logo";

export function Header() {
  const { lang, setLang, t } = useLanguage();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#services", label: t.nav.services },
    { href: "#packages", label: t.nav.packages },
    { href: "#works", label: t.nav.works },
    { href: "#process", label: t.nav.process },
    { href: "#faq", label: t.nav.faq },
    { href: "#contact", label: t.nav.contact },
  ];

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "border-b border-white/8 bg-ink/80 backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-[90rem] items-center justify-between gap-4 px-5 py-4 md:px-10 lg:px-14">
        <a href="#top" className="flex items-center gap-3" aria-label="HomeUP">
          <Logo size={40} priority />
          <span className="font-display text-lg font-bold tracking-tight text-mist md:text-xl">
            HOME<span className="text-brand">UP</span>
          </span>
        </a>

        <nav className="hidden items-center gap-6 text-sm font-medium text-mist/70 lg:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="relative transition-colors hover:text-mist after:absolute after:-bottom-1 after:left-0 after:h-px after:w-0 after:bg-brand after:transition-all hover:after:w-full"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <div
            className="flex rounded-full border border-white/12 bg-white/5 p-0.5 text-xs font-semibold backdrop-blur"
            role="group"
            aria-label="Language"
          >
            {(["en", "zh"] as const).map((code) => (
              <button
                key={code}
                type="button"
                onClick={() => setLang(code)}
                className="relative rounded-full px-3 py-1.5"
              >
                {lang === code && (
                  <motion.span
                    layoutId="lang-pill"
                    className="absolute inset-0 rounded-full bg-brand"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span
                  className={`relative z-10 ${
                    lang === code ? "text-ink" : "text-mist/70"
                  }`}
                >
                  {code === "en" ? "EN" : "中文"}
                </span>
              </button>
            ))}
          </div>

          <a
            href={site.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden rounded-full bg-brand px-4 py-2 text-sm font-bold text-ink transition-transform hover:scale-[1.03] hover:bg-brand-hot sm:inline-flex"
          >
            {t.nav.whatsapp}
          </a>

          <button
            type="button"
            className="inline-flex size-10 items-center justify-center rounded-full border border-white/12 text-mist lg:hidden"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <div className="space-y-1.5">
              <span
                className={`block h-0.5 w-4 bg-mist transition ${open ? "translate-y-2 rotate-45" : ""}`}
              />
              <span
                className={`block h-0.5 w-4 bg-mist transition ${open ? "opacity-0" : ""}`}
              />
              <span
                className={`block h-0.5 w-4 bg-mist transition ${open ? "-translate-y-2 -rotate-45" : ""}`}
              />
            </div>
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="border-t border-white/8 bg-ink/95 px-5 py-6 backdrop-blur-xl lg:hidden"
          >
            <div className="flex flex-col gap-4 text-base font-medium">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-mist/85"
                >
                  {link.label}
                </a>
              ))}
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 inline-flex justify-center rounded-full bg-brand px-4 py-3 text-sm font-semibold text-ink"
              >
                {t.nav.whatsapp}
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
