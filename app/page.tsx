import Container from "@/components/layout/Container";

import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Qualifications from "@/components/sections/Qualifications";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import Certifications from "@/components/sections/Certifications";
import Blogs from "@/components/sections/Blogs";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main>

      <Hero />

      <section id="about" className="pt-12 pb-24">
        <About />
      </section>

      <section id="services" className="pt-12 pb-24">
        <Services />
      </section>

      <section id="certifications" className="py-24">
        <Certifications />
      </section>

      <section id="qualifications" className="py-24">
        <Qualifications />
      </section>

      <section id="projects" className="py-24">
        <Projects />
      </section>

      <section id="blogs" className="py-24">
        <Blogs />
      </section>

      <section id="contact" className="py-24">
        <Contact />
      </section>

    </main>
  );
}