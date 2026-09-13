# Meta Tags & Keywords Implementation Summary

## 📋 Overview
This document lists all meta tags, OpenGraph tags, Twitter Cards, and keywords implemented across the website.

---

## 🔧 Core SEO Component (`src/components/SEO.astro`)

### Primary Meta Tags
```html
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
<meta name="title" content="{title}" />
<meta name="description" content="{description}" />
<meta name="keywords" content="{keywords}" />
```

### Open Graph Tags (Facebook/LinkedIn)
```html
<meta property="og:type" content="{type}" />
<meta property="og:url" content="{siteUrl}" />
<meta property="og:title" content="{title}" />
<meta property="og:description" content="{description}" />
<meta property="og:image" content="{ogImage}" />
```

### Twitter Card Tags
```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:url" content="{siteUrl}" />
<meta name="twitter:title" content="{title}" />
<meta name="twitter:description" content="{description}" />
<meta name="twitter:image" content="{ogImage}" />
```

### Additional SEO
```html
<link rel="canonical" href="{siteUrl}" />
```

---

## 🏠 Homepage (`src/pages/index.astro`)

**Title:**
```
Raj Kawale | Product Manager & Founder - Cognitive AI & Systems
```

**Description:**
```
Portfolio of Raj Kawale, a Product Manager and Founder specializing in Zero-to-One builds, Cognitive AI systems (RaiTalk), and Agri-tech supply chains.
```

**Keywords:**
```
Raj Kawale, Product Manager, Founder, Cognitive AI, Systems Thinking, Agri-tech, DeepSeek, React, Next.js
```

---

## 📝 Blog Pages

### Blog Index (`src/pages/blog/index.astro`)
**Title:** `Writing - Raj Kawale`  
**Description:** `Thoughts on product management, AI, and building systems-driven products`

### Individual Blog Posts (`src/pages/blog/[slug].astro`)
- **Title:** Dynamic based on post title
- **Description:** Uses post excerpt or title
- **Keywords:** Inherited from BaseLayout defaults

---

## 💼 Projects Pages

### Projects Index (`src/pages/projects.astro`)
**Title:** `Projects - Raj Kawale`  
**Description:** `Portfolio of projects and case studies by Raj Kawale`

### Individual Project Pages (`src/pages/projects/[slug].astro`)
- **Title:** `{project.title} - Raj Kawale`
- **Description:** Uses project description from content

---

## 👥 Trusted By Page (`src/pages/trusted-by.astro`)
**Title:** `Trusted By - Raj Kawale`  
**Description:** `Perspectives from people I've built products with.`

---

## 📧 Contact Page (`src/pages/contact.astro`)
**Title:** `Contact - Raj Kawale`  
**Description:** `Get in touch with Raj Kawale for collaborations, projects, or opportunities`

---

## 📄 Notes Pages

### Notes Index (`src/pages/notes/index.astro`)
**Title:** `Notes - Raj Kawale`  
**Description:** `Thoughts and insights shared on LinkedIn`

### Individual Notes (`src/pages/notes/[slug].astro`)
- **Title:** Dynamic based on note title
- **Description:** Uses note title

---

## 🎤 Testimonials Page (`src/pages/testimonials.astro`)
**Title:** `Testimonials - Raj Kawale`  
**Description:** `What people say about working with Raj Kawale`

---

## 🏗️ BaseLayout Defaults (`src/components/BaseLayout.astro`)

### Default Title
```
Raj Kawale | Product Manager & Founder - Cognitive AI & Systems
```

### Default Description
```
Portfolio of Raj Kawale, a Product Manager and Founder specializing in Zero-to-One builds, Cognitive AI systems (RaiTalk), and Agri-tech supply chains.
```

### Default Keywords
```
Raj Kawale, Product Manager, Founder, Cognitive AI, Systems Thinking, Agri-tech, DeepSeek, React, Next.js
```

---

## 📊 Structured Data (JSON-LD)

### Person Schema (`src/components/BaseLayout.astro`)
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Raj Kawale",
  "url": "https://rajkawale.com",
  "jobTitle": "Product Manager & Founder",
  "worksFor": [
    {
      "@type": "Organization",
      "name": "RaiTalk",
      "url": "https://raitalk.rajkawale.com/"
    },
    {
      "@type": "Organization",
      "name": "Madhav Farm"
    }
  ],
  "sameAs": [
    "https://www.linkedin.com/in/rajkawale/",
    "https://github.com/rajkawale",
    "https://raitalk.rajkawale.com/",
    "https://trinka.rajkawale.com/"
  ],
  "description": "A systems-thinking Product Manager and Founder currently building Cognitive AI solutions and scalable tech ventures."
}
```

---

## 🎯 Keyword Strategy

### Primary Keywords
- **Raj Kawale** (Name/Brand)
- **Product Manager**
- **Founder**
- **Cognitive AI**
- **Systems Thinking**

### Secondary Keywords
- **Agri-tech**
- **DeepSeek**
- **React**
- **Next.js**
- **RaiTalk**
- **Zero-to-One builds**

### Long-tail Keywords (from descriptions)
- "Product Manager specializing in Zero-to-One builds"
- "Cognitive AI systems"
- "Agri-tech supply chains"
- "Systems-driven products"
- "Building scalable tech ventures"

---

## 🖼️ Open Graph Image

**Default OG Image:** `/og-image.jpg`  
**Fallback:** Uses site URL + `/og-image.jpg`

---

## 📱 Viewport & Mobile Optimization

```html
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
```

---

## 🔗 Canonical URLs

All pages include canonical URLs to prevent duplicate content:
```html
<link rel="canonical" href="{siteUrl + pathname}" />
```

---

## 📈 Analytics Integration

**Microsoft Clarity:** Measurement ID `ugkqsj83mt`  
- Tracks user interactions
- Event tracking for email copies
- Page view analytics

---

## ✅ SEO Best Practices Implemented

1. ✅ Unique titles for each page
2. ✅ Descriptive meta descriptions
3. ✅ Relevant keywords
4. ✅ Open Graph tags for social sharing
5. ✅ Twitter Card tags
6. ✅ Canonical URLs
7. ✅ Structured data (JSON-LD)
8. ✅ Mobile-responsive viewport
9. ✅ Semantic HTML structure
10. ✅ Proper heading hierarchy

---

## 🎨 Social Media Optimization

### Facebook/LinkedIn Sharing
- Uses Open Graph tags
- Large image preview (`summary_large_image`)
- Rich preview cards

### Twitter Sharing
- Summary card with large image
- Optimized title and description
- Image preview support

---

## 📝 Notes

- All meta tags are dynamically generated based on page content
- Keywords can be overridden per page via BaseLayout props
- Default values ensure SEO coverage even if not specified
- Structured data helps search engines understand the content better

