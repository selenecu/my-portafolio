"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, useReducedMotion, useScroll } from "framer-motion";
import { IconArrowUp } from "@tabler/icons-react";
import { workExperience } from "@/data";
import { cn } from "@/utils/cn";

type Role = (typeof workExperience)[number];
type CompanyGroup = { company: string; roles: Role[] };

// Consecutive roles at the same company form one group, so a promotion
// reads as a progression inside one card instead of two unrelated entries.
const groupByCompany = (roles: readonly Role[]): CompanyGroup[] =>
  roles.reduce<CompanyGroup[]>((groups, role) => {
    const last = groups[groups.length - 1];
    if (last && last.company === role.company) last.roles.push(role);
    else groups.push({ company: role.company, roles: [role] });
    return groups;
  }, []);

// workExperience is already ordered newest first.
const groups = groupByCompany(workExperience);

/**
 * Timeline geometry (CSS variables):
 *  --g   gutter between the rail and the cards
 *  --pad card padding
 * The rail sits 8px from the list's left edge; each role's dot is offset back
 * through the card padding, card border (1px) and gutter so it lands on the rail.
 */
const Experience = () => {
  const railRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  // The OS preference is only known on the client; wait for mount to avoid a hydration mismatch.
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);
  const drawFully = mounted && prefersReducedMotion === true;

  const { scrollYProgress } = useScroll({
    target: railRef,
    offset: ["start 70%", "end 60%"],
  });

  return (
    <section
      className="py-20 w-full"
      id="experience"
      aria-labelledby="experience-title"
    >
      <h2 id="experience-title" className="heading">
        Mi <span className="text-purple">experiencia laboral</span>
      </h2>

      <div
        ref={railRef}
        className="relative mx-auto mt-12 max-w-3xl pl-[var(--g)] [--g:2rem] md:[--g:3rem]"
      >
        {/* Rail: a faint track, and the lilac progress drawn with scroll (transform only). */}
        <span
          aria-hidden="true"
          className="absolute bottom-2 left-[7px] top-2 w-0.5 rounded-full bg-white/10"
        />
        <motion.span
          aria-hidden="true"
          className="absolute bottom-2 left-[7px] top-2 w-0.5 origin-top rounded-full bg-purple"
          style={{ scaleY: drawFully ? 1 : scrollYProgress }}
        />

        <ol className="space-y-8">
          {groups.map((group) => {
            const [latest] = group.roles;
            return (
              <li key={group.company}>
                <div className="rounded-3xl border border-slate-800 bg-gradient-to-r from-[#04071D] to-[#0C0E23] p-[var(--pad)] text-white [--pad:1.25rem] md:[--pad:2rem]">
                  <div className="flex items-center gap-4">
                    {/* Decorative: the company name is right next to it. */}
                    <Image
                      src={latest.thumbnail}
                      alt=""
                      width={64}
                      height={64}
                      className="h-12 w-12 shrink-0 md:h-16 md:w-16"
                    />
                    <div className="min-w-0">
                      <p className="text-lg font-semibold [overflow-wrap:anywhere]">
                        {group.company}
                      </p>
                      <p className="mt-0.5 flex flex-wrap gap-x-3 text-sm text-white-100">
                        {latest.ruc && <span>RUC: {latest.ruc}</span>}
                        {latest.link && (
                          <a
                            href={latest.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple underline-offset-4 hover:underline"
                          >
                            Visitar sitio web
                          </a>
                        )}
                      </p>
                    </div>
                  </div>

                  <ol className="mt-6 space-y-8">
                    {group.roles.map((role, index) => (
                      <li key={role.id}>
                        <RoleEntry
                          role={role}
                          promotedFrom={group.roles[index + 1]}
                          forceReached={drawFully}
                        />
                      </li>
                    ))}
                  </ol>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
};

const RoleEntry = ({
  role,
  promotedFrom,
  forceReached,
}: {
  role: Role;
  // The previous (older) role at the same company, when this role is a promotion.
  promotedFrom?: Role;
  forceReached: boolean;
}) => {
  const ref = useRef<HTMLElement>(null);
  // The dot fills once the role scrolls into the upper part of the viewport,
  // roughly where the rail is being drawn.
  const reached = useInView(ref, { once: true, margin: "0px 0px -40% 0px" });
  const filled = reached || forceReached;

  return (
    <article ref={ref} className="relative">
      <span
        aria-hidden="true"
        className={cn(
          "absolute left-[calc(-1*(var(--pad)+var(--g)+1px))] top-1.5 h-4 w-4 rounded-full border-2 border-purple transition-colors duration-500 md:top-2",
          filled ? "bg-purple" : "bg-black-100"
        )}
      />
      <h3 className="text-xl font-bold md:text-2xl">{role.title}</h3>
      {promotedFrom && (
        <p className="mt-1 inline-flex items-center gap-1.5 text-sm font-semibold text-purple">
          <IconArrowUp aria-hidden="true" className="h-4 w-4" stroke={2.25} />
          Promoción desde {promotedFrom.title}
        </p>
      )}
      <p className="mt-1 text-sm font-semibold text-white-100">{role.periodo}</p>
      <p className="mt-3 max-w-[65ch] leading-relaxed text-white-100">
        {role.desc}
      </p>
    </article>
  );
};

export default Experience;
