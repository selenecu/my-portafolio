"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  getPublishedCaseStudyForProject,
  testimonials,
  type Project,
} from "@/data";
import { FaLocationArrow } from "react-icons/fa6";
import { IconChevronLeft, IconChevronRight } from "@tabler/icons-react";
import MagicButton from "./ui/MagicButton";

import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useAmbientMotion } from "@/utils/useAmbientMotion";

const AUTOPLAY_DELAY_MS = 3000;
const CAROUSEL_ID = "projects-carousel";

// The Featured Project is pinned above the carousel; the rest rotate inside it.
const featuredProject = testimonials.find((p) => p.featured);
const carouselProjects = testimonials.filter((p) => !p.featured);

// Shown only once a published Case Study exists for this Project.
const CaseStudyLink = ({ projectId }: { projectId: string }) => {
  const caseStudy = getPublishedCaseStudyForProject(projectId);
  if (!caseStudy) return null;
  return (
    <Link
      href={`/proyectos/${caseStudy.slug}`}
      className="text-sm font-semibold text-purple underline-offset-4 hover:underline"
    >
      Ver caso de estudio →
    </Link>
  );
};

const StackList = ({ stack }: { stack: string[] }) => (
  <ul className="flex flex-wrap gap-2" aria-label="Tecnologías">
    {stack.map((tech) => (
      <li
        key={tech}
        className="rounded-full border border-purple/30 bg-purple/10 px-2.5 py-0.5 text-xs text-purple"
      >
        {tech}
      </li>
    ))}
  </ul>
);

const ProjectLink = ({ project }: { project: Project }) =>
  project.link ? (
    <MagicButton
      href={project.link}
      external
      title="Ver proyecto"
      ariaLabel={`Ver proyecto ${project.name} (se abre en una pestaña nueva)`}
      icon={<FaLocationArrow />}
      position="left"
    />
  ) : null;

