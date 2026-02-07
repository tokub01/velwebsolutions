<template>
  <NuxtLayout name="guest">
    <div class="bg-white text-zinc-900 font-sans antialiased min-h-screen overflow-x-hidden text-left">

      <header class="relative min-h-[60vh] md:min-h-[80vh] flex items-center pt-32 pb-20 bg-[#FF2D20] text-white px-6 overflow-hidden">
        <div class="absolute inset-0 z-0">
          <div class="absolute inset-0 bg-gradient-to-br from-red-800 via-[#FF2D20] to-red-600"></div>
          <div class="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,white_1px,transparent_0)] bg-[size:32px_32px] opacity-10 md:bg-[size:48px_48px]"></div>
        </div>

        <div class="relative z-10 max-w-7xl mx-auto w-full">
          <div class="inline-flex items-center gap-3 px-4 py-2.5 mb-10 rounded-xl bg-black/20 backdrop-blur-2xl border border-white/10 text-[10px] sm:text-xs font-black uppercase tracking-[0.3em] italic">
            <span class="relative flex h-2.5 w-2.5">
              <span class="animate-ping absolute h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500"></span>
            </span>
            Systems Architect // Senior Engineering
          </div>

          <h1 class="text-[clamp(2.5rem,10vw,8rem)] font-[1000] mb-8 leading-[0.85] tracking-tighter uppercase italic break-words lg:max-w-7xl">
            Software <br />
            <span class="text-white underline decoration-white/20 underline-offset-8 md:underline-offset-[24px]">
              Engineering.
            </span>
          </h1>

          <p class="text-xl sm:text-3xl md:text-4xl lg:text-5xl text-red-50 font-light max-w-6xl leading-tight italic opacity-95">
            Ich programmiere nicht nur – ich konstruiere <span class="text-white font-bold">hochverfügbare Ökosysteme</span>. Maßgeschneiderte ERP- und CRM-Architekturen für Unternehmen, die über Standardlösungen hinausgewachsen sind.
          </p>
        </div>
      </header>

      <section class="py-24 sm:py-32 md:py-48 bg-white px-6">
        <div class="max-w-7xl mx-auto">
          <div class="mb-16 md:mb-28">
            <h2 class="text-[clamp(3rem,12vw,8rem)] font-[1000] uppercase italic tracking-tighter leading-none text-zinc-900 mb-6">Expertise.</h2>
            <div class="text-[#FF2D20] font-mono italic uppercase text-xs sm:text-lg tracking-[0.4em] ml-2">CORE_BUSINESS_LOGIC_DEVELOPMENT</div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16">
            <div v-for="system in systeme" :key="system.title" class="group bg-zinc-50 p-8 sm:p-14 rounded-[3rem] border border-zinc-100 transition-all duration-500 hover:bg-zinc-950 hover:text-white flex flex-col justify-between h-full">
              <div class="mb-12">
                <div class="text-[#FF2D20] font-mono font-bold text-[10px] uppercase tracking-[0.3em] mb-8 italic">// {{ system.category }}</div>
                <h3 class="text-3xl sm:text-5xl font-[1000] uppercase italic tracking-tighter mb-6 leading-[0.9]">{{ system.title }}</h3>
                <p class="text-zinc-500 group-hover:text-zinc-400 italic text-lg sm:text-2xl leading-relaxed transition-colors">
                  {{ system.description }}
                </p>
              </div>
              <ul class="space-y-4">
                <li v-for="point in system.points" :key="point" class="flex items-start gap-4 text-sm sm:text-lg font-black italic">
                  <span class="w-4 h-[3px] bg-[#FF2D20] mt-3 shrink-0"></span>
                  {{ point }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="py-24 bg-zinc-950 text-white border-y-[12px] border-[#FF2D20] px-6">
        <div class="max-w-7xl mx-auto">
          <h2 class="text-4xl sm:text-6xl md:text-8xl font-[1000] uppercase italic tracking-tighter text-[#FF2D20] mb-20 leading-[0.85]">Engineering <br/><span class="text-white">statt "Code".</span></h2>

          <div class="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
            <div v-for="f in philosophy" :key="f.title" class="space-y-6">
              <div class="text-5xl font-black text-zinc-800 italic">0{{ philosophy.indexOf(f) + 1 }}</div>
              <h4 class="font-[1000] italic uppercase text-2xl lg:text-3xl text-white leading-none">{{ f.title }}</h4>
              <p class="text-base sm:text-lg text-zinc-400 italic leading-relaxed">{{ f.desc }}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="py-24 sm:py-32 bg-white px-6">
        <div class="max-w-7xl mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 class="text-5xl sm:text-7xl font-[1000] uppercase italic tracking-tighter leading-[0.85] text-zinc-900 mb-10">Kein <br /><span class="text-[#FF2D20]">Spielzeug.</span></h2>
              <p class="text-xl lg:text-2xl text-zinc-500 italic leading-relaxed mb-10">
                Ich entwickle Lösungen für Szenarien, in denen Software nicht ausfallen darf. Von der Automatisierung digitaler Verträge für tausende Anwender bis hin zur Analyse-Plattform für 10.000+ Nutzer.
              </p>
            </div>
            <div class="bg-zinc-900 p-8 lg:p-16 rounded-[4rem]">
              <div class="space-y-8">
                <div v-for="item in benefits" :key="item.title">
                  <div class="text-[#FF2D20] font-black text-lg mb-2 italic tracking-widest uppercase">// {{ item.title }}</div>
                  <p class="text-zinc-400 text-lg font-light italic">{{ item.desc }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="py-32 bg-zinc-950 px-6 text-center">
        <div class="max-w-5xl mx-auto">
          <h2 class="text-5xl sm:text-7xl lg:text-[8rem] font-[1000] uppercase italic tracking-tighter leading-[0.85] mb-16 text-white">
            Systemkritisch? <br /> <span class="text-zinc-700 italic">Lass uns bauen.</span>
          </h2>
          <NuxtLink to="/kontakt" class="inline-flex items-center justify-center px-10 py-6 lg:px-16 lg:py-8 font-black text-white bg-[#FF2D20] rounded-2xl transition-all hover:bg-white hover:text-[#FF2D20] shadow-3xl active:scale-95 text-sm lg:text-lg uppercase italic tracking-widest">
            Projekt-Analyse starten
          </NuxtLink>
        </div>
      </section>

    </div>
  </NuxtLayout>
</template>

<script setup>
const systeme = [
  {
    category: 'Enterprise Resource Planning',
    title: 'Mission Control',
    description: 'Konzeption und Umsetzung zentraler Betriebssysteme. Ich überführe Ihre gewachsenen analogen Prozesse in eine digitale Architektur, die mitwächst.',
    points: [
      'Komplexe Business-Logik (Automatisierte Workflows)',
      'Schnittstellen-Architektur (API-First Design)',
      'Performante Datenhaltung für Großmengen',
      'Rollen- & Rechtemanagement auf Enterprise-Level'
    ]
  },
  {
    category: 'Custom CRM Architecture',
    title: 'Value Engineering',
    description: 'Keine "Kundendatenbank", sondern ein strategisches Instrument zur Umsatzsteigerung. Vollautomatisierte Pipelines und tiefe Integrationen.',
    points: [
      'Lead-Gen Automatisierung & Tracking',
      'Integration von Payment & Billing (z.B. Stripe)',
      'Automatisierte Dokumentenerstellung (DocuSign/PDF)',
      'Predictive Analytics & Reporting'
    ]
  }
]

const philosophy = [
  {
    title: 'Architektur First',
    desc: 'Ich schreibe keinen Code auf gut Glück. Jedes System wird nach SOLID-Prinzipien und Domain-Driven Design entworfen, um langfristig wartbar zu bleiben.'
  },
  {
    title: 'Daten-Souveränität',
    desc: 'Keine Vendor-Lock-ins. Die Software gehört Ihnen, die Daten liegen auf Ihrer Infrastruktur. Volle Kontrolle über Sicherheit und Compliance.'
  },
  {
    title: 'Skalierbarkeit',
    desc: 'Engineering bedeutet, für morgen zu bauen. Meine Architekturen halten Lastspitzen stand und lassen sich modular erweitern, ohne das Fundament zu sprengen.'
  }
]

const benefits = [
  { title: 'Full Stack Expertise', desc: 'Backend-Infrastruktur mit PHP/Laravel kombiniert mit hochperformanten Vue.js Frontends.' },
  { title: 'Nachgewiesene Erfahrung', desc: 'Erfolgreiche Umsetzung von Projekten für 10.000+ aktive Nutzer in produktiven Hochlast-Umgebungen.' },
  { title: 'Inhouse-Qualität', desc: 'Direkte Zusammenarbeit. Kein Outsourcing. Software "Made in Krefeld" nach höchsten Engineering-Standards.' }
]

useHead({
  title: 'Software Engineering & ERP Systeme | Tobias Kubina',
  htmlAttrs: { lang: 'de' }
})
</script>

<style scoped>
.shadow-3xl {
  box-shadow: 0 50px 100px -20px rgba(255, 45, 32, 0.25), 0 30px 60px -30px rgba(0, 0, 0, 0.5);
}
</style>