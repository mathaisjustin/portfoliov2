'use client';

import { useEffect, useState } from "react";

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
      <div className="max-w-[1000px] mx-auto px-6">
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

              {[
                { label: "About", href: "#about" },
                { label: "Education", href: "#qualifications" },
                { label: "Services", href: "#services" },
                { label: "Projects", href: "#projects" },
                { label: "Achievements", href: "#certifications" },
                { label: "Blogs", href: "#blogs" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="relative group"
                >
                  {item.label}
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
      </div>
    </div>
  );
}
