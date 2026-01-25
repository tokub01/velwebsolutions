<template>
  <NuxtLayout name="guest">
    <div v-if="isValidCity" class="font-sans text-zinc-900 bg-white selection:bg-red-100 selection:text-red-600 antialiased overflow-x-hidden min-h-screen flex flex-col">

      <header class="relative pt-48 pb-24 md:pt-80 md:pb-64 bg-red-600 text-white px-4 overflow-hidden text-center">
        <div class="absolute inset-0 z-0">
          <div class="absolute inset-0 bg-gradient-to-b from-red-700 via-red-600 to-red-500"></div>
          <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,white_1px,transparent_0)] bg-[size:40px_40px] opacity-10"></div>
        </div>

        <div class="relative z-10 max-w-5xl mx-auto flex flex-col items-center">
          <div class="inline-flex items-center gap-3 px-5 py-2.5 mb-12 rounded-full bg-black/15 backdrop-blur-xl border border-white/10 text-[10px] md:text-xs font-black uppercase tracking-[0.4em] italic">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            {{ typeKey?.replace(/-/g, '_') }} // {{ cityName }}
          </div>

          <h1 class="text-[clamp(2.6rem,12vw,9.5rem)] font-[1000] mb-12 leading-[0.9] tracking-tighter uppercase italic break-words">
            {{ displayTitle.main }}<br />
            <span class="text-white/30 block mt-2">
              {{ displayTitle.sub }}
            </span>
          </h1>

          <p class="text-xl md:text-3xl lg:text-4xl text-red-50 font-light max-w-3xl leading-relaxed italic opacity-90 tracking-tight">
            {{ cityData?.heroDesc }}
          </p>
        </div>
      </header>

      <section class="py-32 md:py-64 bg-white px-4 text-center">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-5xl md:text-9xl font-[1000] uppercase italic tracking-tighter mb-12 leading-none text-zinc-900">
            The <span class="text-red-600">Mission.</span>
          </h2>
          <div class="h-1.5 w-24 bg-red-600 mx-auto mb-16"></div>
          <p class="text-zinc-500 text-xl md:text-4xl italic leading-[1.4] tracking-tight max-w-3xl mx-auto">
            {{ cityData?.subline }}
          </p>
        </div>

        <div class="max-w-7xl mx-auto mt-24 md:mt-40">
          <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div v-for="(item, idx) in (cityData?.highlights || defaultHighlights)" :key="idx"
                 class="bg-zinc-50 p-12 rounded-[3rem] border border-zinc-100 hover:border-red-600 transition-all duration-500 group">
              <div class="text-6xl mb-8 group-hover:scale-110 transition-transform duration-500">{{ item.icon }}</div>
              <h4 class="text-2xl font-black uppercase italic mb-4 tracking-tighter">{{ item.title }}</h4>
              <p class="text-zinc-400 text-sm md:text-base italic leading-relaxed">{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="py-32 md:py-64 bg-zinc-950 px-4 text-white relative">
        <div class="max-w-7xl mx-auto flex flex-col items-center">
          <div class="text-center mb-24 md:mb-48">
            <h2 class="text-6xl md:text-[12rem] font-[1000] uppercase italic tracking-tighter leading-none text-white">Pricing<span class="text-red-600">.</span></h2>
            <p class="text-zinc-600 font-mono mt-10 uppercase tracking-[0.6em] text-[10px] md:text-xs">Flat Rate Engineering Units</p>
          </div>

          <div class="grid grid-cols-1 lg:grid-cols-3 gap-10 w-full">
            <div v-for="plan in pakete" :key="plan.hours"
                 class="group relative bg-zinc-900/30 p-12 md:p-16 rounded-[4rem] border border-white/5 hover:border-red-600/30 transition-all duration-700 flex flex-col items-center text-center">

              <div class="text-red-600 font-black italic tracking-widest text-xs uppercase mb-8 opacity-50">Core_Unit</div>
              <div class="text-8xl font-[1000] italic text-white mb-8 tracking-tighter transition-transform duration-500 group-hover:scale-110">{{ plan.hours }}h</div>

              <p class="text-zinc-400 italic mb-16 text-lg leading-relaxed max-w-[280px]">
                {{ plan.desc }}
              </p>

              <div class="mt-auto w-full pt-10 border-t border-white/5">
                <div class="text-5xl font-[1000] italic tracking-tighter text-white mb-2">{{ plan.priceNetto }}€</div>
                <div class="text-zinc-600 text-xs font-bold uppercase tracking-widest">{{ plan.priceBrutto }}€ <span class="opacity-30 italic ml-1">Gross</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="py-40 md:py-80 bg-white px-4 text-center">
        <div class="max-w-5xl mx-auto">
          <h2 class="text-6xl md:text-[11rem] font-[1000] uppercase italic tracking-tighter leading-[0.8] mb-16 text-zinc-900">
            Initialize <br /> <span class="text-zinc-200">Production.</span>
          </h2>
          <NuxtLink to="/kontakt" class="inline-flex items-center justify-center px-16 py-8 font-black text-white bg-zinc-950 rounded-full hover:bg-red-600 transition-all shadow-2xl hover:scale-105 active:scale-95 transform">
             <span class="uppercase italic tracking-[0.4em] text-sm">Start_Project_Sync</span>
          </NuxtLink>
        </div>
      </section>

    </div>
  </NuxtLayout>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, createError, useHead } from '#app'

