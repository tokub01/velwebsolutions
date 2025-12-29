<template>
  <div class="font-sans text-gray-900 bg-white selection:bg-red-100 selection:text-red-600">
    <header class="relative pt-32 pb-24 md:pt-48 md:pb-40 bg-gradient-to-br from-red-700 via-red-600 to-red-500 text-white px-6 overflow-hidden">
      <div class="absolute inset-0 opacity-10 pointer-events-none">
        <div class="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>
      <div class="relative z-10 max-w-6xl mx-auto text-center">
        <span class="inline-block px-5 py-2 mb-6 rounded-full bg-white text-red-600 text-[10px] font-black uppercase tracking-[0.2em] shadow-xl italic">
          ✓ Wissenschaftlich fundierte Aufwandsschätzung
        </span>
        <h1 class="text-5xl md:text-9xl font-black mb-10 leading-[0.85] tracking-tighter uppercase italic">
          Präzision <br/><span class="text-white/90 underline decoration-white/30 italic">im Detail.</span>
        </h1>
        <p class="text-xl md:text-2xl text-red-50 max-w-3xl mx-auto leading-relaxed font-medium italic opacity-90">
          Ein Projekt ist die Summe seiner Teile. Kalkulieren Sie hier detailliert nach dem Industriestandard von 125,00 € Netto (148,75 € Brutto) pro Stunde.
        </p>
      </div>
    </header>

    <section class="py-24 px-6 max-w-7xl mx-auto">
      <div class="grid lg:grid-cols-12 gap-16 md:gap-24">

        <div class="lg:col-span-7 space-y-24">
          <div>
            <div class="flex items-center gap-4 mb-10">
              <span class="bg-red-600 text-white w-12 h-12 rounded-2xl flex items-center justify-center font-black italic shadow-xl">01</span>
              <h2 class="text-3xl font-black uppercase italic tracking-tighter">Basis-Architektur</h2>
            </div>
            <div class="grid md:grid-cols-3 gap-6">
              <button
                v-for="base in basePackages"
                :key="base.id"
                @click="selectedBase = base"
                :class="[
                  'p-8 rounded-[3rem] border-2 text-left transition-all duration-700 relative overflow-hidden',
                  selectedBase.id === base.id ? 'border-red-600 bg-red-50 shadow-2xl scale-105' : 'border-gray-100 bg-gray-50'
                ]"
              >
                <div class="text-4xl font-black text-gray-900 mb-2">{{ base.hours }}h</div>
                <div class="text-[10px] font-black uppercase tracking-widest text-red-600 mb-4">{{ base.label }}</div>
                <ul class="text-[9px] text-gray-400 font-bold uppercase space-y-1 italic">
                  <li v-for="feat in base.features" :key="feat">✓ {{ feat }}</li>
                </ul>
              </button>
            </div>
          </div>

          <div>
            <div class="flex items-center gap-4 mb-10">
              <span class="bg-red-600 text-white w-12 h-12 rounded-2xl flex items-center justify-center font-black italic shadow-xl">02</span>
              <h2 class="text-3xl font-black uppercase italic tracking-tighter">Funktions-Engineering</h2>
            </div>
            <div class="space-y-4">
              <div
                v-for="addon in addons"
                :key="addon.id"
                @click="toggleAddon(addon)"
                :class="[
                  'p-6 md:p-10 rounded-[2.5rem] border-2 cursor-pointer transition-all duration-500 flex flex-col md:flex-row md:items-center justify-between gap-6',
                  isSelected(addon) ? 'border-red-600 bg-white shadow-xl' : 'border-gray-50 bg-gray-50 hover:border-red-100'
                ]"
              >
                <div class="flex items-center gap-6">
                  <div class="text-4xl w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-gray-100">{{ addon.icon }}</div>
                  <div>
                    <h4 class="text-xl font-black uppercase italic tracking-tighter">{{ addon.name }}</h4>
                    <p class="text-xs text-gray-500 italic max-w-md">{{ addon.longDesc }}</p>
                  </div>
                </div>
                <div class="flex items-center gap-6">
                  <div class="text-right">
                    <div class="text-lg font-black text-red-600 italic">+{{ addon.hours }}h</div>
                    <div class="text-[8px] font-bold text-gray-400 uppercase tracking-widest">Aufwandsschätzung</div>
                  </div>
                  <div :class="['w-8 h-8 rounded-full border-2 flex items-center justify-center transition-colors', isSelected(addon) ? 'bg-red-600 border-red-600' : 'border-gray-200']">
                    <LucideCheck v-if="isSelected(addon)" class="w-4 h-4 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="lg:col-span-5">
          <div class="sticky top-32 bg-gray-900 rounded-[4rem] p-10 md:p-14 text-white shadow-3xl border border-white/5">
            <h3 class="text-[10px] font-black text-red-600 uppercase tracking-[0.3em] mb-12 italic">// DETAILLIERTE KOSTENSTELLE</h3>

            <div class="space-y-6 mb-12">
              <div class="flex justify-between text-xs font-bold italic uppercase tracking-widest text-gray-400 pb-2 border-b border-white/5">
                <span>Posten</span>
                <span>Zeitwert</span>
              </div>
              <div class="flex justify-between text-sm italic font-medium">
                <span>Basis: {{ selectedBase.label }}</span>
                <span class="font-black">{{ selectedBase.hours }}h</span>
              </div>
              <div v-for="addon in selectedAddons" :key="addon.id" class="flex justify-between text-sm italic font-medium text-red-500">
                <span>+ {{ addon.name }}</span>
                <span class="font-black">{{ addon.hours }}h</span>
              </div>

              <div class="pt-10 border-t border-white/10">
                <div class="flex justify-between items-end mb-8">
                  <div>
                    <div class="text-[10px] font-black text-gray-500 uppercase italic">Gesamtaufwand</div>
                    <div class="text-6xl font-black italic tracking-tighter">{{ totalHours }}<span class="text-red-600 text-2xl">h</span></div>
                  </div>
                  <div class="text-right">
                    <div class="text-[10px] font-black text-gray-500 uppercase italic">Stundensatz</div>
                    <div class="text-xl font-black italic text-white">125,00 € <span class="text-[10px] text-gray-600 uppercase">Netto</span></div>
                  </div>
                </div>

                <div class="space-y-3 bg-white/5 p-6 rounded-3xl mb-10">
                  <div class="flex justify-between text-[11px] font-bold italic uppercase tracking-widest">
                    <span class="text-gray-400">Netto Betrag</span>
                    <span>{{ formatValue(totalNet) }} €</span>
                  </div>
                  <div class="flex justify-between text-[11px] font-bold italic uppercase tracking-widest">
                    <span class="text-gray-400">+ 19% MwSt.</span>
                    <span>{{ formatValue(totalNet * 0.19) }} €</span>
                  </div>
                  <div class="pt-3 border-t border-white/10 flex justify-between text-lg font-black italic uppercase">
                    <span class="text-red-600">Brutto Gesamt</span>
                    <span>{{ formatValue(totalNet * 1.19) }} €</span>
                  </div>
                </div>
              </div>
            </div>

            <NuxtLink to="/kontakt" class="block w-full py-8 bg-red-600 text-white text-center rounded-3xl font-black uppercase tracking-widest hover:scale-105 transition-all italic shadow-2xl shadow-red-600/30">
              Konfiguration anfragen
            </NuxtLink>
            <p class="mt-8 text-[9px] text-gray-500 italic text-center uppercase font-bold tracking-widest">
              Gültig für 14 Tage • Inkl. Quellcode-Übergabe
            </p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
