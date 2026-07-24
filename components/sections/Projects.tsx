import Container from "@/components/layout/Container";
import Reveal from "@/components/animations/Reveal";
import ProjectCard from "@/components/sections/ProjectCard";
import { projects } from "@/lib/projects";

export default function Projects() {
  const featured = projects.slice(0, 4);

  return (
    <Container>

      {/* Header */}
      <div className="mb-16 space-y-4">
        <Reveal delay={0}>
          <p className="text-sm uppercase tracking-widest">
            Projects
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="text-4xl">
            Selected work and case studies
          </h2>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="max-w-2xl">
            A collection of projects showcasing my approach to building
            scalable and thoughtful digital experiences.
          </p>
        </Reveal>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {featured.map((project, i) => (
          <Reveal key={project.title} delay={0.1 + i * 0.1}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>

      {/* Bottom CTA */}
      <Reveal delay={0.2}>
        <div className="mt-12 flex justify-center">
          <a
            href="/projects"
            className="px-6 py-3 rounded-full bg-[#1C1410] text-[#FAF7F2] hover:opacity-90 transition"
          >
            View all projects →
          </a>
        </div>
      </Reveal>

    </Container>
  );
}
