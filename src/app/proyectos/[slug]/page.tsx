import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { siteConfig } from "@/config/site";
import { caseStudies, getCaseStudy, type CaseStudy } from "@/data";

type Params = { slug: string };

const isProduction = process.env.NODE_ENV === "production";

// Drafts are only reachable outside production.
const isVisible = (c: CaseStudy) => c.published || !isProduction;

export const dynamicParams = false;

export function generateStaticParams(): Params[] {
  return caseStudies.filter(isVisible).map((c) => ({ slug: c.slug }));
}

export function generateMetadata({ params }: { params: Params }): Metadata {
  const caseStudy = getCaseStudy(params.slug);
  if (!caseStudy || !isVisible(caseStudy)) return {};

  const title = `${caseStudy.title} | ${siteConfig.name}`;
  const path = `/proyectos/${caseStudy.slug}`;
  return {
    title,
    description: caseStudy.summary,
    alternates: { canonical: path },
    openGraph: {
      type: "article",
      locale: siteConfig.locale,
      siteName: siteConfig.name,
      title,
      description: caseStudy.summary,
      url: path,
    },
    ...(caseStudy.published ? {} : { robots: { index: false, follow: false } }),
  };
}

export default function CaseStudyPage({ params }: { params: Params }) {
  const caseStudy = getCaseStudy(params.slug);
  if (!caseStudy || !isVisible(caseStudy)) notFound();

  const metrics = caseStudy.metrics ?? [];
  const images = caseStudy.images ?? [];

  return (
    <main className="relative min-h-screen bg-black-100 text-white px-5 sm:px-10 py-16">
      <article className="mx-auto max-w-3xl">
        {!caseStudy.published && (
          <div
            role="status"
            className="mb-10 rounded-xl border border-yellow-400/40 bg-yellow-400/10 px-4 py-3 text-sm font-semibold text-yellow-200"
          >
            Borrador — no publicado. Esta página no es visible en producción.
          </div>
        )}

        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm text-purple hover:underline"
        >
          ← Volver a proyectos
        </Link>

        <header className="mt-8">
          <p className="text-xs uppercase tracking-widest text-blue-100">
            Caso de estudio
          </p>
          <h1 className="mt-3 text-4xl md:text-5xl font-bold leading-tight">
            {caseStudy.title}
          </h1>
          <p className="mt-4 text-base md:text-lg text-purple">
            {caseStudy.subtitle}
          </p>
          <p className="mt-6 text-lg leading-relaxed text-white-100">
            {caseStudy.summary}
          </p>

          <ul className="mt-6 flex flex-wrap gap-2" aria-label="Tecnologías">
            {caseStudy.stack.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-purple/30 bg-purple/10 px-2.5 py-0.5 text-xs text-purple"
              >
                {tech}
              </li>
            ))}
          </ul>
        </header>

        {metrics.length > 0 && (
          <section aria-label="Métricas" className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-3">
            {metrics.map((m) => (
              <div
                key={m.label}
                className="rounded-2xl border border-slate-800 bg-gradient-to-r from-[#04071D] to-[#0C0E23] p-5"
              >
                <p className="text-3xl font-bold text-purple">{m.value}</p>
                <p className="mt-1 text-sm font-semibold text-white">{m.label}</p>
                {m.detail && <p className="mt-1 text-xs text-white-200">{m.detail}</p>}
              </div>
            ))}
          </section>
        )}

        {caseStudy.sections.map((section) => (
          <section key={section.heading} className="mt-12">
            <h2 className="text-2xl md:text-3xl font-bold">
              {section.heading}
            </h2>
            <div className="mt-4 space-y-4 text-base md:text-lg leading-relaxed text-white-100">
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}

        {images.length > 0 && (
          <section aria-label="Galería" className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {images.map((img) => (
              <figure key={img.src} className="overflow-hidden rounded-2xl border border-slate-800">
                <div className="relative aspect-video">
                  <Image src={img.src} alt={img.alt} fill className="object-cover" />
                </div>
                {img.caption && (
                  <figcaption className="px-4 py-3 text-sm text-white-200">
                    {img.caption}
                  </figcaption>
                )}
              </figure>
            ))}
          </section>
        )}

        <footer className="mt-16 border-t border-slate-800 pt-8">
          <Link href="/#projects" className="text-sm text-purple hover:underline">
            ← Volver a proyectos
          </Link>
        </footer>
      </article>
    </main>
  );
}
