import { defineNuxtConfig } from 'nuxt/config'

// Wir gehen davon aus, dass deine Blog-Daten hier liegen
// Falls der Pfad anders ist, bitte anpassen
import { blogPosts } from './data/blogPosts'

export default defineNuxtConfig({
  // 1. Grundkonfiguration für SSG
  ssr: true, // Muss 'true' sein, damit HTML-Dateien generiert werden

  // 2. Nitro & Netlify Integration
  nitro: {
    preset: 'netlify-static', // Speziell für statischen Export auf Netlify
    static: true,
    // Verhindert, dass Nitro versucht, Server-Funktionen für statische Seiten zu bauen
    prerender: {
      crawlLinks: true, // Nuxt folgt allen internen Links automatisch
      routes: [
        '/',
        '/leistungen',
        '/blog',
        '/sitemap.xml',
        '/robots.txt',
        // Hier mappen wir deine Blog-Slugs explizit, damit sie garantiert gerendert werden
        ...blogPosts.map(post => `/blog/${post.slug}`)
      ],
      failOnError: false // Verhindert Build-Abbruch bei kleinen Warnungen
    }
  },

  // 3. Routing & SEO Optimierung
  routeRules: {
    // Statische Seiten werden beim Build generiert und als HTML ausgeliefert
    '/': { prerender: true },
    '/leistungen': { prerender: true },
    '/blog/**': { prerender: true },

    // Fallback für SPA-Funktionalität
    '/**': { isr: false }
  },

  // 4. Header & Meta (Wissenschaftlich fundiertes SEO)
  app: {
    head: {
      htmlAttrs: { lang: 'de' },
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      title: 'VelWebSolutions | Professionelle Webentwicklung',
      meta: [
        { name: 'description', content: 'Webentwicklung mit Laravel und Vue.js - Informatik-Expertise für Ihre Website.' }
      ]
    }
  },

  // 5. Build-Optimierung für Nuxt 4
  experimental: {
    payloadExtraction: true, // Verbessert die Performance bei der Navigation zwischen Blogposts
  },

  compatibilityDate: '2024-11-01' // Nuxt 4 Kompatibilitäts-Flag
})