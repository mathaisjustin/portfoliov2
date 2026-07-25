import Container from "@/components/layout/Container";
import Reveal from "@/components/animations/Reveal";
import BlogLink from "@/components/blogs/BlogLink";
import { blogs } from "@/lib/blogs";

export default function BlogsPage() {
  return (
    <Container className="pt-12 pb-16">

      <Reveal delay={0}>
        <a
          href="/#blogs"
          className="inline-flex items-center gap-2 text-sm opacity-70 hover:opacity-100 transition mb-10"
        >
          ← Back to home
        </a>
      </Reveal>

      {/* Header */}
      <div className="mb-16 space-y-4">
        <Reveal delay={0.08}>
          <h1 className="text-4xl md:text-5xl leading-tight font-instrument">
            All blogs
          </h1>
        </Reveal>

        <Reveal delay={0.16}>
          <p className="max-w-2xl">
            Thoughts, ideas, and insights on development, design, and building
            meaningful digital products.
          </p>
        </Reveal>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {blogs.map((blog, i) => (
          <Reveal key={blog.slug} delay={0.1 + (i % 3) * 0.08}>
            <BlogLink
              href={`/blogs/${blog.slug}`}
              from="list"
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

    </Container>
  );
}
