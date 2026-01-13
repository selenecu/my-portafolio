import Image from "next/image";
import React, { useRef } from "react";
import {
  motion,
  useTransform,
  useMotionValue,
  useAnimationFrame,
  useMotionTemplate,
} from "framer-motion";

export const MovingBorder = ({
  children,
  duration = 2000,
  rx = "50%", // redondeado (círculo si la imagen es cuadrada)
  ry = "50%",
  stroke = "url(#gradient)",
  strokeWidth = 2,
  ...otherProps
}: {
  children: React.ReactNode;
  duration?: number;
  rx?: string;
  ry?: string;
  stroke?: string;
  strokeWidth?: number;
  [key: string]: any;
}) => {
  const pathRef = useRef<SVGRectElement>(null);
  const progress = useMotionValue<number>(0);

  useAnimationFrame((time) => {
    const length = pathRef.current?.getTotalLength();
    if (length) {
      const pxPerMillisecond = length / duration;
      progress.set((time * pxPerMillisecond) % length);
    }
  });

  const x = useTransform(progress, (val) =>
    pathRef.current?.getPointAtLength(val).x
  );
  const y = useTransform(progress, (val) =>
    pathRef.current?.getPointAtLength(val).y
  );

  const transform = useMotionTemplate`translateX(${x}px) translateY(${y}px) translateX(-50%) translateY(-50%)`;

  return (
    <div className="relative inline-block" {...otherProps}>
      {/* Imagen u otro contenido */}
      {children}

      {/* SVG borde animado */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full pointer-events-none"
      >
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#a855f7" />   {/* morado */}
            <stop offset="100%" stopColor="#6366f1" /> {/* indigo */}
          </linearGradient>
        </defs>

        <rect
          fill="none"
          width="100%"
          height="100%"
          rx={rx}
          ry={ry}
          stroke={stroke}
          strokeWidth={strokeWidth}
          ref={pathRef}
        />
      </svg>

      {/* Glow en movimiento */}
      <motion.div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          transform,
          pointerEvents: "none",
        }}
        className="w-3 h-3 rounded-full bg-white shadow-[0_0_10px_#fff]"
      />
    </div>
  );
};
