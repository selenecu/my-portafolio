import React from "react";
import { cn } from "@/utils/cn";

/**
 *  UI: border magic from tailwind css btns
 *  Link: https://ui.aceternity.com/components/tailwindcss-buttons
 *
 *  The conic border is static at rest and only spins on hover/focus,
 *  and never when the user prefers reduced motion.
 *
 *  Renders an <a> when `href` is given (never a <button> inside a link),
 *  otherwise a <button type="button">.
 */
type MagicButtonProps = {
  title: string;
  icon: React.ReactNode;
  position: "left" | "right";
  href?: string;
  // Opens the link in a new tab.
  external?: boolean;
  handleClick?: () => void;
  ariaLabel?: string;
  className?: string;
  otherClasses?: string;
};

const MagicButton = ({
  title,
  icon,
  position,
  href,
  external = false,
  handleClick,
  ariaLabel,
  className,
  otherClasses,
}: MagicButtonProps) => {
  const shellClass = cn(
    "group relative inline-flex h-12 w-full md:w-60 overflow-hidden rounded-lg p-[1px]",
    className
  );

  const content = (
    <>
      <span
        aria-hidden="true"
        className="absolute inset-[-1000%] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] motion-safe:group-hover:animate-[spin_3s_linear_infinite] motion-safe:group-focus-visible:animate-[spin_3s_linear_infinite]"
      />
      <span
        className={cn(
          "inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2",
          otherClasses
        )}
      >
        {position === "left" && <span aria-hidden="true">{icon}</span>}
        {title}
        {position === "right" && <span aria-hidden="true">{icon}</span>}
      </span>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        aria-label={ariaLabel}
        className={shellClass}
        onClick={handleClick}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {content}
      </a>
    );
  }

  return (
    <button
      type="button"
      aria-label={ariaLabel}
      className={shellClass}
      onClick={handleClick}
    >
      {content}
    </button>
  );
};

export default MagicButton;
