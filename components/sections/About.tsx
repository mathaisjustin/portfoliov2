import Container from "@/components/layout/Container";
import Reveal from "@/components/animations/Reveal";

const skillGroups = [
  { title: "Programming", items: ["Python", "JavaScript", "TypeScript"] },
  { title: "Web Development", items: ["Next.js", "React.js", "Node.js", "Django"] },
  { title: "Databases", items: ["MongoDB", "MySQL", "Firebase", "PostgreSQL"] },
  { title: "DevOps & Cloud", items: ["Docker", "Kubernetes", "CI/CD", "AWS", "Google Cloud", "GitHub Actions"] },
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
                  Full-Stack Developer and Cloud Associate from Udupi, Karnataka.
                </h2>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-lg">
                I build scalable applications using Next.js, React.js, Django, and
                databases like MySQL, MongoDB and Firebase — and I&apos;m proficient in
                deploying and managing cloud-native solutions on Google Cloud Platform,
                implementing CI/CD workflows, and optimizing backend performance.
              </p>
            </Reveal>

            <Reveal delay={0.18}>
              <p>
                I&apos;ve completed professional work as a Cloud Associate at Niveus
                Solutions and as a Full Stack Development Intern at Locale Homestays and
                Youace, contributing to production-ready web applications. I&apos;m currently
                pursuing my MCA with a passion for delivering innovative, high-performance
                solutions and continuously exploring emerging technologies.
              </p>
            </Reveal>

            {/* CTA */}
            <Reveal delay={0.26}>
              <a
                href="#qualifications"
                className="group inline-flex items-center gap-2 pt-6 text-sm border-b border-[#C8BAA6] hover:border-[#1C1410] transition"
              >
                View Qualifications
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </a>
            </Reveal>
          </div>

          {/* RIGHT: Skills */}
          <div className="space-y-8">
            {skillGroups.map((group, i) => (
              <Reveal key={group.title} delay={0.05 + i * 0.08}>
                <div className="space-y-3">
                  <p className="text-sm uppercase tracking-widest">{group.title}</p>
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-full border border-[#C8BAA6] text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

        </div>
      </Container>
  );
}