// Imports (Pfade beibehalten)
import { cityContent } from '~/data/cityContent'
import { phpLaravelContent } from '~/data/phpLaravelContent'
import { softwareContent } from '~/data/softwareContent'
import { vueContent } from '~/data/vueContent'

const route = useRoute()
const slugParam = computed(() => route.params.slug || '')

const clusterMapping = {
  'webentwicklung': { topic: 'Web', dataSource: cityContent },
  'php-laravel-agentur': { topic: 'Laravel', dataSource: phpLaravelContent },
  'softwareentwicklung': { topic: 'Software', dataSource: softwareContent },
  'vue-js-entwicklung': { topic: 'Vue.js', dataSource: vueContent }
}

const cityData = computed(() => {
  const fullSlug = slugParam.value
  const prefix = Object.keys(clusterMapping).find(p => fullSlug.startsWith(p))
  if (!prefix) return null
  const config = clusterMapping[prefix]
  const cityKey = fullSlug.replace(`${prefix}-`, '').toLowerCase()
  return config.dataSource[cityKey] ? { ...config.dataSource[cityKey], prefix, cityKey } : null
})

if (!cityData.value) throw createError({ statusCode: 404, fatal: true })

const isValidCity = computed(() => !!cityData.value)
const cityName = computed(() => cityData.value?.cityName || '')
const typeKey = computed(() => cityData.value?.prefix || '')

const displayTitle = computed(() => {
  const title = cityData.value?.h1Title || 'Engineering:Core'
  const parts = title.includes(':') ? title.split(':') : [title, 'System']
  return { main: parts[0].trim(), sub: parts[1].trim() }
})

const pakete = [
  { hours: 40, priceNetto: '5.000,00', priceBrutto: '5.950,00', desc: 'Sprints für System-Audits & Architektur-Quicklinks.' },
  { hours: 80, priceNetto: '10.000,00', priceBrutto: '11.900,00', desc: 'Core-Feature Entwicklung & technische Realisierung.' },
  { hours: 120, priceNetto: '15.000,00', priceBrutto: '17.850,00', desc: 'Enterprise Launch & High-Performance Scaling.' }
]

const defaultHighlights = [
  { icon: '🚀', title: 'Speed', desc: 'Next-Gen Performance' },
  { icon: '🛡️', title: 'Security', desc: 'Hardened Codebase' },
  { icon: '💎', title: 'Quality', desc: 'Clean Architecture' }
]

useHead({
  title: `${cityData.value?.h1Title} | VelWebSolutions`,
  meta: [{ name: 'description', content: cityData.value?.heroDesc }]
})
</script>

<style scoped>
@media (max-width: 350px) {
  h1 { font-size: 2.4rem !important; }
  h2 { font-size: 3.4rem !important; }
  .text-8xl { font-size: 4rem !important; }
}

/* Perfekter Fluss für Texte */
p, h1, h2 {
  hyphens: auto;
  text-wrap: balance;
}

.tracking-tighter {
  letter-spacing: -0.04em;
}
</style>