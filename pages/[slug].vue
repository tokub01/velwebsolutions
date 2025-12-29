<template>
  <div class="font-sans text-gray-900 bg-white selection:bg-red-100 selection:text-red-600" v-if="isValidCity">

    <nav class="bg-gray-50 py-4 px-6 mt-16 border-b border-gray-200" aria-label="Breadcrumb">
      <ol class="max-w-7xl mx-auto flex items-center space-x-2 text-sm">
        <li><NuxtLink to="/" class="text-red-600 font-bold hover:underline">Startseite</NuxtLink></li>
        <li class="text-gray-400">/</li>
        <li class="text-gray-700 font-semibold uppercase tracking-tighter">{{ cityName }}</li>
      </ol>
    </nav>

    <header class="relative py-24 md:py-44 bg-gradient-to-br from-red-700 via-red-600 to-red-500 text-white px-6 overflow-hidden">
      <div class="relative z-10 max-w-7xl mx-auto text-center">
        <span class="inline-block px-5 py-2 mb-6 rounded-full bg-white text-red-600 text-[10px] font-black uppercase tracking-[0.2em] shadow-xl animate-pulse">
          ● Kapazitäten für Projekte in {{ cityName }} verfügbar
        </span>
        <h1 class="text-5xl md:text-8xl font-black mb-10 leading-[0.9] tracking-tighter uppercase italic">
          {{ displayContent.h1Prefix }}<br />
          <span class="text-white/90 underline decoration-white/30">{{ cityName }}</span>
        </h1>
        <p class="text-xl md:text-3xl text-red-50 max-w-4xl mx-auto mb-12 leading-relaxed font-medium">
          Wir lösen komplexe digitale Herausforderungen für Unternehmen in <strong>{{ cityName }}</strong>. Technisch fundiert, wissenschaftlich orientiert und messbar erfolgreich.
        </p>

        <div class="flex flex-col items-center gap-6">
          <NuxtLink to="/kontakt" class="w-full md:w-auto px-12 py-6 bg-white text-red-600 font-black rounded-2xl shadow-2xl text-2xl transition transform hover:scale-105 uppercase italic text-center">
            Kostenlosen Architektur-Check starten
          </NuxtLink>
          <p class="text-red-100 text-sm font-bold uppercase tracking-widest opacity-80">
            Dauert nur 2 Minuten • Unverbindlich & Kostenfrei
          </p>
        </div>
      </div>
      <div class="absolute inset-0 opacity-10 pointer-events-none" aria-hidden="true">
        <div class="absolute inset-0 bg-[grid-white_1px] [mask-image:radial-gradient(white,transparent_70%)]"></div>
      </div>
    </header>

    <section class="py-12 bg-gray-900 text-white border-y border-white/10">
      <div class="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div v-for="stat in stats" :key="stat.label" class="group">
          <div class="text-3xl md:text-5xl font-black text-red-600 mb-1 leading-none tracking-tighter italic">{{ stat.value }}</div>
          <div class="text-[10px] uppercase font-bold text-gray-400 tracking-widest group-hover:text-white transition-colors">{{ stat.label }}</div>
        </div>
      </div>
    </section>

    <section class="py-32 px-6 bg-white">
      <div class="max-w-7xl mx-auto">
        <header class="max-w-3xl mb-20">
          <span class="text-red-600 font-bold uppercase tracking-widest text-sm mb-4 block">Expertise am Standort</span>
          <h2 class="text-4xl md:text-7xl font-black uppercase italic text-gray-900 leading-[0.8] tracking-tighter">
            Lösungen für <span class="text-red-600">{{ cityName }}</span>.
          </h2>
        </header>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div v-for="(service, sIndex) in expandedServices" :key="sIndex"
               :class="['group p-10 rounded-[2.5rem] border transition-all hover:shadow-2xl', sIndex === 0 ? 'bg-red-50 border-red-100 ring-2 ring-red-600/10' : 'bg-gray-50 border-gray-100 hover:bg-white']">
            <div class="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center text-white mb-8 shadow-lg group-hover:scale-110 transition-transform">
              <component :is="service.icon" class="w-8 h-8" />
            </div>
            <div v-if="sIndex === 0" class="inline-block px-3 py-1 bg-red-600 text-white text-[10px] font-black uppercase rounded-lg mb-4">Meistgefragt in {{ cityName }}</div>
            <h3 class="text-2xl font-black uppercase italic tracking-tighter mb-4">{{ service.title }}</h3>
            <p class="text-gray-600 leading-relaxed font-medium mb-8">{{ service.description }}</p>
            <ul class="space-y-3 border-t border-gray-200 pt-6">
              <li v-for="item in service.bullets" :key="item" class="flex items-center gap-3 text-xs font-black text-gray-500 uppercase italic">
                <span class="text-red-600">→</span> {{ item }}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section class="py-32 px-6 bg-gray-50 rounded-[4rem] mx-4 shadow-inner">
      <div class="max-w-5xl mx-auto">
        <header class="text-center mb-20">
          <span class="text-red-600 font-bold uppercase tracking-widest text-sm mb-4 block">Deep Dive</span>
          <h2 class="text-4xl md:text-6xl font-black uppercase italic text-gray-900 leading-none">Wissen schafft <span class="text-red-600">Vertrauen.</span></h2>
          <p class="mt-4 text-gray-500 font-medium italic">Wir klären die wichtigsten Begriffe für Ihr Vorhaben in {{ cityName }}.</p>
        </header>

        <div class="grid gap-6">
          <article v-for="(faq, index) in localFaqs" :key="index" class="group bg-white rounded-[2.5rem] border border-gray-100 shadow-sm overflow-hidden transition-all hover:shadow-xl">
            <details class="w-full">
              <summary class="flex justify-between items-center p-8 cursor-pointer list-none focus:outline-none">
                <h3 class="text-xl md:text-2xl font-black uppercase italic text-gray-900 pr-4">{{ faq.question }}</h3>
                <div class="flex-shrink-0 w-10 h-10 rounded-2xl bg-gray-50 border-2 border-gray-100 flex items-center justify-center text-red-600 transition-transform group-open:rotate-45">
                  <span class="text-3xl font-light">+</span>
                </div>
              </summary>
              <div class="px-8 pb-10 text-gray-700 leading-relaxed text-lg border-t border-gray-50 pt-8 whitespace-pre-line font-medium italic">
                {{ faq.answer }}
              </div>
            </details>
          </article>
        </div>
      </div>
    </section>

    <section class="py-32 px-6 text-center">
      <div class="max-w-4xl mx-auto p-12 bg-gray-900 rounded-[3rem] text-white shadow-2xl relative overflow-hidden">
        <div class="relative z-10">
          <h2 class="text-4xl md:text-6xl font-black mb-6 uppercase italic tracking-tighter">Bereit für den <br/><span class="text-red-600 text-5xl md:text-8xl leading-none">nächsten Schritt?</span></h2>
          <div class="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto mt-12">
            <NuxtLink to="/kontakt?ref=check" class="p-6 bg-white/5 border border-white/10 rounded-2xl hover:bg-white hover:text-gray-900 transition-all text-center">
              <span class="block font-black uppercase italic text-xl mb-1">Technik-Check</span>
              <span class="text-sm opacity-60">Wir analysieren Ihre aktuelle Seite.</span>
            </NuxtLink>
            <NuxtLink to="/kontakt?ref=call" class="p-6 bg-red-600 rounded-2xl hover:bg-red-700 transition-all text-center">
              <span class="block font-black uppercase italic text-xl mb-1">Strategie-Call</span>
              <span class="text-sm text-red-100 italic">Persönliche Beratung in {{ cityName }}.</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 px-6">
      <div class="max-w-7xl mx-auto text-center">
        <h4 class="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-12">Regionales Netzwerk</h4>
        <div class="flex flex-wrap justify-center gap-2">
          <NuxtLink
            v-for="city in nearbyCities" :key="city.slug"
            :to="`/${currentType}-${city.slug}`"
            class="px-5 py-3 bg-gray-50 hover:bg-red-50 text-gray-500 hover:text-red-600 rounded-xl font-bold text-[11px] transition-all uppercase italic border border-gray-100"
          >
            {{ city.name }}
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

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