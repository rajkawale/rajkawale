# Content Guide - Raj Kawale Portfolio

This guide explains how to add and manage content on your portfolio site.

---

## 📝 Writing MDX Posts

### LinkedIn Posts

Create MDX files in `src/content/linkedin/` with the following structure:

```mdx
---
title: "Your Post Title"
date: 2024-01-15
tags: ["ProductManagement", "AI", "Startup"]
canonicalUrl: "https://linkedin.com/posts/your-post-id"
---

# Your Post Title

Your post content here. You can use:

- **Markdown** formatting
- Code blocks
- Lists
- Links

Paste your LinkedIn post content here, and it will be rendered on the site.
```

**Required fields:**
- `title`: The post title
- `date`: Publication date (YYYY-MM-DD format)

**Optional fields:**
- `tags`: Array of tag strings
- `canonicalUrl`: Link to original LinkedIn post

**File naming:**
- Use kebab-case: `my-post-title.mdx`
- The filename becomes the slug (URL path)

---

## 🖼️ Gallery Images

### Adding Images

1. Create a folder in `public/gallery/` for your project/company
   - Example: `public/gallery/pernia/`
   - Example: `public/gallery/madhav-farm/`

2. Add image files to that folder
   - Supported formats: `.jpg`, `.jpeg`, `.png`, `.gif`, `.webp`, `.svg`
   - Use descriptive filenames

3. Use the Gallery component in your pages:

```astro
---
import Gallery from '../components/Gallery.astro';
---

<Gallery folder="pernia" />
```

The component automatically:
- Reads all images from the folder
- Displays them in a responsive grid
- Applies brutalist styling

---

## 💬 Adding Testimonials

Edit `src/data/testimonials.json`:

```json
[
  {
    "author": "John Doe",
    "role": "CEO",
    "company": "Example Company",
    "quote": "Raj is an exceptional product manager...",
    "date": "2024-01-15",
    "sourceUrl": "https://linkedin.com/in/johndoe"
  }
]
```

**Fields:**
- `author`: Person's name (required)
- `role`: Their job title (required)
- `company`: Company name (required)
- `quote`: The testimonial text (required)
- `date`: Date of testimonial (YYYY-MM-DD, optional)
- `sourceUrl`: Link to source (LinkedIn, email, etc., optional)

---

## 📰 Blogger Integration

### Automatic Sync

The site automatically syncs with your Blogger feed:

1. **Manual sync:** Run `npm run sync:blog`
2. **Automatic sync:** Happens on every build (via GitHub Actions)

The script:
- Fetches RSS from `https://rajkawale.blogspot.com/feeds/posts/default?alt=rss`
- Parses and normalizes posts
- Saves to `src/data/external/blogger.json`

### Blog Post Structure

Posts are automatically available with:
- `title`: Post title
- `slug`: URL-friendly slug
- `published`: Publication date
- `content`: Full HTML content
- `excerpt`: First 200 characters
- `canonicalUrl`: Original Blogger URL

---

## 🎨 Embedding Prototypes

### PrototypeEmbed Component (Future)

To embed prototypes (Figma, Framer, etc.), create a component:

```astro
---
// src/components/PrototypeEmbed.astro
interface Props {
  url: string;
  title: string;
}

const { url, title } = Astro.props;
---

<div class="prototype-embed border-4 border-black bg-white p-4">
  <h3 class="mb-4 text-xl font-bold uppercase text-black">{title}</h3>
  <iframe
    src={url}
    class="h-[600px] w-full border-4 border-black"
    title={title}
  ></iframe>
</div>
```

Then use it in your MDX:

```mdx
---
import PrototypeEmbed from '../../components/PrototypeEmbed.astro';
---

<PrototypeEmbed 
  url="https://framer.com/embed/your-prototype"
  title="Product Prototype"
/>
```

---

## 📁 Project Structure

### Adding New Projects

Create MDX files in `src/content/projects/`:

```mdx
---
title: "Project Name"
role: "Your Role"
metrics:
  - label: "Metric Label"
    value: "Metric Value"
description: "Project description"
coverImage: "/images/project.jpg"
---

# Project Name

Your project content here...
```

---

## 🔧 Content Management Tips

### Best Practices

1. **File Organization:**
   - Keep related content together
   - Use descriptive filenames
   - Follow kebab-case for URLs

2. **Images:**
   - Optimize images before uploading
   - Use WebP format when possible
   - Keep file sizes reasonable (< 500KB)

3. **SEO:**
   - Write descriptive titles
   - Add excerpts for blog posts
   - Include canonical URLs when reposting

4. **Maintenance:**
   - Run `npm run sync:blog` regularly
   - Update testimonials as you receive them
   - Keep gallery folders organized

---

## 🚀 Deployment

### Automatic Deployment

The site deploys automatically via GitHub Actions:
- On every push to `main` branch
- Daily at 2 AM UTC (syncs Blogger feed)

### Manual Deployment

1. Sync blog: `npm run sync:blog`
2. Build: `npm run build`
3. Deploy to Vercel (if not using auto-deploy)

---

## 📞 Need Help?

- Check the main README.md
- Review PROJECT_SUMMARY.md for architecture
- Check INTEGRATION_REQUIREMENTS.md for integration details

