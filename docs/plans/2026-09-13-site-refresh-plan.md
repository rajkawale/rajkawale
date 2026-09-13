# rajkawale.com — Review & Refresh Plan

Status: **DRAFT — awaiting Raj's approval** (see §0). Do not implement until §0 is answered.
Audited: 2026-09-13, repo `main@347b81b` + live `https://www.rajkawale.com`.
Implementer: work on branch `site-refresh`, one commit per work package (WP), `npm run build` must pass after each.

---

## 0. Decisions needed from Raj (blocking)

| # | Question | Recommendation |
|---|----------|----------------|
| D1 | **Metrics scope.** (a) hide the green metric line on cards only, or (b) also strip numbers from the case-study pages (Sinch, Nextech AR, Pernia's "Outcomes" sections)? Madhav Farm is your own business — keep its ₹8L / margin numbers? | (b) for employer work; ask on Madhav Farm |
| D2 | **KOS link.** Only the LinkedIn company page exists. Is there a demo, GitHub repo, or landing page to link? | LinkedIn page for now |
| D3 | **Photos.** The image in chat isn't a file the agent can use. Put the photo(s) in `public/images/identity/` and say which one is primary. | A recent, clear, front-facing headshot as primary. The retro edit has a visible "MAR 17 1985" date stamp, which image models may read literally. |
| D4 | **RaiTalk.** Keep it as a past case study ("Jul 2025 – May 2026, sunset") or remove it entirely? Note: `raitalk.com` still returns HTTP 200. Taking it down happens outside this repo. | Keep as past work, since it's strong founder evidence |
| D5 | **Canonical host.** Vercel currently redirects the bare domain to `www` (307). | Use `https://www.rajkawale.com` everywhere |
| D6 | **LinkedIn → website flow.** Pick option A, B, or C (§2 WP8). | C once (backfill), then A ongoing |
| D7 | **Trinka AI naming.** "Trinka AI" is also a commercial academic-writing product (trinka.ai), and your card describes the same positioning. Search engines and AI assistants may merge the two. Was this a prototype inspired by it? | Rename or label it "prototype inspired by Trinka" |
| D8 | "Add the website link to my personal…": does this mean adding rajkawale.com to your LinkedIn profile, or adding the KOS link to this site? | Both (the LinkedIn step is manual, see WP6.8) |

---

## 1. Review findings

### 1.1 Critical: technical SEO bugs (affect every page)

1. **Canonical URL is broken on every page.** Live: `<link rel="canonical" href="https://rajkawale.com//work/sinch/">`. It has a double slash and uses the bare-domain host, which redirects. Cause: `src/components/BaseLayout.astro:26`. `Astro.site.href` already ends in `/`, and `astro.config.mjs` has `site: 'https://rajkawale.com'` while live serves `www`.
2. **`og:url` is always the homepage.** `src/components/SEO.astro:37,52` use `siteUrl` instead of the page URL, so shares of any page get attributed to `/`.
3. **Sitemap is broken.** All 25 URLs have `//`, and `/projects` returns 404 (`src/pages/sitemap.xml.ts:1314`, plus the `/projects/*` block at `:1328`). There are no image entries.
4. **`/llms.txt` returns 404.**
5. **`robots.txt`** points the sitemap at the bare-domain host. It uses the outdated Anthropic crawler names `anthropic-ai` and `Claude-Web`, and lacks `ClaudeBot`, `Claude-SearchBot`, `Claude-User` and `OAI-SearchBot`.
6. **JSON-LD `Person` is stale** (`BaseLayout.astro:29-86`):
   - jobTitle is "AI & SaaS Product Manager".
   - `worksFor` lists RaiTalk and 5 past employers as current. Indegene is missing.
   - `sameAs` includes the dead `raitalk.rajkawale.com`, and is missing Topmate and KOS.
   - There is no `image`.
7. **The WebSite `SearchAction` points to `/search`**, which doesn't exist (`BaseLayout.astro:100-107`). It's an invalid structured-data claim.
8. **Viewport `maximum-scale=1`** blocks pinch-zoom (`SEO.astro:28`). This is an accessibility and Lighthouse failure.
9. **Meta descriptions are templated.**
   - Every `/work/*` page: "Product case study of X, detailing problem framing…" (`work/[slug].astro:29`)
   - Every blog post: "An essay on X…" (`blog/[slug].astro:556`)
   - Search result snippets end up generic.
10. **Duplicate content.** Blog posts live at both `blog.rajkawale.com` and `/blog/*`, with no canonical choosing one.

### 1.2 Identity mismatch (hurts findability in AI assistants)
LinkedIn says **"Product Lead — GenAI & Agentic AI @ Indegene, Bengaluru"**. The site says **"AI & SaaS Product Manager"** (title, hero, schema, RSS, ai.txt) and never mentions Indegene. Search engines and LLMs trust an identity that reads the same in every source, and today the sources disagree.

### 1.3 Page by page

| Page | Findings |
|------|----------|
| **Home** `/` | Hero subline is outdated (`index.astro:118-121`). The **"Currently building RaiTalk →"** badge links to a stopped product (`:126-138`). Featured cards show metrics (Madhav Farm ₹8L, Sinch +23% ROI) (`:195-202`, `:277-283`). No Indegene, no KOS, no booking CTA. |
| **Work** `/work` | `ProjectCard.astro:374-381` renders a metric on every card. The RaiTalk card still says "Live AI system…" with a "Visit website" link. KOS is missing. |
| **Case study** `/work/[slug]` | Numeric "Outcomes" appear in `sinch.md`, `nextech-ar.md`, `pernias-popup.md` and `madhav-farm.md`. The sidebar shows the raw enum (`FOUNDER-LED`). There is no Article schema. |
| **Trusted By** `/trusted-by` | Good page. `anurag-chavan.jpg` is referenced in `src/data/trustedBy.ts` but missing from `public/images/trusted/`, so it falls back to initials. |
| **Blog** `/blog` | Pulled from Blogger at build time (10 posts). Fine apart from items 1.1.9 and 1.1.10. Optional: typo in the post title "Am I Lier?". |
| **Notes** `/notes` | **Live page shows developer text:** "No LinkedIn posts yet. Create MDX files in src/content/linkedin/ to add posts." The collection is empty. |
| **Narrative** `/narrative/{raitalk,madhav-farm,unified-cdp}` | Live and indexable, but the content is just "Content coming soon." placeholders. Not linked from anywhere. |
| **Contact** `/contact` | Formspree form only. No Topmate, no email or LinkedIn fallback. |
| **Footer** | Shows "© 2024". No Topmate or KOS link. |

### 1.4 Repo hygiene
- 13 unused components: `ProjectCard{Debug,Final,Fixed,Rebuilt,Safe,Simple,Working}`, `BentoGrid`, `Navigation`, `NoteCard`, `ProjectDetailModal`, `Testimonials`, `Toast`.
- 17 stale AI-generated report `.md` files in the repo root.
- `console.log` noise in `ProjectRepository.ts` and `blog/[slug].astro` `getStaticPaths`.
- An unused `/api/project/[slug].ts` inside a static site.
- `README.md` still calls RaiTalk a working product.

---

## 2. Work packages

### WP1 — Technical SEO fixes (no visual change)
1. `astro.config.mjs`: set `site: 'https://www.rajkawale.com'` and `trailingSlash: 'never'`. Use `'always'` instead if Vercel serves slashes; check the live behaviour first.
2. `BaseLayout.astro`: `canonicalUrl = new URL(Astro.url.pathname, Astro.site).href`.
3. `SEO.astro`: use `url` for `og:url` and `twitter:url`, and remove `maximum-scale=1`.
4. `sitemap.xml.ts`: build URLs with `new URL(path, site)`, and remove `/projects` and `/projects/*`. Add `/about` (WP6) and the image entries (WP7).
5. `robots.txt`:
   - Sitemap → `https://www.rajkawale.com/sitemap.xml`
   - Add `ClaudeBot`, `Claude-SearchBot`, `Claude-User`, `OAI-SearchBot`, `Bingbot`
   - Keep the existing allows
6. Delete the WebSite `SearchAction`.
7. Blog duplicate content: on Blogger, either (a) set each post's canonical to `www.rajkawale.com/blog/<slug>`, or (b) keep Blogger as canonical and point `/blog/*` there. **Recommend (a).** Blogger's theme needs a manual edit, so document the steps for Raj.
8. Page-specific descriptions:
   - Work pages use `project.description`.
   - Blog posts use `post.excerpt`, trimmed to about 155 characters.

**Verify:** after build, `grep -r '//' dist/**/*.html | grep canonical` returns nothing, and every `<loc>` in `dist/sitemap.xml` returns 200 on the preview.

### WP2 — Identity refresh
One canonical bio string, used verbatim everywhere (title, hero, schema, llms.txt, RSS, ai.txt, README):
> **Raj Kawale — Product Lead, GenAI & Agentic AI at Indegene (Bengaluru). Builds LLM-orchestrated products for healthcare; building KOS, an exocortex that trains thinking instead of replacing it.**

1. `index.astro` hero: keep "Think. Build. Ship."
   - Subline: "Product Lead · GenAI & Agentic AI @ Indegene"
   - One-liner: the LinkedIn Indegene summary
2. Default title in `BaseLayout.astro` and `index.astro`: `Raj Kawale — Product Lead, GenAI & Agentic AI`. Update descriptions and keywords (GenAI, Agentic AI, LLM orchestration, healthcare AI, Product Lead).
3. JSON-LD `Person`:
   - `jobTitle`: "Product Lead — GenAI & Agentic AI"
   - `worksFor`: Indegene only (with url)
   - `address`: Bengaluru, IN
   - Update `knowsAbout`
   - `image` (WP7)
   - `sameAs`: LinkedIn, GitHub, `https://topmate.io/rajkawale`, `https://www.linkedin.com/company/kos-exocortex/`, trinka subdomain only if kept (D7)
   - Past employers go in `alumniOf`-style `OrganizationRole` entries on `/about` instead of in `worksFor`
4. Footer: "© {currentYear}".

### WP3 — Sunset RaiTalk, highlight KOS
1. **Add `src/content/work/kos.md`**:
   - title "KOS — An Exocortex"
   - category `founder-led`
   - priority 0
   - badge "Weekend project · Nov 2025 – present"
   - tags from the LinkedIn skills (e.g. `AI-NATIVE`, `POSTGRESQL`, `PGVECTOR`)
   - actionUrl per D2
   - **Body = Raj's own LinkedIn copy** (quoted in §3), under headings: The problem → What KOS does → Status ("currently one user: its founder") → Why it matters.
2. Homepage badge (`index.astro:126-138`): "Currently building **KOS — an exocortex** →", linking to `/work/kos`. Update the Clarity event name.
3. Homepage featured order: `['kos', 'raitalk', 'madhav-farm']`, with Sinch moved to /work only (or keep it, as Raj prefers). Remove the per-slug colour hardcoding at `index.astro:165-183` and use one style keyed by position.
4. `raitalk.md`:
   - description in past tense
   - badge "Founder · Jul 2025 – May 2026 · Sunset"
   - remove `actionUrl`/`secondaryCTA*` pointing to raitalk.com (per D4)
   - add a short "Why it stopped / what carried into KOS" section, one paragraph for Raj to write
5. Remove RaiTalk from `worksFor`, `sameAs` and `README.md`.
6. Delete `src/pages/narrative/*`. Add `vercel.json` 301 redirects:
   - `/narrative/raitalk` → `/work/raitalk`
   - `/narrative/madhav-farm` → `/work/madhav-farm`
   - `/narrative/unified-cdp` → `/work/sinch`

### WP4 — Remove metrics
1. Remove metric rendering from `ProjectCard.astro:374-381`, `index.astro:195-202` and `:277-283`. Delete `getMetricIcon` in `src/utils/ui-helpers.ts`, and remove its import.
2. Remove the `metric:` frontmatter from all `src/content/work/*.md`. Make `metric` absent from the schema in `src/content/config.ts`.
3. Per D1(b): rewrite the "Outcomes" sections of `sinch.md`, `nextech-ar.md` and `pernias-popup.md` as qualitative outcomes, e.g. "Faster, safer releases after CI/CD adoption". Remove figures from the "Context" and "Execution" paragraphs too (`pernias-popup.md` mentions ₹1Cr+, 500+ designers, 50s→1s). Madhav Farm per D1.
4. **Verify:** `grep -rnE '[0-9]+%|₹|\+[0-9]' src/content/work` returns only lines Raj chose to keep.

### WP5 — Topmate + KOS CTAs
1. Desktop and mobile header: add a pill button **"Book a session"** → `https://topmate.io/rajkawale` (`target=_blank`, `rel="noopener"`, Clarity event `Click_Topmate`), right of Contact.
2. `/contact`: a card above the form: "Prefer a 1:1? Book a session on Topmate →". Add email and LinkedIn as fallbacks.
3. Footer CONNECT: add Topmate and KOS (LinkedIn company page) icons or text links.
4. Blog post footer card: add "Book a session" next to "Discuss on LinkedIn".

### WP6 — LLM / AI search optimisation (Gemini, ChatGPT, Google AI Mode, Claude, Perplexity)
AI assistants answer "who is Raj Kawale" from search indexes (Google, Bing, Brave) plus pages they can fetch. We control whether the site is a clean, consistent, fact-dense source.
1. **New `/about` page** (`src/pages/about.astro`), plain server-rendered text with no animation-gated content:
   - First sentence is the canonical bio.
   - Experience timeline with exact dates, taken from LinkedIn (Indegene May 2026–present, KOS Nov 2025–present, RaiTalk Jul 2025–May 2026, and earlier roles; Raj to supply dates for Sinch, Nextech AR, Pernia's/Purple Style Labs, Invest4EDU, The Luxury Closet).
   - Skills, education, location, and links (LinkedIn, GitHub, Topmate, KOS).
   - An FAQ written as real Q&A: "What does Raj Kawale do?", "What is KOS?", "Where does Raj work?", "How can I book time with Raj?".
   - Schema: `ProfilePage` whose `mainEntity` is the Person.
   - Add to nav (replace "Trusted By" in the header with "About"; keep Trusted By linked from home and /about), the footer and the sitemap.
2. **`public/llms.txt`**, following the llms.txt proposal format:
   - H1 name
   - blockquote with the canonical bio
   - sections "About", "Current work", "Case studies" and "Writing", with absolute links and one-line descriptions each
3. **`src/pages/llms-full.txt.ts`**: build-time endpoint that concatenates /about plus every work entry body and blog excerpt as markdown.
4. Per-page schema:
   - `Article` on `/work/[slug]` (author = Person @id)
   - `BlogPosting` on `/blog/[slug]` (datePublished, author)
   - Give the Person an `@id` (`https://www.rajkawale.com/#person`) and reference it everywhere
5. Update `public/ai.txt` and the RSS channel description to the canonical bio. RSS should include blog posts and notes, not just work items.
6. Headings: make sure each page has exactly one `<h1>` containing the entity name or topic. The footer uses `<h2>` for the logo, so change it to `<p>`.
7. Performance: keep hero text in the HTML (it already is). No change needed.
8. **Manual steps for Raj** (agent writes them into a checklist in the PR description):
   - Google Search Console: verify `www.rajkawale.com`, submit the sitemap, request indexing for `/` and `/about`.
   - Bing Webmaster Tools: import from GSC and submit the sitemap. ChatGPT search leans on Bing.
   - Put `https://www.rajkawale.com` in the LinkedIn profile Website field, the KOS company page Website field, GitHub bio, Topmate bio and X bio.
   - Use the same headline string on LinkedIn, GitHub and Topmate.

### WP7 — Photo discoverable in search but not shown on the site
**What's possible:** there's no reliable way to rank a photo in Google Images without it appearing on some page. Hiding it with CSS (`display:none`) is unreliable and can be treated as hidden content, so **don't**. These signals don't render on the page:
1. Save the image as `public/images/identity/raj-kawale.jpg` (descriptive filename, at least 1200×1200, under 300 KB, EXIF stripped).
2. JSON-LD `Person.image` (an ImageObject with `contentUrl`, `caption: "Raj Kawale"`) on every page.
3. `og:image` and `twitter:image` on `/about` only. It shows in LinkedIn, WhatsApp and X link previews, not on the page. Keep `/og-image.png` for other pages.
4. Image sitemap: add `xmlns:image` plus `<image:image><image:loc>…/raj-kawale.jpg</image:loc></image:image>` under the `/about` URL.
5. Add the same image to the `llms.txt` About section as a link (not rendered).

**Honest expectation:** the strongest signal for "Raj Kawale" image results is the **same photo on pages that do display it**: LinkedIn, GitHub avatar, Topmate, X. If the non-rendered approach doesn't surface in about 4–8 weeks, the fallback is a small avatar on `/about` only. AI assistants rarely show photos of individuals. Google AI Mode draws on Google Images and the Knowledge Graph.

### WP8 — LinkedIn posts → website
**Constraint:** LinkedIn has no self-serve API to *read* your personal-profile posts (member post read access is partner-only). No-code "new LinkedIn post" triggers for personal profiles are unreliable. Scraper feeds break and violate LinkedIn's terms. So a true "auto-sync" plugin isn't possible. These are the workable options:

- **Option A — one-tap capture after posting (recommended ongoing):**
  1. `.github/workflows/add-linkedin-note.yml` with a `workflow_dispatch` form: `post_url`, `title`, `text` (multiline), `tags`, `date`.
  2. The job writes `src/content/linkedin/<date>-<slug>.md` (frontmatter matches `content.config.ts` `linkedin` schema, with `canonicalUrl` = post URL) and commits to `main`. Vercel redeploys.
  3. Raj triggers it from the GitHub mobile app, or from an **iOS Shortcut** in the share sheet. LinkedIn app → Share → Copy link → Shortcut → `POST /repos/rajkawale/rajkawale/actions/workflows/add-linkedin-note.yml/dispatches` with a fine-grained PAT stored in the Shortcut.
  4. **Reminder ("ask me to update"):** a second workflow on `schedule` (e.g. every Friday 18:00 IST) opens a GitHub Issue: "Posted on LinkedIn this week? Add it → <workflow link>", auto-closed when a note commit lands. GitHub mobile push notifications deliver it.
- **Option B — publish on the site first, then post to LinkedIn:** write the note as a markdown file, and an Action posts it to LinkedIn through the self-serve Share on LinkedIn API (`w_member_social`), linking back. Best for SEO, since the site becomes the original. Costs: a LinkedIn developer app, and re-authorising about every 60 days.
- **Option C — one-time backfill (do regardless):** Raj downloads a data export (LinkedIn → Settings → Data privacy → Get a copy of your data → Posts/Shares). Script `scripts/import-linkedin-export.js` converts `Shares.csv` into `src/content/linkedin/*.md`, skipping empty or reshare rows. Raj reviews which posts to publish (`draft: true` by default).

**Site side (all options):**
- Store the **full post text** in the markdown body. Crawlers and LLMs can't read LinkedIn embed iframes.
- `/notes` shows the list plus a "View on LinkedIn" link. `/notes/[slug]` renders the text with `BlogPosting` schema, plus a canonical to the LinkedIn URL for Option A/C, or self for Option B.
- Replace the empty-state developer text with nothing (hide the section) or "Notes coming soon".
- Add "Notes" to nav, the sitemap and llms.txt only once at least 3 notes exist.

### WP9 — Cleanup
- Delete the 13 unused components (§1.4) and `src/pages/api/project/[slug].ts`, after `grep` confirms zero imports.
- Move the 17 root report `.md` files to `docs/archive/`, or delete them (ask Raj).
- Remove `console.log` debug lines from `ProjectRepository.ts` and `blog/[slug].astro`.
- Add the missing `public/images/trusted/anurag-chavan.jpg`, or accept the initials fallback.
- Update `README.md` to the canonical bio, KOS and Indegene.

---

## 3. Source content (from Raj, for WP2/WP3)

**LinkedIn experience (as of Sep 2026)**
- Product Lead — GenAI & Agentic AI · Indegene · Full-time · May 2026 – Present · Bengaluru, On-site. "Leading GenAI and Agentic AI product development for healthcare organizations — from problem framing to client deployment. Working at the intersection of LLM orchestration, clinical workflows, and…" (Raj to supply the full text)
- Personal Project · KOS — An Exocortex · Self-employed · Nov 2025 – Present. Skills: PostgreSQL, pgvector, +10 (Raj to list).
- Founder — AI Conversational Platform · RaiTalk · Jul 2025 – May 2026 · India, Remote. "Built and owned an LLM-powered conversational AI product end to end, from problem discovery to live MVP, focused on clarity-first chat UX and adaptive cognitive framing."

**KOS company page** (`linkedin.com/company/kos-exocortex`)
- Tagline: "AI that trains thinking instead of replacing it. Independent exocortex project, currently one user, its founder."
- Overview:
  > AI is a black box even to the people building it — nobody fully knows how it reasons or where it's headed. The common response is to hand thinking over to it anyway: ask, get an answer, skip the reasoning.
  >
  > KOS does the opposite. Before it answers, it forces a committed position and a probability. Then it scores that position against what actually happened — not against how helpful the answer felt.
  >
  > Independent project. Currently one user: its founder. Built to find where human thinking and AI reasoning actually combine, not where one replaces the other.

**Links:** Topmate `https://topmate.io/rajkawale` (verified 200) · LinkedIn `https://www.linkedin.com/in/rajkawale/` · GitHub `https://github.com/rajkawale`

---

## 4. Suggested order & final verification
WP1 → WP2 → WP4 → WP3 → WP5 → WP6 → WP7 → WP9 → WP8. WP8 last, because it needs D6 and a GitHub token set up by Raj.

Final checks on a Vercel preview deploy:
- `npm run build` is clean with no `console.log` noise.
- Every sitemap `<loc>` returns 200, and no canonical contains `//` after the host.
- `/llms.txt`, `/about` and `/notes` render with no developer text.
- JSON-LD passes validator.schema.org (Raj runs Google's Rich Results Test).
- `grep -ri raitalk dist` hits only the RaiTalk case study and redirects.
- Lighthouse SEO and Accessibility score at least 95 on `/` and `/about`.
