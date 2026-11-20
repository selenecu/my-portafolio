"use client";
import React, { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { cn } from "@/utils/cn";
import { useAmbientMotion } from "@/utils/useAmbientMotion";

export const FlipWords = ({
  words,
  duration = 3000,
  className,
}: {
  words: string[];
  duration?: number;
  className?: string;
}) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [index, setIndex] = useState(0);
  const prefersReducedMotion = useReducedMotion();
  const canAnimate = useAmbientMotion(ref);
  // The OS preference is only known on the client; wait for mount to avoid a hydration mismatch.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  useEffect(() => {
    if (!canAnimate || words.length < 2) return;
    const id = setInterval(
      () => setIndex((i) => (i + 1) % words.length),
      duration
    );
    return () => clearInterval(id);
  }, [canAnimate, duration, words.length]);

  // Reduced motion: show every word at once instead of rotating them.
  if (mounted && prefersReducedMotion) {
    return (
      <span ref={ref} className={cn("inline-block", className)}>
        {words.join(" · ")}
      </span>
    );
  }

  return (
    <span
      ref={ref}
      className={cn("relative inline-block", className)}
      aria-live="off"
    >
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={words[index]}
          className="inline-block"
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};
