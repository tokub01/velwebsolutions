<template>
  <div class="font-sans text-gray-900 bg-white selection:bg-red-100 selection:text-red-600 antialiased overflow-x-hidden">

    <header class="relative pt-24 pb-16 md:pt-48 md:pb-40 bg-gradient-to-br from-red-700 via-red-600 to-red-500 text-white px-4 overflow-hidden mt-[60px] md:mt-[80px]">
      <div class="absolute inset-0 opacity-10 pointer-events-none">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,white_1px,transparent_0)] bg-[size:25px_25px] md:bg-[size:40px_40px]"></div>
      </div>

      <div class="relative z-10 max-w-6xl mx-auto text-center">
        <span class="inline-block px-4 py-1.5 mb-6 rounded-full bg-white text-red-600 text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] shadow-xl italic">
          ✓ Transparente IT-Honorare
        </span>
        <h1 class="text-[clamp(2.1rem,9vw,6rem)] font-[1000] mb-6 leading-[0.95] md:leading-[0.9] tracking-tighter uppercase italic px-1">
          Engineering. <br />
          <span class="text-white/90 underline decoration-white/30 italic">Kalkuliert.</span>
        </h1>
        <p class="text-base md:text-3xl text-red-50 font-medium max-w-3xl mx-auto leading-relaxed italic opacity-90 px-2 mb-10">
          Professionelle Software-Entwicklung mit klarer Preisstruktur. Wissenschaftlich fundiert, technisch präzise.
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

    <section class="py-16 md:py-32 px-4 bg-gray-50 border-b border-gray-100">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-12 md:mb-24">
          <h2 class="text-[clamp(1.75rem,8vw,4rem)] md:text-6xl font-[1000] mb-6 uppercase italic tracking-tighter leading-tight">
            Kalkulations-<br />
            <span class="text-red-600">Einheiten.</span>
          </h2>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8">
          <div v-for="unit in matrixUnits" :key="unit.label"
            class="group bg-white p-6 md:p-10 rounded-[2.5rem] border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500">
            <div class="text-[9px] font-black text-red-600 uppercase tracking-widest mb-4 italic">{{ unit.label }}</div>

            <div class="flex flex-row sm:flex-col justify-between items-end sm:items-start gap-2">
              <div>
                <div class="text-3xl md:text-5xl font-[1000] italic text-gray-900 tracking-tighter leading-none">
                  {{ unit.netto }}€
                </div>
                <div class="text-[8px] font-bold text-gray-400 uppercase tracking-widest mt-1">Netto</div>
              </div>

              <div class="pt-0 sm:pt-6 sm:border-t border-gray-50 text-right sm:text-left">
                <div class="text-lg md:text-2xl font-[1000] italic text-red-600 leading-none">
                  {{ calculateBrutto(unit.netto) }}€
                </div>
                <div class="text-[8px] font-bold text-gray-400 uppercase tracking-widest mt-1">Brutto</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 md:py-32 px-4 bg-gray-900 text-white rounded-[2.5rem] md:rounded-[4rem] mx-2 shadow-3xl overflow-hidden relative">
      <div class="max-w-7xl mx-auto relative z-10">
        <div class="text-center md:text-left mb-16 px-2">
          <h2 class="text-3xl md:text-8xl font-[1000] uppercase italic tracking-tighter leading-[0.9]">Service <br/><span class="text-red-600">Specs.</span></h2>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-10">
          <div v-for="(module, idx) in pricingModules" :key="idx"
            class="group p-6 md:p-12 bg-white/5 rounded-[2.5rem] border border-white/10 hover:bg-white transition-all duration-500">

            <div class="mb-8 group-hover:text-gray-900">
              <h3 class="text-2xl md:text-4xl font-[1000] uppercase italic tracking-tighter mb-1">{{ module.title }}</h3>
              <p class="text-[10px] font-black uppercase tracking-widest text-red-500 italic">{{ module.subtitle }}</p>
            </div>

            <ul class="space-y-4 mb-10 text-left group-hover:text-gray-600">
              <li v-for="item in module.items" :key="item" class="flex items-start gap-3 italic font-medium text-xs md:text-base leading-snug">
                <span class="text-red-600 font-black mt-0.5">_</span>
                {{ item }}
              </li>
            </ul>

            <div class="pt-6 border-t border-white/10 group-hover:border-gray-200 group-hover:text-gray-900 transition-all">
              <div class="text-2xl md:text-3xl font-[1000] italic tracking-tighter">
                {{ module.price }}€ <span class="text-[10px] opacity-40 uppercase tracking-widest">/ Std.</span>
              </div>
              <div class="text-[10px] font-mono text-red-500 mt-1 font-bold">
                = {{ calculateBrutto(module.price) }}€ inkl. MwSt.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 md:py-32 px-4 text-center">
      <div class="max-w-4xl mx-auto bg-gray-900 p-8 md:p-20 rounded-[2.5rem] md:rounded-[4rem] text-white shadow-3xl relative overflow-hidden">
        <div class="relative z-10">
          <h3 class="text-[clamp(1.5rem,7vw,4rem)] font-[1000] mb-6 italic uppercase tracking-tighter leading-[1]">
            Projekt <br/>
            <span class="text-red-600 block mt-1 underline decoration-white/20">Initialisieren.</span>
          </h3>
          <p class="text-gray-400 text-sm md:text-xl font-medium italic leading-relaxed mb-8 px-4">
            Lassen Sie uns Ihre System-Architektur besprechen und ein faires Angebot erstellen.
          </p>
          <NuxtLink to="/kontakt" class="inline-block w-full sm:w-auto bg-red-600 text-white px-8 py-5 rounded-xl font-black text-base md:text-xl hover:bg-white hover:text-red-600 transition-all shadow-xl uppercase italic active:scale-95">
            Anfrage stellen
          </NuxtLink>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
definePageMeta({ layout: 'guest' })

const calculateBrutto = (nettoStr) => {
  const netto = parseFloat(nettoStr.replace('.', '').replace(',', '.'))
  const brutto = netto * 1.19
  return brutto.toLocaleString('de-DE', { minimumFractionDigits: 2, maximumFractionDigits: 2 })
}

const billingStats = [
  { label: 'Abrechnung', value: 'Exakt' },
  { label: 'Taktung', value: '15m' },
  { label: 'Bezahlung', value: 'SEPA' },
  { label: 'Support', value: 'Direkt' }
]

const matrixUnits = [
  { label: '// Stunde (Basis)', netto: '125' },
  { label: '// Tag (8h)', netto: '1.000' },
  { label: '// Sprint (5d)', netto: '5.000' },
  { label: '// Monat', netto: '20.000' }
]

const pricingModules = [
  {
    title: 'Consulting',
    subtitle: '// System_Design',
    price: '145',
    items: ['Requirements Engineering', 'Software-Architektur (ERD)', 'Cloud-Infrastruktur Planung']
  },
  {
    title: 'Engineering',
    subtitle: '// Code_Execution',
    price: '125',
    items: ['Laravel Backend (PHP 8.x)', 'Vue.js Frontend (SPA)', 'API & Schnittstellen-Dev']
  },
  {
    title: 'Maintenance',
    subtitle: '// Kernel_Support',
    price: '110',
    items: ['Incident-Management', 'Sicherheits- & Kern-Updates', 'Performance-Überwachung']
  }
]
</script>

<style scoped>
.shadow-3xl {
  box-shadow: 0 35px 60px -15px rgba(0, 0, 0, 0.5);
}
</style>