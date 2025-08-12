# Frontend Overview

## Tech Stack
- **Framework:** Vue 3 + Vite
- **UI Library:** PrimeVue 4 with Aura theme
- **CSS:** TailwindCSS 3.4 + `tailwindcss-primeui`
- **Routing:** Vue Router 4
- **HTTP Client:** Axios
- **Modules:**
  - **Email Blaster** (`/modules/email`)
  - **Property Investment Calculator** (`/modules/deal-calculator`)
- **Charting:** Chart.js
- **Rich Text:** Quill
- **Carousel:** Swiper

## Installation
```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview build
npm run preview
```

## Folder Structure
```
src/
├── api/                     # Axios API clients
│   ├── deal-calc/           # Deal Calculator API calls
│   │   └── dealCalcApi.js
│   ├── email/               # Email module API calls
│   │   └── emailApi.js
│   └── api.js               # Auth & global API calls
├── assets/                  # Global styles & static assets
│   ├── tailwind.css
│   └── vue.svg
├── components/              # Shared UI components
│   ├── sidebars/
│   │   ├── EmailSidebar.vue
│   │   └── GlobalSidebar.vue
│   ├── Footer.vue
│   └── Header.vue
├── layouts/                 # Layout shells
│   └── DefaultLayout.vue
├── modules/                 # Feature modules
│   ├── deal-calculator/
│   └── email/
├── views/                   # Top-level views
│   ├── auth/                # Login/Signup
│   │   ├── Login.vue
│   │   └── Signup.vue
│   └── global/              # Global dashboard
│       └── Dashboard.vue
├── App.vue
├── main.js
└── router.js

```

