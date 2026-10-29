import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';

const pages = ['index.html', ...Array.from({ length: 6 }, (_, i) => `questions/q${i + 1}.html`)];

export default defineConfig({
  build: {
    rolldownOptions: {
      input: pages.map(page => fileURLToPath(new URL(page, import.meta.url))),
    },
  },
});