const FeaturedProjectCard = ({ project }: { project: Project }) => (
  <article
    aria-labelledby="featured-project-title"
    className="rounded-3xl border border-purple/30 bg-gradient-to-br from-[#0C0E23] via-[#04071D] to-[#0C0E23] p-6 text-white md:p-10"
  >
    {project.img && (
      <div className="relative mb-8 aspect-[16/7] w-full overflow-hidden rounded-2xl">
        <Image
          src={project.img}
          alt={`Captura de ${project.name}`}
          fill
          sizes="(min-width: 1280px) 1200px, 100vw"
          className="object-cover"
        />
      </div>
    )}

    <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
      <h3
        id="featured-project-title"
        className="font-display text-[clamp(2rem,1.4rem+2vw,3.25rem)] leading-[1.05] [text-wrap:balance]"
      >
        {project.name}
      </h3>
      <span className="rounded-full bg-purple px-3 py-1 text-xs font-semibold text-black-100">
        Destacado
      </span>
    </div>

    {project.title && (
      <p className="mt-3 text-sm font-medium text-white-100 md:text-base">
        {project.title}
      </p>
    )}

    <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:gap-12">
      <p className="max-w-[65ch] text-base leading-relaxed text-white-100 md:text-lg [text-wrap:pretty]">
        {project.quote}
      </p>

      <div className="flex flex-col gap-6">
        <div>
          <p className="mb-3 text-sm font-semibold text-white">Tecnologías</p>
          <StackList stack={project.stack} />
        </div>
        <div className="flex flex-wrap items-center gap-6">
          <CaseStudyLink projectId={project.id} />
          <ProjectLink project={project} />
        </div>
      </div>
    </div>
  </article>
);

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  // Plugin instance is created once; play/stop is driven by the effect below.
  const autoplay = useRef(
    Autoplay({
      delay: AUTOPLAY_DELAY_MS,
      playOnInit: false,
      stopOnInteraction: true, // Once the user drags or clicks, autoplay stays off
      stopOnMouseEnter: true,
      stopOnFocusIn: true,
    })
  );
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      skipSnaps: false,
      dragFree: true,
    },
    [autoplay.current]
  );
  // Autoplay only while visible, motion is allowed, and the user has not taken control.
  const canAnimate = useAmbientMotion(sectionRef);
  const [userTookControl, setUserTookControl] = useState(false);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    if (!emblaApi) return;
    const onPointerDown = () => setUserTookControl(true);
    const updateControls = () => {
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };
    updateControls();
    emblaApi.on("pointerDown", onPointerDown);
    emblaApi.on("select", updateControls);
    emblaApi.on("reInit", updateControls);
    return () => {
      emblaApi.off("pointerDown", onPointerDown);
      emblaApi.off("select", updateControls);
      emblaApi.off("reInit", updateControls);
    };
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const plugin = autoplay.current;
    if (canAnimate && !userTookControl) plugin.play();
    else plugin.stop();
  }, [emblaApi, canAnimate, userTookControl]);

  // Stepping by hand is taking control: autoplay stays off afterwards.
  const scrollPrev = useCallback(() => {
    setUserTookControl(true);
    emblaApi?.scrollPrev();
  }, [emblaApi]);
  const scrollNext = useCallback(() => {
    setUserTookControl(true);
    emblaApi?.scrollNext();
  }, [emblaApi]);

  const controlClass =
    "inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-700 bg-black-100 text-white transition-colors duration-200 hover:border-purple/60 hover:text-purple disabled:cursor-not-allowed disabled:opacity-40 disabled:hover:border-slate-700 disabled:hover:text-white";

  return (
    <section
      ref={sectionRef}
      className="py-20"
      id="projects"
      aria-labelledby="projects-title"
    >
      <h2 id="projects-title" className="heading relative text-center">
        Proyectos
        <span className="text-purple"> recientes</span>
      </h2>

      <p className="text-center text-gray-400 max-w-2xl mx-auto mt-4 mb-12">
        La mayoría de mis proyectos desarrollados en empresas son privados,
        pero aquí muestro algunos proyectos personales creados en mi tiempo libre.
      </p>

      {featuredProject && <FeaturedProjectCard project={featuredProject} />}

      {carouselProjects.length > 0 && (
        <div className="mt-16">
          <div className="mb-6 flex items-center justify-between gap-4 px-4">
            <p className="text-lg font-semibold text-white">Más proyectos</p>
            <div className="flex gap-3">
              <button
                type="button"
                onClick={scrollPrev}
                disabled={!canScrollPrev}
                aria-controls={CAROUSEL_ID}
                aria-label="Proyecto anterior"
                className={controlClass}
              >
                <IconChevronLeft aria-hidden="true" className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={scrollNext}
                disabled={!canScrollNext}
                aria-controls={CAROUSEL_ID}
                aria-label="Proyecto siguiente"
                className={controlClass}
              >
                <IconChevronRight aria-hidden="true" className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Viewport */}
          <div
            id={CAROUSEL_ID}
            role="region"
            aria-roledescription="carrusel"
            aria-label="Más proyectos"
            className="overflow-hidden cursor-grab active:cursor-grabbing px-4"
            ref={emblaRef}
          >
            {/* Track */}
            <div className="flex gap-8">
              {carouselProjects.map((item, index) => (
                <div
                  key={item.id}
                  role="group"
                  aria-roledescription="diapositiva"
                  aria-label={`${index + 1} de ${carouselProjects.length}`}
                  // Card width per breakpoint
                  className="relative flex-none w-[85vw] md:w-[45vw] lg:w-[30vw] h-auto"
                >
                  <article className="bg-gradient-to-r from-[#04071D] to-[#0C0E23] border border-slate-800 rounded-2xl shadow-lg p-6 flex flex-col justify-between h-full hover:border-purple/50 transition-colors duration-300">
                    <div>
                      <div className="relative w-full h-48 mb-4 overflow-hidden rounded-lg">
                        {item.img ? (
                          <Image
                            src={item.img}
                            alt={`Captura de ${item.name}`}
                            fill
                            // Card width per breakpoint (w-[85vw] md:w-[45vw] lg:w-[30vw])
                            sizes="(min-width: 1024px) 30vw, (min-width: 768px) 45vw, 85vw"
                            className="object-cover transition-transform duration-500 motion-safe:hover:scale-110"
                          />
                        ) : (
                          // Fallback panel for projects without a screenshot
                          <div
                            aria-hidden="true"
                            className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-gradient-to-br from-purple/30 via-[#0C0E23] to-blue-500/20 border border-purple/20 rounded-lg px-6 text-center"
                          >
                            <span className="text-2xl md:text-3xl font-bold text-white">
                              {item.name}
                            </span>
                          </div>
                        )}
                      </div>

                      <h3 className="text-xl font-bold text-white mb-1 line-clamp-1">
                        {item.name}
                      </h3>

                      {item.title && (
                        <p className="text-sm text-gray-400 mb-2 font-medium">
                          {item.title}
                        </p>
                      )}

                      <p className="text-sm text-gray-300 leading-relaxed line-clamp-3">
                        {item.quote}
                      </p>

                      <div className="mt-4">
                        <StackList stack={item.stack} />
                      </div>
                    </div>

                    <div className="mt-6 flex flex-col items-center gap-4">
                      <CaseStudyLink projectId={item.id} />
                      <ProjectLink project={item} />
                    </div>
                  </article>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
