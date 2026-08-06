"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import Container from "@/components/layout/Container";
import Reveal from "@/components/animations/Reveal";
import TimelineItem from "@/components/sections/TimelineItem";

interface QualificationItem {
  year: string;
  role: string;
  org: string;
  desc?: string;
  tag?: string;
  cgpa?: string;
}

export default function Qualifications() {
  const [tab, setTab] = useState<"experience" | "education">("experience");

  const experience: QualificationItem[] = [
    {
      year: "Aug 2026 — Present",
      role: "Software Engineer 1",
      org: "Elsevier (RELX Group), Bengaluru, Karnataka",
      desc: "Onboarding into Elsevier's engineering organization, building foundational knowledge of the team's codebase and architecture alongside senior engineers, and ramping up on Elsevier's development standards including code review and CI/CD processes.",
    },
    {
      year: "Oct 2025 — Dec 2025",
      role: "Full Stack Development Intern",
      org: "Locale Homestays, Remote / OCI",
      desc: "Built the frontend with Next.js focused on mobile responsiveness, designed backend REST APIs with Node.js and Express integrated with Supabase, managed Oracle Cloud Infrastructure hosting, and built CI/CD pipelines for automated deployments.",
    },
    {
      year: "June 2023 — Mar 2024",
      role: "Cloud Associate",
      org: "Niveus Solutions, Udupi, Karnataka",
      desc: "Assisted in designing and deploying solutions on Google Cloud Platform (Compute Engine, Cloud Storage, IAM), automated cloud workflows, and developed a solid understanding of cloud-native architecture and CI/CD best practices.",
    },
    {
      year: "Oct 2022 — Mar 2023",
      role: "Web Developer Intern / Co-Developer",
      org: "Youace (Startup Project), Mangaluru",
      desc: "Designed and developed the Youace website from scratch using Next.js, implemented key features, and optimized frontend performance as part of a BCA startup initiative.",
    },
  ];

  const education: QualificationItem[] = [
    {
      year: "Aug 2024 — July 2026",
      role: "Masters in Computer Application (MCA)",
      org: "St Aloysius Deemed to be University AIMIT, Mangaluru",
      tag: "Masters",
      cgpa: "CGPA 7.9",
      desc: "Completed a Master's degree focused on advanced software development, cloud computing, and applied computer science.",
    },
    {
      year: "Aug 2020 — May 2023",
      role: "Bachelors in Computer Application (BCA)",
      org: "St Aloysius College (Autonomous), Mangaluru",
      tag: "Degree",
      cgpa: "CGPA 7.34",
      desc: "Studied core computer science and application development fundamentals, laying the foundation for a full-stack development career.",
    },
    {
      year: "2018 — 2020",
      role: "Pre-University Science",
      org: "St Mary's College, Shirva",
      tag: "PUC",
      cgpa: "62%",
      desc: "Completed pre-university education with a focus on science and mathematics.",
    },
  ];

  const data = tab === "experience" ? experience : education;
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start center", "end center"],
  });
  const lineProgress = useSpring(scrollYProgress, { stiffness: 200, damping: 30 });

  return (
    <Container>
      {/* Header */}
      <div className="mb-12 space-y-4">
        <Reveal delay={0}>
          <p className="text-sm uppercase tracking-widest">
            Qualifications
          </p>
        </Reveal>

        <Reveal delay={0.08}>
          <h2 className="text-4xl">
            My experience and education
          </h2>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="max-w-2xl">
            Browse my work history and academic background below.
          </p>
        </Reveal>
      </div>

      {/* Toggle */}
      <div className="flex gap-2 mb-10">
        <button
          onClick={() => setTab("experience")}
          className={`px-4 py-2 rounded-full border ${
            tab === "experience"
              ? "bg-[#1C1410] text-[#FAF7F2]"
              : "border-[#C8BAA6]"
          }`}
        >
          Experience
        </button>

        <button
          onClick={() => setTab("education")}
          className={`px-4 py-2 rounded-full border ${
            tab === "education"
              ? "bg-[#1C1410] text-[#FAF7F2]"
              : "border-[#C8BAA6]"
          }`}
        >
          Education
        </button>
      </div>

      {/* Timeline */}
      <div ref={timelineRef} className="relative pl-8">
        <div className="absolute left-[7px] top-2 bottom-2 w-px bg-[#C8BAA6]" />
        <motion.div
          className="absolute left-[7px] top-2 bottom-2 w-px bg-[#B95E3C] origin-top"
          style={{ scaleY: lineProgress }}
        />

        <AnimatePresence mode="wait">
          <motion.div
            key={tab}
            initial={{ opacity: 0, x: tab === "experience" ? -16 : 16 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: tab === "experience" ? 16 : -16 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
          >
            {data.map((item, i) => (
              <TimelineItem
                key={`${tab}-${i}`}
                item={item}
                index={i}
                isLast={i === data.length - 1}
              />
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </Container>
  );
}
