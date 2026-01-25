<template>
  <NuxtLayout name="guest">
    <div class="font-sans text-zinc-900 bg-white selection:bg-red-100 selection:text-red-600 antialiased overflow-x-hidden">

      <header class="relative pt-32 pb-16 md:pt-64 md:pb-52 bg-red-600 text-white px-3 md:px-6 overflow-hidden">
        <div class="absolute inset-0 z-0">
          <div class="absolute inset-0 bg-gradient-to-br from-red-700 via-red-600 to-red-500"></div>
          <div class="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,white_1px,transparent_0)] bg-[size:30px_30px] opacity-10"></div>
        </div>

        <div class="relative z-10 max-w-7xl mx-auto text-center">
          <div class="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-white text-red-600 shadow-2xl italic transform hover:scale-105 transition-all duration-500">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
            </span>
            <span class="text-[8px] md:text-[10px] font-black uppercase tracking-[0.3em]">Proven_Architecture // 2026</span>
          </div>

          <h1 class="text-[clamp(2.1rem,13vw,9.5rem)] font-[1000] mb-10 tracking-tighter uppercase italic leading-[0.85] break-words">
            Engineering <br/>
            <span class="text-white/90 underline decoration-white/30 block mt-2">Exzellenz.</span>
          </h1>

          <div class="inline-flex flex-col sm:flex-row bg-black/10 backdrop-blur-md p-1.5 rounded-2xl md:rounded-[2.5rem] border border-white/20 w-full sm:w-auto gap-1">
            <button @click="activeTab = 'cases'" :class="[tabClass, activeTab === 'cases' ? activeTabClass : inactiveTabClass]">
              Case Studies
            </button>
            <button @click="activeTab = 'industry'" :class="[tabClass, activeTab === 'industry' ? activeTabClass : inactiveTabClass]">
              Blueprints
            </button>
          </div>
        </div>
      </header>

      <main class="relative z-20">
        <div v-if="activeTab === 'cases'" class="divide-y divide-zinc-100 bg-[#FCFCFC]">
          <section class="py-16 md:py-44 px-3 md:px-6">
            <div class="max-w-7xl mx-auto grid lg:grid-cols-12 gap-10 md:gap-32 items-center">
              <div class="lg:col-span-6 relative group order-2 lg:order-1">
                <div class="relative bg-zinc-900 p-8 md:p-24 rounded-[2.5rem] md:rounded-[4rem] shadow-3xl border border-white/5 overflow-hidden">
                  <LucideDatabase class="absolute top-0 right-0 p-6 w-24 h-24 md:w-40 md:h-40 text-white opacity-10" />
                  <div class="relative z-10 text-left">
                    <div class="text-red-600 font-mono text-[9px] md:text-sm mb-4 tracking-widest uppercase italic">System: ERP_CORE_V4</div>
                    <h3 class="text-2xl md:text-5xl font-black text-white uppercase italic tracking-tighter mb-6 leading-none">Custom <br/>Enterprise Engine</h3>
                    <div class="flex flex-wrap gap-2">
                      <span v-for="tech in ['Laravel', 'Redis', 'Docker']" :key="tech" class="px-3 py-1.5 bg-white/5 text-zinc-400 rounded-lg text-[8px] font-black uppercase italic border border-white/10">
                        {{ tech }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div class="lg:col-span-6 order-1 lg:order-2 text-left">
                <span class="text-red-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4 block italic">01 // Transformation</span>
                <h2 class="text-3xl md:text-7xl font-[1000] mb-6 leading-[0.9] uppercase italic tracking-tighter text-zinc-900">Legacy war gestern.</h2>
                <p class="text-base md:text-xl text-zinc-500 mb-8 leading-relaxed font-medium italic pr-4">
                  Träge monolithische Systeme werden zu hochverfügbaren Micro-Service-Architekturen.
                </p>
                <div class="space-y-4">
                  <div v-for="stat in ['-65% Latenz', '100% Integrity']" :key="stat" class="flex items-center gap-3 group">
                    <div class="w-8 md:w-16 h-[2px] bg-red-600 transition-all group-hover:w-12"></div>
                    <span class="font-black italic uppercase tracking-widest text-[10px] md:text-sm text-zinc-900">{{ stat }}</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        <section v-if="activeTab === 'industry'" class="py-16 md:py-44 px-3 md:px-6 bg-[#FCFCFC]">
          <div class="max-w-7xl mx-auto">
            <div class="text-left mb-12">
              <span class="text-red-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4 block italic">Expertise</span>
              <h2 class="text-4xl md:text-8xl font-[1000] mb-8 leading-[0.85] uppercase italic tracking-tighter text-zinc-900">Branchen <br/><span class="text-red-600">Blueprints.</span></h2>
            </div>

            <div class="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8 mb-12">
              <button v-for="industry in industries" :key="industry.id" @click="selectedIndustryId = industry.id"
                :class="[industryCardClass, selectedIndustryId === industry.id ? activeIndustryClass : inactiveIndustryClass]">
                <div :class="[iconContainerClass, selectedIndustryId === industry.id ? activeIconClass : inactiveIconClass]">
                  <component :is="industry.icon" class="w-6 h-6 md:w-10 md:h-10" />
                </div>
                <h3 class="text-sm md:text-3xl font-black uppercase italic tracking-tighter">{{ industry.name }}</h3>
              </button>
            </div>

            <transition mode="out-in">
              <div v-if="selectedIndustryId && currentIndustry" :key="selectedIndustryId">
                <div class="bg-zinc-900 text-white p-6 md:p-24 rounded-[2.5rem] md:rounded-[5rem] shadow-3xl relative overflow-hidden text-left">
                  <div class="relative z-10">
                    <h3 class="text-3xl md:text-7xl font-black uppercase italic tracking-tighter mb-6 leading-none">
                      {{ currentIndustry.name }} <br/><span class="text-red-600">Architektur.</span>
                    </h3>
                    <p class="text-sm md:text-2xl text-zinc-400 italic mb-10">{{ currentIndustry.description }}</p>

                    <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                      <article v-for="project in currentIndustry.recommendedProjects" :key="project.id" class="bg-white/5 border border-white/10 p-6 md:p-12 rounded-[2rem] hover:bg-white/10 transition-all">
                        <h5 class="text-xl md:text-3xl font-black text-red-500 mb-2 italic uppercase tracking-tighter">{{ project.title }}</h5>
                        <p class="text-[10px] md:text-base text-zinc-400 italic mb-8">{{ project.subtitle }}</p>
                        <div class="pt-6 border-t border-white/10">
                          <p class="text-2xl md:text-5xl font-black mb-6 italic tracking-tighter">{{ project.price }}</p>
                          <NuxtLink :to="{ path: '/kontakt', query: { project: project.title } }" class="block w-full text-center bg-red-600 py-4 rounded-xl font-black uppercase italic text-[10px] tracking-widest shadow-xl">
                            Request_Module.sh
                          </NuxtLink>
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
              </div>
            </transition>
          </div>
        </section>
      </main>

      <section class="py-16 md:py-48 px-3 md:px-6 bg-white">
        <div class="max-w-7xl mx-auto bg-red-600 text-white text-center rounded-[2.5rem] md:rounded-[6rem] py-16 md:py-40 px-4 shadow-3xl relative overflow-hidden">
          <div class="max-w-4xl mx-auto relative z-10">
            <h2 class="text-4xl md:text-[9rem] font-[1000] mb-10 tracking-tighter uppercase italic leading-[0.85]">
              Ready for <br/>
              <span class="text-white underline decoration-white/30">Next_Gen?</span>
            </h2>
            <div class="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <NuxtLink to="/kontakt" class="w-full sm:w-auto px-8 py-5 md:px-20 md:py-10 bg-white text-red-600 font-black rounded-2xl shadow-3xl hover:scale-105 transition-all text-lg md:text-3xl uppercase italic tracking-widest">
                Audit buchen
              </NuxtLink>
              <a href="tel:+4917632544620" class="w-full sm:w-auto px-8 py-5 md:px-20 md:py-10 border-2 border-white text-white font-black rounded-2xl hover:bg-white hover:text-red-600 transition-all text-lg md:text-3xl uppercase italic tracking-widest">
                Direct_Line
              </a>
            </div>
          </div>
        </div>
      </section>

    </div>
  </NuxtLayout>
</template>

<script setup>
import { Utensils, Dumbbell, Scissors, Store as StoreIcon, LucideDatabase, LucideZap } from 'lucide-vue-next'

const activeTab = useState('activeTab', () => 'cases')
const selectedIndustryId = useState('selectedIndustry', () => 'gastronomie')

const industries = [
  { id: 'gastronomie', name: 'Gastro', icon: Utensils, description: 'Echtzeit-Synchronisation für komplexe Bestellflows.' },
  { id: 'fitness', name: 'Fitness', icon: Dumbbell, description: 'Hochverfügbare Buchungssysteme für Member Management.' },
  { id: 'beauty', name: 'Beauty', icon: Scissors, description: 'Minimierung von No-Shows durch intelligente Termin-Automation.' },
  { id: 'handwerk', name: 'Handwerk', icon: StoreIcon, description: 'Automatisierte Anfrage-Strecken mit ERP-Integration.' }
]

const allProjects = [
  { id: 1, title: 'Growth Hub', subtitle: 'Individuelle Vue-Architektur.', price: 'ab 5.950 €', industries: ['gastronomie', 'fitness', 'beauty', 'handwerk'] },
  { id: 2, title: 'Custom CRM', subtitle: 'Multi-Channel-API Kommunikation.', price: 'ab 11.900 €', industries: ['beauty', 'fitness', 'handwerk'] },
  { id: 3, title: 'Cloud ERP', subtitle: 'Enterprise-Lösung zur Ressourcenplanung.', price: 'auf Anfrage', industries: ['handwerk', 'gastronomie'] }
]

const currentIndustry = computed(() => {
  const ind = industries.find(i => i.id === selectedIndustryId.value)
  if (!ind) return null
  return { ...ind, recommendedProjects: allProjects.filter(p => p.industries.includes(ind.id)) }
})

// UI Styling Classes (Optimiert für 320px)
const tabClass = 'flex-1 sm:flex-none px-4 md:px-12 py-4 rounded-xl md:rounded-[2.5rem] font-black uppercase italic tracking-widest transition-all duration-500 text-[9px] md:text-sm'
const activeTabClass = 'bg-white text-red-600 shadow-xl'
const inactiveTabClass = 'text-white/70 hover:text-white hover:bg-white/5'

const industryCardClass = 'group p-4 md:p-14 rounded-[1.5rem] md:rounded-[4rem] border-2 transition-all duration-700 text-center'
const activeIndustryClass = 'bg-white border-red-600 shadow-xl scale-[1.02]'
const inactiveIndustryClass = 'bg-white border-zinc-100'

const iconContainerClass = 'w-10 h-10 md:w-24 md:h-24 rounded-xl md:rounded-[2.5rem] mx-auto mb-4 md:mb-10 flex items-center justify-center transition-all duration-700'
const activeIconClass = 'bg-red-600 text-white'
const inactiveIconClass = 'bg-zinc-50 text-red-600'

useHead({
  title: 'Portfolio & Engineering | VelWebSolutions',
  meta: [{ name: 'description', content: 'Enterprise Software-Lösungen mit Laravel & Vue.js.' }]
})
</script>

<style scoped>
.shadow-3xl {
  box-shadow: 0 30px 60px -12px rgba(0, 0, 0, 0.25);
}

@media (max-width: 330px) {
  h1 { font-size: 2rem !important; }
  h2 { font-size: 1.8rem !important; }
  p { font-size: 13px !important; }
  .px-3 { padding-left: 0.5rem; padding-right: 0.5rem; }
}

.v-enter-active, .v-leave-active {
  transition: all 0.4s ease;
}
.v-enter-from, .v-leave-to {
  opacity: 0;
  transform: translateY(10pxdiv);
}
</style>