<template>
  <div class="font-sans text-gray-900 bg-white selection:bg-red-100 selection:text-red-600">

    <section class="relative pt-32 pb-24 md:pt-48 md:pb-40 bg-gradient-to-br from-red-700 via-red-600 to-red-500 text-white px-6 overflow-hidden mt-[81px]">
      <div class="absolute inset-0 opacity-10 pointer-events-none">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,white_1px,transparent_0)] bg-[size:40px_40px]"></div>
      </div>

      <div class="relative z-10 max-w-6xl mx-auto text-center">
        <span class="inline-block px-5 py-2 mb-6 rounded-full bg-white text-red-600 text-[10px] font-black uppercase tracking-[0.2em] shadow-xl animate-bounce italic">
          ✓ Digitaler Vorsprung durch Technik
        </span>
        <h1 class="text-5xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter uppercase italic">
          Technik, die sich <br />
          <span class="text-white/90 underline decoration-white/30 italic">Ihnen anpasst.</span>
        </h1>
        <p class="text-xl md:text-3xl text-red-50 font-medium max-w-4xl mx-auto leading-relaxed italic opacity-90">
          Wir unterstützen Sie dabei, Ihren Betrieb digital aufzustellen. Ohne Stress, ohne komplizierte Begriffe – dafür mit Lösungen, die Ihren Alltag spürbar entlasten.
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
          Digitalisierung muss <br /><span class="text-red-600 text-3xl md:text-5xl">nicht schwer sein.</span>
        </h2>
        <p class="text-xl md:text-2xl text-gray-600 leading-relaxed font-medium italic">
          Viele unserer Kunden möchten einfach, dass ihre IT funktioniert. Wir haben uns darauf spezialisiert, komplexe Systeme so zu bauen, dass sie für jeden intuitiv bedienbar sind. Wir sind Ihr Partner, der zuhört und umsetzt.
        </p>
      </div>
    </section>

    <section class="py-32 px-6 bg-white overflow-hidden">
      <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        <div class="relative">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-red-50 text-red-700 font-black text-[10px] mb-8 uppercase tracking-widest border border-red-100 italic">
            // Ihr Internet-Auftritt
          </div>
          <h2 class="text-4xl md:text-7xl font-black mb-8 leading-[0.9] uppercase italic tracking-tighter">Gefunden werden & <br/><span class="text-red-600">Eindruck machen.</span></h2>
          <p class="text-xl text-gray-600 mb-12 leading-relaxed font-medium italic">
            Ihre Webseite ist oft der erste Kontakt zu neuen Kunden. Wir gestalten sie so, dass sie Professionalität ausstrahlt und Ihre Besucher nicht durch zu viele Knöpfe verwirrt.
          </p>
          <div class="space-y-8">
            <div class="flex gap-6 group">
              <div class="flex-shrink-0 w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center text-3xl group-hover:rotate-6 transition-transform shadow-lg">👓</div>
              <div>
                <h4 class="font-black text-xl uppercase italic tracking-tighter">Bestens lesbar</h4>
                <p class="text-gray-500 font-medium italic leading-snug">Wir nutzen große Schriften und klare Kontraste – für Augen, die nicht mehr alles wie mit 20 sehen.</p>
              </div>
            </div>
            <div class="flex gap-6 group">
              <div class="flex-shrink-0 w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center text-3xl group-hover:rotate-6 transition-transform shadow-lg">⚡</div>
              <div>
                <h4 class="font-black text-xl uppercase italic tracking-tighter">Keine Wartezeiten</h4>
                <p class="text-gray-500 font-medium italic leading-snug">Ihre Seite lädt blitzschnell (Lighthouse Score 95+), damit Ihre Kunden nicht die Geduld verlieren.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="relative">
          <div class="absolute -inset-4 bg-red-600/10 rounded-[4rem] rotate-3 -z-10"></div>
          <div class="bg-gray-100 rounded-[3.5rem] p-4 shadow-2xl overflow-hidden group">
            <NuxtImg
              provider="static"
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
          <h3 class="text-2xl font-black mb-8 text-red-500 uppercase italic tracking-tighter">// Der digitale Vorsprung</h3>
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
          <span class="text-red-500 font-black uppercase tracking-[0.3em] text-[10px] mb-6 block italic">Customer Relationship Management</span>
          <h2 class="text-4xl md:text-7xl font-black mb-8 leading-[0.9] uppercase italic tracking-tighter">Nie wieder den <br/><span class="text-red-600">Überblick verlieren.</span></h2>
          <p class="text-xl text-gray-400 mb-10 leading-relaxed font-medium italic">
            Ein CRM-System ist ein elektronisches Kunden-Archiv, das mitdenkt. Wir bauen es technisch fundiert auf Basis von Laravel, damit Sie nur das sehen, was Sie wirklich brauchen.
          </p>
          <div class="p-8 bg-white/5 rounded-3xl border-l-8 border-red-600 italic text-gray-300 text-xl font-medium">
            "Stellen Sie sich vor, Ihr Adressbuch würde Ihnen morgens sagen, wen Sie heute anrufen sollten."
          </div>
        </div>
      </div>
    </section>

    <section class="py-32 px-6 bg-white">
      <div class="max-w-7xl mx-auto">
        <div class="text-center mb-24">
          <span class="text-red-600 font-black uppercase tracking-[0.3em] text-[10px] mb-6 block italic">Enterprise Resource Planning</span>
          <h2 class="text-4xl md:text-8xl font-black mb-8 uppercase italic tracking-tighter leading-none">Ihre Firmenzentrale <br/><span class="text-red-600">in einer Hand.</span></h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto font-medium italic">
            Wir verbinden alle Abteilungen – vom Lager bis zur Buchhaltung – in einem einzigen, schnellen Web-Programm.
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
        <h2 class="text-4xl md:text-7xl font-black mb-16 uppercase italic tracking-tighter leading-tight">Technik ohne <br/><span class="text-red-600">Kopfschmerzen.</span></h2>
        <div class="grid md:grid-cols-2 gap-10 text-left">
          <div class="bg-white p-10 rounded-[3rem] shadow-xl border border-red-100 group">
            <h4 class="text-2xl font-black mb-6 flex items-center gap-3 uppercase italic tracking-tighter">
              <span class="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center text-white text-xl shadow-lg">🛡️</span> Wartung & Sicherheit
            </h4>
            <p class="text-gray-600 leading-relaxed font-medium italic">Wir halten Ihr System im Hintergrund sauber. Sie müssen keine Updates installieren oder sich um Hacker-Angriffe sorgen – das übernehmen wir für Sie.</p>
          </div>
          <div class="bg-white p-10 rounded-[3rem] shadow-xl border border-red-100 group">
            <h4 class="text-2xl font-black mb-6 flex items-center gap-3 uppercase italic tracking-tighter">
              <span class="w-12 h-12 bg-red-600 rounded-xl flex items-center justify-center text-white text-xl shadow-lg">📞</span> Persönliche Begleitung
            </h4>
            <p class="text-gray-600 leading-relaxed font-medium italic">Wenn Sie eine Frage haben, erreichen Sie uns direkt. Wir erklären Ihnen die Funktionen so lange, bis Sie sich absolut sicher im Umgang mit der Software fühlen.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-32 px-6 bg-white text-center">
      <div class="max-w-4xl mx-auto bg-gray-900 p-16 rounded-[4rem] text-white shadow-3xl relative overflow-hidden">
        <div class="relative z-10">
          <h3 class="text-4xl md:text-6xl font-black mb-8 italic uppercase tracking-tighter leading-none">Lassen Sie uns <br/><span class="text-red-600 text-5xl md:text-8xl">drüber sprechen.</span></h3>
          <p class="text-xl text-gray-400 mb-12 font-medium italic">
            In einem unverbindlichen Strategie-Check finden wir heraus, welche Lösung für Sie den größten Nutzen bringt.
          </p>
          <NuxtLink to="/kontakt" class="inline-block bg-red-600 text-white px-14 py-7 rounded-[2rem] font-black text-2xl hover:bg-white hover:text-red-600 transition-all shadow-2xl uppercase italic transform hover:scale-105">
            Strategie-Check vereinbaren
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
  title: 'Leistungen | VelWebSolutions - Technik einfach erklärt',
  meta: [
    { name: 'description', content: 'Individuelle Webentwicklung, CRM & ERP-Lösungen mit Laravel & Vue.js. Wir digitalisieren Ihren Betrieb effizient und verständlich.' }
  ]
})

