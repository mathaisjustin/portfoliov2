# API routes

All under `app/api/admin/*` unless noted. All require a valid session except
`auth/login`. Public read routes (consumed by the public site, not the admin
UI) are listed separately at the bottom.

## Auth
| Method | Path | Body | Notes |
|---|---|---|---|
| POST | `/api/admin/auth/login` | `{ email, password }` | sets session cookie |
| POST | `/api/admin/auth/logout` | — | clears cookie |
| GET | `/api/admin/auth/me` | — | returns current admin `{ email }` |

## Posts (blogs)
| Method | Path | Body | Notes |
|---|---|---|---|
| GET | `/api/admin/posts` | — | list all (incl. drafts) |
| POST | `/api/admin/posts` | `{ title, slug, excerpt, content, coverImageUrl?, published }` | create |
| GET | `/api/admin/posts/:id` | — | one |
| PUT | `/api/admin/posts/:id` | partial fields | update; sets `published_at` on first publish |
| DELETE | `/api/admin/posts/:id` | — | delete |

## Projects
| Method | Path | Body | Notes |
|---|---|---|---|
| GET | `/api/admin/projects` | — | list all |
| POST | `/api/admin/projects` | `{ title, slug, description, tech[], imageUrl?, githubUrl?, liveUrl?, docsUrl?, darkCard, featured, sortOrder }` | create |
| GET | `/api/admin/projects/:id` | — | one |
| PUT | `/api/admin/projects/:id` | partial fields | update |
| DELETE | `/api/admin/projects/:id` | — | delete |

## Site content
| Method | Path | Body | Notes |
|---|---|---|---|
| GET | `/api/admin/content` | — | all sections, `{ hero: {...}, about: {...}, ... }` |
| GET | `/api/admin/content/:key` | — | one section |
| PUT | `/api/admin/content/:key` | section JSON (validated against a per-key zod schema) | upsert |

## Media
| Method | Path | Body | Notes |
|---|---|---|---|
| GET | `/api/admin/media` | — | list, newest first |
| POST | `/api/admin/media` | `multipart/form-data` file | uploads to R2, inserts `media` row, returns `{ url }` |
| DELETE | `/api/admin/media/:id` | — | deletes from R2 + row |

## Validation

Every write route validates its body with `zod` before touching the DB —
reject with `400` and a field-level error on failure, not a raw DB error.

## Public read routes (consumed by the site itself)

These aren't strictly "admin" routes — public pages can either query Neon
directly in server components (preferred, no extra network hop) or go
through thin route handlers if a page needs client-side fetching. Default
to direct server-component DB reads:
- `app/page.tsx` and section components read `site_content` rows + `posts where published` (limit) + `projects where featured` directly.
- `app/blogs/page.tsx`, `app/blogs/[slug]/page.tsx` read `posts`.
- `app/projects/page.tsx` reads `projects`.
