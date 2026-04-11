import Container from "@/components/layout/Container";

export default function Services() {
  return (
      <Container>
        
        {/* Header */}
        <div className="mb-16 space-y-4">
          <p className="text-sm uppercase tracking-widest">
            Services
          </p>

          <h2 className="text-4xl">
            What I can help you with
          </h2>

          <p className="max-w-2xl">
            I offer a range of services focused on building scalable,
            well-designed, and high-performing digital products.
          </p>
        </div>

{/* Services Layout */}
<div className="grid md:grid-cols-3 gap-6 items-stretch">

  {/* LEFT: Featured Card */}
<div className="md:col-span-2 p-10 rounded-2xl bg-[#1C1410] text-[#FAF7F2] flex flex-col justify-between min-h-[420px]">

  <div className="space-y-6">
    <p className="text-xs uppercase tracking-widest opacity-70">
      Most Popular
    </p>

<h3 className="text-4xl leading-tight font-instrument !text-[#FAF7F2]">
  Full Stack Development
</h3>

    <p className="text-sm opacity-80 max-w-lg">
      I build complete, production-ready applications — from frontend to backend — 
      designed to scale, perform efficiently, and deliver a seamless user experience.
    </p>

    <p className="text-sm opacity-70 max-w-lg">
      From idea to deployment, I focus on creating systems that are reliable, maintainable, 
      and built with real-world usage in mind.
    </p>
  </div>

  <div className="mt-8 space-y-2 text-sm opacity-70">
    <p>— Frontend (React / Next.js)</p>
    <p>— Backend APIs & database design</p>
    <p>— Authentication & integrations</p>
    <p>— Cloud deployment & hosting</p>
    <p>— Performance optimization</p>
  </div>

</div>

  {/* RIGHT COLUMN */}
  <div className="flex flex-col gap-6">

    {/* Card 2 */}
    <div className="p-6 rounded-2xl border border-[#C8BAA6] space-y-4">
      <p className="text-xs uppercase tracking-widest">
        Infrastructure
      </p>

      <h3 className="text-xl">
        DevOps & Cloud Hosting
      </h3>

      <p className="text-sm opacity-80">
        Your infrastructure, simplified and scalable.
      </p>

      <div className="text-sm opacity-70 space-y-1">
        <p>— AWS / VPS setup</p>
        <p>— Docker containers</p>
        <p>— CI/CD pipelines</p>
      </div>
    </div>

    {/* Card 3 */}
    <div className="p-6 rounded-2xl border border-[#C8BAA6] space-y-4">
      <p className="text-xs uppercase tracking-widest">
        Entry Level
      </p>

      <h3 className="text-xl">
        Static Sites & Landing Pages
      </h3>

      <p className="text-sm opacity-80">
        Fast, clean, and responsive websites.
      </p>

      <div className="text-sm opacity-70 space-y-1">
        <p>— Custom UI design</p>
        <p>— Responsive layout</p>
        <p>— Animations & polish</p>
      </div>
    </div>

  </div>

</div>

      </Container>
  );
}