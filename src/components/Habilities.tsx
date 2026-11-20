import React from "react";
import { motion } from "framer-motion";
import { skills, type Skill } from "@/data";

// Container variants: stagger the items of each group as they enter the viewport.
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 12, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
  },
};

/**
 * One Skill: icon plus its visible name (works on touch and for screen readers).
 * The designation is read by screen readers as part of the item; the hover
 * tooltip only repeats it for pointer users, so items stay out of the tab order.
 */
const SkillItem = ({ item }: { item: Skill }) => {
  const Icon = item.icon;

  return (
    <motion.li
      variants={itemVariants}
      className="group relative flex w-20 flex-col items-center gap-2 text-center md:w-24"
    >
      {/* Soft glow behind the icon on hover */}
      <div
        aria-hidden="true"
        className="absolute left-1/2 top-0 h-14 w-14 -translate-x-1/2 rounded-full bg-purple/20 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100 md:h-[4.5rem] md:w-[4.5rem]"
      />

      <div
        aria-hidden="true"
        className="relative z-10 rounded-full border-2 border-white/10 bg-black/50 p-2 shadow-lg backdrop-blur-sm transition-colors duration-300 group-hover:border-purple/50"
      >
        {Icon ? (
          <Icon color={item.color} className="h-10 w-10 md:h-14 md:w-14" />
        ) : (
          // Text fallback for skills without a brand icon
          <span className="flex h-10 w-10 items-center justify-center text-xs font-bold tracking-wide text-purple md:h-14 md:w-14 md:text-sm">
            {item.abbr ?? item.name.slice(0, 2)}
          </span>
        )}
      </div>

      <span className="text-xs font-medium leading-tight text-white-100 [text-wrap:balance]">
        {item.name}
        <span className="sr-only">: {item.designation}</span>
      </span>

      {/* Pointer-only tooltip; the same text is already in the accessible name above. */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-12 left-1/2 z-50 -translate-x-1/2 whitespace-nowrap rounded-xl border border-white/10 bg-gray-900 px-3 py-1.5 text-xs text-gray-300 opacity-0 shadow-xl transition-opacity duration-200 group-hover:opacity-100"
      >
        {item.designation}
      </span>
    </motion.li>
  );
};

const Habilities = () => {
  return (
    <section
      className="py-20 w-full relative overflow-hidden"
      id="skills"
      aria-labelledby="skills-title"
    >
      {/* Subtle decorative glow */}
      <div
        aria-hidden="true"
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple/10 rounded-full blur-[100px] -z-10"
      />

      <div className="text-center mb-16">
        <h2 id="skills-title" className="heading">
          Mis <span className="text-purple">habilidades</span>
        </h2>
        <p className="text-gray-400 mt-4 max-w-lg mx-auto">
          Tecnologías y herramientas que utilizo para dar vida a mis proyectos.
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 space-y-16">
        {skills.map((group) => (
          <div key={group.title}>
            <h3 className="text-2xl font-semibold text-center mb-8 text-white/80">
              <span className="border-b-2 border-purple pb-2">{group.title}</span>
            </h3>

            <motion.ul
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-wrap justify-center gap-x-4 gap-y-8 md:gap-x-8"
            >
              {group.items.map((item) => (
                <SkillItem key={item.id} item={item} />
              ))}
            </motion.ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Habilities;
