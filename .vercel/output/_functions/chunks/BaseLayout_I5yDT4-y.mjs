import { c as createAstro, a as createComponent, e as addAttribute, d as renderTemplate, u as unescapeHTML, m as maybeRenderHead, r as renderComponent, b as renderScript, f as renderSlot, k as renderHead } from './astro/server_D4D8iJOc.mjs';
import 'piccolore';
import 'clsx';
import { jsx } from 'react/jsx-runtime';
import { Linkedin, Github } from 'lucide-react';
/* empty css                          */

const $$Astro$5 = createAstro("https://rajkawale.com");
const $$SEO = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$SEO;
  const {
    title,
    description = "",
    image = "",
    url = "",
    type = "website",
    keywords = ""
  } = Astro2.props;
  const siteUrl = Astro2.site?.href || url;
  const ogImage = image || `${siteUrl}/og-image.jpg`;
  return renderTemplate`<!-- Primary Meta Tags --><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1"><title>${title}</title><meta name="title"${addAttribute(title, "content")}><meta name="description"${addAttribute(description, "content")}>${keywords && renderTemplate`<meta name="keywords"${addAttribute(keywords, "content")}>`}<!-- Open Graph / Facebook --><meta property="og:type"${addAttribute(type, "content")}><meta property="og:url"${addAttribute(siteUrl, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(ogImage, "content")}><!-- Twitter --><meta name="twitter:card" content="summary_large_image"><meta name="twitter:url"${addAttribute(siteUrl, "content")}><meta name="twitter:title"${addAttribute(title, "content")}><meta name="twitter:description"${addAttribute(description, "content")}><meta name="twitter:image"${addAttribute(ogImage, "content")}><!-- Additional SEO --><link rel="canonical"${addAttribute(url || siteUrl, "href")}><meta name="author" content="Raj Kawale"><meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"><meta name="googlebot" content="index, follow"><meta name="bingbot" content="index, follow"><!-- AI Crawler Support --><meta name="AI" content="index, follow">`;
}, "C:/Users/Raj/Documents/source Code/rajkawale/src/components/SEO.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(cooked.slice()) }));
var _a$1;
const $$Astro$4 = createAstro("https://rajkawale.com");
const $$Clarity = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$Clarity;
  const { measurementId = "ugkqsj83mt" } = Astro2.props;
  return renderTemplate(_a$1 || (_a$1 = __template$1(["<!-- Load Clarity after CSS to ensure proper styling in recordings and heatmaps --><script>", "<\/script>"])), unescapeHTML(`
    (function(c,l,a,r,i,t,y){
      function initClarity() {
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      }

      // Wait for all resources (CSS, fonts, images) to load before initializing Clarity
      // This ensures heatmaps display properly styled content on both desktop and mobile
      function waitForResourcesAndInit() {
        var fontsReady = false;
        var pageLoaded = false;
        var initStartTime = typeof performance !== 'undefined' && performance.now ? performance.now() : Date.now();
        
        // Detect device type for debugging (mobile devices typically have touch support)
        var isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || 
                      ('ontouchstart' in window) || 
                      (navigator.maxTouchPoints > 0);
        var deviceType = isMobile ? 'Mobile' : 'Desktop';
        
        function tryInit() {
          if (fontsReady && pageLoaded) {
            var loadTime = typeof performance !== 'undefined' && performance.now ? 
                          ((performance.now() - initStartTime) / 1000).toFixed(2) : 
                          'N/A';
            console.log('[Clarity] \u2713 All resources loaded. Initializing Clarity...');
            console.log('[Clarity] Load timing: ' + loadTime + 's (CSS and fonts ready) [' + deviceType + ']');
            // Extra delay to ensure all CSS is applied and rendered
            // Mobile devices may need slightly more time for rendering
            var delay = isMobile ? 400 : 300;
            setTimeout(function() {
              try {
                initClarity();
                console.log('[Clarity] \u2713 Clarity script loaded successfully [' + deviceType + ']');
              } catch (e) {
                console.error('[Clarity] \u2717 Error loading Clarity:', e);
              }
            }, delay);
          } else {
            if (!pageLoaded) console.log('[Clarity] \u23F3 Waiting for page load... [' + deviceType + ']');
            if (!fontsReady) console.log('[Clarity] \u23F3 Waiting for fonts... [' + deviceType + ']');
          }
        }

        // Check if page is already loaded
        // This works consistently on both desktop and mobile
        if (document.readyState === 'complete') {
          // Page fully loaded, use a small delay to ensure CSS is applied
          setTimeout(function() {
            pageLoaded = true;
            console.log('[Clarity] \u2713 Page already loaded [' + deviceType + ']');
            tryInit();
          }, 50);
        } else {
          // Wait for load event - ensures all resources including CSS are loaded
          var loadHandler = function() {
            pageLoaded = true;
            console.log('[Clarity] \u2713 Page load event fired [' + deviceType + ']');
            tryInit();
          };
          // Use addEventListener (works on all modern browsers, desktop and mobile)
          try {
            window.addEventListener('load', loadHandler, { once: true });
          } catch (e) {
            // Fallback if once option not supported (very old browsers)
            window.addEventListener('load', loadHandler);
          }
        }

        // Wait for fonts to load (especially Google Fonts)
        // Works on both desktop and mobile browsers
        if ('fonts' in document && document.fonts && typeof document.fonts.ready !== 'undefined') {
          document.fonts.ready.then(function() {
            fontsReady = true;
            var fontCount = document.fonts && document.fonts.size ? document.fonts.size : 0;
            console.log('[Clarity] \u2713 Fonts loaded (' + fontCount + ' fonts) [' + deviceType + ']');
            tryInit();
          }).catch(function(e) {
            // Fonts API failed, use fallback timeout
            // Mobile devices may need longer timeout for slower connections
            var fallbackDelay = isMobile ? 1500 : 1000;
            console.log('[Clarity] \u26A0 Fonts API failed, using fallback timeout (' + fallbackDelay + 'ms)');
            setTimeout(function() {
              fontsReady = true;
              tryInit();
            }, fallbackDelay);
          });
        } else {
          // No fonts API (older browsers), assume fonts are ready after a short delay
          // This ensures CSS is applied even without Font Loading API
          var noApiDelay = isMobile ? 500 : 300;
          setTimeout(function() {
            fontsReady = true;
            console.log('[Clarity] \u2713 No fonts API available, assuming fonts ready after ' + noApiDelay + 'ms');
            tryInit();
          }, noApiDelay);
        }

        // If both conditions are already met, try to init
        tryInit();
      }

      // Start the waiting process
      waitForResourcesAndInit();
    })(window, document, "clarity", "script", "${measurementId}");
  `));
}, "C:/Users/Raj/Documents/source Code/rajkawale/src/components/Clarity.astro", void 0);

