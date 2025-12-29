<template>
  <div class="font-sans text-gray-900 bg-white selection:bg-red-100 selection:text-red-600">
    <header class="relative py-24 md:py-44 bg-gradient-to-br from-red-700 via-red-600 to-red-500 text-white px-6 overflow-hidden mt-[81px]">
      <div class="absolute inset-0 opacity-10 pointer-events-none">
        <div class="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] animate-[grid-move_20s_linear_infinite]"></div>
      </div>

      <div class="relative z-10 max-w-6xl mx-auto text-center">
        <span class="inline-block px-5 py-2 mb-6 rounded-full bg-white text-red-600 text-[10px] font-black uppercase tracking-[0.2em] shadow-xl italic">
          ✓ DEUTSCHLANDWEIT REMOTE & VOR-ORT
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

              <div class="group cursor-default">
                <p class="text-[10px] font-black uppercase tracking-[0.3em] text-red-600 mb-2 italic">// Service & Radius</p>
                <div class="space-y-4">
                  <p class="text-3xl md:text-4xl font-black italic uppercase leading-none">
                    Deutschlandweit <br/>
                    <span class="text-red-600">Remote</span> & On-Site
                  </p>
                  <div class="flex items-center gap-4">
                    <div class="flex items-center gap-2 px-3 py-1 bg-gray-900 text-white rounded-lg text-[10px] font-black uppercase italic animate-pulse">
                      <span class="w-2 h-2 bg-red-600 rounded-full"></span> 24/7 Monitoring
                    </div>
                    <p class="text-xs text-gray-400 font-bold uppercase tracking-widest italic">High-Availability Support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="relative min-h-[600px]">
            <div v-if="consentCookie !== 'granted'"
              class="absolute inset-0 z-30 bg-white/95 backdrop-blur-md flex flex-col items-center justify-center p-10 text-center rounded-[3.5rem] border-4 border-dashed border-gray-200">
              <div class="w-24 h-24 bg-red-50 text-red-600 rounded-full flex items-center justify-center text-4xl mb-8 animate-bounce">
                🔒
              </div>
              <h3 class="text-3xl font-black uppercase italic mb-4">Dienste blockiert</h3>
              <p class="text-gray-500 font-medium italic mb-10 max-w-sm">
                reCAPTCHA & Email-Services sind aus Datenschutzgründen deaktiviert. Bitte akzeptieren Sie die Sicherheits-Cookies.
              </p>
              <button @click="isBannerVisible = true"
                class="bg-red-600 text-white px-12 py-6 rounded-2xl font-black uppercase italic tracking-[0.2em] hover:bg-gray-900 transition-all shadow-2xl active:scale-95">
                Einstellungen öffnen
              </button>
            </div>

            <div v-else-if="cooldownActive"
              class="absolute inset-0 z-20 bg-white/90 backdrop-blur-sm flex flex-col items-center justify-center p-10 text-center rounded-[3rem] border-4 border-gray-900">
              <div class="text-6xl mb-6">⏳</div>
              <h3 class="text-3xl font-black uppercase italic mb-4">System-Cooldown</h3>
              <p class="text-gray-600 font-medium italic mb-8">Um Spam zu vermeiden, ist das Formular kurzzeitig gesperrt.</p>
              <div class="text-5xl font-mono font-black text-red-600">{{ cooldownDisplay }}</div>
            </div>

            <form @submit.prevent="sendEmail"
              :class="{ 'opacity-10 pointer-events-none blur-sm': consentCookie !== 'granted' }"
              class="space-y-6 bg-gray-50 p-8 md:p-12 rounded-[3.5rem] border border-gray-100 shadow-3xl">

              <div>
                <input v-model="formData.name" type="text" placeholder="NAME / UNTERNEHMEN" required
                  class="w-full bg-white border-2 border-gray-200 p-6 rounded-2xl font-black italic tracking-tighter focus:border-red-600 outline-none transition-all">
              </div>
              <div class="grid md:grid-cols-2 gap-6">
                <input v-model="formData.title" type="text" placeholder="PROJEKT-TITEL"
                  class="w-full bg-white border-2 border-gray-200 p-6 rounded-2xl font-black italic tracking-tighter focus:border-red-600 outline-none transition-all">
                <input v-model="formData.email" type="email" placeholder="EMAIL-ADRESSE" required
                  class="w-full bg-white border-2 border-gray-200 p-6 rounded-2xl font-black italic tracking-tighter focus:border-red-600 outline-none transition-all">
              </div>
              <textarea v-model="formData.message" rows="5" placeholder="PROJEKT-DETAILS & ANFORDERUNGEN" required
                class="w-full bg-white border-2 border-gray-200 p-6 rounded-2xl font-black italic tracking-tighter focus:border-red-600 outline-none transition-all resize-none"></textarea>

              <div v-show="consentCookie === 'granted'" id="recaptcha-element" class="flex justify-center my-6"></div>

              <button :disabled="loading || consentCookie !== 'granted'" type="submit"
                class="w-full bg-gray-900 text-white p-8 rounded-2xl font-black text-2xl uppercase italic tracking-widest hover:bg-red-600 transition-all flex items-center justify-center gap-4 group disabled:opacity-50">
                <span v-if="loading" class="animate-spin text-3xl">⚙️</span>
                <span v-else>MISSION STARTEN</span>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <div class="fixed bottom-10 right-10 z-[100] space-y-4">
      <div v-for="toast in toasts" :key="toast.id"
        :class="toast.type === 'success' ? 'bg-gray-900' : 'bg-red-600'"
        class="text-white px-8 py-4 rounded-xl font-black uppercase italic shadow-2xl transition-all duration-500">
        {{ toast.text }}
      </div>
    </div>
  </div>
