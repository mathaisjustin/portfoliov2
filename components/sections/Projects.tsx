import Container from "@/components/layout/Container";
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

export default function Projects() {
  return (
    <Container>
      
      {/* Header */}
      <div className="mb-16 space-y-4">
        <p className="text-sm uppercase tracking-widest">
          Projects
        </p>

        <h2 className="text-4xl">
          Selected work and case studies
        </h2>

        <p className="max-w-2xl">
          A collection of projects showcasing my approach to building
          scalable and thoughtful digital experiences.
        </p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, i) => (
          <div
            key={i}
            className={`rounded-2xl border overflow-hidden ${
              project.dark
                ? "bg-[#1C1410] text-[#FAF7F2]"
                : "bg-[#EDE8DF] border-[#C8BAA6]"
            }`}
          >
            {/* Image */}
            {project.image && (
              <div className="relative w-full h-48">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                />
              </div>
            )}

            {/* Content */}
            <div className="p-6 space-y-4">
              <h3 className="text-2xl font-instrument">
                {project.title}
              </h3>

              <p className="text-sm opacity-80">
                {project.desc}
              </p>

              {/* Tech */}
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

              {/* CTA */}
              <a
                href="#"
                className="group inline-flex items-center gap-2 text-sm pt-2"
              >
                View project
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-12 flex justify-center">
        <button className="px-6 py-3 rounded-full bg-[#1C1410] text-[#FAF7F2]">
          View all projects →
        </button>
      </div>

    </Container>
  );
}