function LinkedInIcon({ className }) {
  return /* @__PURE__ */ jsx(Linkedin, { className });
}

const $$Astro$3 = createAstro("https://rajkawale.com");
const $$DesktopHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$DesktopHeader;
  Astro2.url.pathname;
  return renderTemplate`<!-- Desktop Header: Split Layout (Logo Left, Menu Right) -->${maybeRenderHead()}<header class="desktop-header hidden md:flex fixed top-0 left-0 w-full z-50 px-8 py-6 justify-between items-center bg-transparent" data-astro-cid-nfhm5fzu> <!-- Left: Brand Logo --> <a href="/" id="desktop-logo" class="text-4xl font-serif tracking-tight text-white transition-all duration-300 ease-out flex items-center hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.8)]" data-astro-cid-nfhm5fzu> <span class="font-light" data-astro-cid-nfhm5fzu>Raj</span> <span class="font-black" data-astro-cid-nfhm5fzu> Kawale</span> </a> <!-- Right: Navigation Menu + Social Icons --> <div class="flex items-center gap-6" data-astro-cid-nfhm5fzu> <!-- Navigation Links - Floating Text Style (Hidden on mobile) --> <nav class="hidden md:flex items-center gap-8" data-astro-cid-nfhm5fzu> <a href="/" id="nav-home" class="moonlight-text-link text-base font-medium font-sans text-[#888] hover:text-white transition-all duration-300 ease-out" data-astro-cid-nfhm5fzu>
Home
</a> <a href="/work" id="nav-work" class="moonlight-text-link text-base font-medium font-sans text-[#888] hover:text-white transition-all duration-300 ease-out" data-astro-cid-nfhm5fzu>
Work
</a> <a href="/trusted-by" id="nav-trusted-by" class="moonlight-text-link text-base font-medium font-sans text-[#888] hover:text-white transition-all duration-300 ease-out" data-astro-cid-nfhm5fzu>
Trusted By
</a> <a href="/blog" id="nav-writing" class="moonlight-text-link text-base font-medium font-sans text-[#888] hover:text-white transition-all duration-300 ease-out" data-astro-cid-nfhm5fzu>
Writing
</a> <a href="/contact" id="nav-contact" class="moonlight-text-link text-base font-medium font-sans text-[#888] hover:text-white transition-all duration-300 ease-out" data-astro-cid-nfhm5fzu>
Contact
</a> </nav> <!-- Social Icons --> <div class="flex items-center gap-4 pl-4 border-l border-white/10" data-astro-cid-nfhm5fzu> <a href="https://www.linkedin.com/in/rajkawale/" target="_blank" rel="noopener noreferrer" class="moonlight-text-link text-[#888] hover:text-white transition-all duration-300 ease-out flex items-center" aria-label="LinkedIn" data-astro-cid-nfhm5fzu> ${renderComponent($$result, "LinkedInIcon", LinkedInIcon, { "client:load": true, "className": "w-5 h-5", "client:component-hydration": "load", "client:component-path": "C:/Users/Raj/Documents/source Code/rajkawale/src/components/icons/LinkedInIcon", "client:component-export": "default", "data-astro-cid-nfhm5fzu": true })} </a> </div> </div> </header>  ${renderScript($$result, "C:/Users/Raj/Documents/source Code/rajkawale/src/components/navigation/DesktopHeader.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Raj/Documents/source Code/rajkawale/src/components/navigation/DesktopHeader.astro", void 0);

function GithubIcon({ className }) {
  return /* @__PURE__ */ jsx(Github, { className });
}

const $$Astro$2 = createAstro("https://rajkawale.com");
const $$MobileHeader = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$MobileHeader;
  Astro2.url.pathname;
  return renderTemplate`<!-- Mobile Header: Top Bar -->${maybeRenderHead()}<header class="mobile-header flex md:hidden fixed top-0 left-0 w-full z-50 px-6 py-6 justify-between items-center bg-transparent" data-astro-cid-2gaudqm5> <!-- Left: Brand Logo --> <a href="/" id="mobile-logo" class="text-4xl font-serif tracking-tight text-white transition-all duration-300 ease-out flex items-center hover:drop-shadow-[0_0_4px_rgba(255,255,255,0.8)]" data-astro-cid-2gaudqm5> <span class="font-light" data-astro-cid-2gaudqm5>Raj</span> <span class="font-black" data-astro-cid-2gaudqm5> Kawale</span> </a> <!-- Right: Hamburger Menu Trigger --> <button id="mobile-menu-trigger" class="moonlight-container text-white hover:text-white transition-all duration-300 ease-out p-2 z-50" aria-label="Open menu" aria-expanded="false" data-astro-cid-2gaudqm5> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-2gaudqm5> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16" data-astro-cid-2gaudqm5></path> </svg> </button> </header> <!-- Mobile Menu Overlay --> <div id="mobile-menu-overlay" class="mobile-menu-overlay fixed inset-0 z-[9999] hidden md:hidden" data-astro-cid-2gaudqm5> <div class="mobile-menu-content flex flex-col h-full" data-astro-cid-2gaudqm5> <!-- Top: Close Button --> <div class="mobile-menu-top flex justify-end p-6" data-astro-cid-2gaudqm5> <button id="mobile-menu-close" class="text-white hover:text-gray-300 transition-colors p-2 z-[10000]" aria-label="Close menu" data-astro-cid-2gaudqm5> <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" data-astro-cid-2gaudqm5> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" data-astro-cid-2gaudqm5></path> </svg> </button> </div> <!-- Center: Navigation Links --> <nav class="mobile-menu-center flex flex-col items-center justify-center gap-8 flex-1 px-6" data-astro-cid-2gaudqm5> <a href="/" class="mobile-menu-link text-3xl font-serif text-white transition-all duration-300 ease-out hover:opacity-100 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]" data-astro-cid-2gaudqm5>