</template>

<script setup>
const formData = useState('contact_form_data', () => ({ name: '', title: '', email: '', message: '' }))
const loading = useState('contact_loading', () => false)
const toasts = useState('contact_toasts', () => [])
const cooldownActive = useState('contact_cooldown_active', () => false)
const cooldownDisplay = useState('contact_cooldown_timer', () => '00:00')

const isBannerVisible = useState('cookie_banner_visible')

definePageMeta({ layout: 'guest' })

const config = useRuntimeConfig()
const consentCookie = useCookie('user_consent')
const cooldownCookie = useCookie('contact_cooldown_timestamp')

let recaptchaId = null

const addToast = (text, type = 'error') => {
  const id = Date.now()
  toasts.value.push({ id, text, type })
  setTimeout(() => {
    toasts.value = toasts.value.filter(t => t.id !== id)
  }, 4000)
}

// Fehlerbehebung für window.grecaptcha.render
const renderRecaptcha = () => {
  if (process.client && document.getElementById('recaptcha-element') && window.grecaptcha?.render) {
    if (recaptchaId !== null) return
    try {
      recaptchaId = window.grecaptcha.render('recaptcha-element', {
        sitekey: config.public.recaptchaSiteKey,
        theme: 'light'
      })
    } catch (e) {
      console.error("reCAPTCHA Error:", e)
    }
  }
}

const loadRecaptcha = () => {
  if (process.client && consentCookie.value === 'granted') {
    if (window.grecaptcha?.render) {
      renderRecaptcha()
      return
    }

    window.onRecaptchaLoad = () => {
      renderRecaptcha()
    }

    if (!document.querySelector('script[src*="recaptcha/api.js"]')) {
      const script = document.createElement('script')
      script.src = `https://www.google.com/recaptcha/api.js?render=explicit&onload=onRecaptchaLoad`
      script.async = true
      script.defer = true
      document.head.appendChild(script)
    }
  }
}

const sendEmail = async () => {
  if (consentCookie.value !== 'granted') {
    isBannerVisible.value = true
    return
  }

  if (cooldownActive.value || loading.value) return

  loading.value = true
  try {
    const token = (process.client && window.grecaptcha && recaptchaId !== null)
      ? window.grecaptcha.getResponse(recaptchaId)
      : ''

    if (!token) {
      addToast('⚠️ Bitte das ReCAPTCHA lösen.')
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

    addToast('✅ Nachricht im System registriert!', 'success')
    cooldownCookie.value = Date.now() + (5 * 60 * 1000)
    formData.value = { name: '', title: '', email: '', message: '' }

  } catch (err) {
    addToast(`⚠️ ${err.data?.statusMessage || 'Übertragungsfehler.'}`)
  } finally {
    loading.value = false
    if (process.client && window.grecaptcha && recaptchaId !== null) {
      window.grecaptcha.reset(recaptchaId)
    }
  }
}

const updateCooldown = () => {
  if (!cooldownCookie.value) {
    cooldownActive.value = false
    return
  }
  const remaining = Math.max(0, cooldownCookie.value - Date.now())
  if (remaining <= 0) {
    cooldownActive.value = false
    return
  }
  const m = Math.floor(remaining / 60000), s = Math.floor((remaining % 60000) / 1000)
  cooldownDisplay.value = `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`
  cooldownActive.value = true
}

let interval = null
onMounted(() => {
  if (consentCookie.value === 'granted') {
    loadRecaptcha()
  }
  updateCooldown()
  interval = setInterval(updateCooldown, 1000)
})

onBeforeUnmount(() => {
  if (interval) clearInterval(interval)
  if (process.client) window.onRecaptchaLoad = null
})

useHead({
  title: 'Kontakt | VelWebSolutions - 24/7 Deutschlandweit Remote',
  meta: [
    { name: 'description', content: 'Tobias Kubina bietet 24/7 Monitoring und Fullstack-Engineering deutschlandweit remote an.' }
  ]
})
</script>

<style scoped>
@keyframes grid-move {
  0% { transform: translate(0, 0); }
  100% { transform: translate(40px, 40px); }
}

.shadow-3xl {
  box-shadow: 0 35px 60px -15px rgba(0, 0, 0, 0.3);
}
</style>