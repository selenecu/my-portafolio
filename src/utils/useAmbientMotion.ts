"use client";
import { RefObject, useEffect, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

/**
 * Gate for decorative loops (shuffles, rotating words, autoplay).
 * Returns true only when the user allows motion, the element is on screen
 * and the tab is visible, so nonessential loops stop when nobody sees them.
 */
export function useAmbientMotion(ref: RefObject<Element | null>): boolean {
  const prefersReducedMotion = useReducedMotion();
  const inView = useInView(ref);
  const [pageVisible, setPageVisible] = useState(true);

  useEffect(() => {
    const update = () =>
      setPageVisible(document.visibilityState === "visible");
    update();
    document.addEventListener("visibilitychange", update);
    return () => document.removeEventListener("visibilitychange", update);
  }, []);

  return prefersReducedMotion !== true && inView && pageVisible;
}
