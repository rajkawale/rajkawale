import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_CzYfE8Nv.mjs';
import { manifest } from './manifest_C0JNu4eN.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/project/_slug_.astro.mjs');
const _page2 = () => import('./pages/blog/_slug_.astro.mjs');
const _page3 = () => import('./pages/blog.astro.mjs');
const _page4 = () => import('./pages/contact.astro.mjs');
const _page5 = () => import('./pages/narrative/madhav-farm.astro.mjs');
const _page6 = () => import('./pages/narrative/raitalk.astro.mjs');
const _page7 = () => import('./pages/narrative/unified-cdp.astro.mjs');
const _page8 = () => import('./pages/notes/_slug_.astro.mjs');
const _page9 = () => import('./pages/notes.astro.mjs');
const _page10 = () => import('./pages/rss.xml.astro.mjs');
const _page11 = () => import('./pages/sitemap.xml.astro.mjs');
const _page12 = () => import('./pages/testimonials.astro.mjs');
const _page13 = () => import('./pages/trusted-by.astro.mjs');
const _page14 = () => import('./pages/work/_slug_.astro.mjs');
const _page15 = () => import('./pages/work.astro.mjs');
const _page16 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/project/[slug].ts", _page1],
    ["src/pages/blog/[slug].astro", _page2],
    ["src/pages/blog/index.astro", _page3],
    ["src/pages/contact.astro", _page4],
    ["src/pages/narrative/madhav-farm.astro", _page5],
    ["src/pages/narrative/raitalk.astro", _page6],
    ["src/pages/narrative/unified-cdp.astro", _page7],
    ["src/pages/notes/[slug].astro", _page8],
    ["src/pages/notes/index.astro", _page9],
    ["src/pages/rss.xml.ts", _page10],
    ["src/pages/sitemap.xml.ts", _page11],
    ["src/pages/testimonials.astro", _page12],
    ["src/pages/trusted-by.astro", _page13],
    ["src/pages/work/[slug].astro", _page14],
    ["src/pages/work.astro", _page15],
    ["src/pages/index.astro", _page16]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "8e9506dc-d036-4c3c-8690-a034898ddde4",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
