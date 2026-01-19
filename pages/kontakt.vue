<template>
  <div class="font-sans text-gray-900 bg-white selection:bg-red-100 selection:text-red-600">
    <header class="relative py-16 md:py-44 bg-gradient-to-br from-red-700 via-red-600 to-red-500 text-white px-4 sm:px-6 overflow-hidden mt-[80px] md:mt-[81px]">
      <div class="absolute inset-0 opacity-10 pointer-events-none">
        <div class="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] animate-[grid-move_20s_linear_infinite]"></div>
      </div>
      <div class="relative z-10 max-w-6xl mx-auto text-center">
        <span class="inline-block px-4 py-2 mb-6 rounded-full bg-white text-red-600 text-[10px] font-black uppercase tracking-[0.2em] shadow-xl italic">
          ✓ Response Time < 24H
        </span>
        <h1 class="text-4xl sm:text-5xl md:text-9xl font-black mb-6 md:mb-10 leading-[1] md:leading-[0.85] tracking-tighter uppercase italic">
          Starten wir den <br/><span class="text-white/90 underline decoration-white/30 italic">Dialog.</span>
        </h1>
        <p class="text-lg md:text-2xl text-red-50 max-w-4xl mx-auto leading-relaxed font-medium italic opacity-90 px-4">
          Professionelle Web-Lösungen erfordern präzise Kommunikation. Ich freue mich auf Ihre technische Herausforderung.
        </p>
      </div>
    </header>

    <section class="bg-gray-50 py-12 md:py-16 border-y border-gray-100">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          <client-only>
            <div v-for="(usp, index) in usps" :key="index" class="group">
              <div class="flex items-center gap-4 mb-3 md:mb-4">
                <div class="h-10 w-10 md:h-12 md:w-12 rounded-xl md:rounded-2xl bg-red-600 flex items-center justify-center text-white font-mono font-bold shadow-lg italic shrink-0">
                  0{{ index + 1 }}
                </div>
                <h3 class="text-lg md:text-xl font-black uppercase italic tracking-tighter text-gray-900">{{ usp.title }}</h3>
              </div>
              <p class="text-gray-600 text-sm md:text-base font-medium italic" v-html="usp.desc || ''"></p>
            </div>
          </client-only>
        </div>
      </div>
    </section>

    <section class="py-16 md:py-32 px-4 sm:px-6 bg-white">
      <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
        <div class="order-2 lg:order-1">
          <div class="flex items-center gap-2 mb-6">
            <span class="relative flex h-3 w-3">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span class="text-[10px] font-black text-gray-400 uppercase tracking-widest italic">Status: Available for Remote Projects</span>
          </div>

          <h2 class="text-4xl md:text-6xl font-black mb-8 md:mb-12 uppercase italic tracking-tighter text-gray-900 leading-none">
            Projekt <br/><span class="text-red-600">Briefing.</span>
          </h2>

          <div class="mb-10 p-6 bg-red-50 rounded-[1.5rem] border-l-8 border-red-600 italic">
            <p class="text-[10px] font-black text-red-600 uppercase tracking-widest mb-1">// Workflow-Protokoll</p>
            <p class="text-gray-900 font-bold text-sm leading-relaxed">
              Projektstarts erfolgen nach 100% Vorkasse. Dies garantiert die sofortige Reservierung Ihrer Kapazitäten.
            </p>
          </div>

          <client-only>
            <div v-if="hasConsent && isMounted">
              <div v-show="cooldownActive" class="bg-gray-900 p-8 md:p-10 rounded-[2rem] text-white shadow-2xl mb-12 flex flex-col sm:flex-row items-center gap-6 border-l-8 border-red-600">
                <div class="bg-red-600 p-4 rounded-2xl text-white text-3xl">✓</div>
                <div class="text-center sm:text-left">
                  <h3 class="text-xl md:text-2xl font-black italic uppercase tracking-tighter">Nachricht im System</h3>
                  <p class="text-gray-400 italic font-medium">Nächster Versand in: <span class="text-red-500 font-mono">{{ cooldownDisplay }}</span></p>
                </div>
              </div>

              <form v-show="!cooldownActive" @submit.prevent="handleSubmit" class="space-y-4 md:space-y-6">
                <div class="space-y-1">
                  <label class="block text-[9px] md:text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-4 italic">Betreff *</label>
                  <input type="text" v-model="formData.title" placeholder="Worum geht es?" class="w-full p-4 md:p-6 rounded-2xl border-2 border-gray-100 bg-gray-50 focus:bg-white focus:border-red-600 outline-none transition-all font-bold italic" required />
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                  <div class="space-y-1">
                    <label class="block text-[9px] md:text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-4 italic">Name *</label>
                    <input type="text" v-model="formData.name" placeholder="Ihr Name" class="w-full p-4 md:p-6 rounded-2xl border-2 border-gray-100 bg-gray-50 focus:bg-white focus:border-red-600 outline-none transition-all font-bold italic" required />
                  </div>
                  <div class="space-y-1">
                    <label class="block text-[9px] md:text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-4 italic">E-Mail *</label>
                    <input type="email" v-model="formData.email" placeholder="mail@beispiel.de" class="w-full p-4 md:p-6 rounded-2xl border-2 border-gray-100 bg-gray-50 focus:bg-white focus:border-red-600 outline-none transition-all font-bold italic" required />
                  </div>
                </div>

                <div class="space-y-1">
                  <label class="block text-[9px] md:text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] ml-4 italic">Nachricht *</label>
                  <textarea v-model="formData.message" rows="5" placeholder="Beschreiben Sie Ihr Vorhaben..." class="w-full p-4 md:p-6 rounded-2xl border-2 border-gray-100 bg-gray-50 focus:bg-white focus:border-red-600 outline-none transition-all font-bold italic" required></textarea>
                </div>

                <div ref="recaptchaContainer" class="mt-2 min-h-[1px]"></div>

                <button type="submit" :disabled="loading" :class="['w-full py-6 md:py-8 rounded-2xl font-black text-lg md:text-xl uppercase tracking-widest transition-all shadow-2xl active:scale-[0.98] italic', loading ? 'bg-gray-300 cursor-not-allowed text-gray-500' : 'bg-red-600 text-white hover:bg-gray-900']">
                  {{ loading ? 'Sende Daten...' : 'Anfrage absenden →' }}
                </button>
              </form>
            </div>

            <div v-else class="bg-gray-50 border-4 border-dashed border-gray-100 p-8 md:p-16 rounded-[2rem] text-center">
              <div class="bg-white w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl">
                <Lock class="w-8 h-8 text-red-600" />
              </div>
              <h3 class="text-2xl font-black mb-4 uppercase italic tracking-tighter text-gray-900">System Lock.</h3>
              <p class="text-gray-500 mb-8 italic font-medium">Dienste aktivieren für Kontakt-Schnittstelle.</p>
              <button @click="triggerConsentModal" class="bg-red-600 text-white px-8 py-4 rounded-xl font-black hover:bg-black transition shadow-2xl uppercase text-xs tracking-widest italic">Dienste aktivieren</button>
            </div>
          </client-only>
        </div>

        <div class="order-1 lg:order-2 space-y-8 md:space-y-12">
          <h2 class="text-4xl md:text-6xl font-black mb-8 md:mb-12 uppercase italic tracking-tighter text-gray-900 leading-none">
            Direkt <br/><span class="text-red-600">Kontakt.</span>
          </h2>
          <div class="space-y-6 md:space-y-8">
            <div class="group bg-gray-50 p-6 md:p-8 rounded-[2rem] border border-gray-100 hover:bg-white hover:shadow-3xl transition-all duration-500">
              <div class="flex items-center gap-4 md:gap-6">
                <div class="bg-red-600 p-4 rounded-xl text-white shadow-lg group-hover:rotate-6 transition-transform shrink-0"><Mail class="w-5 h-5" /></div>
                <div class="overflow-hidden">
                  <p class="text-[9px] font-black text-gray-400 uppercase tracking-widest italic">// E-Mail Terminal</p>
                  <a href="mailto:info@velwebsolutions.de" class="text-base sm:text-lg font-black text-gray-900 hover:text-red-600 italic uppercase transition-colors truncate block">info@velwebsolutions.de</a>
                </div>
              </div>
            </div>

            <div class="bg-gray-900 p-8 md:p-10 rounded-[2rem] text-white shadow-2xl relative overflow-hidden">
              <div class="absolute top-0 right-0 p-8 opacity-10"><User class="w-24 h-24" /></div>
              <div class="relative z-10 space-y-6">
                <div>
                  <p class="text-[9px] font-black text-red-500 uppercase tracking-[0.3em] mb-2 italic">// Diensteanbieter</p>
                  <h3 class="text-lg md:text-2xl font-black italic tracking-tighter uppercase leading-tight">Tobias Kubina – VelWebSolutions</h3>
                  <p class="text-xs font-black text-gray-400 uppercase tracking-[0.2em] mt-1 italic leading-none">Einzelunternehmen | B.Sc. Informatik</p>
                </div>
                <div class="space-y-1 text-sm md:text-base text-gray-300 font-medium italic border-l-2 border-red-600 pl-4 md:pl-6">
                  <p>Gubener Str. 14</p>
                  <p>47829 Krefeld</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="fixed bottom-6 left-1/2 -translate-x-1/2 z-[110] flex flex-col gap-3 w-full max-w-md px-4">
      <TransitionGroup name="fade">
        <div v-for="toast in toasts" :key="toast.id" :class="['px-6 py-4 rounded-2xl shadow-3xl font-black text-sm md:text-lg text-center border-b-4 uppercase italic tracking-tighter', toast.type === 'success' ? 'bg-green-600 text-white border-green-800' : 'bg-red-600 text-white border-red-800']">
          {{ toast.message }}
        </div>
      </TransitionGroup>
    </div>
  </div>
