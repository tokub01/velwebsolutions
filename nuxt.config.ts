import { defineNuxtConfig } from 'nuxt/config'
import { blogPosts } from './data/blogPosts'

export default defineNuxtConfig({
  // Nuxt 4 Standard
  ssr: true,
  compatibilityDate: '2024-11-01',

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    'nuxt-lucide-icons'
  ],

  // API-Routing via Route Rules (Empfehlung aus der Nuxt-Doku)
  // Das sorgt dafür, dass die API-Routen als Serverless Functions behandelt werden
  routeRules: {
    '/api/**': { isr: false }, // Verhindert Prerendering für API
  },

  runtimeConfig: {
    recaptchaSecretKey: process.env.RECAPTCHA_SECRET_KEY,
    emailjsPrivateKey: process.env.EMAILJS_PRIVATE_KEY,
    public: {
      recaptchaSiteKey: process.env.NUXT_PUBLIC_RECAPTCHA_SITE_KEY,
      emailjsServiceId: process.env.EMAILJS_SERVICE_ID,
      emailjsTemplateId: process.env.EMAILJS_TEMPLATE_ID,
      emailjsPublicKey: process.env.EMAILJS_PUBLIC_KEY
    }
  },

  nitro: {
    // KEIN preset setzen, wir lassen die Auto-Detection arbeiten (Zero Config)
    prerender: {
      crawlLinks: false, // WICHTIG: Stoppt das automatische Finden von hunderten SEO-Links
      failOnError: false, // Build läuft weiter, auch wenn eine Seite hakt
      routes: [
        '/',
        '/leistungen',
        '/blog',
        '/kontakt',
        ...blogPosts.map(post => `/blog/${post.slug}`)
      ]
    }
  },

  // Vite Optimierung
  vite: {
    css: { transformer: 'postcss' },
    build: { cssMinify: 'esbuild' }
  },

  // SEO & Head
  app: {
    head: {
      htmlAttrs: { lang: 'de' },
      title: 'VelWebSolutions | Professionelle Webentwicklung',
      meta: [{ name: 'description', content: 'Webentwicklung mit Laravel und Vue.js.' }],
      link: [
        { rel: 'icon', type: 'image/jpeg', sizes: '32x32', href: '/velweb-favicon-32x32.jpg' }
      ]
    }
  }
})