'use client';

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const MIN_DISPLAY_MS = 2200;
const FLIGHT_MS = 650;
const MARK_WIDTH = 380;
const MARK_HEIGHT = 214;
// Safety net: if the page's "load" event never fires in time (a stalled
// asset on a bad connection, etc.) start the finish sequence anyway so the
// overlay can't get stuck up forever.
const MAX_WAIT_MS = 8000;
// The site's links are plain <a> tags, so every navigation (including
// "back to home") is a full page load — this flag is how we tell a real
// first visit from a repeat one within the same browser session, so the
// intro only ever plays once.
const SESSION_KEY = "mj-loading-shown";

function hasShownThisSession(): boolean {
  try {
    return sessionStorage.getItem(SESSION_KEY) === "1";
  } catch {
    return false;
  }
}

function markShownThisSession() {
  try {
    sessionStorage.setItem(SESSION_KEY, "1");
  } catch {
    // Ignore (e.g. storage disabled) — worst case the intro replays.
  }
}

interface FlightTarget {
  x: number;
  y: number;
  scale: number;
}

interface NetworkInformation {
  effectiveType?: string;
  saveData?: boolean;
}

function isSlowConnection(): boolean {
  const connection = (navigator as Navigator & { connection?: NetworkInformation })
    .connection;
  if (!connection) return false;
  if (connection.saveData) return true;
  return ["slow-2g", "2g", "3g"].includes(connection.effectiveType ?? "");
}

