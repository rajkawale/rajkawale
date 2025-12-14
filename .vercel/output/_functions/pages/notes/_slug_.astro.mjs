/* empty css                                     */
import { c as createAstro, a as createComponent, r as renderComponent, d as renderTemplate, m as maybeRenderHead, e as addAttribute, f as renderSlot } from '../../chunks/astro/server_D4D8iJOc.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_I5yDT4-y.mjs';
import { g as getCollection } from '../../chunks/_astro_content_DFbWQ2k5.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://rajkawale.com");
async function getStaticPaths() {
  try {
    const linkedinPosts = await getCollection("linkedin");
    if (!linkedinPosts || linkedinPosts.length === 0) {
      return [];
    }
    return linkedinPosts.map((post) => ({
      params: { slug: post.slug },
      props: { post }
    }));
  } catch (error) {
    console.error("Error in getStaticPaths for notes:", error);
    return [];
  }
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { post } = Astro2.props;
  const postDate = typeof post.data.date === "string" ? new Date(post.data.date) : post.data.date;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `${post.data.title} | Raj Kawale`, "description": `An essay on ${post.data.title}, exploring product decisions, user psychology, and system-level tradeoffs in technology products.`, "keywords": "product management insights, mental models, AI products, systems thinking, decision making", "data-astro-cid-fezs4xpw": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen bg-[#020617] text-zinc-300 pt-24 py-24 px-6 md:px-12 relative z-10" data-astro-cid-fezs4xpw> <article class="max-w-4xl mx-auto" data-astro-cid-fezs4xpw> <header class="mb-12 border-b border-zinc-800 pb-6" data-astro-cid-fezs4xpw> <div class="mb-4 flex items-center justify-between" data-astro-cid-fezs4xpw> <time${addAttribute(postDate.toISOString(), "datetime")} class="text-sm font-mono text-zinc-500" data-astro-cid-fezs4xpw> ${postDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric"
  })} </time> ${post.data.canonicalUrl && renderTemplate`<a${addAttribute(post.data.canonicalUrl, "href")} target="_blank" rel="noopener noreferrer" class="moonlight-container border border-white/20 bg-zinc-900/50 px-3 py-1 text-xs font-mono text-zinc-300 transition-all duration-300 ease-out hover:bg-zinc-800 rounded" data-astro-cid-fezs4xpw>
View on LinkedIn
</a>`} </div> <h1 class="mb-4 text-4xl md:text-5xl font-serif font-bold text-slate-100" data-astro-cid-fezs4xpw> ${post.data.title} </h1> ${post.data.tags && post.data.tags.length > 0 && renderTemplate`<div class="mt-4 flex flex-wrap gap-2" data-astro-cid-fezs4xpw> ${post.data.tags.map((tag) => renderTemplate`<span class="border border-zinc-800/50 bg-zinc-950/50 px-3 py-1 text-xs font-mono text-zinc-400 rounded" data-astro-cid-fezs4xpw> ${tag} </span>`)} </div>`} </header> <div class="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-slate-100 prose-p:text-zinc-300 prose-a:text-[#888] prose-a:no-underline prose-a:hover:underline" data-astro-cid-fezs4xpw> ${renderSlot($$result2, $$slots["default"])} </div> <footer class="mt-12 border-t border-zinc-800 pt-6" data-astro-cid-fezs4xpw> ${renderComponent($$result2, "BackNavigation", BackNavigation, { "href": "/notes", "label": "Back to notes", "data-astro-cid-fezs4xpw": true })} </footer> </article> </main> ` })} `;
}, "C:/Users/Raj/Documents/source Code/rajkawale/src/pages/notes/[slug].astro", void 0);

const $$file = "C:/Users/Raj/Documents/source Code/rajkawale/src/pages/notes/[slug].astro";
const $$url = "/notes/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
