<template>
  <div class="font-sans text-gray-900 bg-white selection:bg-red-100 selection:text-red-600 antialiased overflow-x-hidden">

    <header class="relative min-h-[70vh] flex items-center pt-24 pb-12 md:pt-32 md:pb-32 bg-gradient-to-br from-red-700 via-red-600 to-red-500 text-white px-4 sm:px-6 overflow-hidden mt-[72px] lg:mt-[81px]">
      <div class="absolute inset-0 opacity-10 pointer-events-none">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,white_1px,transparent_0)] bg-[size:40px_40px]"></div>
      </div>

      <div class="relative z-10 max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-12 items-center">
        <div class="lg:col-span-8 text-left order-2 lg:order-1">
          <div class="mb-6">
            <span class="inline-flex items-center px-4 py-1.5 rounded-full bg-white text-red-600 text-[10px] font-black uppercase tracking-[0.2em] shadow-xl italic">
              <span class="w-2 h-2 bg-red-600 rounded-full mr-2 animate-pulse"></span>
              Informatiker B.Sc. | Software Architecture
            </span>
          </div>

          <h1 class="text-4xl sm:text-6xl md:text-7xl font-[1000] leading-[0.95] tracking-tighter uppercase italic mb-8">
            Engineering <br />
            <span class="text-white/90 underline decoration-white/20 italic">Authority.</span>
          </h1>

          <div class="max-w-2xl border-l-4 border-white/30 pl-6 md:pl-8 mb-10">
            <p class="text-lg md:text-2xl text-red-50 font-semibold italic leading-snug">
              Ich konzipiere hochperformante Software-Systeme. Meine Leidenschaft: <span class="text-white underline decoration-red-400">Skalierbare Architekturen</span>, die durch Präzision und sauberen Code überzeugen.
            </p>
          </div>

          <div class="flex flex-wrap gap-3">
             <div class="tech-badge">Laravel_Core</div>
             <div class="tech-badge">Vue_Architect</div>
             <div class="tech-badge">Clean_Code</div>
          </div>
        </div>

        <div class="lg:col-span-4 order-1 lg:order-2 flex justify-center lg:justify-end">
          <div class="relative w-full max-w-[260px] md:max-w-[340px] aspect-square group">
            <div class="absolute -inset-4 border-2 border-white/20 rounded-[2.5rem] rotate-3 group-hover:rotate-1 transition-transform duration-500"></div>

            <div class="relative w-full h-full bg-gray-950 rounded-[2rem] border-4 border-white overflow-hidden shadow-2xl">
               <img
                  src="/tobias_kubina.jpeg"
                  alt="Tobias Kubina"
                  class="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                  @error="handleImageError"
               />
               <div class="absolute inset-0 bg-gradient-to-t from-gray-900/40 via-transparent to-transparent"></div>
            </div>

            <div class="absolute -bottom-4 -right-2 bg-white text-red-600 px-4 py-2 rounded-xl shadow-xl border border-red-50 rotate-3 group-hover:rotate-0 transition-all">
               <span class="block text-[8px] font-black uppercase tracking-widest text-gray-400 italic">Status</span>
               <span class="text-sm font-black uppercase italic leading-none">Online & Deploying</span>
            </div>
          </div>
        </div>
      </div>
    </header>

    <section class="py-12 bg-gray-900 text-white border-b border-white/10">
      <div class="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div v-for="stat in stats" :key="stat.label">
          <div class="text-3xl md:text-5xl font-black text-red-600 mb-1 italic tracking-tighter">{{ stat.value }}</div>
          <div class="text-[10px] uppercase font-bold text-gray-400 tracking-widest">{{ stat.label }}</div>
        </div>
      </div>
    </section>

    <section class="py-24 px-6 bg-gray-50 border-b border-gray-100 text-center">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-4xl md:text-6xl font-black mb-8 uppercase italic tracking-tighter leading-[0.9]">
          Schluss mit Zettelwirtschaft <br /><span class="text-red-600 text-3xl md:text-5xl">und Excel-Chaos.</span>
        </h2>
        <p class="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium italic">
          Ich entwickle digitale Werkzeuge, die Ordnung in Ihren Betrieb bringen. Vom intelligenten Kunden-Archiv bis zur Firmen-Steuerung – alles einfach bedienbar und genau auf Ihren Alltag zugeschnitten.
        </p>
      </div>
    </section>

    <section class="py-32 px-6 bg-white overflow-hidden">
      <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        <div>
          <span class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-red-50 text-red-700 font-black text-[10px] mb-8 uppercase tracking-widest border border-red-100 italic">
            // Digitale Kundenverwaltung (CRM)
          </span>
          <h2 class="text-4xl md:text-7xl font-black mb-8 leading-[0.9] uppercase italic tracking-tighter">Das Gedächtnis <br/><span class="text-red-600">Ihrer Firma.</span></h2>
          <p class="text-xl text-gray-600 mb-10 leading-relaxed font-medium italic">
            Ein CRM ist wie ein digitales Archiv für alle Ihre Kontakte. Ich entwickle für Sie ein System, in dem Sie auf Knopfdruck sehen, was Sie wann mit welchem Kunden besprochen haben.
          </p>
          <ul class="space-y-6">
            <li v-for="benefit in crmBenefits" :key="benefit.title" class="flex items-start gap-4">
              <span class="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0 text-white font-bold text-xs italic">✓</span>
              <p class="text-gray-700 italic font-medium"><strong>{{ benefit.title }}:</strong> {{ benefit.text }}</p>
            </li>
          </ul>
        </div>
        <div class="relative bg-gray-900 p-8 rounded-[3rem] shadow-3xl text-white font-mono border border-white/5">
           <div class="flex gap-2 mb-8">
             <div class="w-3 h-3 rounded-full bg-red-500"></div>
             <div class="w-3 h-3 rounded-full bg-gray-800"></div>
           </div>
           <p class="text-red-500 italic font-bold mb-4">// Efficiency_Engine.php</p>
           <p class="text-blue-400">public function <span class="text-yellow-400">optimizeBusiness</span>() {</p>
           <p class="pl-6 text-gray-400">$this->automate(Routine_Tasks::class);</p>
           <p class="pl-6 text-gray-400">$this->sync(Customer_Data::all());</p>
           <p class="text-blue-400">}</p>
        </div>
      </div>
    </section>

    <section class="py-32 px-6 bg-white text-center">
      <div class="max-w-4xl mx-auto bg-gray-900 p-12 md:p-20 rounded-[3rem] md:rounded-[4rem] text-white shadow-3xl relative overflow-hidden">
        <h3 class="text-4xl md:text-7xl font-black mb-8 italic uppercase tracking-tighter leading-none">Unverbindlich <br/><span class="text-red-600">Anfragen.</span></h3>
        <NuxtLink to="/kontakt" class="inline-block bg-red-600 text-white px-10 py-6 rounded-2xl font-black text-xl hover:bg-white hover:text-red-600 transition-all uppercase italic transform hover:scale-105 shadow-2xl">
          Beratungs-Termin
        </NuxtLink>
      </div>
    </section>

  </div>
</template>

<script setup>
definePageMeta({ layout: 'guest' })

const handleImageError = (e) => {
  console.error("Bild-Ladeprozess fehlgeschlagen. Pfad prüfen.");
}

const stats = [
  { label: 'Einfachheit', value: '100%' },
  { label: 'Erreichbarkeit', value: 'Direkt' },
  { label: 'Technik', value: 'Modern' },
  { label: 'Beratung', value: 'Ehrlich' }
]

const crmBenefits = [
  { title: 'Zentralisierung', text: 'Alle Telefonnummern und Notizen sortiert in einer digitalen Akte.' },
  { title: 'Automatisierung', text: 'Das System erinnert Sie automatisch an wichtige Rückrufe.' },
  { title: 'Einfache Suche', text: 'Finden Sie jeden Kontakt und jede Absprache in Sekunden.' }
]
</script>

<style scoped>
@reference "tailwindcss";

.tech-badge {
  @apply px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl text-[10px] md:text-[12px] font-bold uppercase tracking-widest italic text-white hover:bg-white hover:text-red-600 transition-all cursor-default;
}

.shadow-3xl {
  box-shadow: 0 50px 100px -20px rgba(0, 0, 0, 0.4);
}
</style>