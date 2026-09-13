import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import partytown from '@astrojs/partytown';
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.rajkawale.com',
  trailingSlash: 'never',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    react(),
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
  ],
});
