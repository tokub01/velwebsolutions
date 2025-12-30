<template>
  <div class="font-sans text-gray-900 bg-white selection:bg-red-100 selection:text-red-600" v-if="isValidCity">

    <header class="relative pt-32 pb-24 md:pt-48 md:pb-40 bg-gradient-to-br from-red-700 via-red-600 to-red-500 text-white px-6 overflow-hidden">
      <div class="absolute inset-0 opacity-10 pointer-events-none">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,white_1px,transparent_0)] bg-[size:40px_40px]"></div>
      </div>

      <div class="relative z-10 max-w-6xl mx-auto text-center">
        <span class="inline-block px-5 py-2 mb-6 rounded-full bg-white text-red-600 text-[10px] font-black uppercase tracking-[0.2em] shadow-xl animate-bounce italic">
          ✓ Kapazitäten in {{ cityName }} verfügbar
        </span>
        <h1 class="text-5xl md:text-8xl font-black mb-8 leading-[0.9] tracking-tighter uppercase italic">
          {{ displayContent.h1Prefix }} <br />
          <span class="text-white/90 underline decoration-white/30 italic">{{ cityName }}.</span>
        </h1>
        <p class="text-xl md:text-3xl text-red-50 font-medium max-w-4xl mx-auto leading-relaxed italic opacity-90">
          Ich entwickle für Unternehmen in <strong>{{ cityName }}</strong> digitale Werkzeuge, die Ordnung in den Betrieb bringen. Technisch fundiert, wissenschaftlich orientiert und exakt auf Ihren Alltag zugeschnitten.
        </p>
      </div>
    </header>

    <section class="py-12 bg-gray-900 text-white border-y border-white/10">
      <div class="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        <div v-for="stat in stats" :key="stat.label">
          <div class="text-3xl md:text-5xl font-black text-red-600 mb-1 italic tracking-tighter">{{ stat.value }}</div>
          <div class="text-[10px] uppercase font-bold text-gray-400 tracking-widest">{{ stat.label }}</div>
        </div>
      </div>
    </section>

    <section class="py-32 px-6 bg-white overflow-hidden">
      <div class="max-w-7xl mx-auto">
        <div class="mb-20">
          <div class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-red-50 text-red-700 font-black text-[10px] mb-8 uppercase tracking-widest border border-red-100 italic">
            // Expertise am Standort
          </div>
          <h2 class="text-4xl md:text-7xl font-black mb-8 leading-[0.9] uppercase italic tracking-tighter">
            Digitale Lösungen <br/><span class="text-red-600">für {{ cityName }}.</span>
          </h2>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div v-for="(service, sIndex) in expandedServices" :key="sIndex" class="group">
            <div class="flex gap-6">
              <div class="flex-shrink-0 w-16 h-16 bg-gray-900 rounded-2xl flex items-center justify-center text-3xl group-hover:rotate-6 transition-transform shadow-lg">
                <component :is="service.icon" class="w-8 h-8 text-white" />
              </div>
              <div>
                <h4 class="font-black text-xl uppercase italic tracking-tighter mb-3">{{ service.title }}</h4>
                <p class="text-gray-500 font-medium italic leading-snug mb-6">{{ service.description }}</p>
                <ul class="space-y-2">
                  <li v-for="item in service.bullets" :key="item" class="flex items-center gap-2 text-[10px] font-black text-red-600 uppercase tracking-widest italic">
                    <span class="w-1.5 h-1.5 bg-red-600 rounded-full"></span> {{ item }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-32 px-6 bg-gray-900 text-white rounded-[4rem] mx-4 shadow-3xl">
      <div class="max-w-5xl mx-auto">
        <div class="text-center mb-20">
          <span class="text-red-500 font-black uppercase tracking-[0.3em] text-[10px] mb-6 block italic">Knowledge_Base</span>
          <h2 class="text-4xl md:text-7xl font-black mb-8 leading-[0.9] uppercase italic tracking-tighter">Wissen schafft <span class="text-red-600">Vertrauen.</span></h2>
          <p class="text-xl text-gray-400 font-medium italic leading-relaxed">
            Wir klären die wichtigsten Begriffe für Ihr Vorhaben in {{ cityName }} – verständlich und ohne Fach-Chinesisch.
          </p>
        </div>

        <div class="space-y-6">
          <article v-for="(faq, index) in localFaqs" :key="index" class="bg-white/5 rounded-[2.5rem] border border-white/10 backdrop-blur-md overflow-hidden transition-all hover:bg-white/10">
            <details class="group w-full">
              <summary class="flex justify-between items-center p-8 cursor-pointer list-none focus:outline-none">
                <h3 class="text-lg md:text-xl font-black uppercase italic text-white pr-4 tracking-tighter">{{ faq.question }}</h3>
                <div class="flex-shrink-0 w-10 h-10 rounded-xl bg-red-600 flex items-center justify-center text-white transition-transform group-open:rotate-45 shadow-lg">
                  <span class="text-2xl font-bold">+</span>
                </div>
              </summary>
              <div class="px-8 pb-10 text-gray-300 leading-relaxed font-medium italic border-t border-white/5 pt-8 whitespace-pre-line">
                {{ faq.answer }}
              </div>
            </details>
          </article>
        </div>
      </div>
    </section>

    <section class="py-32 px-6 text-center">
      <div class="max-w-4xl mx-auto bg-gray-900 p-16 rounded-[4rem] text-white shadow-3xl relative overflow-hidden">
        <div class="absolute inset-0 opacity-5 bg-[size:40px_40px] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]"></div>
        <div class="relative z-10">
          <h3 class="text-4xl md:text-6xl font-black mb-8 italic uppercase tracking-tighter leading-none">
            Bereit für den <br/><span class="text-red-600 text-5xl md:text-8xl">nächsten Schritt?</span>
          </h3>
          <p class="text-xl text-gray-400 mb-12 font-medium italic">
            Lassen Sie uns gemeinsam schauen, wie wir Ihren Arbeitsalltag in {{ cityName }} leichter machen können.
          </p>
          <div class="flex flex-col sm:flex-row justify-center gap-6">
            <NuxtLink to="/kontakt?ref=check" class="bg-white text-gray-900 px-10 py-6 rounded-[2rem] font-black text-xl hover:bg-red-600 hover:text-white transition-all shadow-2xl uppercase italic">
              Technik-Check
            </NuxtLink>
            <NuxtLink to="/kontakt?ref=call" class="bg-red-600 text-white px-10 py-6 rounded-[2rem] font-black text-xl hover:bg-white hover:text-red-600 transition-all shadow-2xl uppercase italic">
              Strategie-Call
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>

    <section class="py-20 px-6 border-t border-gray-100 bg-gray-50/50">
      <div class="max-w-7xl mx-auto text-center">
        <h4 class="text-[10px] font-black uppercase tracking-[0.4em] text-gray-400 mb-12 italic">// Regionales Netzwerk</h4>
        <div class="flex flex-wrap justify-center gap-3">
          <NuxtLink
            v-for="city in nearbyCities" :key="city.slug"
            :to="`/${currentType}-${city.slug}`"
            class="px-6 py-3 bg-white hover:bg-red-600 text-gray-500 hover:text-white rounded-xl font-black text-[11px] transition-all uppercase italic border border-gray-200 shadow-sm hover:shadow-lg"
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