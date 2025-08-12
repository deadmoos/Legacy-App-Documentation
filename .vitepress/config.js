// documentation/.vitepress/config.js
export default {
  srcDir: 'docs', // tell VitePress that pages live under /documentation/docs
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Frontend', link: '/frontend/overview' }
    ],
    sidebar: {
      '/frontend/': [
        { text: 'Overview', link: '/frontend/overview' },
        { text: 'Routing', link: '/frontend/routing' },
        { text: 'API Clients', link: '/frontend/api' }, // file is docs/frontend/api.md
        { text: 'Styling', link: '/frontend/styling' }
      ],
      '/': [
        { text: 'Contributing', link: '/contributing' }, // docs/contributing.md
        { text: 'Documentation Setup', link: '/readme' } // docs/contributing.md
      ]
    }
  },
  markdown: { code: { lineNumbers: true } }
}
