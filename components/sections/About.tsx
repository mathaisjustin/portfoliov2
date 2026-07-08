import Container from "@/components/layout/Container";

export default function About() {
  return (
      <Container>
        <div className="grid md:grid-cols-2 gap-16 items-start">

          {/* LEFT: About Content */}
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-widest">
              About Me
            </p>

            <h2 className="text-4xl leading-tight">
              Full-Stack Developer and Cloud Associate from Udupi, Karnataka.
            </h2>

            <p className="text-lg">
              I build scalable applications using Next.js, React.js, Django, and
              databases like MySQL, MongoDB and Firebase — and I&apos;m proficient in
              deploying and managing cloud-native solutions on Google Cloud Platform,
              implementing CI/CD workflows, and optimizing backend performance.
            </p>

            <p>
              I&apos;ve completed professional work as a Cloud Associate at Niveus
              Solutions and as a Full Stack Development Intern at Locale Homestays and
              Youace, contributing to production-ready web applications. I&apos;m currently
              pursuing my MCA with a passion for delivering innovative, high-performance
              solutions and continuously exploring emerging technologies.
            </p>

            {/* CTA */}
<a
  href="#qualifications"
  className="group inline-flex items-center gap-2 pt-6 text-sm border-b border-[#C8BAA6] hover:border-[#1C1410] transition"
>
  View Qualifications
  <span className="transition-transform group-hover:translate-x-1">→</span>
</a>
          </div>

          {/* RIGHT: Skills */}
<div className="space-y-8">

  {/* Programming */}
  <div className="space-y-3">
    <p className="text-sm uppercase tracking-widest">Programming</p>
    <div className="flex flex-wrap gap-2">
      {["Python", "JavaScript", "TypeScript"].map((tech) => (
        <span
          key={tech}
          className="px-3 py-1 rounded-full border border-[#C8BAA6] text-sm"
        >
          {tech}
        </span>
      ))}
    </div>
  </div>

  {/* Web Development */}
  <div className="space-y-3">
    <p className="text-sm uppercase tracking-widest">Web Development</p>
    <div className="flex flex-wrap gap-2">
      {["Next.js", "React.js", "Node.js", "Django"].map((tech) => (
        <span
          key={tech}
          className="px-3 py-1 rounded-full border border-[#C8BAA6] text-sm"
        >
          {tech}
        </span>
      ))}
    </div>
  </div>

  {/* Databases */}
  <div className="space-y-3">
    <p className="text-sm uppercase tracking-widest">Databases</p>
    <div className="flex flex-wrap gap-2">
      {["MongoDB", "MySQL", "Firebase", "PostgreSQL"].map((tech) => (
        <span
          key={tech}
          className="px-3 py-1 rounded-full border border-[#C8BAA6] text-sm"
        >
          {tech}
        </span>
      ))}
    </div>
  </div>

  {/* DevOps & Cloud */}
  <div className="space-y-3">
    <p className="text-sm uppercase tracking-widest">DevOps & Cloud</p>
    <div className="flex flex-wrap gap-2">
      {["Docker", "Kubernetes", "CI/CD", "AWS", "Google Cloud", "GitHub Actions"].map((tech) => (
        <span
          key={tech}
          className="px-3 py-1 rounded-full border border-[#C8BAA6] text-sm"
        >
          {tech}
        </span>
      ))}
    </div>
  </div>

</div>

        </div>
      </Container>
  );
}