</template>

<script setup>
import { Mail, Lock, User } from 'lucide-vue-next'
import emailjs from '@emailjs/browser'

definePageMeta({ layout: 'guest' })

const config = useRuntimeConfig()

// --- DATA ---
const usps = [
  { title: 'Stack Expertise', desc: 'High-End Entwicklung mit <span class="text-red-600 underline">PHP/Laravel</span> & <span class="text-red-600 underline">JS/Vue.js</span>.' },
  { title: 'Academic Level', desc: 'Fundierte Beratung durch <span class="text-gray-900 font-black">Bachelor of Science</span> Informatik.' },
  { title: 'Fast Lane', desc: 'Projektstart <span class="text-red-600 underline">unmittelbar</span> nach Zahlungseingang (Vorkasse).' },
  { title: 'Remote Only', desc: 'Effiziente digitale Kollaboration. Deutschlandweite Realisierung.' }
]

// --- STATE ---
const userConsent = useCookie('user_consent', { default: () => 'denied' })
const hasConsent = computed(() => userConsent.value === 'granted' || userConsent.value === 'accepted')
const isMounted = ref(false)
const isScriptLoaded = ref(false)

const formData = useState('contact_form', () => ({ name: '', title: '', email: '', message: '' }))
const cooldownEnd = useState('contact_cooldown_val', () => 0)
const toasts = useState('contact_toasts', () => [])
const cooldownActive = ref(false)
const cooldownDisplay = ref('')
const loading = ref(false)

