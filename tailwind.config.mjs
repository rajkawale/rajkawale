/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Geist Sans', 'sans-serif'],
        serif: ['Instrument Serif', 'Georgia', 'serif'],
        mono: ['JetBrains Mono', 'Geist Mono', 'Courier New', 'monospace'],
      },
      backgroundImage: {
        'grid-white': 'linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px)',
      },
      backgroundSize: {
        'grid': '50px 50px',
      },
      colors: {
        paper: {
          DEFAULT: '#FDFBF7',
          warm: '#FDFBF7',
          stone: '#FAFAF9',
        },
      },
    },
  },
  plugins: [],
};

