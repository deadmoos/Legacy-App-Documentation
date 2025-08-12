// Run from inside "documentation" folder
import { resolve } from 'node:path'
// documentation/build.mjs
import { build } from 'vitepress';
// Site root is the current folder (documentation/)
await build({ srcDir: '.' });
