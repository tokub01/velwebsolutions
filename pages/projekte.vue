<template>
  <NuxtLayout name="guest">
    <div class="font-sans mt-3 text-gray-900 bg-white selection:bg-red-100 selection:text-red-600 antialiased">

      <header class="relative pt-32 pb-20 md:pt-52 md:pb-40 bg-gradient-to-br from-red-700 via-red-600 to-red-500 text-white px-6 overflow-hidden">
        <div class="absolute inset-0 opacity-10 pointer-events-none">
          <div class="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:30px_30px] md:bg-[size:40px_40px]"></div>
        </div>

        <div class="relative z-10 max-w-6xl mx-auto text-center">
          <span class="inline-block px-5 py-2 mb-8 md:mb-10 rounded-full bg-white text-red-600 text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] shadow-xl italic">
            ✓ High-End Fullstack Engineering
          </span>
          <h1 class="hero-title font-black mb-10 md:mb-12 tracking-tighter md:tracking-[0.12em] uppercase italic leading-[0.9] md:leading-tight">
            Digitale <br/>
            <span class="text-white/90 underline decoration-white/30 block mt-4 md:mt-6">Architektur.</span>
          </h1>

          <div class="inline-flex w-full md:w-auto bg-white/10 backdrop-blur-md p-1.5 md:p-2 rounded-2xl md:rounded-[2.5rem] border-2 border-white/20 shadow-2xl">
            <button @click="activeTab = 'cases'" :class="[tabClass, activeTab === 'cases' ? activeTabClass : inactiveTabClass]">
              Case Studies
            </button>
            <button @click="activeTab = 'industry'" :class="[tabClass, activeTab === 'industry' ? activeTabClass : inactiveTabClass]">
              Branchen
            </button>
          </div>
        </div>
      </header>

      <div v-if="activeTab === 'cases'" class="divide-y divide-gray-100 overflow-hidden">
        <section class="py-20 md:py-32 px-6">
          <div class="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-24 items-center">
            <div class="order-2 lg:order-1 lg:col-span-6 relative group">
              <div class="absolute -inset-4 md:-inset-6 bg-red-600/5 rounded-[3rem] md:rounded-[4rem] -rotate-2 group-hover:rotate-0 transition-transform duration-700"></div>
              <div class="relative bg-gray-900 p-10 md:p-20 rounded-[2.5rem] md:rounded-[3.5rem] shadow-2xl text-center border border-white/10">
                <div class="text-5xl md:text-7xl mb-8">📊</div>
                <h3 class="text-2xl md:text-3xl font-black text-white uppercase italic tracking-tighter mb-6">Custom ERP Engine</h3>
                <div class="flex flex-wrap justify-center gap-2 md:gap-3">
                  <span class="px-3 py-1.5 bg-white/10 text-gray-300 rounded-xl text-[9px] md:text-[10px] font-black uppercase tracking-widest italic border border-white/10">Laravel 11</span>
                  <span class="px-3 py-1.5 bg-red-600/20 text-red-400 rounded-xl text-[9px] md:text-[10px] font-black uppercase tracking-widest italic border border-red-600/20">Redis API</span>
                  <span class="px-3 py-1.5 bg-white/5 text-gray-400 rounded-xl text-[9px] md:text-[10px] font-black uppercase tracking-widest italic border border-white/10">SSO</span>
                </div>
              </div>
            </div>
            <div class="order-1 lg:order-2 lg:col-span-6 px-2">
              <span class="text-red-600 font-black uppercase tracking-[0.3em] text-[10px] md:text-xs mb-6 block italic">Transformation: Mittelstand</span>
              <h2 class="text-4xl md:text-7xl font-black mb-6 md:mb-8 leading-[0.95] md:leading-[0.9] uppercase italic tracking-tighter text-gray-900">ERP-Zentrale <br/><span class="text-red-600">neu definiert.</span></h2>
              <p class="text-lg md:text-xl text-gray-600 mb-8 md:mb-10 leading-relaxed font-medium italic">
                Ablösung träger Legacy-Systeme durch eine hocheffiziente Cloud-Architektur. Wir konsolidieren Datenströme zu einer Single Source of Truth (SSOT).
              </p>
              <ul class="space-y-4 text-base md:text-lg font-black italic border-l-4 border-red-600 pl-6 md:pl-8">
                <li>→ 65% Zeitersparnis durch Workflow-Automatisierung</li>
                <li>→ Echtzeit-Bestandssynchronisierung</li>
                <li>→ Granulare Rechteverwaltung (RBAC)</li>
              </ul>
            </div>
          </div>
        </section>

        <section class="py-20 md:py-32 px-6 bg-gray-50">
          <div class="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-24 items-center">
            <div class="lg:col-span-6 px-2">
              <span class="text-red-600 font-black uppercase tracking-[0.3em] text-[10px] md:text-xs mb-6 block italic">Scale: Dienstleistung</span>
              <h2 class="text-4xl md:text-7xl font-black mb-6 md:mb-8 leading-[0.95] md:leading-[0.9] uppercase italic tracking-tighter text-gray-900">CRM für <br/><span class="text-red-600">Smart Growth.</span></h2>
              <p class="text-lg md:text-xl text-gray-600 mb-8 md:mb-10 leading-relaxed font-medium italic">
                Individuelles Kundenportal zur Eliminierung von No-Shows und manueller Dateneingabe. Inklusive tiefgreifender Performance-Analytics.
              </p>
              <div class="grid grid-cols-2 gap-4 md:gap-6">
                <div class="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100 text-center">
                  <div class="text-3xl md:text-4xl font-black text-green-600">99.9%</div>
                  <div class="text-[9px] md:text-[10px] uppercase font-black text-gray-400 tracking-widest mt-2">Uptime Core</div>
                </div>
                <div class="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100 text-center">
                  <div class="text-3xl md:text-4xl font-black text-gray-900">Vue 3</div>
                  <div class="text-[9px] md:text-[10px] uppercase font-black text-gray-400 tracking-widest mt-2">SPA Architecture</div>
                </div>
              </div>
            </div>
            <div class="relative lg:col-span-6 group">
              <div class="absolute -inset-4 md:-inset-6 bg-red-600/5 rounded-[3rem] md:rounded-[4rem] rotate-2 group-hover:rotate-0 transition-transform duration-700"></div>
              <div class="relative bg-white p-10 md:p-20 rounded-[2.5rem] md:rounded-[3.5rem] border border-gray-100 shadow-xl text-center">
                <div class="text-5xl md:text-7xl mb-8">👥</div>
                <h3 class="text-2xl md:text-3xl font-black text-gray-900 uppercase italic tracking-tighter mb-4">CRM Excellence</h3>
                <div class="font-mono text-xs md:text-sm text-red-600 bg-red-50 py-3 px-6 rounded-xl inline-block tracking-widest uppercase">Client Hub v2.0</div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <section v-if="activeTab === 'industry'" class="py-20 md:py-32 px-6">
        <div class="max-w-7xl mx-auto">
          <div class="text-center mb-16 md:mb-24">
            <span class="text-red-600 font-black uppercase tracking-[0.3em] text-[10px] md:text-xs mb-6 block italic">Sektorspezifische Expertise</span>
            <h2 class="text-4xl md:text-7xl font-black mb-8 leading-[0.95] md:leading-[0.9] uppercase italic tracking-tighter text-gray-900">Branchen- <br/><span class="text-red-600">Blueprints.</span></h2>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 mb-16 md:mb-24">
            <button v-for="industry in industries" :key="industry.id" @click="selectedIndustryId = industry.id"
              :class="[industryCardClass, selectedIndustryId === industry.id ? activeIndustryClass : inactiveIndustryClass]">
              <div :class="[iconContainerClass, selectedIndustryId === industry.id ? activeIconClass : inactiveIconClass]">
                <component :is="industry.icon" class="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <h3 class="text-xl md:text-2xl font-black uppercase italic tracking-tighter mb-2">{{ industry.name }}</h3>
              <p class="text-[10px] md:text-sm font-medium italic opacity-70">{{ industry.subtitle }}</p>
            </button>
          </div>

          <transition mode="out-in">
            <div v-if="selectedIndustryId && currentIndustry" :key="selectedIndustryId">
              <div class="bg-gray-900 text-white p-8 md:p-24 rounded-[2.5rem] md:rounded-[4rem] shadow-3xl relative overflow-hidden">
                <div class="relative z-10">
                  <h3 class="text-2xl md:text-6xl font-black uppercase italic tracking-tighter mb-6 md:mb-8">{{ currentIndustry.name }} Architektur</h3>
                  <p class="text-lg md:text-xl text-gray-400 max-w-4xl leading-relaxed italic mb-12 md:mb-16">{{ currentIndustry.description }}</p>

                  <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    <article v-for="project in currentIndustry.recommendedProjects" :key="project.id" class="bg-white/5 border border-white/10 p-8 md:p-10 rounded-3xl backdrop-blur-sm flex flex-col h-full group transition-all hover:bg-white/10">
                      <h5 class="text-lg md:text-xl font-black text-red-500 mb-2 italic uppercase tracking-wider">{{ project.title }}</h5>
                      <p class="text-xs md:text-sm text-gray-400 italic mb-10 flex-grow leading-relaxed">{{ project.subtitle }}</p>
                      <div class="border-t border-white/10 pt-8 mt-auto">
                        <p class="text-3xl md:text-4xl font-black mb-8 italic tracking-tighter">{{ project.price }}</p>
                        <NuxtLink :to="{ path: '/kontakt', query: { project: project.title } }" class="block w-full text-center bg-red-600 py-4 md:py-5 rounded-2xl font-black uppercase italic tracking-widest hover:bg-white hover:text-red-600 transition-all shadow-lg text-sm">Anfrage starten</NuxtLink>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </transition>
        </div>
      </section>

      <section class="py-20 md:py-32 px-6 bg-red-600 text-white text-center rounded-[2.5rem] md:rounded-[4rem] mx-2 md:mx-4 mb-12 shadow-2xl relative overflow-hidden">
        <div class="max-w-5xl mx-auto relative z-10">
          <h2 class="text-4xl md:text-[clamp(3.5rem,10vw,8.5rem)] font-black mb-8 md:mb-12 tracking-tighter uppercase italic leading-[0.9]">
            Bereit für den <br/><span class="text-white underline decoration-white/30">Next Level?</span>
          </h2>
          <div class="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center items-center">
            <NuxtLink to="/kontakt" class="w-full sm:w-auto px-10 md:px-16 py-6 md:py-8 bg-white text-red-600 font-black rounded-2xl md:rounded-[2.5rem] shadow-2xl hover:scale-105 transition-all text-xl md:text-2xl uppercase italic tracking-widest">
              Audit buchen
            </NuxtLink>
            <a href="tel:+4917632544620" class="w-full sm:w-auto px-10 md:px-16 py-6 md:py-8 border-4 border-white text-white font-black rounded-2xl md:rounded-[2.5rem] hover:bg-white hover:text-red-600 transition-all text-xl md:text-2xl uppercase italic tracking-widest">
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

