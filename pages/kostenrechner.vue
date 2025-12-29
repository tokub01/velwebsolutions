<template>
  <div class="font-sans text-gray-900 bg-white selection:bg-red-100 selection:text-red-600">

    <section class="relative pt-32 pb-24 md:pt-48 md:pb-40 bg-gradient-to-br from-red-700 via-red-600 to-red-500 text-white px-6 overflow-hidden">
      <div class="absolute inset-0 opacity-10 pointer-events-none">
        <div class="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div class="relative z-10 max-w-6xl mx-auto text-center">
        <span class="inline-block px-5 py-2 mb-6 rounded-full bg-white text-red-600 text-[10px] font-black uppercase tracking-[0.2em] shadow-xl italic animate-pulse">
          ✓ Transparente Kalkulation
        </span>
        <h1 class="text-5xl md:text-9xl font-black mb-10 leading-[0.85] tracking-tighter uppercase italic">
          Engineering <br/><span class="text-white/90 underline decoration-white/30 italic">auf Augenhöhe.</span>
        </h1>
        <p class="text-xl md:text-2xl text-red-50 max-w-3xl mx-auto leading-relaxed font-medium italic opacity-90">
          Wählen Sie ein Basis-Kontingent und ergänzen Sie es um spezifische Module.
          Ehrliche Preise für ehrliche Informatik.
        </p>
      </div>
    </section>

    <section class="py-24 px-6 max-w-7xl mx-auto">
      <div class="grid lg:grid-cols-12 gap-16 md:gap-24">

        <div class="lg:col-span-7 space-y-20">

          <div>
            <div class="flex items-center gap-4 mb-10">
              <span class="bg-red-600 text-white w-8 h-8 rounded-lg flex items-center justify-center font-black italic">01</span>
              <h2 class="text-3xl font-black uppercase italic tracking-tighter">Basis-Engineering</h2>
            </div>
            <div class="grid md:grid-cols-3 gap-4">
              <button
                v-for="base in basePackages"
                :key="base.id"
                @click="selectedBase = base"
                :class="[
                  'p-8 rounded-[2.5rem] border-2 text-left transition-all duration-500 group relative overflow-hidden',
                  selectedBase.id === base.id ? 'border-red-600 bg-red-50' : 'border-gray-100 bg-gray-50 hover:border-red-200'
                ]"
              >
                <div class="relative z-10">
                  <div class="text-[10px] font-black uppercase tracking-widest italic mb-2" :class="selectedBase.id === base.id ? 'text-red-600' : 'text-gray-400'">{{ base.label }}</div>
                  <div class="text-3xl font-black mb-1 tracking-tighter italic uppercase">{{ base.hours }}h</div>
                  <div class="text-xs font-bold text-gray-500 italic">{{ base.desc }}</div>
                </div>
                <LucideCheck v-if="selectedBase.id === base.id" class="absolute top-6 right-6 w-5 h-5 text-red-600" />
              </button>
            </div>
          </div>

          <div>
            <div class="flex items-center gap-4 mb-10">
              <span class="bg-red-600 text-white w-8 h-8 rounded-lg flex items-center justify-center font-black italic">02</span>
              <h2 class="text-3xl font-black uppercase italic tracking-tighter">Zusatz-Module</h2>
            </div>
            <div class="grid md:grid-cols-2 gap-4">
              <button
                v-for="addon in addons"
                :key="addon.id"
                @click="toggleAddon(addon)"
                :class="[
                  'p-8 rounded-[2.5rem] border-2 text-left transition-all duration-500 relative group',
                  isSelected(addon) ? 'border-red-600 bg-red-50' : 'border-gray-100 bg-gray-50 hover:border-red-200'
                ]"
              >
                <div class="flex justify-between items-start mb-4">
                  <span class="text-2xl">{{ addon.icon }}</span>
                  <div v-if="isSelected(addon)" class="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center">
                    <LucideCheck class="w-4 h-4 text-white" />
                  </div>
                </div>
                <div class="text-xl font-black uppercase italic tracking-tighter mb-1">{{ addon.name }}</div>
                <div class="text-xs font-bold text-gray-400 italic mb-4">+ {{ addon.hours }}h</div>
                <p class="text-xs text-gray-500 leading-relaxed italic font-medium">
                  {{ addon.desc }}
                </p>
              </button>
            </div>
          </div>
        </div>

        <div class="lg:col-span-5">
          <div class="sticky top-32 bg-gray-900 rounded-[3.5rem] p-10 md:p-14 text-white shadow-3xl overflow-hidden">
            <div class="absolute top-0 right-0 w-64 h-64 bg-red-600/20 blur-[100px] pointer-events-none"></div>

            <div class="relative z-10">
              <h3 class="text-[10px] font-black text-red-600 uppercase tracking-[0.3em] mb-10 italic">// Kalkulations-Ergebnis</h3>

              <div class="space-y-8 mb-12">
                <div class="flex justify-between items-end border-b border-white/10 pb-6">
                  <div>
                    <div class="text-xs font-bold text-gray-400 uppercase italic mb-1">Entwicklungszeit</div>
                    <div class="text-4xl font-black italic">{{ totalHours }}<span class="text-red-600 text-xl ml-1">h</span></div>
                  </div>
                  <div class="text-right">
                    <div class="text-xs font-bold text-gray-400 uppercase italic mb-1">Stundensatz</div>
                    <div class="text-xl font-black italic">{{ hourlyRate }}€</div>
                  </div>
                </div>

                <div class="space-y-4">
                  <div class="flex justify-between text-xs font-bold italic uppercase tracking-widest text-gray-400">
                    <span>Netto Investition</span>
                    <span>{{ formatValue(totalNet) }} €</span>
                  </div>
                  <div class="flex justify-between text-xs font-bold italic uppercase tracking-widest text-gray-500">
                    <span>+ 19% MwSt</span>
                    <span>{{ formatValue(totalNet * 0.19) }} €</span>
                  </div>
                </div>

                <div class="pt-8 border-t-2 border-red-600">
                  <div class="text-xs font-black text-red-600 uppercase tracking-widest italic mb-2">Gesamtbetrag Brutto</div>
                  <div class="text-5xl md:text-6xl font-black italic tracking-tighter">{{ formatValue(totalNet * 1.19) }} €</div>
                </div>
              </div>

              <NuxtLink
                to="/kontakt"
                class="block w-full py-6 bg-white text-gray-900 text-center rounded-2xl font-black uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all italic text-sm shadow-xl"
              >
                Konfiguration_bestätigen.sh
              </NuxtLink>

              <p class="mt-8 text-[10px] text-gray-500 italic text-center leading-relaxed">
                Dieses Ergebnis dient als Orientierungshilfe. <br/>
                Ein verbindliches Angebot erfolgt nach technischer Prüfung.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 px-6 bg-gray-50">
      <div class="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="item in trustItems" :key="item.title" class="p-10 bg-white rounded-[3rem] border border-gray-100 hover:shadow-xl transition-all duration-500">
          <div class="text-4xl mb-6">{{ item.icon }}</div>
          <h4 class="text-lg font-black uppercase italic tracking-tighter mb-3">{{ item.title }}</h4>
          <p class="text-sm text-gray-500 italic font-medium leading-relaxed">{{ item.text }}</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
