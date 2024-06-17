'use client';
import { cn } from "@/utils/cn";
import { BackgroundGradientAnimation } from "../ui/GrandientBg";
import { GlobeDemo } from "./GridGlobe";
import Lottie from "react-lottie";
import { useState } from "react";
import animationData  from "@/data/confetti.json";
import MagicButton from "./MagicButton";
import { IoCodeOutline } from "react-icons/io5";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "grid md:auto-rows-[18rem] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto ",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  id,
  img,
  imgClassName,
  titleClassName,
  spareImg,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  id?: number;
  img?: string;
  imgClassName?: string;
  titleClassName?: string;
  spareImg?: string;
}) => {
  const leftLists =["ReactJs", "Express","Typescript"]
  const rightLists =["NodeJs", "GraphQL", "NextJs", "TailwindCSS", "VueJs" ]
  const [copied, setCopied] = useState(false);

  const defaultOptions = {
    loop: copied,
    autoplay: copied,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const handleCopy = () => {
    const text = "hsu@jsmastery.pro";
    navigator.clipboard.writeText(text);
    setCopied(true);
  };
  return (
    <div
      className={cn(
        "row-span-1 relative overflow-hidden rounded-xl group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none p-4 dark:bg-black dark:border-white/[0.2] bg-white border border-transparent justify-between flex flex-col space-y-4",
        className
      )}
      style={{
        backgroundImage: "rgb(2,0,36)",
        backgroundColor:
          "linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(59,59,68,1) 26%, rgba(93,108,111,1) 100%)",
      }}
    >
      <div className={`${id === 6 && 'flex justify-center'} h-full`}>
        <div className="w-full h-full absolute">
          {img && (
            <img
              src={img}
              alt={img}
              className={cn("object-center object-cover", imgClassName)}
            />
          )}
        </div>
        <div
          className={`absolute right-0 -bottom-5 ${
            id === 5 && "w-full opacity-80"
          }`}
        >
          {spareImg && (
            <img
              src={spareImg}
              alt={spareImg}
              className={"object-center object-cover w-full h-full"}
            />
          )}
        </div>
        {id === 6 && (
          <BackgroundGradientAnimation>
            <div className="absolute z-50 flex items-center justify-center text-white font-bold"></div>
          </BackgroundGradientAnimation>
        )}
        <div
          className={cn(
            titleClassName,
            "group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
          )}
        >
          <div className="font-sans font-extralight text-[#c1c2d3] text-sm md:text-xs lg:text-base">{description}</div>
          <div className="font-sans font-bold text-lg lg:text-3xl max-w-96 z-10">
          {title}
        </div>
        </div>
        {id === 2 && <GlobeDemo />}
        {id === 3 && (
          <div className="flex gap-l lg:gap-5 w-fit absolute -rigth-3 lg:-right-2">
          <div className="flex flex-col gap-3 lg:gap-8">
            {leftLists.map((item, i)=>(
              <span key={i}
              className="py-2 lg:py-4 lg:px3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 round-lg text-center bg-[#10132E]">{item}</span>
            ))}
            <span className="py-4 px-3 rounded-lg text-center bg-[#10132e] "></span>
          </div>
          
          <div className="flex flex-col gap-3 lg:gap-8">
            {rightLists.map((item, i)=>(
              <span key={i}
              className="py-2 lg:py-4 lg:px3 px-3 text-xs lg:text-base opacity-50 lg:opacity-100 round-lg text-center bg-[#10132E]">{item}</span>
            ))}
            <span className="py-4 px-3 rounded-lg text-center bg-[#10132e] "></span>
          </div>
          </div>
        )}
        {id === 6 && (
          <div className="mt-5 relative">
              <div className={`absolute -bottom-5 right-0`}>
                <Lottie options={defaultOptions} height={200} width={200}/>
              </div>
          </div>
        )}
      </div>
      <MagicButton 
        title={copied ? "¡Correo copiado!" : "Copiar mi Correo Electronico"}
        icon={<IoCodeOutline/>}
        position="left"
        handleClick={handleCopy}
        otherClasses="!bg-[#161A31]"/>
    </div>
  );
};
