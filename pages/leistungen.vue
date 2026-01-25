<template>
  <NuxtLayout name="guest">
    <div class="font-sans text-zinc-900 bg-white selection:bg-red-100 selection:text-red-600 antialiased overflow-x-hidden text-left">

      <header class="relative pt-24 pb-16 md:pt-72 md:pb-56 bg-red-600 text-white px-4 md:px-6 overflow-hidden">
        <div class="absolute inset-0 z-0">
          <div class="absolute inset-0 bg-gradient-to-br from-red-800 via-red-600 to-red-500"></div>
          <div class="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,white_1px,transparent_0)] bg-[size:30px_30px] opacity-10"></div>
        </div>

        <div class="relative z-10 max-w-7xl mx-auto">
          <div class="inline-flex items-center gap-2 px-3 py-2 mb-8 rounded-full bg-black/20 backdrop-blur-2xl border border-white/10 text-[9px] md:text-[12px] font-black uppercase tracking-[0.2em] italic">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            VelWebSolutions // Engineering Services
          </div>

          <h1 class="text-[clamp(2.2rem,11vw,9rem)] font-[1000] mb-6 leading-[0.85] tracking-tighter uppercase italic break-words">
            Skalierbare <br /><span class="text-white underline decoration-white/20 underline-offset-[4px] md:underline-offset-[20px]">Kern-Systeme.</span>
          </h1>

          <p class="text-lg md:text-[2.75rem] text-red-50 font-light max-w-5xl leading-tight italic opacity-95">
            Ich entwickle das <span class="text-white font-bold">digitale Rückgrat</span> Ihres Unternehmens. VelWebSolutions steht für hocheffiziente ERP- & CRM-Lösungen.
          </p>
        </div>
      </header>

      <section class="py-16 md:py-56 bg-white px-4 md:px-6">
        <div class="max-w-7xl mx-auto">
          <div class="mb-12 md:mb-32">
            <h2 class="text-[clamp(3rem,15vw,10rem)] font-[1000] uppercase italic tracking-tighter leading-none text-zinc-900 mb-4">Stack.</h2>
            <div class="text-red-600 font-mono italic uppercase text-[10px] md:text-lg tracking-[0.3em]">Engineering_Excellence_2026</div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
            <div v-for="service in leistungen" :key="service.title" class="group bg-zinc-50 p-6 md:p-20 rounded-[2rem] md:rounded-[5rem] border border-zinc-100 transition-all hover:bg-white hover:shadow-2xl">
              <div class="text-red-600 font-mono font-bold text-[10px] md:text-sm uppercase tracking-[0.3em] mb-6 italic">// {{ service.category }}</div>
              <h3 class="text-2xl md:text-6xl font-[1000] uppercase italic tracking-tighter mb-4 group-hover:text-red-600 transition-colors leading-[0.9]">{{ service.title }}</h3>
              <p class="text-zinc-500 italic text-sm md:text-2xl leading-relaxed mb-8">
                {{ service.description }}
              </p>
              <ul class="space-y-3">
                <li v-for="point in service.points" :key="point" class="flex items-center gap-3 text-[11px] md:text-lg font-black italic text-zinc-900">
                  <span class="w-3 h-[2px] bg-red-600 shrink-0"></span>
                  {{ point }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="py-16 md:py-64 bg-zinc-950 text-white border-y-4 md:border-y-8 border-red-600 px-4 md:px-6">
        <div class="max-w-7xl mx-auto relative z-10 text-left">
          <h2 class="text-4xl md:text-[8rem] font-[1000] uppercase italic tracking-tighter text-red-600 mb-12 leading-[0.9]">Robuste <br/><span class="text-white">Resistenz.</span></h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div v-for="f in features" :key="f.title" class="border-l-2 border-red-600 pl-6 py-2">
              <h4 class="font-[1000] italic uppercase text-lg md:text-3xl mb-3 text-white">{{ f.title }}</h4>
              <p class="text-[13px] md:text-xl text-zinc-500 italic leading-relaxed">{{ f.desc }}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="py-16 md:py-64 bg-zinc-950 px-4 md:px-6">
        <div class="max-w-7xl mx-auto">
          <h2 class="text-5xl md:text-[10rem] font-[1000] uppercase italic tracking-tighter leading-none text-white mb-16">Service- <br/><span class="text-red-600">Units.</span></h2>

          <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-10">
            <div v-for="plan in pakete" :key="plan.hours" class="p-8 md:p-12 bg-zinc-900 rounded-[2.5rem] border border-zinc-800 flex flex-col group hover:border-red-600 transition-all">
              <div class="text-4xl md:text-6xl font-[1000] italic text-zinc-800 mb-6 leading-none group-hover:text-red-900 transition-colors">{{ plan.hours }}h</div>
              <h4 class="text-2xl md:text-5xl font-[1000] italic uppercase tracking-tighter mb-4 text-white leading-none">Kapazität</h4>
              <p class="text-sm md:text-xl text-zinc-500 italic mb-10 leading-relaxed flex-grow">{{ plan.desc }}</p>

              <div class="pt-8 border-t border-zinc-800 mt-auto">
                <div class="text-[10px] font-mono text-red-600 uppercase tracking-widest mb-4 italic">Rate: 125,00€ Netto / Std.</div>
                <div class="space-y-1">
                  <div class="text-3xl md:text-5xl font-[1000] italic uppercase tracking-tighter text-white">
                    {{ plan.priceNetto }}€ <span class="text-[10px] font-light opacity-30 italic">Netto</span>
                  </div>
                  <div class="text-lg md:text-2xl font-bold italic text-zinc-500">
                    {{ plan.priceBrutto }}€ <span class="text-[10px] font-light opacity-50 italic">inkl. 19% MwSt.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="py-24 md:py-56 bg-white px-4 md:px-6 text-center border-t border-zinc-100">
        <div class="max-w-4xl mx-auto">
          <div class="inline-block px-4 py-1.5 mb-10 border-2 border-red-600 text-red-600 text-[10px] md:text-xs font-black uppercase tracking-[0.4em] italic">
            Initialisierung
          </div>
          <h2 class="text-4xl md:text-8xl font-[1000] uppercase italic tracking-tighter leading-[0.9] mb-12 text-zinc-900">
            Bereit für <br /> <span class="text-zinc-300">Deployment.</span>
          </h2>

          <div class="flex flex-col items-center gap-8">
            <div class="flex flex-col gap-3 text-zinc-400 font-mono uppercase italic text-[11px] md:text-sm tracking-widest">
              <span>✓ Test-Driven Development (TDD)</span>
              <span>✓ System Architecture Documentation</span>
              <span>✓ Transparente 15m Taktung</span>
            </div>

            <NuxtLink to="/kontakt" class="w-full md:w-auto inline-flex items-center justify-center px-10 py-5 font-black text-white bg-zinc-950 rounded-2xl transition-all hover:bg-red-600 shadow-2xl active:scale-95">
              <span class="uppercase italic tracking-widest text-xs">Request_System_Access</span>
            </NuxtLink>

            <div class="mt-4 text-center">
               <div class="text-2xl md:text-5xl font-[1000] italic text-zinc-900 tracking-tighter">
                125,00€ <span class="text-sm md:text-xl font-light text-zinc-300">Netto / Std.</span>
              </div>
              <div class="text-lg md:text-2xl font-bold italic text-zinc-400 mt-1">
                148,75€ <span class="text-xs font-light italic">Brutto</span>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  </NuxtLayout>
</template>

<script setup>
/**
 * LEISTUNGS-LOGIK & SUBSTANZ
 */
const leistungen = [
  {
    category: 'Architecture',
    title: 'Individual ERP',
    description: 'Wir bauen das zentrale Nervensystem für Ihr Unternehmen. Keine Standard-Software, sondern Logik, die Ihre echten Prozesse abbildet.',
    points: ['Automatisierte Workflows', 'Sichere Datenhaltung', 'PHP / Laravel & Vue.js']
  },
  {
    category: 'Relationship',
    title: 'Custom CRM',
    description: 'Vertriebssteuerung ohne Kompromisse. VelWebSolutions entwickelt Dashboards, die Ihre Kundenbeziehungen messbar machen.',
    points: ['Lead-Automation', 'Echtzeit-Reporting', 'Intuitive UX/UI']
  }
]

const features = [
  {
    title: 'Clean Architecture',
    desc: 'Tobias Kubina garantiert Systeme, die nicht nur heute funktionieren, sondern auch in 5 Jahren noch wartbar und skalierbar sind.'
  },
  {
    title: 'Performance First',
    desc: 'Wir optimieren Backends auf maximale Last. Keine Verzögerungen, keine Ausfälle – nur hocheffizienter Code.'
  }
]

/**
 * Preisberechnung (Netto * 1.19 = Brutto)
 */
const pakete = [
  { hours: 40, priceNetto: '5.000,00', priceBrutto: '5.950,00', desc: 'Sprints für kleinere Features, System-Audits oder strategische Beratung.' },
  { hours: 80, priceNetto: '10.000,00', priceBrutto: '11.900,00', desc: 'Umfassende Entwicklung neuer Module und tiefgreifende Architektur-Anpassungen.' },
  { hours: 120, priceNetto: '15.000,00', priceBrutto: '17.850,00', desc: 'Maximale Kapazität für komplexe ERP/CRM-Launches und Enterprise-Lösungen.' }
]

/**
 * SEO & META
 */
const title = 'Leistungen | VelWebSolutions - ERP & CRM Engineering';
const description = 'Professionelle Softwareentwicklung von VelWebSolutions. Tobias Kubina entwickelt skalierbare Kern-Systeme, ERP & CRM Lösungen auf höchstem technischen Niveau.';
const siteUrl = 'https://velwebsolutions.de/leistungen';

useHead({
  title,
  htmlAttrs: { lang: 'de' },
  link: [{ rel: 'canonical', href: siteUrl }]
});

useSeoMeta({
  title,
  description,
  ogTitle: title,
  ogDescription: description,
  ogType: 'website',
  ogUrl: siteUrl,
  twitterCard: 'summary_large_image',
});
</script>

<style scoped>
@media (max-width: 350px) {
  h1 { font-size: 2.2rem !important; line-height: 0.9 !important; }
  h2 { font-size: 2.5rem !important; }
  h3 { font-size: 2rem !important; }
  p { font-size: 1rem !important; line-height: 1.3 !important; }
  .p-6, .p-8 { padding: 1.5rem !important; }
  .rounded-[2rem], .rounded-[2.5rem] { border-radius: 1.25rem !important; }
}

h1, h2, h3, p {
  hyphens: auto;
  word-wrap: break-word;
}
</style>