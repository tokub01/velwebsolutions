<template>
  <div class="font-sans text-gray-900 bg-white selection:bg-red-100 selection:text-red-600">
    <header class="relative py-24 md:py-44 bg-gradient-to-br from-red-700 via-red-600 to-red-500 text-white px-6 overflow-hidden mt-[81px]">
      <div class="absolute inset-0 opacity-10 pointer-events-none">
        <div class="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] animate-[grid-move_20s_linear_infinite]"></div>
      </div>
      <div class="relative z-10 max-w-6xl mx-auto text-center">
        <span class="inline-block px-5 py-2 mb-6 rounded-full bg-white text-red-600 text-[10px] font-black uppercase tracking-[0.2em] shadow-xl italic">
          ✓ Response Time < 24H
        </span>
        <h1 class="text-5xl md:text-9xl font-black mb-10 leading-[0.85] tracking-tighter uppercase italic">
          Starten wir den <br/><span class="text-white/90 underline decoration-white/30 italic">Dialog.</span>
        </h1>
        <p class="text-xl md:text-2xl text-red-50 max-w-4xl mx-auto leading-relaxed font-medium italic opacity-90">
          Professionelle Web-Lösungen erfordern präzise Kommunikation. Ich freue mich auf Ihre technische Herausforderung.
        </p>
      </div>
    </header>

    <section class="py-32 px-6 bg-white">
      <div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 lg:gap-24">
        <div class="relative">
          <h2 class="text-4xl md:text-6xl font-black mb-12 uppercase italic tracking-tighter text-gray-900 leading-none">
            Projekt <br/><span class="text-red-600">Briefing.</span>
          </h2>

          <div v-if="hasConsent">
            <div v-if="cooldownActive" class="bg-gray-900 p-10 rounded-[3rem] text-white shadow-2xl mb-12 flex items-center gap-8 border-l-8 border-red-600">
              <div class="bg-red-600 p-4 rounded-2xl text-white text-3xl">✓</div>
              <div>
                <h3 class="text-2xl font-black italic uppercase tracking-tighter">Nachricht im System</h3>
                <p class="text-gray-400 italic font-medium">Nächster Versand möglich in: <span class="text-red-500 font-mono">{{ cooldownDisplay }}</span></p>
              </div>
            </div>

            <form v-else ref="formRef" @submit.prevent="handleSubmit" class="space-y-6">
              <div class="space-y-2">
                <label class="block text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-4 italic">Betreff // Project_Title *</label>
                <input type="text" v-model="formData.title" name="title" class="w-full p-6 rounded-[2rem] border-2 border-gray-100 bg-gray-50 focus:bg-white focus:ring-8 focus:ring-red-50 focus:border-red-600 outline-none transition-all font-bold italic" required />
              </div>
              <div class="grid md:grid-cols-2 gap-6">
                <div class="space-y-2">
                  <label class="block text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-4 italic">Name *</label>
                  <input type="text" v-model="formData.name" name="name" class="w-full p-6 rounded-[2rem] border-2 border-gray-100 bg-gray-50 focus:bg-white focus:ring-8 focus:ring-red-50 focus:border-red-600 outline-none transition-all font-bold italic" required />
                </div>
                <div class="space-y-2">
                  <label class="block text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-4 italic">E-Mail Adresse *</label>
                  <input type="email" v-model="formData.email" name="email" class="w-full p-6 rounded-[2rem] border-2 border-gray-100 bg-gray-50 focus:bg-white focus:ring-8 focus:ring-red-50 focus:border-red-600 outline-none transition-all font-bold italic" required />
                </div>
              </div>
              <div class="space-y-2">
                <label class="block text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-4 italic">Nachricht // Input *</label>
                <textarea v-model="formData.message" name="message" rows="6" class="w-full p-6 rounded-[2rem] border-2 border-gray-100 bg-gray-50 focus:bg-white focus:ring-8 focus:ring-red-50 focus:border-red-600 outline-none transition-all font-bold italic" required></textarea>
              </div>
              <input type="hidden" name="g-recaptcha-response" ref="recaptchaInput" />
              <button type="submit" :disabled="loading" :class="['w-full py-8 rounded-[2rem] font-black text-xl uppercase tracking-widest transition-all shadow-2xl active:scale-[0.98] italic', loading ? 'bg-gray-300 cursor-not-allowed' : 'bg-red-600 text-white hover:bg-gray-900']">
                {{ loading ? 'Sende Daten...' : 'Anfrage absenden →' }}
              </button>
            </form>
            <div ref="recaptchaContainer" class="mt-8 flex justify-center"></div>
          </div>

          <div v-else class="bg-gray-50 border-4 border-dashed border-gray-100 p-16 rounded-[4rem] text-center">
            <div class="bg-white w-20 h-20 rounded-3xl flex items-center justify-center mx-auto mb-8 shadow-xl">
              <Lock class="w-10 h-10 text-red-600" />
            </div>
            <h3 class="text-3xl font-black mb-4 uppercase italic tracking-tighter">System Lock.</h3>
            <p class="text-gray-500 mb-12 max-w-xs mx-auto font-medium italic">Sicherheitsprüfung erforderlich. Bitte aktivieren Sie die Dienste.</p>
            <button @click="triggerConsentModal" class="bg-red-600 text-white px-12 py-5 rounded-2xl font-black hover:bg-black transition shadow-2xl uppercase text-sm tracking-widest italic">
              Dienste aktivieren
            </button>
          </div>
        </div>

        <div class="space-y-12">
          <h2 class="text-4xl md:text-6xl font-black mb-12 uppercase italic tracking-tighter text-gray-900 leading-none">
            Direkt <br/><span class="text-red-600">Kontakt.</span>
          </h2>
          <div class="grid gap-8">
            <div class="group bg-gray-50 p-8 md:p-10 rounded-[3rem] border border-gray-100 hover:bg-white hover:shadow-3xl transition-all duration-500 overflow-hidden">
              <div class="flex flex-col sm:flex-row items-start sm:items-center gap-6 md:gap-8">
                <div class="bg-red-600 p-6 rounded-[1.5rem] text-white shadow-2xl shadow-red-200 shrink-0">
                  <Mail class="w-8 h-8" />
                </div>
                <div class="min-w-0 flex-1">
                  <p class="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-3 italic">// E-Mail Terminal</p>
                  <a href="mailto:info@velwebsolutions.de" class="text-xl sm:text-2xl md:text-[1.75rem] font-black text-gray-900 hover:text-red-600 transition-colors italic tracking-tighter uppercase whitespace-nowrap block truncate overflow-visible">
                    info@velwebsolutions.de
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="fixed top-32 left-1/2 -translate-x-1/2 z-[110] flex flex-col gap-3 w-full max-w-md px-4">
      <TransitionGroup name="fade">
        <div v-for="toast in toasts" :key="toast.id" :class="['px-10 py-6 rounded-[2rem] shadow-3xl font-black text-lg text-center border-b-8 uppercase italic tracking-tighter', toast.type === 'success' ? 'bg-green-600 text-white border-green-800' : 'bg-red-600 text-white border-red-800']">
          {{ toast.message }}
        </div>
      </TransitionGroup>
    </div>
  </div>
