import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiDjango,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiSupabase,
  SiFirebase,
  SiDocker,
  SiGooglecloud,
  SiCloudflare,
  SiGit,
  SiGithub,
} from "react-icons/si";
import { FaAws } from "react-icons/fa6";

const techs = [
  { name: "Python", icon: SiPython, color: "#3776AB" },
  { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "Next.js", icon: SiNextdotjs, color: "#1C1410" },
  { name: "React", icon: SiReact, color: "#61DAFB" },
  { name: "Node.js", icon: SiNodedotjs, color: "#5FA04E" },
  { name: "Express", icon: SiExpress, color: "#1C1410" },
  { name: "Django", icon: SiDjango, color: "#0C4B33" },
  { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
  { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
  { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
  { name: "Docker", icon: SiDocker, color: "#2496ED" },
  { name: "AWS", icon: FaAws, color: "#FF9900" },
  { name: "Google Cloud", icon: SiGooglecloud, color: "#4285F4" },
  { name: "Cloudflare", icon: SiCloudflare, color: "#F38020" },
  { name: "Git", icon: SiGit, color: "#F05032" },
  { name: "GitHub", icon: SiGithub, color: "#1C1410" },
];

export default function TechStackCarousel() {
  const loop = [...techs, ...techs];

  return (
    <div className="pt-16">
      <p className="text-sm uppercase tracking-widest text-center mb-8">
        Tech Stack
      </p>

      <div
        className="relative overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <div className="flex w-max animate-tech-scroll gap-14">
          {loop.map((tech, i) => {
            const Icon = tech.icon;
            return (
              <div
                key={`${tech.name}-${i}`}
                className="flex flex-col items-center justify-center gap-2 w-24 shrink-0 grayscale hover:grayscale-0 transition-all duration-300"
              >
                <Icon size={56} style={{ color: tech.color }} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
