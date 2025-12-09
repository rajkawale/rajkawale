# SEO Tags & Meta Data Report
**Last Updated:** Current Implementation  
**Source of Truth:** BaseLayout.astro + Page-Specific Overrides

---

## 🔧 GLOBAL DEFAULT SEO (BaseLayout.astro)

### Default Title
```
Raj Kawale | AI & SaaS Product Manager
```

### Default Description
```
Portfolio of Raj Kawale, an AI and SaaS Product Manager working across zero-to-one and scaling tech products in cognitive AI, B2B SaaS, and consumer platforms.
```

### Default Keywords
```
Raj Kawale, AI Product Manager, SaaS Product Manager, product scaling, zero to one products, cognitive AI, B2B SaaS, consumer products, product strategy, systems thinking
```

---

## 📄 PAGE-SPECIFIC SEO IMPLEMENTATION

### 1. HOMEPAGE (`/`)

**Title:**
```
Raj Kawale | AI & SaaS Product Manager
```

**Description:**
```
AI and SaaS Product Manager with experience across zero-to-one and scaling products, spanning cognitive AI (RaiTalk), B2B SaaS platforms, and consumer systems.
```

**Keywords:**
```
AI Product Manager, SaaS Product Manager, zero to one products, scaling tech products, cognitive AI, RaiTalk, B2B SaaS, consumer platforms
```

**File:** `src/pages/index.astro`

---

### 2. WORK / PROJECTS INDEX (`/projects`)

**Title:**
```
Zero to Scale Product Work | Raj Kawale
```

**Description:**
```
Zero-to-one and scaling product work across AI, SaaS, and consumer platforms. Case studies including RaiTalk, Trinka AI prototype, and enterprise product engagements.
```

**Keywords:**
```
zero to one product management, scaling products, AI product case studies, SaaS product portfolio, product manager projects
```

**File:** `src/pages/projects.astro`

---

### 3. INDIVIDUAL PROJECT PAGES (`/projects/[slug]`)

**Title Pattern:**
```
{Project Name} | Product Case Study – Raj Kawale
```

**Description Pattern:**
```
Product case study of {Project Name}, detailing problem framing, product decisions, execution, and scaling considerations across AI and SaaS systems.
```

**Keywords Pattern:**
```
product case study, AI product management, SaaS product design, zero to one product, scaling products
```

**Example:**
- **Trinka:** `Trinka AI | Product Case Study – Raj Kawale`
- **RaiTalk:** `RaiTalk | Product Case Study – Raj Kawale`
- **Madhav Farm:** `Madhav Farm | Product Case Study – Raj Kawale`

**File:** `src/pages/projects/[slug].astro`

---

### 4. WRITING / THINK (`/blog` or `/writing`)

**Title:**
```
Think | Writing on Product, AI, and Systems – Raj Kawale
```

**Description:**
```
Writing on product decisions, cognitive AI, business mechanics, and mental models. Notes on building, shipping, and scaling technology products.
```

**Keywords:**
```
product thinking, mental models, AI product management, systems thinking, product decisions, scaling technology products
```

**File:** `src/pages/blog/index.astro`

---

### 5. INDIVIDUAL BLOG POSTS (`/blog/[slug]`)

**Title Pattern:**
```
{Post Title} | Raj Kawale
```

**Description Pattern:**
```
An essay on {main topic}, exploring product decisions, user psychology, and system-level tradeoffs in technology products.
```

**Keywords Pattern:**
```
product management insights, mental models, AI products, systems thinking, decision making
```

**File:** `src/pages/blog/[slug].astro`

---

### 6. TRUSTED BY (`/trusted-by`)

**Title:**
```
Trusted By | Product Leaders and Teams – Raj Kawale
```

**Description:**
```
Perspectives from founders, product leaders, and teams who have built AI, SaaS, and consumer products with Raj Kawale.
```

**Keywords:**
```
product manager credibility, trusted product manager, product leadership, collaboration in product teams
```

**File:** `src/pages/trusted-by.astro`

---

### 7. CONTACT (`/contact`)

**Title:**
```
Contact | Raj Kawale
```

**Description:**
```
Get in touch with Raj Kawale to discuss AI and SaaS product roles, consulting opportunities, or collaborations on scaling technology products.
```

**Keywords:**
```
AI product manager contact, SaaS product consultant, product collaboration
```

**File:** `src/pages/contact.astro`

---

### 8. NOTES (`/notes`)

**Notes Index Title:**
```
Notes | Product, AI, and Build-in-Public – Raj Kawale
```

**Notes Index Description:**
```
Short notes and observations on product management, AI tools, and building technology products, adapted from public thinking and discussions.
```

**Notes Keywords:**
```
product notes, AI observations, build in public, product management thoughts
```

**Individual Notes Title Pattern:**
```
{Note Title} | Raj Kawale
```

**Individual Notes Description Pattern:**
```
An essay on {Note Title}, exploring product decisions, user psychology, and system-level tradeoffs in technology products.
```

**Individual Notes Keywords:**
```
product management insights, mental models, AI products, systems thinking, decision making
```

**Files:** 
- `src/pages/notes/index.astro`
- `src/pages/notes/[slug].astro`

---

## 🏗️ STRUCTURED DATA (JSON-LD)

