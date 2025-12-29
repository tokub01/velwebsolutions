<template>
  <NuxtLayout name="guest">
    <div class="font-sans text-gray-900 bg-white selection:bg-red-100 selection:text-red-600">

      <header class="relative py-24 md:py-52 bg-gradient-to-br from-red-700 via-red-600 to-red-500 text-white px-6 overflow-hidden">
        <div class="absolute inset-0 opacity-10 pointer-events-none">
          <div class="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>

        <div class="relative z-10 max-w-6xl mx-auto text-center">
          <span class="inline-block px-5 py-2 mb-10 rounded-full bg-white text-red-600 text-[10px] font-black uppercase tracking-[0.4em] shadow-xl italic">
            ✓ Fullstack Engineering
          </span>
          <h1 class="hero-title font-black mb-12 tracking-[0.12em] uppercase italic leading-tight">
            Digitale <br/>
            <span class="text-white/90 underline decoration-white/30 block mt-6">Architektur.</span>
          </h1>

          <div class="inline-flex bg-white/10 backdrop-blur-md p-2 rounded-[2.5rem] border-2 border-white/20 shadow-2xl">
            <button @click="activeTab = 'cases'" :class="[tabClass, activeTab === 'cases' ? activeTabClass : inactiveTabClass]">
              Case Studies
            </button>
            <button @click="activeTab = 'industry'" :class="[tabClass, activeTab === 'industry' ? activeTabClass : inactiveTabClass]">
              Nach Branchen
            </button>
          </div>
        </div>
      </header>

      <div v-if="activeTab === 'cases'" class="divide-y divide-gray-100">
        <section class="py-32 px-6">
          <div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
            <div class="order-2 lg:order-1 relative group">
              <div class="absolute -inset-6 bg-red-600/5 rounded-[4rem] -rotate-2 group-hover:rotate-0 transition-transform duration-700"></div>
              <div class="relative bg-gray-900 p-12 md:p-20 rounded-[3.5rem] shadow-2xl text-center border border-white/10">
                <div class="text-7xl mb-8">📊</div>
                <h3 class="text-3xl font-black text-white uppercase italic tracking-tighter mb-6">Custom ERP Engine</h3>
                <div class="flex flex-wrap justify-center gap-3">
                  <span class="px-4 py-2 bg-white/10 text-gray-300 rounded-xl text-[10px] font-black uppercase tracking-widest italic border border-white/10">Laravel 11</span>
                  <span class="px-4 py-2 bg-red-600/20 text-red-400 rounded-xl text-[10px] font-black uppercase tracking-widest italic border border-red-600/20">Redis API</span>
                </div>
              </div>
            </div>
            <div class="order-1 lg:order-2">
              <span class="text-red-600 font-black uppercase tracking-[0.3em] text-xs mb-6 block italic">Referenz: Mittelstand</span>
              <h2 class="text-4xl md:text-7xl font-black mb-8 leading-[0.9] uppercase italic tracking-tighter text-gray-900">ERP-Zentrale <br/><span class="text-red-600">neu gedacht.</span></h2>
              <p class="text-xl text-gray-600 mb-10 leading-relaxed font-medium italic">
                Ablösung veralteter Legacy-Software durch ein modernes ERP-System. Wir vernetzen Lager, Vertrieb und Buchhaltung in einer performanten Cloud-Applikation.
              </p>
              <ul class="space-y-4 text-lg font-black italic border-l-4 border-red-600 pl-8">
                <li>→ Vollautomatisierte Workflows</li>
                <li>→ Zentrale Datenhoheit (SSOT)</li>
                <li>→ Multi-User Rollenmanagement</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="py-32 px-6 bg-gray-50">
          <div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
            <div>
              <span class="text-red-600 font-black uppercase tracking-[0.3em] text-xs mb-6 block italic">Referenz: Dienstleistung</span>
              <h2 class="text-4xl md:text-7xl font-black mb-8 leading-[0.9] uppercase italic tracking-tighter text-gray-900">CRM für <br/><span class="text-red-600">maximale Retention.</span></h2>
              <p class="text-xl text-gray-600 mb-10 leading-relaxed font-medium italic">
                Entwicklung eines passgenauen CRM-Portals zur Kundenverwaltung. Inklusive automatischer Terminerinnerung, Dokumenten-Management und Performance-Analytics.
              </p>
              <div class="grid grid-cols-2 gap-6">
                <div class="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center">
                  <div class="text-4xl font-black text-green-600">99ms</div>
                  <div class="text-[10px] uppercase font-black text-gray-400 tracking-widest mt-2">API Response</div>
                </div>
                <div class="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center">
                  <div class="text-4xl font-black text-gray-900">Vue 3</div>
                  <div class="text-[10px] uppercase font-black text-gray-400 tracking-widest mt-2">Frontend Stack</div>
                </div>
              </div>
            </div>
            <div class="relative group">
              <div class="absolute -inset-6 bg-red-600/5 rounded-[4rem] rotate-2 group-hover:rotate-0 transition-transform duration-700"></div>
              <div class="relative bg-white p-12 md:p-20 rounded-[3.5rem] border border-gray-100 shadow-xl text-center">
                <div class="text-7xl mb-8">👥</div>
                <h3 class="text-3xl font-black text-gray-900 uppercase italic tracking-tighter mb-4">CRM Excellence</h3>
                <div class="font-mono text-sm text-red-600 bg-red-50 py-3 px-6 rounded-xl inline-block tracking-widest uppercase">Client Portal v2.0</div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section v-if="activeTab === 'industry'" class="py-32 px-6">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-24">
            <span class="text-red-600 font-black uppercase tracking-[0.3em] text-xs mb-6 block italic">Sektorspezifisch</span>
            <h2 class="text-4xl md:text-7xl font-black mb-8 leading-[0.9] uppercase italic tracking-tighter text-gray-900">Branchen- <br/><span class="text-red-600">Blueprints.</span></h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
            <button v-for="industry in industries" :key="industry.id" @click="selectedIndustryId = industry.id"
              :class="[industryCardClass, selectedIndustryId === industry.id ? activeIndustryClass : inactiveIndustryClass]">
              <div :class="[iconContainerClass, selectedIndustryId === industry.id ? activeIconClass : inactiveIconClass]">
                <component :is="industry.icon" class="w-8 h-8" />
              </div>
              <h3 class="text-2xl font-black uppercase italic tracking-tighter mb-2">{{ industry.name }}</h3>
              <p class="text-sm font-medium italic opacity-70">{{ industry.subtitle }}</p>
            </button>
          </div>

          <transition enter-active-class="transition duration-500 ease-out" enter-from-class="opacity-0 translate-y-10" enter-to-class="opacity-100 translate-y-0">
            <div v-if="selectedIndustryId && currentIndustry">
              <div class="bg-gray-900 text-white p-12 md:p-24 rounded-[4rem] shadow-3xl relative overflow-hidden">
                <div class="relative z-10">
                  <h3 class="text-3xl md:text-6xl font-black uppercase italic tracking-tighter mb-8">{{ currentIndustry.name }} Architecture</h3>
                  <p class="text-xl text-gray-400 max-w-4xl leading-relaxed italic mb-16">{{ currentIndustry.description }}</p>

                  <div class="grid md:grid-cols-3 gap-8">
                    <article v-for="project in currentIndustry.recommendedProjects" :key="project.id" class="bg-white/5 border border-white/10 p-10 rounded-3xl backdrop-blur-sm flex flex-col h-full group">
                      <h5 class="text-xl font-black text-red-500 mb-2 italic uppercase tracking-wider">{{ project.title }}</h5>
                      <p class="text-sm text-gray-400 italic mb-10 flex-grow leading-relaxed">{{ project.subtitle }}</p>
                      <div class="border-t border-white/10 pt-8">
                        <p class="text-4xl font-black mb-8 italic tracking-tighter">{{ project.price }}</p>
                        <NuxtLink :to="{ path: '/kontakt', query: { project: project.title } }" class="block w-full text-center bg-red-600 py-5 rounded-2xl font-black uppercase italic tracking-widest hover:bg-white hover:text-red-600 transition-all shadow-lg">Anfrage starten</NuxtLink>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </section>

      <section class="py-32 px-6 bg-red-600 text-white text-center rounded-[4rem] mx-4 mb-12 shadow-2xl relative overflow-hidden">
        <div class="max-w-5xl mx-auto relative z-10">
          <h2 class="text-5xl md:text-[clamp(3.5rem,12vw,9.5rem)] font-black mb-12 tracking-normal uppercase italic leading-[0.85]">
            Bereit für <br/><span class="text-white underline decoration-white/30">Next Level?</span>
          </h2>
          <div class="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <NuxtLink to="/kontakt" class="w-full sm:w-auto px-16 py-8 bg-white text-red-600 font-black rounded-[2.5rem] shadow-2xl hover:scale-105 transition-all text-2xl uppercase italic tracking-widest">
              Technik-Audit buchen
            </NuxtLink>
            <a href="tel:+4917632544620" class="w-full sm:w-auto px-16 py-8 border-4 border-white text-white font-black rounded-[2.5rem] hover:bg-white hover:text-red-600 transition-all text-2xl uppercase italic tracking-widest">
              Direktkontakt
            </a>
          </div>
        </div>
      </section>
    </div>
  </NuxtLayout>
