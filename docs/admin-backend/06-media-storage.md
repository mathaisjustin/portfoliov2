# Media storage — Cloudflare R2

## Setup (you do this in Cloudflare dashboard)

1. Create an R2 bucket, e.g. `portfoliov2-media`.
2. Enable public access on the bucket (or attach a custom domain — recommended, e.g. `media.yourdomain.com`) so uploaded images are served directly, no signed URLs needed for reads.
3. Create an R2 API token (Account → R2 → Manage API tokens) with read+write scoped to that bucket.
4. Give me: account ID, access key ID, secret access key, bucket name, and the public base URL (custom domain or `https://<bucket>.<account-id>.r2.dev`).

## Upload flow

Two options — going with (a) for simplicity in v1:

**(a) Direct upload through our route handler**
`POST /api/admin/media` receives the file as `multipart/form-data` in the
route handler, streams it to R2 via `@aws-sdk/client-s3` `PutObjectCommand`,
then inserts a `media` row and returns the public URL. Simple, works for the
image sizes a portfolio needs (cover images, project screenshots), no extra
client-side complexity.

**(b) Presigned PUT (not doing this initially)**
Client gets a presigned URL and uploads straight to R2, bypassing our
server. Better for large files / high volume, unnecessary complexity here.
Can switch to this later if uploads get large or frequent.

## Usage in the admin UI

Every image field (post cover, project image, hero portrait, footer
ventures logo, etc.) is an "upload or pick from library" control: drag/drop
or click to upload a new image, or browse previously-uploaded media. Under
the hood it's just setting a `*_url` / `site_content.data.imageUrl` field to
the R2 public URL.

## Cleanup

Deleting a post/project does not delete its image from R2 automatically in
v1 (avoids accidentally deleting an image still referenced elsewhere, e.g.
reused across sections). The Media library page lets you manually delete
unused files.