</template>

<script setup>
import { Mail, Clock, Lock } from 'lucide-vue-next'
import emailjs from '@emailjs/browser'

// --- STATE MANAGEMENT ---
// Cookies (SSR-ready)
const userConsent = useCookie('user_consent', { default: () => 'denied', watch: true })
const hasConsent = computed(() => userConsent.value === 'granted' || userConsent.value === 'accepted')

// Nuxt States (Global Shared)
const formData = useState('contact_form', () => ({ name: '', title: '', email: '', message: '' }))
const cooldownEnd = useState('contact_cooldown_val', () => 0)
const toasts = useState('contact_toasts', () => [])

// Lokale UI Refs
const formRef = ref(null)
const recaptchaContainer = ref(null)
const recaptchaInput = ref(null)
const loading = ref(false)
const cooldownDisplay = ref('00:00')
const cooldownActive = ref(false)

let recaptchaId = null
let intervalId = null
const config = useRuntimeConfig()

definePageMeta({ layout: 'guest' })


// --- HEAD ---
useHead({
  title: 'Schnittstelle: Kontakt | VelWebSolutions',
  meta: [{ name: 'description', content: 'Webentwicklung mit Laravel & Vue.js.' }],
  script: [{ src: 'https://www.google.com/recaptcha/api.js?render=explicit', async: true, defer: true }]
})