const recaptchaContainer = ref(null)
let recaptchaId = null

// --- SCRIPTS ---
useHead({
  title: 'Schnittstelle: Kontakt | VelWebSolutions',
  script: [
    {
      src: 'https://www.google.com/recaptcha/api.js?render=explicit',
      async: true,
      defer: true,
      onload: () => { isScriptLoaded.value = true }
    }
  ]
})

// --- CORE LOGIC ---
const initRecaptcha = async () => {
  if (!process.client || !window.grecaptcha) return
  if (!recaptchaContainer.value) await nextTick()

  if (recaptchaContainer.value && recaptchaId === null) {
    try {
      recaptchaId = window.grecaptcha.render(recaptchaContainer.value, {
        sitekey: config.public.recaptchaSiteKey,
        size: 'invisible',
        callback: (token) => onCaptchaVerified(token),
        'error-callback': () => {
          loading.value = false;
          addToast('Sicherheits-Check fehlgeschlagen.');
        }
      })
    } catch (e) {
      console.warn("reCAPTCHA Init Warning:", e)
    }
  }
}

const handleSubmit = async () => {
  if (loading.value || cooldownActive.value) return
  loading.value = true

  if (window.grecaptcha && recaptchaId !== null) {
    window.grecaptcha.execute(recaptchaId)
  } else {
    await initRecaptcha()
    if (recaptchaId !== null) {
      window.grecaptcha.execute(recaptchaId)
    } else {
      loading.value = false
      addToast('System bereitstellen... Bitte erneut klicken.')
    }
  }
}

