export interface BlogPost {
  slug: string;
  date: string;
  title: string;
  desc: string;
  content: string[];
}

export const blogs: BlogPost[] = [
  {
    slug: "how-i-approach-building-scalable-web-apps",
    date: "April 2026",
    title: "How I approach building scalable web apps",
    desc: "A deep dive into my development process, architecture decisions, and how I structure modern applications.",
    content: [
      "This post is a placeholder. Once the blog is live, this space will walk through the actual process behind planning and building scalable web applications — from initial architecture decisions to the tradeoffs made along the way.",
      "Expect real examples, code snippets, and lessons learned from production systems rather than theory alone.",
    ],
  },
  {
    slug: "designing-clean-and-usable-interfaces",
    date: "March 2026",
    title: "Designing clean and usable interfaces",
    desc: "Exploring the balance between aesthetics and usability in modern UI design.",
    content: [
      "This post is a placeholder. The real version will explore how visual design and usability intersect, with concrete before/after examples from real interfaces.",
    ],
  },
  {
    slug: "lessons-from-building-real-world-projects",
    date: "February 2026",
    title: "Lessons from building real-world projects",
    desc: "Key takeaways and mistakes I’ve learned while working on production systems.",
    content: [
      "This post is a placeholder. The final version will cover real mistakes, what they cost, and what changed as a result — written from direct experience shipping production systems.",
    ],
  },
  {
    slug: "why-system-design-matters-early",
    date: "January 2026",
    title: "Why system design matters early",
    desc: "How thinking in systems early helps avoid scaling issues later.",
    content: [
      "This post is a placeholder. It will eventually cover why early system design decisions compound over time, and how to think about scale before it becomes a problem.",
    ],
  },
  {
    slug: "from-idea-to-deployment",
    date: "December 2025",
    title: "From idea to deployment",
    desc: "Breaking down how I take projects from concept to production-ready.",
    content: [
      "This post is a placeholder. The real post will break down the full journey from a rough idea to a deployed, production-ready product.",
    ],
  },
  {
    slug: "writing-better-code-as-a-team",
    date: "November 2025",
    title: "Writing better code as a team",
    desc: "Lessons on collaboration, readability, and maintainability in teams.",
    content: [
      "This post is a placeholder. The real version will dig into what makes code genuinely maintainable in a team setting, beyond just style guides and linters.",
    ],
  },
];
