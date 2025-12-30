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
    // WICHTIG: Erlaubt dem Build fortzufahren, auch wenn Prerender-Fehler auftreten
    prerender: {
      crawlLinks: false,
      failOnError: false,
      concurrency: 1, // Reduziert RAM-Last (eins nach dem anderen)
      routes: [
        '/',
        '/leistungen',
        '/blog',
        '/kontakt'
      ]
    }
  },

  // Falls der Fehler durch LightningCSS/PostCSS kommt:
  vite: {
    css: {
      transformer: 'postcss',
    },
    build: {
      cssMinify: 'esbuild',
      minify: 'esbuild'
    }
  },

  // Deaktiviere Payload Extraction, um die Anzahl der generierten Files zu senken
  experimental: {
    payloadExtraction: false
  }
})