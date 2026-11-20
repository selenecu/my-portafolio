import type { IconType } from "react-icons";
import {
  SiBun,
  SiDotnet,
  SiDrizzle,
  SiExpo,
  SiJavascript,
  SiNextdotjs,
  SiNuxtdotjs,
  SiPostgresql,
  SiPowerbi,
  SiQuasar,
  SiReact,
  SiTailwindcss,
  SiTypescript,
  SiVuedotjs,
  SiWordpress,
} from "react-icons/si";
import { TbSql } from "react-icons/tb";

export type Project = {
  // Stable identifier used to link a Case Study to this Project.
  id: string;
  quote: string;
  name: string;
  title?: string;
  img?: string;
  link?: string;
  stack: string[];
  featured?: boolean;
};

// Rendered as the "Proyectos" carousel (src/components/Clients.tsx).
export const testimonials: Project[] = [
  {
    id: "piura-innova-2026",
    quote:
      "Solución digital de inventarios forestales para el bosque seco, desarrollada en 2 días. Implementé identificadores, captura de coordenadas, validación de variables y exportación de datos, y comparé errores y tiempos de procesamiento del inventario. Organizado por la Cámara de Comercio y Producción de Piura y Google Developer Group Piura.",
    name: "Piura Innova 2026",
    title: "Hackathon Regional de Innovación · Oct 2026 · Equipo TGI Ingeniería",
    stack: [
      "TypeScript",
      "React Native (Expo)",
      "TanStack Router",
      "TailwindCSS",
      "Hono",
      "tRPC",
      "Drizzle ORM",
      "PostgreSQL",
      "Better-Auth",
      "Bun",
    ],
    featured: true,
  },
  {
    id: "consulta-de-datos",
    quote:
      "Aplicación web que integra una API externa para obtener información de identidad a partir del número de documento. Desarrollé validaciones, manejo de errores y una interfaz responsiva para una mejor experiencia de usuario.",
    name: "Consulta de Datos",
    title: "Proyecto Web",
    img: "/consulta.png",
    link: "https://vite-pi-five-38.vercel.app",
    stack: ["React", "TypeScript", "Vite"],
  },
  {
    id: "pokedex",
    quote:
      "Aplicación web desarrollada con React y TailwindCSS, que consume la API pública de Pokémon para mostrar información dinámica de personajes. Implementé búsqueda, paginación y visualización detallada de cada Pokémon.",
    name: "Pokédex",
    title: "Proyecto Web",
    img: "/pokedex.png",
    link: "https://pokedex-react-iota-six.vercel.app",
    stack: ["React", "TailwindCSS"],
  },
  {
    id: "ruleta-amigo-secreto",
    quote:
      "Aplicación web para realizar sorteos de Amigo Secreto de manera rápida, segura y divertida. El organizador ingresa a los participantes, ejecuta la ruleta y se genera un link único con los resultados encriptados en la URL. Cada participante solo puede ver su propio resultado, garantizando privacidad total.",
    name: "Ruleta Aleatoria — Amigo Secreto",
    title: "Proyecto Web",
    img: "/ruleta.png",
    link: "https://ruleta-aleatoria-nine.vercel.app",
    stack: ["JavaScript", "HTML", "TailwindCSS"],
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Desarrolladora de Software",
    desc: "Integro un equipo dedicado a automatizar procesos para reducir costos y tiempos mediante el desarrollo de software. Diseño aplicaciones web, desarrollé un sitio web y otras páginas en WordPress, desarrollo software para automatizar procesos, brindo soporte técnico y asesoría en el uso de aplicaciones, y participo en la evaluación de productos.",
    company: "TGI INGENIERIA I.E.R.L",
    ruc: "20530214762",
    link: "https://tgiperu.com/",
    periodo: "Diciembre 2023 - Actualidad",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
  },
  {
    id: 2,
    title: "Practicante de Desarrollo Web",
    desc: "Participé en el desarrollo de plataformas basadas en Vue.js, mejorando la interactividad.",
    company: "TGI INGENIERIA I.E.R.L",
    link: "https://tgiperu.com/",
    periodo: "Agosto 2023 - Noviembre 2023",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
  },
  {
    id: 3,
    title: "Practicante de Desarrollo Web",
    desc: "Soporte y desarrollo de páginas web en WordPress; apoyo en su creación, mantenimiento y actualización, y registro y análisis de la visualización de las páginas.",
    company: "SISCOMPAUD E.I.R.L",
    ruc: "20530142834",
    periodo: "Marzo 2023 - Junio 2023",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
  },
  {
    id: 4,
    title: "Practicante de Desarrollo Web",
    desc: "Soporte y desarrollo de páginas web creadas en WordPress.",
    company: "GRUPO MNG S.A.C",
    ruc: "20601564182",
    link: "https://grupomng.com/",
    periodo: "Noviembre 2022 - Marzo 2023",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
  },
];

