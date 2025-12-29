<template>
  <Teleport to="body">
    <div v-if="isVisible" class="fixed inset-0 z-[9999] flex items-end justify-center p-6 sm:p-10 pointer-events-none">
      <div class="fixed inset-0 bg-gray-900/60 backdrop-blur-sm pointer-events-auto"></div>

      <div class="relative w-full max-w-2xl bg-white rounded-[3rem] shadow-2xl border border-gray-100 p-8 md:p-12 pointer-events-auto overflow-hidden">
        <div class="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-600 to-red-400"></div>

        <div class="mb-8">
          <div class="text-[10px] font-black text-red-600 uppercase tracking-[0.3em] mb-4 italic">// Privacy_Control_Panel</div>
          <h2 class="text-3xl md:text-5xl font-black uppercase italic tracking-tighter leading-none mb-6">
            Datenschutz & <br/><span class="text-red-600">Performance.</span>
          </h2>
          <p class="text-gray-500 italic font-medium leading-relaxed">
            Um die technische Performance zu optimieren und unsere Dienstleistungen zu verbessern, nutzen wir Cookies.
            Wählen Sie Ihre Präferenzen für ein optimales Erlebnis.
          </p>
        </div>

        <div class="space-y-4 mb-10">
          <div class="flex items-center justify-between p-6 bg-gray-50 rounded-3xl border border-gray-100">
            <div>
              <h4 class="font-black uppercase italic text-sm tracking-tight">Essenziell</h4>
              <p class="text-[10px] text-gray-400 font-bold uppercase italic">Notwendig für den Betrieb (Sicherheit & System)</p>
            </div>
            <div class="w-12 h-6 bg-red-600 rounded-full relative opacity-50 cursor-not-allowed">
              <div class="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
            </div>
          </div>

          <label
            class="flex items-center justify-between p-6 rounded-3xl border-2 transition-all cursor-pointer group"
            :class="analyticsAccepted ? 'border-red-600 bg-red-50' : 'border-gray-100 bg-white hover:border-gray-200'"
          >
            <div>
              <h4 class="font-black uppercase italic text-sm tracking-tight" :class="analyticsAccepted ? 'text-red-600' : ''">Analytics & Security</h4>
              <p class="text-[10px] text-gray-400 font-bold uppercase italic">Hilft uns bei der UX & Google ReCaptcha Schutz</p>
            </div>
            <input type="checkbox" v-model="analyticsAccepted" class="hidden" />
            <div class="w-12 h-6 rounded-full relative transition-colors" :class="analyticsAccepted ? 'bg-red-600' : 'bg-gray-200'">
              <div class="absolute top-1 w-4 h-4 bg-white rounded-full transition-all" :class="analyticsAccepted ? 'right-1' : 'left-1'"></div>
            </div>
          </label>
        </div>

        <div class="flex flex-col sm:flex-row gap-4">
          <button @click="acceptAll" class="flex-1 bg-gray-900 text-white font-black py-6 rounded-2xl uppercase italic tracking-widest hover:bg-red-600 transition-all text-sm">
            Alle akzeptieren
          </button>
          <button @click="saveSelection" class="flex-1 border-2 border-gray-200 text-gray-900 font-black py-6 rounded-2xl uppercase italic tracking-widest hover:border-gray-900 transition-all text-sm">
            Auswahl speichern
          </button>
        </div>

        <div class="mt-8 text-center">
          <NuxtLink to="/datenschutz" class="text-[9px] font-black text-gray-400 uppercase tracking-widest hover:text-red-600 transition-colors">Detaillierte Datenschutzerklärung</NuxtLink>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
import { ref, onMounted, watchEffect } from 'vue'

// Nuxt State für Sichtbarkeit
const isVisible = useState('cookie_banner_visible', () => false)
const analyticsAccepted = ref(true)

// Nuxt Cookie Management (SSR-safe)
const consentCookie = useCookie('user_consent', {
  maxAge: 60 * 60 * 24 * 365, // 1 Jahr Persistenz
  sameSite: 'lax'
})

// Client-seitige Initialisierung
onMounted(() => {
  // Wenn kein Cookie da ist -> Anzeigen
  if (!consentCookie.value) {
    isVisible.value = true
  }
})

// Verhindert Scrollen im Hintergrund wenn Banner aktiv
watchEffect(() => {
  if (import.meta.client) {
    if (isVisible.value) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
  }
})

const acceptAll = () => {
  analyticsAccepted.value = true
  saveConsent('granted')
}

const saveSelection = () => {
  const status = analyticsAccepted.value ? 'granted' : 'declined'
  saveConsent(status)
}

const saveConsent = (status) => {
  // 1. Cookie setzen (löst Reaktivität in kontakt.vue aus)
  consentCookie.value = status

  // 2. Google Analytics Consent Mode Update (falls vorhanden)
  if (import.meta.client && window.gtag) {
    window.gtag('consent', 'update', {
      'analytics_storage': status === 'granted' ? 'granted' : 'denied'
    })
  }

  // 3. Banner schließen
  isVisible.value = false

  // 4. Seite neu laden für saubere Script-Injektion (optional, aber empfohlen)
  if (status === 'granted' && import.meta.client) {
    window.location.reload()
  }
}
</script>

<style scoped>
/* Nuxt 3 / Tailwind Animations */
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s ease, transform 0.5s ease;
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(50px);
}
</style>