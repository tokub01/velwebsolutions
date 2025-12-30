<template>
  <div class="font-sans text-gray-900 bg-white selection:bg-red-100 selection:text-red-600">

    <section class="relative pt-32 pb-24 md:pt-48 md:pb-40 bg-gradient-to-br from-red-700 via-red-600 to-red-500 text-white px-6 overflow-hidden mt-[81px]">
      <div class="absolute inset-0 opacity-10 pointer-events-none">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,white_1px,transparent_0)] bg-[size:40px_40px]"></div>
      </div>

      <div class="relative z-10 max-w-6xl mx-auto text-center">
        <span class="inline-block px-5 py-2 mb-6 rounded-full bg-white text-red-600 text-[10px] font-black uppercase tracking-[0.2em] shadow-xl italic">
          ✓ Maßgeschneiderte Software-Lösungen
        </span>
        <h1 class="text-5xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter uppercase italic">
          Ihre Prozesse in <br />
          <span class="text-white/90 underline decoration-white/30 italic">einer Hand.</span>
        </h1>
        <p class="text-xl md:text-3xl text-red-50 font-medium max-w-4xl mx-auto leading-relaxed italic opacity-90">
          Ich entwickle für Sie digitale Werkzeuge, die Ordnung in Ihren Betrieb bringen. Vom intelligenten Kunden-Archiv bis zur kompletten Firmen-Steuerung – alles einfach bedienbar und genau auf Ihren Alltag zugeschnitten.
        </p>
      </div>
    </section>

    <section class="py-12 bg-gray-900 text-white border-y border-white/10">
      <div class="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div v-for="stat in stats" :key="stat.label">
          <div class="text-3xl md:text-5xl font-black text-red-600 mb-1 italic tracking-tighter">{{ stat.value }}</div>
          <div class="text-[10px] uppercase font-bold text-gray-400 tracking-widest">{{ stat.label }}</div>
        </div>
      </div>
    </section>

    <section class="py-24 px-6 bg-gray-50 border-b border-gray-100 text-center">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-4xl md:text-6xl font-black mb-8 uppercase italic tracking-tighter leading-none">
          Schluss mit Zettelwirtschaft <br /><span class="text-red-600 text-3xl md:text-5xl">und Excel-Chaos.</span>
        </h2>
        <p class="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium italic">
          Mein Ziel ist es, dass Sie sich wieder auf Ihr Kerngeschäft konzentrieren können. Ich baue Software, die Ihnen die Sucherei nach Informationen abnimmt und Routine-Aufgaben fast von alleine erledigt. Keine komplizierten Handbücher – einfach einloggen und loslegen.
        </p>
      </div>
    </section>

    <section class="py-32 px-6 bg-white overflow-hidden">
      <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        <div class="relative">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-red-50 text-red-700 font-black text-[10px] mb-8 uppercase tracking-widest border border-red-100 italic">
            // Digitale Präsenz
          </div>
          <h2 class="text-4xl md:text-7xl font-black mb-8 leading-[0.9] uppercase italic tracking-tighter">Professionell auftreten, <br/><span class="text-red-600">Kunden gewinnen.</span></h2>
          <p class="text-xl text-gray-600 mb-12 leading-relaxed font-medium italic">
            Ich gestalte Webseiten, die nicht nur modern aussehen, sondern echtes Vertrauen bei Ihren Besuchern wecken. Klar in der Botschaft und kinderleicht zu bedienen.
          </p>
          <div class="space-y-8">
            <div class="flex gap-6 group">
              <div class="flex-shrink-0 w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center text-3xl group-hover:rotate-6 transition-transform shadow-lg">📑</div>
              <div>
                <h4 class="font-black text-xl uppercase italic tracking-tighter">Strukturierte Klarheit</h4>
                <p class="text-gray-500 font-medium italic leading-snug">Ihre Kunden finden sofort, was sie suchen. Keine unnötigen Spielereien, sondern Fokus auf das Wesentliche.</p>
              </div>
            </div>
            <div class="flex gap-6 group">
              <div class="flex-shrink-0 w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center text-3xl group-hover:rotate-6 transition-transform shadow-lg">⚡</div>
              <div>
                <h4 class="font-black text-xl uppercase italic tracking-tighter">Schnelle Ladezeiten</h4>
                <p class="text-gray-500 font-medium italic leading-snug">Niemand wartet gerne. Ich sorge dafür, dass Ihre Seite blitzschnell auf jedem Smartphone und Computer lädt.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="relative">
          <div class="absolute -inset-4 bg-red-600/10 rounded-[4rem] rotate-3 -z-10"></div>
          <div class="bg-gray-100 rounded-[3.5rem] p-4 shadow-2xl overflow-hidden group">
            <NuxtImg
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
              alt="Webdesign Interface"
              class="rounded-[2.8rem] shadow-inner group-hover:scale-105 transition-transform duration-700 object-cover w-full h-[500px]"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="py-32 px-6 bg-gray-900 text-white rounded-[4rem] mx-4 shadow-3xl">
      <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        <div class="order-2 md:order-1 bg-white/5 p-12 rounded-[3.5rem] border border-white/10 backdrop-blur-md">
          <h3 class="text-2xl font-black mb-8 text-red-500 uppercase italic tracking-tighter">// Digitale Kundenverwaltung (CRM)</h3>
          <ul class="space-y-8 text-lg">
            <li v-for="benefit in crmBenefits" :key="benefit.title" class="flex items-start gap-5">
              <span class="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0 text-white font-bold italic">✓</span>
              <span class="italic font-medium text-gray-200">
                <strong class="text-white uppercase tracking-tighter">{{ benefit.title }}:</strong> {{ benefit.text }}
              </span>
            </li>
          </ul>
        </div>
        <div class="order-1 md:order-2">
          <span class="text-red-500 font-black uppercase tracking-[0.3em] text-[10px] mb-6 block italic">CRM - Customer Relationship Management</span>
          <h2 class="text-4xl md:text-7xl font-black mb-8 leading-[0.9] uppercase italic tracking-tighter">Das Gedächtnis <br/><span class="text-red-600">Ihrer Firma.</span></h2>
          <p class="text-xl text-gray-400 mb-10 leading-relaxed font-medium italic">
            Ein CRM ist wie ein digitales Archiv für alle Ihre Kontakte. Ich entwickle für Sie ein System, in dem Sie auf Knopfdruck sehen, was Sie wann mit welchem Kunden besprochen haben. Nie wieder verlorene Notizen oder vergessene Rückrufe.
          </p>
          <div class="p-8 bg-white/5 rounded-3xl border-l-8 border-red-600 italic text-gray-300 text-xl font-medium">
            "Stellen Sie sich vor, Sie hätten für jeden Kunden eine digitale Akte, die sich quasi von selbst sortiert."
          </div>
        </div>
      </div>
    </section>

    <section class="py-32 px-6 bg-white">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-24">
          <span class="text-red-600 font-black uppercase tracking-[0.3em] text-[10px] mb-6 block italic">ERP - Enterprise Resource Planning</span>
          <h2 class="text-4xl md:text-8xl font-black mb-8 uppercase italic tracking-tighter leading-none">Ihre Firmenzentrale <br/><span class="text-red-600">auf einem Bildschirm.</span></h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto font-medium italic">
            Ein ERP verbindet alle Ihre Abteilungen. Ich baue Ihnen ein Programm, mit dem Sie Angebote schreiben, Rechnungen verwalten und Ihren Lagerbestand prüfen können – alles an einem Ort, ohne zwischen Programmen hin- und herzuwechseln.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-10">
          <div v-for="(erp, idx) in erpFeatures" :key="idx" class="group p-12 bg-gray-50 rounded-[3.5rem] border border-gray-100 hover:bg-white hover:shadow-2xl transition-all duration-500">
            <div class="text-5xl mb-8 group-hover:scale-110 transition-transform inline-block">{{ erp.icon }}</div>
            <h4 class="text-2xl font-black mb-4 uppercase italic tracking-tighter">{{ erp.title }}</h4>
            <p class="text-gray-500 text-lg font-medium italic leading-relaxed">{{ erp.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-32 px-6 bg-red-50 rounded-[4rem] mx-4 mb-8">
      <div class="max-w-5xl mx-auto text-center">
        <h2 class="text-4xl md:text-7xl font-black mb-16 uppercase italic tracking-tighter leading-tight">Keine Angst vor <br/><span class="text-red-600">der Technik.</span></h2>
        <div class="grid md:grid-cols-2 gap-10 text-left">
          <div class="bg-white p-10 rounded-[3rem] shadow-xl border border-red-100 group">
            <h4 class="text-2xl font-black mb-6 flex items-center gap-3 uppercase italic tracking-tighter">
              <span class="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center text-white text-xl shadow-lg">🛡️</span> Rundum-Sorglos-Wartung
            </h4>
            <p class="text-gray-600 leading-relaxed font-medium italic">Ich kümmere mich darum, dass Ihr System sicher und aktuell bleibt. Sie müssen sich nicht um Updates oder Datensicherheit sorgen – das erledige ich im Hintergrund für Sie.</p>
          </div>
          <div class="bg-white p-10 rounded-[3rem] shadow-xl border border-red-100 group">
            <h4 class="text-2xl font-black mb-6 flex items-center gap-3 uppercase italic tracking-tighter">
              <span class="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center text-white text-xl shadow-lg">✉️</span> Ihr persönlicher Ansprechpartner
            </h4>
            <p class="text-gray-600 leading-relaxed font-medium italic">Wenn Sie eine Frage haben, schreiben Sie mir direkt. Ich erkläre Ihnen alles ohne Fachbegriffe und begleite Sie, bis Sie sich mit Ihrer neuen Software absolut sicher fühlen.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-32 px-6 bg-white text-center">
      <div class="max-w-4xl mx-auto bg-gray-900 p-16 rounded-[4rem] text-white shadow-3xl relative overflow-hidden">
        <div class="relative z-10">
          <h3 class="text-4xl md:text-6xl font-black mb-8 italic uppercase tracking-tighter leading-none">Einfach mal <br/><span class="text-red-600 text-5xl md:text-8xl">unverbindlich fragen.</span></h3>
          <p class="text-xl text-gray-400 mb-12 font-medium italic">
            Lassen Sie uns gemeinsam schauen, wie wir Ihren Arbeitsalltag leichter machen können. Ein kurzes Gespräch bringt meistens mehr Klarheit als langes Grübeln.
          </p>
          <NuxtLink to="/kontakt" class="inline-block bg-red-600 text-white px-14 py-7 rounded-[2rem] font-black text-2xl hover:bg-white hover:text-red-600 transition-all shadow-2xl uppercase italic transform hover:scale-105">
            Beratungs-Termin vereinbaren
          </NuxtLink>
        </div>
      </div>
    </section>

  </div>
</template>

<script setup>
definePageMeta({
  layout: 'guest'
})

useHead({
  title: 'Leistungen | VelWebSolutions - Webentwicklung einfach erklärt',
  meta: [
    { name: 'description', content: 'Ich entwickle individuelle Kundenverwaltungen (CRM) und Firmen-Software (ERP) mit Laravel & Vue.js. Einfach, effizient und persönlich.' }
  ]
})

const stats = [
  { label: 'Einfachheit', value: '100%' },
  { label: 'Erreichbarkeit', value: 'Direkt' },
  { label: 'Technik', value: 'Modern' },
  { label: 'Beratung', value: 'Ehrlich' }
]

const crmBenefits = [
  { title: 'Alles an einem Ort', text: 'Alle Telefonnummern, E-Mails und Notizen sortiert in einer digitalen Akte.' },
  { title: 'Nie wieder vergessen', text: 'Das System erinnert Sie automatisch, wenn ein Kunde seit Wochen keine Rückmeldung gegeben hat.' },
  { title: 'Einfache Suche', text: 'Finden Sie jeden Kontakt und jede Absprache in Sekunden – ganz ohne langes Suchen.' }
]

const erpFeatures = [
  { icon: '💰', title: 'Rechnungen schreiben', desc: 'Erstellen Sie Angebote und Rechnungen per Mausklick. Das System rechnet alles zusammen und speichert es ab.' },
  { icon: '📦', title: 'Lager & Bestand', desc: 'Sehen Sie sofort, was noch auf Lager ist. Wenn etwas knapp wird, meldet sich das Programm bei Ihnen.' },
  { icon: '📊', title: 'Übersicht behalten', desc: 'Sehen Sie grafisch aufbereitet, wie viel Umsatz Sie machen und welche Bereiche am besten laufen.' }
]
</script>