<template>
  <div class="font-sans text-gray-900 bg-white selection:bg-red-100 selection:text-red-600">

    <header class="relative pt-32 pb-16 md:pt-48 md:pb-32 bg-gradient-to-br from-red-700 via-red-600 to-red-500 text-white px-6 overflow-hidden mt-[81px]">
      <div class="absolute inset-0 opacity-10 pointer-events-none">
        <div class="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] animate-[grid-move_20s_linear_infinite]"></div>
      </div>

      <div class="relative z-10 max-w-5xl mx-auto text-center">
        <div class="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] font-black uppercase tracking-[0.2em] italic text-white">
          <GraduationCap class="w-3 h-3 text-red-300" /> Academic Engineering Level // B.Sc. Computer Science
        </div>
        <h1 class="text-3xl sm:text-5xl md:text-7xl font-black mb-6 leading-tight tracking-tighter uppercase italic">
          Impres<span class="text-white/80 underline decoration-white/30 italic">sum.</span>
        </h1>
        <p class="text-base md:text-xl text-red-50 max-w-3xl mx-auto leading-relaxed font-medium italic opacity-90">
          Rechtssichere Instanz & akademische Qualifikation – Stand 2026.
        </p>
      </div>
    </header>

    <main class="py-16 md:py-24 px-4 sm:px-6 bg-white">
      <div class="max-w-4xl mx-auto space-y-20">

        <section>
          <div class="flex items-center gap-4 mb-8">
            <span class="text-red-600 font-black text-2xl italic">01 //</span>
            <h2 class="text-2xl md:text-3xl font-black text-gray-900 uppercase italic tracking-tighter">Diensteanbieter</h2>
          </div>
          <div class="bg-gray-900 p-8 md:p-12 rounded-[2rem] text-white shadow-2xl relative overflow-hidden">
            <div class="absolute top-0 right-0 p-8 opacity-5">
              <User class="w-32 h-32" />
            </div>
            <div class="relative z-10 space-y-6">
              <div class="space-y-1">
                <p class="text-2xl md:text-4xl font-black tracking-tight italic">Tobias Kubina, B.Sc.</p>
                <p class="text-xl md:text-2xl font-bold text-red-500 italic font-mono">VelWebSolutions</p>
                <p class="text-xs uppercase tracking-widest font-black text-gray-400 mt-2 italic">Informatiker (Bachelor of Science)</p>
              </div>
              <div class="space-y-1 text-gray-300 font-medium italic tracking-wide border-l-2 border-red-600 pl-6">
                <p>Gubener Str. 14</p>
                <p>47829 Krefeld</p>
                <p class="text-[10px] uppercase text-white/40 font-black tracking-[0.3em] mt-4">Deutschland | Einzelunternehmen</p>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div class="flex items-center gap-4 mb-8">
            <span class="text-red-600 font-black text-2xl italic">02 //</span>
            <h2 class="text-2xl md:text-3xl font-black text-gray-900 uppercase italic tracking-tighter">Kontakt-Interface</h2>
          </div>
          <div class="grid md:grid-cols-2 gap-6 font-bold italic tracking-tight">
            <a href="mailto:info@velwebsolutions.de" class="flex items-center gap-4 p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-red-600 transition-all group shadow-sm">
              <Mail class="w-6 h-6 text-red-600" />
              <span class="group-hover:text-red-600">info@velwebsolutions.de</span>
            </a>
          </div>
        </section>

        <section class="grid md:grid-cols-2 gap-12 border-y border-gray-100 py-12">
          <div class="space-y-4">
            <h3 class="text-red-600 font-black uppercase text-[10px] tracking-[0.2em] italic flex items-center gap-2">
              <Scale class="w-3 h-3" /> Steuerliche Einordnung
            </h3>
            <div class="italic text-gray-600 text-sm leading-relaxed space-y-5">
              <p class="text-gray-900 font-bold border-l-2 border-red-600 pl-4 bg-gray-50 py-1">
                Regelbesteuerung <span class="text-[10px] text-gray-400 font-black uppercase tracking-widest ml-2 block sm:inline">// Vorsteuerabzugsberechtigt</span>
              </p>

              <div class="space-y-3">
                <div class="space-y-1">
                  <p class="text-[10px] font-black text-gray-400 uppercase tracking-widest italic leading-none">Umsatzsteuer-Identifikationsnummer (§ 27a UStG)</p>
                  <p class="text-red-600 font-black text-lg tracking-wider">DE459259380</p>
                </div>

                <div class="space-y-1">
                  <p class="text-[10px] font-black text-gray-400 uppercase tracking-widest italic leading-none">Wirtschafts-Identifikationsnummer (§ 139c AO)</p>
                  <p class="text-gray-900 font-bold">DE459259380-00001</p>
                </div>

                <div class="space-y-1">
                  <p class="text-[10px] font-black text-gray-400 uppercase tracking-widest italic leading-none">Zuständiges Finanzamt</p>
                  <p class="text-gray-900 font-medium">Krefeld <span class="text-gray-400 ml-2 font-mono text-[11px]">(St.-Nr. 117/5212/2908)</span></p>
                </div>
              </div>
            </div>
          </div>

          <div class="space-y-4">
            <h3 class="text-red-600 font-black uppercase text-[10px] tracking-[0.2em] italic flex items-center gap-2">
              <PenTool class="w-3 h-3" /> Redaktionelle Leitung
            </h3>
            <div class="space-y-2">
              <p class="font-bold italic text-gray-900">Tobias Kubina, B.Sc.</p>
              <p class="text-[10px] text-gray-400 uppercase font-black leading-tight max-w-[200px]">
                Inhaltlich verantwortlich gemäß § 18 Abs. 2 MStV
              </p>
            </div>
          </div>
        </section>

        <section class="bg-gray-50 p-8 md:p-12 rounded-[3rem] border-2 border-dashed border-gray-200 relative overflow-hidden">
          <div class="absolute top-0 right-0 p-8 opacity-5">
            <Cpu class="w-24 h-24" />
          </div>
          <div class="relative z-10">
            <div class="flex items-center gap-4 mb-6">
              <span class="text-red-600 font-black text-2xl italic tracking-tighter">04 //</span>
              <h2 class="text-2xl md:text-3xl font-black text-gray-900 uppercase italic tracking-tighter">AI Disclosure</h2>
            </div>
            <p class="text-sm md:text-base italic text-gray-600 leading-relaxed mb-6">
              Gemäß <strong>Art. 50 der Verordnung (EU) 2024/1689 (AI Act)</strong>: Diese Plattform nutzt generative KI-Systeme (Claude AI, Gemini) zur Optimierung von Code-Strukturen und redaktioneller Erstellung. Als Informatiker (B.Sc.) gewährleiste ich die logische Integrität und volle Verantwortung für alle Resultate.
            </p>
            <div class="inline-block px-4 py-2 bg-white rounded-full border border-gray-200 text-[10px] font-black uppercase tracking-widest italic text-red-600 shadow-sm">
              // Scientific Code Validation Active
            </div>
          </div>
        </section>

        <section class="grid md:grid-cols-2 gap-8 pt-8">
          <div class="p-8 bg-white rounded-3xl border border-gray-100 space-y-4 shadow-sm">
            <h4 class="font-black text-gray-900 uppercase text-xs italic tracking-widest">// OS-Schlichtung</h4>
            <p class="text-[11px] text-gray-500 italic leading-relaxed">
              Plattform der EU-Kommission zur Online-Streitbeilegung:
              <a href="https://ec.europa.eu/consumers/odr/" target="_blank" class="text-red-600 underline font-bold">ec.europa.eu/consumers/odr</a>.
              Wir sind zur Teilnahme an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle weder verpflichtet noch bereit (§ 36 VSBG).
            </p>
          </div>
          <div class="p-8 bg-white rounded-3xl border border-gray-100 space-y-4 shadow-sm">
            <h4 class="font-black text-gray-900 uppercase text-xs italic tracking-widest">// Urheberrecht</h4>
            <p class="text-[11px] text-gray-500 italic leading-relaxed">
              Die durch den Seitenbetreiber erstellten Inhalte unterliegen dem deutschen Urheberrecht. Bildquellen: Eigene Aufnahmen, Unsplash License, KI-Assets. Externe Links wurden zum Zeitpunkt der Verlinkung auf Rechtsverstöße geprüft.
            </p>
          </div>
        </section>

      </div>
    </main>
  </div>
</template>

<script setup>
definePageMeta({
  layout: 'guest'
})

useHead({
  title: 'Impressum | VelWebSolutions',
  meta: [
    { name: 'description', content: 'Gesetzliches Impressum von Tobias Kubina, B.Sc. Informatik. DDG, TDDDG, EU AI Act und UStG konform.' },
    { name: 'robots', content: 'noindex, follow' }
  ]
})
</script>

<style scoped>
@keyframes grid-move {
  0% { transform: translate(0, 0); }
  100% { transform: translate(40px, 40px); }
}
p, span, h1, h2 { hyphens: none; }
</style>