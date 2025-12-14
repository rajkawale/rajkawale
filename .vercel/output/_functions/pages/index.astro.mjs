/* empty css                                  */
import { a as createComponent, m as maybeRenderHead, b as renderScript, e as addAttribute, d as renderTemplate, r as renderComponent, F as Fragment } from '../chunks/astro/server_D4D8iJOc.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_I5yDT4-y.mjs';
import { c as container } from '../chunks/container_D5zjtpvj.mjs';
import { $ as $$ArticleRow } from '../chunks/ArticleRow_C9zkyOPE.mjs';
import 'clsx';
import { t as trustedBy } from '../chunks/trustedBy_CEjZhd-j.mjs';
/* empty css                                 */
import { g as getCollection } from '../chunks/_astro_content_DFbWQ2k5.mjs';
export { renderers } from '../renderers.mjs';

const $$TrustedBy = createComponent(($$result, $$props, $$slots) => {
  const featuredTestimonials = trustedBy.filter((person) => person.featured);
  function getInitials(name) {
    const parts = name.trim().split(/\s+/);
    if (parts.length === 1) {
      return parts[0].substring(0, 2).toUpperCase();
    }
    return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
  }
  function toSlug(name) {
    return name.toLowerCase().replace(/\s+/g, "-");
  }
  return renderTemplate`${maybeRenderHead()}<section id="trusted-by" class="section-spacer pb-24 px-6 md:px-12 mt-24" data-astro-cid-4binqcmu> <div class="max-w-[1100px] mx-auto" data-astro-cid-4binqcmu> <!-- Header --> <div class="mb-16 text-center" data-astro-cid-4binqcmu> <h2 class="text-4xl md:text-5xl font-serif font-bold text-slate-100 mb-4" data-astro-cid-4binqcmu>
Trusted By<span class="text-gray-500" data-astro-cid-4binqcmu>.</span> </h2> <p class="text-zinc-400 text-lg font-sans" data-astro-cid-4binqcmu>
Perspectives from people I've built products with.
</p> </div> <!-- Brick Layout Grid --> <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12" data-astro-cid-4binqcmu> ${featuredTestimonials.map((person) => {
    const displayText = person.shortText || person.text;
    return renderTemplate`<div${addAttribute(`moonlight-container trusted-card bg-neutral-900/50 backdrop-blur-xl border border-white/10 rounded-xl p-6 flex flex-col gap-4 transition-all duration-300 ease-out cursor-pointer group hover:border-neutral-200 ${person.gridClass}`, "class")} data-trusted-card${addAttribute(toSlug(person.name), "data-slug")} data-astro-cid-4binqcmu> <!-- Header: Avatar + Name + Role --> <div class="flex items-start gap-3" data-astro-cid-4binqcmu> <!-- Avatar --> <div class="profile-image-container w-10 h-10 rounded-full border-2 border-white/20 flex items-center justify-center bg-gradient-to-br from-purple-500/20 to-blue-500/20 relative overflow-hidden flex-shrink-0" data-astro-cid-4binqcmu> <img${addAttribute(person.image, "src")}${addAttribute(person.name, "alt")} class="profile-image w-full h-full rounded-full object-cover absolute inset-0"${addAttribute(person.name, "data-person-name")} data-astro-cid-4binqcmu> <span class="profile-initials text-white font-semibold text-sm hidden"${addAttribute(getInitials(person.name), "data-initials")} data-astro-cid-4binqcmu> ${getInitials(person.name)} </span> </div> <!-- Name + Role --> <div class="flex-1 min-w-0" data-astro-cid-4binqcmu> <a${addAttribute(person.linkedin, "href")} target="_blank" rel="noopener noreferrer" class="group moonlight-text-link text-white font-serif font-bold text-sm transition-all duration-300 ease-out inline-flex items-center gap-1.5 mb-1" onclick="event.stopPropagation()" data-astro-cid-4binqcmu> ${person.name} <svg class="w-4 h-4 text-neutral-500 group-hover:text-white transition-colors flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" data-astro-cid-4binqcmu> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" data-astro-cid-4binqcmu></path> </svg> </a> <p class="text-zinc-500 text-xs font-sans leading-tight" data-astro-cid-4binqcmu>${person.role}</p> ${person.date && renderTemplate`<p class="text-zinc-600 text-xs font-mono mt-1" data-astro-cid-4binqcmu> ${new Date(person.date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long"
    })} </p>`} </div> </div> <!-- Body: Quote Text --> <p class="text-neutral-300 text-sm leading-relaxed font-sans font-light line-clamp-4" data-astro-cid-4binqcmu> ${displayText} </p> </div>`;
  })} </div> <!-- View All Perspectives Link - Bottom Right --> <div class="mt-12" data-astro-cid-4binqcmu> <div class="archive-link-container" data-astro-cid-4binqcmu> <a href="/trusted-by" class="archive-link" data-astro-cid-4binqcmu> <span data-astro-cid-4binqcmu>View all perspectives</span> <span class="arrow" data-astro-cid-4binqcmu>→</span> </a> </div> </div> </div> </section>  ${renderScript($$result, "C:/Users/Raj/Documents/source Code/rajkawale/src/components/TrustedBy.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Raj/Documents/source Code/rajkawale/src/components/TrustedBy.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const blogService = container.getBlogService();
  const allWorkItems = await getCollection("work");
  const featuredWorkSlugs = ["raitalk", "madhav-farm", "sinch"];
  const featuredWork = featuredWorkSlugs.map((slug) => allWorkItems.find((item) => item.slug === slug)).filter((item) => item !== void 0).sort((a, b) => {
    const order = { "raitalk": 1, "madhav-farm": 2, "sinch": 3 };
    return (order[a.slug] || 999) - (order[b.slug] || 999);
  });
  const allBlogPosts = (await blogService.getAllPosts()).sort((a, b) => b.publishedAt.getTime() - a.publishedAt.getTime());
  const featuredPost = allBlogPosts[0];
  const archivePosts = allBlogPosts.slice(1);
  function getReadingTime(content) {
    if (!content) return 1;
    const textContent = content.replace(/<[^>]*>/g, "");
    const wordCount = textContent.split(/\s+/).filter((word) => word.length > 0).length;
    const readingTime = Math.ceil(wordCount / 200);
    return readingTime < 1 ? 1 : readingTime;
  }
  let featuredPostReadingTime = 1;
  if (featuredPost) {
    try {
      const blogData = await import('../chunks/blogger_CSqcTWWM.mjs');
      const rawPosts = blogData.default || [];
      const rawPost = rawPosts.find((p) => p.slug === featuredPost.slug);
      const fullContent = rawPost?.content || "";
      featuredPostReadingTime = getReadingTime(fullContent);
    } catch (e) {
      console.error("Error loading blog content for reading time:", e);
    }
  }
  let archivePostsWithReadTime = [];
  if (archivePosts.length > 0) {
    try {
      const blogData = await import('../chunks/blogger_CSqcTWWM.mjs');
      const rawPosts = blogData.default || [];
      archivePostsWithReadTime = archivePosts.map((post) => {
        const rawPost = rawPosts.find((p) => p.slug === post.slug);
        const fullContent = rawPost?.content || "";
        const readTime = getReadingTime(fullContent);
        return { post, readTime };
      });
    } catch (e) {
      console.error("Error loading blog content for reading time:", e);
      archivePostsWithReadTime = archivePosts.map((post) => ({ post, readTime: 1 }));
    }
  }
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Raj Kawale | AI & SaaS Product Manager", "description": "AI and SaaS Product Manager with experience across zero-to-one and scaling products, spanning cognitive AI (RaiTalk), B2B SaaS platforms, and consumer systems.", "keywords": "AI Product Manager, SaaS Product Manager, zero to one products, scaling tech products, cognitive AI, RaiTalk, B2B SaaS, consumer platforms", "data-astro-cid-j7pv25f6": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-black text-zinc-300 relative z-10" style="padding-top: 150px;" data-astro-cid-j7pv25f6> <!-- Hero Section --> <section id="home" class="relative min-h-[85vh] flex items-center justify-center px-6 md:px-12 py-32 w-full" data-astro-cid-j7pv25f6> <div class="max-w-[1100px] mx-auto px-6 md:px-12 text-center w-full" data-astro-cid-j7pv25f6> <!-- Main Headline --> <h1 class="text-6xl md:text-7xl font-serif font-semibold tracking-tight text-white leading-tight" data-astro-cid-j7pv25f6> <span class="hero-word hero-think" data-astro-cid-j7pv25f6>Think</span><span class="hero-dot hero-dot-think text-gray-500" data-astro-cid-j7pv25f6>.</span> <span class="hero-word hero-build" data-astro-cid-j7pv25f6>Build</span><span class="hero-dot hero-dot-build text-gray-500" data-astro-cid-j7pv25f6>.</span> <span class="hero-word hero-ship" data-astro-cid-j7pv25f6>Ship</span><span class="hero-dot hero-dot-ship text-gray-500" data-astro-cid-j7pv25f6>.</span> </h1> <!-- Primary Description --> <p class="text-xl md:text-2xl font-sans text-gray-300 mt-6 max-w-3xl mx-auto leading-relaxed" data-astro-cid-j7pv25f6>
I take unclear product problems and carry them through to real-world impact — users, revenue, and ROI.
</p> <!-- Subline --> <div class="mt-6 space-y-2" data-astro-cid-j7pv25f6> <p class="text-base font-sans text-gray-400" data-astro-cid-j7pv25f6>
Product Manager • Founder
</p> <p class="text-sm font-sans text-gray-500" data-astro-cid-j7pv25f6>
AI SaaS, Enterprise Platforms, Venture Builds
</p> </div> </div> </section> <!-- Subtle Status Indicator --> <section class="relative -mt-16 mb-16 px-6 md:px-12" data-astro-cid-j7pv25f6> <div class="max-w-[1100px] mx-auto text-center" data-astro-cid-j7pv25f6> <a href="https://raitalk.rajkawale.com" target="_blank" rel="noopener noreferrer" class="inline-block text-sm text-gray-500 hover:text-gray-400 transition-colors duration-300" data-track-hero-raitalk data-astro-cid-j7pv25f6>
Currently building RaiTalk →
</a> </div> </section> <!-- Product & Business Builds Section --> <section id="work" class="py-32 px-6 md:px-12 relative z-10" data-astro-cid-j7pv25f6> <div class="max-w-[1100px] mx-auto" data-astro-cid-j7pv25f6> <div class="mb-20 text-center md:text-left" data-astro-cid-j7pv25f6> <h2 class="text-4xl md:text-5xl font-serif font-semibold text-white mb-6" data-astro-cid-j7pv25f6>
Product & Business Builds
</h2> <p class="text-zinc-400 text-lg font-sans max-w-2xl leading-relaxed" data-astro-cid-j7pv25f6>
Strategic product leadership across zero-to-one ventures and enterprise scale.
</p> </div> <div class="grid grid-cols-1 md:grid-cols-2 gap-10 mb-10" data-astro-cid-j7pv25f6> ${featuredWork.slice(0, 2).map((item) => {
    const data = item.data;
    const displayTags = (data.tags || []).slice(0, 3);
    const description = data.description || "";
    const metric = data.metric || "";
    const secondaryCTALabel = data.secondaryCTALabel;
    const secondaryCTAUrl = data.secondaryCTAUrl;
    const isRaiTalk = item.slug === "raitalk";
    const isMadhavFarm = item.slug === "madhav-farm";
    const cardSize = isRaiTalk ? "p-10 md:p-14 min-h-[480px]" : "p-8 md:p-10 min-h-[420px]";
    const titleSize = isRaiTalk ? "text-4xl md:text-5xl" : "text-3xl md:text-4xl";
    const headerMargin = isRaiTalk ? "mb-8" : "mb-6";
    const tagsMargin = isRaiTalk ? "mb-8" : "mb-6";
    const metricMargin = isRaiTalk ? "pt-10" : "pt-8";
    const gradientClass = isRaiTalk ? "bg-gradient-to-br from-neutral-900 via-neutral-900 to-purple-900/20" : isMadhavFarm ? "bg-gradient-to-br from-neutral-900 via-neutral-900 to-emerald-900/20" : "bg-gradient-to-br from-neutral-900 via-neutral-900 to-blue-900/20";
    const tagTextClass = isRaiTalk ? "text-purple-300 bg-purple-500/10 border-purple-500/20" : isMadhavFarm ? "text-emerald-300 bg-emerald-500/10 border-emerald-500/20" : "text-blue-300 bg-blue-500/10 border-blue-500/20";
    return renderTemplate`<article${addAttribute(`group relative bg-neutral-900/90 border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 hover:bg-neutral-800 transition-all duration-300 ease-out flex flex-col ${cardSize}`, "class")} data-astro-cid-j7pv25f6> <div${addAttribute(`absolute inset-0 ${gradientClass}`, "class")} data-astro-cid-j7pv25f6></div> <div class="relative z-10 flex flex-col h-full" data-astro-cid-j7pv25f6> <header${addAttribute(headerMargin, "class")} data-astro-cid-j7pv25f6> <div${addAttribute(`flex items-center gap-2 ${tagsMargin} flex-wrap`, "class")} data-astro-cid-j7pv25f6> ${displayTags.map((tag) => renderTemplate`<span${addAttribute(`px-2.5 py-1 text-[10px] uppercase tracking-widest font-sans ${tagTextClass} border rounded-md`, "class")} data-astro-cid-j7pv25f6> ${tag} </span>`)} </div> <h3${addAttribute(`${titleSize} font-serif font-normal text-white ${isRaiTalk ? "mb-4" : "mb-3"} tracking-tight leading-tight`, "class")} data-astro-cid-j7pv25f6> ${data.title} </h3> <p class="text-gray-400 text-base leading-relaxed font-sans line-clamp-2" data-astro-cid-j7pv25f6> ${description} </p> </header> <div${addAttribute(`mt-auto ${metricMargin} space-y-3`, "class")} data-astro-cid-j7pv25f6> ${metric && renderTemplate`<div class="mb-3" data-astro-cid-j7pv25f6> <p${addAttribute(`text-white font-bold text-sm ${isRaiTalk ? "leading-relaxed" : ""}`, "class")} data-astro-cid-j7pv25f6> ${metric} </p> </div>`} <a${addAttribute(`/work/${item.slug}`, "href")} class="inline-flex items-center justify-between w-full px-6 py-3.5 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/40 text-white font-medium rounded-full text-sm transition-all duration-200 group/btn hover:translate-x-1" data-astro-cid-j7pv25f6> <span data-astro-cid-j7pv25f6>Read case</span> <span class="group-hover/btn:translate-x-1 transition-transform" data-astro-cid-j7pv25f6>→</span> </a> ${secondaryCTALabel && secondaryCTAUrl && renderTemplate`<a${addAttribute(secondaryCTAUrl, "href")} target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-between w-full px-6 py-3 text-neutral-400 hover:text-white transition-all duration-300 text-sm font-medium group hover:translate-x-1" onclick="event.stopPropagation()" data-astro-cid-j7pv25f6> <span data-astro-cid-j7pv25f6>${secondaryCTALabel}</span> <span class="group-hover:translate-x-1 transition-transform text-xs" data-astro-cid-j7pv25f6>↗</span> </a>`} </div> </div> </article>`;
  })} </div> <!-- Card 3: Sinch (Enterprise - Supporting) --> ${(() => {
    const sinchItem = featuredWork.find((item) => item.slug === "sinch");
    if (!sinchItem) return null;
    const data = sinchItem.data;
    const displayTags = (data.tags || []).slice(0, 3);
    const description = data.description || "";
    const metric = data.metric || "";
    return renderTemplate`<article class="group relative bg-neutral-900/90 border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 hover:bg-neutral-800 transition-all duration-300 ease-out p-8 md:p-10" data-astro-cid-j7pv25f6> <div class="absolute inset-0 bg-gradient-to-br from-neutral-900 via-neutral-900 to-blue-900/20" data-astro-cid-j7pv25f6></div> <div class="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-10" data-astro-cid-j7pv25f6> <div class="flex-1" data-astro-cid-j7pv25f6> <div class="flex items-center gap-2 mb-4 flex-wrap" data-astro-cid-j7pv25f6> ${displayTags.map((tag) => renderTemplate`<span class="px-2.5 py-1 text-[10px] uppercase tracking-widest font-sans text-blue-300 bg-blue-500/10 border border-blue-500/20 rounded-md" data-astro-cid-j7pv25f6> ${tag} </span>`)} </div> <h3 class="text-2xl md:text-3xl font-serif font-normal text-white mb-2 leading-tight" data-astro-cid-j7pv25f6> ${data.title} </h3> <p class="text-gray-400 text-sm leading-relaxed max-w-xl font-sans line-clamp-2" data-astro-cid-j7pv25f6> ${description} </p> ${metric && renderTemplate`<div class="mt-3" data-astro-cid-j7pv25f6> <p class="text-white font-bold text-sm" data-astro-cid-j7pv25f6> ${metric} </p> </div>`} </div> <div class="flex-shrink-0" data-astro-cid-j7pv25f6> <a${addAttribute(`/work/${sinchItem.slug}`, "href")} class="inline-flex items-center gap-2 px-6 py-3.5 bg-white/5 hover:bg-white/10 border border-white/20 hover:border-white/40 text-white font-medium rounded-full text-sm transition-all duration-200 group/btn hover:translate-x-1" data-astro-cid-j7pv25f6> <span data-astro-cid-j7pv25f6>Read details</span> <span class="group-hover/btn:translate-x-1 transition-transform" data-astro-cid-j7pv25f6>→</span> </a> </div> </div> </article>`;
  })()} <!-- View All Work Link --> <div class="max-w-[1100px] mx-auto mt-12" data-astro-cid-j7pv25f6> <div class="archive-link-container" data-astro-cid-j7pv25f6> <a href="/work" class="archive-link" data-astro-cid-j7pv25f6> <span data-astro-cid-j7pv25f6>View all work</span> <span class="arrow" data-astro-cid-j7pv25f6>→</span> </a> </div> </div> </div> </section> <!-- Section Divider --> <div class="section-divider-wrapper flex justify-center" data-astro-cid-j7pv25f6> <div class="section-divider" data-astro-cid-j7pv25f6></div> </div> <!-- Trusted By Section --> ${renderComponent($$result2, "TrustedBy", $$TrustedBy, { "data-astro-cid-j7pv25f6": true })} <!-- Section Divider --> <div class="section-divider-wrapper flex justify-center" data-astro-cid-j7pv25f6> <div class="section-divider" data-astro-cid-j7pv25f6></div> </div> <!-- Think. Section --> <section id="writing" class="section-spacer pb-24 px-6 md:px-12 mt-24" data-astro-cid-j7pv25f6> <div class="max-w-4xl mx-auto" data-astro-cid-j7pv25f6> <div class="mb-16 text-center" data-astro-cid-j7pv25f6> <h2 class="text-4xl md:text-5xl font-serif font-semibold text-slate-100 mb-4" data-astro-cid-j7pv25f6>
Think<span class="text-gray-500" data-astro-cid-j7pv25f6>.</span> </h2> <p class="text-zinc-400 text-lg font-sans" data-astro-cid-j7pv25f6>
Making sense of product decisions, business mechanics, and mental models.
</p> </div>  <div class="max-w-4xl mx-auto" data-astro-cid-j7pv25f6> <!-- Featured Post Card - Full Width Glass Card --> ${featuredPost ? renderTemplate`<a${addAttribute(`/blog/${featuredPost.slug}`, "href")} class="think-featured-card block w-full bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-lg p-8 md:p-10 mb-12 transition-all duration-300 ease-out" data-track-featured-post data-astro-cid-j7pv25f6> <div class="flex flex-col md:flex-row gap-6" data-astro-cid-j7pv25f6> ${featuredPost.coverImage && renderTemplate`<div class="featured-post-thumbnail flex-shrink-0" data-astro-cid-j7pv25f6> <img${addAttribute(featuredPost.coverImage, "src")}${addAttribute(featuredPost.title, "alt")} class="w-full md:w-48 h-32 md:h-32 object-cover rounded-lg border border-white/10" loading="lazy" data-astro-cid-j7pv25f6> </div>`} <div class="flex-1" data-astro-cid-j7pv25f6> <h3 class="featured-post-title text-2xl md:text-3xl font-serif font-normal text-white mb-4 transition-all duration-300 ease-out" data-astro-cid-j7pv25f6> ${featuredPost.title} </h3> ${featuredPost.excerpt && renderTemplate`<p class="text-base text-zinc-300 mb-4 font-sans line-clamp-2 leading-relaxed" data-astro-cid-j7pv25f6> ${featuredPost.excerpt} </p>`} <div class="featured-post-meta" data-astro-cid-j7pv25f6> <time${addAttribute(featuredPost.publishedAt.toISOString(), "datetime")} class="text-sm text-zinc-500 font-sans" data-astro-cid-j7pv25f6> ${featuredPost.publishedAt.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  })} </time> ${featuredPostReadingTime > 0 && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-j7pv25f6": true }, { "default": async ($$result3) => renderTemplate` <span class="meta-separator" data-astro-cid-j7pv25f6>·</span> <span class="text-sm text-zinc-500 font-sans meta-read-time" data-astro-cid-j7pv25f6> ${featuredPostReadingTime} min
</span> ` })}`} </div> </div> </div> </a>` : renderTemplate`<div class="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-lg p-8 mb-12" data-astro-cid-j7pv25f6> <p class="text-zinc-500 text-sm font-sans" data-astro-cid-j7pv25f6>No posts yet.</p> </div>`} <!-- Archive List - Simple Vertical List --> ${archivePostsWithReadTime.length > 0 && renderTemplate`<div class="think-archive-list" data-astro-cid-j7pv25f6> ${archivePostsWithReadTime.slice(0, 5).map(({ post, readTime }) => renderTemplate`${renderComponent($$result2, "ArticleRow", $$ArticleRow, { "post": post, "readTime": readTime, "data-astro-cid-j7pv25f6": true })}`)} <!-- View Full Archive Link --> <div class="archive-link-container" data-astro-cid-j7pv25f6> <a href="/blog" class="archive-link" data-track-archive-link data-astro-cid-j7pv25f6> <span data-astro-cid-j7pv25f6>View all archive</span> <span class="arrow" data-astro-cid-j7pv25f6>→</span> </a> </div> </div>`} </div> </div> </section> </main> ` })}  ${renderScript($$result, "C:/Users/Raj/Documents/source Code/rajkawale/src/pages/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Raj/Documents/source Code/rajkawale/src/pages/index.astro", void 0);

const $$file = "C:/Users/Raj/Documents/source Code/rajkawale/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
