// Run from inside "documentation" folder
import { resolve } from 'node:path'
import { build } from 'vitepress'

const root = resolve(process.cwd())   // -> absolute path to ./documentation
await build(root)                     // <-- pass a STRING root, not { srcDir: ... }
