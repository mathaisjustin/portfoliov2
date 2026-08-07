# Architecture

## Stack

- **DB**: Neon Postgres, accessed via `@neondatabase/serverless` (HTTP driver, works in Next's serverless/edge functions without connection pooling issues).
- **Query layer**: plain SQL via tagged-template `sql` calls, no ORM. Small schema, avoids an extra dependency and generated-client build step. Revisit if the schema grows a lot.
- **Auth**: bcrypt password hash + signed JWT session cookie via `jose`. No third-party auth provider.
- **File storage**: Cloudflare R2, S3-compatible, via `@aws-sdk/client-s3`.
- **Admin UI**: server components + route handlers, same Next app (no separate admin project). Client components only where interactivity is needed (forms, upload widgets).

## Why `proxy.ts`, not `middleware.ts`

This repo runs a Next.js version where `middleware.ts` is deprecated and
renamed to `proxy.ts` (same shape, `export function proxy(request)` instead
of `middleware(request)`). Confirmed from
`node_modules/next/dist/docs/01-app/03-api-reference/03-file-conventions/proxy.md`.
We use `proxy.ts` at the repo root to gate `/admin/*`.

## Request flow

```
Browser → proxy.ts (checks session cookie, redirects to /admin/login if missing/invalid)
        → /admin/*              server components read from Neon directly (RSC, no fetch)
        → /admin/api/*          route handlers for mutations (POST/PUT/DELETE), re-check session server-side
        → public pages (/, /blogs, /projects, ...) read published content from Neon at request time
```

Route handlers re-verify the session independently of `proxy.ts` — the
Next.js docs explicitly warn that Server Functions/route handlers bypass a
proxy matcher if it's misconfigured, so auth must not rely on `proxy.ts` alone.

## Directory additions

```
lib/db.ts                 Neon client singleton + typed query helpers
lib/auth.ts                session create/verify, password hash/verify
lib/r2.ts                  R2 client + signed upload helpers
lib/content.ts              typed getters for site_content sections (server-only)

app/admin/
  layout.tsx                admin shell (sidebar/bottom-nav), session gate for pages
  login/page.tsx
  page.tsx                   dashboard
  blogs/page.tsx              list
  blogs/[id]/page.tsx          editor
  projects/page.tsx
  projects/[id]/page.tsx
  content/page.tsx             site copy editor (hero/about/services/contact/footer/etc.)
  media/page.tsx                media library

app/api/admin/
  auth/login/route.ts
  auth/logout/route.ts
  posts/route.ts              GET (list), POST (create)
  posts/[id]/route.ts         GET, PUT, DELETE
  projects/route.ts
  projects/[id]/route.ts
  content/route.ts            GET all sections, PUT one section
  media/route.ts              GET list, POST upload (presigned or direct)
  media/[id]/route.ts         DELETE

proxy.ts                     protects /admin/* (except /admin/login) and /app/api/admin/* (except auth/login)

db/
  schema.sql                  full schema, run once against Neon
  seed.sql                     seeds current hardcoded content so the site doesn't go blank on cutover
```
