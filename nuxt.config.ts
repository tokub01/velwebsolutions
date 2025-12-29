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
    // Nuxt mappt NUXT_RECAPTCHA_SECRET_KEY automatisch hierauf
    recaptchaSecretKey: '',
    emailjsPrivateKey: '',

    public: {
      // Nuxt mappt NUXT_PUBLIC_RECAPTCHA_SITE_KEY automatisch hierauf
      recaptchaSiteKey: '',
      emailjsServiceId: '',
      emailjsTemplateId: '',
      emailjsPublicKey: ''
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

  // 7. Nitro Server & Prerendering
  nitro: {
    preset: 'static',
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
        '/leistungen',
        '/blog',
        ...blogPosts.map(post => `/blog/${post.slug}`)
      ]
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
        // Optional: Globaler reCAPTCHA Load als Fallback
        { src: 'https://www.google.com/recaptcha/api.js?render=explicit', async: true, defer: true }
      ]
    }
  },

  // Vite Build Options
  vite: {
    css: {
      transformer: 'postcss', 
    },
    build: {
      cssMinify: 'esbuild', 
    }
  }
})