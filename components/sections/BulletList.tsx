'use client';

import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const line = {
  hidden: { opacity: 0, x: -8 },
  visible: { opacity: 1, x: 0 },
};

export default function BulletList({
  items,
  className = "",
}: {
  items: string[];
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -40px 0px" }}
      variants={container}
    >
      {items.map((item) => (
        <motion.p key={item} variants={line} transition={{ duration: 0.3, ease: "easeOut" }}>
          — {item}
        </motion.p>
      ))}
    </motion.div>
  );
}
