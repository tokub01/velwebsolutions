export default defineNuxtConfig({
  // Datum auf aktuellen Stand bringen für stabile Feature-Flags
  compatibilityDate: '2024-11-01',

  devtools: { enabled: true },

  routeRules: {
    '/': { redirect: { to: '/leistungen', statusCode: 301 }, prerender: true },
    '/ueber-mich': { prerender: true },
    '/leistungen': { prerender: true },
    '/technologien': { prerender: true },
    '/faq': { prerender: true },
    '/datenschutz': { prerender: true },
    '/impressum': { prerender: true },

    // 2. Dynamische Inhalte (SWR - Stale-While-Revalidate)
    // Perfekt für Blogs & Erfolgsgeschichten: Schnell wie statische Seiten,
    // aber aktualisieren sich im Hintergrund bei Änderungen im CMS/Backend.
    '/blog/**': { swr: 3600 }, // 1 Stunde Cache
    '/erfolgsgeschichten/**': { swr: 3600 },
    '/projekte': { swr: 600 }, // 10 Minuten Cache für die Projektübersicht

    // 3. Interaktive Tools (SPA-Modus / Client-side only)
    // Der Kostenrechner ist hochgradig interaktiv (Vue-State).
    // Ihn rein auf dem Client zu rendern spart Server-Ressourcen.
    '/kostenrechner': { ssr: false },

    // 4. Kontakt-Schnittstelle (Kein Caching erlaubt)
    // Damit das reCAPTCHA und das Formular-Handling (POST) immer frisch sind.
    '/kontakt': { ssr: true, static: false },

    // 5. API Proxy & Security Headers
    // Beispiel für Security-Optimierung deiner Server-Route
    '/api/**': {
      cors: true,
      headers: { 'Cache-Control': 'no-store, max-age=0' }
    }
  },

  modules: ['nuxt-lucide-icons', '@nuxtjs/tailwindcss', '@nuxt/image'],

  // Lucide Icons: Prefix ist gut, aber achte darauf,
  // dass du im Template die Icons per PascalCase nutzt (z.B. <LucideCode2 />)
  lucide: {
    namePrefix: 'Lucide'
  },
  runtimeConfig: {
    // Diese Keys bleiben auf dem Server
    emailjsServiceId: process.env.EMAILJS_SERVICE_ID,
    emailjsTemplateId: process.env.EMAILJS_TEMPLATE_ID,
    emailjsPrivateKey: process.env.EMAILJS_PRIVATE_KEY, // Secret Key von EmailJS
    recaptchaSecretKey: process.env.RECAPTCHA_SECRET_KEY,

    public: {
      // Nur der Site-Key für das Widget bleibt öffentlich
      recaptchaSiteKey: process.env.NUXT_PUBLIC_RECAPTCHA_SITE_KEY,
    }
  },
  tailwindcss: {
    cssPath: '@/assets/css/main.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    viewer: true,
  },
  nitro: {
    compressPublicAssets: true,
  },
  // WICHTIG für PHP/Laravel Devs: CORS & API Handling
  // Falls du später deine Laravel-API anbindest:
  /*
  runtimeConfig: {
    public: {
      apiBase: process.env.NUXT_PUBLIC_API_BASE || 'http://localhost:8000/api'
    }
  },
  */

  app: {
    head: {
      htmlAttrs: { lang: 'de' },
      // Nutze ein Template für Titel, damit "Krefeld" etc. sauber angehängt werden
      titleTemplate: '%s | VelWebSolutions',
      title: 'Tobias Kubina',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Ihre Webentwicklung Agentur für maßgeschneiderte Websites & Web-Apps mit PHP/Laravel und Vue.js.' },
        { name: 'theme-color', content: '#dc2626' },
        { property: 'og:type', content: 'website' },
        { property: 'og:locale', content: 'de_DE' },
        { property: 'og:title', content: 'Tobias Kubina - VelWebSolutions' },
        { property: 'og:image', content: '/og-image.jpg' }
      ],
      link: [
        {
          rel: 'icon',
          type: 'image/jpeg', // Korrigiert für .jpg
          href: '/velweb-favicon-32x32.jpg'
        },
        {
          rel: 'apple-touch-icon',
          href: '/velweb-favicon-32x32.jpg'
        }
      ]
    }
  }
})