import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://mammothconestoga112.com',
  build: {
    inlineStylesheets: 'always',
  },
  compressHTML: true,
  vite: {
    plugins: [tailwindcss()],
  },
  output: 'static',
});
