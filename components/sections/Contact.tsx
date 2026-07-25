import Container from "@/components/layout/Container";
import Reveal from "@/components/animations/Reveal";
import CopyEmail from "@/components/ui/CopyEmail";

export default function Contact() {
  return (
      <Container>

        <div className="max-w-2xl mx-auto text-center space-y-8">

          {/* Heading */}
          <Reveal delay={0}>
            <h2 className="text-4xl md:text-5xl leading-tight font-instrument">
              Let’s build something meaningful together.
            </h2>
          </Reveal>

          {/* Supporting text */}
          <Reveal delay={0.1}>
            <p className="text-lg opacity-80">
              Whether you have an idea, a project, or just want to connect —
              I’m always open to meaningful conversations and collaborations.
            </p>
          </Reveal>

          {/* CTA */}
          <Reveal delay={0.2}>
            <div className="pt-4">
              <a
                href="https://cal.com/mathaisjustin/intro-call"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1C1410] text-[#FAF7F2] hover:opacity-90 transition"
              >
                Get in touch
                <span>→</span>
              </a>
            </div>
          </Reveal>

          {/* Secondary contact */}
          <Reveal delay={0.28}>
            <p className="text-sm opacity-60 pt-2">
              or email me directly at{" "}
              <CopyEmail email="mathaisjustin@gmail.com" />
            </p>
          </Reveal>

        </div>

      </Container>
  );
}
