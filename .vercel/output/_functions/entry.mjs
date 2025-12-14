import { renderers } from './renderers.mjs';
import { c as createExports, s as serverEntrypointModule } from './chunks/_@astrojs-ssr-adapter_Db4YzKS0.mjs';
import { manifest } from './manifest_BWoDkgEV.mjs';

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
const _page10 = () => import('./pages/sitemap.xml.astro.mjs');
const _page11 = () => import('./pages/testimonials.astro.mjs');
const _page12 = () => import('./pages/trusted-by.astro.mjs');
const _page13 = () => import('./pages/work/_slug_.astro.mjs');
const _page14 = () => import('./pages/work.astro.mjs');
const _page15 = () => import('./pages/index.astro.mjs');
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
    ["src/pages/sitemap.xml.ts", _page10],
    ["src/pages/testimonials.astro", _page11],
    ["src/pages/trusted-by.astro", _page12],
    ["src/pages/work/[slug].astro", _page13],
    ["src/pages/work.astro", _page14],
    ["src/pages/index.astro", _page15]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./noop-entrypoint.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "9fab4dcd-b2cc-43fd-8a29-308fc1686aa7",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;
const _start = 'start';
if (Object.prototype.hasOwnProperty.call(serverEntrypointModule, _start)) ;

export { __astrojsSsrVirtualEntry as default, pageMap };
