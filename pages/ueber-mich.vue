<template>
  <div class="font-sans text-gray-900 bg-white selection:bg-red-100 selection:text-red-600">

    <nav class="bg-gray-50 py-4 px-6 mt-16 border-b border-gray-100" aria-label="Breadcrumb">
      <ol class="max-w-7xl mx-auto flex items-center space-x-2 text-[10px] font-black uppercase tracking-widest italic">
        <li>
          <NuxtLink to="/" class="text-red-600 hover:underline">Zentrale</NuxtLink>
        </li>
        <li class="text-gray-400">/</li>
        <li class="text-gray-700 italic">Über den Entwickler</li>
      </ol>
    </nav>

    <header class="relative py-24 md:py-44 bg-gradient-to-br from-red-700 via-red-600 to-red-500 text-white px-6 overflow-hidden">
      <div class="absolute inset-0 opacity-10 pointer-events-none">
        <div class="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div class="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-24">
        <div class="relative group shrink-0">
          <div class="absolute -inset-4 bg-white/20 rounded-[3rem] rotate-6 group-hover:rotate-0 transition-transform duration-700"></div>
          <div class="relative w-56 h-56 md:w-72 md:h-72 bg-gray-900 rounded-[2.5rem] border-4 border-white overflow-hidden shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
             <img
               src="/tobias_kubina.jpeg"
               alt="VelWebSolutions Entwickler"
               class="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
             />
             <div class="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent pointer-events-none"></div>
          </div>
          <div class="absolute -bottom-4 -right-4 bg-red-600 text-white p-4 rounded-2xl shadow-xl rotate-12 group-hover:rotate-0 transition-transform">
             <span class="text-[10px] font-black uppercase tracking-widest italic">Dev_Status: Online</span>
          </div>
        </div>

        <div class="text-center md:text-left">
          <span class="inline-block px-5 py-2 mb-6 rounded-full bg-white text-red-600 text-[10px] font-black uppercase tracking-[0.2em] shadow-xl italic">
            ✓ Informatiker B.Sc.
          </span>
          <h1 class="text-5xl md:text-9xl font-black mb-8 leading-[0.85] tracking-tighter uppercase italic">
            Code mit <br/><span class="text-white/90 underline decoration-white/30 italic">Haltung.</span>
          </h1>
          <p class="text-xl md:text-2xl text-red-50 max-w-2xl leading-relaxed font-medium italic opacity-90">
            Ich entwickle keine "Webseiten". Ich baue digitale Werkzeuge, die Unternehmen skalierbar machen. Technisch präzise, sicher und ohne Kompromisse.
          </p>
        </div>
      </div>
    </header>

    <section class="py-24 px-6 bg-white">
      <div class="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        <div v-for="fact in facts" :key="fact.label" class="p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100 text-center hover:scale-105 transition-transform duration-500 hover:bg-white hover:shadow-xl group">
          <div class="text-[9px] font-black uppercase text-gray-400 tracking-[0.2em] mb-3 italic group-hover:text-red-600">{{ fact.label }}</div>
          <div class="text-2xl font-black text-gray-900 uppercase italic tracking-tighter">{{ fact.value }}</div>
        </div>
      </div>
    </section>

    <section class="py-32 px-6 bg-gray-50 overflow-hidden">
      <div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24 items-center">
        <div>
          <h2 class="text-4xl md:text-7xl font-black mb-12 leading-[0.9] uppercase italic tracking-tighter text-gray-900">Warum ich <br/><span class="text-red-600">anders entwickle.</span></h2>
          <div class="space-y-12">
            <div v-for="wert in werte" :key="wert.titel" class="flex gap-8 group">
              <div class="text-5xl group-hover:scale-125 transition-transform duration-500">{{ wert.emoji }}</div>
              <div>
                <h3 class="text-2xl font-black uppercase italic tracking-tighter mb-3">{{ wert.titel }}</h3>
                <p class="text-gray-600 font-medium italic leading-relaxed text-lg">
                  {{ wert.beschreibung }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="relative group">
          <div class="absolute -inset-6 bg-red-600 rounded-[4rem] rotate-2 opacity-5"></div>
          <div class="relative bg-gray-900 p-12 md:p-16 rounded-[3.5rem] shadow-3xl text-white font-mono overflow-hidden">
            <div class="absolute top-0 right-0 w-64 h-64 bg-red-600/10 blur-[100px]"></div>

            <div class="flex gap-2 mb-10 relative z-10">
              <div class="w-3 h-3 rounded-full bg-red-500"></div>
              <div class="w-3 h-3 rounded-full bg-gray-700"></div>
              <div class="w-3 h-3 rounded-full bg-gray-700"></div>
            </div>
            <div class="space-y-6 text-sm md:text-base relative z-10">
              <p class="text-red-500 italic">// Digitaler Architekt</p>
              <p><span class="text-blue-400">const</span> <span class="text-yellow-400">developer</span> = {</p>
              <p class="pl-6">name: <span class="text-green-400">'VelWebSolutions'</span>,</p>
              <p class="pl-6">focus: [<span class="text-green-400">'Laravel'</span>, <span class="text-green-400">'Vue.js'</span>, <span class="text-green-400">'Infrastruktur'</span>],</p>
              <p class="pl-6">motto: <span class="text-green-400">'Clean Code. High ROI.'</span>,</p>
              <p class="pl-6 text-gray-500 italic">// Wissenschaftlich fundiertes Vorgehen</p>
              <p class="pl-6 text-gray-500 italic">// Optimierung auf Conversion & HCI</p>
              <p><span class="text-white">};</span></p>
            </div>
            <div class="mt-12 pt-12 border-t border-white/10 flex items-center gap-6 relative z-10">
               <div class="w-16 h-1 bg-red-600"></div>
               <div class="text-[10px] uppercase font-black tracking-[0.3em] text-gray-500">System Ready</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-32 px-6 bg-white text-center">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-5xl md:text-9xl font-black mb-12 tracking-tighter uppercase italic leading-[0.8] text-gray-900">
          Lust auf ein <br/><span class="text-red-600 underline decoration-red-600/20">Upgrade?</span>
        </h2>
        <p class="text-2xl text-gray-500 mb-16 italic font-medium max-w-2xl mx-auto">
          Keine Standard-Templates. Keine Kompromisse. Nur echte Informatik für Ihren Erfolg.
        </p>
        <NuxtLink to="/kontakt" class="inline-block px-14 py-8 bg-gray-900 text-white font-black rounded-[2rem] shadow-2xl hover:bg-red-600 transition-all text-2xl uppercase italic tracking-widest">
          Projekt besprechen
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
/**
 * NUXT 3 KONFIGURATION
 */
definePageMeta({
  layout: 'guest' // Nutzt layouts/guest.vue
})

// useHead ist in Nuxt global verfügbar, kein manueller Import nötig
useHead({
  title: 'Über den Entwickler | VelWebSolutions - Informatik & Fullstack',
  meta: [
    { name: 'description', content: 'Informatiker & Fullstack-Entwickler mit Fokus auf Laravel und Vue.js. Erfahren Sie mehr über meine Philosophie.' }
  ]
})

const facts = [
  { label: 'Haupt-Stack', value: 'Laravel / Vue' },
  { label: 'Erfahrung', value: '5+ Jahre' },
  { label: 'Fokus', value: 'Enterprise' },
  { label: 'Standort', value: 'Krefeld' }
]

const werte = [
  {
    emoji: '⚡',
    titel: 'Performance',
    beschreibung: 'Code muss nicht nur funktionieren, er muss performen. Optimierte Ladezeiten und effiziente Algorithmen sind mein Standard, kein Bonus.'
  },
  {
    emoji: '🛡️',
    titel: 'Security-First',
    beschreibung: 'Als Informatiker ist Sicherheit das Fundament. Ich baue Anwendungen, die gegen moderne Bedrohungen gehärtet und DSGVO-konform sind.'
  },
  {
    emoji: '🏗️',
    titel: 'Architektur',
    beschreibung: 'Skalierbare Systeme statt Spaghetticode. Ich baue Lösungen, die auch in Jahren noch wartbar, erweiterbar und wertvoll bleiben.'
  }
]
</script>

<style scoped>
@reference "tailwindcss";

.shadow-3xl {
  box-shadow: 0 40px 80px -15px rgba(0, 0, 0, 0.4);
}
</style>