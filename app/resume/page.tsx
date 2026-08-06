import Container from "@/components/layout/Container";
import Reveal from "@/components/animations/Reveal";
import BackLink from "@/components/ui/BackLink";
import { Download } from "lucide-react";

export default function ResumePage() {
  return (
    <section className="pt-8 pb-16">
      <Container>

        {/* Breadcrumb */}
        <Reveal delay={0}>
          <div className="max-w-4xl mx-auto">
            <BackLink href="/" label="Back to Home" className="mb-8" />
          </div>
        </Reveal>

        {/* Header */}
        <Reveal delay={0.05}>
          <div className="flex items-end justify-between gap-6 mb-10 max-w-4xl mx-auto">
            <div>
              <span className="block text-sm font-medium tracking-[0.2em] uppercase text-[#8A7860] mb-3">
                Curriculum Vitae
              </span>
              <h1 className="text-3xl md:text-4xl font-medium">
                Resume
              </h1>
            </div>

            <a
              href="/resume.pdf"
              download="Justin Mathais Resume.pdf"
              className="
                flex items-center gap-2 shrink-0
                px-5 py-2.5 rounded-full
                bg-[#1C1410] text-[#FAF7F2]
                hover:opacity-90 transition-all duration-300
                hover:scale-[1.02]
              "
            >
              Download
              <Download size={16} />
            </a>
          </div>
        </Reveal>

        {/* PDF viewer, styled as a paper card */}
        <Reveal delay={0.12}>
          <div className="
            w-full max-w-4xl mx-auto
            rounded-3xl overflow-hidden
            border border-[#C8BAA6]/40
            bg-[#FAF7F2]
            shadow-[0_20px_50px_rgba(28,20,16,0.08)]
          ">
            {/* Accent bar */}
            <div
              className="h-1.5 w-full"
              style={{ background: "linear-gradient(90deg, #B95E3C 0%, #C79A3B 100%)" }}
            />

            <div className="
              w-full h-[85vh]
              overflow-y-auto overflow-x-hidden
              bg-[#EDE8DF]/40 backdrop-blur-lg
            ">
              <iframe
                src="/resume.pdf#toolbar=0&navpanes=0&view=FitH"
                title="Justin Mathais Resume"
                className="w-full h-full border-0"
              />
            </div>
          </div>
        </Reveal>

      </Container>
    </section>
  );
}
