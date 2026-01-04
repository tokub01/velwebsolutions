<template>
  <div class="font-sans text-gray-900 bg-white selection:bg-red-600 selection:text-white antialiased overflow-x-hidden">

    <header class="relative pt-20 pb-12 md:pt-44 md:pb-40 bg-red-600 text-white px-4 overflow-hidden">
      <div class="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_2px_2px,white_1px,transparent_0)] bg-[size:24px_24px] md:bg-[size:32px_32px]"></div>

      <div class="relative z-10 max-w-7xl mx-auto text-center">
        <div class="inline-flex items-center gap-2 px-3 py-1.5 mb-6 rounded-full bg-white/10 border border-white/20 text-[8px] md:text-[10px] font-black uppercase tracking-widest italic backdrop-blur-sm">
          <span class="flex h-1.5 w-1.5">
            <span class="animate-ping absolute h-1.5 w-1.5 rounded-full bg-white opacity-75"></span>
            <span class="relative h-1.5 w-1.5 rounded-full bg-white"></span>
          </span>
          Engineering Rates 2026
        </div>

        <h1 class="text-[clamp(2.2rem,11vw,7.5rem)] font-[1000] mb-6 leading-[0.85] tracking-tighter uppercase italic">
          Software mit <br />
          <span class="text-gray-900 underline decoration-gray-900/10 underline-offset-[8px] md:underline-offset-[16px]">Festpreis-Logik.</span>
        </h1>

        <p class="text-base md:text-2xl text-white/90 font-medium max-w-3xl mx-auto leading-tight italic mb-10 px-2">
          Keine Blackbox. Nur sauberes Engineering zum transparenten Honorar.
        </p>

        <NuxtLink to="/kontakt" class="inline-block w-full sm:w-auto bg-gray-900 text-white px-10 py-5 rounded-2xl font-black text-base md:text-lg uppercase italic shadow-2xl active:scale-95 transition-transform">
          Projekt anfragen
        </NuxtLink>
      </div>
    </header>

    <section class="relative z-20 -mt-6 md:-mt-10 px-4">
      <div class="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-2 md:gap-4">
        <div v-for="unit in matrixUnits" :key="unit.label" class="bg-white p-4 md:p-8 rounded-[1.5rem] md:rounded-[2.5rem] shadow-xl border border-gray-100 flex flex-col justify-between hover:border-red-600 transition-all group">
          <span class="text-[7px] md:text-[9px] font-black text-gray-400 uppercase italic tracking-widest mb-3 group-hover:text-red-600 transition-colors">{{ unit.label }}</span>
          <div>
            <div class="text-lg md:text-3xl font-[1000] italic text-gray-900 leading-none">{{ unit.netto }}€</div>
            <div class="text-[8px] md:text-[10px] font-bold text-gray-400 italic mt-1.5">{{ unit.brutto }}€ <span class="hidden sm:inline">inkl. MwSt.</span></div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 md:py-32 px-4">
      <div class="max-w-5xl mx-auto">
        <div class="text-center mb-12 md:mb-20">
          <span class="text-red-600 font-black uppercase tracking-[0.2em] text-[9px] md:text-[10px] mb-3 block italic">// Honorar-Struktur</span>
          <h2 class="text-3xl md:text-7xl font-[1000] uppercase italic tracking-tighter leading-none">Leistungskatalog</h2>
        </div>

        <div class="space-y-4 md:space-y-10">
          <div v-for="(phase, idx) in phases" :key="idx"
            :class="[
              'group relative p-6 md:p-12 rounded-[2rem] md:rounded-[4rem] border-l-[6px] md:border-l-[16px] flex flex-col lg:flex-row lg:items-center gap-6 md:gap-12 transition-all',
              phase.dark ? 'bg-gray-900 text-white border-red-600 shadow-2xl' : 'bg-gray-50 border-gray-200'
            ]">

            <div class="flex-grow order-2 lg:order-1">
              <span :class="['text-[9px] md:text-[10px] font-black uppercase tracking-widest italic mb-2 block', phase.dark ? 'text-red-500' : 'text-red-600']">
                0{{ idx + 1 }} / {{ phase.subtitle }}
              </span>
              <h3 class="text-xl md:text-4xl font-[1000] uppercase italic mb-3 md:mb-5 tracking-tight">{{ phase.title }}</h3>
              <p :class="['text-sm md:text-base italic mb-6 leading-relaxed opacity-80 max-w-2xl', phase.dark ? 'text-gray-300' : 'text-gray-600']">
                {{ phase.description }}
              </p>
              <div class="grid grid-cols-2 gap-x-4 gap-y-2">
                <div v-for="b in phase.bullets" :key="b" class="text-[9px] md:text-[11px] font-bold uppercase italic tracking-tight opacity-50 flex items-center gap-1.5">
                  <span class="text-red-600">»</span> {{ b }}
                </div>
              </div>
            </div>

            <div :class="['order-1 lg:order-2 shrink-0 p-5 md:p-10 rounded-[1.5rem] md:rounded-[3rem] text-center border lg:min-w-[220px]',
                          phase.dark ? 'bg-white/5 border-white/10' : 'bg-white border-gray-100 shadow-sm']">
              <div class="text-3xl md:text-5xl font-[1000] italic leading-none">{{ phase.price }}€</div>
              <div class="text-[8px] md:text-[10px] font-black opacity-40 uppercase italic mt-1 tracking-widest">Netto / Std.</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 md:py-32 bg-gray-900 text-white md:rounded-[5rem] mx-0 md:mx-4 overflow-hidden">
      <div class="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 md:gap-24 items-center">
        <div>
          <h2 class="text-4xl md:text-8xl font-[1000] mb-6 leading-[0.85] uppercase italic tracking-tighter">CRM & ERP <br class="hidden sm:block"/><span class="text-red-600">Lösungen.</span></h2>
          <p class="text-base md:text-xl text-gray-400 mb-10 italic font-medium leading-relaxed max-w-xl">
            Individuelle Dashboards und automatisierte Workflows. Kein Standard, sondern maßgeschneiderter Code.
          </p>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div v-for="erp in erpFeatures" :key="erp.title" class="p-5 bg-white/5 rounded-2xl border border-white/10">
              <h4 class="font-black uppercase italic tracking-tighter text-white text-sm md:text-base mb-1">{{ erp.title }}</h4>
              <p class="text-gray-500 text-[10px] md:text-xs italic">{{ erp.desc }}</p>
            </div>
          </div>
        </div>

        <div class="relative bg-white/5 p-6 md:p-12 rounded-[2.5rem] border border-white/10 backdrop-blur-sm">
          <h4 class="text-lg font-black uppercase italic text-red-500 mb-6 tracking-tighter">// Methodik</h4>
          <div class="space-y-4">
            <div v-for="g in ['Jira-Abrechnung', 'Clean Code', 'CI/CD Pipelines', 'Source-Code Transfer']" :key="g" class="flex items-center gap-3 text-[10px] md:text-xs font-black uppercase italic tracking-widest">
              <span class="h-4 w-4 bg-red-600 rounded flex items-center justify-center text-[8px]">✓</span>
              {{ g }}
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 md:py-40 px-4 text-center">
      <div class="max-w-4xl mx-auto bg-gray-900 p-8 md:p-24 rounded-[2.5rem] md:rounded-[5rem] text-white shadow-3xl relative overflow-hidden">
        <h3 class="relative z-10 text-[clamp(1.8rem,7vw,4.5rem)] font-[1000] mb-8 italic uppercase tracking-tighter leading-none">
          Bereit für <br/><span class="text-red-600">High-End?</span>
        </h3>
        <NuxtLink to="/kontakt" class="relative z-10 inline-block w-full sm:w-auto bg-red-600 text-white px-12 py-5 rounded-xl font-black text-lg uppercase italic shadow-xl hover:bg-white hover:text-red-600 transition-all">
          Jetzt anfragen
        </NuxtLink>
      </div>
    </section>

  </div>
