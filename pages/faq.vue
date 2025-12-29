<template>
  <div class="font-sans text-gray-900 bg-white selection:bg-red-100 selection:text-red-600">
    <nav class="bg-gray-50 py-4 px-6 mt-16 border-b border-gray-100" aria-label="Breadcrumb">
      <ol class="max-w-7xl mx-auto flex items-center space-x-2 text-[10px] font-black uppercase tracking-widest italic">
        <li>
          <NuxtLink to="/" class="text-red-600 hover:underline">Zentrale</NuxtLink>
        </li>
        <li class="text-gray-400">/</li>
        <li class="text-gray-700 font-bold uppercase tracking-tighter italic">Knowledge Base / FAQ</li>
      </ol>
    </nav>

    <header class="relative py-24 md:py-44 bg-gradient-to-br from-red-700 via-red-600 to-red-500 text-white px-6 overflow-hidden">
      <div class="absolute inset-0 opacity-10 pointer-events-none">
        <div class="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div class="relative z-10 max-w-6xl mx-auto text-center">
        <span class="inline-block px-5 py-2 mb-6 rounded-full bg-white text-red-600 text-[10px] font-black uppercase tracking-[0.2em] shadow-xl italic">
          ✓ Transparent & Fundiert
        </span>
        <h1 class="text-5xl md:text-9xl font-black mb-10 leading-[0.85] tracking-tighter uppercase italic">
          Fragen & <br/><span class="text-white/90 underline decoration-white/30 italic">Antworten.</span>
        </h1>
        <p class="text-xl md:text-2xl text-red-50 max-w-3xl mx-auto leading-relaxed font-medium italic opacity-90">
          Alles, was Sie über den Ablauf, die Technik und die faire Preisgestaltung (125,00 €/h Netto) wissen müssen.
        </p>
      </div>
    </header>

    <section class="py-12 px-6 bg-gray-50 border-b border-gray-100 sticky top-16 z-40 backdrop-blur-md bg-white/80">
      <div class="max-w-7xl mx-auto flex flex-col md:flex-row gap-6 justify-between items-center">
        <div class="flex flex-wrap justify-center gap-2">
          <button
            v-for="cat in categories"
            :key="cat.id"
            @click="selectedCategory = cat.id"
            :class="[
              'px-6 py-2 rounded-full text-[10px] font-black uppercase tracking-widest transition-all italic border-2',
              selectedCategory === cat.id ? 'bg-red-600 border-red-600 text-white shadow-lg' : 'bg-white border-gray-200 text-gray-500 hover:border-red-600 hover:text-red-600'
            ]"
          >
            {{ cat.name }}
          </button>
        </div>

        <div class="relative w-full md:w-96">
          <input
            v-model="searchQuery"
            type="text"
            placeholder="Wonach suchen Sie? (z.B. Laravel, Kosten...)"
            class="w-full bg-white border-2 border-gray-100 rounded-2xl px-6 py-4 text-sm font-medium italic focus:outline-none focus:border-red-600 transition-all shadow-sm"
          >
        </div>
      </div>
    </section>

    <section class="py-24 px-6 bg-white min-h-[600px]">
      <div class="max-w-4xl mx-auto">
        <div v-if="filteredFaqs.length > 0" class="space-y-6">
          <div
            v-for="(faq, index) in filteredFaqs"
            :key="index"
            class="group border-2 border-gray-50 rounded-[2.5rem] bg-gray-50 overflow-hidden transition-all duration-500"
            :class="{ 'border-red-600 bg-white shadow-2xl': openFaq === index }"
          >
            <button
              @click="toggleFaq(index)"
              class="w-full p-8 md:p-10 text-left flex justify-between items-center gap-6"
            >
              <div>
                <span class="text-[9px] font-black text-red-600 uppercase tracking-widest mb-2 block italic">
                  // {{ getCategoryName(faq.category) }}
                </span>
                <h3 class="text-xl md:text-2xl font-black uppercase italic tracking-tighter text-gray-900 group-hover:text-red-600 transition-colors">
                  {{ faq.question }}
                </h3>
              </div>
              <div class="flex-shrink-0 w-10 h-10 rounded-full border-2 border-gray-200 flex items-center justify-center group-hover:border-red-600 transition-all" :class="{ 'rotate-45 bg-red-600 border-red-600': openFaq === index }">
                <LucidePlus :class="['w-5 h-5 transition-all', openFaq === index ? 'text-white' : 'text-gray-400']" />
              </div>
            </button>

            <transition
              enter-active-class="transition-[max-height,opacity] duration-500 ease-in-out"
              enter-from-class="max-h-0 opacity-0"
              enter-to-class="max-h-[500px] opacity-100"
              leave-active-class="transition-[max-height,opacity] duration-300 ease-in-out"
              leave-from-class="max-h-[500px] opacity-100"
              leave-to-class="max-h-0 opacity-0"
            >
              <div v-if="openFaq === index" class="px-8 md:px-10 pb-10">
                <div class="prose prose-red max-w-none">
                  <p class="text-lg text-gray-600 font-medium italic leading-relaxed whitespace-pre-line">
                    {{ faq.answer }}
                  </p>
                </div>
                <div v-if="faq.relatedLinks && faq.relatedLinks.length > 0" class="mt-8 pt-8 border-t border-gray-100 flex flex-wrap gap-4">
                  <NuxtLink
                    v-for="link in faq.relatedLinks"
                    :key="link.to"
                    :to="link.to"
                    class="px-6 py-3 bg-gray-900 text-white text-[10px] font-black uppercase tracking-widest rounded-xl hover:bg-red-600 transition-all italic shadow-lg"
                  >
                    {{ link.label }} →
                  </NuxtLink>
                </div>
              </div>
            </transition>
          </div>
        </div>

        <div v-else class="text-center py-24">
          <div class="text-6xl mb-6">🔍</div>
          <h3 class="text-2xl font-black uppercase italic tracking-tighter mb-4">Keine Treffer gefunden.</h3>
          <p class="text-gray-500 italic mb-10">Passen Sie Ihre Suche an oder kontaktieren Sie mich direkt.</p>
          <button @click="resetFilters" class="text-red-600 font-black uppercase italic tracking-widest underline underline-offset-8">Filter zurücksetzen</button>
        </div>
      </div>
    </section>

    <section class="py-32 px-6 bg-gray-900 text-white rounded-[4rem] mx-4 mb-12 text-center overflow-hidden relative">
      <div class="absolute inset-0 bg-red-600/5 blur-[100px] pointer-events-none"></div>
      <div class="relative z-10 max-w-4xl mx-auto">
        <h2 class="text-5xl md:text-8xl font-black mb-10 tracking-tighter uppercase italic leading-[0.85]">
          Frage nicht <br/><span class="text-red-600">beantwortet?</span>
        </h2>
        <p class="text-xl text-gray-400 mb-12 leading-relaxed font-medium italic">
          Kein Problem. Als Ihr persönlicher Ansprechpartner stehe ich Ihnen für alle technischen und organisatorischen Fragen zur Verfügung.
        </p>
        <NuxtLink to="/kontakt" class="inline-block px-14 py-8 bg-red-600 text-white font-black rounded-3xl shadow-2xl hover:scale-105 transition-all text-2xl uppercase italic tracking-widest">
          Jetzt Nachricht senden
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
import { LucidePlus, LucideShieldCheck } from 'lucide-vue-next'

