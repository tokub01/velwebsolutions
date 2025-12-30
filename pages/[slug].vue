<template>
  <div class="font-sans text-gray-900 bg-white selection:bg-red-100 selection:text-red-600 antialiased overflow-x-hidden" v-if="isValidCity">

    <header class="relative pt-24 pb-16 md:pt-48 md:pb-40 bg-gradient-to-br from-red-700 via-red-600 to-red-500 text-white px-4 sm:px-6 overflow-hidden mt-[60px] md:mt-[73px]">
      <div class="absolute inset-0 opacity-10 pointer-events-none">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,white_1px,transparent_0)] bg-[size:30px_30px] md:bg-[size:40px_40px]"></div>
      </div>

      <div class="relative z-10 max-w-7xl mx-auto text-center">
        <span class="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-[9px] md:text-[10px] font-black uppercase tracking-[0.2em] italic">
          ✓ Kapazitäten in {{ cityName }} verfügbar
        </span>
        <h1 class="text-[clamp(2rem,8vw,5rem)] md:text-[clamp(3.5rem,10vw,8rem)] font-[1000] mb-6 md:mb-8 leading-[1.05] md:leading-[0.9] tracking-tighter uppercase italic px-2">
          {{ displayContent.h1Prefix }} <br class="hidden sm:block" />
          <span class="text-white underline decoration-white/30 italic">{{ cityName }}.</span>
        </h1>
        <p class="text-base sm:text-xl md:text-2xl lg:text-3xl text-red-50 font-medium max-w-3xl mx-auto leading-relaxed italic opacity-95 px-4 mb-10">
          Ich entwickle für Unternehmen in <span class="text-white border-b-2 border-white/20">{{ cityName }}</span> digitale Werkzeuge, die Ordnung in den Betrieb bringen.
        </p>

        <div class="flex flex-col sm:flex-row justify-center gap-4 px-6">
          <NuxtLink to="/kontakt" class="bg-white text-red-600 px-8 py-4 rounded-2xl font-[1000] text-sm uppercase italic shadow-2xl hover:bg-gray-900 hover:text-white transition-all transform active:scale-95 text-center">
            Projekt anfragen
          </NuxtLink>
        </div>
      </div>
    </header>

    <section class="py-12 bg-gray-900 text-white border-y border-white/10">
      <div class="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 text-center">
        <div v-for="stat in stats" :key="stat.label" class="flex flex-col items-center">
          <div class="text-3xl sm:text-4xl md:text-5xl font-[1000] text-red-600 mb-1 italic tracking-tighter">{{ stat.value }}</div>
          <div class="text-[9px] md:text-[10px] uppercase font-black text-gray-500 tracking-widest leading-tight max-w-[100px]">{{ stat.label }}</div>
        </div>
      </div>
    </section>

    <section class="py-10 px-4 bg-gray-50 border-b border-gray-100">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 bg-white p-6 md:p-8 rounded-3xl border border-gray-200 shadow-sm">
        <div class="text-center md:text-left">
          <h3 class="text-lg font-black uppercase italic tracking-tighter">Bereit für die Digitalisierung in {{ cityName }}?</h3>
          <p class="text-sm text-gray-500 font-medium italic">Unverbindliche Erstberatung & technisches Audit anfordern.</p>
        </div>
        <NuxtLink to="/kontakt" class="w-full md:w-auto bg-red-600 text-white px-8 py-4 rounded-xl font-black text-xs uppercase italic hover:bg-gray-900 transition-all text-center shadow-lg shadow-red-100">
          Jetzt Termin sichern
        </NuxtLink>
      </div>
    </section>

    <section class="py-16 md:py-32 px-4 sm:px-6 bg-white overflow-hidden text-gray-900">
      <div class="max-w-7xl mx-auto">
        <div class="mb-12 md:mb-20 text-center md:text-left">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-red-50 text-red-700 font-black text-[9px] md:text-[10px] mb-6 uppercase tracking-widest border border-red-100 italic">
            // Expertise am Standort
          </div>
          <h2 class="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-[1000] mb-6 leading-tight uppercase italic tracking-tighter">
            Digitale Lösungen <br class="hidden md:block"/><span class="text-red-600">für {{ cityName }}.</span>
          </h2>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-12">
          <div v-for="(service, sIndex) in expandedServices" :key="sIndex" class="group flex flex-col items-start">
            <div class="w-14 h-14 md:w-16 md:h-16 bg-gray-900 rounded-2xl flex items-center justify-center text-2xl md:text-3xl mb-6 group-hover:rotate-6 transition-transform shadow-xl shadow-gray-200">
              <component :is="service.icon" class="w-6 h-6 md:w-8 md:h-8 text-white" />
            </div>
            <div class="w-full">
              <h4 class="font-[1000] text-xl md:text-2xl uppercase italic tracking-tighter mb-3 leading-tight">{{ service.title }}</h4>
              <p class="text-gray-600 text-base md:text-lg font-medium italic leading-relaxed mb-6">{{ service.description }}</p>

              <div class="flex flex-wrap gap-2">
                <span v-for="item in service.bullets" :key="item" class="px-3 py-1 bg-gray-50 text-red-600 text-[9px] font-black uppercase tracking-widest border border-gray-100 rounded-lg italic">
                  {{ item }}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-12 md:py-20 bg-white">
      <div class="max-w-5xl mx-auto px-4 sm:px-6">
        <div class="bg-red-600 text-white p-8 md:p-16 rounded-[2.5rem] md:rounded-[4rem] shadow-2xl relative overflow-hidden">
          <div class="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-3xl pointer-events-none"></div>

          <div class="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12 text-center md:text-left">
            <div class="shrink-0 w-20 h-20 bg-white/20 rounded-full flex items-center justify-center animate-pulse">
               <Rocket class="w-10 h-10 text-white" />
            </div>
            <div class="flex-1 space-y-4">
              <h3 class="text-2xl md:text-4xl font-[1000] uppercase italic tracking-tighter leading-none">Projekt-Checkup {{ cityName }}</h3>
              <p class="text-red-100 font-medium italic text-base md:text-lg leading-relaxed">Sicherheits- & Performance-Check für Ihr Unternehmen. <br class="hidden md:block" /> Kostenfrei für lokale Betriebe.</p>
            </div>
            <NuxtLink to="/kontakt?ref=checkup" class="w-full md:w-auto bg-white text-red-600 px-10 py-5 rounded-2xl font-[1000] text-lg uppercase italic hover:bg-gray-900 hover:text-white transition-all shadow-xl text-center active:scale-95">
              Check anfordern
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <section class="py-16 md:py-32 px-4 sm:px-6 bg-gray-900 text-white rounded-[2.5rem] md:rounded-[4rem] mx-2 sm:mx-4 shadow-3xl">
      <div class="max-w-4xl mx-auto">
        <div class="text-center mb-12 md:mb-20 px-4">
          <span class="text-red-500 font-black uppercase tracking-[0.3em] text-[9px] mb-4 block italic">Knowledge_Base</span>
          <h2 class="text-3xl md:text-6xl font-[1000] mb-6 leading-none uppercase italic tracking-tighter">Wissen schafft <span class="text-red-600 text-4xl md:text-7xl">Vertrauen.</span></h2>
          <p class="text-base md:text-xl text-gray-400 font-medium italic leading-relaxed max-w-2xl mx-auto">
            Komplexe Technik verständlich erklärt für Ihr Vorhaben in {{ cityName }}.
          </p>
        </div>

        <div class="space-y-6">
          <article v-for="(faq, index) in localFaqs" :key="index" class="bg-white/[0.03] rounded-3xl border border-white/10 transition-all hover:bg-white/[0.06] overflow-hidden">
            <details class="group w-full">
              <summary class="flex justify-between items-center p-6 md:p-10 cursor-pointer list-none focus:outline-none select-none">
                <h3 class="text-sm md:text-xl font-black uppercase italic text-white pr-6 tracking-tight leading-snug text-left">{{ faq.question }}</h3>
                <div class="shrink-0 w-10 h-10 rounded-full bg-red-600 flex items-center justify-center text-white transition-all duration-300 group-open:rotate-45 group-hover:scale-110 shadow-lg">
                  <span class="text-2xl font-bold">+</span>
                </div>
              </summary>
              <div class="px-6 pb-10 md:px-10 md:pb-12 text-sm md:text-lg text-gray-400 leading-relaxed font-medium italic border-t border-white/5 pt-8 whitespace-pre-line text-left transition-opacity duration-500 opacity-0 group-open:opacity-100">
                {{ faq.answer }}
              </div>
            </details>
          </article>
        </div>
      </div>
    </section>

    <section class="py-20 px-4 text-center">
      <div class="max-w-4xl mx-auto bg-gray-900 p-10 md:p-20 rounded-[3rem] md:rounded-[4rem] text-white shadow-3xl relative overflow-hidden">
        <div class="absolute inset-0 opacity-5 bg-[size:30px_30px] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]"></div>
        <div class="relative z-10">
          <h3 class="text-3xl md:text-6xl font-[1000] mb-6 md:mb-10 italic uppercase tracking-tighter leading-none">
            Bereit für den <br/><span class="text-red-600 text-4xl md:text-8xl">nächsten Schritt?</span>
          </h3>
          <div class="flex flex-col md:flex-row justify-center gap-4 md:gap-6 mt-10">
            <NuxtLink to="/kontakt?ref=check" class="w-full md:w-auto bg-white text-gray-900 px-8 py-5 rounded-2xl font-black text-lg md:text-xl hover:bg-red-600 hover:text-white transition-all shadow-xl uppercase italic text-center active:scale-95">
              Technik-Check
            </NuxtLink>
            <NuxtLink to="/kontakt?ref=call" class="w-full md:w-auto bg-red-600 text-white px-8 py-5 rounded-2xl font-black text-lg md:text-xl hover:bg-white hover:text-red-600 transition-all shadow-xl uppercase italic text-center active:scale-95">
              Strategie-Call
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <section class="py-12 md:py-20 px-4 sm:px-6 border-t border-gray-100 bg-gray-50/50">
      <div class="max-w-7xl mx-auto text-center">
        <h4 class="text-[9px] md:text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-8 md:mb-12 italic">// Regionales Netzwerk</h4>
        <div class="flex flex-wrap justify-center gap-2 md:gap-3 px-2">
          <NuxtLink
            v-for="city in nearbyCities" :key="city.slug"
            :to="`/${currentType}-${city.slug}`"
            class="px-4 py-2 md:px-6 md:py-3 bg-white hover:bg-red-600 text-gray-500 hover:text-white rounded-lg md:rounded-xl font-black text-[9px] md:text-[11px] transition-all uppercase italic border border-gray-200 shadow-sm hover:shadow-lg active:scale-95"
          >
            {{ city.name }}
          </NuxtLink>
        </div>
      </div>
    </section>

  </div>
