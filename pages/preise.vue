<template>
  <div class="font-sans text-gray-900 bg-white selection:bg-red-100 selection:text-red-600 antialiased overflow-x-hidden text-left">

    <header class="relative pt-24 pb-16 md:pt-48 md:pb-40 bg-gradient-to-br from-red-700 via-red-600 to-red-500 text-white px-4 overflow-hidden mt-[60px] md:mt-[80px]">
      <div class="absolute inset-0 opacity-10 pointer-events-none">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,white_1px,transparent_0)] bg-[size:25px_25px] md:bg-[size:40px_40px]"></div>
      </div>

      <div class="relative z-10 max-w-6xl mx-auto text-center">
        <span class="inline-block px-4 py-1.5 mb-6 rounded-full bg-white text-red-600 text-[10px] font-black uppercase tracking-[0.2em] shadow-xl italic">
          ✓ Software-Architektur & Strategie
        </span>
        <h1 class="text-[clamp(2.1rem,9vw,6rem)] font-[1000] mb-6 leading-[0.95] md:leading-[0.9] tracking-tighter uppercase italic px-1 text-white">
          Substanz. <br />
          <span class="text-white/90 underline decoration-white/30 italic">Kein Chaos.</span>
        </h1>
        <p class="text-base md:text-2xl text-red-50 font-medium max-w-3xl mx-auto leading-relaxed italic opacity-90 px-2 mb-10">
          Ich entwickle digitale Kernsysteme als echte Wertanlage. Nachhaltiger Code, der sich selbst auf Fehler prüft, bevor sie entstehen.
        </p>
      </div>
    </header>

    <section class="py-12 bg-gray-900 text-white border-y border-white/10 relative z-20">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 class="text-3xl md:text-5xl font-[1000] uppercase italic tracking-tighter text-red-600 mb-4 leading-none">Fehler ausschließen.</h2>
            <p class="text-sm md:text-lg text-gray-400 italic leading-relaxed">
              Software für 200.000€ darf nicht instabil sein. Ich entwickle mit automatisierter Qualitätssicherung: Jede Funktion wird technisch geprüft, noch während sie entsteht. Das minimiert Fehler im Betrieb und senkt Ihre Wartungskosten massiv.
            </p>
          </div>
          <div class="hidden md:flex justify-end">
            <div class="text-[10rem] font-[1000] text-white/5 italic select-none uppercase">Trust</div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 md:py-32 px-4 bg-white text-left">
      <div class="max-w-7xl mx-auto text-left">
        <div class="mb-16 md:mb-24">
          <h2 class="text-4xl md:text-7xl font-[1000] uppercase italic tracking-tighter leading-tight mb-4">
            Investitions- <span class="text-red-600">Fahrplan.</span>
          </h2>
          <p class="text-gray-500 italic max-w-2xl text-left">Vom ersten Konzept bis zum Enterprise-System. Ehrliche Zahlen für Architektur, die Ihr Unternehmen trägt.</p>
        </div>

        <div class="space-y-6">
          <div v-for="phase in gesamtPhasen" :key="phase.id" class="group bg-gray-50 p-6 md:p-12 rounded-[2.5rem] border border-gray-100 flex flex-col md:flex-row md:items-center gap-6 transition-all hover:bg-white hover:shadow-2xl">
            <div class="text-5xl md:text-7xl font-[1000] italic text-gray-200 group-hover:text-red-600 transition-colors">{{ phase.id }}</div>
            <div class="flex-grow text-left">
              <h4 class="text-xl md:text-2xl font-black uppercase italic tracking-tighter">{{ phase.titel }}</h4>
              <p class="text-xs md:text-sm text-gray-500 italic mt-2">{{ phase.beschreibung }}</p>
            </div>
            <div class="pt-4 md:pt-0 md:pl-8 border-t md:border-t-0 md:border-l border-gray-200 text-left">
              <div class="text-[10px] font-black text-red-600 uppercase tracking-widest">{{ phase.stunden }}</div>
              <div class="text-xl md:text-3xl font-[1000] italic tracking-tighter">{{ phase.preis }}€ <span class="text-[10px] text-gray-400">Netto</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 md:py-32 px-3 bg-gray-50 text-left">
      <div class="max-w-7xl mx-auto">
        <h2 class="text-3xl md:text-6xl font-[1000] uppercase italic tracking-tighter mb-16 text-center">Aktuelle <span class="text-red-600">Etappen.</span></h2>

        <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div v-for="paket in pakete" :key="paket.stunden" class="bg-white p-6 md:p-10 rounded-[2rem] shadow-sm border border-gray-100 flex flex-col relative overflow-hidden text-left">
            <div class="text-[9px] font-black text-red-600 uppercase tracking-widest mb-2 italic text-left">{{ paket.bezeichnung }}</div>
            <div class="text-4xl md:text-5xl font-[1000] italic text-gray-900 tracking-tighter mb-6">{{ paket.stunden }} Stunden</div>

            <ul class="space-y-3 mb-10 flex-grow text-left">
              <li v-for="ziel in paket.ziele" :key="ziel" class="flex items-start gap-2 text-xs italic font-medium text-gray-600 leading-snug">
                <span class="text-red-600 font-black">_</span>
                {{ ziel }}
              </li>
            </ul>

            <div class="pt-6 border-t border-gray-50 text-left">
              <div class="flex flex-col gap-1">
                <div class="flex justify-between items-baseline">
                  <span class="text-[9px] font-bold text-gray-400 uppercase italic">Netto</span>
                  <span class="text-xl font-[1000] italic text-gray-400 tracking-tighter">{{ paket.netto }}€</span>
                </div>
                <div class="flex justify-between items-baseline">
                  <span class="text-[9px] font-bold text-red-600 uppercase italic">Brutto</span>
                  <span class="text-3xl font-[1000] italic text-gray-900 tracking-tighter">{{ paket.brutto }}€</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-12 bg-white text-center">
      <div class="text-3xl md:text-5xl font-[1000] italic tracking-tighter uppercase">125€ / Stunde</div>
      <div class="text-[9px] text-gray-400 uppercase font-black tracking-widest mt-2 italic">Konstante Professional Fee (Netto)</div>
    </section>

    <section class="py-20 md:py-40 px-4 text-center">
      <div class="max-w-4xl mx-auto">
        <h3 class="text-4xl md:text-8xl font-[1000] mb-8 italic uppercase tracking-tighter leading-[0.8]">Start mit <br/><span class="text-red-600">Phase 0.</span></h3>
        <p class="text-gray-500 text-sm md:text-xl font-medium italic mb-12 px-4 max-w-xl mx-auto">
          Lassen Sie uns Ihre Vision technisch validieren und ein System entwerfen, das wirklich hält.
        </p>
        <NuxtLink to="/kontakt" class="inline-block bg-red-600 text-white px-10 py-5 rounded-xl font-black uppercase italic hover:bg-gray-900 transition-all shadow-2xl text-lg">
          Audit anfragen
        </NuxtLink>
      </div>
    </section>

  </div>
