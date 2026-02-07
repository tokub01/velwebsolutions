import { defineNuxtConfig } from 'nuxt/config'

export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: '2024-11-01',

  // --- 1. RUNTIME CONFIG ---
  runtimeConfig: {
    // Private Keys (hier leer lassen, da EmailJS im Frontend läuft)
    public: {
      // Diese Werte sind im Frontend via useRuntimeConfig() erreichbar
      emailjsServiceId: process.env.NUXT_PUBLIC_EMAILJS_SERVICE_ID,
      emailjsTemplateId: process.env.NUXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      emailjsPublicKey: process.env.NUXT_PUBLIC_EMAILJS_PUBLIC_KEY,
      recaptchaSiteKey: process.env.NUXT_PUBLIC_RECAPTCHA_SITE_KEY,
    }
  },

  // --- 2. MODULE ---
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    'nuxt-lucide-icons',
    'nuxt-jsonld'
  ],

  // --- 3. APP CONFIG ---
  app: {
    buildAssetsDir: '_assets',
    head: {
      htmlAttrs: { lang: 'de' },
      title: 'Tobias Kubina - VelWebSolutions',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'description', content: 'Ihre Webentwicklung Agentur.' },
        { name: 'theme-color', content: '#dc2626' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', href: '/velweb-favicon-32x32.jpg' },
      ]
    }
  },

  // --- 4. BUILD & STYLING ---
  build: {
    transpile: ['lucide-vue-next', '@emailjs/browser']
  },

  postcss: {
    plugins: {
      '@tailwindcss/postcss': {},
      autoprefixer: {},
    },
  },

  lucide: {
    namePrefix: 'Lucide'
  },

  components: {
    global: true,
    dirs: ['~/components']
  },

  // --- 5. NITRO & PRERENDERING ---
  nitro: {
    output: { publicDir: 'dist' },
    prerender: {
      crawlLinks: true,
      routes: [
        '/', '/leistungen', '/blog', '/kontakt', '/projekte', '/faq', '/ueber-mich'
      ]
    }
  },

  vite: {
    css: {
      transformer: 'postcss'
    }
  }
})