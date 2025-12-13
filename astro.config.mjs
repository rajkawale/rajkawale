import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import partytown from '@astrojs/partytown';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  site: 'https://rajkawale.com',
  output: 'server',
  adapter: vercel(),
  integrations: [
    tailwind(),
    react(),
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
  ],
});

