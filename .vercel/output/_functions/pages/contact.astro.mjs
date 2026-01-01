/* empty css                                  */
import { c as createAstro, a as createComponent, m as maybeRenderHead, d as addAttribute, e as renderScript, b as renderTemplate, r as renderComponent } from '../chunks/astro/server_DZlb7AaN.mjs';
import 'piccolore';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_DuN9dx8k.mjs';
import 'clsx';
/* empty css                                   */
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://rajkawale.com");
const $$ContactForm = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ContactForm;
  const { formspreeEndpoint } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<form id="contact-form" class="contact-form bg-white/[0.03] backdrop-blur-xl border border-white/10 rounded-lg p-8 border-t-white/20"${addAttribute(formspreeEndpoint, "action")} method="POST" data-astro-cid-svshx33u> <h2 class="mb-6 text-2xl font-serif font-bold text-slate-100" data-astro-cid-svshx33u>
Send a Message
</h2> <div class="mb-5" data-astro-cid-svshx33u> <label for="name" class="mb-2 block text-sm font-medium text-zinc-300 font-sans" data-astro-cid-svshx33u>
Name
</label> <input type="text" id="name" name="name" required class="form-input w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/15 focus:ring-1 focus:ring-white/15 transition-all duration-300 font-sans placeholder:text-gray-500" placeholder="Your name" data-astro-cid-svshx33u> </div> <div class="mb-5" data-astro-cid-svshx33u> <label for="email" class="mb-2 block text-sm font-medium text-zinc-300 font-sans" data-astro-cid-svshx33u>
Email
</label> <input type="email" id="email" name="email" required class="form-input w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/15 focus:ring-1 focus:ring-white/15 transition-all duration-300 font-sans placeholder:text-gray-500" placeholder="your.email@example.com" data-astro-cid-svshx33u> </div> <div class="mb-6" data-astro-cid-svshx33u> <label for="message" class="mb-2 block text-sm font-medium text-zinc-300 font-sans" data-astro-cid-svshx33u>
Message
</label> <textarea id="message" name="message" rows="6" required class="form-input w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-white/15 focus:ring-1 focus:ring-white/15 transition-all duration-300 font-sans resize-none placeholder:text-gray-500" placeholder="Tell me about your project or how we can collaborate..." data-astro-cid-svshx33u></textarea> </div> <button type="submit" id="submit-btn" class="moonlight-container w-full border border-white/20 text-white px-6 py-3 font-medium rounded-lg transition-all duration-300 ease-out hover:bg-white/10 hover:text-white font-sans" data-astro-cid-svshx33u>
Send Message
</button> <input type="hidden" name="_subject" value="New Contact Form Submission" data-astro-cid-svshx33u> <input type="text" name="_gotcha" style="display:none" tabindex="-1" autocomplete="off" data-astro-cid-svshx33u> </form> <!-- Toast Overlay - Full Screen Backdrop --> <div id="toast-overlay" class="toast-overlay fixed inset-0 z-[9998] transition-opacity duration-300 ease-in-out opacity-0 pointer-events-none" aria-hidden="true" data-astro-cid-svshx33u></div> <!-- Toast Notification --> <div id="toast" class="toast fixed top-8 left-1/2 -translate-x-1/2 z-[9999] px-6 py-5 rounded-lg transition-all duration-300 ease-out opacity-0 -translate-y-12 pointer-events-none" role="alert" aria-live="polite" data-astro-cid-svshx33u> <div class="flex items-start gap-4" data-astro-cid-svshx33u> <!-- Neon Green Checkmark Icon --> <div id="toast-icon-container" class="flex-shrink-0 hidden" data-astro-cid-svshx33u> <svg class="w-6 h-6 toast-checkmark" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-svshx33u> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7" data-astro-cid-svshx33u></path> </svg> </div> <div class="flex-1 min-w-0" data-astro-cid-svshx33u> <h3 id="toast-title" class="toast-title text-base font-serif font-semibold mb-1" data-astro-cid-svshx33u></h3> <p id="toast-message" class="toast-message text-sm font-sans leading-relaxed" data-astro-cid-svshx33u></p> </div> </div> </div> ${renderScript($$result, "C:/Users/Raj/Documents/source Code/rajkawale/src/components/ContactForm.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/Raj/Documents/source Code/rajkawale/src/components/ContactForm.astro", void 0);

const $$Contact = createComponent(($$result, $$props, $$slots) => {
  const formspreeEndpoint = "https://formspree.io/f/mldykebp";
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, { "title": "Contact | Raj Kawale", "description": "Get in touch with Raj Kawale to discuss AI and SaaS product roles, consulting opportunities, or collaborations on scaling technology products.", "keywords": "AI product manager contact, SaaS product consultant, product collaboration" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="min-h-screen bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-800 via-slate-900 to-black text-zinc-300 pb-32 md:pb-16 px-6 md:px-12 relative z-10 flex items-center" style="padding-top: 150px;"> <div class="max-w-2xl mx-auto w-full"> <header class="mb-10 border-b border-zinc-800 pb-6"> <h1 class="text-4xl md:text-5xl font-serif font-bold text-slate-100 mb-4">
Let's Connect
</h1> <p class="text-lg text-zinc-300 font-sans">
Interested in collaborating, discussing a project, or just want to
          connect? Fill out the form below and I'll get back to you.
</p> </header> ${renderComponent($$result2, "ContactForm", $$ContactForm, { "formspreeEndpoint": formspreeEndpoint })} </div> </main> ` })}`;
}, "C:/Users/Raj/Documents/source Code/rajkawale/src/pages/contact.astro", void 0);

const $$file = "C:/Users/Raj/Documents/source Code/rajkawale/src/pages/contact.astro";
const $$url = "/contact";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Contact,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
