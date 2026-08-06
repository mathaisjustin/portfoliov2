import Container from "@/components/layout/Container";
import Reveal from "@/components/animations/Reveal";
import ProjectCard from "@/components/sections/ProjectCard";
import { projects } from "@/lib/projects";
import BackLink from "@/components/ui/BackLink";

export default function ProjectsPage() {
  return (
    <Container className="pt-12 pb-16">

      {/* Breadcrumb */}
      <Reveal delay={0}>
        <BackLink href="/#projects" label="Back to Home" className="mb-8" />
      </Reveal>

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
          <Reveal key={project.title} delay={0.2 + i * 0.06}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>

    </Container>
  );
}
