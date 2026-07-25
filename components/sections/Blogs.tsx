import Container from "@/components/layout/Container";
import Reveal from "@/components/animations/Reveal";
import BlogLink from "@/components/blogs/BlogLink";
import { blogs } from "@/lib/blogs";

export default function Blogs() {
  const featured = blogs;

  return (
      <Container>

        {/* Header */}
        <div className="mb-16 space-y-4">
          <Reveal delay={0}>
            <p className="text-sm uppercase tracking-widest">
              Blogs
            </p>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="text-4xl">
              Thoughts, ideas, and insights
            </h2>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="max-w-2xl">
              I write about development, design, and the process of building
              meaningful digital products.
            </p>
          </Reveal>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {featured.map((blog, i) => (
            <Reveal key={blog.slug} delay={0.1 + (i % 3) * 0.08}>
              <BlogLink
                href={`/blogs/${blog.slug}`}
                from="home"
                className="group flex flex-col h-full border border-[#C8BAA6] rounded-2xl p-6 bg-[#EDE8DF] hover:shadow-sm transition"
              >
                <div className="space-y-4">
                  <p className="text-xs opacity-70">
                    {blog.date}
                  </p>

                  <h3 className="text-xl font-instrument leading-snug">
                    {blog.title}
                  </h3>

                  <p className="text-sm opacity-80">
                    {blog.desc}
                  </p>
                </div>

                <span className="inline-flex items-center gap-2 text-sm pt-4 mt-auto">
                  Read More
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </BlogLink>
            </Reveal>
          ))}
        </div>

        {/* Bottom CTA */}
        <Reveal delay={0.2}>
          <div className="mt-12 flex justify-center">
            <a
              href="/blogs"
              className="px-6 py-3 rounded-full border border-[#1C1410] hover:bg-[#1C1410] hover:text-[#FAF7F2] transition"
            >
              View all blogs →
            </a>
          </div>
        </Reveal>

      </Container>
  );
}
