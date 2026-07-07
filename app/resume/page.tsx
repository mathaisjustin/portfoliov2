import Container from "@/components/layout/Container";

export default function ResumePage() {
  return (
    <section className="pt-16 pb-16">
      <Container>

        {/* Header */}
        <div className="flex items-center justify-between mb-10 max-w-4xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-medium">
            Resume
          </h1>

<a
  href="/resume.pdf"
  download="Justin Mathais Resume.pdf"
  className="
    px-5 py-2.5 rounded-full
    bg-[#1C1410] text-[#FAF7F2]
    hover:opacity-90 transition-all duration-300
    hover:scale-[1.02]
  "
>
  Download Resume
</a>
        </div>

        {/* Clean PDF Viewer */}
        <div className="
          w-full max-w-4xl mx-auto
          h-[85vh]
          overflow-y-auto
          overflow-x-hidden
          bg-[#EDE8DF]/40 backdrop-blur-lg
          shadow-[0_8px_30px_rgba(0,0,0,0.06)]
        ">
          <iframe
            src="/resume.pdf#toolbar=0&navpanes=0&view=FitH"
            className="w-full h-full border-0"
          />
        </div>

      </Container>
    </section>
  );
}
