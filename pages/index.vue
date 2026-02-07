<template>
  <NuxtLayout name="guest">
    <div class="bg-white text-zinc-900 font-sans antialiased min-h-screen overflow-x-hidden text-left">

      <header class="relative min-h-[60vh] md:min-h-[70vh] flex items-center pt-32 pb-20 bg-[#FF2D20] text-white px-4 sm:px-6 overflow-hidden">
        <div class="absolute inset-0 z-0">
          <div class="absolute inset-0 bg-gradient-to-br from-red-800 via-[#FF2D20] to-red-600"></div>
          <div class="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,white_1px,transparent_0)] bg-[size:32px_32px] opacity-10 md:bg-[size:48px_48px]"></div>
        </div>

        <div class="relative z-10 max-w-7xl mx-auto w-full">
          <div class="inline-flex items-center gap-2 px-3 py-1.5 mb-8 bg-black/20 backdrop-blur-md border border-white/10 rounded-lg">
            <span class="flex h-1.5 w-1.5 shrink-0">
              <span class="animate-ping absolute h-1.5 w-1.5 rounded-full bg-red-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-1.5 w-1.5 bg-red-500"></span>
            </span>
            <span class="text-[9px] sm:text-xs font-black uppercase tracking-[0.3em] italic">VelWebSolutions // Engineering 2026</span>
          </div>

          <h1 class="text-[clamp(2.4rem,11vw,8.5rem)] font-[1000] mb-8 leading-[0.85] tracking-tighter uppercase italic break-words">
            Schluss mit <br />
            <span class="text-white underline decoration-white/20 underline-offset-[8px] md:underline-offset-[20px]">
              Chaos-Systemen.
            </span>
          </h1>

          <p class="text-xl sm:text-3xl md:text-4xl font-light max-w-5xl mb-12 leading-tight italic text-red-50 opacity-95">
            Ich entwickle die digitale Lösung, die <span class="text-white font-bold">Ordnung schafft</span>. Einfach bedienbar, sicher und ohne monatliche Abo-Fallen.
          </p>

          <div class="flex flex-col sm:flex-row gap-4">
            <NuxtLink to="/kontakt" class="w-full sm:w-auto px-10 py-6 bg-zinc-950 text-white font-[1000] rounded-2xl text-center shadow-2xl hover:bg-white hover:text-[#FF2D20] transition-all duration-300 text-lg md:text-xl uppercase italic tracking-widest active:scale-[0.97]">
              System planen
            </NuxtLink>
          </div>
        </div>
      </header>

      <section class="py-24 sm:py-32 md:py-48 lg:py-64 px-4 sm:px-6 bg-white">
        <div class="max-w-7xl mx-auto">
          <div class="mb-16 md:mb-32">
            <h2 class="text-[clamp(3rem,14vw,9.5rem)] font-[1000] uppercase italic tracking-tighter leading-none text-zinc-900 mb-6">Effizienz.</h2>
            <div class="text-[#FF2D20] font-mono italic uppercase text-xs sm:text-lg tracking-[0.4em] ml-2">Smart_Operations_Architecture</div>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
            <div v-for="card in helpCards" :key="card.title" class="group bg-zinc-50 p-8 sm:p-16 lg:p-24 rounded-[3rem] sm:rounded-[5rem] border border-zinc-100 transition-all hover:bg-zinc-950 hover:text-white flex flex-col justify-between">
              <div>
                <div class="text-[#FF2D20] font-mono font-bold text-[10px] sm:text-xs uppercase tracking-[0.3em] mb-6 sm:mb-12 italic">// {{ card.category }}</div>
                <h3 class="text-3xl sm:text-5xl lg:text-7xl font-[1000] uppercase italic tracking-tighter mb-6 leading-[0.9]">{{ card.title }}</h3>
                <p class="text-zinc-500 group-hover:text-zinc-400 italic text-lg sm:text-xl lg:text-2xl leading-relaxed font-medium mb-8">
                  {{ card.text }}
                </p>
              </div>
              <div class="text-4xl opacity-20 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500">{{ card.icon }}</div>
            </div>
          </div>
        </div>
      </section>

      <section class="py-12 sm:py-24 px-4 sm:px-6 bg-white">
        <div class="max-w-7xl mx-auto bg-zinc-950 text-white rounded-[3rem] sm:rounded-[6rem] p-10 sm:p-24 lg:p-32 overflow-hidden relative shadow-3xl">
          <div class="flex flex-col lg:flex-row items-center gap-12 md:gap-24 relative z-10 text-left">
            <div class="relative shrink-0 group">
              <div class="absolute -inset-4 border-2 border-red-600/30 rounded-[3.5rem] rotate-6 group-hover:rotate-0 transition-transform duration-700"></div>
              <img
                src="/tobias_kubina.jpeg"
                alt="Tobias Kubina"
                class="w-40 h-40 sm:w-72 sm:h-72 object-cover rounded-[3rem] shadow-2xl border-4 border-zinc-800 grayscale"
              />
            </div>

            <div>
              <h2 class="text-4xl sm:text-7xl font-[1000] mb-8 italic uppercase tracking-tighter leading-none text-[#FF2D20]">
                Direkter <br class="hidden sm:block" /> <span class="text-white">Kontakt.</span>
              </h2>
              <p class="text-xl sm:text-3xl lg:text-4xl text-zinc-400 italic mb-10 leading-snug font-light">
                "Ich spreche Ihre Sprache, nicht die des Computers. Gemeinsam bauen wir Werkzeuge, die entlasten."
              </p>
              <div class="text-[10px] sm:text-sm font-black uppercase tracking-[0.4em] italic text-zinc-500">
                Tobias Kubina // VelWebSolutions Engineering
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="py-32 sm:py-48 md:py-64 bg-white px-4 sm:px-6 text-center">
        <div class="max-w-5xl mx-auto">
          <div class="inline-block px-6 py-2 mb-12 border-2 border-red-600 text-red-600 text-xs font-black uppercase tracking-[0.4em] italic">
            Zusammenarbeit
          </div>
          <h2 class="text-5xl sm:text-8xl lg:text-[11rem] font-[1000] uppercase mb-16 leading-[0.85] tracking-tighter text-zinc-950">
            Bereit für <br /> <span class="text-zinc-200 italic">den Umbau?</span>
          </h2>
          <NuxtLink to="/kontakt" class="w-full sm:w-auto inline-flex items-center justify-center px-12 py-8 bg-[#FF2D20] text-white font-[1000] uppercase tracking-[0.2em] rounded-[2rem] shadow-2xl hover:bg-zinc-950 transition-all text-lg sm:text-2xl active:scale-95 italic">
            Kontakt aufnehmen
          </NuxtLink>
        </div>
      </section>

    </div>
  </NuxtLayout>