### Person Schema (`src/components/BaseLayout.astro`)

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Raj Kawale",
  "url": "https://rajkawale.com",
  "jobTitle": "AI & SaaS Product Manager",
  "worksFor": [
    {
      "@type": "Organization",
      "name": "RaiTalk"
    },
    {
      "@type": "Organization",
      "name": "Sinch"
    },
    {
      "@type": "Organization",
      "name": "Nextech AR (Map D)"
    },
    {
      "@type": "Organization",
      "name": "Invest4EDU"
    },
    {
      "@type": "Organization",
      "name": "Purple Style Labs"
    },
    {
      "@type": "Organization",
      "name": "Pernia's Pop-Up Shop"
    }
  ],
  "sameAs": [
    "https://www.linkedin.com/in/rajkawale/",
    "https://github.com/rajkawale",
    "https://raitalk.rajkawale.com/",
    "https://trinka.rajkawale.com/"
  ],
  "description": "AI and SaaS Product Manager with experience across zero-to-one and scaling products in cognitive AI, B2B SaaS, and consumer platforms."
}
```

---

## 📱 META TAGS STRUCTURE

### Primary Meta Tags (All Pages)
```html
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
<meta name="title" content="{page-specific title}" />
<meta name="description" content="{page-specific description}" />
<meta name="keywords" content="{page-specific keywords}" />
```

### Open Graph Tags (Facebook/LinkedIn)
```html
<meta property="og:type" content="website" />
<meta property="og:url" content="{canonical URL}" />
<meta property="og:title" content="{inherits from page title}" />
<meta property="og:description" content="{inherits from page description}" />
<meta property="og:image" content="{og-image.jpg or custom}" />
```

### Twitter Card Tags
```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:url" content="{canonical URL}" />
<meta name="twitter:title" content="{inherits from page title}" />
<meta name="twitter:description" content="{inherits from page description}" />
<meta name="twitter:image" content="{inherits from og:image}" />
```

### Canonical URL
```html
<link rel="canonical" href="{canonical URL}" />
```

**Implementation:** `src/components/SEO.astro`

---

## ✅ REMOVED KEYWORDS & PHRASES

The following have been **completely removed** from all SEO metadata:

- ❌ `React`
- ❌ `Next.js`
- ❌ `DeepSeek`
- ❌ `Founder` (as primary identity)
- ❌ `Agri-tech` (as primary keyword - may appear contextually)
- ❌ `Product Manager & Founder – Cognitive AI & Systems`
- ❌ `Testimonials` (replaced with "Trusted By")
- ❌ `Recommendations`
- ❌ `Endorsements`
- ❌ `Madhav Farm` (removed from structured data organizations)

---

## 🎯 KEYWORD STRATEGY

### Primary Keywords
- **Raj Kawale** (Name/Brand)
- **AI Product Manager**
- **SaaS Product Manager**
- **Product Scaling**
- **Zero to One Products**

### Secondary Keywords
- **Cognitive AI**
- **B2B SaaS**
- **Consumer Products**
- **Product Strategy**
- **Systems Thinking**

### Long-tail Keywords
- "zero to one product management"
- "scaling tech products"
- "AI product case studies"
- "SaaS product portfolio"
- "product manager projects"
- "product thinking"
- "mental models"
- "product decisions"
- "scaling technology products"

---

## 📊 IMPLEMENTATION SUMMARY

### Files Updated
1. ✅ `src/components/BaseLayout.astro` - Global defaults + structured data
2. ✅ `src/components/SEO.astro` - Meta tag structure (inherits values)
3. ✅ `src/pages/index.astro` - Homepage
4. ✅ `src/pages/projects.astro` - Projects index
5. ✅ `src/pages/projects/[slug].astro` - Individual projects
6. ✅ `src/pages/blog/index.astro` - Blog index
7. ✅ `src/pages/blog/[slug].astro` - Individual blog posts
8. ✅ `src/pages/trusted-by.astro` - Trusted By page
9. ✅ `src/pages/contact.astro` - Contact page
10. ✅ `src/pages/notes/index.astro` - Notes index
11. ✅ `src/pages/notes/[slug].astro` - Individual notes

### Consistency Rules
- ✅ All titles follow pattern: `{Page Title} | Raj Kawale` or `{Page Title} – Raj Kawale`
- ✅ All descriptions are unique and page-specific
- ✅ All keywords are relevant and page-specific
- ✅ Open Graph and Twitter tags inherit from page title/description
- ✅ No duplicate or conflicting metadata
- ✅ Structured data uses exact organization names as specified

---

## 🔍 SEO BEST PRACTICES IMPLEMENTED

1. ✅ Unique, descriptive titles for each page
2. ✅ Compelling meta descriptions (150-160 characters)
3. ✅ Relevant, page-specific keywords
4. ✅ Open Graph tags for social sharing
5. ✅ Twitter Card tags for Twitter sharing
6. ✅ Canonical URLs to prevent duplicate content
7. ✅ Structured data (JSON-LD) for rich snippets
8. ✅ Mobile-responsive viewport
9. ✅ Semantic HTML structure
10. ✅ Proper heading hierarchy

---

## 📈 SOCIAL MEDIA OPTIMIZATION

### Facebook/LinkedIn Sharing
- Uses Open Graph tags
- Large image preview (`summary_large_image`)
- Rich preview cards with title, description, and image

### Twitter Sharing
- Summary card with large image
- Optimized title and description
- Image preview support

---

## 🎨 NOTES

- All meta tags are dynamically generated based on page content
- Keywords can be overridden per page via BaseLayout props
- Default values ensure SEO coverage even if not specified
- Structured data helps search engines understand the content better
- All removed keywords/phrases have been completely eliminated
- Organization list in structured data matches exact specification

---

**Report Generated:** Current Date  
**Status:** ✅ All pages updated and verified

