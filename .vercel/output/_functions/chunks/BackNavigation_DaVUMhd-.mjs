import { c as createAstro, a as createComponent, m as maybeRenderHead, e as addAttribute, d as renderTemplate, g as defineScriptVars } from './astro/server_D4D8iJOc.mjs';
import 'piccolore';
import 'clsx';

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://rajkawale.com");
const $$BackNavigation = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BackNavigation;
  const { href = "/", label = "Back to home", id, class: className, useHistory = true } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(id || "back-navigation", "id")}${addAttribute(useHistory ? "#" : href, "href")}${addAttribute(href, "data-fallback-href")}${addAttribute(`inline-flex items-center gap-2 mb-6 text-[14px] tracking-wide font-sans font-medium text-neutral-400 hover:text-white transition-all duration-300 cursor-pointer group hover:-translate-x-1 ${className || ""}`, "class")}> <span class="group-hover:-translate-x-1 transition-transform duration-300">←</span> <span>${label}</span> </a> ${useHistory && renderTemplate(_a || (_a = __template(["<script>(function(){", "\n    document.addEventListener('DOMContentLoaded', () => {\n      const backLink = document.getElementById(backLinkId);\n      if (!backLink) return;\n\n      backLink.addEventListener('click', (e) => {\n        // Check if there's a referrer from the same origin (user navigated from another page)\n        const referrer = document.referrer;\n        const currentOrigin = window.location.origin;\n        \n        // If there's a referrer from the same origin, use browser back\n        if (referrer && referrer.startsWith(currentOrigin)) {\n          e.preventDefault();\n          window.history.back();\n        } else {\n          // Fallback to the provided href if no referrer (direct link or external)\n          const fallbackHref = backLink.getAttribute('data-fallback-href');\n          if (fallbackHref && fallbackHref !== '#') {\n            e.preventDefault();\n            window.location.href = fallbackHref;\n          }\n          // If no fallback href, let the default link behavior happen\n        }\n      });\n    });\n  })();<\/script>"])), defineScriptVars({ backLinkId: id || "back-navigation" }))}`;
}, "C:/Users/Raj/Documents/source Code/rajkawale/src/components/ui/BackNavigation.astro", void 0);

export { $$BackNavigation as $ };
