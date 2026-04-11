import Container from "@/components/layout/Container";

const blogs = [
  {
    date: "April 2026",
    title: "How I approach building scalable web apps",
    desc: "A deep dive into my development process, architecture decisions, and how I structure modern applications.",
  },
  {
    date: "March 2026",
    title: "Designing clean and usable interfaces",
    desc: "Exploring the balance between aesthetics and usability in modern UI design.",
  },
  {
    date: "February 2026",
    title: "Lessons from building real-world projects",
    desc: "Key takeaways and mistakes I’ve learned while working on production systems.",
  },
  {
    date: "January 2026",
    title: "Why system design matters early",
    desc: "How thinking in systems early helps avoid scaling issues later.",
  },
  {
    date: "December 2025",
    title: "From idea to deployment",
    desc: "Breaking down how I take projects from concept to production-ready.",
  },
  {
    date: "November 2025",
    title: "Writing better code as a team",
    desc: "Lessons on collaboration, readability, and maintainability in teams.",
  },
];

export default function Blogs() {
  return (
      <Container>
        
        {/* Header */}
        <div className="mb-16 space-y-4">
          <p className="text-sm uppercase tracking-widest">
            Blogs
          </p>

          <h2 className="text-4xl">
            Thoughts, ideas, and insights
          </h2>

          <p className="max-w-2xl">
            I write about development, design, and the process of building
            meaningful digital products.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {blogs.map((blog, i) => (
            <div
              key={i}
              className="group border border-[#C8BAA6] rounded-2xl p-6 space-y-4 bg-[#EDE8DF] hover:shadow-sm transition"
            >
              <p className="text-xs opacity-70">
                {blog.date}
              </p>

              <h3 className="text-xl font-instrument leading-snug">
                {blog.title}
              </h3>

              <p className="text-sm opacity-80">
                {blog.desc}
              </p>

              <a
                href="#"
                className="inline-flex items-center gap-2 text-sm pt-2"
              >
                Read More
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
              </a>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex justify-center">
          <button className="px-6 py-3 rounded-full border border-[#1C1410] hover:bg-[#1C1410] hover:text-[#FAF7F2] transition">
            View all blogs →
          </button>
        </div>

      </Container>
  );
}