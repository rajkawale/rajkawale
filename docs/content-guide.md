# Content Guide - Raj Kawale Portfolio

This guide explains how to add and manage content on your portfolio site.

---

## 📝 Adding a case study

Create a markdown file in `src/content/work/` following the schema in `src/content/config.ts` (title, description, tags, category, priority, etc.). No `metric` field — outcomes should read as qualitative statements, not headline numbers, per the September 2026 site refresh.

---

## 📌 LinkedIn posts → website notes

There is no LinkedIn API that lets an app read your personal-profile posts, so there is no true "auto-sync." Two workflows cover it instead:

### One-time backfill (do this once)

1. LinkedIn → **Settings & Privacy** → **Data privacy** → **Get a copy of your data** → check **Posts** → request the archive. LinkedIn emails a zip within a day or so.
2. Unzip it and find `Shares.csv`.
3. Run:
   ```bash
   node scripts/import-linkedin-export.js /path/to/Shares.csv
   ```
   This writes one `src/content/linkedin/*.md` file per post, all marked `draft: true`.
4. Review each file. Set `draft: false` (or delete the frontmatter line, since it defaults to `false`) on the ones you want published, delete the rest.

### After each new post (ongoing)

**Option A — one tap from your phone:**
1. On GitHub: **Settings → Developer settings → Fine-grained personal access tokens** → create a token scoped to this repo only, with **Actions: read and write** permission.
2. Create an iOS Shortcut:
   - Accept input from the Share Sheet (or run manually).
   - Prompt for the post title, full text, tags, and the post URL (or take the URL from the share sheet input).
   - `Get Contents of URL`:
     - URL: `https://api.github.com/repos/rajkawale/rajkawale/actions/workflows/add-linkedin-note.yml/dispatches`
     - Method: `POST`
     - Headers: `Authorization: Bearer <your token>`, `Accept: application/vnd.github+json`
     - Body (JSON): `{"ref": "main", "inputs": {"title": "<title>", "text": "<text>", "post_url": "<url>", "tags": "<tags>"}}`
3. Add the Shortcut to your Share Sheet. After posting on LinkedIn: Share → your Shortcut → fill the prompts → the site redeploys with the note.

**The weekly reminder:** `.github/workflows/linkedin-note-reminder.yml` opens a GitHub issue every Friday asking "Posted on LinkedIn this week?" GitHub's mobile app pushes a notification for it. Trigger the "Add LinkedIn note" workflow from the issue, then close it.

**Option B (not set up yet):** publish the note on the site first, then have an Action post it to LinkedIn via the Share on LinkedIn API. Worth revisiting if the site should become the canonical source instead of LinkedIn — it needs a LinkedIn developer app and periodic re-authorization (~60 days).

### Frontmatter schema

```yaml
---
title: "Your Post Title"
date: "2026-01-15"
tags: ["ProductManagement", "AI", "Startup"]
canonicalUrl: "https://www.linkedin.com/posts/your-post-id"
draft: false
---

Full post text here — this is what search engines and AI assistants read,
since they can't read the LinkedIn embed itself.
```

**Required:** `title`, `date`. **Optional:** `tags`, `canonicalUrl`, `draft` (defaults to `false`).

See `docs/linkedin-tags.md` for the recommended tag vocabulary.
