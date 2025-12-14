/* empty css                                     */
import { c as createAstro, a as createComponent, d as renderTemplate, e as addAttribute, m as maybeRenderHead, r as renderComponent, b as renderScript } from '../../chunks/astro/server_D4D8iJOc.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../../chunks/BaseLayout_I5yDT4-y.mjs';
import { a as getEntry, g as getCollection } from '../../chunks/_astro_content_DFbWQ2k5.mjs';
import { Tag, Eye, ExternalLink } from 'lucide-react';
import 'clsx';
/* empty css                                     */
import { $ as $$BackNavigation } from '../../chunks/BackNavigation_DaVUMhd-.mjs';
export { renderers } from '../../renderers.mjs';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro$1 = createAstro("https://rajkawale.com");
const $$DriveViewer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$DriveViewer;
  const { fileId, title = "Document Viewer" } = Astro2.props;
  const embedUrl = `https://drive.google.com/file/d/${fileId}/preview`;
  return renderTemplate(_a || (_a = __template(["", '<div id="drive-viewer-modal" class="drive-modal hidden fixed inset-0 z-[9999] flex items-center justify-center bg-black/80 backdrop-blur-sm" data-astro-cid-7byrgmpd> <div class="drive-modal-content relative w-full h-full max-w-7xl max-h-[90vh] m-4 bg-slate-900 rounded-lg border border-white/20 shadow-2xl flex flex-col" data-astro-cid-7byrgmpd> <!-- Header --> <div class="drive-modal-header flex items-center justify-between p-4 border-b border-white/10" data-astro-cid-7byrgmpd> <h3 class="text-lg font-serif font-bold text-white" data-astro-cid-7byrgmpd>', '</h3> <button id="drive-modal-close" class="drive-modal-close text-zinc-400 hover:text-white transition-colors p-2 rounded hover:bg-white/10" aria-label="Close modal" data-astro-cid-7byrgmpd> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" data-astro-cid-7byrgmpd> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-astro-cid-7byrgmpd></path> </svg> </button> </div> <!-- Content --> <div class="drive-modal-body flex-1 overflow-hidden p-4" data-astro-cid-7byrgmpd> <iframe', ` class="w-full h-full border-0 rounded" allow="autoplay" loading="lazy" data-astro-cid-7byrgmpd></iframe> </div> </div> </div>  <script>
  // Define functions globally
  window.openDriveViewer = function(fileId, title) {
    const modal = document.getElementById('drive-viewer-modal');
    if (!modal) return;

    // Update iframe src if needed
    const iframe = modal.querySelector('iframe');
    if (iframe && fileId) {
      iframe.src = 'https://drive.google.com/file/d/' + fileId + '/preview';
    }

    // Update title if provided
    const titleElement = modal.querySelector('.drive-modal-header h3');
    if (titleElement && title) {
      titleElement.textContent = title;
    }

    modal.classList.remove('hidden');
    document.body.style.overflow = 'hidden'; // Prevent body scroll
  };

  window.closeDriveViewer = function() {
    const modal = document.getElementById('drive-viewer-modal');
    if (!modal) return;

    modal.classList.add('hidden');
    document.body.style.overflow = ''; // Restore body scroll
  };

  // Initialize event listeners when DOM is ready
  function initDriveViewer() {
    const closeButton = document.getElementById('drive-modal-close');
    const modal = document.getElementById('drive-viewer-modal');

    if (closeButton) {
      // Remove any existing listeners and add new one
      closeButton.onclick = function(e) {
        e.preventDefault();
        e.stopPropagation();
        window.closeDriveViewer();
      };
    }

    // Close on backdrop click
    if (modal) {
      modal.onclick = function(e) {
        if (e.target === modal) {
          window.closeDriveViewer();
        }
      };
    }

    // Close on Escape key
    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && modal && !modal.classList.contains('hidden')) {
        window.closeDriveViewer();
      }
    });
  }

  // Run when DOM is ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDriveViewer);
  } else {
    initDriveViewer();
  }
<\/script>`])), maybeRenderHead(), title, addAttribute(embedUrl, "src"));
}, "C:/Users/Raj/Documents/source Code/rajkawale/src/components/ui/DriveViewer.astro", void 0);

