# Auth

Single admin account, email + password. No signup flow — the account is
created once via a seed script (`db/seed.sql` or a one-off `scripts/create-admin.ts`)
using an email and password you provide, never committed in plaintext.

## Login

`POST /api/admin/auth/login` — body `{ email, password }`
1. Look up `admin_users` by email.
2. `bcrypt.compare(password, password_hash)`.
3. On success, sign a JWT (`jose`, `HS256`, secret = `SESSION_SECRET` env var) with `{ sub: user.id, email }`, 7-day expiry.
4. Set it as an `httpOnly`, `secure`, `sameSite=lax` cookie named `admin_session`.

## Logout

`POST /api/admin/auth/logout` — clears the cookie.

## Session verification

`lib/auth.ts` exports `getSession(request | cookies())` — verifies the JWT,
returns the payload or `null`. Used in:
- `proxy.ts`, to redirect unauthenticated requests to `/admin/login`.
- Every `app/api/admin/**/route.ts` handler, independently, before touching the DB. (Per the Next docs, a proxy matcher gap must not be the only auth check on a route handler.)
- `app/admin/layout.tsx`, to read the current admin's email for display and as a defense-in-depth check for RSC pages.

## Password reset

Out of scope for v1 — single account, you reset it by re-running the seed
script with a new password if needed. Can add a "forgot password" email flow
later if you want.

## Rate limiting

Basic in-memory/IP-based throttle on the login route (e.g. 5 attempts / 5 min)
to slow down brute-forcing, since there's no third-party auth provider doing
this for us.
