import React, { useState } from "react";
import { motion } from "framer-motion";
import { skills, type Skill } from "@/data";

// Variantes para el contenedor (controla el orden de aparición)
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Retraso entre cada hijo
      delayChildren: 0.2,
    },
  },
};

// Variantes para cada ítem (efecto de subida y fade)
const itemVariants = {
  hidden: { y: 20, opacity: 0, scale: 0.8 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 100 },
  },
};

// Sub-componente para cada Icono (para manejar el hover individualmente)
const SkillItem = ({ item }: { item: Skill }) => {
  const Icon = item.icon;

  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={itemVariants}
      className="relative group flex items-center justify-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Círculo de fondo con brillo */}
      <div className="absolute inset-0 bg-purple/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <motion.div
        whileHover={{ scale: 1.2, rotate: 5 }}
        whileTap={{ scale: 0.9 }}
        className="relative z-10 p-2 border-2 border-white/10 rounded-full bg-black/50 backdrop-blur-sm shadow-lg cursor-pointer hover:border-purple/50 transition-colors duration-300"
      >
        {Icon ? (
          <Icon
            role="img"
            aria-label={item.name}
            color={item.color}
            className="h-10 w-10 md:h-14 md:w-14"
          />
        ) : (
          // Text fallback for skills without a brand icon
          <span
            role="img"
            aria-label={item.name}
            className="flex h-10 w-10 md:h-14 md:w-14 items-center justify-center text-xs md:text-sm font-bold tracking-wide text-purple"
          >
            {item.abbr ?? item.name.slice(0, 2)}
          </span>
        )}
      </motion.div>

      {/* Tooltip Animado */}
      <motion.div
        initial={{ opacity: 0, y: 10, scale: 0.8 }}
        animate={{
          opacity: isHovered ? 1 : 0,
          y: isHovered ? -10 : 10,
          scale: isHovered ? 1 : 0.8,
        }}
        className="absolute -top-16 left-1/2 -translate-x-1/2 px-4 py-2 bg-gray-900 border border-white/10 rounded-xl whitespace-nowrap z-50 pointer-events-none shadow-xl"
      >
        <div className="absolute inset-x-0 -bottom-1 mx-auto h-2 w-2 bg-gray-900 rotate-45 border-r border-b border-white/10"></div>
        <p className="font-bold text-white text-sm">{item.name}</p>
        <p className="text-xs text-gray-400">{item.designation}</p>
      </motion.div>
    </motion.div>
  );
};

const Habilities = () => {
  return (
    <section className="py-20 w-full relative overflow-hidden" id="skills">
      {/* Fondo decorativo sutil */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple/10 rounded-full blur-[100px] -z-10" />

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl md:text-5xl font-bold capitalize">
          Mis <span className="text-purple">Habilidades</span>
        </h2>
        <p className="text-gray-400 mt-4 max-w-lg mx-auto">
          Tecnologías y herramientas que utilizo para dar vida a mis proyectos.
        </p>
      </motion.div>

      <div className="max-w-6xl mx-auto px-4 space-y-16">
        {skills.map((group) => (
          <div key={group.title}>
            <h3 className="text-2xl font-semibold text-center mb-8 text-white/80">
              <span className="border-b-2 border-purple-500 pb-2">{group.title}</span>
            </h3>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              className="flex flex-wrap justify-center gap-8 md:gap-12"
            >
              {group.items.map((item) => (
                <SkillItem key={item.id} item={item} />
              ))}
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Habilities;