/* empty css                                     */
import { c as createAstro, a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute, e as renderScript, F as Fragment, u as unescapeHTML } from '../../chunks/astro/server_DZlb7AaN.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_DuN9dx8k.mjs';
import { $ as $$SmartBackButton } from '../../chunks/SmartBackButton_CLx7kkva.mjs';
import { c as container } from '../../chunks/container_ChaB-zdo.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://rajkawale.com");
async function getStaticPaths() {
  try {
    const blogService = container.getBlogService();
    const posts = await blogService.getAllPosts();
    console.log("[getStaticPaths] Total posts loaded:", posts?.length || 0);
    if (!posts || posts.length === 0) {
      console.warn("[getStaticPaths] No posts found");
      return [];
    }
    const validPosts = posts.filter((post) => {
      const isValid = post && post.slug && post.title && post.publishedAt;
      if (!isValid) {
        console.warn("[getStaticPaths] Invalid post filtered out:", {
          slug: post?.slug,
          hasTitle: !!post?.title,
          hasPublishedAt: !!post?.publishedAt
        });
      }
      return isValid;
    });
    console.log("[getStaticPaths] Valid posts:", validPosts.length);
    console.log(
      "[getStaticPaths] Post slugs:",
      validPosts.map((p) => p.slug)
    );
    return validPosts.map((post) => ({
      params: { slug: post.slug },
      props: { post }
    }));
  } catch (error) {
    console.error("Error in getStaticPaths for blog:", error);
    return [];
  }
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  let { post } = Astro2.props;
  const { slug } = Astro2.params;
  if (!post && slug) {
    try {
      const blogService = container.getBlogService();
      post = await blogService.getPostBySlug(slug);
    } catch (error) {
      console.error("Error fetching post by slug:", error);
    }
  }
  if (!post) {
    return new Response(null, { status: 404, statusText: "Not Found" });
  }
  if (post.publishedAt && !(post.publishedAt instanceof Date)) {
    post.publishedAt = new Date(post.publishedAt);
  }
  let fullContent = "";
  try {
    const blogData = await import('../../chunks/blogger_CSqcTWWM.mjs');
    const rawPosts = blogData.default || [];
    const rawPost = rawPosts.find((p) => p.slug === post.slug);
    fullContent = rawPost?.content || "";
  } catch (e) {
    console.error("Error loading blog content:", e);
  }
  function getReadingTime(content) {
    if (!content) return 1;
    const textContent = content.replace(/<[^>]*>/g, "");
    const wordCount = textContent.split(/\s+/).filter((word) => word.length > 0).length;
    const readingTime2 = Math.ceil(wordCount / 200);
    return readingTime2 < 1 ? 1 : readingTime2;
  }
  const readingTime = getReadingTime(fullContent);
  const currentUrl = Astro2.url.href;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `${post.title} | Raj Kawale`, "description": `An essay on ${post.title},
exploring product decisions, user psychology, and system-level tradeoffs in
technology products.`, "keywords": "product management insights, mental models, AI products, systems thinking, decision making", "data-astro-cid-4sn4zg3r": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen bg-[#020617] text-zinc-300 py-24 px-6 md:px-12 relative z-10" style="padding-top: 150px;" data-astro-cid-4sn4zg3r> <article class="max-w-4xl mx-auto" data-astro-cid-4sn4zg3r> <header class="mb-12 border-b border-zinc-800 pb-8" data-astro-cid-4sn4zg3r> <h1 class="mb-6 text-4xl md:text-5xl font-serif font-bold text-slate-100 leading-tight" data-astro-cid-4sn4zg3r> ${post.title} </h1> <!-- Meta Row --> <div class="flex flex-wrap items-center gap-3 text-sm" data-astro-cid-4sn4zg3r> <time${addAttribute(post.publishedAt.toISOString(), "datetime")} class="font-mono text-zinc-400" data-astro-cid-4sn4zg3r> ${post.publishedAt.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  })} </time> <span class="text-zinc-600" data-astro-cid-4sn4zg3r>•</span> <span class="font-sans text-zinc-400" data-astro-cid-4sn4zg3r> ${readingTime} min read </span> ${post.category && renderTemplate`${renderComponent($$result2, "Fragment", Fragment, { "data-astro-cid-4sn4zg3r": true }, { "default": async ($$result3) => renderTemplate`${" "}<span class="text-zinc-600" data-astro-cid-4sn4zg3r>•</span>${" "}<span class="px-3 py-1 rounded-full text-xs font-mono font-medium bg-white/[0.03] border border-white/10 text-zinc-300" data-astro-cid-4sn4zg3r> ${" "} ${post.category}${" "} </span>${" "}` })}`} </div> </header> <div class="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-slate-100 prose-p:text-zinc-300 prose-a:text-[#888] prose-a:no-underline prose-a:hover:underline" data-astro-cid-4sn4zg3r> ${fullContent ? renderTemplate`<div data-astro-cid-4sn4zg3r>${unescapeHTML(fullContent)}</div>` : renderTemplate`<p class="text-zinc-400 font-sans" data-astro-cid-4sn4zg3r>Content loading...</p>`} </div> <!-- Connect Footer --> <div class="mt-16 mb-12" data-astro-cid-4sn4zg3r> <div class="connect-card bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-lg p-6 md:p-8" data-astro-cid-4sn4zg3r> <div class="flex items-start gap-4 mb-6" data-astro-cid-4sn4zg3r> <div class="flex-shrink-0 w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center" data-astro-cid-4sn4zg3r> <svg class="w-6 h-6 text-zinc-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-4sn4zg3r> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" data-astro-cid-4sn4zg3r></path> </svg> </div> <div class="flex-1" data-astro-cid-4sn4zg3r> <p class="text-base text-zinc-300 font-sans leading-relaxed" data-astro-cid-4sn4zg3r>
I write about building systems and AI. If you found this
                valuable, let's connect.
</p> </div> </div> <div class="flex flex-wrap gap-3" data-astro-cid-4sn4zg3r> <a href="https://www.linkedin.com/in/rajkawale/" target="_blank" target="_blank" rel="noopener noreferrer" class="connect-button flex items-center gap-2 px-4 py-2.5 rounded border border-white/20 bg-black/20 backdrop-blur-sm hover:bg-black/30 hover:border-white/30 transition-all text-sm font-mono text-white" data-track-share-linkedin data-astro-cid-4sn4zg3r> <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-4sn4zg3r> <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" data-astro-cid-4sn4zg3r></path> </svg> Discuss on LinkedIn
</a> <a${addAttribute(`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)}&url=${encodeURIComponent(currentUrl)}`, "href")} target="_blank" rel="noopener noreferrer" class="connect-button flex items-center gap-2 px-4 py-2.5 rounded border border-white/20 bg-black/20 backdrop-blur-sm hover:bg-black/30 hover:border-white/30 transition-all text-sm font-mono text-white" data-track-share-twitter data-astro-cid-4sn4zg3r> <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-4sn4zg3r> <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" data-astro-cid-4sn4zg3r></path> </svg>
Share Article
</a> </div> </div> </div> <footer class="mt-8 border-t border-zinc-800 pt-6" data-astro-cid-4sn4zg3r> ${renderComponent($$result2, "SmartBackButton", $$SmartBackButton, { "label": "Back to writing", "fallbackHref": "/blog", "className": "mb-0", "data-astro-cid-4sn4zg3r": true })} </footer>  ${renderScript($$result2, "C:/Users/Raj/Documents/source Code/rajkawale/src/pages/blog/[slug].astro?astro&type=script&index=0&lang.ts")} </article> </main> ` })}`;
}, "C:/Users/Raj/Documents/source Code/rajkawale/src/pages/blog/[slug].astro", void 0);

const $$file = "C:/Users/Raj/Documents/source Code/rajkawale/src/pages/blog/[slug].astro";
const $$url = "/blog/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
