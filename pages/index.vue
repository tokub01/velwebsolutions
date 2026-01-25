<template>
  <NuxtLayout name="guest">
    <div class="font-sans text-zinc-900 bg-white selection:bg-red-100 selection:text-red-600 antialiased overflow-x-hidden">

      <header class="relative pt-24 pb-16 md:pt-64 md:pb-48 bg-red-600 text-white px-4 overflow-hidden">
        <div class="absolute inset-0 z-0">
          <div class="absolute inset-0 bg-gradient-to-br from-red-800 via-red-600 to-red-500"></div>
          <div class="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,white_1px,transparent_0)] bg-[size:30px_30px] opacity-10"></div>
        </div>

        <div class="relative z-10 max-w-7xl mx-auto">
          <div class="inline-flex items-center gap-2 px-3 py-2 mb-8 rounded-full bg-black/20 backdrop-blur-2xl border border-white/10 text-[9px] md:text-[12px] font-black uppercase tracking-widest italic">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-red-500"></span>
            </span>
            VelWebSolutions // Specialized Engineering
          </div>

          <h1 class="text-[clamp(2.1rem,10vw,8.5rem)] font-[1000] mb-6 leading-[0.9] tracking-tighter uppercase italic break-words">
            VelWeb <br /><span class="text-white underline decoration-white/20 underline-offset-[4px] md:underline-offset-[16px]">Solutions.</span>
          </h1>

          <p class="text-lg md:text-4xl text-red-50 font-light max-w-4xl leading-tight italic opacity-95 mb-10">
            Wir transformieren komplexe Geschäftsprozesse in <span class="text-white font-bold">hochperformante ERP- & CRM-Systeme.</span> Technisch fundiert. Rein digital.
          </p>

          <div class="flex flex-wrap gap-4">
            <NuxtLink to="/kontakt" class="bg-zinc-900 text-white px-8 py-4 rounded-xl font-black uppercase tracking-widest text-xs hover:bg-white hover:text-red-600 transition-all shadow-2xl active:scale-95">
              Projekt anfragen
            </NuxtLink>
          </div>
        </div>
      </header>

      <section class="py-16 md:py-40 bg-white px-4 md:px-6">
        <div class="max-w-7xl mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div class="lg:col-span-6">
              <h2 class="text-4xl md:text-7xl font-[1000] uppercase italic tracking-tighter leading-none mb-8">
                Digitale <span class="text-red-600">Maßarbeit.</span>
              </h2>
              <div class="space-y-8">
                <div class="group border-l-4 border-red-600 pl-6">
                  <h4 class="font-black uppercase text-xl mb-2">Automatisierung statt Verwaltung</h4>
                  <p class="text-zinc-500 italic">VelWebSolutions eliminiert manuelle Fehlerquellen. Wir bauen Systeme, die Ihre Daten nicht nur speichern, sondern aktiv für Sie arbeiten lassen.</p>
                </div>
                <div class="group border-l-4 border-zinc-100 pl-6 hover:border-red-600 transition-colors">
                  <h4 class="font-black uppercase text-xl mb-2">Skalierbare Architektur</h4>
                  <p class="text-zinc-500 italic">Unsere Lösungen auf Basis von PHP/Laravel und Vue.js sind darauf ausgelegt, mit Ihrem Unternehmen zu wachsen – vom KMU bis zur Plattform.</p>
                </div>
              </div>
            </div>
            <div class="lg:col-span-6 lg:pl-12">
              <div class="bg-zinc-50 rounded-[2.5rem] p-8 md:p-16 border border-zinc-200 shadow-sm relative overflow-hidden">
                <h3 class="text-2xl font-black italic mb-6 uppercase text-zinc-900 underline decoration-red-600 decoration-4">Technical Lead.</h3>
                <p class="text-zinc-600 italic text-lg leading-relaxed mb-8">
                  "Hinter VelWebSolutions steht die Vision, Softwareentwicklung ohne bürokratischen Ballast zu liefern. Als Informatiker garantiere ich für die technische Exzellenz jedes Projekts."
                </p>
                <div class="flex items-center gap-4">
                  <div class="w-10 h-10 rounded-lg bg-red-600 flex items-center justify-center font-bold text-white text-xs">TK</div>
                  <div>
                    <span class="block font-bold uppercase text-sm">Tobias Kubina</span>
                    <span class="block text-[10px] text-zinc-400 uppercase tracking-widest">Founder & Informatiker</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="py-16 md:py-40 bg-zinc-950 text-white px-4">
        <div class="max-w-7xl mx-auto">
          <div class="mb-16 md:mb-32">
            <h2 class="text-4xl md:text-8xl font-[1000] uppercase italic tracking-tighter text-red-600">Lösungen.</h2>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
            <div class="space-y-6">
              <div class="text-red-600 font-mono text-[10px] uppercase tracking-[0.3em] font-bold">// Enterprise_Systems</div>
              <h3 class="text-4xl md:text-6xl font-black italic uppercase">ERP</h3>
              <p class="text-lg text-zinc-400 italic leading-relaxed">
                Optimierung Ihrer Kernprozesse durch maßgeschneiderte Logik. Wir integrieren Lager, Finanzen und Personal in einer stabilen Umgebung.
              </p>
              <div class="flex flex-wrap gap-2 pt-4">
                <span class="px-3 py-1 bg-white/5 border border-white/10 text-[10px] font-mono text-zinc-500 uppercase">Inventory</span>
                <span class="px-3 py-1 bg-white/5 border border-white/10 text-[10px] font-mono text-zinc-500 uppercase">Finance_Logic</span>
              </div>
            </div>

            <div class="space-y-6">
              <div class="text-red-600 font-mono text-[10px] uppercase tracking-[0.3em] font-bold">// Relation_Management</div>
              <h3 class="text-4xl md:text-6xl font-black italic uppercase">CRM</h3>
              <p class="text-lg text-zinc-400 italic leading-relaxed">
                Datenpräzision für Ihren Vertrieb. Wir entwickeln Dashboards, die Kundenbeziehungen messbar machen und Umsätze steigern.
              </p>
              <div class="flex flex-wrap gap-2 pt-4">
                <span class="px-3 py-1 bg-white/5 border border-white/10 text-[10px] font-mono text-zinc-500 uppercase">Sales_Pipeline</span>
                <span class="px-3 py-1 bg-white/5 border border-white/10 text-[10px] font-mono text-zinc-500 uppercase">Automation</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="py-20 bg-white px-4 border-b border-zinc-100">
        <div class="max-w-7xl mx-auto text-center md:text-left">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <h2 class="text-4xl md:text-6xl font-[1000] uppercase italic tracking-tighter leading-none">
              Remote-Only <br/><span class="text-zinc-300">Execution.</span>
            </h2>
            <p class="text-zinc-500 italic text-lg md:text-xl">
              VelWebSolutions arbeitet rein digital. Das bedeutet für Sie: Schnellere Reaktionszeiten, keine Reisekosten und eine transparente Projektabwicklung über moderne Kollaborations-Tools.
            </p>
          </div>
        </div>
      </section>

      <section class="py-24 md:py-56 bg-zinc-50 px-4 text-center">
        <div class="max-w-4xl mx-auto">
          <div class="inline-block px-4 py-1.5 mb-10 border-2 border-red-600 text-red-600 text-[10px] md:text-xs font-black uppercase tracking-[0.4em] italic">
            Get in Touch
          </div>
          <h2 class="text-4xl md:text-[7.5rem] font-[1000] uppercase italic tracking-tighter leading-[0.9] mb-12 text-zinc-900">
            Vision <br /> <span class="text-zinc-300">skalieren.</span>
          </h2>
          <NuxtLink to="/kontakt" class="inline-flex items-center justify-center px-10 py-5 font-black text-white bg-red-600 rounded-2xl transition-all hover:bg-zinc-950 shadow-2xl active:scale-95">
            <span class="uppercase italic tracking-widest text-xs">Anfrage senden</span>
          </NuxtLink>
        </div>
      </section>

    </div>
  </NuxtLayout>
