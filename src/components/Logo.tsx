"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { withBase } from "@/lib/paths";

type LogoProps = {
  size?: number;
  className?: string;
  animated?: boolean;
  priority?: boolean;
};

export function Logo({
  size = 56,
  className = "",
  animated = true,
  priority = false,
}: LogoProps) {
  const reduce = useReducedMotion();
  const useGif = animated && !reduce;

  return (
    <motion.div
      className={`relative overflow-hidden rounded-[22%] shadow-[0_12px_40px_rgba(255,98,11,0.4)] ${className}`}
      style={{ width: size, height: size }}
      whileHover={reduce ? undefined : { scale: 1.05 }}
      transition={{ type: "spring", stiffness: 320, damping: 22 }}
    >
      {/* Exact brand asset — GIF for motion, PNG for reduced-motion / static */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      {useGif ? (
        <img
          src={withBase("/brand/logo-motion.gif")}
          alt="HomeUP"
          width={size}
          height={size}
          className="h-full w-full object-cover"
        />
      ) : (
        <Image
          src="/brand/logo.png"
          alt="HomeUP"
          width={size}
          height={size}
          priority={priority}
          className="h-full w-full object-cover"
        />
      )}
    </motion.div>
  );
}
