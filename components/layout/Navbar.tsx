'use client';

import { useEffect, useState } from "react";
import Image from "next/image";
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
  // TEMP: dev tuning controls for the logo — remove once size/position are finalized.
  const [logoHeight, setLogoHeight] = useState(68);
  const [logoOffsetX, setLogoOffsetX] = useState(0);
  const [logoOffsetY, setLogoOffsetY] = useState(0);
  const [logoRotate, setLogoRotate] = useState(0);
  const [navPaddingY, setNavPaddingY] = useState(16);
  const [navMaxWidth, setNavMaxWidth] = useState(1000);
  const [navLinkSize, setNavLinkSize] = useState(18);
  const LOGO_ASPECT = 1672 / 941;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="sticky top-4 z-50">
      <div className="mx-auto px-6 relative" style={{ maxWidth: navMaxWidth }}>
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
          <div
            className="px-6 flex items-center justify-between"
            style={{ paddingTop: navPaddingY, paddingBottom: navPaddingY }}
          >

            {/* Logo sits absolutely over the header so resizing it never
                affects the navbar's own height/layout. */}
            <a
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                setOpen(false);
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="absolute left-6 top-1/2 z-10 hover:opacity-70 transition-opacity"
              style={{
                transform: `translateY(calc(-50% + ${logoOffsetY}px)) translateX(${logoOffsetX}px) rotate(${logoRotate}deg)`,
                willChange: "transform",
              }}
            >
              <Image
                src="/logos/navbar.svg"
                alt="Mathis Pustia"
                width={160}
                height={90}
                priority
                style={{
                  height: logoHeight,
                  width: logoHeight * LOGO_ASPECT,
                  maxWidth: "none",
                }}
              />
            </a>

            {/* Spacer reserving the logo's place in flex flow so nav links
                don't shift; sized to the base logo footprint, not the live value. */}
            <div className="invisible" style={{ height: 32, width: 32 * LOGO_ASPECT }} />

            {/* Desktop nav */}
            <nav
              className="hidden md:flex items-center gap-8 text-[#5C4A36]"
              style={{ fontSize: navLinkSize }}
            >
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
                  text-xl text-[#1C1410] px-4 py-3 rounded-xl
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

      {/* TEMP dev tuning panel — floats outside the navbar entirely so it
          can never affect header layout. Remove once logo size/position
          are finalized. */}
      <div className="hidden lg:grid fixed bottom-4 right-4 z-[100] grid-cols-1 gap-2 text-xs text-[#5C4A36] rounded-lg px-3 py-2">
        <label className="flex items-center gap-2">
          <span className="w-14 shrink-0">Size</span>
          <input
            type="range"
            min={16}
            max={80}
            value={logoHeight}
            onChange={(e) => setLogoHeight(Number(e.target.value))}
          />
          <span className="w-12 shrink-0 text-right tabular-nums">{logoHeight}px</span>
        </label>
        <label className="flex items-center gap-2">
          <span className="w-14 shrink-0">X pos</span>
          <input
            type="range"
            min={-100}
            max={100}
            value={logoOffsetX}
            onChange={(e) => setLogoOffsetX(Number(e.target.value))}
          />
          <span className="w-12 shrink-0 text-right tabular-nums">{logoOffsetX}px</span>
        </label>
        <label className="flex items-center gap-2">
          <span className="w-14 shrink-0">Y pos</span>
          <input
            type="range"
            min={-100}
            max={100}
            value={logoOffsetY}
            onChange={(e) => setLogoOffsetY(Number(e.target.value))}
          />
          <span className="w-12 shrink-0 text-right tabular-nums">{logoOffsetY}px</span>
        </label>
        <label className="flex items-center gap-2">
          <span className="w-14 shrink-0">Rotate</span>
          <input
            type="range"
            min={-180}
            max={180}
            value={logoRotate}
            onChange={(e) => setLogoRotate(Number(e.target.value))}
          />
          <span className="w-12 shrink-0 text-right tabular-nums">{logoRotate}°</span>
        </label>
        <hr className="border-[#C8BAA6]/40" />
        <label className="flex items-center gap-2">
          <span className="w-14 shrink-0">Nav H</span>
          <input
            type="range"
            min={4}
            max={48}
            value={navPaddingY}
            onChange={(e) => setNavPaddingY(Number(e.target.value))}
          />
          <span className="w-12 shrink-0 text-right tabular-nums">{navPaddingY}px</span>
        </label>
        <label className="flex items-center gap-2">
          <span className="w-14 shrink-0">Nav W</span>
          <input
            type="range"
            min={600}
            max={1400}
            value={navMaxWidth}
            onChange={(e) => setNavMaxWidth(Number(e.target.value))}
          />
          <span className="w-12 shrink-0 text-right tabular-nums">{navMaxWidth}px</span>
        </label>
        <label className="flex items-center gap-2">
          <span className="w-14 shrink-0">Link sz</span>
          <input
            type="range"
            min={12}
            max={32}
            value={navLinkSize}
            onChange={(e) => setNavLinkSize(Number(e.target.value))}
          />
          <span className="w-12 shrink-0 text-right tabular-nums">{navLinkSize}px</span>
        </label>
      </div>
    </div>
  );
}