</template>

<style scoped>
/* Chrome, Safari and Edge hide scrollbar */
details > summary {
  list-style: none;
}
details > summary::-webkit-details-marker {
  display: none;
}

/* Sanftes Einblenden des FAQ-Inhalts */
details[open] summary ~ * {
  animation: sweep .5s ease-in-out;
}

@keyframes sweep {
  0%    {opacity: 0; transform: translateY(-10px)}
  100%  {opacity: 1; transform: translateY(0)}
}
</style>

<script setup>
import { computed } from 'vue'
import { useRoute, createError, useHead } from '#app'
import { Code2, Layout, Database, Rocket, ShieldCheck, Search } from 'lucide-vue-next'

// Layout Definition
definePageMeta({
  layout: 'guest',
  validate: (route) => {
    const slug = route.params.slug || ''
    const validPrefixes = ['webentwicklung-', 'php-laravel-agentur-', 'softwareentwicklung-', 'vue-js-entwicklung-']
    // Nur wahr, wenn der Slug mit einem erlaubten Präfix startet
    return validPrefixes.some(prefix => slug.startsWith(prefix))
  }
})

// Datenquellen
import { cityContent } from '~/data/cityContent'
import { phpLaravelContent } from '~/data/phpLaravelContent'
import { softwareContent } from '~/data/softwareContent'
import { vueContent } from '~/data/vueContent'

