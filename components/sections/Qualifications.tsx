"use client";

import { useState } from "react";
import Container from "@/components/layout/Container";

export default function Qualifications() {
  const [tab, setTab] = useState<"experience" | "education">("experience");

  const experience = [
    {
      year: "2024 — Present",
      role: "Senior Full Stack Developer",
      org: "Stripe, Remote",
      desc: "Leading frontend architecture for dashboard systems. Improved performance and migrated legacy codebases.",
    },
    {
      year: "2022 — 2024",
      role: "Full Stack Developer",
      org: "Shopify, London",
      desc: "Built merchant-facing features and handled API integrations using Node.js and PostgreSQL.",
    },
    {
      year: "2021 — 2022",
      role: "Junior Developer",
      org: "Agency X, Manchester",
      desc: "Delivered client websites and gained exposure to CI/CD and cloud deployments.",
    },
  ];

  const education = [
    {
      year: "2023",
      role: "AWS Solutions Architect",
      org: "Amazon Web Services",
      tag: "Certification",
    },
    {
      year: "2021 — 2022",
      role: "MSc Advanced Computer Science",
      org: "University of Edinburgh",
      tag: "Masters",
    },
    {
      year: "2017 — 2021",
      role: "BSc Computer Science",
      org: "University of Manchester",
      tag: "Degree",
    },
  ];

  const data = tab === "experience" ? experience : education;

  return (
    <Container>
      {/* Header */}
      <div className="mb-12 space-y-4">
        <p className="text-sm uppercase tracking-widest">
          Qualifications
        </p>

        <h2 className="text-4xl">
          My experience and education
        </h2>

        <p className="max-w-2xl">
          Browse my work history and academic background below.
        </p>
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
          <div
            key={i}
            className="grid md:grid-cols-[150px_1fr] gap-6 py-6 border-b border-[#C8BAA6]"
          >
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
        ))}
      </div>
    </Container>
  );
}