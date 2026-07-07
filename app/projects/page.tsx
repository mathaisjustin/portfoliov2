import Container from "@/components/layout/Container";
import Reveal from "@/components/animations/Reveal";
import Image from "next/image";

const projects = [
  {
    title: "DevFlow",
    desc: "A real-time CI/CD monitoring dashboard that unifies pipeline data and alerts across teams.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "WebSockets", "Docker"],
    image: "/projects/devflow.png",
    dark: false,
  },
  {
    title: "AuthKit",
    desc: "Production-ready OAuth2 microservice with JWT rotation and multi-tenant support.",
    tech: ["Node.js", "Redis", "PostgreSQL", "Express"],
    image: "/projects/authkit.png",
    dark: true,
  },
  {
    title: "QueryBolt",
    desc: "SQL query builder with explain plans, indexing insights, and visual query analysis.",
    tech: ["TypeScript", "PostgreSQL", "React"],
    image: "/projects/querybolt.png",
    dark: false,
  },
  {
    title: "LaunchKit",
    desc: "Infrastructure-as-code starter for AWS using Terraform for scalable deployments.",
    tech: ["Terraform", "AWS", "Docker", "GitHub Actions"],
    image: "/projects/launchkit.png",
    dark: false,
  },
];

export default function ProjectsPage() {
  return (
    <Container className="pt-12 pb-16">

      {/* Header */}
      <div className="mb-16 space-y-4">
        <Reveal delay={0}>
          <p className="text-sm uppercase tracking-widest">
            Projects
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <h1 className="text-4xl md:text-5xl leading-tight font-instrument">
            All projects
          </h1>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="max-w-2xl">
            A deeper look into the projects I’ve built and the systems behind them.
          </p>
        </Reveal>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <Reveal key={i} delay={0.2 + i * 0.06}>
            <div
              className={`rounded-2xl border overflow-hidden ${
                project.dark
                  ? "bg-[#1C1410] text-[#FAF7F2]"
                  : "bg-[#EDE8DF] border-[#C8BAA6]"
              }`}
            >
              {/* Image */}
              <div className="relative w-full h-56">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-instrument">
                  {project.title}
                </h3>

                <p className="text-sm opacity-80">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className={`text-xs px-3 py-1 rounded-full border ${
                        project.dark
                          ? "border-[#FAF7F2]/30"
                          : "border-[#C8BAA6]"
                      }`}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

    </Container>
  );
}
