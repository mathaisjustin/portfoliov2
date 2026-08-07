# Admin UI

Mobile-friendly and desktop-friendly, same routes, responsive layout — not
two separate builds.

## Layout

- **Desktop (≥768px)**: fixed left sidebar (Dashboard / Blogs / Projects / Site content / Media / Log out), content pane to the right.
- **Mobile (<768px)**: sidebar collapses into a bottom tab bar (icon + label, 4-5 primary destinations) plus a hamburger for secondary items (Log out, account). Editors (post/project forms) go full-screen with a sticky top bar (Back, Save).

See the mockup shared earlier in this conversation for the desktop shape.

## Pages

### `/admin/login`
Email + password form. No admin chrome.

### `/admin` (dashboard)
Quick counts (published/draft posts, projects, media items) + shortcuts to
"New post" / "New project". Nothing fancy in v1.

### `/admin/blogs`
Table/list of posts (title, status badge, date), sorted newest first.
"New post" button. Row actions: edit, delete (confirm dialog), publish/unpublish toggle.

### `/admin/blogs/[id]` (and `/admin/blogs/new`)
Form: title, slug (auto-generated from title, editable), excerpt, cover
image (upload/library picker), content (markdown textarea with a live
preview pane — no heavy WYSIWYG dependency needed for a personal blog),
published toggle. Save / Save & publish / Delete.

### `/admin/projects` and `/admin/projects/[id]`
Same pattern as blogs: list + form. Fields per the schema — title, slug,
description, tech (tag input, add/remove chips), image, github/live/docs
URLs, dark-card toggle, featured toggle, sort order (drag-to-reorder in the
list view, or a numeric field — decide during implementation).

### `/admin/content`
One page, one form per section (accordion or tabs: Hero, About, Services,
Achievements & Leadership, Qualifications, Contact, Footer, Resume). Each
form's fields mirror the JSON shape in
[03-content-inventory.md](./03-content-inventory.md). Array fields (skill
groups, achievements, timeline items, footer links) use repeatable
add/remove row groups, not raw JSON editing.

### `/admin/media`
Grid of uploaded images with filename, size, upload date. Upload button
(drag/drop). Click an image to copy its URL or delete it.

## Components to build

`components/admin/Sidebar.tsx`, `BottomNav.tsx`, `AdminHeader.tsx`,
`ImagePicker.tsx` (upload + library browse, reused everywhere), `TagInput.tsx`,
`RepeatableList.tsx` (generic add/remove/reorder for array fields),
`MarkdownEditor.tsx` (textarea + preview), `ConfirmDialog.tsx`,
`StatusBadge.tsx`.

Styling reuses the existing Tailwind setup and the site's color palette
(`#1C1410`, `#FAF7F2`, `#C8BAA6`, etc.) so the admin doesn't feel like a
bolted-on generic dashboard, but simplified/denser since it's a work tool,
not the marketing site.