/** * DETAILLIERTE KALKULATIONS-LOGIK
 * @rate 125,00 €/h Netto
 */
definePageMeta({ layout: 'guest' })
useHead({ title: 'Präzisions-Kostenrechner | VelWebSolutions' })

const hourlyRate = 125

const basePackages = [
  { id: 'basic', label: 'Start-Up Sprint', hours: 40, features: ['Core Setup', 'UI/UX Design', 'Deployment'] },
  { id: 'standard', label: 'Business App', hours: 80, features: ['Extended Logic', 'API Core', 'Database Eng.'] },
  { id: 'enterprise', label: 'High-End System', hours: 120, features: ['Custom ERP', 'Full Auth', 'Performance Audit'] }
]

const addons = [
  { id: 'seo', icon: '🔍', name: 'SEO High-Performance', hours: 15, longDesc: 'Indexierungs-Strategie, Schema.org Markup & Core Web Vitals Optimierung.' },
  { id: 'auth', icon: '🛡️', name: 'Identity Management', hours: 25, longDesc: 'Multi-Role Auth, JWT Handling & verschlüsselte User-Datenbanken.' },
  { id: 'api', icon: '🔗', name: 'RESTful API Connect', hours: 20, longDesc: 'Anbindung externer Systeme (Stripe, Lexware, CRM) inkl. Error-Handling.' },
  { id: 'design', icon: '✨', name: 'Custom UI Engineering', hours: 30, longDesc: 'Individuelle Vue-Komponenten & Animations-Frameworks fernab von Templates.' }
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
const formatValue = (val) => new Intl.NumberFormat('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(val)
</script>