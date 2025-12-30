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

  // 1. WICHTIG: Route Rules definieren, damit Nitro die API nicht statisch rendert
  routeRules: {
    '/api/**': { ssr: false, cors: true }
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
    // KEIN Preset (Zero Config), aber wir schränken das Prerendering ein
    prerender: {
      crawlLinks: false,
      routes: [
        '/',
        '/leistungen',
        '/blog',
        '/kontakt',
        ...blogPosts.map(post => `/blog/${post.slug}`)
      ]
    }
  },

  vite: {
    css: { transformer: 'postcss' },
    build: { cssMinify: 'esbuild' }
  }
})