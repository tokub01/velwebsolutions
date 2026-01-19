import { defineNuxtConfig } from 'nuxt/config'
import { blogPosts } from './data/blogPosts'
import { cityContent } from './data/cityContent'
import { phpLaravelContent } from './data/phpLaravelContent'
import { softwareContent } from './data/softwareContent'
import { vueContent } from './data/vueContent'

export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: '2024-11-01',

  // --- 1. RUNTIME CONFIG ---
  // Diese Werte werden in deiner API-Route via useRuntimeConfig() genutzt
  runtimeConfig: {
    // Nur Server-seitig (Private)
    smtpHost: process.env.NUXT_SMTP_HOST || 'smtp.ionos.de',
    smtpPort: process.env.NUXT_SMTP_PORT || 587,
    smtpUser: process.env.NUXT_SMTP_USER,
    smtpPass: process.env.NUXT_SMTP_PASS,
    recaptchaSecretKey: process.env.NUXT_RECAPTCHA_SECRET_KEY,

    public: {
      // Auch im Frontend sichtbar
      recaptchaSiteKey: process.env.NUXT_PUBLIC_RECAPTCHA_SITE_KEY,
    }
  },

  // --- 2. MODULE ---
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    'nuxt-lucide-icons'
    // Hinweis: 'nuxt-mail' habe ich entfernt, da du eine eigene
    // API-Route (/server/api/contact.post.ts) mit Nodemailer nutzt.
    // Zwei Systeme gleichzeitig führen oft zu Port-Konflikten.
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
    transpile: ['lucide-vue-next']
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
        '/', '/leistungen', '/blog', '/kontakt', '/projekte',
        ...blogPosts.map(post => `/blog/${post.slug}`),
        ...Object.keys(cityContent).map(city => `/webentwicklung-${city}`),
        ...Object.keys(phpLaravelContent).map(city => `/php-laravel-agentur-${city}`),
        ...Object.keys(softwareContent).map(city => `/softwareentwicklung-${city}`),
        ...Object.keys(vueContent).map(city => `/vue-js-entwicklung-${city}`)
      ]
    }
  },

  vite: {
    css: {
      transformer: 'postcss'
    }
  }
})