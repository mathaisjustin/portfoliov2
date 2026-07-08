import Container from "@/components/layout/Container";
import Reveal from "@/components/animations/Reveal";
import Image from "next/image";

const projects = [
  {
    title: "SmartPark",
    desc: "A smart parking management system built with Django, Firebase and MongoDB, with real-time parking space monitoring using a computer vision model (CVzone) for automated detection. Won 1st place at Impetus Innovative Project, scoring 481/500 and securing funding.",
    tech: ["Django", "Firebase", "MongoDB", "CVzone"],
    image: "/projects/smartpark.png",
    href: "https://github.com/mathaisjustin/smartPark",
    dark: false,
  },
  {
    title: "Jewels Store",
    desc: "A full-fledged jewelry eCommerce website built with PHP, MySQL, HTML, CSS and JavaScript. Implemented product search, filtering, cart, and secure payments with Razorpay, plus an admin panel for product, order and user management.",
    tech: ["PHP", "MySQL", "HTML", "CSS", "JavaScript", "Razorpay"],
    image: "/projects/jdm.png",
    href: "https://github.com/mathaisjustin/Jewels-Store",
    dark: true,
  },
  {
    title: "Youace Website",
    desc: "Designed and developed a responsive, user-centric landing page for a personal development platform, emphasizing accessibility and seamless user experience with contemporary front-end design principles.",
    tech: ["Next.js", "Responsive Design"],
    image: "/projects/youace.png",
    href: "https://github.com/mathaisjustin/Youace-landing",
    dark: false,
  },
  {
    title: "Personal Homelab Infrastructure",
    desc: "Designed and deployed a homelab environment with multiple virtual machines, Docker containers, and Kubernetes orchestration. Implemented network management, firewall rules, and automated backups for development, testing, and CI.",
    tech: ["Docker", "Kubernetes", "Virtual Machines", "Networking"],
    image: undefined,
    href: "https://github.com/mathaisjustin",
    dark: false,
  },
  {
    title: "Personal Portfolio Website",
    desc: "Built a responsive personal portfolio using Next.js and Tailwind CSS to showcase projects and work experience, deployed and optimized for performance and SEO best practices.",
    tech: ["Next.js", "Tailwind CSS"],
    image: undefined,
    href: "https://github.com/mathaisjustin",
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
              className={`rounded-2xl border overflow-hidden h-full ${
                project.dark
                  ? "bg-[#1C1410] text-[#FAF7F2]"
                  : "bg-[#EDE8DF] border-[#C8BAA6]"
              }`}
            >
              {/* Image */}
              {project.image && (
                <div className="relative w-full h-56">
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

                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center gap-2 text-sm pt-2"
                >
                  View on GitHub
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </a>
              </div>
            </div>
          </Reveal>
        ))}
      </div>

    </Container>
  );
}