const route = useRoute()
const slug = computed(() => route.params.slug || '')

// Deine Cluster-Mappings
const clusterMapping = {
  'webentwicklung': { topic: 'Webentwicklung', h1Prefix: 'Webentwicklung für', dataSource: cityContent },
  'php-laravel-agentur': { topic: 'Laravel', h1Prefix: 'PHP & Laravel Agentur in', dataSource: phpLaravelContent },
  'softwareentwicklung': { topic: 'Software', h1Prefix: 'Softwareentwicklung in', dataSource: softwareContent },
  'vue-js-entwicklung': { topic: 'Vue.js', h1Prefix: 'Vue.js Experten in', dataSource: vueContent }
}

const cityData = computed(() => {
  const fullSlug = slug.value
  if (!fullSlug || fullSlug.startsWith('_') || fullSlug.includes('.')) {
    return null
  }

  // Finde den passenden Key (Präfix)
  const matchedPrefix = Object.keys(clusterMapping)
    .sort((a, b) => b.length - a.length)
    .find(p => fullSlug.startsWith(p))

  if (!matchedPrefix) return null

  const config = clusterMapping[matchedPrefix]
  const cityKey = fullSlug.replace(`${matchedPrefix}-`, '').toLowerCase()

  const data = config.dataSource[cityKey]
  if (!data) return null

  return { ...data, config, typeKey: matchedPrefix, cityKey }
})

