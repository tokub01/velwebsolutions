<template>
  <div class="font-sans text-gray-900 bg-white selection:bg-red-100 selection:text-red-600">

    <nav class="bg-gray-50 py-4 px-6 mt-16 border-b border-gray-100" aria-label="Breadcrumb">
      <ol class="max-w-6xl mx-auto flex items-center space-x-2 text-sm font-bold uppercase tracking-tighter">
        <li><NuxtLink to="/" class="text-red-600 hover:underline">Startseite</NuxtLink></li>
        <li class="text-gray-400">/</li>
        <li class="text-gray-700 italic">Preise & Strategie</li>
      </ol>
    </nav>

    <header class="relative py-24 md:py-44 bg-gradient-to-br from-red-700 via-red-600 to-red-500 text-white px-6 overflow-hidden">
      <div class="absolute inset-0 opacity-10 pointer-events-none">
        <div class="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div class="relative z-10 max-w-6xl mx-auto text-center">
        <span class="inline-block px-5 py-2 mb-6 rounded-full bg-white text-red-600 text-[10px] font-black uppercase tracking-[0.2em] shadow-xl italic">
          ✓ FIXER STUNDENSATZ: 125,00 € NETTO
        </span>
        <h1 class="text-5xl md:text-9xl font-black mb-10 leading-[0.85] tracking-tighter uppercase italic">
          Keine Rätsel.<br/><span class="text-white/90 underline decoration-white/30">Volle Kontrolle.</span>
        </h1>
        <p class="text-xl md:text-3xl text-red-50 max-w-4xl mx-auto leading-relaxed mb-12 font-medium italic">
          Ich kalkuliere nicht nach Gefühl, sondern nach Aufwand. Jede Stunde Fullstack-Engineering wird mit 125,00 € Netto (148,75 € Brutto) abgerechnet – transparent und ohne versteckte Kosten.
        </p>
      </div>
    </header>

    <section class="py-32 px-6 bg-white overflow-hidden">
      <div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <div class="order-2 lg:order-1 relative group">
          <div class="absolute -inset-6 bg-red-600/5 rounded-[4rem] -rotate-2 group-hover:rotate-0 transition-transform duration-700"></div>
          <div class="relative bg-gray-50 p-12 md:p-20 rounded-[3.5rem] border border-gray-100 shadow-sm">
            <h3 class="text-4xl md:text-5xl font-black uppercase italic tracking-tighter mb-4 text-gray-900">Basic Paket</h3>
            <p class="text-2xl font-black text-red-600 mb-10 italic uppercase tracking-widest">40h SPRINT-KONTINGENT</p>

            <div class="bg-white p-6 rounded-3xl border border-gray-200 mb-12">
              <p class="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-4 italic">// DIE RECHNUNG</p>
              <div class="flex justify-between items-end mb-2">
                <span class="text-gray-600 font-bold italic">40h x 125,00 € (Netto)</span>
                <span class="text-2xl font-black">5.000,00 €</span>
              </div>
              <div class="flex justify-between items-end pt-2 border-t border-dashed">
                <span class="text-gray-400 font-bold italic">+ 19% MwSt. (950,00 €)</span>
                <span class="text-xl font-bold text-gray-400">5.950,00 €</span>
              </div>
            </div>

            <NuxtLink to="/kontakt" class="block w-full text-center py-6 bg-gray-900 text-white font-black rounded-2xl hover:bg-red-600 transition-all uppercase italic tracking-widest">Jetzt Projekt sichern</NuxtLink>
          </div>
        </div>
        <div class="order-1 lg:order-2">
          <span class="text-red-600 font-black uppercase tracking-[0.3em] text-xs mb-6 block italic">Quick Start</span>
          <h2 class="text-4xl md:text-7xl font-black mb-8 leading-[0.9] uppercase italic tracking-tighter">Wir bauen Ihr <br/><span class="text-red-600">Fundament.</span></h2>
          <p class="text-xl text-gray-600 mb-10 leading-relaxed font-medium italic">
            Ideal für hochperformante Landingpages. Wir nutzen 40 fokussierte Stunden, um Ihre digitale Präsenz aufzubauen. Abrechnung: 125,00 € Netto / 148,75 € Brutto pro Stunde.
          </p>
        </div>
      </div>
    </section>

    <section class="py-32 px-6 bg-gray-900 text-white rounded-[4rem] mx-4 shadow-3xl overflow-hidden relative">
      <div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <h2 class="text-4xl md:text-8xl font-black mb-10 leading-[0.85] uppercase italic tracking-tighter">
            Skalieren mit <br/><span class="text-red-500 underline decoration-red-500/30">80 Stunden.</span>
          </h2>
          <p class="text-xl text-gray-400 mb-12 leading-relaxed font-medium italic">
            Wir entwickeln komplexe Logiken und Portale. Absolute Transparenz durch Zeit-Tracking: 125,00 € Netto (148,75 € Brutto).
          </p>
        </div>

        <div class="bg-white/5 p-12 md:p-20 rounded-[4rem] border border-white/10 backdrop-blur-md relative">
          <div class="absolute -top-6 -right-6 bg-red-600 text-white px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-2xl rotate-12">Effizienz-Sieger</div>
          <h3 class="text-4xl font-black uppercase italic tracking-tighter mb-8">Kostenübersicht</h3>

          <div class="space-y-4 mb-12">
            <div class="flex justify-between text-3xl md:text-4xl font-black">
              <span class="italic">NETTO</span>
              <span>10.000,00 €</span>
            </div>
            <div class="flex justify-between text-xl md:text-2xl font-bold text-gray-500 border-t border-white/10 pt-4">
              <span class="italic">BRUTTO <small class="text-xs">(inkl. MwSt.)</small></span>
              <span>11.900,00 €</span>
            </div>
          </div>

          <p class="text-gray-400 mb-12 italic border-l-4 border-red-600 pl-6 text-sm uppercase tracking-widest font-black">
            Kalkulationsbasis: 80h x 125,00 € Netto (148,75 € Brutto)
          </p>
          <NuxtLink to="/kontakt" class="block w-full text-center py-8 bg-red-600 text-white font-black rounded-3xl hover:bg-white hover:text-red-600 transition-all uppercase italic tracking-widest shadow-2xl text-xl">Entwicklung starten</NuxtLink>
        </div>
      </div>
    </section>

    <section class="py-32 px-6 bg-white">
      <div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <div class="order-2 lg:order-1">
          <h2 class="text-4xl md:text-7xl font-black mb-8 leading-[0.9] uppercase italic tracking-tighter">Enterprise <br/><span class="text-gray-400">Power-Up.</span></h2>
          <p class="text-xl text-gray-600 mb-10 leading-relaxed font-medium italic">
            Maximale Kapazität für Ihr ERP-System oder individuelle Softwarelösungen. 120 Stunden geballte Kompetenz.
          </p>
          <div class="p-6 bg-gray-50 rounded-2xl border-l-8 border-gray-900 inline-block">
            <p class="text-gray-900 font-black italic uppercase tracking-tighter">Stundensatz-Garantie</p>
            <p class="text-gray-500 font-bold italic">125,00 € Netto | 148,75 € Brutto</p>
          </div>
        </div>
        <div class="order-1 lg:order-2 relative group">
          <div class="absolute -inset-6 bg-gray-100 rounded-[4rem] rotate-2 group-hover:rotate-0 transition-transform duration-700"></div>
          <div class="relative bg-white p-12 md:p-20 rounded-[3.5rem] border border-gray-200 shadow-2xl">
            <h3 class="text-4xl font-black uppercase italic tracking-tighter mb-4 text-gray-400">Premium Paket</h3>
            <div class="mb-10">
              <div class="text-5xl font-black text-gray-900">15.000,00 € <span class="text-sm font-bold text-gray-400 uppercase">Netto</span></div>
              <div class="text-2xl font-bold text-gray-400 mt-2">17.850,00 € <span class="text-xs uppercase">Brutto</span></div>
            </div>
            <p class="text-[10px] text-gray-400 font-black uppercase tracking-[0.2em] italic border-t pt-6">Kalkulation: 120h x 125,00 € Netto (148,75 € Brutto)</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-32 px-6 bg-gray-50 border-t border-gray-100 text-center rounded-[4rem] mx-4 mb-12">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-5xl md:text-9xl font-black mb-12 tracking-tighter uppercase italic text-gray-900 leading-[0.8] shadow-text">
          Zeit ist <br/><span class="text-red-600">messbar.</span>
        </h2>
        <p class="text-2xl text-gray-600 mb-16 leading-relaxed font-medium italic">
          Keine Pauschalen, bei denen Sie draufzahlen. Sie zahlen exakt 125,00 € Netto (148,75 € Brutto) pro geleistete Stunde Fullstack-Engineering.
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-8">
          <NuxtLink to="/kostenrechner" class="px-14 py-8 bg-red-600 text-white font-black rounded-[2rem] shadow-2xl hover:scale-105 transition-all text-2xl uppercase italic tracking-widest">Kosten berechnen</NuxtLink>
          <NuxtLink to="/kontakt" class="px-14 py-8 bg-white border-4 border-gray-200 text-gray-800 font-black rounded-[2rem] hover:bg-gray-900 hover:text-white transition-all text-2xl uppercase italic tracking-widest">Jetzt anfragen</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
/**
 * Nuxt 3 SEO & Layout Management
 */
definePageMeta({
  layout: 'guest' // Falls du ein spezielles Layout nutzt
})

useHead({
  title: 'Preise & Pakete | VelWebSolutions - Transparente Webentwicklung',
  meta: [
    { name: 'description', content: 'Transparente Preise für individuelle Webentwicklung mit Laravel & Vue.js. 40h, 80h oder 120h Pakete für Ihren digitalen Erfolg.' }
  ],
  bodyAttrs: {
    class: 'antialiased'
  }
})
</script>

<style scoped>
/* Tailwind @reference ist für Version 4, in v3 nutzt man Standard-Utilities */
.shadow-3xl {
  box-shadow: 0 35px 60px -15px rgba(0, 0, 0, 0.4);
}

.shadow-text {
  text-shadow: 0 10px 20px rgba(0,0,0,0.05);
}

/* Optional: Smoother Scroll-Behavior für die Seite */
html {
  scroll-behavior: smooth;
}
</style>