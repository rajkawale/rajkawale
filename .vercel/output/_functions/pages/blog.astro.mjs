/* empty css                                  */
import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_DZlb7AaN.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_DuN9dx8k.mjs';
import { c as container } from '../chunks/container_ChaB-zdo.mjs';
import { $ as $$SmartBackButton } from '../chunks/SmartBackButton_CLx7kkva.mjs';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const blogService = container.getBlogService();
  const allPosts = await blogService.getAllPosts();
  const latestPost = allPosts[0];
  const olderPosts = allPosts.slice(1);
  function getReadingTime(content) {
    if (!content) return 1;
    const textContent = content.replace(/<[^>]*>/g, "");
    const wordCount = textContent.split(/\s+/).filter((word) => word.length > 0).length;
    const readingTime = Math.ceil(wordCount / 200);
    return readingTime < 1 ? 1 : readingTime;
  }
  let featuredPostReadingTime = 1;
  if (latestPost) {
    try {
      const blogData = await import('../chunks/blogger_CSqcTWWM.mjs');
      const rawPosts = blogData.default || [];
      const rawPost = rawPosts.find((p) => p.slug === latestPost.slug);
      const fullContent = rawPost?.content || "";
      featuredPostReadingTime = getReadingTime(fullContent);
      console.log("[Blog Index] Featured post reading time:", featuredPostReadingTime);
    } catch (e) {
      console.error("[Blog Index] Error loading blog content for reading time:", e);
    }
    if (latestPost.publishedAt && !(latestPost.publishedAt instanceof Date)) {
      latestPost.publishedAt = new Date(latestPost.publishedAt);
    }
  }
  console.log("[Blog Index] All posts count:", allPosts.length);
  console.log("[Blog Index] Latest post:", latestPost?.title);
  console.log("[Blog Index] Featured post reading time final:", featuredPostReadingTime);
  let olderPostsWithReadTime = [];
  if (olderPosts.length > 0) {
    try {
      const blogData = await import('../chunks/blogger_CSqcTWWM.mjs');
      const rawPosts = blogData.default || [];
      olderPostsWithReadTime = olderPosts.map((post) => {
        const rawPost = rawPosts.find((p) => p.slug === post.slug);
        const fullContent = rawPost?.content || "";
        const readTime = getReadingTime(fullContent);
        return { post, readTime };
      });
    } catch (e) {
      console.error("Error loading blog content for reading time:", e);
      olderPostsWithReadTime = olderPosts.map((post) => ({ post, readTime: 1 }));
    }
  }
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Think | Writing on Product, AI, and Systems \u2013 Raj Kawale", "description": "Writing on product decisions, cognitive AI, business mechanics, and mental models. Notes on building, shipping, and scaling technology products.", "keywords": "product thinking, mental models, AI product management, systems thinking, product decisions, scaling technology products", "data-astro-cid-5tznm7mj": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen bg-[#020617] text-zinc-300 py-24 px-6 md:px-12 relative z-10 pb-8" style="padding-top: 150px;" data-astro-cid-5tznm7mj> <div class="max-w-4xl mx-auto" data-astro-cid-5tznm7mj> <header class="mb-12 border-b border-zinc-800 pb-6" data-astro-cid-5tznm7mj> <h1 class="text-4xl md:text-5xl font-serif font-bold text-white mb-4" data-astro-cid-5tznm7mj>
Writing
</h1> <p class="text-lg text-zinc-300 font-sans" data-astro-cid-5tznm7mj>
Insights on product management, AI innovation, and building scalable systems.
</p> </header> ${allPosts.length > 0 ? renderTemplate`<div data-astro-cid-5tznm7mj> <!-- Featured Post Card - Full Width Glass Card --> ${latestPost && renderTemplate`<a${addAttribute(`/blog/${latestPost.slug}`, "href")} class="writing-featured-card block w-full bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-lg p-8 md:p-10 mb-12 transition-all duration-300 ease-out" data-astro-cid-5tznm7mj> <div class="flex flex-col md:flex-row gap-6" data-astro-cid-5tznm7mj> ${latestPost.coverImage && renderTemplate`<div class="featured-post-thumbnail flex-shrink-0" data-astro-cid-5tznm7mj> <img${addAttribute(latestPost.coverImage, "src")}${addAttribute(latestPost.title, "alt")} class="w-full md:w-48 h-32 md:h-32 object-cover rounded-lg border border-white/10" loading="lazy" data-astro-cid-5tznm7mj> </div>`} <div class="flex-1" data-astro-cid-5tznm7mj> <h2 class="writing-featured-post-title text-2xl md:text-3xl font-serif font-bold text-white mb-4 transition-all duration-300 ease-out" data-astro-cid-5tznm7mj> ${latestPost.title} </h2> ${latestPost.excerpt && renderTemplate`<p class="text-base text-zinc-300 mb-4 font-sans line-clamp-2 leading-relaxed" data-astro-cid-5tznm7mj> ${latestPost.excerpt} </p>`} <div class="featured-post-meta" data-astro-cid-5tznm7mj> <time${addAttribute(latestPost.publishedAt.toISOString(), "datetime")} class="text-sm text-zinc-500 font-sans" data-astro-cid-5tznm7mj> ${latestPost.publishedAt.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  })} </time> ${featuredPostReadingTime > 0 ? renderTemplate`<span class="flex items-center gap-2" data-astro-cid-5tznm7mj> <span class="text-zinc-500/40" data-astro-cid-5tznm7mj>·</span> <span class="text-sm text-zinc-500 font-sans" data-astro-cid-5tznm7mj> ${featuredPostReadingTime} min
</span> </span>` : null} </div> </div> </div> </a>`} <!-- Archive List - Editorial Index Style --> ${olderPostsWithReadTime.length > 0 && renderTemplate`<div class="space-y-0" data-astro-cid-5tznm7mj> ${olderPostsWithReadTime.map(({ post, readTime }) => renderTemplate`<a${addAttribute(`/blog/${post.slug}`, "href")} class="group flex items-center gap-6 py-6 border-b border-white/5 hover:bg-white/[0.02] transition-all duration-200" data-astro-cid-5tznm7mj> <!-- Left: Date --> <time${addAttribute(post.publishedAt.toISOString(), "datetime")} class="text-sm font-sans text-zinc-500 w-32 shrink-0 tabular-nums" data-astro-cid-5tznm7mj> ${post.publishedAt.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  })} </time> <!-- Middle: Title --> <h2 class="flex-1 text-xl font-serif text-slate-200 group-hover:text-indigo-400 transition-colors" data-astro-cid-5tznm7mj> ${post.title} </h2> <!-- Right: Arrow --> <span class="opacity-0 group-hover:opacity-100 transition-opacity text-zinc-400 text-xl" data-astro-cid-5tznm7mj>
→
</span> </a>`)} </div>`} </div>` : renderTemplate`<div class="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-lg p-12 text-center border-t-white/20" data-astro-cid-5tznm7mj> <p class="text-lg text-zinc-300 font-sans" data-astro-cid-5tznm7mj>
No blog posts yet. Posts will appear here once the Blogger sync script runs.
</p> <p class="mt-4 text-sm text-zinc-500 font-mono" data-astro-cid-5tznm7mj>
Run <code class="bg-zinc-950/50 px-2 py-1 rounded border border-zinc-800" data-astro-cid-5tznm7mj>npm run sync:blog</code> to fetch posts.
</p> </div>`} </div> <div class="max-w-4xl mx-auto mt-16 mb-0 border-t border-white/10 pt-8" data-astro-cid-5tznm7mj> ${renderComponent($$result2, "SmartBackButton", $$SmartBackButton, { "data-astro-cid-5tznm7mj": true })} </div> </main> ` })} `;
}, "C:/Users/Raj/Documents/source Code/rajkawale/src/pages/blog/index.astro", void 0);

const $$file = "C:/Users/Raj/Documents/source Code/rajkawale/src/pages/blog/index.astro";
const $$url = "/blog";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
