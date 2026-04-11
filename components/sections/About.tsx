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
              A developer focused on building meaningful digital experiences.
            </h2>

            <p className="text-lg">
              I enjoy working at the intersection of design and engineering,
              creating applications that are not only functional but also
              intuitive and thoughtfully crafted.
            </p>

            <p>
              My work revolves around building scalable systems, clean user
              interfaces, and continuously improving how users interact with
              digital products.
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

  {/* Frontend */}
  <div className="space-y-3">
    <p className="text-sm uppercase tracking-widest">Frontend</p>
    <div className="flex flex-wrap gap-2">
      {["React", "Next.js", "TypeScript", "Tailwind"].map((tech) => (
        <span
          key={tech}
          className="px-3 py-1 rounded-full border border-[#C8BAA6] text-sm"
        >
          {tech}
        </span>
      ))}
    </div>
  </div>

  {/* Backend */}
  <div className="space-y-3">
    <p className="text-sm uppercase tracking-widest">Backend</p>
    <div className="flex flex-wrap gap-2">
      {["Node.js", "GraphQL", "REST", "WebSockets"].map((tech) => (
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
      {["PostgreSQL", "Redis", "MongoDB"].map((tech) => (
        <span
          key={tech}
          className="px-3 py-1 rounded-full border border-[#C8BAA6] text-sm"
        >
          {tech}
        </span>
      ))}
    </div>
  </div>

  {/* DevOps */}
  <div className="space-y-3">
    <p className="text-sm uppercase tracking-widest">DevOps</p>
    <div className="flex flex-wrap gap-2">
      {["Docker", "AWS", "Kubernetes", "Terraform"].map((tech) => (
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