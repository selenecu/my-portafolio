import { SITE_URL } from "@/config/site";
import {
  contactEmail,
  education,
  getPublishedCaseStudyForProject,
  professionalProfiles,
  profile,
  skills,
  testimonials,
  workExperience,
} from "@/data";

export const dynamic = "force-static";

function buildLlmsTxt(): string {
  const lines: string[] = [];
  lines.push(`# ${profile.fullName}`, "");
  lines.push(`> ${profile.jobTitle} en ${profile.location.label}. Portafolio: ${SITE_URL}`, "");

  lines.push("## Sobre mí", "", profile.bio, "");

  lines.push("## Experiencia", "");
  for (const job of workExperience) {
    lines.push(`- **${job.title}** — ${job.company} (${job.periodo}): ${job.desc}`);
  }
  lines.push("");

  lines.push("## Proyectos", "");
  for (const project of testimonials) {
    const caseStudy = getPublishedCaseStudyForProject(project.id);
    const links = [
      project.link ? `[demo](${project.link})` : null,
      caseStudy ? `[caso de estudio](${SITE_URL}/proyectos/${caseStudy.slug})` : null,
    ].filter(Boolean);
    const name = project.title ? `${project.name} (${project.title})` : project.name;
    lines.push(
      `- **${name}**${links.length ? ` — ${links.join(", ")}` : ""}: ${project.quote} Tecnologías: ${project.stack.join(", ")}.`
    );
  }
  lines.push("");

  lines.push("## Habilidades", "");
  for (const group of skills) {
    lines.push(`- **${group.title}**: ${group.items.map((s) => s.name).join(", ")}`);
  }
  lines.push("");

  lines.push("## Educación", "");
  for (const e of education) {
    lines.push(`- ${e.degree} — ${e.institution} (${e.periodo})`);
  }
  lines.push("");

  lines.push("## Contacto", "");
  lines.push(`- Email: [${contactEmail}](mailto:${contactEmail})`);
  for (const p of professionalProfiles) {
    lines.push(`- ${p.name}: ${p.link}`);
  }
  lines.push("");

  return lines.join("\n");
}

export function GET() {
  return new Response(buildLlmsTxt(), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
