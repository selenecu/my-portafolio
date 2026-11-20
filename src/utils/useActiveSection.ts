"use client";
import { useEffect, useState } from "react";

// A thin band just above the middle of the viewport: the section crossing it is "current".
const SPY_ROOT_MARGIN = "-40% 0px -55% 0px";

/**
 * Scrollspy: returns the id of the section the reader is currently in.
 * Keeps the last known section while the band sits in a gap between sections,
 * and selects the last section once the page is scrolled to the bottom
 * (a short final section may never reach the band).
 */
export function useActiveSection(ids: readonly string[]): string | null {
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    if (elements.length === 0) return;

    const intersecting = new Set<string>();

    const pick = () => {
      const atBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      if (atBottom) {
        setActive(ids[ids.length - 1]);
        return;
      }
      const current = ids.find((id) => intersecting.has(id));
      if (current) setActive(current);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) intersecting.add(entry.target.id);
          else intersecting.delete(entry.target.id);
        }
        pick();
      },
      { rootMargin: SPY_ROOT_MARGIN }
    );

    elements.forEach((el) => observer.observe(el));
    window.addEventListener("scroll", pick, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", pick);
    };
  }, [ids]);

  return active;
}
