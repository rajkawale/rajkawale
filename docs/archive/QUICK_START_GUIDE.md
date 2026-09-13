# Quick Start Guide - Blogger & LinkedIn

## 🚀 What You Need to Provide

### 1. 📝 Blogger RSS Feed URL

**Current Status:** The script is ready, but the RSS URL needs to be verified.

**What I need:**
- Your Blogger blog URL (e.g., `https://rajkawale.blogspot.com`)
- OR your RSS feed URL directly

**How to find it:**
1. Go to your Blogger dashboard
2. Settings → Site feed
3. Make sure "Allow Blog Feed" is enabled
4. RSS URL format: `https://[your-blog].blogspot.com/feeds/posts/default?alt=rss`

**Once you provide it:**
- I'll update `scripts/fetch-blogger.js` with the correct URL
- Run `npm run sync:blog` to fetch all posts
- Posts will appear on `/blog` automatically

---

### 2. 💼 LinkedIn Posts

**Current Status:** Structure is ready, just need content.

**What I need from you:**

**Option A: I Create Templates (Easiest)**
- Share 2-3 LinkedIn post titles and dates
- I'll create the MDX files
- You paste the content

**Option B: You Create Them**
- Create files in `src/content/linkedin/`
- Use the template below

**Option C: Help Me Migrate**
- Share your LinkedIn posts (titles, dates, content)
- I'll create all the MDX files for you

---

## 📋 LinkedIn Post Template

Create a file: `src/content/linkedin/your-post-title.mdx`

```mdx
---
title: "Your LinkedIn Post Title"
date: 2024-01-15
tags: ["ProductManagement", "AI", "Startup"]
canonicalUrl: "https://linkedin.com/posts/your-post-id"
---

# Your LinkedIn Post Title

Paste your LinkedIn post content here...

You can use:
- **Markdown** formatting
- Lists
- Code blocks
- Links
```

**Required:**
- `title` - Post headline
- `date` - Publication date (YYYY-MM-DD)

**Optional:**
- `tags` - Use: `ProductManagement`, `AI`, `Startup`, `Leadership`, `SystemsThinking`
- `canonicalUrl` - Link to original LinkedIn post

---

## 🎯 Quick Actions

### For Blogger:
1. **Share your RSS feed URL** → I'll update the script
2. **Run:** `npm run sync:blog`
3. **Done!** Posts appear on `/blog`

### For LinkedIn:
1. **Tell me:** "Create 3 LinkedIn templates" OR "Help me migrate [X] posts"
2. **OR create files yourself** using the template above
3. **Done!** Posts appear on `/notes`

---

## 📊 Summary

| What | Status | What You Need |
|------|--------|---------------|
| **Blogger** | ✅ Script ready | RSS feed URL |
| **LinkedIn** | ✅ Structure ready | Post content (I can help create files) |

---

## 🚀 Next Steps

**Tell me:**
1. Your Blogger RSS feed URL → I'll update and test
2. How you want to handle LinkedIn posts → I'll help accordingly

**That's it!** Everything else is ready to go.

