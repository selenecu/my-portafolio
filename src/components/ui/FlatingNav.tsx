"use client";
import React, { useMemo } from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/cn";
import { useActiveSection } from "@/utils/useActiveSection";

export type NavItem = {
  name: string;
  // Id of the section this item scrolls to.
  id: string;
  icon: JSX.Element;
};

/**
 * Primary navigation.
 * - Mobile: full-width bar pinned to the bottom (thumb zone), icon + short label,
 *   so it never covers the hero name.
 * - md+: text-only pill floating at the top.
 * The active-section marker slides between items (shared layout); MotionConfig
 * reducedMotion="user" turns that slide into an instant jump.
 */
export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: NavItem[];
  className?: string;
}) => {
  const ids = useMemo(() => navItems.map((item) => item.id), [navItems]);
  const active = useActiveSection(ids);

  return (
    <nav
      aria-label="Principal"
      className={cn(
        "fixed inset-x-0 bottom-0 z-[5000] border-t border-white/10 bg-black-100/90 pb-[env(safe-area-inset-bottom)] backdrop-blur-md",
        "md:inset-x-0 md:bottom-auto md:top-6 md:mx-auto md:w-fit md:rounded-full md:border md:px-2 md:pb-0 md:shadow-[0_12px_32px_-16px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      <ul className="flex items-stretch md:gap-1">
        {navItems.map((item) => {
          const isActive = item.id === active;
          return (
            <li key={item.id} className="flex-1 md:flex-none">
              <a
                href={`#${item.id}`}
                aria-current={isActive ? "location" : undefined}
                className={cn(
                  "relative flex min-h-[56px] flex-col items-center justify-center gap-1 px-1 text-white-100 transition-colors duration-200 hover:text-white",
                  "md:min-h-[44px] md:flex-row md:rounded-full md:px-4 md:text-sm",
                  isActive && "text-purple hover:text-purple"
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-active-marker"
                    aria-hidden="true"
                    className="absolute inset-x-3 top-0 h-0.5 rounded-full bg-purple md:inset-x-4 md:bottom-1.5 md:top-auto"
                    transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  />
                )}
                <span aria-hidden="true" className="md:hidden">
                  {item.icon}
                </span>
                {/* Visible on phones >= 340px; below that it stays as the accessible name only. */}
                <span className="text-[10px] font-medium leading-none tracking-[-0.01em] max-[339px]:sr-only md:text-sm md:leading-normal md:tracking-normal">
                  {item.name}
                </span>
              </a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