</template>

<script setup>
const helpCards = [
  { category: 'Zeitgewinn', icon: '⏱️', title: 'Struktur statt Suche', text: 'Zentralisierte Abläufe in einem System, das exakt mit Ihren Anforderungen mitwächst.' },
  { category: 'Sicherheit', icon: '🛡️', title: 'Volle Kontrolle', text: 'Ihre Daten auf deutschen Servern – unabhängig von großen US-Software-Konzernen.' },
  { category: 'Wachstum', icon: '📈', title: 'Skalierbar', text: 'Software ohne Sackgassen. Was heute für drei Mitarbeiter funktioniert, trägt morgen auch dreißig.' },
  { category: 'Fokus', icon: '📱', title: 'Intuitiv', text: 'Wer ein Smartphone bedienen kann, kommt mit meinen individuellen Lösungen sofort zurecht.' }
]

useHead({
  title: 'VelWebSolutions | Digitale Lösungen für den Mittelstand',
  htmlAttrs: { lang: 'de' }
})
</script>

<style scoped>
.shadow-3xl {
  box-shadow: 0 50px 100px -20px rgba(255, 45, 32, 0.15), 0 30px 60px -30px rgba(0, 0, 0, 0.3);
}

h1, h2, h3, p {
  hyphens: auto;
  word-wrap: break-word;
}
</style>