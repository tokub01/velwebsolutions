import { defineNuxtConfig } from 'nuxt/config'
import { blogPosts } from './data/blogPosts'

export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: '2024-11-01',

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    'nuxt-lucide-icons'
  ],

  // Sicherstellen, dass das Modul die Icons mit dem Präfix Lucide registriert
  lucide: {
    namePrefix: 'Lucide'
  },

  experimental: {
    asyncContext: true,
    componentIslands: true,
    payloadExtraction: true,
    inlineSSRStyles: true,
    renderJsonPayloads: true
  },

  css: ['~/assets/css/main.css'],

  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    viewer: false,
  },

  image: {
    domains: ['images.unsplash.com', 'plus.unsplash.com'],
    provider: 'ipx',
    format: ['webp', 'avif', 'jpeg'],
    quality: 80,
  },

  nitro: {
    preset: 'static',
    prerender: {
      crawlLinks: true,
      routes: ['/', '/leistungen', '/blog']
    }
  },

 app: {
    head: {
      htmlAttrs: { lang: 'de' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'VelWebSolutions | Professionelle Webentwicklung',
      meta: [
        { name: 'description', content: 'Webentwicklung mit Laravel und Vue.js.' }
      ],
      link: [
        // Pfade fangen direkt mit / an, da Nuxt sie im public-Ordner sucht
        { rel: 'icon', type: 'image/x-icon', href: '/velweb-favicon-16x16.jpg' },
        { rel: 'icon', type: 'image/jpeg', sizes: '32x32', href: '/velweb-favicon-32x32.jpg' },
        { rel: 'icon', type: 'image/jpeg', sizes: '16x16', href: '/velweb-favicon-16x16.jpg' },
        { rel: 'apple-touch-icon', href: '/velweb-favicon-32x32.jpg' },
        { rel: 'manifest', href: '/site.webmanifest' },

        { rel: 'dns-prefetch', href: 'https://images.unsplash.com' },
        { rel: 'preconnect', href: 'https://images.unsplash.com', crossorigin: 'anonymous' }
      ]
    }
  },
})