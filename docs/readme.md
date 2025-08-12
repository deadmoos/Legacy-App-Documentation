
# Run the docs locally

If this repo is already a VitePress project, just run your usual docs command.  
If not, from the `documentation` repo:

### Git Bash
```bash
npm init -y
npm i -D vitepress
npx vitepress init
# replace config and pages with the files above
npx vitepress dev documentation
```
### windows cmd
```cmd
npm init -y
npm i -D vitepress
npx vitepress init
npx vitepress dev documentation
```

