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
    // KEIN preset: 'static'
    prerender: {
      crawlLinks: false, // WICHTIG: Wir schalten den Crawler aus, um Endlosschleifen/Timeouts zu verhindern
      routes: [
        '/',
        '/leistungen',
        '/blog',
        '/kontakt',
        ...blogPosts.map(post => `/blog/${post.slug}`)
        // Falls du die Städte-Seiten brauchst, liste hier nur die wichtigsten auf
        // oder generiere sie in kleinen Batches.
      ],
      ignore: ['/api/**']
    }
  },

  // Vite Optimierung für Netlify
  vite: {
    css: {
      transformer: 'postcss',
    },
    build: {
      cssMinify: 'esbuild',
      minify: 'esbuild',
      chunkSizeWarningLimit: 2000
    }
  },

  // Experimentelle Features reduzieren (können Build-Instabilität verursachen)
  experimental: {
    payloadExtraction: false // Hilft oft gegen Exit Code 2 auf Netlify
  }
})