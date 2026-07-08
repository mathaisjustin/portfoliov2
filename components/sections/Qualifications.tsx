"use client";

import { useState } from "react";
import Container from "@/components/layout/Container";
import Reveal from "@/components/animations/Reveal";

export default function Qualifications() {
  const [tab, setTab] = useState<"experience" | "education">("experience");

  const experience = [
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

  const education = [
    {
      year: "Aug 2024 — Present",
      role: "Masters in Computer Application (MCA)",
      org: "St Aloysius Deemed to be University AIMIT, Mangaluru",
      tag: "Masters",
    },
    {
      year: "Aug 2020 — May 2023",
      role: "Bachelors in Computer Application (BCA)",
      org: "St Aloysius College (Autonomous), Mangaluru — CGPA 7.34",
      tag: "Degree",
    },
    {
      year: "2018 — 2020",
      role: "Pre-University Science",
      org: "St Mary's College, Shirva — 62%",
      tag: "PUC",
    },
  ];

  const data = tab === "experience" ? experience : education;

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
      <div className="border-t border-[#C8BAA6]">
        {data.map((item, i) => (
          <Reveal key={`${tab}-${i}`} delay={i * 0.08}>
            <div className="grid md:grid-cols-[150px_1fr] gap-6 py-6 border-b border-[#C8BAA6]">
              {/* LEFT */}
              <div className="space-y-2">
                <p className="text-sm">{item.year}</p>

                {"tag" in item && (
                  <span className="text-xs px-2 py-1 rounded-full bg-[#EDE8DF] border border-[#C8BAA6] inline-block">
                    {item.tag}
                  </span>
                )}
              </div>

              {/* RIGHT */}
              <div className="space-y-2">
                <h3 className="text-xl font-medium">
                  {item.role}
                </h3>

                <p className="text-sm opacity-70 italic">
                  {item.org}
                </p>

                {"desc" in item && (
                  <p className="text-sm opacity-80 max-w-xl">
                    {item.desc}
                  </p>
                )}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Container>
  );
}
