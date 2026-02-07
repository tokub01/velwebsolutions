<template>
  <NuxtLayout name="guest">
    <div class="font-sans text-zinc-900 bg-white selection:bg-red-100 selection:text-red-600 antialiased overflow-x-hidden text-left">

      <header class="relative min-h-[60vh] md:min-h-[70vh] flex items-center pt-32 pb-20 bg-[#FF2D20] text-white px-6 overflow-hidden">
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
            Informatiker B.Sc. // Senior Software Engineer
          </div>

          <h1 class="text-[clamp(2.8rem,11vw,9rem)] font-[1000] mb-8 leading-[0.85] tracking-tighter uppercase italic break-words lg:max-w-7xl">
            Technik <br />
            <span class="text-white underline decoration-white/20 underline-offset-8 md:underline-offset-[24px]">
              mit Tiefe.
            </span>
          </h1>

          <p class="text-xl sm:text-3xl md:text-4xl lg:text-5xl text-red-50 font-light max-w-6xl leading-tight italic opacity-95">
            Ich baue keine "Webseiten". Ich entwickle <span class="text-white font-bold">hochperformante Architekturen</span>, die komplexe Business-Logik in skalierbare Lösungen übersetzen.
          </p>
        </div>
      </header>

      <section class="py-24 sm:py-32 md:py-48 lg:py-64 bg-white px-6 text-left">
        <div class="max-w-7xl mx-auto">
          <div class="mb-16 md:mb-28 lg:mb-40 text-left">
            <h2 class="text-[clamp(3.5rem,14vw,10rem)] font-[1000] uppercase italic tracking-tighter leading-none text-zinc-900 mb-6 text-left">Profil.</h2>
            <div class="text-[#FF2D20] font-mono italic uppercase text-xs sm:text-lg tracking-[0.4em] ml-2 text-left">SENIOR_LEVEL_ENGINEERING</div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-start">
            <div class="group relative aspect-[4/5] bg-zinc-900 rounded-[3rem] lg:rounded-[6rem] overflow-hidden shadow-2xl">
              <img
                src="/tobias_kubina.jpeg"
                alt="Tobias Kubina"
                class="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
              />
              <div class="absolute bottom-10 left-10 right-10 p-8 bg-white/10 backdrop-blur-2xl rounded-3xl border border-white/20">
                <span class="block text-[10px] font-black uppercase tracking-widest text-[#FF2D20] mb-2">Status // 2026</span>
                <span class="text-white text-2xl font-[1000] italic uppercase tracking-tighter">Senior IT Developer</span>
              </div>
            </div>

            <div class="flex flex-col justify-center space-y-8 lg:space-y-12 text-left">
              <p class="text-2xl sm:text-4xl lg:text-5xl text-zinc-900 font-light leading-tight italic text-left">
                Als studierter Informatiker betrachte ich Software als <span class="text-[#FF2D20] font-bold text-3xl sm:text-5xl lg:text-7xl block mt-4 not-italic uppercase tracking-tighter font-[1000] text-left">Ecosystem.</span>
              </p>
              <p class="text-zinc-500 italic text-lg sm:text-xl lg:text-2xl leading-relaxed text-left">
                Ob für Plattformen mit über 10.000 Nutzern oder komplexe ERP-Strukturen – Belastbarkeit und Wartbarkeit sind mein Standard. Neben meiner Enterprise-Tätigkeit konzipiere ich für den Mittelstand digitale Schaltzentralen.
              </p>
              <div class="flex flex-wrap gap-3">
                <div v-for="tag in ['Laravel_Expert', 'Vue_Architect', 'SOLID_Design', 'Enterprise_Architecture']" :key="tag" class="px-6 py-3 bg-zinc-50 border border-zinc-200 rounded-2xl text-xs font-black uppercase tracking-widest italic text-zinc-600">
                  {{ tag }}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="py-24 sm:py-32 md:py-48 lg:py-72 bg-zinc-950 text-white border-y-[12px] border-[#FF2D20] px-6">
        <div class="max-w-7xl mx-auto relative z-10 text-left">
          <h2 class="text-5xl sm:text-7xl md:text-[8rem] lg:text-[10rem] font-[1000] uppercase italic tracking-tighter text-[#FF2D20] mb-20 lg:mb-32 leading-[0.85] text-left">Clean <br/><span class="text-white">Standards.</span></h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 text-left">
            <div v-for="item in standards" :key="item.title" class="border-l-4 border-[#FF2D20] pl-8 lg:pl-12 py-4 text-left">
              <h4 class="font-[1000] italic uppercase text-2xl sm:text-3xl lg:text-5xl mb-6 text-white leading-none text-left">{{ item.title }}</h4>
              <p class="text-base sm:text-xl lg:text-2xl text-zinc-500 italic leading-relaxed text-left">{{ item.desc }}</p>
            </div>
          </div>
        </div>
      </section>

      <section class="py-24 sm:py-32 md:py-48 lg:py-64 bg-white px-6 text-left">
        <div class="max-w-7xl mx-auto">
          <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div class="text-left">
              <h2 class="text-5xl sm:text-7xl lg:text-9xl font-[1000] uppercase italic tracking-tighter leading-[0.85] text-zinc-900 mb-10 text-left">Track <br /><span class="text-[#FF2D20]">Record.</span></h2>
              <p class="text-xl lg:text-3xl text-zinc-500 italic leading-relaxed mb-10 text-left">
                Softwareentwicklung ist digitales Handwerk. Meine Systeme folgen klaren Mustern und sind für langlebigen Erfolg ausgelegt.
              </p>
            </div>
            <div class="bg-zinc-900 p-10 lg:p-20 rounded-[4rem] text-left shadow-3xl">
              <div class="space-y-10 text-left">
                <div v-for="exp in experience" :key="exp.title" class="text-left">
                  <div class="text-[#FF2D20] font-black text-xl mb-2 italic tracking-widest uppercase text-left">// {{ exp.label }}</div>
                  <h5 class="text-white text-2xl font-bold italic mb-2 text-left">{{ exp.title }}</h5>
                  <p class="text-zinc-400 text-lg lg:text-xl font-light italic text-left">{{ exp.desc }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="py-32 sm:py-48 md:py-64 bg-zinc-950 px-6 text-center">
        <div class="max-w-5xl mx-auto">
          <div class="inline-block px-6 py-2 mb-12 border-2 border-[#FF2D20] text-[#FF2D20] text-xs font-black uppercase tracking-[0.4em] italic">
            Zusammenarbeit
          </div>
          <h2 class="text-5xl sm:text-7xl lg:text-[9rem] font-[1000] uppercase italic tracking-tighter leading-[0.85] mb-16 text-white">
            Projekt <br /> <span class="text-zinc-700 italic">starten.</span>
          </h2>
          <NuxtLink to="/kontakt" class="w-full sm:w-auto inline-flex items-center justify-center px-12 py-7 lg:px-20 lg:py-10 font-black text-white bg-[#FF2D20] rounded-[2rem] transition-all hover:bg-white hover:text-[#FF2D20] shadow-3xl active:scale-95 text-sm lg:text-xl uppercase italic tracking-[0.2em]">
            Beratung anfordern
          </NuxtLink>
        </div>
      </section>

    </div>
  </NuxtLayout>
</template>

<script setup>
const standards = [
  {
    title: 'Wartbarkeit',
    desc: 'Code muss auch in 5 Jahren noch verständlich sein. Ich setze konsequent auf Clean Code und dokumentierte Architekturen.'
  },
  {
    title: 'Performance',
    desc: 'Ladezeiten sind Business-Killer. Meine Systeme sind auf Geschwindigkeit optimiert – vom Datenbank-Query bis zum Frontend.'
  }
]

const experience = [
  {
    label: 'Enterprise',
    title: 'Senior IT Developer',
    desc: 'Entwicklung und Architektur geschäftskritischer Systeme im hochverfügbaren Umfeld (Enterprise Level).'
  },
  {
    label: 'History',
    title: 'Scale & Performance',
    desc: 'Architektur-Verantwortung für Plattformen mit 10.000+ Nutzern und Anbindung komplexer Payment-Systeme.'
  }
]

useHead({
  title: 'Über mich | Tobias Kubina',
  htmlAttrs: { lang: 'de' }
})
</script>

<style scoped>
.shadow-3xl {
  box-shadow: 0 50px 100px -20px rgba(255, 45, 32, 0.2), 0 30px 60px -30px rgba(0, 0, 0, 0.5);
}

h1, h2, h3, h4, p {
  hyphens: auto;
  word-wrap: break-word;
}
</style>