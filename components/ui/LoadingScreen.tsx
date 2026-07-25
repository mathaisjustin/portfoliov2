'use client';

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const MIN_DISPLAY_MS = 2800;
const PARTICLE_COUNT = 45;
const PULL_FRACTION = 0.6; // ~60% of particles actually get pulled in
const COLORS = ["#B95E3C", "#C79A3B", "#8A7860"];

interface Particle {
  id: number;
  char: "0" | "1";
  x: number; // percent
  y: number; // percent
  size: number;
  delay: number;
  pullDelay: number;
  pullDuration: number;
  opacity: number;
  color: string;
  pulled: boolean;
  floatOffset: number;
  rotate: number;
  driftX: number;
}

function makeParticles(): Particle[] {
  const totalSec = MIN_DISPLAY_MS / 1000;

  return Array.from({ length: PARTICLE_COUNT }, (_, i) => {
    // Pulled particles start at staggered times but are each given exactly
    // enough remaining duration to finish right as the fill completes —
    // so none get cut off mid-flight regardless of when they started.
    const pullDelay = Math.random() * totalSec * 0.55;
    return {
      id: i,
      char: Math.random() > 0.5 ? "1" : ("0" as "0" | "1"),
      x: 5 + Math.random() * 90,
      y: 5 + Math.random() * 90,
      size: 12 + Math.random() * 14,
      delay: Math.random() * 1.7,
      pullDelay,
      pullDuration: Math.max(0.5, totalSec - pullDelay - 0.15),
      opacity: 0.4 + Math.random() * 0.4,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      pulled: Math.random() < PULL_FRACTION,
      floatOffset: Math.random() * 10 - 5,
      rotate: Math.random() * 60 - 30,
      driftX: Math.random() * 6 - 3,
    };
  });
}

export default function LoadingScreen() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [loading, setLoading] = useState(isHome);
  // Populated client-side only (post-mount) so the randomized scatter
  // never differs between server and first client render.
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    if (!isHome) return;
    setParticles(makeParticles());
  }, [isHome]);

  useEffect(() => {
    if (!isHome) return;

    const start = performance.now();

    const finish = () => {
      const elapsed = performance.now() - start;
      const remaining = Math.max(0, MIN_DISPLAY_MS - elapsed);
      window.setTimeout(() => setLoading(false), remaining);
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish);
      return () => window.removeEventListener("load", finish);
    }
  }, [isHome]);

  useEffect(() => {
    document.documentElement.style.overflow = loading ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [loading]);

  const CENTER = 50;

  if (!isHome) return null;

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-[#FAF7F2] overflow-hidden"
        >
          {/* Binary digits: most drift gently in place; a subset get pulled
              partway toward the monogram (never reaching the exact center)
              and fade out mid-air, staggered to roughly track the fill. */}
          {particles.map((p) => {
            // Pulled particles travel all the way to the logo, but blur and
            // dissolve out progressively as they approach — the arrival
            // reads as "absorbed" rather than a visible point landing.
            return (
              <motion.span
                key={p.id}
                className="absolute font-mono select-none pointer-events-none"
                style={{ fontSize: p.size, color: p.color }}
                initial={{ opacity: 0, scale: 0.6, x: "-50%", y: "-50%", rotate: 0, filter: "blur(0px)" }}
                animate={
                  p.pulled
                    ? {
                        opacity: [0, p.opacity, p.opacity, 0],
                        scale: [0.6, 1, 0.8, 0.15],
                        rotate: [0, 0, p.rotate * 0.4, p.rotate],
                        filter: ["blur(0px)", "blur(0px)", "blur(2px)", "blur(10px)"],
                        left: [`${p.x}%`, `${p.x}%`, `${p.x + (CENTER - p.x) * 0.35}%`, `${CENTER}%`],
                        top: [`${p.y}%`, `${p.y}%`, `${p.y + (CENTER - p.y) * 0.35}%`, `${CENTER}%`],
                        x: "-50%",
                        y: "-50%",
                      }
                    : {
                        opacity: [0, p.opacity, p.opacity, p.opacity * 0.6, p.opacity],
                        rotate: [0, p.rotate * 0.3, 0, -p.rotate * 0.3, 0],
                        left: [
                          `${p.x}%`,
                          `${p.x + p.driftX}%`,
                          `${p.x}%`,
                          `${p.x - p.driftX}%`,
                          `${p.x}%`,
                        ],
                        top: [
                          `${p.y}%`,
                          `${p.y + p.floatOffset}%`,
                          `${p.y}%`,
                          `${p.y - p.floatOffset}%`,
                          `${p.y}%`,
                        ],
                        x: "-50%",
                        y: "-50%",
                      }
                }
                transition={
                  p.pulled
                    ? {
                        duration: p.pullDuration,
                        delay: p.pullDelay,
                        times: [0, 0.2, 0.65, 1],
                        ease: ["easeOut", "easeIn", "easeIn"],
                      }
                    : {
                        duration: 4 + Math.random() * 2,
                        delay: p.delay,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }
                }
              >
                {p.char}
              </motion.span>
            );
          })}

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: [0.8, 1.06, 1] }}
            exit={{ opacity: 0, scale: 1.1, y: -8, transition: { duration: 0.4, ease: "easeIn" } }}
            transition={{
              opacity: { duration: 0.4, ease: "easeOut" },
              scale: { duration: 0.6, times: [0, 0.7, 1], ease: "easeOut" },
            }}
            className="relative z-10"
            style={{ width: 220, height: 220 }}
          >
            {/* Faint base monogram — always visible as a watermark */}
            <Image
              src="/logos/mj-monogram.svg"
              alt="Justin Mathais"
              width={220}
              height={220}
              priority
              className="absolute inset-0 opacity-10"
            />

            {/* Accent-colored copy that fills in bottom-to-top like liquid
                rising, synced with the particles being pulled toward it.
                A brief settle-pulse plays right as the fill completes. */}
            <motion.div
              className="absolute inset-0 overflow-hidden"
              initial={{ clipPath: "inset(100% 0 0 0)", scale: 1 }}
              animate={{
                // Stays completely empty while the digits are still
                // scattering, then rises only once they're actually
                // arriving at the logo, settling in at the end.
                clipPath: ["inset(100% 0 0 0)", "inset(100% 0 0 0)", "inset(0% 0 0 0)"],
                scale: [1, 1, 1, 1.08, 1],
              }}
              transition={{
                clipPath: {
                  duration: MIN_DISPLAY_MS / 1000,
                  times: [0, 0.58, 1],
                  ease: ["easeIn", "easeOut"],
                },
                scale: {
                  duration: MIN_DISPLAY_MS / 1000,
                  times: [0, 0.58, 0.92, 0.97, 1],
                  ease: "easeOut",
                },
              }}
            >
              <Image
                src="/logos/mj-monogram-accent.svg"
                alt=""
                aria-hidden="true"
                width={220}
                height={220}
              />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
