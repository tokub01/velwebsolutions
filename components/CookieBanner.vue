<template>
  <ClientOnly>
    <Teleport to="body">
      <Transition name="fade">
        <div v-if="isVisible" class="fixed inset-0 z-[9999] flex items-end justify-center p-6 sm:p-10 pointer-events-none">

          <div
            class="fixed inset-0 bg-gray-900/60 backdrop-blur-sm pointer-events-auto"
            @click="saveSelection"
          ></div>

          <div class="relative w-full max-w-2xl bg-white rounded-[3rem] shadow-2xl border border-gray-100 p-8 md:p-12 pointer-events-auto overflow-hidden">
            <div class="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-600 to-red-400"></div>

            <div class="mb-8">
              <div class="text-[10px] font-black text-red-600 uppercase tracking-[0.3em] mb-4 italic">
                // Privacy_Control_Panel
              </div>
              <h2 class="text-3xl md:text-5xl font-black uppercase italic tracking-tighter leading-none mb-6 text-gray-900">
                Datenschutz & <br/><span class="text-red-600">Performance.</span>
              </h2>
              <p class="text-gray-500 italic font-medium leading-relaxed">
                Um die technische Performance zu optimieren und unsere Dienstleistungen (reCAPTCHA, Email-Versand) sicherzustellen, nutzen wir Drittanbieter-Scripts. Ohne Ihre Zustimmung bleiben diese Funktionen deaktiviert.
              </p>
            </div>

            <div class="space-y-4 mb-10">
              <div class="flex items-center justify-between p-6 bg-gray-50 rounded-3xl border border-gray-100">
                <div>
                  <h4 class="font-black uppercase italic text-sm tracking-tight text-gray-900">System-Kern</h4>
                  <p class="text-[10px] text-gray-400 font-bold uppercase italic">Sitzung & Grundfunktionen</p>
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
                  <h4 class="font-black uppercase italic text-sm tracking-tight" :class="analyticsAccepted ? 'text-red-600' : 'text-gray-900'">
                    Security & Analytics
                  </h4>
                  <p class="text-[10px] text-gray-400 font-bold uppercase italic">Aktiviert reCAPTCHA, EmailJS & UX-Tracking</p>
                </div>
                <input type="checkbox" v-model="analyticsAccepted" class="hidden" />
                <div class="w-12 h-6 rounded-full relative transition-colors" :class="analyticsAccepted ? 'bg-red-600' : 'bg-gray-200'">
                  <div class="absolute top-1 w-4 h-4 bg-white rounded-full transition-all shadow-sm" :class="analyticsAccepted ? 'right-1' : 'left-1'"></div>
                </div>
              </label>
            </div>

            <div class="flex flex-col sm:flex-row gap-4">
              <button
                @click="acceptAll"
                class="flex-1 bg-gray-900 text-white font-black py-6 rounded-2xl uppercase italic tracking-widest hover:bg-red-600 transition-all text-sm shadow-xl active:scale-95"
              >
                Alle akzeptieren
              </button>
              <button
                @click="saveSelection"
                class="flex-1 border-2 border-gray-200 text-gray-900 font-black py-6 rounded-2xl uppercase italic tracking-widest hover:border-gray-900 transition-all text-sm active:scale-95"
              >
                Auswahl speichern
              </button>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </ClientOnly>
</template>

<script setup>
/**
 * Informatiker-Kontext:
 * Wir nutzen useState für die globale Reaktivität, damit das Kontaktformular
 * sofort auf Änderungen reagieren kann, ohne die Seite neu zu laden.
 */
const isVisible = useState('cookie_banner_visible', () => false)
const analyticsAccepted = ref(true)

const consentCookie = useCookie('user_consent', {
  maxAge: 60 * 60 * 24 * 365,
  sameSite: 'lax',
  path: '/'
})

onMounted(() => {
  if (!consentCookie.value) {
    nextTick(() => {
      isVisible.value = true
    })
  }
})

// Body-Scroll-Lock
watch(isVisible, (val) => {
  if (import.meta.client) {
    document.body.style.overflow = val ? 'hidden' : ''
  }
}, { immediate: true })

const acceptAll = () => {
  analyticsAccepted.value = true
  saveConsent('granted')
}

const saveSelection = () => {
  saveConsent(analyticsAccepted.value ? 'granted' : 'declined')
}

const saveConsent = (status) => {
  consentCookie.value = status
  isVisible.value = false

  // Technischer Force-Reload:
  // Dies stellt sicher, dass alle Third-Party-Scripts (reCAPTCHA, Analytics)
  // im korrekten Zustand (geladen oder blockiert) initialisiert werden.
  if (import.meta.client) {
    window.location.reload()
  }
}
</script>

<style scoped>
.fade-enter-active, .fade-leave-active {
  transition: all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1);
}
.fade-enter-from, .fade-leave-to {
  opacity: 0;
  transform: translateY(100px) scale(0.95);
}
</style>