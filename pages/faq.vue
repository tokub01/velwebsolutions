<template>
  <div class="font-sans text-gray-900 bg-white selection:bg-red-100 selection:text-red-600">

    <header class="relative pt-32 pb-24 md:pt-48 md:pb-40 bg-gradient-to-br from-red-700 via-red-600 to-red-500 text-white px-6 overflow-hidden mt-[81px]">
      <div class="absolute inset-0 opacity-10 pointer-events-none">
        <div class="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div class="relative z-10 max-w-6xl mx-auto text-center">
        <span class="inline-block px-5 py-2 mb-6 rounded-full bg-white text-red-600 text-[10px] font-black uppercase tracking-[0.2em] shadow-xl italic">
          // Engineering_Services.sh
        </span>
        <h1 class="text-5xl md:text-9xl font-black mb-10 leading-[0.85] tracking-tighter uppercase italic">
          Full-Stack <br/><span class="text-white/90 underline decoration-white/30 italic">Engineering.</span>
        </h1>
        <p class="text-xl md:text-2xl text-red-50 max-w-3xl mx-auto leading-relaxed font-medium italic opacity-90">
          Vom ersten Architektur-Entwurf bis zum Deployment: Ich entwickle skalierbare Web-Systeme auf universitärem Niveau.
        </p>
      </div>
    </header>

    <section class="py-24 px-6 max-w-7xl mx-auto">
      <div class="grid lg:grid-cols-2 gap-12 md:gap-16">
        <div v-for="(service, index) in services" :key="service.title"
          class="group p-10 md:p-16 rounded-[3.5rem] border border-gray-100 bg-white hover:bg-gray-50 transition-all duration-700 shadow-sm hover:shadow-2xl relative overflow-hidden">

          <div class="absolute top-0 right-0 p-12 text-8xl font-black text-gray-100 group-hover:text-red-100 transition-colors pointer-events-none italic">
            0{{ index + 1 }}
          </div>

          <div class="relative z-10 space-y-8">
            <div class="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center text-white shadow-lg group-hover:rotate-6 transition-transform">
              <component :is="service.icon" class="w-8 h-8" />
            </div>

            <h2 class="text-3xl md:text-4xl font-black uppercase italic tracking-tighter leading-none">
              {{ service.title }}
            </h2>

            <p class="text-lg text-gray-500 italic font-medium leading-relaxed">
              {{ service.description }}
            </p>

            <ul class="space-y-4">
              <li v-for="feature in service.features" :key="feature" class="flex items-center gap-3 text-sm font-bold uppercase italic tracking-widest text-gray-400 group-hover:text-gray-900 transition-colors">
                <LucideChevronRight class="w-4 h-4 text-red-600" />
                {{ feature }}
              </li>
            </ul>

            <div class="pt-8 border-t border-gray-100">
              <div class="text-[10px] font-black text-red-600 uppercase tracking-widest mb-4 italic">// Tech_Stack</div>
              <div class="flex flex-wrap gap-2">
                <span v-for="tech in service.tech" :key="tech" class="px-4 py-2 bg-gray-100 rounded-xl text-[10px] font-black uppercase tracking-tighter italic text-gray-500">
                  {{ tech }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-32 px-6 bg-gray-900 text-white rounded-[4rem] mx-6 mb-24 relative overflow-hidden">
      <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <h2 class="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-10 leading-none">
            Saubere Architektur <br/><span class="text-red-600">Keine Kompromisse.</span>
          </h2>
          <div class="space-y-8 italic font-medium text-gray-400 text-lg">
            <p>Als Informatiker baue ich keine "Websites". Ich entwickle robuste Software-Infrastrukturen, die mit Ihrem Business wachsen.</p>
            <p>Jedes Projekt folgt dem Prinzip der <span class="text-white">Separation of Concerns</span>, ist vollständig dokumentiert und auf maximale Performance optimiert.</p>
          </div>
        </div>
        <div class="grid grid-cols-2 gap-4">
          <div v-for="stat in stats" :key="stat.label" class="p-8 bg-white/5 border border-white/10 rounded-3xl backdrop-blur-sm">
            <div class="text-3xl font-black text-red-600 mb-1 tracking-tighter italic">{{ stat.value }}</div>
            <div class="text-[10px] font-black uppercase tracking-[0.2em] text-gray-500 italic">{{ stat.label }}</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'guest'
})

useHead({
  title: 'Leistungen & Engineering | VelWebSolutions',
  meta: [{ name: 'description', content: 'Spezialisierte Entwicklung von Laravel Web-Applikationen, Vue.js Interfaces und skalierbaren Cloud-Systemen.' }]
})

const services = [
  {
    title: 'Laravel Backend Engineering',
    description: 'Robuste APIs und komplexe Geschäftslogik. Ich nutze Laravel, um sichere und hochperformante Backend-Systeme zu bauen.',
    icon: 'LucideServer',
    features: ['RESTful & GraphQL APIs', 'Datenbank-Design (MySQL/PostgreSQL)', 'Infrastruktur & Cloud'],
    tech: ['PHP 8.3', 'Laravel', 'Redis', 'Docker']
  },
  {
    title: 'Vue.js Frontend Dev',
    description: 'Reaktive User Interfaces, die sich wie native Apps anfühlen. Fokus auf UX, Speed und sauberes State-Management.',
    icon: 'LucideLayout',
    features: ['Single Page Applications (SPA)', 'Nuxt 3 SSR / SSG', 'Complex State Management'],
    tech: ['Vue.js', 'Nuxt 3', 'Pinia', 'Tailwind CSS']
  },
  {
    title: 'Software Architektur',
    description: 'Planung von Systemen, die auch in 5 Jahren noch wartbar sind. Domain-Driven Design und Clean Code Prinzipien.',
    icon: 'LucideCode2',
    features: ['System-Design Audits', 'Refactoring-Strategien', 'Microservices vs. Monoliths'],
    tech: ['DDD', 'Clean Architecture', 'SOLID', 'TDD']
  },
  {
    title: 'E-Commerce & Portale',
    description: 'Individuelle Shop-Lösungen und Kundenportale, die genau auf Ihre Workflows zugeschnitten sind.',
    icon: 'LucideShoppingCart',
    features: ['Custom Shop-Systeme', 'Zahlungsanbieter-Integration', 'Automatisierung'],
    tech: ['Stripe', 'Laravel Nova', 'Filament', 'ERP-APIs']
  }
]

const stats = [
  { label: 'Uptime_Target', value: '99.9%' },
  { label: 'Code_Coverage', value: '85%+' },
  { label: 'Response_Time', value: '< 100ms' },
  { label: 'Security_Level', value: 'B.Sc. Tech' }
]
</script>

<style scoped>
@reference "tailwindcss";

.shadow-3xl {
  box-shadow: 0 40px 80px -15px rgba(0, 0, 0, 0.1);
}
</style>