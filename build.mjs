// documentation/build.mjs
import { resolve } from 'node:path';
import { build } from 'vitepress';

const siteRoot = resolve(process.cwd(), 'documentation'); // folder that contains .vitepress/config.js
await build({ srcDir: siteRoot });

