"use client";

import { useEffect, useRef, useState } from "react";

/** Pause expensive CSS animations while the element is off-screen. */
export function useInViewPlay<T extends HTMLElement>(threshold = 0.05) {
  const ref = useRef<T | null>(null);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => setPlaying(entry.isIntersecting),
      { threshold },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [threshold]);

  return { ref, playing };
}
