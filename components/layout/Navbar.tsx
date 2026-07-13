'use client';

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#qualifications" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#certifications" },
  { label: "Blogs", href: "#blogs" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

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

            {/* Desktop nav */}
            <nav className="hidden md:flex items-center gap-8 text-base text-[#5C4A36]">
              {navLinks.map((item) => (
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

            {/* Mobile hamburger */}
            <button
              type="button"
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="md:hidden p-2 -mr-2 text-[#1C1410]"
            >
              <Menu size={24} />
            </button>

          </div>
        </header>
      </div>

      {/* Mobile menu overlay — always mounted; visibility driven by plain CSS
          transitions on `open` (not framer-motion / AnimatePresence) so it
          never gets stuck invisible-but-blocking after closing. */}
      <div
        aria-hidden={!open}
        className={`
          fixed inset-0 z-[60] bg-[#FAF7F2] md:hidden flex flex-col
          transition-opacity duration-300 ease-out
          ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      >
        <div className="max-w-[1000px] w-full mx-auto px-6 pt-6 flex items-center justify-between">
          <div className="text-lg font-medium">Justin Mathais</div>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            tabIndex={open ? 0 : -1}
            className="p-2 -mr-2 text-[#1C1410]"
          >
            <X size={26} />
          </button>
        </div>

        <nav className="flex-1 flex flex-col items-start justify-center gap-2 px-8">
          {navLinks.map((item, i) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setOpen(false)}
              tabIndex={open ? 0 : -1}
              style={{ transitionDelay: open ? `${50 + i * 60}ms` : "0ms" }}
              className={`
                text-4xl leading-tight text-[#1C1410] py-2
                transition-all duration-400 ease-out
                ${open ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}
              `}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}
