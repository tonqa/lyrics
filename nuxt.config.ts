export default defineNuxtConfig({
  ssr: false,
  modules: ['@nuxt/content'],
  nitro: {
    prerender: {
      routes: ['/']
    },
  },
})
