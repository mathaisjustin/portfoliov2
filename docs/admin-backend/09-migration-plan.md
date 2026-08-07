# Implementation plan / PR breakdown

Small, reviewable PRs, roughly in this order. Each is independently
mergeable to `master` behind the fact that `/admin` isn't linked from the
public nav yet (no exposure risk before auth lands).

1. **Foundations** — `lib/db.ts`, `db/schema.sql`, `db/seed.sql` (seeds current hardcoded content from the inventory doc), `.env.example`. Run schema + seed against Neon once connector is authorized.
2. **Auth** — `lib/auth.ts`, `proxy.ts`, `/api/admin/auth/*`, `/admin/login`, empty `/admin` dashboard shell gated behind login.
3. **Admin shell** — sidebar/bottom-nav layout, responsive breakpoints, shared admin components (`ImagePicker`, `RepeatableList`, etc. — can stub these and fill in as needed per page).
4. **Media** — R2 client, `/api/admin/media`, `/admin/media` page. Needed before post/project editors since they use the image picker.
5. **Blogs CRUD** — routes + `/admin/blogs*` pages. Then switch `components/sections/Blogs.tsx`, `app/blogs/page.tsx`, `app/blogs/[slug]/page.tsx` to read from `posts` instead of `lib/blogs.ts`.
6. **Projects CRUD** — same pattern, then switch `components/sections/Projects.tsx`, `app/projects/page.tsx` to read from `projects` instead of `lib/projects.ts`.
7. **Site content editor** — `/api/admin/content*`, `/admin/content` page, then switch each section component (`Hero`, `About`, `Services`, `Certifications`, `Qualifications`, `Contact`, `Footer`, `app/resume/page.tsx`) to read its `site_content` row instead of inline JSX strings.
8. **Cleanup** — delete `lib/blogs.ts`, `lib/projects.ts` once nothing imports them; remove the "placeholder content" banner in `app/blogs/[slug]/page.tsx`.

## Testing per step

- CRUD routes: exercise via the admin UI itself (no separate test suite planned initially — flag if you want automated tests).
- After each "switch component to DB" step: run the dev server, visually diff the page against current production to confirm no regression (same content, same layout).

## Rollback safety

Public pages fall back gracefully is out of scope — since `site_content` is
seeded from current content before any component switches over, there's no
window where a page reads a missing row. If a `site_content` key is ever
missing at runtime (e.g. a future new section not yet seeded), the section
component should render `null` rather than throw.
