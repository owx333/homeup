"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";

const ease = [0.22, 1, 0.36, 1] as const;

/** Generous margin so fast scroll / overflow ancestors still trigger in-view. */
const viewport = { once: true, amount: 0.05, margin: "120px 0px" as const };

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease },
  },
};

export const stagger: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.04 },
  },
};

/**
 * Controlled in-view reveal. Survives EN/中文 switches: once shown, stays visible
 * even if children remount or layout shifts (unlike whileInView alone).
 */
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (reduce) setShown(true);
  }, [reduce]);

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      initial={false}
      animate={shown ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.55, ease, delay: shown ? delay : 0 }}
      viewport={viewport}
      onViewportEnter={() => setShown(true)}
    >
      {children}
    </motion.div>
  );
}

export function Stagger({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const [shown, setShown] = useState(false);

  useEffect(() => {
    if (reduce) setShown(true);
  }, [reduce]);

  if (reduce) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      className={className}
      variants={stagger}
      initial="hidden"
      animate={shown ? "show" : "hidden"}
      viewport={viewport}
      onViewportEnter={() => setShown(true)}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div className={className} variants={fadeUp}>
      {children}
    </motion.div>
  );
}
