import Container from "@/components/layout/Container";
import Reveal from "@/components/animations/Reveal";

export default function Hero() {
  return (
    <section className="pt-32 pb-16">
      <Container>
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* LEFT: Text Content */}
          <div className="space-y-6">

            <Reveal delay={0}>
              <h1 className="text-5xl md:text-7xl leading-[1.1] tracking-tight max-w-xl">
                Hello, I’m Justin
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-lg max-w-xl leading-relaxed text-[#5C4A36]">
                A developer focused on building thoughtful and scalable digital experiences.
              Through working on real-world projects, I’ve learned to think beyond just writing code,
              focusing on solving problems, collaborating effectively, and creating systems that last.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-lg max-w-xl leading-relaxed text-[#5C4A36]">
                My journey has helped me become a better team player, communicate ideas clearly, and approach
                challenges with a structured and practical mindset.
              </p>
            </Reveal>

            <div className="flex gap-4 pt-6">

              {/* Primary → Resume */}
              <Reveal delay={0.3} className="inline-flex">
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
                  <span className="text-sm">↗</span>
                </a>
              </Reveal>

              {/* Secondary → Projects */}
              <Reveal delay={0.4} className="inline-flex">
              <a
                href="#projects"
                className="
                  px-7 py-3.5 rounded-full
                  border border-[#C8BAA6]
                  text-[#5C4A36]
                  hover:bg-[#EDE8DF]/70
                  transition-all duration-300
                "
              >
                Explore Work
              </a>
              </Reveal>
          </div>
        </div>

          {/* RIGHT: Portrait Image */}
          <div className="flex justify-center md:justify-end">
            <div className="overflow-hidden rounded-2xl">
              <img
                src="/images/portfolio.png"
                alt="Justin Mathais"
                width={350} // adjust based on your image
                height={500} // maintain aspect ratio
                className="object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
