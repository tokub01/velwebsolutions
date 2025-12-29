<template>
  <div class="font-sans text-gray-900 bg-white selection:bg-red-100 selection:text-red-600">
    <header class="relative py-24 md:py-44 bg-gradient-to-br from-red-700 via-red-600 to-red-500 text-white px-6 overflow-hidden mt-[81px]">
      <div class="absolute inset-0 opacity-10 pointer-events-none">
        <div class="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] animate-[grid-move_20s_linear_infinite]"></div>
      </div>
      <div class="relative z-10 max-w-6xl mx-auto text-center">
        <span class="inline-block px-5 py-2 mb-6 rounded-full bg-white text-red-600 text-[10px] font-black uppercase tracking-[0.2em] shadow-xl italic">
          ✓ DEUTSCHLANDWEIT REMOTE
        </span>
        <h1 class="text-5xl md:text-9xl font-black mb-10 leading-[0.85] tracking-tighter uppercase italic">
          Starten wir den <br/><span class="text-white/90 underline decoration-white/30 italic">Dialog.</span>
        </h1>
      </div>
    </header>

    <section class="py-32 px-6">
      <div class="max-w-7xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-20">
          <div>
            <h2 class="text-4xl md:text-7xl font-black mb-12 uppercase italic tracking-tighter leading-none">
              Kein Smalltalk. <br/><span class="text-red-600">Nur Lösungen.</span>
            </h2>
            <div class="space-y-12">
              <div class="group cursor-default">
                <p class="text-[10px] font-black uppercase tracking-[0.3em] text-red-600 mb-2 italic">// Direkter Draht</p>
                <p class="text-3xl md:text-4xl font-black italic hover:text-red-600 transition-colors uppercase">info@velwebsolutions.de</p>
              </div>
            </div>
          </div>

          <div class="relative min-h-[600px]">
            <div v-if="consentCookie !== 'granted'" class="absolute inset-0 z-30 bg-white/95 backdrop-blur-md flex flex-col items-center justify-center p-10 text-center rounded-[3.5rem] border-4 border-dashed border-gray-200">
              <h3 class="text-3xl font-black uppercase italic mb-4">Dienste blockiert</h3>
              <p class="mb-6 font-bold text-gray-500 italic">Bitte akzeptiere die Cookies, um das Kontaktformular (reCAPTCHA) zu nutzen.</p>
              <button @click="isBannerVisible = true" class="bg-red-600 text-white px-12 py-6 rounded-2xl font-black uppercase italic tracking-[0.2em] hover:scale-105 transition-transform shadow-lg">Einstellungen öffnen</button>
            </div>

            <div v-else-if="cooldownActive" class="absolute inset-0 z-20 bg-white/90 backdrop-blur-sm flex flex-col items-center justify-center p-10 text-center rounded-[3rem] border-4 border-gray-900 shadow-2xl">
              <h3 class="text-3xl font-black uppercase italic mb-4 text-gray-900">System-Cooldown</h3>
              <p class="mb-4 font-bold italic text-gray-500">Du hast bereits eine Nachricht gesendet.</p>
              <div class="text-6xl font-mono font-black text-red-600">{{ cooldownDisplay }}</div>
            </div>

            <form @submit.prevent="sendEmail" :class="{ 'opacity-10 pointer-events-none blur-sm': consentCookie !== 'granted' }" class="relative space-y-6 bg-gray-50 p-8 md:p-12 rounded-[3.5rem] border border-gray-100 shadow-3xl">
              <input v-model="formData.name" type="text" placeholder="NAME / UNTERNEHMEN" autocomplete="name" required class="w-full bg-white border-2 border-gray-200 p-6 rounded-2xl font-black italic focus:border-red-600 outline-none transition-all">

              <div class="grid md:grid-cols-2 gap-6">
                <input v-model="formData.title" type="text" placeholder="PROJEKT-TITEL" class="w-full bg-white border-2 border-gray-200 p-6 rounded-2xl font-black italic focus:border-red-600 outline-none transition-all">
                <input v-model="formData.email" type="email" placeholder="EMAIL-ADRESSE" autocomplete="email" required class="w-full bg-white border-2 border-gray-200 p-6 rounded-2xl font-black italic focus:border-red-600 outline-none transition-all">
              </div>

              <textarea v-model="formData.message" rows="5" placeholder="PROJEKT-DETAILS" required class="w-full bg-white border-2 border-gray-200 p-6 rounded-2xl font-black italic focus:border-red-600 outline-none resize-none transition-all"></textarea>

              <ClientOnly>
                <div id="recaptcha-element" class="flex justify-center my-6 min-h-[78px]"></div>
                <template #fallback>
                  <div class="flex justify-center my-6 min-h-[78px] items-center border-2 border-dashed border-gray-200 rounded-2xl text-gray-400 text-[10px] italic uppercase font-black">
                    Sicherheitsprüfung wird geladen...
                  </div>
                </template>
              </ClientOnly>

              <button :disabled="loading || consentCookie !== 'granted'" type="submit" class="w-full bg-gray-900 text-white p-8 rounded-2xl font-black text-2xl uppercase italic tracking-widest hover:bg-red-600 disabled:bg-gray-300 transition-all flex items-center justify-center gap-4 group">
                <span v-if="loading" class="animate-spin text-3xl italic font-black">⚙️</span>
                <span v-else class="group-hover:translate-x-2 transition-transform">MISSION STARTEN</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <div class="fixed bottom-10 right-10 z-[100] flex flex-col gap-3 items-end pointer-events-none">
      <transition-group name="toast">
        <div v-for="toast in toasts" :key="toast.id"
          :class="toast.type === 'success' ? 'bg-gray-900' : 'bg-red-600'"
          class="text-white px-8 py-4 rounded-xl font-black uppercase italic shadow-2xl flex items-center gap-3 pointer-events-auto">
          <span>{{ toast.text }}</span>
          <button @click="removeToast(toast.id)" class="text-white/50 hover:text-white text-xs p-1">✕</button>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script setup>