</template>

<script setup>
definePageMeta({ layout: 'guest' })

const matrixUnits = [
  { label: 'Stunde', netto: '125', brutto: '148,75' },
  { label: 'Tag (8h)', netto: '1.000', brutto: '1.190' },
  { label: 'Woche', netto: '5.000', brutto: '5.950' },
  { label: 'Monat', netto: '20.000', brutto: '23.800' }
]

const phases = [
  {
    subtitle: 'Consulting', title: 'Strategie', price: '145', dark: false,
    description: 'Architektur-Entwurf und Bedarfsanalyse für komplexe Systeme.',
    bullets: ['Architecture', 'API Specs', 'Database', 'Cloud']
  },
  {
    subtitle: 'Engineering', title: 'Entwicklung', price: '125', dark: true,
    description: 'Hochperformante Umsetzung mit Laravel und Vue.js.',
    bullets: ['Laravel', 'Vue.js', 'Testing', 'Security']
  },
  {
    subtitle: 'Maintenance', title: 'Wartung', price: '110', dark: false,
    description: 'Werterhalt und Monitoring Ihrer Applikation.',
    bullets: ['Updates', 'Monitoring', 'Backups', 'Hotfixes']
  }
]

const erpFeatures = [
  { title: 'Finanzen', desc: 'Invoicing & Export.' },
  { title: 'Lager', desc: 'Real-time Stock.' },
  { title: 'Analytics', desc: 'KPI Dashboards.' },
  { title: 'CRM', desc: 'Customer History.' }
]

const techFears = [
  { i: '🛡️', t: 'Wartung', d: 'Sicherheit & Updates.' },
  { i: '💬', t: 'Support', d: 'Direkter Kontakt.' }
]
</script>

<style scoped>
.shadow-3xl { box-shadow: 0 40px 80px -15px rgba(0, 0, 0, 0.5); }
</style>