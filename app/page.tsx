import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Qualifications from "@/components/sections/Qualifications";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import Certifications from "@/components/sections/Certifications";
import Blogs from "@/components/sections/Blogs";
import Contact from "@/components/sections/Contact";

const sectionClass = "scroll-mt-32 py-20";

export default function Home() {
  return (
    <main>

      <Hero />

      <section id="about" className={sectionClass}>
        <About />
      </section>

      <section id="services" className={sectionClass}>
        <Services />
      </section>

      <section id="certifications" className={sectionClass}>
        <Certifications />
      </section>

      <section id="qualifications" className={sectionClass}>
        <Qualifications />
      </section>

      <section id="projects" className={sectionClass}>
        <Projects />
      </section>

      <section id="blogs" className={sectionClass}>
        <Blogs />
      </section>

      <section id="contact" className={sectionClass}>
        <Contact />
      </section>

    </main>
  );
}
