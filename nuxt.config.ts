export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  
  devtools: { enabled: true },
  
  ssr: true,
  
  app: {
    head: {
      title: 'Sudip Shrestha - Portfolio',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { 
          name: 'description', 
          content: 'Personal portfolio and hobby site showcasing photography, design, technology, and adventures' 
        }
      ],
      link: [
      { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon.png' },
      { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon.png' }
      ]
    }
  },

  css: ['~/assets/css/main.css'],

  compatibilityDate: '2024-11-22'
})