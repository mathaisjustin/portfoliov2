import Container from "@/components/layout/Container";
import Reveal from "@/components/animations/Reveal";

const achievements = [
  { name: "1st Place — Impetus Innovative Project", year: "2023" },
  { name: "Secured Funding — SmartPark (481/500)", year: "2023" },
  { name: "Constructive Activity Prize", year: "2022" },
];

const leadership = [
  { name: "Vice President, Students Council", year: "2022 – 2023" },
  { name: "Secretary, Computer Animations Association", year: "" },
  { name: "Admin Block Secretary", year: "2021 – 2022" },
  { name: "Git & GitHub Workshop Conductor", year: "" },
  { name: "Launched Open Mic Season 1", year: "" },
  { name: "Organized Aloysian Got Talent — Season 3", year: "" },
];

export default function Certifications() {
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
<div className="space-y-10">

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
          <div className="flex items-center gap-3 px-4 py-2 rounded-full border border-[#C8BAA6]">
            <span className="text-sm">{item.name}</span>
            <span className="text-xs opacity-60">{item.year}</span>
          </div>
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
          <div className="flex items-center gap-3 px-4 py-2 rounded-full border border-[#C8BAA6]">
            <span className="text-sm">{item.name}</span>
            {item.year && <span className="text-xs opacity-60">{item.year}</span>}
          </div>
        </Reveal>
      ))}
    </div>
  </div>

</div>

      </Container>
  );
}
