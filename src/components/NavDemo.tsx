"use client";
import React from "react";
import { FloatingNav, type NavItem } from "@/components/ui/FlatingNav";
import {
  IconAddressBook,
  IconBarbellFilled,
  IconBook,
  IconBriefcase,
  IconHome,
  IconSchool,
} from "@tabler/icons-react";

const ICON_CLASS = "h-5 w-5";

// Module-level so the scrollspy receives a stable list of ids.
const navItems: NavItem[] = [
  { name: "Inicio", id: "about", icon: <IconHome className={ICON_CLASS} /> },
  {
    name: "Experiencia",
    id: "experience",
    icon: <IconBriefcase className={ICON_CLASS} />,
  },
  { name: "Educación", id: "education", icon: <IconSchool className={ICON_CLASS} /> },
  {
    name: "Habilidades",
    id: "skills",
    icon: <IconBarbellFilled className={ICON_CLASS} />,
  },
  { name: "Proyectos", id: "projects", icon: <IconBook className={ICON_CLASS} /> },
  {
    name: "Contacto",
    id: "contact",
    icon: <IconAddressBook className={ICON_CLASS} />,
  },
];

export function FloatingNavDemo() {
  return <FloatingNav navItems={navItems} />;
}
