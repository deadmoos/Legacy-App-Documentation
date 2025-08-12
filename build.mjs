import { resolve } from 'path';
import { build } from 'vitepress';

const siteRoot = resolve(process.cwd(), 'documentation');
await build({ srcDir: siteRoot });    // config has srcDir: 'docs'
