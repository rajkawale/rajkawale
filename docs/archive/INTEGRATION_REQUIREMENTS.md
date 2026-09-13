# Integration Requirements - Blogger & LinkedIn

## Information Needed from Your Site

### 1. 📝 Blogger/Blogspot Integration

**What I have:**
- RSS Feed URL: `https://rajkawale.blogspot.com/feeds/posts/default?alt=rss`

**What I need to know:**
- ✅ RSS URL confirmed - I'll use this
- ❓ Do you want to fetch ALL posts or limit to recent N posts?
- ❓ Should I strip HTML from content or preserve formatting?
- ❓ Do you want to generate slugs from titles or use Blogger's existing URLs?
- ❓ Any specific fields you want to extract (categories, tags, author, etc.)?

**I'll implement:**
- Script to fetch and parse RSS
- JSON output with normalized structure
- Repository to read from JSON
- Blog listing and detail pages

---

### 2. 💼 LinkedIn Posts Integration

**What I need:**
- ❓ Do you have existing LinkedIn posts you want to migrate?
- ❓ What's your typical LinkedIn post structure? (text-only, with images, carousels?)
- ❓ Do you want to manually paste posts as MDX files, or should I create an API integration later?
- ❓ What tags/categories do you use? (e.g., #ProductManagement, #AI, #Startup)

**I'll implement:**
- Content Collection schema for LinkedIn posts
- MDX template for manual entry
- Timeline view for all posts
- Individual post pages

**For now, I'll set up:**
- Manual MDX entry system (you paste content)
- Schema: title, date, tags, canonicalUrl, content
- Timeline page at `/notes`

---

### 3. 💬 Testimonials

**What I need:**
- ❓ Do you have existing testimonials to add?
- ❓ What format? (LinkedIn recommendations, email quotes, client feedback?)
- ❓ Should I create a template structure for you to fill in?

**I'll implement:**
- JSON structure for testimonials
- Template with fields: author, role, company, quote, date, sourceUrl
- Testimonials component and page

---

### 4. 🖼️ Gallery

**What I need:**
- ❓ You mentioned "pernia" folder - is this a company/project name?
- ❓ What other project/company folders should I create?
- ❓ What types of images? (product screenshots, team photos, office, demos?)
- ❓ Any specific naming convention for images?

**I'll implement:**
- Gallery component that reads from `public/gallery/<folder>/`
- Responsive grid layout
- Support for multiple folders (pernia, madhav-farm, etc.)

---

### 5. 🎨 Homepage Content

**What I need:**
- ❓ Can you provide the paragraph description about your philosophy and work?
- ❓ Or should I create a placeholder you can edit?

**I'll implement:**
- Hero section with your headline
- Subheading
- Placeholder paragraph (you can edit)
- Preview sections for Projects, Blog, LinkedIn

---

### 6. 🔗 Navigation & Links

**What I need:**
- ❓ Any specific page order for navigation?
- ❓ Do you want a logo/brand mark in the nav?
- ❓ Any external links to include? (GitHub, Twitter, etc.)

**I'll implement:**
- Navigation component with: Home, Projects, Blog, LinkedIn (Notes), Testimonials, Contact
- Brutalist styling
- Mobile responsive menu

---

## What I'll Start Building Now (Without Waiting)

While you provide the above info, I'll implement:

1. ✅ Homepage structure with hero and preview sections
2. ✅ Blogger RSS fetch script and repository
3. ✅ LinkedIn Content Collection setup
4. ✅ Testimonials JSON structure and component
5. ✅ Gallery component
6. ✅ Navigation in BaseLayout
7. ✅ Blog listing and detail pages
8. ✅ LinkedIn timeline page
9. ✅ GitHub Actions workflow for deployment
10. ✅ Content guide documentation

**You can provide the specific content/details as I build, and I'll integrate them!**

