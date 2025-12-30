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

  // Hier erzwingen wir, dass die API niemals statisch angefasst wird
  routeRules: {
    '/api/**': { ssr: false, cache: false },
  },

  runtimeConfig: {
    // Diese müssen im Netlify Dashboard unter "Environment Variables" stehen
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
      crawlLinks: false,
      // Wir schließen die API hier doppelt aus
      ignore: ['/api/**']
    }
  },

  // Vite Fix für CSS
  vite: {
    css: { transformer: 'postcss' },
    build: { cssMinify: 'esbuild' }
  }
})