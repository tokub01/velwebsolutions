<template>
  <div class="font-sans text-gray-900 bg-white selection:bg-red-100 selection:text-red-600 antialiased overflow-x-hidden">

    <header class="relative pt-24 pb-16 md:pt-48 md:pb-40 bg-gradient-to-br from-red-700 via-red-600 to-red-500 text-white px-4 overflow-hidden mt-[60px] md:mt-[80px]">
      <div class="absolute inset-0 opacity-10 pointer-events-none">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,white_1px,transparent_0)] bg-[size:25px_25px] md:bg-[size:40px_40px]"></div>
      </div>
      <div class="relative z-10 max-w-6xl mx-auto text-center">
        <span class="inline-block px-4 py-1.5 mb-6 rounded-full bg-white text-red-600 text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] shadow-xl italic">
          ✓ Enterprise Web Engineering
        </span>
        <h1 class="text-[clamp(2.1rem,9vw,6rem)] font-[1000] mb-6 leading-[0.95] md:leading-[0.9] tracking-tighter uppercase italic px-1">
          Web. <br />
          <span class="text-white/90 underline decoration-white/30 italic">Engineered.</span>
        </h1>
        <p class="text-base md:text-3xl text-red-50 font-medium max-w-4xl mx-auto leading-relaxed italic opacity-90 px-2">
          Informatik-Expertise für prozesskritische Systeme. <span class="text-white font-black">Laravel & Vue.js</span> auf wissenschaftlichem Niveau.
        </p>
      </div>
    </header>

    <section class="py-8 md:py-12 bg-gray-900 text-white border-y border-white/10 relative z-20">
      <div class="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 text-center">
        <div v-for="stat in billingStats" :key="stat.label">
          <div class="text-2xl md:text-5xl font-[1000] text-red-600 mb-0.5 italic tracking-tighter">{{ stat.value }}</div>
          <div class="text-[8px] md:text-[10px] uppercase font-bold text-gray-400 tracking-widest">{{ stat.label }}</div>
        </div>
      </div>
    </section>

    <section class="py-16 md:py-32 bg-white overflow-hidden border-t border-gray-100">
      <div class="max-w-7xl mx-auto px-4">
        <div class="flex flex-col md:flex-row items-center gap-16">
          <div class="md:w-1/2">
            <h2 class="text-4xl md:text-6xl font-[1000] uppercase italic tracking-tighter mb-8 leading-none text-gray-900">
              Wissenschaft statt <br/><span class="text-red-600">Vague-Coding.</span>
            </h2>
            <div class="space-y-8">
              <div v-for="item in marketingArguments" :key="item.title" class="flex gap-6 group">
                <div class="flex-none w-14 h-14 bg-gray-900 text-red-600 flex items-center justify-center rounded-2xl font-[1000] italic text-xl border border-gray-800 group-hover:bg-red-600 group-hover:text-white transition-all">
                  0{{ item.id }}
                </div>
                <div>
                  <h4 class="font-black uppercase italic text-gray-900 tracking-tight text-lg mb-1">{{ item.title }}</h4>
                  <p class="text-gray-500 text-sm leading-relaxed italic font-medium">{{ item.desc }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="md:w-1/2 relative">
            <div class="absolute inset-0 bg-red-600 rounded-[3rem] translate-x-4 translate-y-4 opacity-10"></div>
            <img
              src="https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?q=80&w=1000&auto=format&fit=crop"
              alt="Scientific Software Engineering"
              @error="imageFallback"
              class="relative z-10 rounded-[3rem] shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 object-cover aspect-square"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 md:py-32 px-4 bg-gray-50 border-y border-gray-100">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-4xl md:text-6xl font-[1000] uppercase italic tracking-tighter mb-16 text-center">The <span class="text-red-600">Stack.</span></h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div v-for="item in techGrid" :key="item.title" class="group bg-white rounded-[2.5rem] border border-gray-100 shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500">
            <div class="h-64 overflow-hidden relative">
              <img :src="item.img" :alt="item.title" @error="imageFallback" class="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700" />
            </div>
            <div class="p-10">
              <div class="text-[9px] font-black text-red-600 uppercase tracking-widest mb-4 italic">{{ item.tag }}</div>
              <h3 class="text-2xl font-[1000] uppercase italic mb-4 text-gray-900 group-hover:text-red-600 transition-colors">{{ item.title }}</h3>
              <p class="text-gray-500 text-sm italic font-medium leading-relaxed">{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
definePageMeta({ layout: 'guest' })

const billingStats = [
  { label: 'Methodik', value: 'MVC' },
  { label: 'Core Stack', value: 'Laravel' },
  { label: 'UI Library', value: 'Vue 3' },
  { label: 'Standards', value: 'IEEE' }
]

const marketingArguments = [
  { id: 1, title: 'Clean Architecture', desc: 'Wir trennen Business-Logik von der Darstellung. Das garantiert Wartbarkeit über Jahrzehnte statt technischer Schulden nach 6 Monaten.' },
  { id: 2, title: 'Automated QA (TDD)', desc: 'Unit- & Feature-Tests sichern jede Zeile Code ab. Refactoring und Updates werden dadurch risikofrei und kalkulierbar.' },
  { id: 3, title: 'Requirement Engineering', desc: 'Keine Fehlentwicklungen. Wir nutzen wissenschaftliche Methoden zur Prozess-Analyse, bevor die erste Zeile Code geschrieben wird.' }
]

const techGrid = [
  { tag: '// Backend', title: 'Laravel Kernel', img: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop', desc: 'Transaktionssichere Business-Logik und skalierbare Datenbank-Modellierung.' },
  { tag: '// Frontend', title: 'Vue.js SPA', img: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=800&auto=format&fit=crop', desc: 'Hochreaktive Interfaces mit modernem State-Management für maximale UX.' },
  { tag: '// Infrastructure', title: 'Web Ops', img: 'https://images.unsplash.com/photo-1451187534963-1d1911700b3d?q=80&w=800&auto=format&fit=crop', desc: 'Containerisierung und CI/CD Pipelines für ausfallsicheres Deployment.' }
]

const imageFallback = (event) => {
  event.target.src = 'https://placehold.co/1000x1000/111827/white?text=Informatik+Substanz'
}
</script>