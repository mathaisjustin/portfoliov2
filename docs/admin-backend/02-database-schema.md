# Database schema (Neon Postgres)

## `admin_users`
Single row for now, but modeled as a table in case you add a second admin later.

| column | type | notes |
|---|---|---|
| id | uuid pk default gen_random_uuid() | |
| email | text unique not null | |
| password_hash | text not null | bcrypt |
| created_at | timestamptz default now() | |

## `posts` (blogs)

| column | type | notes |
|---|---|---|
| id | uuid pk | |
| slug | text unique not null | url segment, e.g. `why-i-rebuilt-my-portfolio` |
| title | text not null | |
| excerpt | text not null | short card description (`blog.desc` today) |
| content | text not null | markdown; rendered on the public post page |
| cover_image_url | text | R2 public URL, nullable |
| published | boolean default false | |
| published_at | timestamptz | set when first published |
| created_at | timestamptz default now() | |
| updated_at | timestamptz default now() | |

Public site only queries `where published = true order by published_at desc`.

## `projects`

| column | type | notes |
|---|---|---|
| id | uuid pk | |
| slug | text unique not null | for future project detail pages |
| title | text not null | |
| description | text not null | `project.desc` |
| tech | text[] not null default '{}' | `project.tech` |
| image_url | text | R2 public URL |
| github_url | text | nullable |
| live_url | text | nullable |
| docs_url | text | nullable |
| dark_card | boolean default false | `project.dark` styling flag |
| featured | boolean default false | show on homepage (first 4 featured, ordered) |
| sort_order | int default 0 | manual ordering |
| created_at | timestamptz default now() | |
| updated_at | timestamptz default now() | |

## `site_content`

Generic key → JSON store. One row per site section, so adding a new
editable section later doesn't need a migration.

| column | type | notes |
|---|---|---|
| key | text pk | e.g. `hero`, `about`, `services`, `certifications`, `qualifications`, `contact`, `footer`, `navbar` |
| data | jsonb not null | shape documented per-key in [03-content-inventory.md](./03-content-inventory.md) |
| updated_at | timestamptz default now() | |

## `media`

| column | type | notes |
|---|---|---|
| id | uuid pk | |
| key | text unique not null | R2 object key |
| url | text not null | public URL (R2 public bucket or custom domain) |
| filename | text not null | original filename |
| size_bytes | int | |
| content_type | text | |
| uploaded_at | timestamptz default now() | |

## Indexes

- `posts (slug)` unique (already pk-adjacent via unique constraint)
- `posts (published, published_at desc)` for the listing query
- `projects (slug)` unique
- `projects (featured, sort_order)` for homepage query

Full DDL lives in `db/schema.sql` once we start implementation.