export default function LoadingScreen() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [loading, setLoading] = useState(isHome);
  const [flying, setFlying] = useState(false);
  const [flight, setFlight] = useState<FlightTarget | null>(null);
  const markRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isHome) return;

    // Every navigation on this site is a full page load, so without this
    // check the intro would replay on every trip back to "/". Only ever
    // play it once per browser session, and skip straight to the landed
    // state instantly (no overlay flash) on every visit after that.
    if (hasShownThisSession()) {
      setLoading(false);
      // Deferred so Navbar's listener (mounted in the same commit) is
      // guaranteed to be attached before this fires.
      window.setTimeout(() => window.dispatchEvent(new Event("mj-loading-flight-land")), 0);
      return;
    }

    // On a slow/metered connection, skip the animated reveal entirely —
    // waiting through a multi-second fill-and-fly sequence on top of an
    // already-slow load only makes the wait feel longer.
    if (isSlowConnection()) {
      markShownThisSession();
      window.dispatchEvent(new Event("mj-loading-flight-land"));
      setLoading(false);
      return;
    }

    const start = performance.now();
    let finished = false;

    const finish = () => {
      if (finished) return;
      finished = true;

      const elapsed = performance.now() - start;
      const remaining = Math.max(0, MIN_DISPLAY_MS - elapsed);

      window.setTimeout(() => {
        const srcEl = markRef.current;
        const dstEl = document.querySelector<HTMLElement>("[data-navbar-logo-target]");

        if (srcEl && dstEl) {
          const srcRect = srcEl.getBoundingClientRect();
          const dstRect = dstEl.getBoundingClientRect();
          setFlight({
            x: dstRect.left + dstRect.width / 2 - (srcRect.left + srcRect.width / 2),
            y: dstRect.top + dstRect.height / 2 - (srcRect.top + srcRect.height / 2),
            scale: dstRect.width / srcRect.width,
          });
        }

        setFlying(true);
        window.setTimeout(() => {
          // Reveal the real navbar logo only once the flying copy has
          // actually landed, so the two are never visible together.
          markShownThisSession();
          window.dispatchEvent(new Event("mj-loading-flight-land"));
          setLoading(false);
        }, FLIGHT_MS);
      }, remaining);
    };

    if (document.readyState === "complete") {
      finish();
    } else {
      window.addEventListener("load", finish);
    }

    // However slow the connection, never let the overlay (and the hidden
    // navbar logo behind it) get stuck waiting on "load" indefinitely —
    // skip straight to an instant reveal instead of the normal sequence.
    const maxWaitTimer = window.setTimeout(() => {
      if (finished) return;
      finished = true;
      markShownThisSession();
      window.dispatchEvent(new Event("mj-loading-flight-land"));
      setLoading(false);
    }, MAX_WAIT_MS);

    return () => {
      window.removeEventListener("load", finish);
      window.clearTimeout(maxWaitTimer);
    };
  }, [isHome]);

  useEffect(() => {
    document.documentElement.style.overflow = loading ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [loading]);

  if (!isHome) return null;

  const fillSeconds = MIN_DISPLAY_MS / 1000;
  const flightSeconds = FLIGHT_MS / 1000;

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={false}
          data-mj-loading
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center overflow-hidden pointer-events-none"
        >
          {/* Background fades independently so it clears the instant the
              mark lands, instead of lingering through the unmount. */}
          <motion.div
            className="absolute inset-0 bg-[#FAF7F2]"
            initial={{ opacity: 1 }}
            animate={{ opacity: flying ? 0 : 1 }}
            transition={{ duration: flying ? flightSeconds : 0.3, ease: "easeInOut" }}
          />

          {/* Signature mark: reveals via wipe, then shrinks and flies to
              the navbar logo slot once loading completes. */}
          <motion.div
            ref={markRef}
            initial={{ opacity: 0, y: 6, x: 0, scale: 1, rotate: 0 }}
            animate={
              flying && flight
                ? { opacity: 1, x: flight.x, y: flight.y, scale: flight.scale, rotate: -6 }
                : { opacity: 1, x: 0, y: 0, scale: 1, rotate: 0 }
            }
            transition={
              flying
                ? { duration: flightSeconds, ease: [0.65, 0, 0.35, 1] }
                : { duration: 0.5, ease: "easeOut" }
            }
            className="relative z-10"
            style={{ width: MARK_WIDTH, height: MARK_HEIGHT }}
          >
            {/* Faint watermark copy, always fully visible underneath */}
            <Image
              src="/logos/navbar.svg"
              alt="Justin Mathais"
              width={MARK_WIDTH}
              height={MARK_HEIGHT}
              priority
              className="absolute inset-0 opacity-[0.08]"
            />

            {/* Accent copy, wiped in as the reveal progresses */}
            <motion.div
              className="absolute inset-0 overflow-hidden"
              initial={{ clipPath: "inset(0 100% 0 0)" }}
              animate={{ clipPath: "inset(0 0% 0 0)" }}
              transition={{ duration: fillSeconds * 0.85, ease: [0.65, 0, 0.35, 1] }}
            >
              <Image
                src="/logos/navbar.svg"
                alt=""
                aria-hidden="true"
                width={MARK_WIDTH}
                height={MARK_HEIGHT}
                style={{ filter: "brightness(0) saturate(100%) invert(38%) sepia(46%) saturate(662%) hue-rotate(340deg) brightness(92%) contrast(88%)" }}
              />
            </motion.div>
          </motion.div>

          {/* Progress bar beneath the mark */}
          <motion.div
            className="relative mt-10 h-1.5 w-56 overflow-hidden rounded-full bg-[#655441]/10 shadow-[inset_0_1px_2px_rgba(0,0,0,0.06)]"
            animate={{ opacity: flying ? 0 : 1, y: flying ? 6 : 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <motion.div
              className="absolute inset-y-0 left-0 rounded-full"
              style={{
                background: "linear-gradient(90deg, #B95E3C 0%, #C79A3B 100%)",
                boxShadow: "0 0 10px rgba(185,94,60,0.45)",
              }}
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: fillSeconds, ease: [0.65, 0, 0.35, 1] }}
            />
            {/* Traveling highlight sweeping across the fill */}
            <motion.div
              className="absolute inset-y-0 w-10"
              style={{
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.55), transparent)",
              }}
              initial={{ x: "-2.5rem" }}
              animate={{ x: "14rem" }}
              transition={{ duration: fillSeconds * 0.9, ease: "easeInOut", repeat: Infinity, repeatDelay: 0.15 }}
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
