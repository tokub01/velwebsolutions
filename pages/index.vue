<template>
  <div class="font-sans text-gray-900 bg-white selection:bg-red-100 selection:text-red-600 antialiased overflow-x-hidden">

    <header class="relative pt-32 pb-20 md:pt-48 md:pb-40 bg-gradient-to-br from-red-700 via-red-600 to-red-500 text-white px-4 overflow-hidden mt-[70px] md:mt-[80px]">
      <div class="absolute inset-0 opacity-10 pointer-events-none">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,white_1px,transparent_0)] bg-[size:30px_30px] md:bg-[size:40px_40px]"></div>
      </div>

      <div class="relative z-10 max-w-6xl mx-auto text-center">
        <span class="inline-block px-5 py-2 mb-6 rounded-full bg-white text-red-600 text-[10px] font-black uppercase tracking-[0.2em] shadow-xl italic">
          ✓ Maßgeschneiderte Software-Lösungen
        </span>
        <h1 class="text-[clamp(2.25rem,10vw,6rem)] md:text-8xl font-[1000] mb-8 leading-[1.05] md:leading-[0.9] tracking-tighter uppercase italic px-2">
          Ihre Prozesse in <br class="hidden sm:block" />
          <span class="text-white/90 underline decoration-white/30 italic">einer Hand.</span>
        </h1>
        <p class="text-lg md:text-3xl text-red-50 font-medium max-w-4xl mx-auto leading-relaxed italic opacity-90 px-4 mb-12">
          Ich entwickle für Sie digitale Werkzeuge, die Ordnung in Ihren Betrieb bringen. Vom intelligenten Kunden-Archiv bis zur kompletten Firmen-Steuerung.
        </p>
        <div class="flex flex-col sm:flex-row justify-center gap-4 px-6">
          <NuxtLink to="/kontakt" class="bg-white text-red-600 px-10 py-5 rounded-2xl font-[1000] text-sm md:text-lg uppercase italic shadow-2xl hover:bg-gray-900 hover:text-white transition-all transform active:scale-95 text-center">
            Projekt anfragen
          </NuxtLink>
        </div>
      </div>
    </header>

    <section class="py-12 bg-gray-900 text-white border-y border-white/10">
      <div class="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div v-for="stat in stats" :key="stat.label">
          <div class="text-3xl md:text-5xl font-[1000] text-red-600 mb-1 italic tracking-tighter">{{ stat.value }}</div>
          <div class="text-[10px] uppercase font-bold text-gray-400 tracking-widest">{{ stat.label }}</div>
        </div>
      </div>
    </section>

    <section class="py-20 md:py-32 px-6 bg-gray-50 border-b border-gray-100 text-center">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-3xl md:text-6xl font-[1000] mb-8 uppercase italic tracking-tighter leading-tight px-2">
          Schluss mit Zettelwirtschaft <br />
          <span class="text-red-600 text-2xl md:text-5xl">und Excel-Chaos.</span>
        </h2>
        <p class="text-lg md:text-2xl text-gray-600 leading-relaxed font-medium italic max-w-3xl mx-auto">
          Mein Ziel ist es, dass Sie sich wieder auf Ihr Kerngeschäft konzentrieren können. Ich baue Software, die Ihnen die Sucherei nach Informationen abnimmt.
        </p>
      </div>
    </section>

    <section class="py-24 md:py-32 px-6 bg-white overflow-hidden text-center md:text-left">
      <div class="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 md:gap-20 items-center">
        <div class="relative order-2 md:order-1">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-red-50 text-red-700 font-black text-[10px] mb-8 uppercase tracking-widest border border-red-100 italic">
            // Digitale Präsenz
          </div>
          <h2 class="text-4xl md:text-7xl font-[1000] mb-8 leading-[1.1] md:leading-[0.9] uppercase italic tracking-tighter">
            Professionell auftreten, <br/><span class="text-red-600">Kunden gewinnen.</span>
          </h2>
          <p class="text-lg md:text-xl text-gray-600 mb-12 leading-relaxed font-medium italic max-w-xl mx-auto md:mx-0">
            Ich gestalte Webseiten, die echtes Vertrauen wecken. Klar in der Botschaft und kinderleicht zu bedienen.
          </p>
          <div class="space-y-8 max-w-md mx-auto md:mx-0">
            <div v-for="item in [{i:'📑', t:'Strukturierte Klarheit', d:'Kunden finden sofort, was sie suchen.'}, {i:'⚡', t:'Schnelle Ladezeiten', d:'Blitzschnell auf jedem Endgerät.'}]" :key="item.t" class="flex flex-col sm:flex-row items-center sm:items-start gap-6 group text-center sm:text-left">
              <div class="flex-shrink-0 w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center text-3xl group-hover:rotate-6 transition-transform shadow-lg">{{ item.i }}</div>
              <div>
                <h4 class="font-black text-xl uppercase italic tracking-tighter">{{ item.t }}</h4>
                <p class="text-gray-500 font-medium italic leading-snug">{{ item.d }}</p>
              </div>
            </div>
          </div>
        </div>
        <div class="relative order-1 md:order-2">
          <div class="absolute -inset-4 bg-red-600/10 rounded-[3rem] md:rounded-[4rem] rotate-3 -z-10"></div>
          <div class="bg-gray-100 rounded-[2.5rem] md:rounded-[3.5rem] p-3 md:p-4 shadow-2xl overflow-hidden group">
            <NuxtImg
              src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800"
              alt="Webdesign Interface"
              class="rounded-[2rem] md:rounded-[2.8rem] shadow-inner group-hover:scale-105 transition-transform duration-700 object-cover w-full h-[350px] md:h-[500px]"
            />
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 md:py-32 px-4 bg-gray-900 text-white rounded-[2.5rem] md:rounded-[4rem] mx-2 sm:mx-4 shadow-3xl text-center">
      <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div class="order-2 bg-white/5 p-8 md:p-12 rounded-[2.5rem] md:rounded-[3.5rem] border border-white/10 backdrop-blur-md">
          <h3 class="text-xl md:text-2xl font-black mb-8 text-red-500 uppercase italic tracking-tighter">// Digitale Kundenverwaltung</h3>
          <ul class="space-y-6 md:space-y-8 text-left max-w-md mx-auto">
            <li v-for="benefit in crmBenefits" :key="benefit.title" class="flex items-start gap-4">
              <span class="w-6 h-6 rounded-full bg-red-600 flex items-center justify-center flex-shrink-0 text-white text-xs font-bold italic">✓</span>
              <span class="italic font-medium text-gray-200 text-sm md:text-base leading-snug">
                <strong class="text-white uppercase tracking-tighter block mb-1">{{ benefit.title }}:</strong> {{ benefit.text }}
              </span>
            </li>
          </ul>
        </div>
        <div class="order-1">
          <span class="text-red-500 font-black uppercase tracking-[0.3em] text-[10px] mb-6 block italic">CRM - System_Memory_Core</span>
          <h2 class="text-4xl md:text-7xl font-[1000] mb-8 leading-[1.05] uppercase italic tracking-tighter">Das Gedächtnis <br/><span class="text-red-600">Ihrer Firma.</span></h2>
          <p class="text-lg md:text-xl text-gray-400 mb-10 leading-relaxed font-medium italic max-w-xl mx-auto">
            Ich entwickle für Sie ein System, in dem Sie auf Knopfdruck sehen, was wann mit welchem Kunden besprochen wurde.
          </p>
          <div class="p-6 md:p-8 bg-white/5 rounded-3xl border-l-4 md:border-l-8 border-red-600 italic text-gray-300 text-lg md:text-xl font-medium max-w-lg mx-auto">
            "Stellen Sie sich vor, Sie hätten für jeden Kunden eine digitale Akte, die sich quasi von selbst sortiert."
          </div>
        </div>
      </div>
    </section>

    <section class="py-24 md:py-32 px-6 bg-white text-center">
      <div class="max-w-7xl mx-auto">
        <div class="mb-16 md:mb-24">
          <span class="text-red-600 font-black uppercase tracking-[0.3em] text-[10px] mb-6 block italic">Central_Management</span>
          <h2 class="text-4xl md:text-8xl font-[1000] mb-8 uppercase italic tracking-tighter leading-none">Ihre Firmenzentrale</h2>
          <p class="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto font-medium italic">
            Angebote schreiben, Rechnungen verwalten und Lagerbestand prüfen – alles an einem Ort.
          </p>
        </div>

        <div class="grid md:grid-cols-3 gap-8 md:gap-10">
          <div v-for="(erp, idx) in erpFeatures" :key="idx" class="group p-10 md:p-12 bg-gray-50 rounded-[2.5rem] md:rounded-[3.5rem] border border-gray-100 hover:bg-white hover:shadow-2xl transition-all duration-500">
            <div class="text-5xl mb-6 group-hover:scale-110 transition-transform inline-block">{{ erp.icon }}</div>
            <h4 class="text-xl md:text-2xl font-[1000] mb-4 uppercase italic tracking-tighter">{{ erp.title }}</h4>
            <p class="text-gray-500 text-base md:text-lg font-medium italic leading-relaxed">{{ erp.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 md:py-32 px-4 bg-red-50 rounded-[2.5rem] md:rounded-[4rem] mx-2 sm:mx-4 mb-12 text-center">
      <div class="max-w-5xl mx-auto">
        <h2 class="text-4xl md:text-7xl font-[1000] mb-12 md:mb-16 uppercase italic tracking-tighter leading-tight">Keine Angst vor <br/><span class="text-red-600">der Technik.</span></h2>
        <div class="grid md:grid-cols-2 gap-6 md:gap-10">
          <div v-for="item in techFears" :key="item.t" class="bg-white p-8 md:p-10 rounded-[2.5rem] md:rounded-[3rem] shadow-xl border border-red-100 text-center sm:text-left group">
            <div class="flex flex-col sm:flex-row items-center gap-6 mb-6">
               <span class="w-14 h-14 bg-red-600 rounded-2xl flex items-center justify-center text-white text-2xl shadow-lg shrink-0">{{ item.i }}</span>
               <h4 class="text-xl md:text-2xl font-black uppercase italic tracking-tighter leading-tight">{{ item.t }}</h4>
            </div>
            <p class="text-gray-600 leading-relaxed font-medium italic text-sm md:text-base">{{ item.d }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 md:py-32 px-4 text-center">
  <div class="max-w-4xl mx-auto bg-gray-900 p-8 md:p-20 rounded-[3rem] md:rounded-[4rem] text-white shadow-3xl relative overflow-hidden">
    <div class="absolute inset-0 opacity-5 bg-[size:30px_30px] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]"></div>

    <div class="relative z-10">
      <h3 class="text-[clamp(1.75rem,7vw,4rem)] md:text-6 font-[1000] mb-8 italic uppercase tracking-tighter leading-[0.95] md:leading-none">
        Einfach mal <br/>
        <span class="text-red-600 text-[clamp(2.25rem,10vw,6rem)] block mt-2">unverbindlich</span>
        fragen.
      </h3>

      <p class="text-gray-400 text-sm md:text-xl font-medium italic leading-relaxed max-w-xl mx-auto mb-10 px-2">
        Lassen Sie uns gemeinsam schauen, wie wir Ihren Arbeitsalltag leichter machen können. Ein kurzes Gespräch bringt meistens mehr Klarheit als langes Grübeln.
      </p>

      <div class="flex flex-col sm:flex-row justify-center gap-4 md:gap-6 mt-10">
        <NuxtLink
          to="/kontakt?ref=beratung"
          class="w-full md:w-auto bg-red-600 text-white px-8 py-5 rounded-2xl font-black text-lg md:text-xl hover:bg-white hover:text-red-600 transition-all shadow-xl uppercase italic text-center active:scale-95"
        >
          Beratungs-Termin vereinbaren
        </NuxtLink>
      </div>
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
  title: 'Leistungen | VelWebSolutions - Software einfach erklärt',
  meta: [
    { name: 'description', content: 'Individuelle Kundenverwaltungen (CRM) und Firmen-Software (ERP) mit Laravel & Vue.js. Einfach, effizient und persönlich.' }
  ]
})

const stats = [
  { label: 'Einfachheit', value: '100%' },
  { label: 'Erreichbarkeit', value: 'Direkt' },
  { label: 'Technik', value: 'Modern' },
  { label: 'Beratung', value: 'Ehrlich' }
]

const techFears = [
  { i: '🛡️', t: 'Sorglos-Wartung', d: 'Ich kümmere mich darum, dass Ihr System sicher bleibt. Sie müssen sich nicht um Updates oder Datensicherheit sorgen.' },
  { i: '✉️', t: 'Direkter Kontakt', d: 'Keine Warteschlangen. Ich erkläre Ihnen alles ohne Fachbegriffe und begleite Sie persönlich.' }
]

const crmBenefits = [
  { title: 'Alles an einem Ort', text: 'Telefonnummern, E-Mails und Notizen sortiert in einer digitalen Akte.' },
  { title: 'Nie wieder vergessen', text: 'Das System erinnert Sie automatisch an fällige Rückmeldungen.' },
  { title: 'Einfache Suche', text: 'Finden Sie jeden Kontakt in Sekunden – ganz ohne langes Suchen.' }
]

const erpFeatures = [
  { icon: '💰', title: 'Rechnungen schreiben', desc: 'Erstellen Sie Angebote und Rechnungen per Mausklick.' },
  { icon: '📦', title: 'Lager & Bestand', desc: 'Sehen Sie sofort, was noch auf Lager ist. Das System meldet Engpässe.' },
  { icon: '📊', title: 'Übersicht behalten', desc: 'Umsätze und Bestände grafisch auf einem Blick.' }
]
</script>

<style scoped>
.shadow-3xl {
  box-shadow: 0 35px 60px -15px rgba(0, 0, 0, 0.5);
}
</style>