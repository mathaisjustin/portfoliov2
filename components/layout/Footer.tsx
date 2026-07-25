import Image from "next/image";
import Container from "./Container";
import Reveal from "@/components/animations/Reveal";

const quickLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#certifications" },
  { label: "Blogs", href: "#blogs" },
];

const ventures = [
  {
    name: "Falcore Labs",
    logo: "/logos/falcore-labs.svg",
    desc: "Advancing the future of AI through rigorous research and innovation.",
    href: "https://falcorelabs.com/",
  },
];

export default function Footer() {
  return (
    <footer className="w-full mt-24 bg-[#1C1410] text-[#FAF7F2]">
      <Container>
        <div className="py-16 grid md:grid-cols-3 gap-12">

          {/* Quick Links */}
          <Reveal delay={0}>
            <div className="space-y-4">
              <p className="text-xs uppercase tracking-widest text-[#FAF7F2]/50">
                Quick Links
              </p>
              <nav className="flex flex-col gap-2.5">
                {quickLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="text-sm text-[#FAF7F2]/80 hover:text-[#FAF7F2] transition w-fit"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            </div>
          </Reveal>

          {/* Ventures */}
          <Reveal delay={0.06}>
            <div className="space-y-6">
              <p className="text-xs uppercase tracking-widest text-[#FAF7F2]/50">
                Ventures
              </p>

              {ventures.map((venture) => (
                <div key={venture.name} className="space-y-4">
                  <div className="flex items-center justify-between gap-4">
                    <Image
                      src={venture.logo}
                      alt={venture.name}
                      width={160}
                      height={54}
                      priority
                      className="h-14 w-auto -ml-[27px]"
                    />

                    <span className="relative shrink-0 inline-block rounded-full">
                      <svg
                        aria-hidden="true"
                        className="absolute inset-0 w-full h-full pointer-events-none overflow-visible"
                      >
                        <rect
                          x="1.5"
                          y="1.5"
                          width="calc(100% - 3px)"
                          height="calc(100% - 3px)"
                          rx="20.5"
                          ry="20.5"
                          fill="none"
                          stroke="white"
                          strokeWidth="3"
                          strokeLinecap="round"
                          pathLength={100}
                          strokeDasharray="14 86"
                          className="animate-border-beam"
                          style={{ filter: "drop-shadow(0 0 14px white) drop-shadow(0 0 7px white) drop-shadow(0 0 2px white)" }}
                        />
                      </svg>
                      <a
                        href={venture.href}
                        target="_blank"
                        rel="noreferrer"
                        className="relative inline-flex items-center gap-2 h-11 px-5 rounded-full bg-[#F35D2A] text-white text-sm shadow-[0_0_28px_8px_rgba(243,93,42,0.75)] hover:opacity-90 transition"
                      >
                        Visit Now
                        <span>↗</span>
                      </a>
                    </span>
                  </div>

                  <p className="text-sm text-[#FAF7F2]/60 max-w-xs">
                    {venture.desc}
                  </p>
                </div>
              ))}
            </div>
          </Reveal>

          {/* Connect */}
          <Reveal delay={0.12}>
            <div className="space-y-4 text-right">
              <p className="text-xs uppercase tracking-widest text-[#FAF7F2]/50">
                Connect
              </p>

              <div className="flex flex-col items-end gap-2.5 text-sm text-[#FAF7F2]/80">
                <a
                  href="https://github.com/mathaisjustin"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#FAF7F2] transition w-fit"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/mathaisjustin/"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#FAF7F2] transition w-fit"
                >
                  LinkedIn
                </a>
                <a
                  href="https://cal.com/mathaisjustin/intro-call"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#FAF7F2] transition w-fit"
                >
                  Book a Call
                </a>
                <a
                  href="mailto:mathaisjustin@gmail.com"
                  className="hover:text-[#FAF7F2] transition w-fit underline underline-offset-2"
                >
                  mathaisjustin@gmail.com
                </a>
              </div>
            </div>
          </Reveal>

        </div>

        {/* Bottom bar */}
        <Reveal delay={0.16}>
          <div className="py-6 border-t border-[#FAF7F2]/10 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-[#FAF7F2]/50">
            <p>© {new Date().getFullYear()} Justin Mathais. All rights reserved.</p>
            <p>Built with care and intention.</p>
          </div>
        </Reveal>
      </Container>
    </footer>
  );
}
