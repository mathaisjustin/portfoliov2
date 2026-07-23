import Container from "@/components/layout/Container";
import Reveal from "@/components/animations/Reveal";
import { ArrowUpRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="pt-12 pb-0 xl:pt-44 xl:pb-16 xl:min-h-[calc(100dvh-5rem)]">
      <Container>
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* LEFT: Text Content */}
          <div className="space-y-6">

            <Reveal delay={0}>
              <span className="block text-sm font-medium tracking-[0.2em] uppercase text-[#8A7860] mb-3 whitespace-nowrap">
                Tech Enthusiast · Lifelong Learner · Problem Solver
              </span>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="text-5xl md:text-7xl leading-[1.1] tracking-tight max-w-xl">
                Hello, I’m
                <br />
                Justin Mathais
              </h1>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="text-lg max-w-xl leading-relaxed text-[#5C4A36]">
                From wiring up cloud infrastructure to shipping full-stack products end to
                end, I love turning rough ideas into things people can actually use. I care
                as much about what happens behind the scenes — clean architecture, reliable
                deployments, systems that hold up under pressure — as I do about how an
                interface feels in someone&apos;s hands. Still a student at heart, always
                chasing the next thing worth learning.
              </p>
            </Reveal>

            <div className="flex gap-4 pt-6">

              {/* Primary → Resume */}
              <Reveal delay={0.25} className="inline-flex">
                <a
                  href="/resume"
                  className="
                    flex items-center gap-2
                    px-7 py-3.5 rounded-full
                    bg-[#1C1410] text-[#FAF7F2]
                    hover:scale-[1.03]
                    transition-all duration-300
                    shadow-[0_8px_20px_rgba(0,0,0,0.08)]
                  "
                >
                  View Resume
                  <ArrowUpRight size={16} />
                </a>
              </Reveal>

              {/* Secondary → Projects */}
              <Reveal delay={0.35} className="inline-flex">
              <a
                href="#projects"
                className="
                  flex items-center gap-2
                  px-7 py-3.5 rounded-full
                  border border-[#C8BAA6]
                  text-[#5C4A36]
                  hover:bg-[#EDE8DF]/70
                  transition-all duration-300
                "
              >
                Explore Projects
              </a>
              </Reveal>
          </div>
        </div>

          {/* RIGHT: Portrait Image */}
          <Reveal delay={0.15} className="flex justify-center md:justify-end">
            <div className="overflow-hidden rounded-2xl w-full max-w-[420px]">
              <img
                src="/images/portfolio.png"
                alt="Justin Mathais"
                width={420} // adjust based on your image
                height={600} // maintain aspect ratio
                className="object-cover rounded-2xl w-full h-auto"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
