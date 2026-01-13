"use client";
import React from "react";
import Image from "next/image";
import { testimonials } from "@/data";
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";

// Importaciones de Embla Carousel
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";

const Projects = () => {
  // Configuración del carrusel
  const [emblaRef] = useEmblaCarousel(
    { 
      loop: true, // Carrusel infinito
      align: "start", // Alineación de las tarjetas
      skipSnaps: false,
      dragFree: true, // Sensación de arrastre libre
    }, 
    [
      Autoplay({ 
        delay: 3000, // Velocidad (3 segundos)
        stopOnInteraction: false, // Sigue rodando después de tocarlo
        stopOnMouseEnter: true,   // SE PARA AL PASAR EL MOUSE (Requisito clave)
      })
    ]
  );

  return (
    <section className="py-20" id="projects">
      <h1 className="heading relative text-center mb-10">
        Proyectos
        <span className="text-purple"> recientes</span>
      </h1>

      <p className="text-center text-gray-400 max-w-2xl mx-auto mt-4 mb-12">
        La mayoría de mis proyectos desarrollados en empresas son privados,
        pero aquí muestro algunos proyectos personales creados en mi tiempo libre.
      </p>

      {/* --- Contenedor Principal del Carrusel (Viewport) --- */}
      <div className="overflow-hidden cursor-grab active:cursor-grabbing px-4" ref={emblaRef}>
        
        {/* --- Contenedor Flexible (Track) --- */}
        <div className="flex gap-8"> {/* Gap entre tarjetas */}
          
          {testimonials.map((item, idx) => (
            // --- Slide Individual ---
            <div
              key={idx}
              // min-w define el ancho de la tarjeta en diferentes pantallas
              className="relative flex-none w-[85vw] md:w-[45vw] lg:w-[30vw] h-auto"
            >
              <div className="bg-gradient-to-r from-[#04071D] to-[#0C0E23] border border-slate-800 rounded-2xl shadow-lg p-6 flex flex-col justify-between h-full hover:border-purple/50 transition-colors duration-300">
                
                <div>
                  <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
                     <Image
                      src={item.img}
                      alt={item.name}
                      fill // Usamos fill para que se adapte al contenedor
                      className="object-cover transition-transform duration-500 hover:scale-110"
                    />
                  </div>
                  
                  <h2 className="text-xl font-bold text-white mb-1 line-clamp-1">
                    {item.name}
                  </h2>
                  
                  {item.title && (
                    <p className="text-sm text-gray-400 mb-2 font-medium">
                      {item.title}
                    </p>
                  )}
                  
                  <p className="text-sm text-gray-300 line-clamp-3 leading-relaxed">
                    {item.quote}
                  </p>
                </div>

                <div className="mt-6 flex justify-center">
                  <a href={item.link} target="_blank" rel="noopener noreferrer">
                    <MagicButton
                      title="Ver proyecto"
                      icon={<FaLocationArrow />}
                      position="left"
                    />
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;