Home
</a> <a href="/work" class="mobile-menu-link text-3xl font-serif text-white transition-all duration-300 ease-out hover:opacity-100 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]" data-astro-cid-2gaudqm5>
Work
</a> <a href="/trusted-by" class="mobile-menu-link text-3xl font-serif text-white transition-all duration-300 ease-out hover:opacity-100 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]" data-astro-cid-2gaudqm5>
Trusted By
</a> <a href="/blog" class="mobile-menu-link text-3xl font-serif text-white transition-all duration-300 ease-out hover:opacity-100 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]" data-astro-cid-2gaudqm5>
Writing
</a> <a href="/contact" class="mobile-menu-link text-3xl font-serif text-white transition-all duration-300 ease-out hover:opacity-100 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]" data-astro-cid-2gaudqm5>
Contact
</a> <!-- Social Icons - Near Contact --> <div class="flex items-center justify-center gap-6 mt-4" data-astro-cid-2gaudqm5> <a href="https://github.com/rajkawale" target="_blank" rel="noopener noreferrer" class="social-icon-link transition-all duration-300 hover:opacity-100 hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.8)]" aria-label="GitHub" data-astro-cid-2gaudqm5> ${renderComponent($$result, "GithubIcon", GithubIcon, { "client:load": true, "className": "w-7 h-7", "client:component-hydration": "load", "client:component-path": "C:/Users/Raj/Documents/source Code/rajkawale/src/components/icons/GithubIcon", "client:component-export": "default", "data-astro-cid-2gaudqm5": true })} </a> <a href="https://www.linkedin.com/in/rajkawale/" target="_blank" rel="noopener noreferrer" class="social-icon-link transition-all duration-300 hover:opacity-100 hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.8)]" aria-label="LinkedIn" data-astro-cid-2gaudqm5> ${renderComponent($$result, "LinkedInIcon", LinkedInIcon, { "client:load": true, "className": "w-7 h-7", "client:component-hydration": "load", "client:component-path": "C:/Users/Raj/Documents/source Code/rajkawale/src/components/icons/LinkedInIcon", "client:component-export": "default", "data-astro-cid-2gaudqm5": true })} </a> </div> </nav> </div> </div> ${renderScript($$result, "C:/Users/Raj/Documents/source Code/rajkawale/src/components/navigation/MobileHeader.astro?astro&type=script&index=0&lang.ts")} `;
}, "C:/Users/Raj/Documents/source Code/rajkawale/src/components/navigation/MobileHeader.astro", void 0);

const $$NavigationWrapper = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "DesktopHeader", $$DesktopHeader, {})} ${renderComponent($$result, "MobileHeader", $$MobileHeader, {})}`;
}, "C:/Users/Raj/Documents/source Code/rajkawale/src/components/NavigationWrapper.astro", void 0);

