'use client';

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

interface QualificationItem {
  year: string;
  role: string;
  org: string;
  desc?: string;
  tag?: string;
  cgpa?: string;
}

export default function TimelineItem({
  item,
  index,
  isLast,
}: {
  item: QualificationItem;
  index: number;
  isLast: boolean;
}) {
  const ref = useRef<HTMLDivElement>(null);
  // "Active" = this entry's row is crossing the vertical center of the
  // viewport — gives the "you are here" highlight as you scroll past it.
  const isActive = useInView(ref, { margin: "-50% 0px -50% 0px" });

  return (
    <div ref={ref} className={`relative ${isLast ? "" : "mb-16"}`}>
      {/* Dot — entrance pop (whileInView, runs once) is kept on its own
          layer separate from the active-state recolor (plain CSS
          transition) since combining whileInView + animate on one
          motion element causes them to fight each other on fast scroll. */}
      <motion.span
        initial={{ scale: 0, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: "0px 0px -40px 0px" }}
        transition={{ type: "spring", stiffness: 300, damping: 18, delay: index * 0.08 }}
        className="absolute -left-8 top-1.5 w-3.5 h-3.5"
      >
        <span
          className={`
            block w-full h-full rounded-full border-2
            transition-[background-color,border-color,transform] duration-300 ease-out
            ${isActive ? "bg-[#B95E3C] border-[#B95E3C] scale-[1.15]" : "bg-[#FAF7F2] border-[#1C1410] scale-100"}
          `}
        />
      </motion.span>

      <motion.div
        initial={{ opacity: 0, x: 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "0px 0px -40px 0px" }}
        transition={{ duration: 0.4, ease: "easeOut", delay: index * 0.08 + 0.05 }}
      >
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <h3 className="text-2xl">{item.role}</h3>
          <p className="text-sm opacity-60 whitespace-nowrap">{item.year}</p>
        </div>

        {(item.tag || item.cgpa) && (
          <div className="flex flex-wrap items-center gap-2 mt-2">
            {item.tag && (
              <span className="text-xs px-2 py-1 rounded-full bg-[#EDE8DF] border border-[#C8BAA6]">
                {item.tag}
              </span>
            )}

            {item.cgpa && (
              <span className="text-xs px-2 py-1 rounded-full bg-[#EDE8DF] border border-[#C8BAA6]">
                {item.cgpa}
              </span>
            )}
          </div>
        )}

        <p className="text-sm opacity-70 italic mt-1">{item.org}</p>

        {item.desc && (
          <p className="text-sm opacity-80 max-w-3xl leading-relaxed mt-3">{item.desc}</p>
        )}
      </motion.div>
    </div>
  );
}
