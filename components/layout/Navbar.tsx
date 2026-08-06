'use client';

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import confetti from "canvas-confetti";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#qualifications" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#certifications" },
  { label: "Blogs", href: "#blogs" },
];

const LOGO_HEIGHT = 80;
const LOGO_OFFSET_X = -6;
const LOGO_OFFSET_Y = -10;
const LOGO_ROTATE = -6;
const NAV_PADDING_Y = 15;
const NAV_MAX_WIDTH = 941;
const NAV_LINK_SIZE = 17;
const LOGO_ASPECT = 1672 / 941;
const HOLD_DURATION_MS = 1200;

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [fillPercent, setFillPercent] = useState(0);
  const [charging, setCharging] = useState(false);
  // On the home page's initial load, the loading screen's signature flies
  // in and lands here — stay hidden until it arrives so there's no
  // double-image flash underneath it.
  const [logoVisible, setLogoVisible] = useState(() => pathname !== "/");
  const rafRef = useRef<number | null>(null);
  const startRef = useRef(0);
  const completedRef = useRef(false);
  const logoRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    if (pathname !== "/") return;
    const reveal = () => setLogoVisible(true);
    window.addEventListener("mj-loading-flight-land", reveal);
    // Fallback: if the flight-land event never arrives for any reason (a
    // script error, a stalled connection outlasting the loading screen's
    // own safety timeout, etc.) the logo must still show up eventually
    // instead of staying invisible forever.
    const fallback = window.setTimeout(reveal, 9000);
    return () => {
      window.removeEventListener("mj-loading-flight-land", reveal);
      window.clearTimeout(fallback);
    };
    // Intentionally run once: this only governs the initial hard-load
    // handoff, not subsequent client-side navigation back to "/".
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const stopCharging = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = null;
    setCharging(false);
    setFillPercent(0);
  };

  const startCharging = () => {
    completedRef.current = false;
    setCharging(true);
    startRef.current = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startRef.current;
      const pct = Math.min(100, (elapsed / HOLD_DURATION_MS) * 100);
      setFillPercent(pct);

      if (pct >= 100) {
        if (!completedRef.current) {
          completedRef.current = true;
          const rect = logoRef.current?.getBoundingClientRect();
          confetti({
            origin: rect
              ? {
                  x: (rect.left + rect.width / 2) / window.innerWidth,
                  y: (rect.top + rect.height / 2) / window.innerHeight,
                }
              : undefined,
            particleCount: 120,
            spread: 70,
            startVelocity: 35,
            colors: ["#B95E3C", "#C79A3B", "#1C1410", "#FAF7F2"],
          });
        }
        return;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
  };

  return (
    <div className="sticky top-4 z-50">
      <div className="mx-auto px-6 relative" style={{ maxWidth: NAV_MAX_WIDTH }}>
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
            style={{ paddingTop: NAV_PADDING_Y, paddingBottom: NAV_PADDING_Y }}
          >

            {/* Logo sits absolutely over the header so resizing it never
                affects the navbar's own height/layout. */}
            <a
              ref={logoRef}
              href="#top"
              onClick={(e) => {
                e.preventDefault();
                setOpen(false);
                if (!completedRef.current) {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }
              }}
              onPointerDown={(e) => {
                e.preventDefault();
                startCharging();
              }}
              onPointerUp={stopCharging}
              onPointerLeave={stopCharging}
              onPointerCancel={stopCharging}
              className="absolute left-6 top-1/2 z-10 select-none touch-none"
              style={{
                transform: `translateY(calc(-50% + ${LOGO_OFFSET_Y}px)) translateX(${LOGO_OFFSET_X}px) rotate(${LOGO_ROTATE}deg)`,
              }}
            >
              <span
                data-navbar-logo-target
                className="relative block"
                style={{
                  height: LOGO_HEIGHT,
                  width: LOGO_HEIGHT * LOGO_ASPECT,
                  opacity: logoVisible ? 1 : 0,
                }}
              >
                <Image
                  src="/logos/navbar.svg"
                  alt="Mathis Pustia"
                  width={160}
                  height={90}
                  priority
                  style={{
                    height: LOGO_HEIGHT,
                    width: LOGO_HEIGHT * LOGO_ASPECT,
                    maxWidth: "none",
                  }}
                />
                <Image
                  src="/logos/navbar-hover.svg"
                  alt=""
                  aria-hidden="true"
                  width={160}
                  height={90}
                  className="absolute inset-0"
                  style={{
                    height: LOGO_HEIGHT,
                    width: LOGO_HEIGHT * LOGO_ASPECT,
                    maxWidth: "none",
                    clipPath: `inset(0 ${100 - fillPercent}% 0 0)`,
                    transition: charging ? "none" : "clip-path 400ms ease-out",
                  }}
                />
              </span>
            </a>

            {/* Spacer reserving the logo's place in flex flow so nav links
                don't shift; sized to the base logo footprint, not the live value. */}
            <div className="invisible" style={{ height: 32, width: 32 * LOGO_ASPECT }} />

            {/* Desktop nav */}
            <nav
              className="hidden md:flex items-center gap-8 text-[#5C4A36]"
              style={{ fontSize: NAV_LINK_SIZE }}
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
                    bg-[#B95E3C]
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
    </div>
  );
}
