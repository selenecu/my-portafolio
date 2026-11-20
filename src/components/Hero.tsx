"use client";
import { FaLocationArrow } from "react-icons/fa6";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { FlipWords } from "./ui/flip-words";
import { words, squareData, profile, type SquareImage } from "@/data";
import { useAmbientMotion } from "@/utils/useAmbientMotion";

const Hero = () => {
  return (
    <section className="w-full py-8 lg:py-12 grid grid-cols-1 lg:grid-cols-2 items-center gap-10 max-w-6xl mx-auto md:px-8">
      <div className="relative pt-20 pb-6 lg:pt-28 lg:pb-16" id="about">
        <div>
          <Spotlight
            className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
            fill="white"
          />
          <Spotlight
            className="h-[80vh] w-[50vw] top-10 left-full"
            fill="purple"
          />
          <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="blue" />
        </div>
        <div
          className="w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.03] bg-grid-black-100/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
        >
          <div
            // Same bg as the page so the grid pattern fades out at the edges
            className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
          />
        </div>

        <div className="relative z-10 mx-auto flex w-full max-w-2xl flex-col items-center text-center">
          {/* Rendered statically: the name is the LCP element and must read immediately. */}
          <h1 className="font-display text-white text-[clamp(2.5rem,1.5rem+2.8vw,4.5rem)] leading-[1.05] tracking-[-0.01em] [text-wrap:balance]">
            ¡Hola, soy Selene Culquicondor!
          </h1>

          <p className="mt-5 text-xl md:text-2xl font-semibold text-purple">
            Desarrolladora Web y Móvil
          </p>

          <FlipWords
            className="mt-2 text-base md:text-lg font-medium text-blue-100"
            words={words}
          />

          <p className="mt-5 max-w-[60ch] text-base md:text-lg leading-relaxed text-white-100 [text-wrap:pretty]">
            {profile.bio}
          </p>

          <MagicButton
            href="/cv-selene-culquicondor.pdf"
            external
            title="Descargar CV"
            ariaLabel="Descargar CV (PDF, se abre en una pestaña nueva)"
            icon={<FaLocationArrow />}
            position="right"
            className="mt-6"
          />
        </div>
      </div>
      <ShuffleGrid />
    </section>
  );
};

const SHUFFLE_INTERVAL_MS = 6000;
// Tiles rendered with high priority: the first row of the deterministic initial order.
const PRIORITY_TILES = 4;

// Returns a new shuffled copy (Fisher-Yates); never mutates the input.
const shuffle = <T,>(items: readonly T[]): T[] => {
  const result = [...items];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
};

const ShuffleGrid = () => {
  const gridRef = useRef<HTMLDivElement>(null);
  // Deterministic initial order so server and client render the same markup.
  const [order, setOrder] = useState<SquareImage[]>(squareData);
  const canAnimate = useAmbientMotion(gridRef);

  useEffect(() => {
    if (!canAnimate) return;
    const id = setInterval(
      () => setOrder((prev) => shuffle(prev)),
      SHUFFLE_INTERVAL_MS
    );
    return () => clearInterval(id);
  }, [canAnimate]);

  return (
    <div
      ref={gridRef}
      className="grid grid-cols-4 grid-rows-3 h-[340px] md:h-[450px] gap-1"
    >
      {order.map((sq) => (
        <motion.div
          key={sq.id}
          layout
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          // The first tile spans two columns so 11 photos fill the 4x3 grid.
          className="relative overflow-hidden first:col-span-2"
        >
          <Image
            src={sq.image}
            alt={sq.alt}
            fill
            // Widest tile: ~2 of 4 columns (half the grid); smaller tiles reuse it.
            sizes="(min-width: 1152px) 280px, (min-width: 1024px) 25vw, 50vw"
            priority={squareData.findIndex((s) => s.id === sq.id) < PRIORITY_TILES}
            className="object-cover"
          />
        </motion.div>
      ))}
    </div>
  );
};

export default Hero;