</template>

<script setup>
definePageMeta({ layout: 'guest' })

const gesamtPhasen = [
  {
    id: '01',
    titel: 'Architektur & Planung',
    stunden: '200 - 400 Stunden',
    preis: 'bis 50.000',
    beschreibung: 'Konzept des Kernsystems, Anforderungs-Audit, Infrastruktur-Planung und Definition der automatisierten Prüfprozesse.'
  },
  {
    id: '02',
    titel: 'System-Entwicklung',
    stunden: '600 - 800 Stunden',
    preis: 'bis 100.000',
    beschreibung: 'Implementierung der Kern-Logik für CRM & ERP inklusive vollautomatisierter Qualitätssicherung.'
  },
  {
    id: '03',
    titel: 'Enterprise Integration',
    stunden: 'bis 1.600 Stunden',
    preis: 'bis 200.000',
    beschreibung: 'Vollständige Vernetzung, Daten-Migration, Skalierung und finale Härtung der Umgebung.'
  }
]

const pakete = [
  {
    bezeichnung: '// Audit & Struktur',
    stunden: '40',
    netto: '5.000,00',
    brutto: '5.950,00',
    ziele: ['Anforderungs-Audit', 'Technische Roadmap', 'Datenbank-Design', 'Setup der Prüf-Umgebung']
  },
  {
    bezeichnung: '// Core Development',
    stunden: '80',
    netto: '10.000,00',
    brutto: '11.900,00',
    ziele: ['Vertriebs-Logik (CRM)', 'Dokumenten-Engine', 'Automatisierte Tests', 'Zentrale API']
  },
  {
    bezeichnung: '// System Integration',
    stunden: '120',
    netto: '15.000,00',
    brutto: '17.850,00',
    ziele: ['Warenwirtschaft (ERP)', 'Drittsystem-Anbindung', 'Migration-Strategie', 'Performance-Audit']
  }
]
</script>

<style scoped>
@media (max-width: 340px) {
  h1 { font-size: 1.8rem !important; }
}
</style>