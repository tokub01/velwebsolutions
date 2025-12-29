<template>
  <div class="font-sans text-gray-900 bg-white selection:bg-red-100 selection:text-red-600">

    <header class="relative pt-32 pb-16 md:pt-48 md:pb-32 bg-gradient-to-br from-red-700 via-red-600 to-red-500 text-white px-6 overflow-hidden mt-[81px]">
      <div class="absolute inset-0 opacity-10 pointer-events-none">
        <div class="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px] animate-[grid-move_20s_linear_infinite]"></div>
      </div>

      <div class="relative z-10 max-w-5xl mx-auto text-center px-4">
        <div class="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] font-black uppercase tracking-[0.2em] italic text-white">
          <ShieldCheck class="w-3 h-3 text-red-300" /> Professional Privacy Layer // B.Sc. Standard
        </div>
        <h1 class="text-3xl sm:text-5xl md:text-7xl font-black mb-6 leading-tight tracking-tighter uppercase italic">
          Data<span class="text-white/80 underline decoration-white/30 italic">Privacy.</span>
        </h1>
        <p class="text-base md:text-xl text-red-50 max-w-3xl mx-auto leading-relaxed font-medium italic opacity-90">
          Umfassende Dokumentation der Datenverarbeitungsprozesse und US-Transfer-Logik.
        </p>
      </div>
    </header>

    <main class="py-16 md:py-24 px-4 sm:px-6 bg-white">
      <div class="max-w-4xl mx-auto space-y-24">

        <section>
          <div class="flex items-center gap-4 mb-8">
            <span class="text-red-600 font-black text-2xl italic tracking-tighter">01 //</span>
            <h2 class="text-2xl md:text-3xl font-black text-gray-900 uppercase italic tracking-tighter">Verantwortung</h2>
          </div>
          <div class="bg-gray-900 p-8 rounded-[2rem] text-white shadow-2xl relative overflow-hidden group">
            <div class="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <User class="w-32 h-32" />
            </div>
            <div class="relative z-10 space-y-4 italic">
              <div>
                <p class="text-2xl md:text-3xl font-black tracking-tight italic uppercase">Tobias Kubina, B.Sc.</p>
                <p class="text-red-500 font-bold uppercase tracking-widest text-sm">VelWebSolutions</p>
              </div>
              <p class="text-gray-400 font-medium">Gubener Str. 14, 47829 Krefeld</p>
              <div class="pt-4 flex flex-wrap gap-6 text-xs font-bold uppercase tracking-widest">
                <a href="mailto:info@velwebsolutions.de" class="flex items-center gap-2 hover:text-red-500 transition-colors"><Mail class="w-4 h-4"/> info@velwebsolutions.de</a>
                <a href="tel:+4917632544620" class="flex items-center gap-2 hover:text-red-500 transition-colors"><Phone class="w-4 h-4"/> +49 176 32544620</a>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-red-50 p-8 md:p-12 rounded-[3rem] border-2 border-dashed border-red-200">
          <div class="flex items-center gap-4 mb-8">
            <Globe class="text-red-600 w-8 h-8" />
            <h2 class="text-2xl md:text-3xl font-black text-gray-900 uppercase italic tracking-tighter">US-Transfer-Protokoll</h2>
          </div>
          <div class="text-sm md:text-base italic text-gray-700 leading-relaxed space-y-6">
            <p>
              Diese Website nutzt Dienste von US-Unternehmen. Da die USA laut EuGH kein angemessenes Datenschutzniveau bieten, sichern wir diese Transfers wie folgt ab:
            </p>
            <div class="grid md:grid-cols-2 gap-4">
              <div class="bg-white p-5 rounded-2xl border border-red-100 shadow-sm">
                <p class="font-black text-red-600 text-xs uppercase mb-2">// DPF Zertifizierung</p>
                <p class="text-[11px] leading-tight text-gray-500">Nutzung des EU-U.S. Data Privacy Frameworks für zertifizierte Unternehmen (z.B. Google).</p>
              </div>
              <div class="bg-white p-5 rounded-2xl border border-red-100 shadow-sm">
                <p class="font-black text-red-600 text-xs uppercase mb-2">// SCC Klauseln</p>
                <p class="text-[11px] leading-tight text-gray-500">Abschluss von Standardvertragsklauseln gemäß Art. 46 DSGVO für maximale Rechtssicherheit.</p>
              </div>
            </div>
          </div>
        </section>

        <section class="space-y-12">
          <div class="flex items-center gap-4">
            <span class="text-red-600 font-black text-2xl italic tracking-tighter">03 //</span>
            <h2 class="text-2xl md:text-3xl font-black text-gray-900 uppercase italic tracking-tighter">Technischer Stack</h2>
          </div>

          <div class="p-8 bg-gray-50 rounded-3xl border border-gray-100 relative group overflow-hidden">
            <div class="flex justify-between items-start mb-6">
              <h3 class="font-black uppercase text-sm tracking-[0.2em] text-gray-900">03.1 // Hosting (Netlify)</h3>
              <Server class="w-5 h-5 text-red-600" />
            </div>
            <div class="text-sm italic text-gray-600 space-y-4 leading-relaxed">
              <p>Betreiber: <strong>Netlify, Inc.</strong>, USA.</p>
              <p>Rechtsgrundlage: Art. 6 Abs. 1 lit. f DSGVO (Berechtigtes Interesse an IT-Sicherheit).</p>
            </div>
          </div>

          <div class="p-8 bg-gray-50 rounded-3xl border border-gray-100 relative group overflow-hidden">
            <div class="flex justify-between items-start mb-6">
              <h3 class="font-black uppercase text-sm tracking-[0.2em] text-gray-900">03.2 // Analyse (GA4)</h3>
              <Activity class="w-5 h-5 text-red-600" />
            </div>
            <div class="text-sm italic text-gray-600 space-y-4 leading-relaxed">
              <p>Betreiber: <strong>Google Ireland Ltd.</strong>.</p>
              <p>Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung via Consent-Banner).</p>
            </div>
          </div>

          <div class="p-8 bg-gray-50 rounded-3xl border border-gray-100 relative group overflow-hidden">
            <div class="flex justify-between items-start mb-6">
              <h3 class="font-black uppercase text-sm tracking-[0.2em] text-gray-900">03.3 // Security (reCAPTCHA)</h3>
              <Lock class="w-5 h-5 text-red-600" />
            </div>
            <div class="text-sm italic text-gray-600 space-y-4 leading-relaxed">
              <p>Zweck: Spam-Schutz. Das Skript wird erst nach Einwilligung im Privacy Panel geladen.</p>
              <p>Rechtsgrundlage: Art. 6 Abs. 1 lit. a DSGVO & § 25 Abs. 1 TDDDG (Einwilligung).</p>
            </div>
          </div>
        </section>

        <section class="bg-gray-900 p-12 rounded-[3.5rem] text-center shadow-3xl border border-gray-800">
          <div class="max-w-xl mx-auto">
            <h3 class="text-2xl md:text-3xl font-black text-white uppercase italic tracking-tighter mb-4">Einwilligungen verwalten</h3>
            <p class="text-gray-400 font-medium italic mb-8">
              Sie können Ihre Cookie-Einstellungen jederzeit einsehen, ändern oder Ihre Einwilligung mit Wirkung für die Zukunft widerrufen.
            </p>
            <button
              @click="isBannerVisible = true"
              class="bg-red-600 text-white px-12 py-6 rounded-2xl font-black uppercase italic tracking-widest hover:bg-white hover:text-red-600 transition-all shadow-xl active:scale-95">
              Einstellungen anpassen
            </button>
          </div>
        </section>

        <section>
          <div class="flex items-center gap-4 mb-8">
            <span class="text-red-600 font-black text-2xl italic tracking-tighter">04 //</span>
            <h2 class="text-2xl md:text-3xl font-black text-gray-900 uppercase italic tracking-tighter">Ihre Rechte</h2>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div v-for="r in rights" :key="r.id" class="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:border-red-600 transition-all group">
              <div class="text-red-600 font-black text-xs uppercase tracking-widest mb-2 group-hover:translate-x-2 transition-transform italic">{{ r.ref }}</div>
              <h4 class="font-bold text-gray-900 text-lg italic tracking-tight">{{ r.title }}</h4>
              <p class="text-xs text-gray-500 italic mt-2">{{ r.desc }}</p>
            </div>
          </div>
        </section>

      </div>
    </main>
  </div>
