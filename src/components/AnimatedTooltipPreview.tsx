import React, { useEffect } from "react";
import { AnimatedTooltip } from "./ui/AnimatedTooltip";
 import { lenguajes } from "@/data";

const AnimatedTooltipPreview = () => {
  return (
 <div
  className="flex relative flex-col items-center justify-center py-20 w-full"
  id="skills"
>
  <h1 className="heading pb-9">
    Mis <span className="text-purple">conocimientos</span>
  </h1>

  {/* Texto de presentación de habilidades */}
  <p className="text-center text-gray-300 max-w-2xl pb-10">
    Soy <span className="text-purple font-semibold">desarrolladora Frontend</span> con 
    sólidos conocimientos en tecnologías modernas y experiencia en creación de interfaces 
    dinámicas y responsivas. También poseo fundamentos en <span className="text-purple font-semibold">Backend</span>, 
    lo que me permite comprender el desarrollo de aplicaciones de manera integral.  
    Me destaco por mi <span className="text-purple font-semibold">aprendizaje constante </span> 
    y el reforzamiento continuo de lenguajes y herramientas para ofrecer siempre las mejores soluciones.
  </p>

  {/* Logos de lenguajes */}
  <div className="columns-3 md:columns-4 items-center justify-center w-72 md:w-96">
    {lenguajes.map((item) => (
      <div
        key={item.id}
        className="flex items-center p-2 justify-center"
      >
        <AnimatedTooltip items={[item]} />
      </div>
    ))}
  </div>
</div>

  );
};

export default AnimatedTooltipPreview