const $$Astro = createAstro("https://rajkawale.com");
async function getStaticPaths() {
  const workEntries = await getCollection("work");
  return workEntries.map((entry) => ({
    params: { slug: entry.slug }
  }));
}
const $$slug = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$slug;
  const { slug } = Astro2.params;
  const entry = await getEntry("work", slug);
  if (!entry) {
    return Astro2.redirect("/404");
  }
  const { Content } = await entry.render();
  const project = entry.data;
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": `${project.title} | Product Case Study \u2013 Raj Kawale`, "description": `Product case study of ${project.title}, detailing problem framing, product decisions, execution, and scaling considerations across AI and SaaS systems.`, "keywords": "product case study, AI product management, SaaS product design, zero to one product, scaling products", "data-astro-cid-by4zwojz": true }, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen bg-[#020617] text-zinc-300 pt-24 relative z-10 pb-[120px] md:pb-16" data-astro-cid-by4zwojz> <div class="max-w-4xl mx-auto px-5 md:px-12 py-16 mobile-content-container" data-astro-cid-by4zwojz> <div class="grid grid-cols-1 lg:grid-cols-3 gap-12" data-astro-cid-by4zwojz> <!-- Main Content --> <article class="lg:col-span-2" data-astro-cid-by4zwojz> <!-- Header --> <header class="mb-12" data-astro-cid-by4zwojz> <h1 class="text-4xl md:text-5xl font-serif font-bold mb-4 text-slate-100" data-astro-cid-by4zwojz> ${project.title} </h1> <p class="text-xl text-zinc-300 mb-8 font-sans" data-astro-cid-by4zwojz> ${project.description} </p> </header> <!-- MDX Content --> <div class="prose prose-lg max-w-none prose-headings:font-serif prose-headings:text-slate-100 prose-p:text-zinc-300 prose-a:text-[#888] prose-a:no-underline prose-a:hover:underline" data-astro-cid-by4zwojz> ${renderComponent($$result2, "Content", Content, { "data-astro-cid-by4zwojz": true })} </div> <!-- Back Navigation --> <footer class="mt-12 border-t border-zinc-800 pt-6" data-astro-cid-by4zwojz> ${renderComponent($$result2, "BackNavigation", $$BackNavigation, { "href": "/work", "label": "Back to work", "data-astro-cid-by4zwojz": true })} </footer> </article> <!-- Sticky Sidebar --> <aside class="lg:sticky lg:top-24 h-fit" data-astro-cid-by4zwojz> <div class="bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-lg p-6 md:p-6 p-5 space-y-6 border-t-white/20" data-astro-cid-by4zwojz> <h2 class="text-lg md:text-xl font-serif font-bold text-slate-100 mb-6" data-astro-cid-by4zwojz>
Project Details
</h2> <!-- Status (Using Category now) --> <div data-astro-cid-by4zwojz> <div class="flex items-center gap-2 mb-2" data-astro-cid-by4zwojz> ${renderComponent($$result2, "Tag", Tag, { "class": "w-4 h-4 text-zinc-500", "data-astro-cid-by4zwojz": true })} <span class="text-sm font-medium text-zinc-300 font-sans" data-astro-cid-by4zwojz>Category</span> </div> <span${addAttribute(`inline-block px-3 py-1 rounded-full text-xs font-sans font-medium border ${project.category === "shipped" ? "bg-green-900/30 text-green-300 border-green-800" : project.category === "professional" ? "bg-blue-900/30 text-blue-300 border-blue-800" : "bg-indigo-900/30 text-indigo-300 border-indigo-800"}`, "class")} data-astro-cid-by4zwojz> ${project.category.toUpperCase()} </span> </div> <!-- Tags --> ${project.tags && project.tags.length > 0 && renderTemplate`<div data-astro-cid-by4zwojz> <div class="flex items-center gap-2 mb-3" data-astro-cid-by4zwojz> ${renderComponent($$result2, "Tag", Tag, { "class": "w-4 h-4 text-zinc-500", "data-astro-cid-by4zwojz": true })} <span class="text-sm font-medium text-zinc-300 font-sans" data-astro-cid-by4zwojz>
Tags
</span> </div> <div class="flex flex-wrap gap-2" data-astro-cid-by4zwojz> ${project.tags.map((tag) => renderTemplate`<span class="px-3 py-1 text-xs font-sans font-medium bg-zinc-950/50 border border-zinc-800/50 rounded text-zinc-300" data-astro-cid-by4zwojz> ${tag} </span>`)} </div> </div>`} <!-- Dynamic CTA Button --> <div class="space-y-3 pt-4 border-t border-zinc-800" data-astro-cid-by4zwojz> ${project.actionUrl && project.actionUrl !== "#" && (project.actionType === "drive" ? renderTemplate`<button${addAttribute(
    project.actionUrl.match(
      /file\/d\/(.*?)\//
    )?.[1],
    "data-drive-file-id"
  )}${addAttribute(project.title, "data-drive-title")} class="project-detail-drive-viewer-button moonlight-container glass-button flex items-center gap-2 w-full px-4 py-2 bg-black/20 hover:bg-black/30 border border-white/20 hover:border-white/50 rounded-lg text-white transition-all duration-300 ease-out group font-sans cursor-pointer" data-astro-cid-by4zwojz> ${renderComponent($$result2, "Eye", Eye, { "class": "w-4 h-4 group-hover:scale-110 transition-transform", "data-astro-cid-by4zwojz": true })} <span class="text-xs font-medium" data-astro-cid-by4zwojz> ${project.actionLabel} </span> </button>` : renderTemplate`<a${addAttribute(project.actionUrl, "href")} target="_blank" rel="noopener noreferrer" class="moonlight-container glass-button flex items-center gap-2 w-full px-4 py-2 bg-black/20 hover:bg-black/30 border border-white/20 hover:border-white/50 rounded-lg text-white transition-all duration-300 ease-out group font-sans" data-astro-cid-by4zwojz> ${renderComponent($$result2, "ExternalLink", ExternalLink, { "class": "w-4 h-4 group-hover:translate-x-0.5 transition-transform", "data-astro-cid-by4zwojz": true })} <span class="text-xs font-medium" data-astro-cid-by4zwojz> ${project.actionLabel} </span> </a>`)} </div> </div> </aside> </div> </div> </main>  ${renderComponent($$result2, "DriveViewer", $$DriveViewer, { "fileId": "", "title": "Document Viewer", "data-astro-cid-by4zwojz": true })} ` })}  ${renderScript($$result, "C:/Users/Raj/Documents/source Code/rajkawale/src/pages/work/[slug].astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Raj/Documents/source Code/rajkawale/src/pages/work/[slug].astro", void 0);

const $$file = "C:/Users/Raj/Documents/source Code/rajkawale/src/pages/work/[slug].astro";
const $$url = "/work/[slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$slug,
  file: $$file,
  getStaticPaths,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
