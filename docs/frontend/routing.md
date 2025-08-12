
## documentation/frontend/routing.md
```md
# Routing

## Global Router (`src/router.js`)
- Base routes:
  - `/` → redirect to `/login`
  - `/login` → `views/auth/Login.vue`
  - `/signup` → `views/auth/Signup.vue`
- **Dashboard**:
  - `/dashboard` → `DefaultLayout` + `views/global/Dashboard.vue`
  - `meta.requiresAuth: true`
- **Module routes**:
  - Imported from `@/modules/email/router.js` and `@/modules/deal-calculator/router.js`
  - Spread into `routes`:
    ```js
    ...emailRoutes,
    ...dealCalcRoutes
    ```

### Auth Guard
- Runs before each navigation
- Checks `to.matched.some(r => r.meta.requiresAuth)`
- Calls `fetchUser()` from `src/api/api.js` (GET `/api/auth/auth/dashboard`)
- On failure: redirects to `/login`

---

## Email Module (`/modules/email/router.js`)
**Base path:** `/email-blaster`  
**Layout:** `DefaultLayout`  
**Auth:** `meta.requiresAuth: true`

Children:
- `''` → redirect to `/email-blaster/dashboard`
- `dashboard` → `./views/Dashboard.vue`
- `campaigns`
  - `start` → `./views/StartNewCampaign.vue`
  - `previous` → `./views/PreviousCampaigns.vue`
- `audience`
  - `contacts` → `./views/MyContacts.vue`
  - `segments` → `./views/Segments.vue`
- `analytics` → `./views/Analytics.vue`
- `settings` → `./views/Settings.vue`

---

## Deal Calculator Module (`/modules/deal-calculator/router.js`)
**Base path:** `/deal-calculator`  
**Wrapper component:** `DealCalcApp.vue` (module shell / style host)

Children:
- `''` → `DealCalcForm.vue` (requires auth)
- `results` → `DealCalcResults.vue` (requires auth)
- `results/:token` → `DealCalcResults.vue` (public shared results)
- `share/:token` → `DealCalcResults.vue` (public shared)