const isValidCity = computed(() => !!cityData.value)

// 404 Security
if (!cityData.value) {
  throw createError({ statusCode: 404, statusMessage: 'Seite nicht gefunden', fatal: true })
}

const cityName = computed(() => cityData.value?.cityName || '')
const displayContent = computed(() => cityData.value?.config || {})
const currentType = computed(() => cityData.value?.typeKey || 'webentwicklung')

const stats = [
  { value: '98%', label: 'Code-Effizienz' },
  { value: '< 2h', label: 'Reaktionszeit' },
  { value: 'Clean', label: 'Architecture' },
  { value: 'NRW', label: 'Fokus Region' }
]

const expandedServices = computed(() => [
  { icon: Code2, title: 'Individuelle Programmierung', description: `In ${cityName.value} setzen wir auf Clean-Code Prinzipien. Wir bauen keine Wegwerf-Software, sondern nachhaltige Backends.`, bullets: ['Wartbar', 'Skalierbar', 'API-First'] },
  { icon: Layout, title: 'UI/UX & Webdesign', description: `Design ist Psychologie. Wir gestalten Interfaces für ${cityName.value}, die Nutzer ohne langes Nachdenken zum Ziel führen.`, bullets: ['Conversion Fokus', 'Responsive', 'Intuitive UX'] },
  { icon: Database, title: 'Business Software', description: `Vom CRM bis zur Automatisierung – wir entwickeln Web-Apps für ${cityName.value}, die Prozesse wirklich beschleunigen.`, bullets: ['Cloud-Native', 'Sicher', 'Performant'] },
  { icon: Search, title: 'Technische SEO-Beratung', description: `Gefunden werden in ${cityName.value}. Wir optimieren die Technik unter der Haube für maximale Google-Sichtbarkeit.`, bullets: ['Lighthouse 95+', 'Strukturierte Daten', 'Speed'] },
  { icon: ShieldCheck, title: 'Security & Wartung', description: `Sicherheit am Standort ${cityName.value} ist Pflicht. Wir schützen Ihre Anwendung durch proaktive Updates.`, bullets: ['DSGVO Check', 'SSL Audit', '24/7 Monitoring'] },
  { icon: Rocket, title: 'Core Web Vitals', description: `Performance ist Geld. Wir trimmen Ihre Webanwendung in ${cityName.value} auf Ladezeiten im Millisekundenbereich.`, bullets: ['Edge Caching', 'Asset Minify', 'Next-Gen Images'] }
])

