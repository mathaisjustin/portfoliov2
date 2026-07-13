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

  return (
    <div className="sticky top-4 z-50">
      <div className="max-w-[1000px] mx-auto px-6 relative">
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

            {/* Mobile hamburger / close toggle */}
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              className="md:hidden p-2 -mr-2 text-[#1C1410]"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>

          </div>
        </header>

        {/* Mobile dropdown popup — a small card under the navbar, not a
            full-screen takeover. Always mounted; visibility driven by
            plain CSS transitions on `open`. */}
        <div
          aria-hidden={!open}
          className={`
            md:hidden absolute left-6 right-6 top-full mt-3 z-[60]
            origin-top rounded-2xl border border-[#C8BAA6]/50
            bg-[#FAF7F2]/95 backdrop-blur-lg
            shadow-[0_16px_40px_rgba(0,0,0,0.12)]
            overflow-hidden
            transition-all duration-250 ease-out
            ${open ? "opacity-100 scale-100 pointer-events-auto" : "opacity-0 scale-95 pointer-events-none"}
          `}
        >
          <nav className="flex flex-col p-3">
            {navLinks.map((item, i) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setOpen(false)}
                tabIndex={open ? 0 : -1}
                style={{ transitionDelay: open ? `${i * 30}ms` : "0ms" }}
                className={`
                  text-lg text-[#1C1410] px-4 py-3 rounded-xl
                  hover:bg-[#EDE8DF]
                  transition-all duration-200 ease-out
                  ${open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-1"}
                `}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </div>

      {/* Backdrop — dims the page and closes the popup on tap outside */}
      <div
        aria-hidden="true"
        onClick={() => setOpen(false)}
        className={`
          md:hidden fixed inset-0 z-[55] bg-[#1C1410]/20
          transition-opacity duration-250 ease-out
          ${open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}
        `}
      />
    </div>
  );
}
