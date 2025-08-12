// documentation/build.mjs
import { resolve } from 'path';
import { build } from 'vitepress';

// Site root that contains .vitepress/config.js
const siteRoot = resolve(process.cwd(), 'documentation');

await build({
  // This tells VitePress where your site root is.
  // Your config at documentation/.vitepress/config.js should have: srcDir: 'docs'
  srcDir: siteRoot
});