const activeTab = useState('activeTab', () => 'cases')
const selectedIndustryId = useState('selectedIndustry', () => null)

const industries = [
  { id: 'gastronomie', name: 'Gastro', icon: Utensils, subtitle: 'High-Scale Booking', description: 'Wir digitalisieren komplexe Bestellflows und binden Kassensysteme nahtlos an Ihre Weboberfläche an.' },
  { id: 'fitness', name: 'Fitness', icon: Dumbbell, subtitle: 'Member Management', description: 'Hochverfügbare Buchungssysteme für Kurse und Mitgliedschaften mit automatisierten Billing-Prozessen.' },
  { id: 'beauty', name: 'Beauty', icon: Scissors, subtitle: 'Automation', description: 'Minimieren Sie No-Shows durch intelligentes Termin-Management und automatisierte Follow-up Kampagnen.' },
  { id: 'handwerk', name: 'Handwerk', icon: StoreIcon, subtitle: 'Lead Gen', description: 'Digitale Kalkulatoren und Anfrage-Strecken, die qualifizierte Kundenanfragen automatisiert vorfiltern.' }
]

const allProjects = [
  { id: 1, title: 'Growth Hub', subtitle: 'Individuelle Vue-Architektur mit Fokus auf maximale Conversion.', price: 'ab 5.950 €', industries: ['gastronomie', 'fitness', 'beauty', 'handwerk'] },
  { id: 2, title: 'Custom CRM', subtitle: 'Zentralisierung Ihrer Kundendaten und Automatisierung der Kommunikation.', price: 'ab 11.900 €', industries: ['beauty', 'fitness', 'handwerk'] },
  { id: 3, title: 'Cloud ERP', subtitle: 'Enterprise-Lösung zur Steigerung der operativen Exzellenz.', price: 'auf Anfrage', industries: ['handwerk', 'gastronomie'] }
]

