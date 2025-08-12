import { build } from 'vitepress';

// Site root is current folder (documentation/). 
// Your config has srcDir: 'docs', so content is under documentation/docs
await build('.');
