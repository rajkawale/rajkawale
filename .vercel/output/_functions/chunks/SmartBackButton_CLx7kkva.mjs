import { c as createAstro, a as createComponent, m as maybeRenderHead, d as addAttribute, e as renderScript, b as renderTemplate } from './astro/server_DZlb7AaN.mjs';
import 'piccolore';
import 'clsx';

const $$Astro = createAstro("https://rajkawale.com");
const $$SmartBackButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$SmartBackButton;
  const {
    fallbackHref = "/",
    label = "Back to home",
    className = ""
  } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(fallbackHref, "href")}${addAttribute(`smart-back-button inline-flex items-center text-sm text-zinc-500 hover:text-white transition-colors mb-8 group cursor-pointer bg-transparent border-0 p-0 ${className}`, "class")} aria-label="Go back"> <span class="group-hover:-translate-x-1 transition-transform">←</span> <span class="ml-2 smart-back-label">${label}</span> </a> ${renderScript($$result, "C:/Users/Raj/Documents/source Code/rajkawale/src/components/ui/SmartBackButton.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Raj/Documents/source Code/rajkawale/src/components/ui/SmartBackButton.astro", void 0);

export { $$SmartBackButton as $ };
