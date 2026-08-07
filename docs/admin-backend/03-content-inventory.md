# Content inventory — what becomes editable

Every hardcoded string/array/image found in the current codebase, and where
it moves to. This is the source of truth for `db/seed.sql` (so the DB starts
with exactly today's content) and for which components need to switch from
static imports to DB reads.

## `site_content` rows

### `navbar`
Source: `components/layout/Navbar.tsx`
```json
{ "logoText": "..." }
```
(Navbar is mostly structural — only branding text/logo image, if any, is editable; nav links stay code-defined since they map to page anchors.)

### `hero`
Source: `components/sections/Hero.tsx`
```json
{
  "eyebrow": "Tech Enthusiast · Lifelong Learner · Problem Solver",
  "name": "I'm Justin Mathais",
  "body": "From wiring up cloud infrastructure...",
  "primaryCta": { "label": "View Resume", "href": "/resume" },
  "secondaryCta": { "label": "Explore Projects", "href": "#projects" },
  "portraitImageUrl": "/images/portfolio.png"
}
```
`HelloRotator.tsx`'s multilingual greeting list stays hardcoded — it's a
design flourish (curated language sequence), not editable copy. Flag if you
want it editable too.

### `about`
Source: `components/sections/About.tsx`
```json
{
  "eyebrow": "About Me",
  "heading": "Building things that matter, one project at a time.",
  "paragraphs": ["...", "..."],
  "ctaLabel": "Know More",
  "skillGroups": [
    { "title": "Programming", "items": ["Python", "JavaScript", "TypeScript"] },
    { "title": "Web Development", "items": [...] },
    { "title": "Databases", "items": [...] },
    { "title": "DevOps & Cloud", "items": [...] }
  ]
}
```

### `services`
Source: `components/sections/Services.tsx`
```json
{
  "eyebrow": "Services",
  "heading": "How I can bring your ideas to life",
  "body": "I offer a range of services...",
  "featured": {
    "badge": "Most Popular",
    "title": "Full Stack Development",
    "paragraphs": ["...", "..."],
    "bullets": ["Interfaces people enjoy using", "..."]
  },
  "cards": [
    { "eyebrow": "Infrastructure", "title": "Cloud & DevOps", "body": "...", "bullets": ["..."] },
    { "eyebrow": "Integrations", "title": "API Integrations & Automation", "body": "...", "bullets": ["..."] }
  ]
}
```

### `certifications` (Achievements + Leadership)
Source: `components/sections/Certifications.tsx`
```json
{
  "eyebrow": "Achievements",
  "heading": "Achievements and leadership",
  "body": "Milestones and leadership roles...",
  "achievements": [
    { "name": "1st Place — Impetus Innovative Project", "year": "2023", "description": "...", "image": null }
  ],
  "leadership": [
    { "name": "Vice President, Students Council", "year": "2022 – 2023", "description": "...", "image": null }
  ]
}
```

### `qualifications`
Source: `components/sections/Qualifications.tsx`
```json
{
  "eyebrow": "Qualifications",
  "heading": "My experience and education",
  "body": "Browse my work history...",
  "experience": [
    { "year": "Aug 2026 — Present", "role": "Software Engineer 1", "org": "Elsevier (RELX Group), Bengaluru, Karnataka", "desc": "..." }
  ],
  "education": [
    { "year": "Aug 2024 — July 2026", "role": "Masters in Computer Application (MCA)", "org": "...", "tag": "Masters", "cgpa": "CGPA 7.9", "desc": "..." }
  ]
}
```

### `contact`
Source: `components/sections/Contact.tsx`, `components/layout/Footer.tsx`
```json
{
  "heading": "Let's build something meaningful together.",
  "body": "Whether you have an idea...",
  "ctaLabel": "Get in touch",
  "ctaHref": "https://cal.com/mathaisjustin/intro-call",
  "email": "mathaisjustin@gmail.com"
}
```

### `footer`
Source: `components/layout/Footer.tsx`
```json
{
  "quickLinks": [{ "label": "About", "href": "#about" }, ...],
  "ventures": [
    { "name": "Falcore Labs", "logo": "/logos/falcore-labs.svg", "desc": "...", "href": "https://falcorelabs.com/" }
  ],
  "socials": [
    { "label": "GitHub", "href": "https://github.com/mathaisjustin" },
    { "label": "LinkedIn", "href": "https://www.linkedin.com/in/mathaisjustin/" },
    { "label": "Book a Call", "href": "https://cal.com/mathaisjustin/intro-call" }
  ],
  "email": "mathaisjustin@gmail.com",
  "tagline": "Built with care and intention."
}
```

### `resume`
Source: `app/resume/page.tsx`
```json
{ "pdfUrl": "/resume.pdf", "downloadFilename": "Justin Mathais Resume.pdf" }
```
Note: resume PDF upload goes through the media/R2 flow, not a plain public-folder file, once admin can replace it.

## Tables (not `site_content`)

### Blog posts
Source: `lib/blogs.ts` (6 seed posts, all currently placeholder body copy) → `posts` table. Fields today: `slug`, `title`, `date`, `desc`, `content` (array of paragraphs → becomes a single markdown `content` string, joined with blank lines on seed). Consumed by `components/sections/Blogs.tsx` (homepage, all), `app/blogs/page.tsx` (all), `app/blogs/[slug]/page.tsx` (one — the "This is placeholder content" banner in that page is removed once real content is DB-backed and `published` is real).

### Projects
Source: `lib/projects.ts` (5 seed projects) → `projects` table. Fields today: `title`, `desc`, `tech[]`, `image`, `dark`, `githubUrl`, `liveUrl`, `docsUrl` (`liveUrl`/`docsUrl` are placeholder `"#"` today). Consumed by `components/sections/Projects.tsx` (homepage, first 4 → `featured=true` query), `app/projects/page.tsx` (all, ordered by `sort_order`).

## Components that stay static (not admin-editable)

- `components/animations/*`, `components/ui/Modal.tsx`, `components/ui/CopyEmail.tsx`, `components/layout/Container.tsx`, `components/layout/ScrollBlurOverlay.tsx`, `components/ui/LoadingScreen.tsx`, `components/ui/CustomScrollbar.tsx` — pure UI/behavior, no content.
- `components/sections/TechStackCarousel.tsx` — each logo is a `react-icons` component reference (`SiPython`, etc.), not a plain string/image, so the list can't be made DB-editable without also letting the admin pick from a fixed icon set. Stays code-only for now — flag if you want a curated icon picker added later.
- `components/sections/HelloRotator.tsx` — hardcoded multilingual greeting sequence, a design flourish rather than site copy. Stays code-only unless you want it editable.