</template>

<script setup>
/**
 * SEO & KANONISCHE KONFIGURATION - VelWebSolutions (Tobias Kubina)
 */
const title = 'VelWebSolutions | Spezialisierte ERP & CRM Softwareentwicklung';
const description = 'Exzellente Softwarelösungen von VelWebSolutions. Wir entwickeln hocheffiziente ERP- & CRM-Systeme mit PHP/Laravel & Vue.js. 100% Remote-Agentur aus Deutschland.';
const siteUrl = 'https://velwebsolutions.de';

useHead({
  title,
  htmlAttrs: { lang: 'de' },
  link: [{ rel: 'canonical', href: siteUrl }],
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "SoftwareApplication",
        "name": "VelWebSolutions",
        "author": {
          "@type": "Person",
          "name": "Tobias Kubina"
        },
        "applicationCategory": "BusinessApplication",
        "description": description,
        "url": siteUrl
      })
    }
  ]
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
/* Mobile Optimierung für 320px */
@media (max-width: 350px) {
  h1 { font-size: 2.1rem !important; }
  h2 { font-size: 2.3rem !important; }
  h3 { font-size: 2.2rem !important; }
  p { font-size: 0.95rem !important; line-height: 1.3 !important; }
  header { padding-top: 5rem !important; padding-bottom: 3rem !important; }
  .rounded-\[2\.5rem\] { border-radius: 1.5rem !important; }
}

/* Verhindert Text-Overflow bei langen Wörtern */
h1, h2, h3, p, span {
  hyphens: auto;
  word-wrap: break-word;
}
</style>