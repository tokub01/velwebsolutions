<template>
  <div class="font-sans text-gray-900 bg-white selection:bg-red-100 selection:text-red-600 antialiased overflow-x-hidden">

    <header class="relative pt-24 pb-16 md:pt-48 md:pb-40 bg-gradient-to-br from-red-700 via-red-600 to-red-500 text-white px-4 mt-[60px] md:mt-[80px]">
      <div class="relative z-10 max-w-6xl mx-auto text-center">
        <span class="inline-block px-4 py-1.5 mb-6 rounded-full bg-white text-red-600 text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] shadow-xl italic">
          ✓ Engineering Excellence
        </span>
        <h1 class="text-[clamp(2.1rem,9vw,6rem)] font-[1000] mb-6 leading-[0.95] tracking-tighter uppercase italic">
          Full-Stack <br /><span class="text-white/90 underline decoration-white/30 italic">Substanz.</span>
        </h1>
      </div>
    </header>

    <section class="py-8 bg-gray-900 text-white border-y border-white/10">
      <div class="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div v-for="stat in serviceStats" :key="stat.label">
          <div class="text-2xl md:text-5xl font-[1000] text-red-600 italic tracking-tighter">{{ stat.value }}</div>
          <div class="text-[8px] md:text-[10px] uppercase font-bold text-gray-400 tracking-widest">{{ stat.label }}</div>
        </div>
      </div>
    </section>

    <section class="py-16 md:py-24 bg-red-600 text-white mx-2 rounded-[2.5rem] md:rounded-[4rem] my-12 shadow-2xl relative overflow-hidden">
      <div class="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_center,white_1px,transparent_0)] bg-[size:30px_30px]"></div>
      <div class="max-w-5xl mx-auto px-6 text-center relative z-10">
        <h3 class="text-3xl md:text-5xl font-[1000] uppercase italic tracking-tighter mb-6">Investition in Systemstabilität.</h3>
        <p class="text-red-50 italic font-medium text-lg leading-relaxed mb-4">
          Ein Stundensatz von 125€ garantiert Ihnen Enterprise-Qualität nach ISO-Standards.
        </p>
        <p class="text-red-100/80 text-sm italic max-w-2xl mx-auto">
          Durch saubere Architektur (SOLID) und integrierte QA (PHPUnit/Cypress) senken wir Ihre langfristigen Instandhaltungskosten (TCO) um bis zu 40% gegenüber herkömmlichen Agentur-Lösungen.
        </p>
      </div>
    </section>

    <section class="py-16 md:py-32 px-4 bg-gray-900 text-white rounded-[2.5rem] md:rounded-[4rem] mx-2 mb-12 shadow-3xl overflow-hidden relative">
      <div class="max-w-7xl mx-auto">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div v-for="(module, idx) in detailedModules" :key="idx"
            class="group p-8 md:p-12 bg-white/5 rounded-[2.5rem] border border-white/10 hover:bg-white transition-all duration-500">
            <div class="mb-8 group-hover:text-gray-900">
              <h3 class="text-3xl md:text-4xl font-[1000] uppercase italic tracking-tighter mb-1">{{ module.title }}</h3>
              <p class="text-[10px] font-black uppercase tracking-widest text-red-500 italic">{{ module.subtitle }}</p>
            </div>
            <ul class="space-y-4 mb-12 group-hover:text-gray-600">
              <li v-for="item in module.items" :key="item" class="flex items-start gap-3 italic font-medium text-sm leading-snug">
                <span class="text-red-600 font-black mt-0.5">_</span> {{ item }}
              </li>
            </ul>
            <div class="pt-8 border-t border-white/10 group-hover:border-gray-200">
              <div class="flex items-end justify-between">
                <div>
                  <div class="text-3xl md:text-5xl font-[1000] italic group-hover:text-gray-900 leading-none">{{ module.price }}€</div>
                  <div class="text-[9px] uppercase font-black text-red-500 italic mt-1 group-hover:text-gray-400">Netto / Stunde</div>
                </div>
                <div class="text-[10px] font-black uppercase tracking-widest bg-red-600 text-white px-4 py-1.5 rounded-full italic shadow-lg group-hover:shadow-red-200">
                  Incl. QA
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 md:py-32 bg-white px-4">
      <div class="max-w-7xl mx-auto flex flex-col lg:row gap-16 items-center">
        <div class="lg:w-1/2">
          <h2 class="text-4xl md:text-7xl font-[1000] uppercase italic tracking-tighter mb-8 leading-[0.9] text-gray-900">
            Scalability & <br/><span class="text-red-600 underline decoration-gray-100">Performance.</span>
          </h2>
          <p class="text-gray-500 font-medium italic text-lg leading-relaxed mb-10">
            Ihr System wächst mit Ihrem Erfolg. Wir nutzen Containerisierung und skalierbare Web-Architekturen, damit Ihr ERP auch bei Millionen Datensätzen performant bleibt.
          </p>
          <div class="grid grid-cols-2 gap-4">
            <div v-for="tech in ['Docker', 'Redis', 'Kubernetes', 'AWS Stack']" :key="tech" class="p-5 bg-gray-50 rounded-2xl border border-gray-100 font-black italic text-center uppercase text-[11px] tracking-widest text-gray-900 shadow-sm">{{ tech }}</div>
          </div>
        </div>
        <div class="lg:w-1/2 relative">
          <img src="https://images.unsplash.com/photo-1484417894907-623942c8ee29?q=80&w=1200&auto=format&fit=crop" @error="imageFallback" class="rounded-[3rem] shadow-2xl object-cover aspect-square grayscale" />
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
definePageMeta({ layout: 'guest' })

const serviceStats = [
  { label: 'Unit Tests', value: 'Auto' },
  { label: 'Deploy', value: 'Zero' },
  { label: 'Codebase', value: 'Git' },
  { label: 'Sicherheit', value: '100%' }
]

const detailedModules = [
  { title: 'Architect', subtitle: '// WEB_STRATEGY', price: '145', items: ['Requirement Engineering', 'Daten-Normalisierung', 'Security Konzepte', 'API Design (OpenAPI)'] },
  { title: 'Developer', subtitle: '// CORE_ENGINEERING', price: '125', items: ['Laravel Backend Dev', 'Vue.js Dashboard Dev', 'Automatisierte Tests', 'ERP-Anbindung'] },
  { title: 'Engineer', subtitle: '// WEB_OPERATIONS', price: '110', items: ['CI/CD Automatisierung', 'Cloud Monitoring', 'System-Refactoring', 'LTS-Support'] }
]

const imageFallback = (event) => {
  event.target.src = 'https://placehold.co/1000x1000/111827/white?text=Engineering+Substanz'
}
</script>