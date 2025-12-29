// nuxt.config.ts
export default defineNuxtConfig({
  // ... (deine anderen Einstellungen wie compatibilityDate, devtools, routeRules bleiben gleich)
  routeRules: {
    // 1. Einfaches Prerendering für statische Seiten
    '/ueber-mich': { prerender: true },
    '/leistungen': { prerender: true },
    '/faq': { prerender: true },
    '/impressum': { prerender: true },
    '/datenschutz': { prerender: true },

    // 2. Prerendering mit Redirect (deine Startseite)
    '/': {
      redirect: { to: '/leistungen', statusCode: 301 },
      prerender: true
    },

    // 3. Hybrid-Lösungen (SWR) - Alternative zum harten Prerendering
    // Diese Seiten werden einmal generiert und nach Ablauf des TTL im Hintergrund aktualisiert.
    '/blog/**': { swr: 3600 }, // 1 Stunde Cache

    // 4. Ausschluss vom Prerendering (Wichtig für dein Kontaktformular!)
    // Da hier reCAPTCHA und POST-Requests laufen, darf die Seite nicht statisch eingefroren werden.
    '/kontakt': { ssr: true, static: false }
  },
  runtimeConfig: {
    // 1. NUR auf dem Server verfügbar (für deine api/contact.post.ts)
    // Nuxt mappt automatisch Umgebungsvariablen wie NUXT_EMAILJS_SERVICE_ID,
    // aber wir weisen sie hier explizit deinen .env Namen zu:
    emailjsServiceId: process.env.EMAILJS_SERVICE_ID,
    emailjsTemplateId: process.env.EMAILJS_TEMPLATE_ID,
    emailjsPrivateKey: process.env.EMAILJS_PRIVATE_KEY, // Dein glPA_... Key

    // 2. Im Frontend UND Backend verfügbar
    public: {
      // Hier muss exakt der Name aus deiner .env stehen
      recaptchaSiteKey: process.env.RECAPTCHA_SITE_KEY,
    }
  },

  // ... (Rest deiner Config: modules, lucide, tailwindcss, nitro, app)

  // WICHTIG: Entferne den doppelten runtimeConfig Block am Ende der Datei,
  // falls dieser noch aus deinem PHP/Laravel Kommentar-Snippet existiert.

  modules: ['nuxt-lucide-icons', '@nuxtjs/tailwindcss', '@nuxt/image'],

  lucide: {
    namePrefix: 'Lucide'
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

  app: {
    head: {
      htmlAttrs: { lang: 'de' },
      titleTemplate: '%s | VelWebSolutions',
      title: 'Tobias Kubina',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', content: 'Ihre Webentwicklung Agentur für maßgeschneiderte Websites & Web-Apps mit PHP/Laravel und Vue.js.' },
        { name: 'theme-color', content: '#dc2626' }
      ],
      link: [
        { rel: 'icon', type: 'image/jpeg', href: '/velweb-favicon-32x32.jpg' },
        { rel: 'apple-touch-icon', href: '/velweb-favicon-32x32.jpg' }
      ]
    }
  }
})