definePageMeta({
  layout: 'guest'
})

const selectedCategory = ref('all')
const searchQuery = ref('')
const openFaq = ref(null)

const categories = [
  { id: 'all', name: 'Alle Fragen' },
  { id: 'preise', name: 'Preise & Kosten' },
  { id: 'prozess', name: 'Prozess & Ablauf' },
  { id: 'technik', name: 'Technik & Features' },
  { id: 'support', name: 'Support & Wartung' },
  { id: 'allgemein', name: 'Allgemein' }
]

const faqs = [
  // Preise & Kosten
  {
    category: 'preise',
    question: 'Wie funktioniert das Abrechnungsmodell mit Stundenkontingenten?',
    answer: 'Wir arbeiten transparent mit Stundenkontingenten. Im kostenlosen Erstgespräch klären wir Ziele und Umfang. Daraufhin erhalten Sie ein Angebot mit einem passenden Kontingent. Nicht verbrauchte Stunden bleiben weitere 6 Monate gültig. Bevor das Budget ausgeschöpft ist, informiere ich Sie rechtzeitig.',
    relatedLinks: [
      { to: '/kontakt', label: 'Erstgespräch buchen' },
      { to: '/preise', label: 'Pakete ansehen' }
    ]
  },
  {
    category: 'preise',
    question: 'Welche Kosten fallen für eine professionelle Website an?',
    answer: 'Die Kosten richten sich nach Umfang: \n• Landing Page (40h): ab 5.000,00 € Netto (5.950,00 € Brutto) \n• Business-Website (80h): ab 10.000,00 € Netto (11.900,00 € Brutto) \n• Shop/Portal (120h): ab 15.000,00 € Netto (17.850,00 € Brutto) \n\nZusätzliche Kontingente werden zum Standard-Satz von 125,00 € Netto/h abgerechnet.',
    relatedLinks: [{ to: '/kostenrechner', label: 'Kosten berechnen' }]
  },
  {
    category: 'preise',
    question: 'Gibt es versteckte Kosten?',
    answer: 'Nein. Sämtliche Kosten werden im Angebot transparent ausgewiesen – inklusive der gesetzlichen MwSt. (19%). Es gibt keine monatlichen Lizenzgebühren für meine Software, lediglich Ihre Hosting-Kosten fallen direkt beim Anbieter Ihrer Wahl an.',
    relatedLinks: []
  },

  // Prozess & Ablauf
  {
    category: 'prozess',
    question: 'Wie läuft ein Projekt ab?',
    answer: '1) Erstgespräch & Bedarfsanalyse \n2) Verbindliches Angebot & Zeitplan \n3) Designphase (UI/UX) \n4) Entwicklung (Laravel & Vue.js) \n5) QA & Bugfixing \n6) Launch & Dokumentation \n7) Inkludierter Support-Zeitraum.',
    relatedLinks: []
  },
  {
    category: 'prozess',
    question: 'Wie lange dauert die Entwicklung?',
    answer: 'Je nach Umfang variieren die Zeiten: \n• Landing Page: ca. 2–3 Wochen \n• Business-Website: ca. 4–6 Wochen \n• Komplexe Webanwendung: ab 8–12 Wochen.',
    relatedLinks: []
  },

  // Technik & Features
  {
    category: 'technik',
    question: 'Welche Technologien setzen Sie ein?',
    answer: 'Mein Fokus liegt auf Laravel (PHP Framework) für ein sicheres Backend und Vue.js (Nuxt 3) für ein reaktives Frontend. Diese Kombination ermöglicht maximale Performance, SEO-Optimierung und unbegrenzte Skalierbarkeit. Ich entwickle bewusst keine WordPress-Seiten, um höchste Sicherheits- und Qualitätsstandards zu gewährleisten.',
    relatedLinks: [{ to: '/technologien', label: 'Tech-Stack ansehen' }]
  },
  {
    category: 'technik',
    question: 'Ist die Website DSGVO-konform?',
    answer: 'Absolut. Ich implementiere aktuelle Datenschutzstandards, verwende keine externen Google Fonts ohne Einwilligung und integriere DSGVO-konforme Cookie-Consent-Lösungen sowie rechtssichere Kontaktformulare mit reCAPTCHA-Schutz.',
    relatedLinks: []
  },
  {
    category: 'technik',
    question: 'Warum setzen Sie keine Standard-CMS wie WordPress ein?',
    answer: 'Standard-Systeme sind oft überladen, langsam und wartungsintensiv. Maßgeschneiderte Laravel-Lösungen bieten exakt die Features, die Sie brauchen, sind deutlich performanter (Core Web Vitals) und bieten Angreifern weitaus weniger Angriffsfläche.',
    relatedLinks: []
  },

  // Support & Wartung
  {
    category: 'support',
    question: 'Was umfasst der Support?',
    answer: 'Der Support beinhaltet Bugfixes, technische Unterstützung bei Hosting-Fragen und Sicherheitsupdates für das Framework. Kleinere inhaltliche Anpassungen können ebenfalls über vorhandene Stundenkontingente abgedeckt werden.',
    relatedLinks: []
  },
  {
    category: 'support',
    question: 'Wie schnell erhalte ich Hilfe?',
    answer: 'In der Regel erhalten Sie innerhalb von 24 Stunden eine Rückmeldung. Bei kritischen Systemfehlern (SLA) reagiere ich umgehend, um die Verfügbarkeit Ihrer Anwendung sicherzustellen.',
    relatedLinks: []
  },

  // Allgemein
  {
    category: 'allgemein',
    question: 'Warum sollte ich mit Ihnen zusammenarbeiten?',
    answer: 'Als Informatiker biete ich Ihnen technisch fundiertes Engineering statt reiner Template-Anpassung. Sie kommunizieren direkt mit dem Entwickler, erhalten sauberen Code und eine transparente Kalkulation ohne Agentur-Overhead.',
    relatedLinks: [{ to: '/ueber-mich', label: 'Mehr über mich' }]
  },
  {
    category: 'allgemein',
    question: 'Gehört die Website nach dem Launch mir?',
    answer: 'Ja. Mit Abschluss des Projekts und vollständiger Bezahlung gehen alle Nutzungsrechte am Code und den Inhalten auf Sie über. Sie erhalten den vollen Zugriff auf das Repository (GitHub/GitLab) – kein Vendor-Lock-in.',
    relatedLinks: []
  }
]

const toggleFaq = (index) => {
  openFaq.value = openFaq.value === index ? null : index
}

const getCategoryName = (catId) => {
  return categories.find(c => c.id === catId)?.name || ''
}

const filteredFaqs = computed(() => {
  let result = faqs
  if (selectedCategory.value !== 'all') {
    result = result.filter(faq => faq.category === selectedCategory.value)
  }
  if (searchQuery.value.trim()) {
    const query = searchQuery.value.toLowerCase()
    result = result.filter(faq =>
      faq.question.toLowerCase().includes(query) ||
      faq.answer.toLowerCase().includes(query)
    )
  }
  return result
})

const resetFilters = () => {
  searchQuery.value = ''
  selectedCategory.value = 'all'
  openFaq.value = null
}

useHead({
  title: 'FAQ - Häufig gestellte Fragen | VelWebSolutions',
  meta: [
    { name: 'description', content: 'Antworten auf Fragen zu Preisen, Laravel, Vue.js und Projektablauf. Volle Transparenz für Ihre Webentwicklung.' }
  ]
})
</script>

<style scoped>
@keyframes grid-move {
  0% { transform: translate(0, 0); }
  100% { transform: translate(40px, 40px); }
}
</style>