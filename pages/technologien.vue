<template>
  <div class="font-sans text-gray-900 bg-white selection:bg-red-100 selection:text-red-600">

    <nav class="bg-gray-50 py-4 px-6 mt-16 border-b border-gray-100" aria-label="Breadcrumb">
      <ol class="max-w-7xl mx-auto flex items-center space-x-2 text-[10px] font-black uppercase tracking-widest italic">
        <li>
          <NuxtLink to="/" class="text-red-600 hover:underline">Zentrale</NuxtLink>
        </li>
        <li class="text-gray-400">/</li>
        <li class="text-gray-700">Tech-Stack & Infrastructure</li>
      </ol>
    </nav>

    <header class="relative py-24 md:py-44 bg-gradient-to-br from-red-700 via-red-600 to-red-500 text-white px-6 overflow-hidden">
      <div class="absolute inset-0 opacity-10 pointer-events-none">
        <div class="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div class="relative z-10 max-w-6xl mx-auto text-center">
        <span class="inline-block px-5 py-2 mb-6 rounded-full bg-white text-red-600 text-[10px] font-black uppercase tracking-[0.2em] shadow-xl italic">
          ✓ Enterprise Grade Architecture
        </span>
        <h1 class="text-5xl md:text-9xl font-black mb-10 leading-[0.85] tracking-tighter uppercase italic">
          Modern <br/><span class="text-white/90 underline decoration-white/30 italic">Engineering.</span>
        </h1>
        <p class="text-xl md:text-2xl text-red-50 max-w-4xl mx-auto leading-relaxed font-medium italic opacity-90">
          Wir setzen auf einen technologisch fundierten Stack, der Performance, Sicherheit und Skalierbarkeit garantiert. Kein Overhead, nur präziser Code.
        </p>
      </div>
    </header>

    <section class="py-32 px-6 bg-white overflow-hidden">
      <div class="max-w-7xl mx-auto">
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="tech in stack"
            :key="tech.name"
            class="group relative p-12 bg-gray-50 rounded-[3rem] border border-gray-100 hover:border-red-600 transition-all duration-500 hover:shadow-3xl"
          >
            <div class="flex justify-between items-start mb-10">
              <div class="text-6xl group-hover:scale-110 transition-transform duration-500">{{ tech.emoji }}</div>
              <span class="text-[10px] font-black uppercase tracking-widest text-red-600 bg-red-50 px-4 py-2 rounded-xl italic">
                {{ tech.type }}
              </span>
            </div>

            <h3 class="text-3xl font-black text-gray-900 uppercase italic tracking-tighter mb-6 group-hover:text-red-600 transition-colors">
              {{ tech.name }}
            </h3>

            <p class="text-gray-600 font-medium italic mb-10 leading-relaxed">
              {{ tech.description }}
            </p>

            <div class="flex flex-wrap gap-2 pt-8 border-t border-gray-200/50">
              <span
                v-for="tag in tech.tags"
                :key="tag"
                class="text-[9px] font-black uppercase tracking-widest text-gray-400 border border-gray-200 px-3 py-1 rounded-lg"
              >
                #{{ tag }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-32 px-6 bg-gray-900 text-white rounded-[4rem] mx-4 shadow-2xl relative overflow-hidden">
      <div class="max-w-6xl mx-auto">
        <div class="grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span class="text-red-500 font-black uppercase tracking-[0.3em] text-xs mb-6 block italic">Philosophie</span>
            <h2 class="text-4xl md:text-7xl font-black mb-10 leading-[0.85] uppercase italic tracking-tighter">
              Clean Code <br/><span class="text-red-500 italic">Principles.</span>
            </h2>
            <p class="text-xl text-gray-400 mb-12 leading-relaxed font-medium italic">
              Unsere Entwicklung folgt strengen wissenschaftlichen und technischen Standards. Wir bauen keine Einweg-Software, sondern zukunftssichere Systeme.
            </p>

            <ul class="space-y-6">
              <li class="flex items-start gap-6 group" v-for="principle in principles" :key="principle.title">
                <span class="text-red-500 text-3xl font-black italic tracking-tighter group-hover:translate-x-2 transition-transform">{{ principle.id }}</span>
                <div>
                  <h4 class="text-xl font-black uppercase italic tracking-tighter">{{ principle.title }}</h4>
                  <p class="text-gray-500 italic text-sm">{{ principle.desc }}</p>
                </div>
              </li>
            </ul>
          </div>

          <div class="bg-black/50 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10 font-mono text-sm leading-relaxed relative">
            <div class="flex gap-2 mb-8">
              <div class="w-3 h-3 rounded-full bg-red-500"></div>
              <div class="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div class="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <div class="text-gray-400 italic mb-4">// Additional Tools & Infrastructure</div>
            <div class="grid grid-cols-2 gap-4">
              <div v-for="tool in otherTools" :key="tool.name" class="flex items-center gap-3 bg-white/5 p-4 rounded-2xl border border-white/5 hover:border-red-600/50 transition-colors">
                <span class="text-xl">{{ tool.emoji }}</span>
                <span class="font-black uppercase tracking-tighter italic text-[11px]">{{ tool.name }}</span>
              </div>
            </div>
            <div class="mt-10 pt-10 border-t border-white/5">
               <div class="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-red-500">
                 <span>CPU Load: 2.4%</span>
                 <span>Build Status: Success</span>
               </div>
               <div class="w-full h-2 bg-white/5 rounded-full mt-4 overflow-hidden">
                  <div class="w-2/3 h-full bg-red-600 animate-pulse"></div>
               </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-32 px-6 bg-white text-center">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-5xl md:text-8xl font-black mb-12 tracking-tighter uppercase italic leading-[0.8]">
          Kein Legacy Code. <br/><span class="text-red-600">Nur Performance.</span>
        </h2>
        <p class="text-2xl text-gray-600 mb-16 leading-relaxed font-medium italic max-w-2xl mx-auto">
          Lassen Sie uns Ihre technische Vision in eine performante Realität umsetzen.
        </p>
        <NuxtLink to="/kontakt" class="px-14 py-8 bg-red-600 text-white font-black rounded-[2rem] shadow-2xl hover:scale-105 transition-all text-2xl uppercase italic tracking-widest">
          Projekt besprechen
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'guest'
})