</template>

<script setup>
import {
  ShieldCheck, User, Mail, Phone, Globe,
  Server, Activity, Lock
} from 'lucide-vue-next'

definePageMeta({
  layout: 'guest'
})

// Zugriff auf den globalen Banner-Zustand für den Widerrufs-Button
const isBannerVisible = useState('cookie_banner_visible')

const rights = [
  { id: 1, ref: 'Art. 15 DSGVO', title: 'Auskunft', desc: 'Sie haben das Recht zu erfahren, welche Daten ich über Sie speichere.' },
  { id: 2, ref: 'Art. 17 DSGVO', title: 'Löschung', desc: 'Anspruch auf unverzügliche Löschung Ihrer personenbezogenen Daten.' },
  { id: 3, ref: 'Art. 21 DSGVO', title: 'Widerspruch', desc: 'Widerspruch gegen Verarbeitungen auf Basis berechtigter Interessen.' },
  { id: 4, ref: 'Art. 20 DSGVO', title: 'Portabilität', desc: 'Erhalt Ihrer Daten in einem strukturierten, maschinenlesbaren Format.' }
]

useHead({
  title: 'Datenschutz & Compliance | VelWebSolutions',
  meta: [
    { name: 'description', content: 'DSGVO & TDDDG konforme Datenschutzerklärung von Tobias Kubina (B.Sc.). Transparente Dokumentation von Netlify, EmailJS, GA4 und reCAPTCHA.' },
    { name: 'robots', content: 'noindex, follow' }
  ]
})
</script>

<style scoped>
@keyframes grid-move {
  0% { transform: translateY(0); }
  100% { transform: translateY(40px); }
}
p, span, h1, h2 { hyphens: none; }

.shadow-3xl {
  box-shadow: 0 35px 60px -15px rgba(0, 0, 0, 0.3);
}
</style>