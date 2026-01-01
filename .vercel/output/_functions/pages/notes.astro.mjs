/* empty css                                  */
import { a as createComponent, r as renderComponent, b as renderTemplate, m as maybeRenderHead, d as addAttribute } from '../chunks/astro/server_DZlb7AaN.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_DuN9dx8k.mjs';
import { g as getCollection } from '../chunks/_astro_content_BGGyxQAG.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const linkedinPosts = await getCollection("linkedin");
  const sortedPosts = linkedinPosts.sort((a, b) => {
    const dateA = typeof a.data.date === "string" ? new Date(a.data.date) : a.data.date;
    const dateB = typeof b.data.date === "string" ? new Date(b.data.date) : b.data.date;
    return dateB.getTime() - dateA.getTime();
  });
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Notes | Product, AI, and Build-in-Public \u2013 Raj Kawale", "description": "Short notes and observations on product management, AI tools, and building technology products, adapted from public thinking and discussions.", "keywords": "product notes, AI observations, build in public, product management thoughts" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen bg-[#020617] text-zinc-300 pt-24 py-24 px-6 md:px-12 relative z-10"> <div class="max-w-4xl mx-auto"> <header class="mb-12 border-b border-zinc-800 pb-6"> <h1 class="text-4xl md:text-5xl font-serif font-bold text-slate-100 mb-4">
LinkedIn Notes
</h1> <p class="text-lg text-zinc-300 font-sans">
Thoughts on product management, AI, startups, and building systems-driven products.
</p> </header> ${sortedPosts.length > 0 ? renderTemplate`<div class="timeline space-y-6"> ${sortedPosts.map((post) => {
    const postDate = typeof post.data.date === "string" ? new Date(post.data.date) : post.data.date;
    return renderTemplate`<article class="moonlight-container bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-lg p-6 border-t-white/20 hover:border-white/20 hover:bg-white/[0.06] transition-all duration-300 ease-out"> <div class="mb-4 flex items-center justify-between"> <time${addAttribute(postDate.toISOString(), "datetime")} class="text-sm font-mono text-zinc-500"> ${postDate.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    })} </time> ${post.data.canonicalUrl && renderTemplate`<a${addAttribute(post.data.canonicalUrl, "href")} target="_blank" rel="noopener noreferrer" class="moonlight-container border border-white/20 bg-zinc-900/50 px-3 py-1 text-xs font-mono text-zinc-300 transition-all duration-300 ease-out hover:bg-zinc-800">
View on LinkedIn
</a>`} </div> <a${addAttribute(`/notes/${post.slug}`, "href")} class="block"> <h2 class="mb-4 text-2xl font-serif font-bold text-slate-100 hover:text-white transition-all duration-300 ease-out hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]"> ${post.data.title} </h2> ${post.data.tags && post.data.tags.length > 0 && renderTemplate`<div class="mb-4 flex flex-wrap gap-2"> ${post.data.tags.map((tag) => renderTemplate`<span class="border border-zinc-800/50 bg-zinc-950/50 px-2 py-1 text-xs font-mono text-zinc-400 rounded"> ${tag} </span>`)} </div>`} </a> </article>`;
  })} </div>` : renderTemplate`<div class="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-lg p-12 text-center border-t-white/20"> <p class="text-lg text-zinc-300 font-sans">
No LinkedIn posts yet. Create MDX files in src/content/linkedin/ to add posts.
</p> </div>`} </div> </main> ` })}`;
}, "C:/Users/Raj/Documents/source Code/rajkawale/src/pages/notes/index.astro", void 0);

const $$file = "C:/Users/Raj/Documents/source Code/rajkawale/src/pages/notes/index.astro";
const $$url = "/notes";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
