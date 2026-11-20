import React from "react";
import { IconSchool } from "@tabler/icons-react";
import { education } from "@/data";

const Education = () => {
  return (
    <div className="py-20 w-full" id="education">
      <h1 className="heading">
        Mi <span className="text-purple">educación</span>
      </h1>

      <div className="w-full mt-12 grid lg:grid-cols-2 grid-cols-1 gap-10">
        {education.map((item) => (
          <article
            key={item.id}
            className="rounded-3xl border border-slate-800 bg-gradient-to-r from-[#04071D] to-[#0C0E23] text-white"
          >
            <div className="flex lg:flex-row flex-col lg:items-center p-3 py-6 md:p-5 lg:p-10 gap-2">
              <IconSchool
                aria-hidden="true"
                className="lg:w-32 md:w-20 w-16 h-auto shrink-0 text-purple"
                stroke={1.25}
              />
              <div className="lg:ms-5">
                <h1 className="text-start text-xl md:text-2xl font-bold">
                  {item.degree}
                </h1>
                <p className="text-start text-white-100 mt-1 font-semibold">
                  {item.institution}
                </p>
                <p className="text-start text-white-100 mt-1 font-semibold">
                  {item.periodo}
                </p>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Education;
