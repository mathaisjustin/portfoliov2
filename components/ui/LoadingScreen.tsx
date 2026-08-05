'use client';

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const MIN_DISPLAY_MS = 2200;

export default function LoadingScreen() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [loading, setLoading] = useState(isHome);

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

  if (!isHome) return null;

  const fillSeconds = MIN_DISPLAY_MS / 1000;

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-[#FAF7F2] overflow-hidden"
        >
          {/* Signature mark, revealed left-to-right by an expanding clip. */}
          <motion.div
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6, transition: { duration: 0.35, ease: "easeIn" } }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="relative"
            style={{ width: 380, height: 214 }}
          >
            {/* Faint watermark copy, always fully visible underneath */}
            <Image
              src="/logos/navbar.svg"
              alt="Justin Mathais"
              width={380}
              height={214}
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
                width={380}
                height={214}
                style={{ filter: "brightness(0) saturate(100%) invert(38%) sepia(46%) saturate(662%) hue-rotate(340deg) brightness(92%) contrast(88%)" }}
              />
            </motion.div>
          </motion.div>

          {/* Thin progress rule beneath the mark */}
          <div className="relative mt-10 h-px w-48 overflow-hidden bg-[#655441]/15">
            <motion.div
              className="absolute inset-y-0 left-0 bg-[#B95E3C]"
              initial={{ width: "0%" }}
              animate={{ width: "100%" }}
              transition={{ duration: fillSeconds, ease: [0.65, 0, 0.35, 1] }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
