<template>
  <div class="font-sans text-gray-900 bg-white selection:bg-red-100 selection:text-red-600 antialiased">

    <nav class="bg-gray-50 py-4 px-4 md:px-6 border-b border-gray-100 overflow-x-auto" aria-label="Breadcrumb">
      <ol class="max-w-6xl mx-auto flex items-center space-x-2 text-[10px] md:text-sm font-bold uppercase tracking-tighter whitespace-nowrap">
        <li><NuxtLink to="/" class="text-red-600 hover:underline">Startseite</NuxtLink></li>
        <li class="text-gray-400">/</li>
        <li class="text-gray-700 italic">Investition & Strategie</li>
      </ol>
    </nav>

    <header class="relative pt-32 pb-24 md:pt-48 md:pb-40 bg-gradient-to-br from-red-700 via-red-600 to-red-500 text-white px-6 overflow-hidden">
      <div class="absolute inset-0 opacity-10 pointer-events-none">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,white_1px,transparent_0)] bg-[size:40px_40px]"></div>
      </div>

      <div class="relative z-10 max-w-6xl mx-auto text-center">
        <span class="inline-block px-5 py-2 mb-6 rounded-full bg-white text-red-600 text-[10px] font-black uppercase tracking-[0.2em] shadow-xl italic">
          ✓ Professionelles Engineering: 125,00 € NETTO
        </span>
        <h1 class="text-5xl md:text-9xl font-black mb-10 leading-[0.85] tracking-tighter uppercase italic">
          Ehrliches Handwerk.<br/><span class="text-white/90 underline decoration-white/30">Keine Rätsel.</span>
        </h1>
        <p class="text-xl md:text-3xl text-red-50 max-w-4xl mx-auto leading-relaxed font-medium italic">
          Qualität hat ihren Preis, aber sie zahlt sich aus. Ich biete Fullstack-Entwicklung auf höchstem Niveau – transparent abgerechnet und ohne technische Schulden.
        </p>
      </div>
    </header>

    <section class="py-20 md:py-32 px-6 bg-white overflow-hidden">
      <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <div class="order-2 lg:order-1 lg:col-span-6 relative group">
          <div class="absolute -inset-6 bg-red-600/5 rounded-[3rem] md:rounded-[4rem] -rotate-1 group-hover:rotate-0 transition-transform duration-700"></div>
          <div class="relative bg-gray-50 p-8 md:p-16 rounded-[2.5rem] md:rounded-[3.5rem] border border-gray-100 shadow-sm">
            <h3 class="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-4 text-gray-900">Sprint Paket</h3>
            <p class="text-xl md:text-2xl font-black text-red-600 mb-10 italic uppercase tracking-widest">40h FOKUS-ENTWICKLUNG</p>
            <ul class="space-y-3 mb-10 text-gray-600 font-medium italic">
              <li><span class="text-red-600 font-black">✓</span> Konzeption & UI/UX Design</li>
              <li><span class="text-red-600 font-black">✓</span> Performance-Landingpage (Vue.js)</li>
              <li><span class="text-red-600 font-black">✓</span> SEO-Grundoptimierung</li>
            </ul>
            <div class="bg-white p-6 rounded-3xl border border-gray-200 mb-8">
              <div class="flex justify-between items-end mb-2">
                <span class="text-gray-600 font-bold italic">40h á 125,00 € (Netto)</span>
                <span class="text-xl font-black">5.000,00 €</span>
              </div>
            </div>
            <NuxtLink to="/kontakt" class="block w-full text-center py-6 bg-gray-900 text-white font-black rounded-2xl hover:bg-red-600 transition-all uppercase italic tracking-widest">Projekt starten</NuxtLink>
          </div>
        </div>
        <div class="order-1 lg:order-2 lg:col-span-6 text-center lg:text-left">
          <span class="text-red-600 font-black uppercase tracking-[0.3em] text-[10px] mb-4 block italic">Einstieg & Sichtbarkeit</span>
          <h2 class="text-4xl md:text-7xl font-black mb-8 leading-[0.9] uppercase italic tracking-tighter">Das digitale <br/><span class="text-red-600">Fundament.</span></h2>
          <p class="text-lg md:text-xl text-gray-600 leading-relaxed font-medium italic max-w-xl mx-auto lg:mx-0">
            Ideal für den Aufbau einer professionellen Web-Präsenz. Ich nutze modernste Web-Technologien, um eine Basis zu schaffen, die heute überzeugt und morgen skaliert.
          </p>
        </div>
      </div>
    </section>

    <section class="py-20 md:py-32 px-4 md:px-6 bg-gray-900 text-white rounded-[2.5rem] md:rounded-[4rem] mx-2 md:mx-4 shadow-3xl overflow-hidden relative">
      <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

        <div class="lg:col-span-7 z-10 text-center lg:text-left">
          <span class="text-red-500 font-black uppercase tracking-[0.3em] text-[10px] mb-4 block italic">Wachstum & Logik</span>
          <h2 class="text-4xl md:text-6xl xl:text-7xl font-black mb-10 leading-[0.9] uppercase italic tracking-tighter break-words lg:max-w-[90%]">
            Eigene Software <br/>
            <span class="text-red-500 underline decoration-red-500/30 inline-block mt-2">maßgeschneidert.</span>
          </h2>
          <p class="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed font-medium italic max-w-xl mx-auto lg:mx-0">
            Der Standard für individuelle Kundenportale oder spezialisierte Prozesse. Hier entwickeln wir die Logik, die Ihren Arbeitsalltag wirklich automatisiert.
          </p>
          <ul class="hidden sm:block space-y-4 mb-10 text-gray-300 font-medium italic max-w-md mx-auto lg:mx-0">
            <li class="flex items-center gap-3"> <span class="text-red-500 font-black">✓</span> Clean-Code Architektur (Laravel)</li>
            <li class="flex items-center gap-3"> <span class="text-red-500 font-black">✓</span> Automatisierte Software-Tests</li>
            <li class="flex items-center gap-3"> <span class="text-red-500 font-black">✓</span> API-Anbindungen & Datensynchronisation</li>
          </ul>
        </div>

        <div class="lg:col-span-5 relative z-20">
          <div class="bg-white/5 p-8 md:p-12 rounded-[2.5rem] md:rounded-[4rem] border border-white/10 backdrop-blur-md relative shadow-2xl">
            <div class="absolute -top-4 -right-2 bg-red-600 text-white px-4 py-2 rounded-xl font-black text-[9px] md:text-[10px] uppercase tracking-[0.2em] shadow-2xl rotate-12 z-30">Meistgewählt</div>
            <h3 class="text-xl font-black uppercase italic tracking-tighter mb-8 text-white/50">Business Paket</h3>
            <div class="space-y-4 mb-10">
              <div class="flex justify-between items-baseline text-2xl md:text-4xl font-black gap-4">
                <span class="italic text-white">NETTO</span>
                <span class="text-white whitespace-nowrap">10.000,00 €</span>
              </div>
              <div class="flex justify-between items-baseline text-lg font-bold text-gray-500 border-t border-white/10 pt-4 gap-4">
                <span class="italic">BRUTTO</span>
                <span class="whitespace-nowrap font-black text-gray-400">11.900,00 €</span>
              </div>
            </div>
            <p class="text-[9px] md:text-[10px] text-gray-500 mb-10 italic border-l-2 border-red-600 pl-4 uppercase tracking-widest font-black leading-tight">
              Kalkulation: 80h á 125,00 € <br/>(Detailliertes Zeit-Tracking inkl. Reporting)
            </p>
            <NuxtLink to="/kontakt" class="block w-full text-center py-6 bg-red-600 text-white font-black rounded-2xl hover:bg-white hover:text-red-600 transition-all uppercase italic tracking-widest shadow-2xl text-lg md:text-xl font-black">Entwicklung starten</NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 md:py-32 px-6 bg-white overflow-hidden">
      <div class="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        <div class="order-2 lg:order-1 lg:col-span-7 text-center lg:text-left">
          <span class="text-gray-400 font-black uppercase tracking-[0.3em] text-[10px] mb-4 block italic">Skalierung & ERP</span>
          <h2 class="text-4xl md:text-7xl font-black mb-8 leading-[0.9] uppercase italic tracking-tighter">Das digitale <br/><span class="text-gray-400">Betriebssystem.</span></h2>
          <p class="text-lg md:text-xl text-gray-600 mb-10 leading-relaxed font-medium italic max-w-xl mx-auto lg:mx-0">
            Für Unternehmen ohne Kompromisse. Wir digitalisieren komplexe Warenwirtschafts- oder ERP-Systeme mit Fokus auf Ausfallsicherheit.
          </p>
          <div class="inline-block p-5 bg-gray-50 rounded-2xl border-l-8 border-gray-900 text-left">
            <p class="text-gray-900 font-black italic uppercase tracking-tighter text-sm">Enterprise-Garantie</p>
            <p class="text-gray-500 font-bold italic text-xs">120h geballte Engineering-Power</p>
          </div>
        </div>
        <div class="order-1 lg:order-2 lg:col-span-5 relative group">
          <div class="absolute -inset-6 bg-gray-100 rounded-[3rem] md:rounded-[4rem] rotate-1 group-hover:rotate-0 transition-transform duration-700"></div>
          <div class="relative bg-white p-8 md:p-16 rounded-[2.5rem] md:rounded-[3.5rem] border border-gray-200 shadow-2xl">
            <h3 class="text-2xl md:text-3xl font-black uppercase italic tracking-tighter mb-4 text-gray-400">Enterprise Paket</h3>
            <div class="mb-8">
              <div class="text-3xl md:text-5xl font-black text-gray-900 whitespace-nowrap">15.000,00 € <span class="text-[10px] font-bold text-gray-400 uppercase">Netto</span></div>
              <div class="text-lg md:text-2xl font-bold text-gray-400 mt-2">17.850,00 € <span class="text-[9px] uppercase">Brutto</span></div>
            </div>
            <p class="text-[9px] md:text-[10px] text-gray-400 font-black uppercase tracking-[0.2em] italic border-t pt-6">Kalkulation: 120h á 125,00 € Netto</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 md:py-32 px-6 bg-gray-50 border-t border-gray-100 text-center rounded-[2.5rem] md:rounded-[4rem] mx-2 md:mx-4 mb-12">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-4xl md:text-9xl font-black mb-8 md:mb-12 tracking-tighter uppercase italic text-gray-900 leading-[0.8] shadow-text">
          Zeit ist <br/><span class="text-red-600">messbar.</span>
        </h2>
        <p class="text-lg md:text-2xl text-gray-600 mb-12 leading-relaxed font-medium italic">
          Keine versteckten Gebühren. Ich arbeite mit professionellen Tracking-Tools. Das ist meine Garantie für eine faire Partnerschaft.
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4 md:gap-8">
          <NuxtLink to="/kostenrechner" class="px-8 md:px-14 py-5 md:py-8 bg-red-600 text-white font-black rounded-2xl md:rounded-[2rem] shadow-2xl hover:scale-105 transition-all text-lg md:text-2xl uppercase italic tracking-widest">Kosten berechnen</NuxtLink>
          <NuxtLink to="/kontakt" class="px-8 md:px-14 py-5 md:py-8 bg-white border-2 md:border-4 border-gray-200 text-gray-800 font-black rounded-2xl md:rounded-[2rem] hover:bg-gray-900 hover:text-white transition-all text-lg md:text-2xl uppercase italic tracking-widest">Jetzt anfragen</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
definePageMeta({ layout: 'guest' })
useHead({
  title: 'Investition & Pakete | VelWebSolutions',
  meta: [{ name: 'description', content: 'Transparente Preise für individuelle Laravel & Vue.js Entwicklung.' }]
})
</script>

<style scoped>
.shadow-3xl { box-shadow: 0 35px 60px -15px rgba(0, 0, 0, 0.4); }
.shadow-text { text-shadow: 0 10px 20px rgba(0,0,0,0.05); }
html { scroll-behavior: smooth; }
</style>