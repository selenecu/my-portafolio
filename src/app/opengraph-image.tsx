import { ImageResponse } from "next/og";
import { profile, skills } from "@/data";

// Edge runtime: the Node build of @vercel/og in Next 14.2.3 fails to prerender on Windows.
export const runtime = "edge";

export const alt = `${profile.displayName} | ${profile.jobTitle}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Highlighted Skills, resolved against the Skill list so they never drift from it.
const HIGHLIGHTED = ["TypeScript", "React", "React Native (Expo)", "Next.js", "Vue.js", "PostgreSQL"];
const highlightedSkills = skills
  .flatMap((g) => g.items.map((s) => s.name))
  .filter((name) => HIGHLIGHTED.includes(name));

const PURPLE = "#CBACF9";
const BACKGROUND = "#000319";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          backgroundColor: BACKGROUND,
          backgroundImage:
            "radial-gradient(circle at 85% 15%, rgba(203,172,249,0.28), transparent 45%), radial-gradient(circle at 10% 90%, rgba(59,130,246,0.18), transparent 40%)",
          color: "#FFFFFF",
        }}
      >
        <div style={{ display: "flex", fontSize: 28, color: "#BEC1DD", letterSpacing: 4, textTransform: "uppercase" }}>
          {`Portafolio · ${profile.location.label}`}
        </div>
        <div style={{ display: "flex", fontSize: 84, fontWeight: 700, marginTop: 24, lineHeight: 1.05 }}>
          {profile.displayName}
        </div>
        <div style={{ display: "flex", fontSize: 44, color: PURPLE, marginTop: 16 }}>
          {profile.jobTitle}
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 16, marginTop: 56 }}>
          {highlightedSkills.map((name) => (
            <div
              key={name}
              style={{
                display: "flex",
                fontSize: 26,
                color: PURPLE,
                border: "2px solid rgba(203,172,249,0.45)",
                backgroundColor: "rgba(203,172,249,0.12)",
                borderRadius: 999,
                padding: "10px 24px",
              }}
            >
              {name}
            </div>
          ))}
        </div>
      </div>
    ),
    size
  );
}
