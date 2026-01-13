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
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Consulta de Datos",
      title: "Director of AlphaStream Technologies",
      img:  "/consulta.png",
      link: "https://vite-pi-five-38.vercel.app",
    },
    {
      quote:
        "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
      name: "Pokedex",
      title: "Director of AlphaStream Technologies",
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
      desc: "Formamé parte de un equipo que se dedica a automatizar procesos, lo que nos permite reducir gastos y tiempo a través del desarrollo de software, además de ofrecer soporte en este ámbito",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    }, 
    {
      id: 2,
      title: "Practicante de Desarrollo web",
      desc: "Responsable de diseñar, desarrollar y evaluar paginas Web basadas en Wordpress.",
      className: "md:col-span-2", 
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Practicante de Desarrollo web",
      desc: "Proporcioné soporte y apoyo en la creación de paginas web creadas en wordpress. Ademas de dar matenmiento y actualización de paginas web.",
      className: "md:col-span-2",
      thumbnail: "/exp3.svg",
    }
    // {
    //   id: 4,
    //   title: "Lead Frontend Developer",
    //   desc: "Developed and maintained user-facing features using modern frontend technologies.",
    //   className: "md:col-span-2",
    //   thumbnail: "/exp4.svg",
    // },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: "/git.svg",
      link: "https://github.com/selenecu",
    },
    {
      id: 2,
      img: "/twit.svg",
    },
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
   "Frontend - Developer", "cute", "beautiful", "modern"
  ];
  export const initialItems = [
    {
      id: 1,
      name: "React",
      designation: "1 mes de experiencia",
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
    
  ];
  export const g = [
   
    {
      id: 6,
      name: "GraphQL",
      designation: "The Explorer",
      image:
      "/graphQL.png",
    },
   
  ];
  
  export const ph = [
    {
      id: 8,
      name: "PHP",
      designation: "The Explorer",
      image:
      "/PHP.png",
    },
 
  ];
  
  export const l = [
    {
      id: 7,
      name: "Laravel",
      designation: "The Explorer",
      image:
      "/laravel.png",
    },
  ];
  
  export const py = [
    {
      id: 9,
      name: "Python",
      designation: "The Explorer",
      image:
      "/python.png",
    },
   
  ];
  export const po = [
    {
      id: 10,
      name: "PostgreSQL",
      designation: "The Explorer",
      image:
      "/postgressql.png",
    },
  ];
  export const ne = [
    {
      id: 11,
      name: "Next Js",
      designation: "The Explorer",
      image:
      "/next.png",
    },
  ];

  export const squareData = [
    {
      id: 1,
      src: "/s1.jpeg"
    },
    {
      id: 2,
      src: "/s2.jpeg"
    },
    {
      id: 3,
      src: "/s3.jpeg"
    },
    {
      id: 4,
      src: "/s4.jpeg"
    },
    {
      id: 5,
      src: "/s5.jpeg",
    },
    {
      id: 6,
      src: "/s6.jpeg",
    },
    {
      id: 7,
      src: "/s7.jpeg",
    },
    {
      id: 8,
      src: "/s8.jpeg",
    },
    {
      id: 9,
      src: "/s9.jpeg",
    },
    {
      id: 10,
      src: "/s10.jpeg",
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1507034589631-9433cc6bc453?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=684&q=80",
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1533107862482-0e6974b06ec4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=882&q=80",
    },
    {
      id: 13,
      src: "https://images.unsplash.com/photo-1560089000-7433a4ebbd64?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      id: 14,
      src: "https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80",
    },
    {
      id: 15,
      src: "https://images.unsplash.com/photo-1606244864456-8bee63fce472?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=681&q=80",
    },
    {
      id: 16,
      src: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1820&q=80",
    },
  ];