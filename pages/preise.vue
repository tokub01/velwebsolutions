<template>
  <div class="font-sans text-gray-900 bg-white selection:bg-red-100 selection:text-red-600">

    <nav class="bg-gray-50 py-4 px-6 mt-16 border-b border-gray-100" aria-label="Breadcrumb">
      <ol class="max-w-6xl mx-auto flex items-center space-x-2 text-sm font-bold uppercase tracking-tighter">
        <li>
          <NuxtLink to="/" class="text-red-600 hover:underline">Startseite</NuxtLink>
        </li>
        <li class="text-gray-400">/</li>
        <li class="text-gray-700 italic">Preise & Pakete</li>
      </ol>
    </nav>

    <header class="relative py-24 md:py-44 bg-gradient-to-br from-red-700 via-red-600 to-red-500 text-white px-6 overflow-hidden">
      <div class="absolute inset-0 opacity-10 pointer-events-none">
        <div class="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div class="relative z-10 max-w-6xl mx-auto text-center">
        <span class="inline-block px-5 py-2 mb-6 rounded-full bg-white text-red-600 text-[10px] font-black uppercase tracking-[0.2em] shadow-xl">
          ✓ 100% Planungssicherheit
        </span>
        <h1 class="text-5xl md:text-9xl font-black mb-10 leading-[0.85] tracking-tighter uppercase italic">
          Ehrliche Arbeit.<br/><span class="text-white/90 underline decoration-white/30">Faire Pakete.</span>
        </h1>
        <p class="text-xl md:text-3xl text-red-50 max-w-4xl mx-auto leading-relaxed mb-12 font-medium italic">
          Keine versteckten Gebühren. Wir rechnen nach festen Stundenkontingenten ab – technisch fundiert und wissenschaftlich präzise kalkuliert.
        </p>
      </div>
    </header>

    <section class="py-32 px-6 bg-white overflow-hidden">
      <div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <div class="order-2 lg:order-1 relative group">
          <div class="absolute -inset-6 bg-red-600/5 rounded-[4rem] -rotate-2 group-hover:rotate-0 transition-transform duration-700"></div>
          <div class="relative bg-gray-50 p-12 md:p-20 rounded-[3.5rem] border border-gray-100 shadow-sm">
            <div class="text-7xl mb-8 group-hover:scale-110 transition-transform inline-block">📄</div>
            <h3 class="text-4xl md:text-5xl font-black uppercase italic tracking-tighter mb-4">Basic Paket</h3>
            <p class="text-2xl font-black text-red-600 mb-10 italic uppercase tracking-widest">40h Kontingent</p>
            <ul class="space-y-6 text-lg font-medium italic mb-12">
              <li class="flex items-center gap-4"><span class="w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center text-xs italic">✓</span> Individuelles UI/UX Design</li>
              <li class="flex items-center gap-4"><span class="w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center text-xs italic">✓</span> Responsive Umsetzung</li>
              <li class="flex items-center gap-4"><span class="w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center text-xs italic">✓</span> Laravel/Vue.js Setup</li>
              <li class="flex items-center gap-4"><span class="w-6 h-6 rounded-full bg-red-600 text-white flex items-center justify-center text-xs italic">✓</span> SEO-Grundlagen</li>
            </ul>
            <div class="text-5xl font-black text-gray-900 border-t border-gray-200 pt-10">
              5.950 € <span class="text-sm font-bold text-gray-400 uppercase tracking-widest">zzgl. MwSt.</span>
            </div>
          </div>
        </div>
        <div class="order-1 lg:order-2">
          <span class="text-red-600 font-black uppercase tracking-[0.3em] text-xs mb-6 block italic">Start-Up & Landingpages</span>
          <h2 class="text-4xl md:text-7xl font-black mb-8 leading-[0.9] uppercase italic tracking-tighter">Ideal für den <br/><span class="text-red-600">Einstieg.</span></h2>
          <p class="text-xl text-gray-600 mb-10 leading-relaxed font-medium italic">
            Perfekt geeignet für Landingpages, digitale Visitenkarten oder kleine Web-Projekte. Wir legen den technischen Grundstein für Ihren Erfolg im Netz.
          </p>
          <NuxtLink to="/kontakt" class="inline-block px-12 py-6 bg-gray-900 text-white font-black rounded-2xl hover:bg-red-600 transition-all uppercase italic tracking-widest shadow-2xl">
            Jetzt anfragen
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="py-32 px-6 bg-gray-900 text-white rounded-[4rem] mx-4 shadow-3xl overflow-hidden relative">
      <div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <div>
          <span class="text-red-500 font-black uppercase tracking-[0.3em] text-xs mb-6 block italic">Agentur-Empfehlung</span>
          <h2 class="text-4xl md:text-8xl font-black mb-10 leading-[0.85] uppercase italic tracking-tighter">
            Standard <br/><span class="text-red-500 underline decoration-red-500/30">80 Stunden.</span>
          </h2>
          <p class="text-xl text-gray-400 mb-12 leading-relaxed font-medium italic">
            Der Allrounder für etablierte Unternehmen. Hier realisieren wir komplexe Logiken wie Kundenportale oder tiefgreifende System-Schnittstellen.
          </p>
          <div class="grid sm:grid-cols-2 gap-6">
            <div class="p-8 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
              <span class="text-4xl mb-4 block">🔌</span>
              <h4 class="font-black text-xl text-white uppercase italic tracking-tighter mb-2">API & CRM</h4>
              <p class="text-sm text-gray-400 font-medium italic">Anbindung an bestehende ERP-Systeme.</p>
            </div>
            <div class="p-8 bg-white/5 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
              <span class="text-4xl mb-4 block">🔐</span>
              <h4 class="font-black text-xl text-white uppercase italic tracking-tighter mb-2">Login-Bereiche</h4>
              <p class="text-sm text-gray-400 font-medium italic">Sichere Portale für Kunden & Mitarbeiter.</p>
            </div>
          </div>
        </div>

        <div class="bg-white/5 p-12 md:p-20 rounded-[4rem] border border-white/10 backdrop-blur-md relative group">
          <div class="absolute -top-6 -right-6 bg-red-600 text-white px-6 py-3 rounded-2xl font-black text-xs uppercase tracking-[0.2em] shadow-2xl rotate-12">
            Meistgewählt
          </div>
          <div class="text-7xl mb-8">🚀</div>
          <h3 class="text-4xl font-black uppercase italic tracking-tighter mb-6">Investition</h3>
          <div class="text-7xl md:text-8xl font-black text-white mb-10 tracking-tighter">11.900 €</div>
          <p class="text-gray-400 mb-12 leading-relaxed text-lg font-medium italic border-l-4 border-red-600 pl-6">
            Inklusive vollständiger Dokumentation und persönlicher Einweisung in Ihre neue Software.
          </p>
          <NuxtLink to="/kontakt" class="block w-full text-center py-8 bg-red-600 text-white font-black rounded-3xl hover:bg-white hover:text-red-600 transition-all uppercase italic tracking-widest shadow-2xl shadow-red-600/40 text-xl">
            Projekt starten
          </NuxtLink>
        </div>
      </div>
    </section>

    <section class="py-32 px-6 bg-white">
      <div class="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <div class="order-2 lg:order-1">
          <span class="text-gray-400 font-black uppercase tracking-[0.3em] text-xs mb-6 block italic">Custom ERP & High-End</span>
          <h2 class="text-4xl md:text-7xl font-black mb-8 leading-[0.9] uppercase italic tracking-tighter">Enterprise <br/><span class="text-gray-400">Lösungen.</span></h2>
          <p class="text-xl text-gray-600 mb-10 leading-relaxed font-medium italic">
            Wenn Sie Ihre kompletten Betriebsabläufe digitalisieren möchten. Wir bauen Ihr individuelles ERP-System von Grund auf – ohne Kompromisse.
          </p>
          <ul class="space-y-5 mb-12">
            <li class="flex items-center gap-4 text-xl font-black uppercase italic tracking-tighter"><span class="text-red-600">→</span> 120h fokussierte Entwicklung</li>
            <li class="flex items-center gap-4 text-xl font-black uppercase italic tracking-tighter"><span class="text-red-600">→</span> Multi-Language Support</li>
            <li class="flex items-center gap-4 text-xl font-black uppercase italic tracking-tighter"><span class="text-red-600">→</span> High-Performance Audit</li>
          </ul>
          <a href="tel:+4917632544620" class="inline-block px-12 py-6 border-4 border-gray-900 text-gray-900 font-black rounded-2xl hover:bg-gray-900 hover:text-white transition-all uppercase italic tracking-widest text-xl">
            📞 Strategie-Gespräch
          </a>
        </div>
        <div class="order-1 lg:order-2 relative group">
          <div class="absolute -inset-6 bg-gray-100 rounded-[4rem] rotate-2 group-hover:rotate-0 transition-transform duration-700"></div>
          <div class="relative bg-white p-12 md:p-20 rounded-[3.5rem] border border-gray-200 shadow-2xl">
            <div class="text-7xl mb-8">⚙️</div>
            <h3 class="text-4xl font-black uppercase italic tracking-tighter mb-4 text-gray-400">Premium Paket</h3>
            <p class="text-2xl font-black text-gray-900 mb-10 italic uppercase tracking-widest">120h Kontingent</p>
            <div class="text-6xl font-black text-gray-900 pt-10 border-t border-gray-100">
              17.850 € <span class="text-sm font-bold text-gray-400 uppercase tracking-widest">zzgl. MwSt.</span>
            </div>
            <p class="mt-8 text-gray-400 text-xs font-bold uppercase tracking-widest italic">
              Stundensatz: 148,75 € Brutto (ca. 125,00 € Netto)
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-32 px-6 bg-gray-50 border-t border-gray-100 text-center rounded-[4rem] mx-4 mb-12">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-5xl md:text-9xl font-black mb-12 tracking-tighter uppercase italic text-gray-900 leading-[0.8] shadow-text">
          Lassen Sie uns <br/><span class="text-red-600">über Geld sprechen.</span>
        </h2>
        <p class="text-2xl text-gray-600 mb-16 leading-relaxed font-medium italic">
          Ehrliche Beratung bedeutet für mich auch, Ihnen zu sagen, wenn ein Projekt kleiner (und günstiger) umsetzbar ist als Sie denken.
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-8">
          <NuxtLink to="/kostenrechner" class="px-14 py-8 bg-red-600 text-white font-black rounded-[2rem] shadow-2xl hover:scale-105 transition-all text-2xl uppercase italic tracking-widest">
            Zum Kostenrechner
          </NuxtLink>
          <NuxtLink to="/kontakt" class="px-14 py-8 bg-white border-4 border-gray-200 text-gray-800 font-black rounded-[2rem] hover:bg-gray-900 hover:text-white hover:border-gray-900 transition-all text-2xl uppercase italic tracking-widest">
            Kontakt aufnehmen
          </NuxtLink>
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