import Container from "@/components/layout/Container";
import Reveal from "@/components/animations/Reveal";

export default function Hero() {
  return (
    <section className="min-h-[calc(100dvh-5rem)] pt-44 pb-16 md:min-h-0 md:pb-20 lg:min-h-[calc(100dvh-5rem)] lg:pb-16">
      <Container>
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* LEFT: Text Content */}
          <div className="space-y-6">

            <Reveal delay={0}>
              <h1 className="text-5xl md:text-7xl leading-[1.1] tracking-tight max-w-xl">
                Hello, I’m
                <br />
                Justin Mathais
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="text-lg max-w-2xl leading-relaxed text-[#5C4A36]">
                A Full-Stack Developer and Cloud Associate skilled in building scalable
                applications with Next.js, React and Django, and deploying cloud-native
                solutions on Google Cloud Platform. I care about clean architecture,
                dependable CI/CD, and backend performance as much as pixel-perfect UI.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <p className="text-lg max-w-2xl leading-relaxed text-[#5C4A36]">
                With hands-on experience across cloud infrastructure and full-stack web
                development, I enjoy turning ideas into fast, reliable products — from
                backend APIs to pixel-perfect interfaces. I&apos;m currently pursuing my
                Master&apos;s in Computer Applications, always exploring new tools and
                technologies along the way.
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