/**
 * NUXT 3 ARCHITEKTUR:
 * Wir nutzen Auto-Imports für ref, computed und Lucide-Icons.
 */
definePageMeta({
  layout: 'guest'
})

useHead({
  title: 'Kostenrechner | VelWebSolutions - Transparente Webentwicklung',
  meta: [{ name: 'description', content: 'Kalkulieren Sie Ihre Web-Applikation transparent und fair. Senior-Informatik Engineering ohne versteckte Kosten.' }]
})

const hourlyRate = 110

const basePackages = [
  { id: 'mvp', label: 'Minimum Viable Product', hours: 40, desc: 'Ideal für Prototypen & kleine Tools' },
  { id: 'standard', label: 'Business App', hours: 80, desc: 'Der Standard für skalierbare Systeme' },
  { id: 'enterprise', label: 'High-End System', hours: 160, desc: 'Komplexe Infrastruktur & Logik' }
]

const addons = [
  { id: 'seo', icon: '🚀', name: 'Premium SEO', hours: 15, desc: 'Maximale Sichtbarkeit durch technische OnPage-Optimierung.' },
  { id: 'auth', icon: '🔐', name: 'User System', hours: 25, desc: 'Sichere Authentifizierung, Rollen & Berechtigungen.' },
  { id: 'api', icon: '🔌', name: 'Schnittstellen', hours: 20, desc: 'Anbindung von Drittsystemen (ERP, CRM, Payment).' },
  { id: 'ui', icon: '🎨', name: 'Custom Design', hours: 30, desc: 'Einzigartiges UI/UX Engineering fernab von Templates.' }
]

const trustItems = [
  { icon: '💎', title: 'Fair-Billing', text: 'Sie zahlen nur die reine Netto-Engineering-Zeit. Ich arbeite als Senior-Informatiker effizient.' },
  { icon: '📊', title: 'Feste Planung', text: 'Software ist nie fertig, aber Budgets müssen fix sein. Fokus auf den höchsten ROI.' },
  { icon: '🛡️', title: 'Clean Code', text: 'Jede Stunde fließt in wartbaren Code (Laravel/Vue), der erweiterbar bleibt.' },
  { icon: '💡', title: 'Garantierte Qualität', text: 'High-End Engineering auf universitärem Niveau inklusive Dokumentation.' }
]

const selectedBase = ref(basePackages[1])
const selectedAddons = ref([])

const toggleAddon = (addon) => {
  const index = selectedAddons.value.findIndex(a => a.id === addon.id)
  if (index === -1) selectedAddons.value.push(addon)
  else selectedAddons.value.splice(index, 1)
}

const isSelected = (addon) => selectedAddons.value.some(a => a.id === addon.id)

const totalHours = computed(() => selectedBase.value.hours + selectedAddons.value.reduce((acc, a) => acc + a.hours, 0))
const totalNet = computed(() => totalHours.value * hourlyRate)

const formatValue = (val) => new Intl.NumberFormat('de-DE', {
  style: 'decimal',
  minimumFractionDigits: 2,
  maximumFractionDigits: 2
}).format(val)
</script>

<style scoped>
@reference "tailwindcss";

.shadow-3xl {
  box-shadow: 0 40px 80px -15px rgba(0, 0, 0, 0.4);
}
</style>