// Nuxt-spezifische SEO Handhabung
useSeoMeta({
  title: 'Tech-Stack & Engineering | VelWebSolutions',
  ogTitle: 'Tech-Stack & Engineering | VelWebSolutions',
  description: 'Modernste Technologien wie Laravel 12, Vue.js 3 und Docker für Ihre Enterprise-Lösung.',
  ogDescription: 'Modernste Technologien wie Laravel 12, Vue.js 3 und Docker für Ihre Enterprise-Lösung.',
})

const stack = [
  {
    name: 'Laravel 12',
    type: 'Backend',
    emoji: '🏗️',
    description: 'Das Rückgrat für komplexe Logik. Skalierbar, sicher und mit einem Fokus auf Clean Architecture.',
    tags: ['PHP 8.4', 'Eloquent', 'Security']
  },
  {
    name: 'Vue.js 3',
    type: 'Frontend',
    emoji: '⚡',
    description: 'Hochreaktive Interfaces durch die Composition API. Maximale Performance für die User Experience.',
    tags: ['Vite', 'Pinia', 'Nuxt 3']
  },
  {
    name: 'Tailwind CSS',
    type: 'Design',
    emoji: '🎨',
    description: 'Utility-First Framework für extrem schnelle Ladezeiten und pixelperfekte, responsive Layouts.',
    tags: ['v4', 'Responsive', 'Atomic']
  },
  {
    name: 'Docker',
    type: 'DevOps',
    emoji: '🐳',
    description: 'Containerisierung sorgt für identische Umgebungen von der Entwicklung bis zur Cloud-Infrastruktur.',
    tags: ['Stability', 'Scaling', 'CI/CD']
  },
  {
    name: 'PostgreSQL',
    type: 'Database',
    emoji: '🐘',
    description: 'Höchste Datenintegrität und Performance für anspruchsvolle Enterprise-Anwendungen.',
    tags: ['ACID', 'Indexing', 'Reliable']
  },
  {
    name: 'GitHub Actions',
    type: 'Workflow',
    emoji: '🚀',
    description: 'Automatisierte Tests und Quality-Gates vor jedem Release. Deployment per Knopfdruck.',
    tags: ['Automated', 'DevOps', 'Quality']
  }
]

const principles = [
  { id: '01', title: 'Single Responsibility', desc: 'Jede Komponente tut genau eine Sache – und die perfekt.' },
  { id: '02', title: 'Test-Driven Development', desc: 'Code wird erst nach automatisierten Tests als stabil markiert.' },
  { id: '03', title: 'Security First', desc: 'Schutz gegen SQL-Injection, XSS und CSRF ist nativer Standard.' }
]

const otherTools = [
  { name: 'Redis', emoji: '🔴' },
  { name: 'Vite', emoji: '⚡' },
  { name: 'Inertia.js', emoji: '🔄' },
  { name: 'AWS', emoji: '☁️' },
  { name: 'Postman', emoji: '📫' },
  { name: 'Alpine.js', emoji: '🏔️' }
]
</script>

<style scoped>
/* Nuxt 3 / Tailwind 4 Integration */
.shadow-3xl {
  box-shadow: 0 35px 60px -15px rgba(0, 0, 0, 0.1);
}
</style>