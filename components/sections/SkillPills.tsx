'use client';

import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
};

const pill = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0 },
};

export default function SkillPills({ items }: { items: string[] }) {
  return (
    <motion.div
      className="flex flex-wrap gap-3"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "0px 0px -40px 0px" }}
      variants={container}
    >
      {items.map((tech) => (
        <motion.span
          key={tech}
          variants={pill}
          transition={{ duration: 0.35, ease: "easeOut" }}
          className="
            px-3.5 py-1.5 rounded-full border border-[#C8BAA6] text-sm
            transition-all duration-200
            hover:scale-110 hover:border-[#B95E3C] hover:text-[#B95E3C]
          "
        >
          {tech}
        </motion.span>
      ))}
    </motion.div>
  );
}
