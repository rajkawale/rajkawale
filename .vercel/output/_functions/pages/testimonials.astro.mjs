/* empty css                                  */
import { c as createAstro, a as createComponent, m as maybeRenderHead, e as addAttribute, d as renderTemplate, r as renderComponent } from '../chunks/astro/server_D4D8iJOc.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_I5yDT4-y.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://rajkawale.com");
const $$Testimonials$1 = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Testimonials$1;
  const { testimonials } = Astro2.props;
  return renderTemplate`${testimonials.length > 0 && renderTemplate`${maybeRenderHead()}<div class="testimonials-grid grid grid-cols-1 gap-6 md:grid-cols-2">${testimonials.map((testimonial) => renderTemplate`<article class="testimonial-card bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-lg p-6 border-t-white/20 hover:border-white/20 hover:bg-white/[0.06] hover:shadow-[0_0_15px_rgba(255,255,255,0.3)] transition-all duration-300"><blockquote class="mb-4 text-base leading-relaxed text-zinc-300 font-sans">
"${testimonial.quote}"
</blockquote><footer class="border-t border-white/10 pt-4"><div class="flex items-center justify-between"><div class="flex items-center gap-4">${testimonial.photo && renderTemplate`<img${addAttribute(testimonial.photo, "src")}${addAttribute(testimonial.author, "alt")} class="h-16 w-16 border border-white/20 rounded object-cover" loading="lazy">`}<div><p class="font-serif font-bold text-slate-100">${testimonial.author}</p><p class="text-sm font-medium text-zinc-300 font-sans">${testimonial.role} at ${testimonial.company}</p>${testimonial.date && renderTemplate`<p class="mt-1 text-xs font-mono text-zinc-500">${new Date(testimonial.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long"
  })}</p>`}</div></div>${testimonial.sourceUrl && renderTemplate`<a${addAttribute(testimonial.sourceUrl, "href")} target="_blank" rel="noopener noreferrer" class="border border-white/20 bg-zinc-900/50 px-3 py-1 text-xs font-mono text-zinc-300 transition-colors hover:bg-zinc-800 hover:border-white/30 rounded">
Source
</a>`}</div></footer></article>`)}</div>`}`;
}, "C:/Users/Raj/Documents/source Code/rajkawale/src/components/Testimonials.astro", void 0);

const $$Testimonials = createComponent(async ($$result, $$props, $$slots) => {
  let testimonials = [];
  try {
    const testimonialsData = await import('../chunks/testimonials_Dk8qizCG.mjs');
    testimonials = testimonialsData.default || [];
  } catch (e) {
    testimonials = [];
  }
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Testimonials - Raj Kawale", "description": "What people say about working with Raj Kawale" }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen bg-[#020617] text-zinc-300 pt-24 py-24 px-6 md:px-12 relative z-10"> <div class="max-w-7xl mx-auto"> <header class="mb-12 border-b border-zinc-800 pb-6"> <h1 class="text-4xl md:text-5xl font-serif font-bold text-slate-100 mb-4">
Testimonials
</h1> <p class="text-lg text-zinc-300 font-sans">
Feedback from colleagues, clients, and collaborators.
</p> </header> ${renderComponent($$result2, "Testimonials", $$Testimonials$1, { "testimonials": testimonials })} </div> </main> ` })}`;
}, "C:/Users/Raj/Documents/source Code/rajkawale/src/pages/testimonials.astro", void 0);

const $$file = "C:/Users/Raj/Documents/source Code/rajkawale/src/pages/testimonials.astro";
const $$url = "/testimonials";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Testimonials,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
