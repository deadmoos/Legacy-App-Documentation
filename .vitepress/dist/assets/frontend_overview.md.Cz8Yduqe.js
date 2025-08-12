import{_ as a,c as n,o as e,ae as l}from"./chunks/framework.Cd-3tpCq.js";const u=JSON.parse('{"title":"Frontend Overview","description":"","frontmatter":{},"headers":[],"relativePath":"frontend/overview.md","filePath":"frontend/overview.md"}'),i={name:"frontend/overview.md"};function p(t,s,r,o,c,d){return e(),n("div",null,s[0]||(s[0]=[l(`<h1 id="frontend-overview" tabindex="-1">Frontend Overview <a class="header-anchor" href="#frontend-overview" aria-label="Permalink to &quot;Frontend Overview&quot;">​</a></h1><h2 id="tech-stack" tabindex="-1">Tech Stack <a class="header-anchor" href="#tech-stack" aria-label="Permalink to &quot;Tech Stack&quot;">​</a></h2><ul><li><strong>Framework:</strong> Vue 3 + Vite</li><li><strong>UI Library:</strong> PrimeVue 4 with Aura theme</li><li><strong>CSS:</strong> TailwindCSS 3.4 + <code>tailwindcss-primeui</code></li><li><strong>Routing:</strong> Vue Router 4</li><li><strong>HTTP Client:</strong> Axios</li><li><strong>Modules:</strong><ul><li><strong>Email Blaster</strong> (<code>/modules/email</code>)</li><li><strong>Property Investment Calculator</strong> (<code>/modules/deal-calculator</code>)</li></ul></li><li><strong>Charting:</strong> Chart.js</li><li><strong>Rich Text:</strong> Quill</li><li><strong>Carousel:</strong> Swiper</li></ul><h2 id="installation" tabindex="-1">Installation <a class="header-anchor" href="#installation" aria-label="Permalink to &quot;Installation&quot;">​</a></h2><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Install dependencies</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Start development server</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> dev</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Build for production</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> build</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Preview build</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> preview</span></span></code></pre></div><h2 id="folder-structure" tabindex="-1">Folder Structure <a class="header-anchor" href="#folder-structure" aria-label="Permalink to &quot;Folder Structure&quot;">​</a></h2><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>src/</span></span>
<span class="line"><span>├── api/                     # Axios API clients</span></span>
<span class="line"><span>│   ├── deal-calc/           # Deal Calculator API calls</span></span>
<span class="line"><span>│   │   └── dealCalcApi.js</span></span>
<span class="line"><span>│   ├── email/               # Email module API calls</span></span>
<span class="line"><span>│   │   └── emailApi.js</span></span>
<span class="line"><span>│   └── api.js               # Auth &amp; global API calls</span></span>
<span class="line"><span>├── assets/                  # Global styles &amp; static assets</span></span>
<span class="line"><span>│   ├── tailwind.css</span></span>
<span class="line"><span>│   └── vue.svg</span></span>
<span class="line"><span>├── components/              # Shared UI components</span></span>
<span class="line"><span>│   ├── sidebars/</span></span>
<span class="line"><span>│   │   ├── EmailSidebar.vue</span></span>
<span class="line"><span>│   │   └── GlobalSidebar.vue</span></span>
<span class="line"><span>│   ├── Footer.vue</span></span>
<span class="line"><span>│   └── Header.vue</span></span>
<span class="line"><span>├── layouts/                 # Layout shells</span></span>
<span class="line"><span>│   └── DefaultLayout.vue</span></span>
<span class="line"><span>├── modules/                 # Feature modules</span></span>
<span class="line"><span>│   ├── deal-calculator/</span></span>
<span class="line"><span>│   └── email/</span></span>
<span class="line"><span>├── views/                   # Top-level views</span></span>
<span class="line"><span>│   ├── auth/                # Login/Signup</span></span>
<span class="line"><span>│   │   ├── Login.vue</span></span>
<span class="line"><span>│   │   └── Signup.vue</span></span>
<span class="line"><span>│   └── global/              # Global dashboard</span></span>
<span class="line"><span>│       └── Dashboard.vue</span></span>
<span class="line"><span>├── App.vue</span></span>
<span class="line"><span>├── main.js</span></span>
<span class="line"><span>└── router.js</span></span></code></pre></div>`,7)]))}const k=a(i,[["render",p]]);export{u as __pageData,k as default};
