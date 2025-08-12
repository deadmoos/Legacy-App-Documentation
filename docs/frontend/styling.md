# Styling

## TailwindCSS
- Config: `tailwind.config.js`
- Content scanning:
  - `./index.html`
  - `./src/**/*.{vue,js,ts,jsx,tsx}`
  - `node_modules/primevue/**/*`
  - `node_modules/primeblocks/**/*`
- Plugin: `tailwindcss-primeui`
- Brand tokens mapped to CSS variables in `theme.extend.colors`:
  - `brand-blue`, `brand-blue-dark`, `brand-grey-bg`, `brand-text-light`, `brand-text-dark`, `brand-green`, `brand-teal`
- Box shadow shortcut: `shadow-brand` uses `--brand-shadow`

## PrimeVue
- Theme: **Aura**
- Dark mode: `system`
- Auto-registration of components via `unplugin-vue-components` + `PrimeVueResolver`
- Global components added in `main.js`: `Button`, `InputText`, `Checkbox`, `Select`, `Steps`
- Global directives: `v-styleclass`, `v-ripple`

## Layout
- `DefaultLayout.vue` wraps authenticated screens such as `/dashboard` and the `/email-blaster` namespace.
- Sidebars: `GlobalSidebar.vue` and `EmailSidebar.vue` are swapped based on active routes.

## Assets & Global Styles
- Global stylesheet: `src/assets/tailwind.css`
- Keep module-specific CSS colocated within the module if needed.
