"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/AnimatedTooltip";
const people = [
  {
    id: 1,
    name: "React",
    designation: "Software Engineer",
    image:
      "/react.png",
  },
  {
    id: 2,
    name: "Vue Js",
    designation: "Product Manager",
    image:
      "/vuejs.png",
  },
  {
    id: 3,
    name: "TypeScript",
    designation: "Data Scientist",
    image:
      "/typescript.png",
  },
  {
    id: 4,
    name: "Nuxt",
    designation: "UX Designer",
    image:
      "/nuxt.png",
  },
  {
    id: 5,
    name: "Worpress",
    designation: "Soap Developer",
    image:
      "/wordpress.png",
  },
  {
    id: 6,
    name: "GraphQL",
    designation: "The Explorer",
    image:
    "/graphQL.png",
  },
  {
    id: 7,
    name: "Laravel",
    designation: "The Explorer",
    image:
    "/laravel.png",
  },
  {
    id: 8,
    name: "PHP",
    designation: "The Explorer",
    image:
    "/PHP.png",
  },
  {
    id: 9,
    name: "Python",
    designation: "The Explorer",
    image:
    "/python.png",
  },
  {
    id: 10,
    name: "PostgreSQL",
    designation: "The Explorer",
    image:
    "/postgressql.png",
  },
  {
    id: 11,
    name: "Next Js",
    designation: "The Explorer",
    image:
    "/next.png",
  },
];

const  AnimatedTooltipPreview= () =>{
  return (
    <div className="flex flex-row items-center justify-center mb-10 w-full">
      <AnimatedTooltip items={people} />
    </div>
  );
}
export default AnimatedTooltipPreview