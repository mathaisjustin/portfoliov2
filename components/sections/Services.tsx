import Container from "@/components/layout/Container";
import Reveal from "@/components/animations/Reveal";
import BulletList from "@/components/sections/BulletList";

export default function Services() {
  return (
      <Container>

        {/* Header */}
        <div className="mb-16 space-y-4">
          <Reveal delay={0}>
            <p className="text-sm uppercase tracking-widest">
              Services
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="text-4xl">
              How I can bring your ideas to life
            </h2>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="max-w-2xl">
              I offer a range of services focused on building scalable,
              well-designed, and high-performing digital products.
            </p>
          </Reveal>
        </div>

{/* Services Layout */}
<div className="grid md:grid-cols-3 gap-6 items-stretch">

  {/* LEFT: Featured Card */}
  <Reveal delay={0.1} className="md:col-span-2">
<div className="p-10 rounded-2xl bg-[#1C1410] text-[#FAF7F2] flex flex-col justify-between min-h-[420px] h-full">

  <div className="space-y-6">
    <p className="text-xs uppercase tracking-widest opacity-70 animate-badge-pulse">
      Most Popular
    </p>

<h3 className="text-4xl leading-tight font-instrument !text-[#FAF7F2]">
  Full Stack Development
</h3>

    <p className="text-sm opacity-80 max-w-lg">
      Your idea deserves a product that actually works — end to end. I take
      it from a rough concept to something real, handling everything in
      between so you don&apos;t have to juggle multiple people to get there.
    </p>

    <p className="text-sm opacity-70 max-w-lg">
      Every piece is built to fit your project, not a one-size-fits-all
      template — reliable under real usage, easy to maintain, and ready to
      grow alongside your business.
    </p>
  </div>

  <BulletList
    className="mt-8 space-y-2 text-sm opacity-70"
    items={[
      "Interfaces people enjoy using",
      "APIs and systems built to scale",
      "Data architecture suited to your problem",
      "Cloud deployment & hosting",
      "Performance optimization",
    ]}
  />

</div>
  </Reveal>

  {/* RIGHT COLUMN */}
  <div className="flex flex-col gap-6">

    {/* Card 2 */}
    <Reveal delay={0.2}>
    <div className="p-6 rounded-2xl border border-[#C8BAA6] space-y-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] hover:border-[#B95E3C]/50">
      <p className="text-xs uppercase tracking-widest">
        Infrastructure
      </p>

      <h3 className="text-xl">
        Cloud & DevOps
      </h3>

      <p className="text-sm opacity-80">
        Cloud infrastructure that stays reliable as your product grows, on
        Google Cloud Platform and AWS.
      </p>

      <BulletList
        className="text-sm opacity-70 space-y-1"
        items={[
          "Cloud infrastructure setup & management",
          "Containerized deployments",
          "CI/CD pipelines for automated releases",
        ]}
      />
    </div>
    </Reveal>

    {/* Card 3 */}
    <Reveal delay={0.3}>
    <div className="p-6 rounded-2xl border border-[#C8BAA6] space-y-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_12px_30px_rgba(0,0,0,0.08)] hover:border-[#B95E3C]/50">
      <p className="text-xs uppercase tracking-widest">
        Integrations
      </p>

      <h3 className="text-xl">
        API Integrations & Automation
      </h3>

      <p className="text-sm opacity-80">
        Connecting the tools and services your business already relies on,
        so data flows without manual busywork.
      </p>

      <BulletList
        className="text-sm opacity-70 space-y-1"
        items={["Third-party API integrations", "Payment gateway setup", "Workflow automation"]}
      />
    </div>
    </Reveal>

  </div>

</div>

      </Container>
  );
}