const $$Astro$1 = createAstro("https://rajkawale.com");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="footer-container" data-astro-cid-sz7xmlte> <div class="footer-content" data-astro-cid-sz7xmlte> <!-- Top Row: Brand and Links --> <div class="footer-top-row" data-astro-cid-sz7xmlte> <!-- Left Column: Brand --> <div class="footer-brand" data-astro-cid-sz7xmlte> <h2 class="footer-logo" data-astro-cid-sz7xmlte>RajKawale</h2> <p class="footer-tagline" data-astro-cid-sz7xmlte>Thinking in systems. Building for people.</p> </div> <!-- Right Column: Links Grid --> <div class="footer-links" data-astro-cid-sz7xmlte> <!-- Column A: Sitemap --> <div class="footer-column" data-astro-cid-sz7xmlte> <h3 class="footer-column-title" data-astro-cid-sz7xmlte>EXPLORE</h3> <nav class="footer-nav" data-astro-cid-sz7xmlte> <a href="/" class="footer-link" data-astro-cid-sz7xmlte>Home</a> <a href="/work" class="footer-link" data-astro-cid-sz7xmlte>Work</a> <a href="/blog" class="footer-link" data-astro-cid-sz7xmlte>Writing</a> <a href="/contact" class="footer-link" data-astro-cid-sz7xmlte>Contact</a> </nav> </div> <!-- Column B: Socials (Icon-Only) --> <div class="footer-column" data-astro-cid-sz7xmlte> <h3 class="footer-column-title" data-astro-cid-sz7xmlte>CONNECT</h3> <nav class="footer-social-icons" data-astro-cid-sz7xmlte> <a href="https://www.linkedin.com/in/rajkawale/" target="_blank" rel="noopener noreferrer" class="footer-icon-link" aria-label="LinkedIn" data-track="Click_Social_LinkedIn" data-astro-cid-sz7xmlte> ${renderComponent($$result, "LinkedInIcon", LinkedInIcon, { "client:load": true, "className": "footer-icon", "client:component-hydration": "load", "client:component-path": "C:/Users/Raj/Documents/source Code/rajkawale/src/components/icons/LinkedInIcon", "client:component-export": "default", "data-astro-cid-sz7xmlte": true })} </a> <a href="https://github.com/rajkawale" target="_blank" rel="noopener noreferrer" class="footer-icon-link" aria-label="GitHub" data-track="Click_Social_GitHub" data-astro-cid-sz7xmlte> ${renderComponent($$result, "GithubIcon", GithubIcon, { "client:load": true, "className": "footer-icon", "client:component-hydration": "load", "client:component-path": "C:/Users/Raj/Documents/source Code/rajkawale/src/components/icons/GithubIcon", "client:component-export": "default", "data-astro-cid-sz7xmlte": true })} </a> </nav> </div> </div> </div> <!-- Bottom Row: Copyright and Tech Stack (Unified Bar) --> <div class="footer-bottom-row" data-astro-cid-sz7xmlte> <p class="footer-copyright" data-astro-cid-sz7xmlte>© 2024 Raj Kawale</p> <div class="footer-badge" data-astro-cid-sz7xmlte>
Built with Astro • Tailwind • Vercel
</div> </div> </div> </footer>  ${renderScript($$result, "C:/Users/Raj/Documents/source Code/rajkawale/src/components/Footer.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/Raj/Documents/source Code/rajkawale/src/components/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro = createAstro("https://rajkawale.com");
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BaseLayout;
  const {
    title = "Raj Kawale | AI & SaaS Product Manager",
    description = "Portfolio of Raj Kawale, an AI and SaaS Product Manager working across zero-to-one and scaling tech products in cognitive AI, B2B SaaS, and consumer platforms.",
    image,
    clarityId = "ugkqsj83mt",
    keywords = "Raj Kawale, AI Product Manager, SaaS Product Manager, product scaling, zero to one products, cognitive AI, B2B SaaS, consumer products, product strategy, systems thinking"
  } = Astro2.props;
  const siteUrl = Astro2.site?.href || "";
  const canonicalUrl = siteUrl + Astro2.url.pathname;
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Raj Kawale",
    "alternateName": "Raj Kawale",
    "url": siteUrl || "https://rajkawale.com",
    "jobTitle": "AI & SaaS Product Manager",
    "description": "AI and SaaS Product Manager with experience across zero-to-one and scaling products in cognitive AI, B2B SaaS, and consumer platforms.",
    "knowsAbout": [
      "Product Management",
      "AI Products",
      "SaaS Products",
      "Zero to One Products",
      "Product Scaling",
      "Cognitive AI",
      "B2B SaaS",
      "Consumer Products",
      "Product Strategy",
      "Systems Thinking"
    ],
    "worksFor": [
      {
        "@type": "Organization",
        "name": "RaiTalk"
      },
      {
        "@type": "Organization",
        "name": "Sinch"
      },
      {
        "@type": "Organization",
        "name": "Nextech AR (Map D)"
      },
      {
        "@type": "Organization",
        "name": "Invest4EDU"
      },
      {
        "@type": "Organization",
        "name": "Purple Style Labs"
      },
      {
        "@type": "Organization",
        "name": "Pernia's Pop-Up Shop"
      }
    ],
    "sameAs": [
      "https://www.linkedin.com/in/rajkawale/",
      "https://github.com/rajkawale",
      "https://raitalk.rajkawale.com/",
      "https://trinka.rajkawale.com/"
    ],
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": canonicalUrl
    }
  };
  const websiteStructuredData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Raj Kawale - AI & SaaS Product Manager",
    "url": siteUrl || "https://rajkawale.com",
    "description": "Portfolio and insights from Raj Kawale, an AI and SaaS Product Manager working across zero-to-one and scaling tech products.",
    "author": {
      "@type": "Person",
      "name": "Raj Kawale"
    },
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${siteUrl}/search?q={search_term_string}`
      },
      "query-input": "required name=search_term_string"
    }
  };
  return renderTemplate(_a || (_a = __template(['<html lang="en"> <head>', '<script type="application/ld+json">', '<\/script><script type="application/ld+json">', '<\/script><link rel="icon" type="image/x-icon" href="/favicon.ico"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=Geist+Sans:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500;600&display=optional" rel="stylesheet"><!-- Load Clarity after CSS and fonts to ensure proper styling in recordings -->', "", '</head> <body class="bg-[#020617] text-zinc-300 font-sans antialiased deep-mind"> ', " ", " ", ` <!-- Global Clarity Event Tracking --> <script>
      // Track Clarity events
      function trackEvent(eventName) {
        if (typeof window !== 'undefined' && window.clarity) {
          window.clarity('event', eventName);
        }
      }

      // Track email copy events
      document.addEventListener('copy', (e) => {
        const selection = window.getSelection()?.toString() || '';
        // Check if copied text contains email pattern or common email addresses
        const emailPattern = /[\\w\\.-]+@[\\w\\.-]+\\.\\w+/;
        const knownEmails = ['rajendrakawale101@gmail.com', 'rajkawale'];
        
        if (emailPattern.test(selection) || 
            knownEmails.some(email => selection.toLowerCase().includes(email.toLowerCase()))) {
          trackEvent('Copy_Email');
        }
      });

      // Wait for DOM to be ready before initializing tracking
      document.addEventListener('DOMContentLoaded', () => {
        // Navigation Tracking
        function getNavEventName(href) {
          if (href === '/' || href === '/#home') return 'Home';
          if (href === '/work' || href === '/#projects' || href.includes('#projects')) return 'Work';
          if (href === '/blog' || href.includes('/blog')) return 'Writing';
          if (href === '/contact') return 'Contact';
          if (href === '/trusted-by' || href.includes('#trusted-by')) return 'TrustedBy';
          return null;
        }

        // Track navigation clicks
        document.querySelectorAll('nav a, header a[href^="/"], header a[href^="#"]').forEach(link => {
          link.addEventListener('click', (e) => {
            const href = link.getAttribute('href') || '';
            const eventName = getNavEventName(href);
            if (eventName) {
              trackEvent(\`Nav_Click_\${eventName}\`);
            }
          });
        });

        // Track logo clicks
        const logoLinks = document.querySelectorAll('a[href="/"]:not(nav a)');
        logoLinks.forEach(logo => {
          logo.addEventListener('click', () => {
            trackEvent('Nav_Click_Logo');
          });
        });

        // Section Visibility Tracking using Intersection Observer
        const sectionObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
              const sectionId = entry.target.id;
              if (sectionId) {
                const sectionName = sectionId.charAt(0).toUpperCase() + sectionId.slice(1);
                trackEvent(\`Section_View_\${sectionName}\`);
                // Unobserve after first view to avoid duplicate events
                sectionObserver.unobserve(entry.target);
              }
            }
          });
        }, { threshold: 0.5 });

        // Observe all sections with IDs
        document.querySelectorAll('section[id], div[id^="projects"], div[id^="writing"], div[id^="home"]').forEach(section => {
          sectionObserver.observe(section);
        });

        // Scroll Depth Tracking
        let maxScrollDepth = 0;
        const scrollDepths = [25, 50, 75, 100];
        
        function checkScrollDepth() {
          const windowHeight = window.innerHeight;
          const documentHeight = document.documentElement.scrollHeight;
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          const scrollPercent = Math.round(((scrollTop + windowHeight) / documentHeight) * 100);
          
          scrollDepths.forEach(depth => {
            if (scrollPercent >= depth && maxScrollDepth < depth) {
              trackEvent(\`Scroll_Depth_\${depth}\`);
              maxScrollDepth = depth;
            }
          });
        }

        // Throttle scroll events
        let scrollTicking = false;
        window.addEventListener('scroll', () => {
          if (!scrollTicking) {
            window.requestAnimationFrame(() => {
              checkScrollDepth();
              scrollTicking = false;
            });
            scrollTicking = true;
          }
        }, { passive: true });

        // Time-based Engagement Tracking
        const timeThresholds = [30, 60, 120, 300]; // 30s, 1min, 2min, 5min
        const timeTracked = {};
        
        timeThresholds.forEach(seconds => {
          setTimeout(() => {
            if (!timeTracked[seconds]) {
              trackEvent(\`Time_On_Page_\${seconds === 30 ? '30s' : seconds === 60 ? '1min' : seconds === 120 ? '2min' : '5min'}\`);
              timeTracked[seconds] = true;
            }
          }, seconds * 1000);
        });

        // Track external link clicks
        document.querySelectorAll('a[target="_blank"], a[href^="http"]').forEach(link => {
          link.addEventListener('click', (e) => {
            try {
              const url = new URL(link.href);
              const domain = url.hostname.replace('www.', '');
              trackEvent(\`External_Link_Click_\${domain.split('.')[0]}\`);
            } catch (e) {
              // Invalid URL, skip
            }
          });
        });
      });
    <\/script> </body> </html> `], ['<html lang="en"> <head>', '<script type="application/ld+json">', '<\/script><script type="application/ld+json">', '<\/script><link rel="icon" type="image/x-icon" href="/favicon.ico"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital,wght@0,400;0,600;0,700;1,400;1,600;1,700&family=Geist+Sans:wght@300;400;500;600&family=JetBrains+Mono:wght@400;500;600&display=optional" rel="stylesheet"><!-- Load Clarity after CSS and fonts to ensure proper styling in recordings -->', "", '</head> <body class="bg-[#020617] text-zinc-300 font-sans antialiased deep-mind"> ', " ", " ", ` <!-- Global Clarity Event Tracking --> <script>
      // Track Clarity events
      function trackEvent(eventName) {
        if (typeof window !== 'undefined' && window.clarity) {
          window.clarity('event', eventName);
        }
      }

      // Track email copy events
      document.addEventListener('copy', (e) => {
        const selection = window.getSelection()?.toString() || '';
        // Check if copied text contains email pattern or common email addresses
        const emailPattern = /[\\\\w\\\\.-]+@[\\\\w\\\\.-]+\\\\.\\\\w+/;
        const knownEmails = ['rajendrakawale101@gmail.com', 'rajkawale'];
        
        if (emailPattern.test(selection) || 
            knownEmails.some(email => selection.toLowerCase().includes(email.toLowerCase()))) {
          trackEvent('Copy_Email');
        }
      });

      // Wait for DOM to be ready before initializing tracking
      document.addEventListener('DOMContentLoaded', () => {
        // Navigation Tracking
        function getNavEventName(href) {
          if (href === '/' || href === '/#home') return 'Home';
          if (href === '/work' || href === '/#projects' || href.includes('#projects')) return 'Work';
          if (href === '/blog' || href.includes('/blog')) return 'Writing';
          if (href === '/contact') return 'Contact';
          if (href === '/trusted-by' || href.includes('#trusted-by')) return 'TrustedBy';
          return null;
        }

        // Track navigation clicks
        document.querySelectorAll('nav a, header a[href^="/"], header a[href^="#"]').forEach(link => {
          link.addEventListener('click', (e) => {
            const href = link.getAttribute('href') || '';
            const eventName = getNavEventName(href);
            if (eventName) {
              trackEvent(\\\`Nav_Click_\\\${eventName}\\\`);
            }
          });
        });

        // Track logo clicks
        const logoLinks = document.querySelectorAll('a[href="/"]:not(nav a)');
        logoLinks.forEach(logo => {
          logo.addEventListener('click', () => {
            trackEvent('Nav_Click_Logo');
          });
        });

        // Section Visibility Tracking using Intersection Observer
        const sectionObserver = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
              const sectionId = entry.target.id;
              if (sectionId) {
                const sectionName = sectionId.charAt(0).toUpperCase() + sectionId.slice(1);
                trackEvent(\\\`Section_View_\\\${sectionName}\\\`);
                // Unobserve after first view to avoid duplicate events
                sectionObserver.unobserve(entry.target);
              }
            }
          });
        }, { threshold: 0.5 });

        // Observe all sections with IDs
        document.querySelectorAll('section[id], div[id^="projects"], div[id^="writing"], div[id^="home"]').forEach(section => {
          sectionObserver.observe(section);
        });

        // Scroll Depth Tracking
        let maxScrollDepth = 0;
        const scrollDepths = [25, 50, 75, 100];
        
        function checkScrollDepth() {
          const windowHeight = window.innerHeight;
          const documentHeight = document.documentElement.scrollHeight;
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          const scrollPercent = Math.round(((scrollTop + windowHeight) / documentHeight) * 100);
          
          scrollDepths.forEach(depth => {
            if (scrollPercent >= depth && maxScrollDepth < depth) {
              trackEvent(\\\`Scroll_Depth_\\\${depth}\\\`);
              maxScrollDepth = depth;
            }
          });
        }

        // Throttle scroll events
        let scrollTicking = false;
        window.addEventListener('scroll', () => {
          if (!scrollTicking) {
            window.requestAnimationFrame(() => {
              checkScrollDepth();
              scrollTicking = false;
            });
            scrollTicking = true;
          }
        }, { passive: true });

        // Time-based Engagement Tracking
        const timeThresholds = [30, 60, 120, 300]; // 30s, 1min, 2min, 5min
        const timeTracked = {};
        
        timeThresholds.forEach(seconds => {
          setTimeout(() => {
            if (!timeTracked[seconds]) {
              trackEvent(\\\`Time_On_Page_\\\${seconds === 30 ? '30s' : seconds === 60 ? '1min' : seconds === 120 ? '2min' : '5min'}\\\`);
              timeTracked[seconds] = true;
            }
          }, seconds * 1000);
        });

        // Track external link clicks
        document.querySelectorAll('a[target="_blank"], a[href^="http"]').forEach(link => {
          link.addEventListener('click', (e) => {
            try {
              const url = new URL(link.href);
              const domain = url.hostname.replace('www.', '');
              trackEvent(\\\`External_Link_Click_\\\${domain.split('.')[0]}\\\`);
            } catch (e) {
              // Invalid URL, skip
            }
          });
        });
      });
    <\/script> </body> </html> `])), renderComponent($$result, "SEO", $$SEO, { "title": title, "description": description, "image": image, "url": canonicalUrl, "keywords": keywords }), unescapeHTML(JSON.stringify(structuredData)), unescapeHTML(JSON.stringify(websiteStructuredData)), renderComponent($$result, "Clarity", $$Clarity, { "measurementId": clarityId }), renderHead(), renderComponent($$result, "NavigationWrapper", $$NavigationWrapper, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "C:/Users/Raj/Documents/source Code/rajkawale/src/components/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
