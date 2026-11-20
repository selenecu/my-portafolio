import React from "react";
import Image from "next/image";
import { workExperience } from "@/data";

const Experience = () => {
  return (
    <div className="py-20 w-full" id="experience">
      <h1 className="heading">
        Mi <span className="text-purple">experiencia laboral</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-2 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <article
            key={card.id}
            className="rounded-3xl border border-slate-800 bg-gradient-to-r from-[#04071D] to-[#0C0E23] text-white"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <Image
                src={card.thumbnail}
                alt={card.thumbnail}
                width={100}
                height={100}
                className="lg:w-32 md:w-20 w-16"
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {card.title}
                </h1>
                <p className="text-start text-white-100 mt-1 font-semibold">
                  {card.company}
                  {card.ruc && (
                    <span className="text-white-100 ms-2">RUC: {card.ruc}</span>
                  )}
                </p>
                <p className="text-start text-white-100 mt-1 font-semibold">
                  {card.periodo}
                </p>
                {card.link && (
                  <p className="text-start text-white-100 mt-1 font-semibold">
                    <a
                      href={card.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple hover:underline"
                    >
                      Visitar sitio web
                    </a>
                  </p>
                )}
                <p className="text-start text-white-100 mt-3 font-semibold">
                  {card.desc}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Experience;
