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
    // Diese Variablen müssen im Netlify Dashboard hinterlegt sein
    recaptchaSecretKey: process.env.RECAPTCHA_SECRET_KEY,
    emailjsPrivateKey: process.env.EMAILJS_PRIVATE_KEY,

    public: {
      recaptchaSiteKey: process.env.NUXT_PUBLIC_RECAPTCHA_SITE_KEY,
      emailjsServiceId: process.env.EMAILJS_SERVICE_ID,
      emailjsTemplateId: process.env.EMAILJS_TEMPLATE_ID,
      emailjsPublicKey: process.env.EMAILJS_PUBLIC_KEY
    }
  },

  // 4. Performance & Experimentelle Features
  experimental: {
    asyncContext: true,
    componentIslands: true,
    payloadExtraction: true,
    inlineSSRStyles: true,
    renderJsonPayloads: true
  },

  css: ['~/assets/css/main.css'],

  // 5. Tailwind Integration
  tailwindcss: {
    cssPath: '~/assets/css/main.css',
    viewer: false,
  },

  // 6. Image Optimization
  image: {
    domains: ['images.unsplash.com', 'plus.unsplash.com'],
    provider: 'ipx',
    format: ['webp', 'avif', 'jpeg'],
    quality: 80,
  },

  // 7. Nitro Server & Hybrid Rendering
  nitro: {
    // KEIN preset: 'static' setzen. Nitro erkennt Netlify automatisch.
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
        '/leistungen',
        '/blog',
        ...blogPosts.map(post => `/blog/${post.slug}`)
      ],
      // WICHTIG: Verhindert, dass der Prerenderer die API-Endpunkte crawlt
      ignore: [
        '/api/**',
        '/_payload.json'
      ],
      // Sicherheit für den großen Build (viele Stadt-Seiten)
      concurrency: 10,
      failOnError: false
    }
  },

  // 8. Global App Head & SEO
  app: {
    head: {
      htmlAttrs: { lang: 'de' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'VelWebSolutions | Professionelle Webentwicklung',
      meta: [
        { name: 'description', content: 'Webentwicklung mit Laravel und Vue.js. Professionelle Fullstack-Lösungen aus Krefeld.' }
      ],
      link: [
        { rel: 'icon', type: 'image/jpeg', sizes: '16x16', href: '/velweb-favicon-16x16.jpg' },
        { rel: 'icon', type: 'image/jpeg', sizes: '32x32', href: '/velweb-favicon-32x32.jpg' },
        { rel: 'apple-touch-icon', href: '/velweb-favicon-32x32.jpg' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'dns-prefetch', href: 'https://images.unsplash.com' },
        { rel: 'preconnect', href: 'https://images.unsplash.com', crossorigin: 'anonymous' }
      ],
      script: [
        { src: 'https://www.google.com/recaptcha/api.js?render=explicit', async: true, defer: true }
      ]
    }
  },

  // 9. Vite Build Options (Behebt LightningCSS & Exit Code 2 Probleme)
  vite: {
    css: {
      transformer: 'postcss',
    },
    build: {
      cssMinify: 'esbuild',
      chunkSizeWarningLimit: 1500
    }
  }
})