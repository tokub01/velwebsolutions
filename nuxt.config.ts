import { defineNuxtConfig } from 'nuxt/config'
import { blogPosts } from './data/blogPosts'
import { cityContent } from './data/cityContent'
import { phpLaravelContent } from './data/phpLaravelContent'
import { softwareContent } from './data/softwareContent'
import { vueContent } from './data/vueContent'

export default defineNuxtConfig({
  // SSR für SEO, wird bei 'generate' zu statischem HTML
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

  // --- NEU: ROUTER KONFIGURATION ---
  // Steuert das Verhalten der internen Links (NuxtLink)
  router: {
    options: {
      trailingSlash: false, // Erzwingt intern URLs ohne Slash
      linkActiveClass: 'active-link'
    }
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    'nuxt-lucide-icons'
  ],

  image: {
    domains: ['images.unsplash.com']
  },

  routeRules: {
    '/**': { static: true },
    '/api/**': { isr: false, cors: true }
  },

  runtimeConfig: {
    public: {
      recaptchaSiteKey: process.env.NUXT_PUBLIC_RECAPTCHA_SITE_KEY,
      emailjsServiceId: process.env.NUXT_PUBLIC_EMAILJS_SERVICE_ID,
      emailjsTemplateId: process.env.NUXT_PUBLIC_EMAILJS_TEMPLATE_ID,
      emailjsPublicKey: process.env.NUXT_PUBLIC_EMAILJS_PUBLIC_KEY,
    }
  },

  nitro: {
    compressPublicAssets: true,
    // --- NEU: NITRO OPTIMIERUNG ---
    // Verhindert, dass Nitro Ordner mit index.html generiert (was den Slash erzwingt)
    // Wenn auf true, wird aus /projekte -> /projekte/index.html
    // Wenn auf false, wird aus /projekte -> /projekte.html
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
      ignore: ['/api/**']
    }
  },

  vite: {
    css: { transformer: 'postcss' },
    build: { cssMinify: 'esbuild' }
  }
})