import { nextTick, onMounted, onBeforeUnmount, watch, ref } from 'vue'

// Layout & SEO
definePageMeta({ layout: 'guest' })
useHead({
  title: 'Dialog | VelWebSolutions',
  meta: [{ name: 'description', content: 'Tobias Kubina - Webentwicklung aus Krefeld.' }]
})

// State Management
const formData = useState('contact_form_data', () => ({ name: '', title: '', email: '', message: '' }))
const loading = ref(false) // Lokal reicht hier völlig
const toasts = ref([]) // ref statt useState für rein clientseitiges UI
const cooldownActive = useState('contact_cooldown_active', () => false)
const cooldownDisplay = useState('contact_cooldown_timer', () => '00:00')
const isBannerVisible = useState('cookie_banner_visible')

const config = useRuntimeConfig()
const consentCookie = useCookie('user_consent')
const cooldownCookie = useCookie('contact_cooldown_timestamp')

let recaptchaId = null

/**
 * UI Feedback: Toasts
 */
const addToast = (text, type = 'error') => {
  const id = Date.now()
  toasts.value.push({ id, text, type })
  setTimeout(() => removeToast(id), 5000)
}

const removeToast = (id) => {
  toasts.value = toasts.value.filter(t => t.id !== id)
}

/**
 * Google reCAPTCHA v2 Logic
 */
const renderRecaptcha = () => {
  const container = document.getElementById('recaptcha-element')
  if (process.client && container && window.grecaptcha?.render) {
    try {
      // Container leeren für saubere Neu-Initialisierung (Hydration Fix)
      container.innerHTML = ''
      recaptchaId = window.grecaptcha.render('recaptcha-element', {
        sitekey: config.public.recaptchaSiteKey,
        theme: 'light'
      })
    } catch (e) {
      console.warn("reCAPTCHA render skipped:", e)
    }
  }
}

const loadRecaptchaScript = () => {
  if (process.client && consentCookie.value === 'granted') {
    if (window.grecaptcha?.render) {
      nextTick(renderRecaptcha)
    } else {
      window.onRecaptchaLoad = () => { nextTick(renderRecaptcha) }
      if (!document.querySelector('script[src*="recaptcha/api.js"]')) {
        const script = document.createElement('script')
        script.src = `https://www.google.com/recaptcha/api.js?render=explicit&onload=onRecaptchaLoad`
        script.async = true; script.defer = true
        document.head.appendChild(script)
      }
    }
  }
}

// Beobachte Cookie-Einwilligung
watch(consentCookie, (newVal) => {
  if (newVal === 'granted') loadRecaptchaScript()
})

/**
 * Form Submission
 */
const sendEmail = async () => {
  if (consentCookie.value !== 'granted' || cooldownActive.value || loading.value) return

  loading.value = true
  try {
    const token = (process.client && window.grecaptcha && recaptchaId !== null)
      ? window.grecaptcha.getResponse(recaptchaId)
      : ''

    if (!token) {
      addToast('⚠️ Sicherheitsprüfung erforderlich!')
      loading.value = false
      return
    }

    await $fetch('/api/contact', {
      method: 'POST',
      body: {
        from_name: formData.value.name,
        from_title: formData.value.title,
        from_email: formData.value.email,
        message: formData.value.message,
        'g-recaptcha-response': token
      }
    })

    addToast('✅ Mission gestartet! Nachricht ist raus.', 'success')
    cooldownCookie.value = Date.now() + (5 * 60 * 1000)
    formData.value = { name: '', title: '', email: '', message: '' }

    if (window.grecaptcha && recaptchaId !== null) window.grecaptcha.reset(recaptchaId)

  } catch (err) {
    if (window.grecaptcha && recaptchaId !== null) window.grecaptcha.reset(recaptchaId)
    addToast(`⚠️ ${err.data?.statusMessage || 'Systemfehler beim Versand.'}`)
  } finally {
    loading.value = false
  }
}

/**
 * Cooldown Timer Logic
 */
const updateCooldown = () => {
  if (!cooldownCookie.value) { cooldownActive.value = false; return }
  const remaining = Math.max(0, cooldownCookie.value - Date.now())
  if (remaining <= 0) {
    cooldownActive.value = false
    cooldownCookie.value = null
    return
  }
  const m = Math.floor(remaining / 60000), s = Math.floor((remaining % 60000) / 1000)
  cooldownDisplay.value = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
  cooldownActive.value = true
}

let interval = null
onMounted(() => {
  loadRecaptchaScript()
  updateCooldown()
  interval = setInterval(updateCooldown, 1000)
})

onBeforeUnmount(() => {
  if (interval) clearInterval(interval)
  if (process.client) window.onRecaptchaLoad = null
})
</script>

<style scoped>
@keyframes grid-move { 0% { transform: translate(0, 0); } 100% { transform: translate(40px, 40px); } }
.shadow-3xl { box-shadow: 0 35px 60px -15px rgba(0, 0, 0, 0.3); }

/* Toast Animationen (Optimiert für smoothe Bewegungen) */
.toast-enter-active, .toast-leave-active {
  transition: all 0.5s cubic-bezier(0.68, -0.55, 0.265, 1.55);
}
.toast-enter-from { opacity: 0; transform: translateX(50px) scale(0.9); }
.toast-leave-to { opacity: 0; transform: scale(0.8) translateY(10px); }
</style>