export const education = [
  {
    id: 1,
    degree: "Licenciatura en Ingeniería de Software",
    institution: "Universidad Tecnológica del Perú",
    periodo: "2025 - Actualidad",
  },
  {
    id: 2,
    degree: "Técnico en Ingeniería de Software",
    institution: "SENATI",
    periodo: "2021 - 2023",
  },
];

export const socialMedia = [
  {
    id: 1,
    name: "GitHub",
    img: "/git.svg",
    link: "https://github.com/selenecu",
  },
  {
    id: 3,
    name: "LinkedIn",
    img: "/link.svg",
    link: "https://www.linkedin.com/in/selene-culquicondor-007206210/",
  },
  {
    id: 5,
    name: "Instagram",
    img: "/insta.svg",
    link: "https://www.instagram.com/selene_27cu?igsh=ejNqaHZ0eTR0c2Jp",
  },
  {
    id: 6,
    name: "WhatsApp",
    img: "/wha.svg",
    link: "https://wa.link/cnuylq",
  },
];

export const contactEmail = "seleneculquicondor@gmail.com";

// Personal profile, reused by the Hero, JSON-LD and llms.txt.
export const profile = {
  fullName: "Selene Culquicondor Ushiñahua",
  displayName: "Selene Culquicondor",
  jobTitle: "Desarrolladora Web y Móvil",
  location: { locality: "Piura", country: "PE", label: "Piura - Perú" },
  currentEmployer: { name: "TGI Ingeniería", url: "https://tgiperu.com/" },
  bio: "Desarrolladora de software desde 2022, de Piura - Perú. Técnica en Ingeniería de Software (SENATI) y estudiante de la Licenciatura en Ingeniería de Software en la UTP. Diseño y desarrollo aplicaciones y sitios web con TypeScript, React Native, Vue.js, Next.js y WordPress.",
};

// Public professional profiles (excludes messaging channels such as WhatsApp).
export const professionalProfiles = socialMedia.filter((s) =>
  ["GitHub", "LinkedIn"].includes(s.name)
);

export const words = ["TypeScript", "React-Native", "Vue/Next.js", "WordPress"];

export type Skill = {
  id: number;
  name: string;
  designation: string;
  // Brand icon from react-icons; when absent, a text badge is rendered instead.
  icon?: IconType;
  color?: string;
  // Short label for the text fallback badge.
  abbr?: string;
};

export type SkillGroup = {
  title: string;
  items: Skill[];
};

export const skills: SkillGroup[] = [
  {
    title: "Desarrollo web y móvil",
    items: [
      { id: 1, name: "JavaScript", designation: "Lenguaje base de la web", icon: SiJavascript, color: "#F7DF1E" },
      { id: 2, name: "TypeScript", designation: "Código tipado y mantenible", icon: SiTypescript, color: "#3178C6" },
      { id: 3, name: "React", designation: "Interfaces modernas basadas en componentes", icon: SiReact, color: "#61DAFB" },
      { id: 4, name: "React Native (Expo)", designation: "Aplicaciones móviles multiplataforma", icon: SiExpo, color: "#FFFFFF" },
      { id: 5, name: "TanStack Router", designation: "Enrutamiento tipado", abbr: "TSR" },
      { id: 6, name: "Vue.js", designation: "Frontend dinámico y escalable", icon: SiVuedotjs, color: "#4FC08D" },
      { id: 7, name: "Next.js", designation: "Aplicaciones React con SSR", icon: SiNextdotjs, color: "#FFFFFF" },
      { id: 8, name: "Nuxt.js", designation: "Aplicaciones Vue con SSR", icon: SiNuxtdotjs, color: "#00DC82" },
      { id: 9, name: "Quasar", designation: "Aplicaciones Vue multiplataforma", icon: SiQuasar, color: "#1976D2" },
      { id: 10, name: ".NET", designation: "Desarrollo de aplicaciones", icon: SiDotnet, color: "#8A6EF5" },
      { id: 11, name: "WordPress", designation: "Sitios web personalizados", icon: SiWordpress, color: "#3D9FD6" },
      { id: 12, name: "TailwindCSS", designation: "Diseño moderno y responsivo", icon: SiTailwindcss, color: "#06B6D4" },
    ],
  },
  {
    title: "Backend y datos",
    items: [
      { id: 13, name: "Bun", designation: "Runtime de JavaScript", icon: SiBun, color: "#FBF0DF" },
      { id: 14, name: "Better-Auth", designation: "Autenticación", abbr: "BA" },
      { id: 15, name: "PostgreSQL", designation: "Bases de datos relacionales", icon: SiPostgresql, color: "#4F8EDC" },
      { id: 16, name: "SQL", designation: "Consultas y modelado de datos", icon: TbSql, color: "#CBACF9" },
      { id: 17, name: "Drizzle ORM", designation: "ORM tipado para TypeScript", icon: SiDrizzle, color: "#C5F74F" },
      { id: 18, name: "Power BI", designation: "Análisis y visualización de datos", icon: SiPowerbi, color: "#F2C811" },
    ],
  },
];

