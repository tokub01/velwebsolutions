<template>
  <div class="font-sans text-slate-900 bg-white selection:bg-red-500 selection:text-white antialiased overflow-x-hidden" v-if="isValidCity">

    <header class="relative pt-32 pb-20 md:pt-56 md:pb-48 bg-red-600 text-white px-4 overflow-hidden mt-[60px] md:mt-[73px]">
      <div class="absolute inset-0 opacity-20 pointer-events-none">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,white_1px,transparent_0)] bg-[size:40px_40px]"></div>
      </div>
      <div class="absolute -top-24 -right-24 w-96 h-96 bg-white opacity-10 blur-[100px] rounded-full"></div>

      <div class="relative z-10 max-w-7xl mx-auto px-4 md:px-6 text-left">
        <div class="inline-flex items-center gap-3 px-3 py-1 mb-8 rounded-full bg-white/10 border border-white/20 backdrop-blur-md">
          <span class="text-[10px] font-black uppercase tracking-[0.2em] italic">✓ Remote Software Expert</span>
        </div>

        <h1 class="text-[clamp(2.5rem,9vw,7.5rem)] font-[1000] mb-8 leading-[0.85] tracking-tighter uppercase italic break-words">
          {{ displayContent.h1Prefix }}<br />
          <span class="text-white underline decoration-white/30">{{ cityName }}.</span>
        </h1>

        <div class="grid lg:grid-cols-2 gap-12 items-end">
          <p class="text-lg md:text-2xl text-red-50 font-medium leading-relaxed italic max-w-2xl">
            {{ cityData.heroSlogan || `Wir entwickeln die digitale Infrastruktur für den modernen Mittelstand.` }}
            Realisiert via <a href="https://laravel.cloud" target="_blank" class="text-white font-black underline decoration-white/40 hover:decoration-white transition-all">Laravel Cloud</a> & <a href="https://www.netlify.com" target="_blank" class="text-white font-black underline decoration-white/40 hover:decoration-white transition-all">Netlify</a>.
          </p>
          <div class="flex flex-wrap gap-4">
            <NuxtLink to="/kontakt" class="group bg-white text-red-600 hover:bg-slate-900 hover:text-white px-10 py-5 rounded-2xl font-[1000] text-sm uppercase italic transition-all shadow-[0_20px_50px_rgba(0,0,0,0.2)]">
              Analyse Session starten
            </NuxtLink>
          </div>
        </div>
      </div>
    </header>

    <section class="py-12 bg-white border-b border-slate-100">
      <div class="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div v-for="stat in engineeringStats" :key="stat.label" class="flex flex-col">
          <span class="text-4xl font-[1000] text-red-600 italic tracking-tighter">{{ stat.value }}</span>
          <span class="text-[10px] font-black uppercase text-slate-400 tracking-widest">{{ stat.label }}</span>
        </div>
      </div>
    </section>

    <section class="py-24 md:py-40 px-4 bg-slate-50">
      <div class="max-w-7xl mx-auto">
        <div class="mb-20">
          <h2 class="text-sm font-black uppercase tracking-[0.3em] text-red-600 mb-4 italic">// Engineering Core</h2>
          <p class="text-4xl md:text-7xl font-[1000] tracking-tighter italic uppercase leading-none">Methodik trifft <br/> Performance.</p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-12 gap-6">
          <div class="md:col-span-8 p-8 md:p-12 bg-white rounded-[3rem] border border-slate-200 flex flex-col justify-between group hover:shadow-2xl transition-all duration-500">
            <div class="max-w-xl">
              <GitBranch class="w-12 h-12 text-red-600 mb-8" />
              <h3 class="text-3xl font-[1000] uppercase italic mb-6">Phase 01: Requirement Engineering</h3>
              <p class="text-slate-500 font-medium italic text-lg leading-relaxed">
                Kein Code ohne Plan. Wir modellieren Ihre Prozesse in {{ cityName }} mittels BPMN und Domain-Driven Design (DDD). Das sichert die logische Integrität Ihres ERP- oder CRM-Systems, bevor die erste Zeile Code geschrieben wird.
              </p>
            </div>
            
            <div class="flex flex-wrap gap-2 mt-12">
              <span v-for="tag in ['UML', 'BPMN 2.0', 'User Stories', 'System Architecture']" :key="tag" class="px-4 py-2 bg-slate-50 rounded-xl text-[10px] font-black uppercase tracking-tight">{{ tag }}</span>
            </div>
          </div>

          <div class="md:col-span-4 p-8 bg-slate-900 rounded-[3rem] text-white flex flex-col justify-between">
            <div class="space-y-6">
              <div class="w-12 h-12 bg-red-600 rounded-2xl flex items-center justify-center">
                <Cpu class="w-6 h-6 text-white" />
              </div>
              <h3 class="text-2xl font-[1000] uppercase italic leading-tight">100% Remote <br/> Delivery</h3>
              <p class="text-slate-400 text-sm italic font-medium">Wir nutzen Netlify & Laravel Cloud für ein nahtloses, serverloses Deployment Ihrer Anwendung in {{ cityName }}.</p>
            </div>
            <div class="pt-8 border-t border-white/10">
              <div class="flex items-center gap-3">
                <div class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span class="text-[10px] font-black uppercase tracking-widest italic">Live Staging Ready</span>
              </div>
            </div>
          </div>

          <div v-for="service in bottomServices" :key="service.title" class="md:col-span-4 p-8 bg-white border border-slate-200 rounded-[2.5rem] hover:border-red-600 transition-colors group">
            <component :is="service.icon" class="w-8 h-8 text-red-600 mb-6" />
            <h4 class="text-xl font-[1000] uppercase italic mb-4">{{ service.title }}</h4>
            <p class="text-slate-500 text-sm font-medium italic leading-relaxed">{{ service.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 md:py-40 px-4 bg-white overflow-hidden">
      <div class="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
        <div class="w-full lg:w-1/2">
          <h2 class="text-4xl md:text-6xl font-[1000] uppercase italic tracking-tighter leading-none mb-8">
            The <span class="text-red-600">Cloud Stack.</span>
          </h2>
          <p class="text-slate-500 text-lg md:text-xl font-medium italic leading-relaxed mb-10">
            Maximale Performance durch modernste Cloud-Dienste. Wir trennen das Frontend (Netlify) strikt vom Backend (Laravel Cloud), um höchste Sicherheit und Skalierbarkeit zu gewährleisten.
          </p>
          <div class="space-y-6">
            <div v-for="feature in cloudFeatures" :key="feature.title" class="flex items-start gap-4">
              <div class="w-6 h-6 rounded-full bg-red-50 text-red-600 flex items-center justify-center text-xs font-bold mt-1">✓</div>
              <div>
                <h5 class="font-black uppercase italic text-sm">{{ feature.title }}</h5>
                <p class="text-slate-400 text-sm italic">{{ feature.desc }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="w-full lg:w-1/2 relative">
          <div class="bg-slate-900 rounded-[3rem] p-1 shadow-2xl overflow-hidden group">
            <div class="bg-slate-950 p-6 md:p-10 rounded-[2.8rem]">
               <div class="flex gap-2 mb-8">
                <div class="w-3 h-3 rounded-full bg-red-500"></div>
                <div class="w-3 h-3 rounded-full bg-slate-700"></div>
                <div class="w-3 h-3 rounded-full bg-slate-700"></div>
              </div>
              <div class="font-mono text-xs md:text-sm space-y-3">
                <p class="text-blue-400">// Deployment Strategy</p>
                <p><span class="text-red-500">frontend:</span> <span class="text-white">Netlify (Global CDN)</span></p>
                <p><span class="text-red-500">backend:</span> <span class="text-white">Laravel Cloud (Serverless)</span></p>
                <p><span class="text-red-500">database:</span> <span class="text-white">Managed Postgres</span></p>
                <div class="h-px bg-white/5 my-6"></div>
                <p class="text-green-400 animate-pulse">>> System Online for {{ cityName }}.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 md:py-40 px-4 bg-slate-50">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-4xl md:text-7xl font-[1000] text-center mb-20 uppercase italic tracking-tighter">FAQ.</h2>
        <div class="space-y-4">
          <details v-for="faq in engineeringFaqs" :key="faq.q" class="group border border-slate-200 rounded-3xl bg-white overflow-hidden hover:shadow-xl transition-all">
            <summary class="p-8 flex justify-between items-center cursor-pointer list-none focus:outline-none">
              <h3 class="text-base md:text-lg font-black uppercase italic tracking-tight">{{ faq.q }}</h3>
              <div class="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center group-open:bg-red-600 group-open:text-white transition-all">+</div>
            </summary>
            <div class="px-8 pb-10 text-slate-500 italic font-medium leading-relaxed border-t border-slate-50 pt-6">
              {{ faq.a }}
            </div>
          </details>
        </div>
      </div>
    </section>

    <section class="py-24 px-4 bg-white">
      <div class="max-w-6xl mx-auto bg-red-600 rounded-[3rem] md:rounded-[4rem] p-12 md:p-32 text-center text-white relative shadow-3xl overflow-hidden">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent)]"></div>
        <h2 class="text-4xl md:text-8xl font-[1000] uppercase italic tracking-tighter leading-none mb-12">
          Start your <br/>Project.
        </h2>
        <NuxtLink to="/kontakt" class="inline-block bg-white text-red-600 px-12 py-6 rounded-2xl font-black text-lg uppercase italic hover:bg-slate-900 hover:text-white transition-all shadow-xl active:scale-95">
          Audit anfordern
        </NuxtLink>
      </div>
    </section>

  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute, createError, useHead } from '#app'
