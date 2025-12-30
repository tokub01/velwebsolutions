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

  // WICHTIG: Definiere explizit, dass /api dynamisch ist
  routeRules: {
    '/api/**': { isr: false, cors: true }
  },

  runtimeConfig: {
    // Private Keys (Netlify Dashboard)
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
    prerender: {
      crawlLinks: false, // Verhindert RAM-Absturz (Exit Code 2)
      routes: [
        '/',
        '/leistungen',
        '/blog',
        '/kontakt',
        ...blogPosts.map(post => `/blog/${post.slug}`)
      ],
      // API niemals vorrendern!
      ignore: ['/api/**']
    }
  },

  vite: {
    css: { transformer: 'postcss' },
    build: { cssMinify: 'esbuild' }
  }
})