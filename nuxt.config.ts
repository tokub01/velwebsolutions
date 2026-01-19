import { defineNuxtConfig } from 'nuxt/config'
import { blogPosts } from './data/blogPosts'
import { cityContent } from './data/cityContent'
import { phpLaravelContent } from './data/phpLaravelContent'
import { softwareContent } from './data/softwareContent'
import { vueContent } from './data/vueContent'

export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: '2024-11-01',

  app: {
    buildAssetsDir: '_assets',
    head: {
      htmlAttrs: { lang: 'de' },
      title: 'Tobias Kubina - VelWebSolutions | Webentwicklung Agentur',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'description', content: 'Ihre Webentwicklung Agentur für maßgeschneiderte Websites & Web-Apps. Schnell, sicher, 100% Custom Development.' },
        { name: 'robots', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' },
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://velwebsolutions.de/' },
        { property: 'og:image', content: 'https://velwebsolutions.de/velweb-og-1200x630.jpg' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'theme-color', content: '#dc2626' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/velweb-favicon-32x32.jpg' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/velweb-favicon-32x32.jpg' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'alternate', hreflang: 'de', href: 'https://velwebsolutions.de/' }
      ],
      script: [
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-6Y61X4Q09H',
          async: true
        }
      ]
    }
  },

  router: {
    options: {
      trailingSlash: false,
      linkActiveClass: 'active-link'
    }
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    'nuxt-lucide-icons',
    'nuxt-mail'
  ],

  // --- MAIL KONFIGURATION (Optimiert für Port 587) ---
  mail: {
    message: {
      to: 'info@velwebsolutions.de',
    },
    smtp: {
      host: 'smtp.ionos.de',
      port: 587,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
      secure: false, // WICHTIG für Port 587
      tls: {
        rejectUnauthorized: false
      }
    },
  },

  image: {
    domains: ['images.unsplash.com']
  },

  // --- RUNTIME CONFIG (Sorgt für korrekte Keys im Front- & Backend) ---
  runtimeConfig: {
    // Nur Server-seitig verfügbar
    recaptchaSecretKey: process.env.NUXT_RECAPTCHA_SECRET_KEY,

    public: {
      // Auch im Browser verfügbar
      recaptchaSiteKey: process.env.NUXT_PUBLIC_RECAPTCHA_SITE_KEY,
    }
  },

  routeRules: {
    '/api/contact': { isr: false, cors: true },
    '/**': { static: true },
  },

  nitro: {
    output: {
      publicDir: 'dist' 
    },
    compressPublicAssets: true,
    prerender: {
      crawlLinks: true,
      routes: [
        '/',
        '/leistungen',
        '/blog',
        '/kontakt',
        '/projekte',
        '/erfolgsgeschichten',
        '/kostenrechner',
        ...blogPosts.map(post => `/blog/${post.slug}`),
        ...Object.keys(cityContent).map(city => `/webentwicklung-${city}`),
        ...Object.keys(phpLaravelContent).map(city => `/php-laravel-agentur-${city}`),
        ...Object.keys(softwareContent).map(city => `/softwareentwicklung-${city}`),
        ...Object.keys(vueContent).map(city => `/vue-js-entwicklung-${city}`)
      ],
      ignore: ['/api']
    }
  },

  vite: {
    css: { transformer: 'postcss' },
    build: { cssMinify: 'esbuild' }
  }
})