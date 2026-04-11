import Container from "@/components/layout/Container";

export default function Contact() {
  return (
      <Container>
        
        <div className="max-w-2xl mx-auto text-center space-y-8">
          
          {/* Heading */}
          <h2 className="text-4xl md:text-5xl leading-tight font-instrument">
            Let’s build something meaningful together.
          </h2>

          {/* Supporting text */}
          <p className="text-lg opacity-80">
            Whether you have an idea, a project, or just want to connect —  
            I’m always open to meaningful conversations and collaborations.
          </p>

          {/* CTA */}
          <div className="pt-4">
            <a
              href="mailto:your-email@example.com"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#1C1410] text-[#FAF7F2] hover:opacity-90 transition"
            >
              Get in touch
              <span>→</span>
            </a>
          </div>

          {/* Secondary contact */}
          <p className="text-sm opacity-60 pt-2">
            or email me directly at{" "}
            <span className="underline">your-email@example.com</span>
          </p>

        </div>

      </Container>
  );
}