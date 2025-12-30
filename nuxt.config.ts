import { defineNuxtConfig } from 'nuxt/config'
import { blogPosts } from './data/blogPosts'

export default defineNuxtConfig({
  ssr: true,
  compatibilityDate: '2024-11-01',

  app: {
    head: {
      htmlAttrs: {
        lang: 'de'
      },
      title: 'Tobias Kubina - VelWebSolutions | Webentwicklung Agentur',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'description', content: 'Ihre Webentwicklung Agentur für maßgeschneiderte Websites & Web-Apps. Schnell, sicher, 100% Custom Development. Festpreise ab 5.950€. Jetzt unverbindlich beraten lassen!' },
        { name: 'robots', content: 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1' },
        { name: 'author', content: 'Tobias Kubina, VelWebSolutions' },
        { name: 'theme-color', content: '#dc2626' },

        // Open Graph / Facebook
        { property: 'og:type', content: 'website' },
        { property: 'og:url', content: 'https://velwebsolutions.de/' },
        { property: 'og:title', content: 'Tobias Kubina - VelWebSolutions | Webentwicklung Agentur' },
        { property: 'og:description', content: 'Maßgeschneiderte Webanwendungen und High-End Websites mit Laravel & Vue.js. Custom Development aus NRW.' },
        { property: 'og:image', content: 'https://velwebsolutions.de/velweb-og-1200x630.jpg' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:site_name', content: 'VelWebSolutions' },

        // Twitter
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Tobias Kubina - VelWebSolutions | Webentwicklung Agentur' },
        { name: 'twitter:description', content: 'Maßgeschneiderte Webanwendungen und High-End Websites mit Laravel & Vue.js.' },
        { name: 'twitter:image', content: 'https://velwebsolutions.de/velweb-og-1200x630.jpg' }
      ],
      link: [
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/velweb-favicon-16x16.jpg' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/velweb-favicon-32x32.jpg' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/velweb-favicon-32x32.jpg' },
        { rel: 'manifest', href: '/site.webmanifest' },
        { rel: 'alternate', hreflang: 'de', href: 'https://velwebsolutions.de/' },
        { rel: 'alternate', hreflang: 'x-default', href: 'https://velwebsolutions.de/' }
      ],
      script: [
        // JSON-LD Strukturierte Daten
        {
          type: 'application/ld+json',
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": ["Organization", "ProfessionalService"],
                "@id": "https://velwebsolutions.de/#organization",
                "name": "VelWebSolutions",
                "url": "https://velwebsolutions.de/",
                "logo": {
                  "@type": "ImageObject",
                  "@id": "https://velwebsolutions.de/#logo",
                  "url": "https://velwebsolutions.de/logo.png",
                  "width": 512,
                  "height": 512,
                  "caption": "VelWebSolutions Logo"
                }
              }
            ]
          })
        },
        // Google Tag Manager (GTAG)
        {
          src: 'https://www.googletagmanager.com/gtag/js?id=G-6Y61X4Q09H',
          async: true
        },
        // Inline GTAG Logic mit Consent-Check
        {
          children: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            if (localStorage.getItem('cookieConsent') === 'granted') {
              gtag('consent', 'default', { 'analytics_storage': 'granted' });
            } else {
              gtag('consent', 'default', { 'analytics_storage': 'denied' });
            }
            gtag('js', new Date());
            gtag('config', 'G-6Y61X4Q09H', { 'anonymize_ip': true });
          `
        }
      ]
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
  // SSR Optimierung: Caching & Route-Handling
  routeRules: {
    '/api/**': { isr: false, cors: true },
    '/blog/**': { isr: 3600 }, // Cache Blog-Seiten für 1 Std (Incremental Static Regeneration)
    '/kontakt': { ssr: true }
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
    compressPublicAssets: true, // Optimiert SSR-Performance durch Gzip/Brotli
    prerender: {
      crawlLinks: false,
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

  vite: {
    css: { transformer: 'postcss' },
    build: { cssMinify: 'esbuild' }
  }
})