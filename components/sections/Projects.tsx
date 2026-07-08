import Container from "@/components/layout/Container";
import Image from "next/image";
import Reveal from "@/components/animations/Reveal";

const projects = [
  {
    title: "SmartPark",
    desc: "A smart parking management system with real-time space monitoring using a computer vision model. Won 1st place at Impetus Innovative Project, scoring 481/500 and securing funding.",
    tech: ["Django", "Firebase", "MongoDB", "CVzone"],
    image: "/projects/smartpark.png",
    href: "https://github.com/mathaisjustin/smartPark",
    dark: false,
  },
  {
    title: "Jewels Store",
    desc: "A full-fledged jewelry eCommerce website with product search, filtering, cart, and secure Razorpay payments, plus an admin panel for products, orders and users.",
    tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    image: "/projects/jdm.png",
    href: "https://github.com/mathaisjustin/Jewels-Store",
    dark: true,
  },
  {
    title: "Youace Website",
    desc: "A responsive, user-centric landing page for a personal development platform, emphasizing accessibility and cross-device compatibility.",
    tech: ["Next.js", "Responsive Design"],
    image: "/projects/youace.png",
    href: "https://github.com/mathaisjustin/Youace-landing",
    dark: false,
  },
  {
    title: "Personal Homelab Infrastructure",
    desc: "A homelab environment with multiple virtual machines, Docker containers, and Kubernetes orchestration — used for CI, hosting dev environments, and experimenting with cloud-native technologies.",
    tech: ["Docker", "Kubernetes", "Virtual Machines"],
    image: undefined,
    href: "https://github.com/mathaisjustin",
    dark: false,
  },
];

export default function Projects() {
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
        {projects.map((project, i) => (
          <Reveal key={i} delay={0.1 + i * 0.1}>
            <div
              className={`rounded-2xl border overflow-hidden h-full ${
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
                    sizes="(max-width: 768px) 100vw, 50vw"
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
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 text-sm pt-2"
                >
                  View project
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </div>
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
