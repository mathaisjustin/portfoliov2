import Container from "./Container";

export default function Navbar() {
  return (
    <header className="w-full border-b border-[#C8BAA6]">
      <Container>
        <div className="py-4 flex items-center justify-between">
          <div className="text-lg">Justin Mathais</div>

          <nav className="flex items-center gap-8 text-sm">
            <a href="#about">About</a>
            <a href="#education">Education</a>
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#certifications">Certifications</a>
            <a href="#blogs">Blogs</a>
          </nav>
        </div>
      </Container>
    </header>
  );
}