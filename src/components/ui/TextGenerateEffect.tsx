"use client";
import { useEffect } from "react";
import { motion, stagger, useAnimate, useReducedMotion } from "framer-motion";
import { cn } from "@/utils/cn";

// Total reveal is capped well under 600ms so the text never makes readers wait.
const WORD_DURATION_S = 0.25;
const MAX_TOTAL_S = 0.6;

export const TextGenerateEffect = ({
  words,
  className,
}: {
  words: string;
  className?: string;
}) => {
  const [scope, animate] = useAnimate();
  const prefersReducedMotion = useReducedMotion();
  const wordsArray = words.split(" ");
  const staggerStep = Math.min(
    0.06,
    (MAX_TOTAL_S - WORD_DURATION_S) / Math.max(wordsArray.length - 1, 1)
  );

  useEffect(() => {
    if (prefersReducedMotion) {
      animate("span", { opacity: 1 }, { duration: 0 });
      return;
    }
    animate(
      "span",
      { opacity: 1 },
      { duration: WORD_DURATION_S, delay: stagger(staggerStep) }
    );
  }, [animate, prefersReducedMotion, staggerStep]);

  return (
    // Caller's className wins over these defaults (tailwind-merge).
    <div
      className={cn(
        "font-bold text-4xl leading-snug tracking-wide dark:text-white text-black",
        className
      )}
    >
      <motion.div ref={scope}>
        {wordsArray.map((word, idx) => (
          <motion.span key={word + idx} className="opacity-0">
            {word}{" "}
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};
