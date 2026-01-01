import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import partytown from '@astrojs/partytown';
import react from '@astrojs/react';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://rajkawale.com',
  output: 'static',
  output: 'static',

  // Adapter removed to force standard static build
  integrations: [
    tailwind(),
    react(),
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
  ],

  adapter: vercel(),
});