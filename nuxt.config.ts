import { defineNuxtConfig } from 'nuxt/config'
import { blogPosts } from './data/blogPosts'

export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: '2024-11-01',

  // 1. Module
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    'nuxt-lucide-icons'
  ],

  // 2. Icon-Konfiguration
  lucide: {
    namePrefix: 'Lucide'
  },

  // 3. Runtime Configuration (Environment Variables)
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

  // 4. Nitro & Prerendering (Stabilisierung)
  nitro: {
    // Auto-Detection für Netlify (Zero Config)
    prerender: {
      crawlLinks: false, // Wichtig gegen RAM-Absturz
      routes: [
        '/',
        '/leistungen',
        '/blog',
        '/kontakt',
        ...blogPosts.map(post => `/blog/${post.slug}`)
      ],
      ignore: ['/api/**']
    }
  },

  // 5. Hybrid Rendering Rules
  routeRules: {
    '/api/**': { ssr: false, cache: false }
  },

  // 6. Vite & CSS Fixes
  vite: {
    css: {
      transformer: 'postcss',
    },
    build: {
      cssMinify: 'esbuild',
    }
  },

  // 7. App Head & SEO
  app: {
    head: {
      htmlAttrs: { lang: 'de' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'VelWebSolutions | Professionelle Webentwicklung',
      meta: [
        { name: 'description', content: 'Webentwicklung mit Laravel und Vue.js. Professionelle Fullstack-Lösungen.' }
      ],
      link: [
        { rel: 'icon', type: 'image/jpeg', sizes: '32x32', href: '/velweb-favicon-32x32.jpg' },
        { rel: 'manifest', href: '/site.webmanifest' }
      ]
    }
  },

  experimental: {
    payloadExtraction: false // Erhöht die Stabilität beim Deployment
  }
})