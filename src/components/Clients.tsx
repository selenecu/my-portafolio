"use client";
import Image from "next/image";
import React from "react";
import { testimonials } from "@/data"; 
import { FaLocationArrow } from "react-icons/fa6";
import MagicButton from "./ui/MagicButton";

const Projects = () => {
  return (
    <section className="py-20" id="projects">
      <h1 className="heading relative">
        Proyectos
        <span className="text-purple"> recientes</span>
      </h1>

      <p className="text-center text-gray-400 max-w-2xl mx-auto mt-4">
        La mayoría de mis proyectos desarrollados en empresas son privados, 
        pero aquí muestro algunos proyectos personales creados en mi tiempo libre 
        para reforzar conocimientos y explorar nuevas tecnologías.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 mt-10 px-6">
        {testimonials.map((item, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-r from-[#04071D] to-[#0C0E23] border border-slate-800 rounded-2xl shadow-lg p-6 flex flex-col justify-between"
          >
            <div>
              <Image
                src={item.img}
                alt={item.name}
                width={400}
                height={300}
                className="rounded-lg mb-4 object-cover w-full h-48"
              />
              <h2 className="text-xl font-bold text-white mb-1">{item.name}</h2>
              {item.title && (
                <p className="text-sm text-gray-400 mb-2">{item.title}</p>
              )}
              <p className="text-sm text-gray-300">{item.quote}</p>
            </div>

            <div className="mt-4 flex justify-center">
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <MagicButton
                  title="Ver proyecto"
                  icon={<FaLocationArrow />}
                  position="left"
                />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