import { Code2, Database, Rocket, ShieldCheck, Cpu, GitBranch } from 'lucide-vue-next'

definePageMeta({
  layout: 'guest',
  validate: (route) => {
    const slug = route.params.slug || ''
    const validPrefixes = ['webentwicklung-', 'php-laravel-agentur-', 'softwareentwicklung-', 'vue-js-entwicklung-']
    return validPrefixes.some(prefix => slug.startsWith(prefix))
  }
})

// Import Data
import { cityContent } from '~/data/cityContent'
import { phpLaravelContent } from '~/data/phpLaravelContent'
import { softwareContent } from '~/data/softwareContent'
import { vueContent } from '~/data/vueContent'

const route = useRoute()
const slug = computed(() => route.params.slug || '')

const clusterMapping = {
  'webentwicklung': { topic: 'Web Engineering', h1Prefix: 'Web Engineering in', dataSource: cityContent },
  'php-laravel-agentur': { topic: 'Laravel Engineering', h1Prefix: 'Laravel Expert in', dataSource: phpLaravelContent },
  'softwareentwicklung': { topic: 'Software Engineering', h1Prefix: 'Software Engineering in', dataSource: softwareContent },
  'vue-js-entwicklung': { topic: 'Frontend Engineering', h1Prefix: 'Vue.js Specialist in', dataSource: vueContent }
}

