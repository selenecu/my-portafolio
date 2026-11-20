import { profile } from "@/data";

function resolveSiteUrl(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL;
  if (explicit) return explicit.replace(/\/+$/, "");
  const vercel = process.env.VERCEL_PROJECT_PRODUCTION_URL;
  if (vercel) return `https://${vercel}`;
  return "http://localhost:3000";
}

export const SITE_URL = resolveSiteUrl();

export const siteConfig = {
  name: profile.displayName,
  title: `${profile.displayName} | ${profile.jobTitle}`,
  description:
    "Portafolio de Selene Culquicondor, desarrolladora web y móvil desde 2022. Experiencia con TypeScript, React Native, Vue.js, Next.js, WordPress y PostgreSQL.",
  locale: "es_PE",
} as const;
