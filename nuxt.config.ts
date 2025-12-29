import { defineNuxtConfig } from 'nuxt/config'
// Import deiner Blog-Daten, um die Routen für das Prerendering zu generieren
import { blogPosts } from './data/blogPosts'

export default defineNuxtConfig({
  // 1. Grundkonfiguration
  // ssr muss true sein, damit Nuxt während des 'generate'-Prozesses HTML-Dateien rendert
  ssr: true,

  // 2. Module
  modules: [
    '@nuxt/image'
  ],

  // 3. Modul-Konfiguration (@nuxt/image)
  image: {
    // Erlaubte Domains für externe Bilder (z.B. Unsplash)
    domains: [
      'images.unsplash.com',
      'source.unsplash.com',
      'plus.unsplash.com'
    ],
    // Standard-Konfiguration für Provider (optional)
    provider: 'ipx'
  },

  // 4. Nitro & Deployment (Netlify SSG)
  nitro: {
    // 'static' ist das sicherste Preset für reines HTML-Exporting
    preset: 'static',
    prerender: {
      crawlLinks: true, // Nuxt folgt automatisch allen internen Links
      routes: [
        '/',
        '/leistungen',
        '/blog',
        '/sitemap.xml',
        '/robots.txt',
        // Dynamische Generierung aller Blog-Unterseiten
        ...blogPosts.map(post => `/blog/${post.slug}`)
      ],
      // Verhindert, dass der Build bei fehlenden Bildern oder kleinen Fehlern komplett abbricht
      failOnError: false
    }
  },

  // 5. Routing-Regeln für die "Festungs"-Logik
  routeRules: {
    // Diese Seiten werden definitiv vorgerendert
    '/': { prerender: true },
    '/leistungen': { prerender: true },
    '/blog/**': { prerender: true },
    // SPA-Fallback für alle anderen Routen
    '/**': { isr: false }
  },

  // 6. Globaler App-Head (SEO)
  app: {
    baseURL: '/',
    buildAssetsDir: '/_nuxt/',
    head: {
      htmlAttrs: {
        lang: 'de'
      },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'VelWebSolutions | Professionelle Webentwicklung',
      meta: [
        {
          name: 'description',
          content: 'Webentwicklung mit Laravel und Vue.js - Informatik-Expertise für Ihre Website.'
        }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
      ],

    }
  },

  // 7. Nuxt 4 Optimierungen
  experimental: {
    payloadExtraction: false,
  },

  // Kompatibilitäts-Datum für Nuxt 4 Features
  compatibilityDate: '2024-11-01'
})