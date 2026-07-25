import { notFound } from "next/navigation";
import Container from "@/components/layout/Container";
import Reveal from "@/components/animations/Reveal";
import BlogBackLink from "@/components/blogs/BlogBackLink";
import { blogs } from "@/lib/blogs";

export async function generateStaticParams() {
  return blogs.map((post) => ({ slug: post.slug }));
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogs.find((b) => b.slug === slug);

  if (!post) notFound();

  return (
    <Container className="pt-12 pb-16 max-w-3xl">

      <Reveal delay={0}>
        <BlogBackLink />
      </Reveal>

      <div className="mb-10 space-y-4">
        <Reveal delay={0.05}>
          <p className="text-sm uppercase tracking-widest">
            {post.date}
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <h1 className="text-4xl md:text-5xl leading-tight font-instrument">
            {post.title}
          </h1>
        </Reveal>
      </div>

      <Reveal delay={0.16}>
        <div className="rounded-2xl bg-[#EDE8DF] border border-[#C8BAA6] px-4 py-2 mb-10">
          <p className="text-xs uppercase tracking-widest opacity-60">
            Preview
          </p>
          <p className="text-sm opacity-80">
            This is placeholder content — the real post will replace this once the blog is live.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.22}>
        <div className="space-y-6">
          {post.content.map((paragraph, i) => (
            <p key={i} className="leading-relaxed opacity-80">
              {paragraph}
            </p>
          ))}
        </div>
      </Reveal>

    </Container>
  );
}