const onCaptchaVerified = async (token) => {
  try {
    const templateParams = {
      from_name: String(formData.value.name),
      from_email: String(formData.value.email),
      subject: String(formData.value.title),
      message: String(formData.value.message),
      'g-recaptcha-response': token
    };

    await emailjs.send(
      config.public.emailjsServiceId,
      config.public.emailjsTemplateId,
      templateParams,
      config.public.emailjsPublicKey
    );

    addToast('✅ Nachricht gesendet!', 'success')
    formData.value = { name: '', title: '', email: '', message: '' }

    const duration = 5 * 60 * 1000
    cooldownEnd.value = Date.now() + duration
    localStorage.setItem('contactCooldown', cooldownEnd.value.toString())
    updateCooldown()
  } catch (err) {
    console.error("EmailJS Error:", err)
    addToast('Fehler beim Senden via EmailJS.')
  } finally {
    if (window.grecaptcha && recaptchaId !== null) window.grecaptcha.reset(recaptchaId)
    loading.value = false
  }
}

// --- HELPERS ---
const updateCooldown = () => {
  if (!process.client) return
  const now = Date.now()
  const rem = Math.max(0, (cooldownEnd.value || 0) - now)

  if (rem <= 0) {
    if (cooldownActive.value) {
      cooldownActive.value = false
      nextTick(() => initRecaptcha())
    }
    cooldownActive.value = false
    cooldownDisplay.value = '0:00'
    localStorage.removeItem('contactCooldown')
    return
  }

  cooldownActive.value = true
  const m = Math.floor(rem / 60000)
  const s = Math.floor((rem % 60000) / 1000)
  cooldownDisplay.value = `${m}:${s.toString().padStart(2, '0')}`
}

const addToast = (m, t = 'error') => {
  const id = Date.now()
  toasts.value.push({ id, message: m, type: t })
  setTimeout(() => { toasts.value = toasts.value.filter(x => x.id !== id) }, 4000)
}

const triggerConsentModal = () => {
  userConsent.value = 'granted'
  if (isScriptLoaded.value) {
    nextTick(() => initRecaptcha())
  }
}

// --- LIFECYCLE ---
onMounted(() => {
  isMounted.value = true
  const stored = localStorage.getItem('contactCooldown')
  if (stored) cooldownEnd.value = parseInt(stored)

  updateCooldown()
  const timer = setInterval(updateCooldown, 1000)

  if (hasConsent.value) {
    setTimeout(() => initRecaptcha(), 500)
  }

  onUnmounted(() => clearInterval(timer))
})

watch([isScriptLoaded, hasConsent], ([sOk, cOk]) => {
  if (sOk && cOk && !cooldownActive.value) {
    nextTick(() => initRecaptcha())
  }
})
</script>

<style scoped>
.fade-enter-active, .fade-leave-active { transition: all 0.5s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; transform: translateY(-20px); }

@keyframes grid-move {
  0% { transform: translateY(0); }
  100% { transform: translateY(40px); }
}
</style>