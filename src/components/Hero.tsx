import { FaLocationArrow } from "react-icons/fa6";
import { useEffect, useRef, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import MagicButton from "./ui/MagicButton";
import { Spotlight } from "./ui/Spotlight";
import { TextGenerateEffect } from "../components/ui/TextGenerateEffect";
import { words } from "@/data";
import { FlipWords } from "../components/ui/flip-words";
import { squareData } from "@/data"

const Hero = () => {
  return (
    <section className="w-full px-8 py-12 grid grid-cols-1 md:grid-cols-2 items-center md:gap-10 gap-4 max-w-6xl mx-auto">
    <div className="pb-20 pt-36 relative" id="about">
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
          // chnage the bg to bg-black-100, so it matches the bg color and will blend in
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div>

      <div className="flex justify-center relative my-20 z-10">
        <div className="max-w-[49vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center">

          <TextGenerateEffect
            words="¡Hola, soy Selene Culquicondor!"
            className="text-center text-[50px] md:text-9xl lg:text-10xl pb-5"
          />

          <FlipWords 
          className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-80"
          words = {words}/>

          <div className="flex justify-center w-80">
          </div>

          <p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl">
          Resido en el Perú y soy una desarrolladora front-end apasionada por crear aplicaciones web accesibles que les encanten a los usuarios.
          </p>
          <a 
          target="_blank"
          rel="noreferrer"
          href="./CVSELENE.pdf">
            <MagicButton
              title="Visualizar CV"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
        </div>
      </div>
    </div>
    <ShuffleGrid />
    </section>
  );
};
const shuffle = (array: (number | string)[]): (number | string)[] => {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }
  return array;
};
const generateSquares = () => {
  return shuffle(squareData.map(sq => sq.src)).map((src) => (
    <motion.div
      key={src}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

const ShuffleGrid = () => {
  const timeoutRef = useRef<null | NodeJS.Timeout>(null);
  const [squares, setSquares] = useState(generateSquares());

  const shuffleSquares: () => void = useCallback(() => {
    setSquares(generateSquares());
    timeoutRef.current = setTimeout(shuffleSquares, 3000);
  }, [setSquares, timeoutRef]);

  useEffect(() => {
    shuffleSquares();

    return () => {
      if (timeoutRef.current !== null) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [shuffleSquares]);

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-[450px] gap-1">
      {squares.map((sq) => sq)}
    </div>
  );
};

export default Hero;