</template>

<script setup>
import { Utensils, Dumbbell, Scissors, Store as StoreIcon } from 'lucide-vue-next'

// --- SHARED STATE (Die Nuxt ref-Alternative für SSR) ---
const activeTab = useState('activeTab', () => 'cases')
const selectedIndustryId = useState('selectedIndustry', () => null)

// --- DATA ---
const industries = [
  { id: 'gastronomie', name: 'Gastro', icon: Utensils, subtitle: 'Digital Hospitality', description: 'Wir digitalisieren Speisekarten und automatisieren Ihre Tischreservierungen für effizienteren Service.' },
  { id: 'fitness', name: 'Fitness', icon: Dumbbell, subtitle: 'Health Tech', description: 'Online-Buchungen und Kursverwaltung, damit Sie sich auf das Training konzentrieren können.' },
  { id: 'beauty', name: 'Beauty', icon: Scissors, subtitle: 'Service Scaling', description: 'Reduzieren Sie No-Shows durch automatische Terminerinnerungen und 24/7 Buchungssysteme.' },
  { id: 'handwerk', name: 'Handwerk', icon: StoreIcon, subtitle: 'Smart Trades', description: 'Referenz-Galerien und einfache Anfrage-Formulare für qualifizierte Neukunden-Leads.' }
]

