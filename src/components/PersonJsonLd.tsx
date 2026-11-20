import { SITE_URL } from "@/config/site";
import { contactEmail, education, professionalProfiles, profile, skills } from "@/data";

// Schema.org Person for search engines and AI crawlers. Never include the phone number.
export function buildPersonJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: profile.fullName,
    jobTitle: profile.jobTitle,
    url: SITE_URL,
    email: `mailto:${contactEmail}`,
    description: profile.bio,
    address: {
      "@type": "PostalAddress",
      addressLocality: profile.location.locality,
      addressCountry: profile.location.country,
    },
    sameAs: professionalProfiles.map((p) => p.link),
    alumniOf: education.map((e) => ({
      "@type": "EducationalOrganization",
      name: e.institution,
    })),
    worksFor: {
      "@type": "Organization",
      name: profile.currentEmployer.name,
      url: profile.currentEmployer.url,
    },
    knowsAbout: skills.flatMap((g) => g.items.map((s) => s.name)),
  };
}

export default function PersonJsonLd() {
  // Escape "<" so the JSON cannot close the script tag.
  const json = JSON.stringify(buildPersonJsonLd()).replace(/</g, "\u003c");
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: json }}
    />
  );
}
