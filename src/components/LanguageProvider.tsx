"use client";

import {
  createContext,
  startTransition,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { getCopy, type Copy, type Lang } from "@/lib/site";

type LanguageContextValue = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: Copy;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>("en");

  useEffect(() => {
    const saved = window.localStorage.getItem("homeup-lang");
    if (saved === "en" || saved === "zh") {
      setLangState(saved);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang === "zh" ? "zh-CN" : "en";
    document.documentElement.dataset.lang = lang;
  }, [lang]);

  const setLang = useCallback((next: Lang) => {
    window.localStorage.setItem("homeup-lang", next);
    startTransition(() => {
      setLangState(next);
    });
  }, []);

  const value = useMemo(
    () => ({ lang, setLang, t: getCopy(lang) }),
    [lang, setLang],
  );

  return (
    <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
  );
}

export function useLanguage() {
  const ctx = useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within LanguageProvider");
  }
  return ctx;
}
