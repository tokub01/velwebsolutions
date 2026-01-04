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
          ✓ Engineering auf Industriestandard
        </span>
        <h1 class="text-5xl md:text-9xl font-black mb-10 leading-[0.85] tracking-tighter uppercase italic">
          Keine Rätsel.<br/><span class="text-white/90 underline decoration-white/30">Nur Ergebnisse.</span>
        </h1>
        <p class="text-xl md:text-3xl text-red-50 max-w-4xl mx-auto leading-relaxed font-medium italic">
          Transparente Kalkulation ist die Basis für Vertrauen. Ich biete Fullstack-Entwicklung (Laravel & Vue.js) mit klar definierten Leistungsstufen und fairem Zeit-Tracking.
        </p>
      </div>
    </header>

    <section class="py-12 bg-gray-50 border-b border-gray-100">
      <div class="max-w-7xl mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div v-for="unit in matrixUnits" :key="unit.label" class="p-6 bg-white rounded-3xl shadow-sm border border-gray-100 hover:border-red-600 transition-colors">
            <p class="text-[9px] font-black text-gray-400 uppercase tracking-widest mb-4 italic">{{ unit.label }}</p>
            <div class="flex flex-col">
              <span class="text-2xl font-black italic">{{ unit.netto }} € <span class="text-[10px] text-gray-400">NETTO</span></span>
              <span class="text-sm font-bold text-gray-400 italic">{{ unit.brutto }} € <span class="text-[8px]">BRUTTO</span></span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 md:py-32 px-6">
      <div class="max-w-6xl mx-auto">
        <div class="text-center mb-16">
          <h2 class="text-4xl md:text-7xl font-black uppercase italic tracking-tighter mb-4">Der Leistungskatalog</h2>
          <p class="text-gray-500 italic font-medium max-w-2xl mx-auto">
            Vom ersten Gedanken bis zum langfristigen Betrieb. Ich bündele Kompetenz in drei klare Phasen, um Ihr Projekt effizient ans Ziel zu bringen.
          </p>
        </div>

        <div class="space-y-8">
          <div class="bg-gray-50 p-8 md:p-12 rounded-[2.5rem] border-l-8 border-red-600">
            <div class="flex flex-col lg:flex-row justify-between items-start gap-8">
              <div class="max-w-3xl">
                <span class="text-red-600 font-black text-[10px] uppercase tracking-widest italic mb-2 block">01 / Analyse & Architektur</span>
                <h3 class="text-3xl font-black uppercase italic tracking-tight mb-4">Digitale Strategie & Konzeption</h3>
                <p class="text-gray-600 text-sm italic mb-6 leading-relaxed">
                  Bevor die erste Zeile Code geschrieben wird, eliminieren wir Risiken. In dieser Phase entwickeln wir die "Blueprints" Ihrer Software. Dies schützt vor teuren Fehlentwicklungen und sichert die Skalierbarkeit Ihres Geschäftsmodells.
                </p>
                <ul class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px] font-bold uppercase tracking-tighter text-gray-500 italic">
                  <li><span class="text-red-600">✓</span> Erstellung von Lasten- & Pflichtenheften</li>
                  <li><span class="text-red-600">✓</span> Software-Architektur & Systemdesign</li>
                  <li><span class="text-red-600">✓</span> Datenbankmodellierung & Datenfluss-Diagramme</li>
                  <li><span class="text-red-600">✓</span> API-Spezifikation (Schnittstellenplanung)</li>
                  <li><span class="text-red-600">✓</span> DSGVO-Konforme Sicherheitskonzepte</li>
                  <li><span class="text-red-600">✓</span> UI/UX Prototyping & Wireframing</li>
                </ul>
              </div>
              <div class="text-right bg-white p-6 rounded-2xl shadow-sm border border-gray-100 min-w-[220px] w-full lg:w-auto">
                <div class="text-3xl font-black italic text-gray-900">145,00 €</div>
                <div class="text-[10px] font-bold text-gray-400 uppercase italic">Netto / Stunde</div>
                <div class="text-sm font-bold text-gray-300 italic mt-1">172,55 € Brutto</div>
              </div>
            </div>
          </div>

          <div class="bg-gray-900 text-white p-8 md:p-12 rounded-[2.5rem] shadow-2xl transform lg:scale-105 z-10 border border-white/5">
            <div class="flex flex-col lg:flex-row justify-between items-start gap-8">
              <div class="max-w-3xl">
                <span class="text-red-500 font-black text-[10px] uppercase tracking-widest italic mb-2 block">02 / Entwicklung & Umsetzung</span>
                <h3 class="text-3xl font-black uppercase italic tracking-tight text-white mb-4">Fullstack Engineering</h3>
                <p class="text-gray-400 text-sm italic mb-6 leading-relaxed">
                  Moderne Web-Technologien (Laravel & Vue.js) treffen auf sauberes Handwerk. Ich entwickle robuste, performante und wartbare Anwendungen nach "Clean Code"-Prinzipien. Jedes Feature wird automatisiert getestet, um höchste Qualität zu garantieren.
                </p>
                <ul class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px] font-bold uppercase tracking-tighter text-gray-400 italic">
                  <li><span class="text-red-500">✓</span> Programmierung komplexer Backends (Laravel)</li>
                  <li><span class="text-red-500">✓</span> Reaktive Oberflächenentwicklung (Vue.js)</li>
                  <li><span class="text-red-500">✓</span> Automatisierte Tests (Unit- & Feature-Tests)</li>
                  <li><span class="text-red-500">✓</span> Code-Review & Qualitätssicherung</li>
                  <li><span class="text-red-500">✓</span> Anbindung externer Dienste (Stripe, Lexware, etc.)</li>
                  <li><span class="text-red-500">✓</span> Performance-Optimierung & Refactoring</li>
                </ul>
              </div>
              <div class="text-right bg-white/10 p-6 rounded-2xl border border-white/10 min-w-[220px] w-full lg:w-auto">
                <div class="text-3xl font-black italic text-white">125,00 €</div>
                <div class="text-[10px] font-bold text-gray-500 uppercase italic">Netto / Stunde</div>
                <div class="text-sm font-bold text-gray-500 italic mt-1">148,75 € Brutto</div>
              </div>
            </div>
          </div>

          <div class="bg-gray-50 p-8 md:p-12 rounded-[2.5rem] border-l-8 border-gray-400">
            <div class="flex flex-col lg:flex-row justify-between items-start gap-8">
              <div class="max-w-3xl">
                <span class="text-gray-400 font-black text-[10px] uppercase tracking-widest italic mb-2 block">03 / Wartung & Pflege</span>
                <h3 class="text-3xl font-black uppercase italic tracking-tight text-gray-700 mb-4">Instandhaltung & Werterhalt</h3>
                <p class="text-gray-500 text-sm italic mb-6 leading-relaxed">
                  Software lebt. Um die Sicherheit und Performance langfristig zu sichern, biete ich einen vergünstigten Satz für die Systempflege an. Hier fließen auch operative Aufgaben wie Textänderungen oder Support ein.
                </p>
                <ul class="grid grid-cols-1 sm:grid-cols-2 gap-3 text-[11px] font-bold uppercase tracking-tighter text-gray-400 italic">
                  <li><span class="text-gray-400">✓</span> Inhaltliche Anpassungen (Wording & Texte)</li>
                  <li><span class="text-gray-400">✓</span> Einspielung kritischer Sicherheits-Updates</li>
                  <li><span class="text-gray-400">✓</span> Kontinuierliches System-Monitoring</li>
                  <li><span class="text-gray-400">✓</span> Fehleranalyse (Bug-Investigation)</li>
                  <li><span class="text-gray-400">✓</span> Erstellung technischer Dokumentation</li>
                  <li><span class="text-gray-400">✓</span> Technischer Anwender-Support</li>
                </ul>
              </div>
              <div class="text-right bg-white p-6 rounded-2xl shadow-sm border border-gray-100 min-w-[220px] w-full lg:w-auto">
                <div class="text-3xl font-black italic text-gray-900">110,00 €</div>
                <div class="text-[10px] font-bold text-gray-400 uppercase italic">Netto / Stunde</div>
                <div class="text-sm font-bold text-gray-300 italic mt-1">130,90 € Brutto</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 bg-gray-50 border-t border-gray-100 overflow-hidden">
      <div class="max-w-6xl mx-auto px-6">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 class="text-4xl md:text-6xl font-black uppercase italic tracking-tighter mb-8 leading-[0.9]">Handwerk statt <br/><span class="text-red-600">Standard-Fließband.</span></h2>
            <div class="space-y-6 text-gray-600 italic font-medium">
              <p>In der IT gibt es keine "Abkürzungen", die nicht später zu technischen Schulden führen. Eine saubere Dokumentation und automatisierte Tests sind keine Extras, sondern Standard meiner Arbeit.</p>
              <p>Jedes Projekt wird in Jira dokumentiert. Sie sehen minutengenau, welche Tätigkeit an welcher Stelle erfolgt ist. Das schafft Sicherheit für Ihre Buchhaltung und Vertrauen für unsere Partnerschaft.</p>
            </div>
          </div>
          <div class="bg-gray-900 p-8 md:p-12 rounded-[3rem] text-white shadow-2xl rotate-2">
            <h4 class="text-xl font-black uppercase italic mb-6 text-red-500 tracking-widest">Projekt-Garantie</h4>
            <ul class="space-y-4 text-sm font-bold uppercase tracking-tight italic">
              <li class="flex items-center gap-3"><span class="text-red-500">✓</span> 100% Transparenz via Jira</li>
              <li class="flex items-center gap-3"><span class="text-red-500">✓</span> Deployment auf Profi-Servern</li>
              <li class="flex items-center gap-3"><span class="text-red-500">✓</span> Dokumentation & Übergabe</li>
              <li class="flex items-center gap-3"><span class="text-red-500">✓</span> Feste Ansprechpartner (Freelance)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 md:py-40 px-6 text-center">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-4xl md:text-8xl font-black uppercase italic tracking-tighter mb-12 text-gray-900">Bereit für <br/><span class="text-red-600">High-End?</span></h2>
        <div class="flex flex-col sm:flex-row justify-center gap-6">
          <NuxtLink to="/kontakt" class="px-12 py-6 bg-red-600 text-white font-black rounded-2xl shadow-2xl hover:bg-gray-900 transition-all text-xl uppercase italic tracking-widest">Projekt anfragen</NuxtLink>
          <NuxtLink to="/portfolio" class="px-12 py-6 bg-white border-4 border-gray-100 text-gray-900 font-black rounded-2xl hover:border-red-600 transition-all text-xl uppercase italic tracking-widest">Arbeitsweise entdecken</NuxtLink>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
const matrixUnits = [
  { label: 'Pro Stunde', netto: '125,00', brutto: '148,75' },
  { label: 'Pro Tag (8h)', netto: '1.000,00', brutto: '1.190,00' },
  { label: 'Pro Woche (40h)', netto: '5.000,00', brutto: '5.950,00' },
  { label: 'Pro Monat (160h)', netto: '20.000,00', brutto: '23.800,00' }
]

definePageMeta({ layout: 'guest' })
useHead({
  title: 'Investition & Transparenz | VelWebSolutions',
  meta: [{ name: 'description', content: 'Detaillierte Honorar-Übersicht für professionelle Laravel & Vue.js Entwicklung. Netto- & Bruttopreise.' }]
})
</script>

<style scoped>
html { scroll-behavior: smooth; }
</style>