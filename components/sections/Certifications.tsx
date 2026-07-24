"use client";

import { useState } from "react";
import Container from "@/components/layout/Container";
import Reveal from "@/components/animations/Reveal";
import Modal from "@/components/ui/Modal";

interface Item {
  name: string;
  year: string;
  description: string;
  image?: string;
}

const achievements: Item[] = [
  {
    name: "1st Place — Impetus Innovative Project",
    year: "2023",
    description:
      "Won 1st place at the Impetus Innovative Project competition with SmartPark, a smart parking management system using real-time computer vision monitoring.",
  },
  {
    name: "Secured Funding — SmartPark (481/500)",
    year: "2023",
    description:
      "Secured project funding for SmartPark after scoring 481 out of 500, recognizing the project's technical depth and real-world viability.",
  },
  {
    name: "Constructive Activity Prize",
    year: "2022",
    description:
      "Recognized with the Constructive Activity Prize for meaningful contribution and involvement beyond academics.",
  },
];

const leadership: Item[] = [
  {
    name: "Vice President, Students Council",
    year: "2022 – 2023",
    description:
      "Served as Vice President of the Students Council, representing student interests and helping organize campus-wide events and initiatives.",
  },
  {
    name: "Secretary, Computer Animations Association",
    year: "",
    description:
      "Managed operations and events for the Computer Animations Association as Secretary.",
  },
  {
    name: "Admin Block Secretary",
    year: "2021 – 2022",
    description:
      "Handled administrative coordination and communication as Admin Block Secretary.",
  },
  {
    name: "Git & GitHub Workshop Conductor",
    year: "",
    description:
      "Conducted a hands-on workshop teaching Git and GitHub fundamentals to fellow students.",
  },
  {
    name: "Launched Open Mic Season 1",
    year: "",
    description:
      "Founded and launched the first season of Open Mic, creating a platform for students to showcase talent.",
  },
  {
    name: "Organized Aloysian Got Talent — Season 3",
    year: "",
    description:
      "Organized the third season of Aloysian Got Talent, a campus-wide talent show event.",
  },
];

export default function Certifications() {
  const [selected, setSelected] = useState<Item | null>(null);

  return (
      <Container>

        {/* Header */}
        <div className="mb-16 space-y-4">
          <Reveal delay={0}>
            <p className="text-sm uppercase tracking-widest">
              Achievements
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="text-4xl">
              Achievements and leadership
            </h2>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="max-w-2xl">
              Milestones and leadership roles from my time as a student and
              developer.
            </p>
          </Reveal>
        </div>

{/* Content */}
<div className="space-y-12">

  {/* Achievements */}
  <div className="space-y-4">
    <Reveal delay={0.1}>
      <p className="text-sm uppercase tracking-widest">
        Achievements
      </p>
    </Reveal>

    <div className="flex flex-wrap gap-3">
      {achievements.map((item, i) => (
        <Reveal key={item.name} delay={0.15 + i * 0.06}>
          <button
            onClick={() => setSelected(item)}
            className="flex items-center gap-2 px-5 py-3 rounded-full bg-[#EDE8DF]/70 border border-[#C8BAA6]/60 hover:bg-[#EDE8DF] transition cursor-pointer text-left"
          >
            <span className="text-base">{item.name}</span>
            <span className="text-xs opacity-50">· {item.year}</span>
          </button>
        </Reveal>
      ))}
    </div>
  </div>

  {/* Leadership & Extracurricular */}
  <div className="space-y-4">
    <Reveal delay={0.1}>
      <p className="text-sm uppercase tracking-widest">
        Leadership & Extracurricular
      </p>
    </Reveal>

    <div className="flex flex-wrap gap-3">
      {leadership.map((item, i) => (
        <Reveal key={item.name} delay={0.15 + i * 0.06}>
          <button
            onClick={() => setSelected(item)}
            className="flex items-center gap-2 px-5 py-3 rounded-full bg-[#EDE8DF]/70 border border-[#C8BAA6]/60 hover:bg-[#EDE8DF] transition cursor-pointer text-left"
          >
            <span className="text-base">{item.name}</span>
            {item.year && <span className="text-xs opacity-50">· {item.year}</span>}
          </button>
        </Reveal>
      ))}
    </div>
  </div>

</div>

        {selected && (
          <Modal onClose={() => setSelected(null)}>
            <div className="space-y-4">
              <div className="space-y-1">
                <h3 className="text-2xl leading-snug pr-8">{selected.name}</h3>
                {selected.year && (
                  <p className="text-sm opacity-60">{selected.year}</p>
                )}
              </div>

              <p className="text-sm leading-relaxed opacity-80">
                {selected.description}
              </p>

              {selected.image && (
                <img
                  src={selected.image}
                  alt={selected.name}
                  className="w-full rounded-xl border border-[#C8BAA6]/60"
                />
              )}
            </div>
          </Modal>
        )}

      </Container>
  );
}
