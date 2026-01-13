import { link } from "fs";

  export const gridItems = [
    {
      id: 1,
      title: "I prioritize client collaboration, fostering open communication ",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/b1.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with time zone communications",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/grid.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently building a JS Animation library",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
  export const projects = [
    {
      id: 1,
      title: "3D Solar System Planets to Explore",
      des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
      img: "/p1.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
      link: "https://github.com/adrianhajdin?tab=repositories",
    },
    {
      id: 2,
      title: "Yoom - Video Conferencing App",
      des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
      img: "/p2.svg",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
      link: "https://github.com/adrianhajdin/zoom-clone",
    },
    {
      id: 3,
      title: "AI Image SaaS - Canva Application",
      des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
      img: "/p3.svg",
      iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
      link: "https://github.com/adrianhajdin/ai_saas_app",
    },
    {
      id: 4,
      title: "Animated Apple Iphone 3D Website",
      des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
      img: "/p4.svg",
      iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
      link: "https://github.com/adrianhajdin/iphone",
    },
  ];
  
  export const testimonials = [
    {
  quote:
    "Aplicación web que integra una API externa para obtener información de identidad a partir del número de documento. Desarrollé validaciones, manejo de errores y una interfaz responsiva para una mejor experiencia de usuario.",
  name: "Consulta de Datos",
  title: "Proyecto Web",
  img: "/consulta.png",
  link: "https://vite-pi-five-38.vercel.app",
},
{
  quote:
    "Aplicación web desarrollada con React y TailwindCSS, que consume la API pública de Pokémon para mostrar información dinámica de personajes. Implementé búsqueda, paginación y visualización detallada de cada Pokémon.",
  name: "Pokédex",
  title: "Proyecto Web",
  img: "/pokedex.png",
  link: "https://pokedex-react-iota-six.vercel.app",
},

    // {
    //   quote:
    //     "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    //   name: "Michael Johnson",
    //   title: "Director of AlphaStream Technologies",
    //   img: "/t3.svg",
    //   link: "https://github.com/adrianhajdin/iphone",
    // },
    // {
    //   quote:
    //     "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    //   name: "Michael Johnson",
    //   title: "Director of AlphaStream Technologies",
    //   img: "/t4.svg",
    //   link: "https://github.com/adrianhajdin/iphone",
    // },
    // {
    //   quote:
    //     "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    //   name: "Michael Johnson",
    //   title: "Director of AlphaStream Technologies",
    //   img: "/t5.svg",
    //   link: "https://github.com/adrianhajdin/iphone",
    // },
  ];
  
  export const companies = [
    {
      id: 1,
      name: "cloudinary",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "appwrite",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
  ];
  //  export const initialItems = ["HTML", "CSS", "SQL", "Python", "JavaScript", "GraphQL"];
   export const frameWork = ["Next.js", "Quasar", "Vue.js", "React.js"];
  export const workExperience = [
    {
      id: 1,
      title: "Desarrolladora de Software",
      desc: "Formamos un equipo que se dedica a automatizar procesos, lo que nos permite reducir gastos y tiempo a través del desarrollo de software, además de ofrecer soporte en este ámbito.",
      company:"TGI INGENIERIA I.E.R.L",
      ruc: "20530214762",
      link: "https://tgiperu.com/",
      periodo: "Diciembre 2023 - Actualidad",
      className: "md:col-span-2",
      thumbnail: "/exp3.svg",
    },
    {
      id: 2,
      title: "Practicante de Desarrollo web",
      desc: "Participé en el desarrollo de plataformas basada en Vue.js, mejorando la interactividad.",
      company:"TGI INGENIERIA I.E.R.L",
      link: "https://tgiperu.com/",
      periodo: "Agosto 2023 - Noviembre 2023",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    }, 
    {
      id: 3,
      title: "Desarrollo de paginas Web",
      desc: "Responsable de la creacion de una pagina web a base de wordpress.",
      company:"SISCOMPAUD E.I.R.L",
      ruc: "20530142834",
      periodo: "Marzo 2023 - Junio 2023",
      className: "md:col-span-2", 
      thumbnail: "/exp2.svg",
    },
    {
      id: 4,
      title: "Practicante de Desarrollo web",
      desc: "Proporcioné soporte y desarrollo de paginas web creadas en wordpress.",
      company:"GRUPO MNG S.A.C",
      ruc: "20601564182",
      link: "https://grupomng.com/",
      periodo: "Noviembre 2022 - Marzo 2023",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      link: "https://github.com/selenecu",
    },
    // {
    //   id: 2,
    //   img: "/twit.svg",
    // },
    {
      id: 3,
      img: "/link.svg",
      link: "https://www.linkedin.com/in/selene-culquicondor-007206210/",
    },
    
    {
      id: 5,
      img: "/insta.svg",
      link: "https://www.instagram.com/selene_27cu?igsh=ejNqaHZ0eTR0c2Jp",
    },
    {
      id: 6,
      img: "/wha.svg",
      link: "https://wa.link/cnuylq",
    }
  ];
 export const words = [
  "Frontend-Developer",
  "Software-Developer",
  "UI/UX",
  "Responsive-Design",
  "Web-Accessibility"
];

export const lenguajes = [
  {
    id: 1,
    name: "React",
    designation: "Construyo interfaces modernas",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    id: 2,
    name: "Vue Js",
    designation: "Frontend dinámico y escalable",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg",
  },
  {
    id: 3,
    name: "TypeScript",
    designation: "Código tipado y mantenible",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  {
    id: 4,
    name: "Nuxt",
    designation: "Aplicaciones rápidas y SEO friendly",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nuxt/nuxt-original.svg",
  },
  {
    id: 5,
    name: "WordPress",
    designation: "Sitios web personalizados",
    src: "/wordpress.png",
  },
  {
    id: 6,
    name: "GraphQL",
    designation: "Consultas de datos eficientes",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg",
  },
  {
    id: 7,
    name: "Laravel",
    designation: "Backend robusto y escalable",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg",
  },
  {
    id: 8,
    name: "PHP",
    designation: "Desarrollo web backend",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg",
  },
  {
    id: 9,
    name: "Python",
    designation: "Automatización y análisis de datos",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  },
  {
    id: 10,
    name: "PostgreSQL",
    designation: "Gestión de bases de datos",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  },
  {
    id: 11,
    name: "Next Js",
    designation: "Fullstack con React y SSR",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  },
  {
    id: 12,
    name: "Tailwind CSS",
    designation: "Diseño moderno y responsivo",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    id: 13,
    name: "JavaScript",
    designation: "Lenguaje de programación versátil",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    id: 14,
    name: "Git",
    designation: "Control de versiones",
    src: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  }
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