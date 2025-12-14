/* empty css                                  */
import { a as createComponent, r as renderComponent, b as renderScript, d as renderTemplate, m as maybeRenderHead, e as addAttribute } from '../chunks/astro/server_D4D8iJOc.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_I5yDT4-y.mjs';
import { t as trustedBy } from '../chunks/trustedBy_CEjZhd-j.mjs';
import { $ as $$BackNavigation } from '../chunks/BackNavigation_DaVUMhd-.mjs';
/* empty css                                      */
export { renderers } from '../renderers.mjs';

const $$TrustedBy = createComponent(($$result, $$props, $$slots) => {
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
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Trusted By | Product Leaders and Teams \u2013 Raj Kawale", "description": "Perspectives from founders, product leaders, and teams who have built AI, SaaS, and consumer products with Raj Kawale.", "keywords": "product manager credibility, trusted product manager, product leadership, collaboration in product teams", "data-astro-cid-yrwylpme": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen bg-[#020617] text-zinc-300 pt-24 relative z-10 pb-[120px] md:pb-16" data-astro-cid-yrwylpme> <div class="max-w-6xl mx-auto px-5 md:px-12 py-16" data-astro-cid-yrwylpme> <!-- Header --> <div class="mb-16 text-center" data-astro-cid-yrwylpme> <h1 class="text-4xl md:text-5xl font-serif font-bold text-slate-100 mb-4" data-astro-cid-yrwylpme>
Trusted By<span class="text-gray-500" data-astro-cid-yrwylpme>.</span> </h1> <p class="text-zinc-400 text-lg font-sans" data-astro-cid-yrwylpme>
Perspectives from people I've built products with.
</p> </div> <!-- Masonry Layout --> <div class="columns-1 md:columns-2 gap-6" data-astro-cid-yrwylpme> ${trustedBy.map((person) => renderTemplate`<div${addAttribute(toSlug(person.name), "id")} class="moonlight-container trusted-card mb-6 break-inside-avoid bg-neutral-900/50 backdrop-blur-xl border border-white/10 rounded-lg p-6 transition-all duration-300 ease-out scroll-mt-24" data-astro-cid-yrwylpme> <!-- Image and Name --> <div class="flex items-center gap-4 mb-4" data-astro-cid-yrwylpme> <div class="profile-image-container w-16 h-16 rounded-full border-2 border-white/20 flex items-center justify-center bg-gradient-to-br from-purple-500/20 to-blue-500/20 relative overflow-hidden flex-shrink-0" data-astro-cid-yrwylpme> <img${addAttribute(person.image, "src")}${addAttribute(person.name, "alt")} class="profile-image w-full h-full rounded-full object-cover absolute inset-0"${addAttribute(person.name, "data-person-name")} data-astro-cid-yrwylpme> <span class="profile-initials text-white font-semibold text-lg hidden"${addAttribute(getInitials(person.name), "data-initials")} data-astro-cid-yrwylpme> ${getInitials(person.name)} </span> </div> <div data-astro-cid-yrwylpme> <a${addAttribute(person.linkedin, "href")} target="_blank" rel="noopener noreferrer" class="group moonlight-text-link text-white font-semibold text-base font-sans transition-all duration-300 ease-out inline-flex items-center gap-1.5" onclick="event.stopPropagation()" data-astro-cid-yrwylpme> ${person.name} <svg class="w-4 h-4 text-neutral-500 group-hover:text-white transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" data-astro-cid-yrwylpme> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" data-astro-cid-yrwylpme></path> </svg> </a> <p class="text-zinc-500 text-sm mt-1 font-sans" data-astro-cid-yrwylpme>${person.role}</p> ${person.date && renderTemplate`<p class="text-zinc-600 text-xs font-mono mt-1" data-astro-cid-yrwylpme> ${new Date(person.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long"
  })} </p>`} </div> </div> <!-- Testimonial Text --> <p class="text-zinc-300 text-sm leading-relaxed font-sans" data-astro-cid-yrwylpme> ${person.text} </p> </div>`)} </div> <!-- Back Navigation --> <footer class="mt-12 border-t border-zinc-800 pt-6" data-astro-cid-yrwylpme> ${renderComponent($$result2, "BackNavigation", $$BackNavigation, { "href": "/#trusted-by", "label": "Back to home", "data-astro-cid-yrwylpme": true })} </footer> </div> </main> ` })}  ${renderScript($$result, "C:/Users/Raj/Documents/source Code/rajkawale/src/pages/trusted-by.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Raj/Documents/source Code/rajkawale/src/pages/trusted-by.astro", void 0);

const $$file = "C:/Users/Raj/Documents/source Code/rajkawale/src/pages/trusted-by.astro";
const $$url = "/trusted-by";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$TrustedBy,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
