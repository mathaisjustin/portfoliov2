# Admin backend — overview

Goal: add a database-backed CMS + admin panel to this portfolio so every
piece of content currently hardcoded in components (`app/`, `components/`,
`lib/`) can be edited from `/admin` without a code deploy.

This folder documents the plan before any code is written. Read in order:

1. [01-architecture.md](./01-architecture.md) — stack, request flow, why proxy.ts not middleware.ts
2. [02-database-schema.md](./02-database-schema.md) — tables, columns, relations
3. [03-content-inventory.md](./03-content-inventory.md) — every hardcoded string/image on the site today, mapped to its future DB source
4. [04-auth.md](./04-auth.md) — login, sessions, route protection
5. [05-api-routes.md](./05-api-routes.md) — every backend endpoint
6. [06-media-storage.md](./06-media-storage.md) — Cloudflare R2 upload flow
7. [07-admin-ui.md](./07-admin-ui.md) — admin pages, mobile/desktop layout
8. [08-env-vars.md](./08-env-vars.md) — required secrets/config
9. [09-migration-plan.md](./09-migration-plan.md) — implementation order, PR breakdown

## Decisions already made

| Area | Decision |
|---|---|
| Database | Neon Postgres (serverless) |
| Image storage | Cloudflare R2 (S3-compatible), no Cloudflare Images |
| Admin auth | Single admin account, email + password, session cookie |
| Framework | This repo's Next.js fork — `proxy.ts` replaces `middleware.ts` (see 01) |

## Open items

- Neon project needs to be provisioned (requires the Neon MCP connector to be authorized in claude.ai connector settings first).
- R2 bucket + API token need to be created in the Cloudflare dashboard; credentials go in `.env.local` (see 08).
