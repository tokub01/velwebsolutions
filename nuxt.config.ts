// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },

  // Nitro Konfiguration für Netlify Functions
  nitro: {
    preset: 'netlify',
    // Optional: Prerendering für statische Seiten,
    // aber API-Routes davon ausschließen!
    prerender: {
      crawlLinks: true,
      ignore: ['/api']
    }
  },

  // Vite & CSS Optimierung (Behebt den LightningCSS Fehler)
  vite: {
    css: {
      transformer: 'postcss',
    },
    build: {
      cssMinify: 'esbuild',
    }
  },

  // Module (Tailwind etc.)
  modules: [
    '@nuxtjs/tailwindcss',
    // Andere Module hier...
  ],

  // Runtime Config für reCAPTCHA Keys (Public für Frontend)
  runtimeConfig: {
    // Secret Keys (nur serverseitig verfügbar)
    recaptchaSecretKey: process.env.RECAPTCHA_SECRET_KEY,

    public: {
      recaptchaSiteKey: process.env.NUXT_PUBLIC_RECAPTCHA_SITE_KEY,
    }
  },

  // App-Head Konfiguration
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
    }
  }
})