const allProjects = [
  { id: 1, title: 'Business Platform', subtitle: 'Individuelle Web-Architektur mit Fokus auf Skalierbarkeit.', price: 'ab 5.950 €', industries: ['gastronomie', 'fitness', 'beauty', 'handwerk'] },
  { id: 2, title: 'Custom CRM System', subtitle: 'Zentrale Verwaltung von Kundenbeziehungen und Prozessen.', price: 'ab 11.900 €', industries: ['beauty', 'fitness', 'handwerk'] },
  { id: 3, title: 'Enterprise ERP', subtitle: 'Komplexe Digitalisierung interner Geschäftsprozesse.', price: 'auf Anfrage', industries: ['handwerk', 'gastronomie'] }
]

// --- COMPUTED ---
const currentIndustry = computed(() => {
  const ind = industries.find(i => i.id === selectedIndustryId.value)
  if (!ind) return null
  return {
    ...ind,
    recommendedProjects: allProjects.filter(p => p.industries.includes(ind.id))
  }
})

// --- UI STYLES ---
const tabClass = 'px-10 py-5 rounded-full font-black uppercase italic tracking-widest transition-all duration-300 text-sm'
const activeTabClass = 'bg-white text-red-600 shadow-xl'
const inactiveTabClass = 'text-white hover:bg-white/10'

const industryCardClass = 'group p-12 rounded-[3.5rem] border-4 transition-all duration-500 text-center hover:shadow-2xl'
const activeIndustryClass = 'bg-red-50 border-red-600 scale-105 shadow-red-600/5'
const inactiveIndustryClass = 'bg-white border-gray-100 hover:border-red-600/30'

const iconContainerClass = 'w-20 h-20 rounded-3xl mx-auto mb-8 flex items-center justify-center transition-all duration-500 shadow-sm'
const activeIconClass = 'bg-red-600 text-white rotate-12 shadow-red-600/30 shadow-2xl'
const inactiveIconClass = 'bg-gray-50 text-red-600 group-hover:bg-red-600 group-hover:text-white'

// SEO
useHead({
  title: 'Engineering & Projekte | VelWebSolutions',
  meta: [{ name: 'description', content: 'Enterprise Entwicklung mit Laravel & Vue.' }]
})
</script>

<style scoped>
@reference "tailwindcss";

.hero-title {
  font-size: clamp(2.5rem, 11vw, 9.5rem);
  line-height: 0.95;
  word-break: normal;
}
.shadow-3xl {
  box-shadow: 0 50px 100px -20px rgba(0, 0, 0, 0.4);
}
.v-enter-active, .v-leave-active {
  transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
.v-enter-from, .v-leave-to {
  opacity: 0;
  transform: translateY(30px);
}
</style>