const stats = [
  { label: 'Individuell', value: '100%' },
  { label: 'Reaktionszeit', value: '< 2h' },
  { label: 'Architecture', value: 'Clean' },
  { label: 'Cloud Tech', value: 'Native' }
]

const crmBenefits = [
  { title: 'Zentrales Archiv', text: 'Alle Adressen an einem Ort – kein Suchen mehr in Excel.' },
  { title: 'Kontakthistorie', text: '"Was wurde besprochen?" – Ein Blick in die digitale Akte genügt.' },
  { title: 'Wiedervorlage', text: 'Das System erinnert Sie automatisch an wichtige Termine.' }
]

const erpFeatures = [
  { icon: '💰', title: 'Rechnungsstellung', desc: 'Angebote und Rechnungen schreiben so einfach wie einen Brief. Alles automatisch berechnet.' },
  { icon: '📦', title: 'Lagerverwaltung', desc: 'Behalten Sie den Bestand im Auge. Das System warnt bei Engpässen automatisch.' },
  { icon: '📊', title: 'Live-Auswertung', desc: 'Sehen Sie auf Knopfdruck, wie sich Ihr Unternehmen entwickelt. Klar und ohne Tabellen-Chaos.' }
]
</script>

<style scoped>
/* Tailwind Utilities */
.shadow-3xl {
  box-shadow: 0 35px 60px -15px rgba(0, 0, 0, 0.4);
}

/* Nuxt-spezifische Page-Transitions können hier gesteuert werden */
.page-enter-active, .page-leave-active {
  transition: all 0.4s;
}
.page-enter-from, .page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>