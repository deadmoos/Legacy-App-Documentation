# Contributing – Frontend

## Principles
- Keep modules self-contained: UI + routes + local helpers per module.
- Keep API logic in `src/api/` (global) or `src/api/<module>/` (module).
- Use Tailwind for layout/spacing. Prefer utilities over custom CSS.
- Use PrimeVue components for controls and consistency.

## Naming
- Components: `PascalCase.vue`
- Files in `api/`: `camelCase.js`
- Module folders: `kebab-case`
- Routes: descriptive, nested under the module base (e.g., `/email-blaster/campaigns/start`)

## Routing
- Add routes in the module’s `router.js` and export an **array**.
- In `src/router.js`, import and spread module routes:
  ```js
  import emailRoutes from '@/modules/email/router.js'
  import dealCalcRoutes from '@/modules/deal-calculator/router.js'
  export default createRouter({ routes: [ ...emailRoutes, ...dealCalcRoutes ] })
