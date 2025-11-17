export default defineNuxtConfig({
  ssr: false,
  modules: ['@nuxt/content'],
  app: {
    baseURL: '/lyrics/'
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
