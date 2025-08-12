import { build } from 'vitepress';

await build({
  srcDir: 'documentation',   // site root that contains .vitepress/config.js
  cleanUrls: true
});
