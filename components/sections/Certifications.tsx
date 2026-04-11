import Container from "@/components/layout/Container";

export default function Certifications() {
  return (
      <Container>
        
        {/* Header */}
        <div className="mb-16 space-y-4">
          <p className="text-sm uppercase tracking-widest">
            Certifications
          </p>

          <h2 className="text-4xl">
            Certifications and achievements
          </h2>

          <p className="max-w-2xl">
            A selection of certifications that reflect my continuous learning
            and commitment to improving my skills.
          </p>
        </div>

{/* Certifications Content */}
<div className="space-y-10">

  {/* Cloud & Infrastructure */}
  <div className="space-y-4">
    <p className="text-sm uppercase tracking-widest">
      Cloud & Infrastructure
    </p>

    <div className="flex flex-wrap gap-3">
      {[
        { name: "AWS Solutions Architect — Associate", year: "2023" },
        { name: "Professional Cloud Developer", year: "2023" },
        { name: "Certified Kubernetes Administrator", year: "2024" },
        { name: "Terraform Associate", year: "2023" },
      ].map((cert) => (
        <div
          key={cert.name}
          className="flex items-center gap-3 px-4 py-2 rounded-full border border-[#C8BAA6]"
        >
          <span className="text-sm">{cert.name}</span>
          <span className="text-xs opacity-60">{cert.year}</span>
        </div>
      ))}
    </div>
  </div>

  {/* Development */}
  <div className="space-y-4">
    <p className="text-sm uppercase tracking-widest">
      Development
    </p>

    <div className="flex flex-wrap gap-3">
      {[
        { name: "Meta Front-End Developer", year: "2022" },
        { name: "GitHub Actions Certified", year: "2024" },
        { name: "MongoDB Associate Developer", year: "2022" },
        { name: "GraphQL Associate Developer", year: "2023" },
      ].map((cert) => (
        <div
          key={cert.name}
          className="flex items-center gap-3 px-4 py-2 rounded-full border border-[#C8BAA6]"
        >
          <span className="text-sm">{cert.name}</span>
          <span className="text-xs opacity-60">{cert.year}</span>
        </div>
      ))}
    </div>
  </div>

</div>

      </Container>
  );
}