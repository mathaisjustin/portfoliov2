# Environment variables

Add to `.env.local` (never commit — confirm it's in `.gitignore`).

```
# Neon
DATABASE_URL=postgres://...          # from Neon project dashboard / MCP provisioning

# Session
SESSION_SECRET=                       # random 32+ byte string, e.g. `openssl rand -base64 32`

# Cloudflare R2
R2_ACCOUNT_ID=
R2_ACCESS_KEY_ID=
R2_SECRET_ACCESS_KEY=
R2_BUCKET=
R2_PUBLIC_URL=                        # e.g. https://media.yourdomain.com or the r2.dev URL

# Admin seed (used once by the seed script, not read at runtime)
ADMIN_EMAIL=
ADMIN_PASSWORD=
```

`.env.example` (committed, no real values) should list the same keys with
empty values so it's clear what's needed to run the project.

## What I need from you before implementation can finish end-to-end

1. Authorize the Neon connector in claude.ai connector settings (I'll provision the project/branch and get `DATABASE_URL` once that's done).
2. Create the R2 bucket + API token in the Cloudflare dashboard, send me the four `R2_*` values above.
3. Pick the admin email + a password (or let me generate one) for `ADMIN_EMAIL` / `ADMIN_PASSWORD`.

I can scaffold schema, routes, and UI against a mocked DB layer in the
meantime so none of this blocks starting the build.
