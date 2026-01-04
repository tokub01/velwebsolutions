<template>
  <div class="font-sans text-gray-900 bg-white selection:bg-red-600 selection:text-white antialiased overflow-x-hidden">

    <header class="relative pt-12 pb-8 md:pt-44 md:pb-40 bg-red-600 text-white px-3 overflow-hidden">
      <div class="absolute inset-0 opacity-10 pointer-events-none bg-[radial-gradient(circle_at_2px_2px,white_1px,transparent_0)] bg-[size:18px_18px] md:bg-[size:32px_32px]"></div>

      <div class="relative z-10 max-w-7xl mx-auto text-center">
        <div class="inline-flex items-center gap-1.5 px-2.5 py-1 mb-5 rounded-full bg-white/10 border border-white/20 text-[7px] md:text-[10px] font-black uppercase tracking-widest italic backdrop-blur-sm">
          <span class="relative flex h-1.5 w-1.5">
            <span class="animate-ping absolute h-full w-full rounded-full bg-white opacity-75"></span>
            <span class="relative h-1.5 w-1.5 rounded-full bg-white"></span>
          </span>
          Engineering Rates 2026
        </div>

        <h1 class="text-[clamp(1.75rem,11.5vw,7.5rem)] font-[1000] mb-4 leading-[0.85] tracking-tighter uppercase italic">
          Software mit <br />
          <span class="text-gray-900 underline decoration-gray-900/10 underline-offset-[4px] md:underline-offset-[16px]">Festpreis-Logik.</span>
        </h1>

        <p class="text-[13px] md:text-2xl text-white/95 font-medium max-w-2xl mx-auto leading-tight italic mb-8 px-1">
          Sauberes Engineering zum transparenten Honorar.
        </p>

        <NuxtLink to="/kontakt" class="inline-block w-full sm:w-auto bg-gray-900 text-white px-8 py-4 rounded-xl font-black text-sm md:text-lg uppercase italic shadow-2xl active:scale-95 transition-transform">
          Projekt anfragen
        </NuxtLink>
      </div>
    </header>

    <section class="relative z-20 -mt-4 md:-mt-10 px-3">
      <div class="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-1.5 md:gap-4">
        <div v-for="unit in matrixUnits" :key="unit.label" class="bg-white p-2.5 md:p-8 rounded-xl md:rounded-[2.5rem] shadow-xl border border-gray-50 flex flex-col justify-between hover:border-red-600 transition-all group">
          <span class="text-[6px] md:text-[9px] font-black text-gray-400 uppercase italic tracking-widest mb-1 md:mb-2 group-hover:text-red-600 transition-colors">{{ unit.label }}</span>
          <div>
            <div class="text-[15px] md:text-3xl font-[1000] italic text-gray-900 leading-none">{{ unit.netto }}€</div>
            <div class="text-[6px] md:text-[10px] font-bold text-gray-400 italic mt-0.5 uppercase tracking-tighter">Netto</div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-10 md:py-32 px-3">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-8 md:mb-20">
          <span class="text-red-600 font-black uppercase tracking-[0.2em] text-[8px] md:text-[10px] mb-2 block italic">// Leistungen</span>
          <h2 class="text-xl md:text-7xl font-[1000] uppercase italic tracking-tighter leading-none">Honorarkatalog</h2>
        </div>

        <div class="space-y-3 md:space-y-10">
          <div v-for="(phase, idx) in phases" :key="idx"
            :class="[
              'group relative p-4 md:p-12 rounded-2xl md:rounded-[4rem] border-l-[4px] md:border-l-[16px] flex flex-col lg:flex-row gap-4 md:gap-12 transition-all',
              phase.dark ? 'bg-gray-900 text-white border-red-600 shadow-2xl' : 'bg-gray-50 border-gray-200'
            ]">

            <div class="flex-grow order-2 lg:order-1">
              <span :class="['text-[7px] md:text-[10px] font-black uppercase tracking-widest italic mb-1 block', phase.dark ? 'text-red-500' : 'text-red-600']">
                0{{ idx + 1 }} / {{ phase.subtitle }}
              </span>
              <h3 class="text-base md:text-4xl font-[1000] uppercase italic mb-2 tracking-tight leading-tight">{{ phase.title }}</h3>
              <p :class="['text-[11px] md:text-base italic mb-4 leading-snug opacity-80', phase.dark ? 'text-gray-300' : 'text-gray-600']">
                {{ phase.description }}
              </p>
            </div>

            <div :class="['order-1 lg:order-2 shrink-0 p-3.5 md:p-10 rounded-xl md:rounded-[3rem] text-center border lg:min-w-[220px]',
                          phase.dark ? 'bg-white/5 border-white/10' : 'bg-white border-gray-100 shadow-sm']">
              <div class="text-xl md:text-5xl font-[1000] italic leading-none">{{ phase.price }}€</div>
              <div class="text-[7px] md:text-[10px] font-black opacity-40 uppercase italic mt-0.5">Netto / Std.</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-12 md:py-32 bg-gray-900 text-white overflow-hidden">
      <div class="max-w-7xl mx-auto px-4">
        <h2 class="text-2xl md:text-8xl font-[1000] mb-6 leading-[0.85] uppercase italic tracking-tighter">System <br class="md:hidden"/><span class="text-red-600">Architektur.</span></h2>

        <div class="flex overflow-x-auto snap-x snap-mandatory gap-3 pb-6 no-scrollbar -mx-4 px-4 lg:grid lg:grid-cols-2 lg:gap-24">
          <div v-for="erp in erpFeatures" :key="erp.title" class="min-w-[70vw] lg:min-w-0 snap-center p-4 bg-white/5 rounded-xl border border-white/10 flex justify-between items-center">
            <div>
              <h4 class="font-black uppercase italic tracking-tighter text-white text-[10px] md:text-base">{{ erp.title }}</h4>
              <p class="text-gray-500 text-[8px] md:text-xs italic">{{ erp.desc }}</p>
            </div>
            <span class="text-lg">{{ erp.icon }}</span>
          </div>
        </div>
      </div>
    </section>

    <section class="py-8 md:py-40 px-3 text-center">
      <div class="max-w-4xl mx-auto bg-gray-900 p-6 md:p-24 rounded-2xl md:rounded-[5rem] text-white shadow-3xl">
        <h3 class="text-xl md:text-[4.5rem] font-[1000] mb-6 italic uppercase tracking-tighter leading-none">
          Ready for <br/><span class="text-red-600 text-3xl md:text-[6rem]">Success?</span>
        </h3>
        <NuxtLink to="/kontakt" class="inline-block w-full bg-red-600 text-white px-8 py-4 rounded-lg font-black text-sm uppercase italic active:scale-95 transition-transform">
          Anfrage starten
        </NuxtLink>
      </div>
    </section>

  </div>
