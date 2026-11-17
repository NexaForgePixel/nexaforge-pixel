// @ts-check
import { defineConfig } from 'astro/config';

// Static output: Vercel detects Astro and deploys the `dist` folder with zero config.
export default defineConfig({
  // site: 'https://your-domain.com', // set this once the domain is known (used for canonical URLs / sitemap)
  output: 'static',
  vite: {
    // Keep the stylesheet exactly as written. The default CSS minifier merges
    // `backdrop-filter` with `-webkit-backdrop-filter` and drops the standard one,
    // which removes the frosted-glass blur in Chrome.
    build: { cssMinify: false },
    css: { transformer: 'postcss' },
  },
});
