import { c as createAstro, a as createComponent, m as maybeRenderHead, e as addAttribute, b as renderScript, r as renderComponent, F as Fragment, d as renderTemplate } from './astro/server_D4D8iJOc.mjs';
import 'piccolore';
/* empty css                         */

const $$Astro = createAstro("https://rajkawale.com");
const $$ArticleRow = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ArticleRow;
  const { post, readTime } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(`/blog/${post.slug}`, "href")} class="article-row group block transition-all duration-200 ease"${addAttribute(post.title, "data-article-title")} data-astro-cid-upjdgp4y> <div class="article-row-container" data-astro-cid-upjdgp4y> <!-- Date and Read Time (Left) --> <div class="article-date-container" data-astro-cid-upjdgp4y> <time${addAttribute(post.publishedAt.toISOString(), "datetime")} class="article-date" data-astro-cid-upjdgp4y> ${post.publishedAt.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric"
  })} </time> ${readTime && renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "data-astro-cid-upjdgp4y": true }, { "default": ($$result2) => renderTemplate` <span class="article-separator" data-astro-cid-upjdgp4y>·</span> <span class="article-read-time" data-astro-cid-upjdgp4y>${readTime} min</span> ` })}`} </div> <!-- Connector Line (Dots) --> <div class="article-connector" data-astro-cid-upjdgp4y></div> <!-- Title (Right) --> <span class="article-title" data-astro-cid-upjdgp4y> ${post.title} </span> <!-- Arrow (Fades in on hover) --> <span class="article-arrow" data-astro-cid-upjdgp4y>
→
</span> </div> </a>  ${renderScript($$result, "C:/Users/Raj/Documents/source Code/rajkawale/src/components/ui/ArticleRow.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Raj/Documents/source Code/rajkawale/src/components/ui/ArticleRow.astro", void 0);

export { $$ArticleRow as $ };