</template>

<script setup>
definePageMeta({ layout: 'guest' })

const matrixUnits = [
  { label: 'Std.', netto: '125' },
  { label: 'Tag', netto: '1.000' },
  { label: 'Woche', netto: '5.000' },
  { label: 'Monat', netto: '20.000' }
]

const phases = [
  {
    subtitle: 'Planung', title: 'Consulting', price: '145', dark: false,
    description: 'Bedarfsanalyse für komplexe Systeme.'
  },
  {
    subtitle: 'Code', title: 'Engineering', price: '125', dark: true,
    description: 'High-End Laravel & Vue.js Entwicklung.'
  },
  {
    subtitle: 'Support', title: 'Wartung', price: '110', dark: false,
    description: 'Regelmäßige Updates & Security-Checks.'
  }
]

const erpFeatures = [
  { title: 'Invoicing', desc: 'Automatisierte Finanzen.', icon: '💰' },
  { title: 'Stock', desc: 'Lager in Echtzeit.', icon: '📦' },
  { title: 'CRM', desc: 'Digitale Kundenakte.', icon: '👥' }
]
</script>

<style scoped>
/* Versteckt Scrollbars für den horizontalen Swipe-Bereich auf Mobile */
.no-scrollbar::-webkit-scrollbar { display: none; }
.no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }

.shadow-3xl { box-shadow: 0 20px 40px -10px rgba(0, 0, 0, 0.5); }
</style>