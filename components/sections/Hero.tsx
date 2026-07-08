import Container from "@/components/layout/Container";
import Reveal from "@/components/animations/Reveal";

const highlights = [
  { value: "5", label: "Projects shipped" },
  { value: "3", label: "Organizations" },
  { value: "1st", label: "Place — Impetus 2023" },
];

export default function Hero() {
  return (
    <section className="pt-32 pb-16">
      <Container>
        <div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* LEFT: Text Content */}
          <div className="space-y-6">

            <Reveal delay={0}>
              <h1 className="text-5xl md:text-7xl leading-[1.1] tracking-tight max-w-xl">
                Hello, I’m Justin
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
                I&apos;ve worked as a Cloud Associate at Niveus Solutions, a Full Stack
                Development Intern at Locale Homestays, and a Web Developer Intern at
                Youace — and I&apos;m currently pursuing my MCA at St Aloysius (Deemed
                to be University) while continuing to explore emerging technologies.
              </p>
            </Reveal>

            <Reveal delay={0.28}>
              <div className="flex flex-wrap gap-x-10 gap-y-4 pt-2">
                {highlights.map((item) => (
                  <div key={item.label}>
                    <p className="font-instrument text-3xl text-[#1C1410]">{item.value}</p>
                    <p className="text-xs uppercase tracking-widest text-[#5C4A36]">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>

            <div className="flex gap-4 pt-6">

              {/* Primary → Resume */}
              <Reveal delay={0.34} className="inline-flex">
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
            <div className="overflow-hidden rounded-2xl">
              <img
                src="/images/portfolio.png"
                alt="Justin Mathais"
                width={350} // adjust based on your image
                height={500} // maintain aspect ratio
                className="object-cover rounded-2xl"
              />
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
