import Container from "./Container";

export default function Footer() {
  return (
    <footer className="w-full border-t border-[#C8BAA6] mt-24">
      <Container>
        <div className="py-10 flex flex-col md:flex-row items-center justify-between gap-6 text-sm">

          <p>© {new Date().getFullYear()} Justin Mathais</p>

          <p className="text-center">
            Built with care and intention.
          </p>

          <div className="flex items-center gap-6">
            <a href="https://github.com/mathaisjustin" target="_blank" rel="noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/mathaisjustin/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="mailto:mathaisjustin@gmail.com">Email</a>
          </div>

        </div>
      </Container>
    </footer>
  );
}
