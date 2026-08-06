import Container from "@/components/layout/Container";
import Reveal from "@/components/animations/Reveal";
import TechStackCarousel from "@/components/sections/TechStackCarousel";
import SkillPills from "@/components/sections/SkillPills";

const skillGroups = [
  { title: "Programming", items: ["Python", "JavaScript", "TypeScript"] },
  { title: "Web Development", items: ["Next.js", "React.js", "Node.js", "Express", "Django"] },
  { title: "Databases", items: ["MongoDB", "MySQL", "PostgreSQL", "Supabase", "Firebase"] },
  { title: "DevOps & Cloud", items: ["Docker", "CI/CD", "AWS", "AWS Lambda", "Google Cloud", "Cloudflare"] },
];

export default function About() {
  return (
      <Container>
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* LEFT: About Content */}
          <div className="space-y-6">
            <Reveal delay={0}>
              <div className="space-y-4">
                <p className="text-sm uppercase tracking-widest">
                  About Me
                </p>
                <h2 className="text-4xl leading-tight">
                  Building things that matter, one project at a time.
                </h2>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-lg">
                My curiosity for technology started long before I could call myself a
                developer — taking things apart to see how they worked, then trying to
                build them better. That curiosity grew into a genuine love for the craft:
                architecting systems on the backend, wiring up cloud infrastructure that
                just works, and shaping interfaces that feel effortless to use. I&apos;m
                just as comfortable deep in server logic as I am polishing a pixel.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <p>
                Over the past few years, that curiosity has turned into real experience —
                shipping production applications, managing cloud-native infrastructure,
                and collaborating with teams to turn ideas into something people actually
                use. I completed my Master&apos;s in Computer Applications in 2026, but
                the learning never really stops for me — there&apos;s always a new
                tool, framework, or problem worth chasing.
              </p>
            </Reveal>

            {/* CTA */}
            <Reveal delay={0.26}>
              <a
                href="#qualifications"
                className="group inline-flex items-center gap-2 pt-6 text-base border-b border-[#C8BAA6] hover:border-[#1C1410] transition"
              >
                Know More
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </Reveal>
          </div>

          {/* RIGHT: Skills */}
          <div className="space-y-10">
            {skillGroups.map((group, i) => (
              <Reveal key={group.title} delay={0.05 + i * 0.08}>
                <div className="space-y-4">
                  <p className="text-sm uppercase tracking-widest">{group.title}</p>
                  <SkillPills items={group.items} />
                </div>
              </Reveal>
            ))}
          </div>

        </div>

        <TechStackCarousel />
      </Container>
  );
}