export const squareData = [
  {
    id: 1,
    image: "/utp.jpg",
  },
  {
    id: 2,
    image: "/arbol.jpg",
  },
  {
    id: 3,
    image: "/cita.jpg",
  },
  {
    id: 4,
    image: "/laboratorio.jpg",
  },
  {
    id: 5,
    image: "/1.jpg",
  },
  {
    id: 6,
    image: "/2.jpg",
  },
  {
    id: 7,
    image: "/3.jpg",
  },
  {
    id: 8,
    image: "/4.jpg",
  },
  {
    id: 9,
    image: "/5.jpg",
  },
  {
    id: 10,
    image: "/6.jpg",
  },
  {
    id: 11,
    image: "/7.jpg",
  },
  {
    id: 12,
    image: "https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=882&q=80",
  },
  {
    id: 13,
    image: "https://images.unsplash.com/photo-1560089000-7433a4ebbd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
  },
  {
    id: 14,
    image: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
  },
  {
    id: 15,
    image: "https://images.unsplash.com/photo-1606244864456-8bee63fce472?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=681&q=80",
  },
  {
    id: 16,
    image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1820&q=80",
  },
];

export type CaseStudySection = {
  heading: string;
  body: string[];
};

export type CaseStudyMetric = {
  label: string;
  value: string;
  detail?: string;
};

export type CaseStudyImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type CaseStudy = {
  slug: string;
  // Id of the Project this Case Study expands on.
  projectId: Project["id"];
  // Unpublished Case Studies are hidden in production and excluded from the sitemap.
  published: boolean;
  title: string;
  subtitle: string;
  summary: string;
  // Order: Problema, Mi rol, Decisiones técnicas, Resultado, Aprendizajes.
  sections: CaseStudySection[];
  // Reused from the linked Project so both stay in sync.
  stack: string[];
  images?: CaseStudyImage[];
  metrics?: CaseStudyMetric[];
};

function projectStack(projectId: string): string[] {
  const project = testimonials.find((p) => p.id === projectId);
  if (!project) throw new Error(`Unknown project id: ${projectId}`);
  return project.stack;
}

export const caseStudies: CaseStudy[] = [
  {
    slug: "piura-innova-2026",
    projectId: "piura-innova-2026",
    published: false,
    title: "Inventario forestal digital para el bosque seco",
    subtitle:
      "Piura Innova 2026 · Hackathon Regional de Innovación · Octubre 2026 · Equipo TGI Ingeniería",
    summary:
      "Solución digital de inventarios forestales para el bosque seco, desarrollada en 2 días durante la hackathon organizada por la Cámara de Comercio y Producción de Piura y Google Developer Group Piura.",
    sections: [
      {
        heading: "Problema",
        body: [
          "El inventario forestal del bosque seco requiere registrar cada individuo con su identificador, su ubicación y sus variables de medición.",
          "[PENDIENTE: describir cómo se realizaba el inventario antes de la solución (papel, hojas de cálculo, GPS separado), cuánto tiempo tomaba y qué errores eran frecuentes.]",
        ],
      },
      {
        heading: "Mi rol",
        body: [
          "Implementé los identificadores, la captura de coordenadas, la validación de variables y la exportación de datos, y comparé los errores y tiempos de procesamiento del inventario.",
          "[PENDIENTE: indicar el tamaño del equipo y la parte concreta que me tocó frente a la del resto del equipo.]",
        ],
      },
      {
        heading: "Decisiones técnicas",
        body: [
          "La solución se construyó con TypeScript de extremo a extremo: React Native (Expo) en el cliente móvil, Hono y tRPC en el servidor, Drizzle ORM sobre PostgreSQL y Better-Auth para la autenticación, ejecutado con Bun.",
          "[PENDIENTE: explicar una decisión técnica concreta (por ejemplo, por qué tRPC o cómo se validan las variables en el dispositivo) y por qué se tomó frente a la alternativa.]",
        ],
      },
      {
        heading: "Resultado",
        body: [
          "[PENDIENTE: comparación medida de errores y tiempos de procesamiento entre el método anterior y la solución, y el resultado obtenido en la hackathon (puesto o reconocimiento).]",
        ],
      },
      {
        heading: "Aprendizajes",
        body: [
          "[PENDIENTE: dos o tres aprendizajes concretos (técnicos o de trabajo en equipo bajo presión de tiempo).]",
        ],
      },
    ],
    stack: projectStack("piura-innova-2026"),
    images: [],
    metrics: [],
  },
];

export const getCaseStudy = (slug: string) =>
  caseStudies.find((c) => c.slug === slug);

export const getProject = (id: string) =>
  testimonials.find((p) => p.id === id);

export const publishedCaseStudies = () =>
  caseStudies.filter((c) => c.published);

export const getPublishedCaseStudyForProject = (projectId: string) =>
  caseStudies.find((c) => c.published && c.projectId === projectId);
