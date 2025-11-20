export default defineNuxtConfig({
  ssr: false,
  modules: ['@nuxt/content'],
  css: ['~/assets/css/main.css'],
  app: {
    baseURL: '/lyrics/',
    head: {
      link: [
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: '' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;700&display=swap' }
      ]
    }
  },
  $development: {
    app: {
      baseURL: '/',
    }
  },
  nitro: {
    prerender: {
      routes: ['/']
    },
  },
})
