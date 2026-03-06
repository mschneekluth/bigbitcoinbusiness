export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxt/image',
    '@nuxt/icon',
    '@vueuse/nuxt',
  ],

  css: ['~/assets/css/main.css'],

  tailwindcss: {
    cssPath: '~/assets/css/main.css',
  },

  googleFonts: {
    families: {
      Inter: [300, 400, 500, 600, 700, 800, 900],
    },
    display: 'swap',
    preload: true,
  },

  image: {
    quality: 80,
    formats: ['webp', 'avif'],
  },

  nitro: {
    preset: 'netlify-static',
  },

  app: {
    head: {
      htmlAttrs: { lang: 'de', 'data-theme': 'bbb-dark' },
      title: 'Big Bitcoin Business – Realtalk über den Krypto-Sektor',
      meta: [
        { name: 'description', content: 'Big Bitcoin Business ist der deutschsprachige Krypto-Podcast mit Alexander Mayer, Marco Schneekluth und Robert Steinadler. Realtalk über Bitcoin, Web3, Regulierung und Unternehmertum.' },
        { name: 'theme-color', content: '#0A0A0A' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Big Bitcoin Business' },
        { property: 'og:image', content: '/og-image.png' },
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
      ],
      // Prevents flash of wrong theme before JS loads
      script: [
        {
          innerHTML: `(function(){var t=localStorage.getItem('bbb-theme');var d=window.matchMedia('(prefers-color-scheme: dark)').matches;document.documentElement.setAttribute('data-theme',(t==='light'?'bbb-light':(t==='dark'?'bbb-dark':(d?'bbb-dark':'bbb-light'))));}())`,
          type: 'text/javascript',
        },
      ],
    },
  },

  routeRules: {
    '/**': { prerender: true },
  },
})
