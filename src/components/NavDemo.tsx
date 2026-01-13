"use client";
import React from "react";
import  {FloatingNav}  from "@/components/ui/FlatingNav";
import { IconAddressBook, IconBarbellFilled, IconBook, IconBriefcase, IconHome, IconMessage, IconUser } from "@tabler/icons-react";
export function FloatingNavDemo() {
  const navItems = [
    {
      name: "Inicio",
      link: "#about",
      icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Experiencia",
      link: "#testimonials",
      icon: <IconBriefcase className="h-4 w-4 text-neutral-500 dark:text-white" />,
    },
    {
      name: "Conocimientos",
      link: "#skills",
      icon: (
        <IconBarbellFilled className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Proyectos",
      link: "#projects",
      icon: (
        <IconBook className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
    {
      name: "Contacto",
      link: "#contact",
      icon: (
        <IconAddressBook className="h-4 w-4 text-neutral-500 dark:text-white" />
      ),
    },
  ];
  return (
    <div className="relative w-full ">
      <FloatingNav navItems={navItems} />
    </div>
  );
}

