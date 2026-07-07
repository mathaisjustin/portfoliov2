'use client';

import { useEffect, useState } from "react";
import Container from "./Container";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="sticky top-4 z-50">
      <Container>
        <header
          className={`
            transition-all duration-300
            rounded-2xl border
            ${
              scrolled
                ? "bg-[#FAF7F2]/80 backdrop-blur-lg shadow-[0_6px_30px_rgba(0,0,0,0.06)] border-[#C8BAA6]/50"
                : "bg-[#FAF7F2]/60 backdrop-blur-md shadow-[0_4px_20px_rgba(0,0,0,0.04)] border-[#C8BAA6]/40"
            }
          `}
        >
          <div className="px-6 py-4 flex items-center justify-between">

            <div className="text-lg font-medium">
              Justin Mathais
            </div>

            <nav className="flex items-center gap-8 text-base text-[#5C4A36]">

              {["About","Education","Services","Projects","Certifications","Blogs"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative group"
                >
                  {item}
                  <span className="
                    absolute left-0 -bottom-1 h-[1px] w-0
                    bg-[#5C4A36]
                    transition-all duration-300
                    group-hover:w-full
                  " />
                </a>
              ))}

            </nav>

          </div>
        </header>
      </Container>
    </div>
  );
}