// --- LOGIK ---
const addToast = (message, type = 'error') => {
  const id = Date.now()
  toasts.value.push({ id, message, type })
  setTimeout(() => { toasts.value = toasts.value.filter(t => t.id !== id) }, 4000)
}

const triggerConsentModal = () => {
  // Hier könntest du dein globales Cookie-Banner triggern.
  // Als Fallback setzen wir es hier direkt für die Demo:
  userConsent.value = 'granted'
}

const updateCooldown = () => {
  const remaining = Math.max(0, (cooldownEnd.value || 0) - Date.now())
  const m = Math.floor(remaining / 60000), s = Math.floor((remaining % 60000) / 1000)
  cooldownDisplay.value = `${String(m).padStart(2,'0')}:${String(s).padStart(2,'0')}`
  cooldownActive.value = remaining > 0
}

const initRecaptcha = () => {
  if (process.client && window.grecaptcha && hasConsent.value) {
    window.grecaptcha.ready(() => {
      if (recaptchaContainer.value) {
        recaptchaId = window.grecaptcha.render(recaptchaContainer.value, {
          sitekey: config.public.recaptchaSiteKey,
          size: 'invisible'
        })
      }
    })
  }
}

const handleSubmit = async () => {
  if (cooldownActive.value) return
  loading.value = true
  try {
    const token = await window.grecaptcha.execute(recaptchaId, { action: 'submit' })
    if (recaptchaInput.value) recaptchaInput.value.value = token

    await emailjs.sendForm('service_d0xob8f', 'template_response_admin', formRef.value, 'glPA_tAUzZ8RXJcvl')

    addToast('✅ Nachricht im System registriert!', 'success')
    cooldownEnd.value = Date.now() + (5 * 60 * 1000)

    // Cooldown bleibt im LocalStorage, da es kein Privacy-Risiko ist und Cookies nicht zumüllen soll
    localStorage.setItem('contactCooldown', cooldownEnd.value.toString())
    formData.value = { name: '', title: '', email: '', message: '' }
  } catch (err) {
    addToast('⚠️ Übertragungsfehler.')
  } finally {
    loading.value = false
  }
}

onMounted(() => {
  const storedCooldown = localStorage.getItem('contactCooldown')
  if (storedCooldown) cooldownEnd.value = parseInt(storedCooldown)

  intervalId = setInterval(updateCooldown, 1000)

  if (hasConsent.value) {
    setTimeout(initRecaptcha, 500)
  }
})

// Watcher, falls der User den Consent gibt, während er auf der Seite ist
watch(hasConsent, (newVal) => {
  if (newVal) setTimeout(initRecaptcha, 500)
})

onBeforeUnmount(() => { if (intervalId) clearInterval(intervalId) })
</script>

<style scoped>
@keyframes grid-move {
  0% { transform: translate(0, 0); }
  100% { transform: translate(40px, 40px); }
}
.fade-enter-active, .fade-leave-active { transition: all 0.5s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; transform: translateY(-20px); }
.shadow-3xl { box-shadow: 0 40px 100px -20px rgba(0, 0, 0, 0.15); }
</style>