const currentIndustry = computed(() => {
  const ind = industries.find(i => i.id === selectedIndustryId.value)
  if (!ind) return null
  return {
    ...ind,
    recommendedProjects: allProjects.filter(p => p.industries.includes(ind.id))
  }
})

// CSS Classes
const tabClass = 'flex-1 md:flex-none px-6 md:px-10 py-4 md:py-5 rounded-xl md:rounded-full font-black uppercase italic tracking-widest transition-all duration-300 text-[10px] md:text-sm'
const activeTabClass = 'bg-white text-red-600 shadow-xl'
const inactiveTabClass = 'text-white hover:bg-white/10'

const industryCardClass = 'group p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] border-4 transition-all duration-500 text-center hover:shadow-2xl'
const activeIndustryClass = 'bg-red-50 border-red-600 scale-105 shadow-red-600/5'
const inactiveIndustryClass = 'bg-white border-gray-100 hover:border-red-600/30'

const iconContainerClass = 'w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-3xl mx-auto mb-6 md:mb-8 flex items-center justify-center transition-all duration-500 shadow-sm'
const activeIconClass = 'bg-red-600 text-white rotate-12 shadow-red-600/30 shadow-2xl'
const inactiveIconClass = 'bg-gray-50 text-red-600 group-hover:bg-red-600 group-hover:text-white'

useHead({
  title: 'Engineering & Case Studies | VelWebSolutions',
  meta: [{ name: 'description', content: 'Performance-Software mit Laravel & Vue. Case Studies und Branchenlösungen.' }]
})
</script>

<style scoped>
.hero-title {
  font-size: clamp(2.5rem, 11vw, 9.5rem);
}
.shadow-3xl {
  box-shadow: 0 50px 100px -20px rgba(0, 0, 0, 0.4);
}
.v-enter-active, .v-leave-active {
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.v-enter-from, .v-leave-to {
  opacity: 0;
  transform: scale(0.98) translateY(10px);
}
</style>