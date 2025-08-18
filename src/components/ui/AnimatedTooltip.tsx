import Image from "next/image";
import React, { useState } from "react";
import { motion, AnimatePresence, useMotionValue } from "framer-motion";
import { MovingBorder } from "@/components/ui/BordeMovimiento";

interface Item {
  id: number;
  name: string;
  designation: string;
  src: string;
}

interface AnimatedTooltipProps {
  items: Item[];
}

export const AnimatedTooltip: React.FC<AnimatedTooltipProps> = ({ items }) => {
  const [hoveredItem, setHoveredItem] = useState<Item | null>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    mouseX.set(event.clientX);
    mouseY.set(event.clientY);
  };

  return (
    <div className="flex relative justify-center" onMouseMove={handleMouseMove}>
      {items.map((item) => (
        <div
          key={item.id}
          className="relative group flex items-center justify-center right-2 md:right-4"
          onMouseEnter={() => setHoveredItem(item)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <MovingBorder
            duration={3000}
            className="w-20 h-20 flex items-center justify-center"
          >
            <Image
              src={item.src}
              alt={item.name}
              width={50}
              height={50}
              className="rounded-md object-cover"
            />
          </MovingBorder>
        </div>
      ))}

      {/* Tooltip flotante con delay y animación */}
      <AnimatePresence>
        {hoveredItem && (
          <motion.div
            role="tooltip"
            initial={{ opacity: 0, scale: 0.8, y: 10 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              transition: {
                duration: 0.2, // suavidad de entrada
                delay: 0.1, // pequeño delay al aparecer
              },
            }}
            exit={{
              opacity: 0,
              scale: 0.8,
              y: 10,
              transition: {
                duration: 0.15, // salida rápida
              },
            }}
            style={{
              position: "fixed",
              top: mouseY.get() + 20, // aparece justo debajo del cursor
              left: mouseX.get() + 20,
              pointerEvents: "none",
            }}
            className="rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 
                       backdrop-blur-md shadow-xl px-4 py-2 z-[9999] text-white"
          >
            <div className="font-bold text-base">{hoveredItem.name}</div>
            <div className="text-xs text-gray-200">
              {hoveredItem.designation}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default AnimatedTooltip;