// Deine gewünschten FAQs
const localFaqs = computed(() => [
  {
    question: `Wieso zeichnet sich unsere Webentwicklung-Agentur in ${cityName.value} aus?`,
    answer: `Eine führende Webentwicklungs-Agentur zeichnet sich durch die Kombination aus agiler Arbeitsweise (z.B. SCRUM), maßgeschneiderten technischen Lösungen und einem tiefen Verständnis für Nutzerzentrierung aus. Wir liefern messbare Ergebnisse am Standort ${cityName.value}.`
  },
  {
    question: `Welche Vorteile bietet die Zusammenarbeit in ${cityName.value}?`,
    answer: `• Agile SCRUM-Methodik für volle Transparenz.\n• Individuelle Programmierung (kein Baukasten).\n• Höchste Sicherheitsstandards und technisches Consulting.\n• ROI-orientierte Entwicklung für Ihr Unternehmen.`
  },
  {
    question: "Was ist Software?",
    answer: `Für unsere Projekte in ${cityName.value} definieren wir: Software ist der nicht-physische Teil eines Computers, eine Sammlung von Anweisungen, Daten und Programmen, die dem Gerät sagen, was es tun soll, damit wir Aufgaben wie Surfen, Spiele spielen oder Dokumente erstellen können, und bildet zusammen mit der Hardware das funktionierende System.`
  },
  {
    question: "Was ist Webentwicklung?",
    answer: `In Bezug auf den Standort ${cityName.value} gilt: Webentwicklung ist die Erstellung, Gestaltung und Pflege von Websites und Webanwendungen (wie Online-Shops, soziale Medien, Streaming-Dienste), die über das Internet zugänglich sind, indem sie sowohl das sichtbare Frontend (was der Nutzer sieht) als auch das unsichtbare Backend (Server, Datenbanken) mit Technologien wie HTML, CSS, JavaScript und Frameworks programmieren und integrieren, um funktionale und interaktive Erlebnisse zu schaffen. Es ist ein Überbegriff für die Softwareentwicklung im Webbereich, der sich von klassischer Software durch die Nutzung des Browsers als Schnittstelle unterscheidet.`
  },
  {
    question: "Was ist Softwareentwicklung?",
    answer: `Für Unternehmen in ${cityName.value} ist Softwareentwicklung der umfassende Prozess der Planung, Erstellung, Prüfung, Implementierung und Wartung von Software. Es geht um mehr als nur das Schreiben von Code; es umfasst das Design von Benutzeroberflächen, die Definition von Datenstrukturen und die kontinuierliche Pflege über den gesamten Lebenszyklus hinweg.`
  },
  {
    question: "Was ist Webdesign?",
    answer: `Webdesign am Standort ${cityName.value} umfasst die visuelle, strukturelle und funktionale Gestaltung von Websites. Es kombiniert ästhetische Elemente wie Layout und Typografie mit technischen Aspekten wie Usability und UX, wobei modernes Design stets 'Responsive' für alle Endgeräte optimiert ist.`
  },
  {
    question: "Was ist der Unterschied zwischen Frontend und Backend?",
    answer: `Das Frontend ist der Teil, den der Nutzer in ${cityName.value} direkt sieht (Client-Side, z.B. mit Vue.js). Das Backend ist der unsichtbare Teil im Hintergrund (Server-Side, z.B. mit PHP/Laravel), der die Logik und Datenbanken verwaltet.`
  },
  {
    question: "Was ist Fullstack-Entwicklung?",
    answer: `Fullstack-Entwicklung für Projekte in ${cityName.value} bezeichnet die Fähigkeit, sowohl das Frontend als auch das Backend einer Anwendung zu programmieren. Dies ermöglicht eine effizientere Projektumsetzung und bessere Abstimmung.`
  },
  {
    question: "Was sind Webapps?",
    answer: `Eine Web-App ist eine Software für Nutzer in ${cityName.value}, die über einen Webbrowser läuft, ohne installiert zu werden. Sie ist plattformunabhängig und bietet Funktionen wie Offline-Nutzung oder Benachrichtigungen.`
  },
  {
    question: "Was sind CRM?",
    answer: `CRM (Customer Relationship Management) bezeichnet die systematische Verwaltung von Kundenbeziehungen für Betriebe in ${cityName.value}. Diese Systeme speichern Kundendaten zentral und unterstützen Vertrieb und Service durch Automatisierung.`
  },
  {
    question: "Was sind ERP?",
    answer: `ERP-Systeme vernetzen zentrale Geschäftsprozesse in ${cityName.value} wie Finanzen und Vertrieb in einer gemeinsamen Datenbank. Als webbasierte Lösungen steigern sie durch Echtzeit-Daten die Produktivität.`
  },
  {
    question: "Was ist E-Commerce-Entwicklung?",
    answer: `E-Commerce-Entwicklung in ${cityName.value} umfasst den Aufbau von Online-Shops inklusive Anbindung an Zahlungssysteme und Logistik, um maximale Conversion-Rates für Ihr Unternehmen zu gewährleisten.`
  }
])

const nearbyCities = computed(() => {
  const source = displayContent.value.dataSource || {}
  const currentKey = cityData.value?.cityKey
  return Object.keys(source)
    .filter(k => k !== currentKey)
    .sort(() => 0.5 - Math.random())
    .slice(0, 15)
    .map(k => ({ slug: k, name: source[k].cityName }))
})

useHead({
  title: computed(() => `${displayContent.value.h1Prefix} ${cityName.value} | VelWebSolutions`),
  meta: [
    { name: 'description', content: computed(() => cityData.value?.heroDesc || `Ihr Experte für ${displayContent.value.topic} in ${cityName.value}.`) }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: computed(() => JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": localFaqs.value.map(f => ({
          "@type": "Question",
          "name": f.question,
          "acceptedAnswer": { "@type": "Answer", "text": f.answer }
        }))
      }))
    }
  ]
})
</script>

<style scoped>
@reference "tailwindcss";
</style>