const cityData = computed(() => {
  const fullSlug = slug.value
  const matchedPrefix = Object.keys(clusterMapping).find(p => fullSlug.startsWith(p))
  if (!matchedPrefix) return null
  const config = clusterMapping[matchedPrefix]
  const cityKey = fullSlug.replace(`${matchedPrefix}-`, '').toLowerCase()
  const data = config.dataSource[cityKey]
  if (!data) return null
  return { ...data, config, typeKey: matchedPrefix, cityKey }
})

const isValidCity = computed(() => !!cityData.value)
if (!cityData.value) throw createError({ statusCode: 404, fatal: true })

const cityName = computed(() => cityData.value?.cityName || '')
const displayContent = computed(() => cityData.value?.config || {})

const engineeringStats = [
  { value: 'Remote', label: 'Work Model' },
  { value: 'Laravel', label: 'Cloud Native' },
  { value: 'SOLID', label: 'Architecture' },
  { value: '125€', label: 'Hourly Rate' }
]

const bottomServices = [
  { icon: Code2, title: 'Clean Backend', desc: 'Wartbare PHP 8.3/Laravel Architekturen mit höchster Testabdeckung (TDD).' },
  { icon: Rocket, title: 'Vite Frontends', desc: 'Hochperformante Vue.js 3 Interfaces für komplexe Business-Dashboards.' },
  { icon: ShieldCheck, title: 'Security First', desc: 'Durchgängige Verschlüsselung und DSGVO-konforme Infrastruktur.' }
]

const cloudFeatures = [
  { title: 'Serverless Backend', desc: 'Laravel Cloud übernimmt Skalierung und Maintenance.' },
  { title: 'Global Frontend', desc: 'Netlify CDNs garantieren Ladezeiten < 1s weltweit.' },
  { title: 'CI/CD Pipelines', desc: 'Automatisierte Tests und Deployments bei jedem Push.' }
]

const engineeringFaqs = [
  { q: "Warum setzen Sie auf Laravel Cloud und Netlify?", a: "Diese Kombination trennt Logik (Backend) und Präsentation (Frontend). Netlify liefert das Frontend global optimiert aus, während Laravel Cloud eine skalierbare, wartungsfreie Infrastruktur für komplexe Prozesse bietet." },
  { q: "Wie sieht der Remote-Engineering-Prozess aus?", a: "Wir arbeiten in wöchentlichen Sprints. Über Videocalls, kollaborative Architektur-Tools und Slack bleiben Sie jederzeit in den Entwicklungsprozess eingebunden." },
  { q: "Erhalte ich Zugriff auf den Quellcode?", a: "Ja. Sie besitzen den vollständigen Source-Code. Wir übergeben das Projekt inklusive Dokumentation und Deployment-Pipelines." }
]

useHead({
  title: computed(() => `${displayContent.value.h1Prefix} ${cityName.value} | VelWeb Engineering`),
})
</script>

<style scoped>
details > summary { list-style: none; }
details > summary::-webkit-details-marker { display: none; }
</style>