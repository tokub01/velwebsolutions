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
          Umfassende Dokumentation der Datenverarbeitungsprozesse und Infrastruktur-Logik.
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
              <p class="text-gray-400 font-medium">Gubener Str. 14, 47829 Krefeld, Deutschland</p>
              <div class="pt-4 flex flex-wrap gap-6 text-xs font-bold uppercase tracking-widest">
                <NuxtLink to="/kontakt" class="flex items-center gap-2 hover:text-red-500 transition-colors"><Mail class="w-4 h-4"/> Kontaktformular</NuxtLink>
                <a href="mailto:info@velwebsolutions.de" class="flex items-center gap-2 hover:text-red-500 transition-colors"><Mail class="w-4 h-4"/> info@velwebsolutions.de</a>
              </div>
            </div>
          </div>
        </section>

        <section class="bg-gray-50 p-8 md:p-12 rounded-[3rem] border border-gray-200">
          <div class="flex items-center gap-4 mb-8">
            <Code class="text-red-600 w-8 h-8" />
            <h2 class="text-2xl md:text-3xl font-black text-gray-900 uppercase italic tracking-tighter">Technologische Basis</h2>
          </div>
          <div class="text-sm md:text-base italic text-gray-700 leading-relaxed space-y-4">
            <p>
              Diese Website wurde mit dem Framework <strong>Nuxt.js (v3)</strong> entwickelt. Nuxt basiert auf <strong>Vue.js</strong> und ermöglicht die Bereitstellung einer performanten Single-Page-Application. Das Design-System basiert auf <strong>Tailwind CSS</strong>.
            </p>
            <p>
              Im Sinne der maximalen Transparenz („Open Source“) ist die Code-Basis dieser Website öffentlich einsehbar. Dies unterstreicht den Anspruch an eine saubere Architektur und die Einhaltung technischer Standards.
            </p>
            <div class="pt-2">
              <a href="https://github.com/tokub01/velwebsolutions" target="_blank" class="inline-flex items-center gap-2 text-red-600 font-bold hover:underline">
                <Github class="w-4 h-4" /> // View Source on GitHub
              </a>
            </div>
          </div>
        </section>

        <section class="space-y-12">
          <div class="flex items-center gap-4">
            <span class="text-red-600 font-black text-2xl italic tracking-tighter">03 //</span>
            <h2 class="text-2xl md:text-3xl font-black text-gray-900 uppercase italic tracking-tighter">Drittanbieter & Hosting</h2>
          </div>

          <div class="p-8 bg-gray-50 rounded-3xl border border-gray-100 relative group overflow-hidden">
            <div class="flex justify-between items-start mb-6">
              <h3 class="font-black uppercase text-sm tracking-[0.2em] text-gray-900">03.1 // Hosting (IONOS)</h3>
              <Server class="w-5 h-5 text-red-600" />
            </div>
            <div class="text-sm italic text-gray-600 space-y-4 leading-relaxed">
              <p>Betreiber: <strong>IONOS SE</strong>, Elgendorfer Str. 57, 56410 Montabaur, Deutschland.</p>
              <p>Rechtliches: Ein Vertrag zur Auftragsverarbeitung (AVV) nach Art. 28 DSGVO wurde geschlossen. Die Datenverarbeitung erfolgt ausschließlich auf deutschen Servern.</p>
              <p>Link: <a href="https://www.ionos.de/terms-gtc/datenschutzerklaerung/" target="_blank" class="text-red-600 underline">IONOS Datenschutzerklärung</a></p>
            </div>
          </div>

          <div class="p-8 bg-gray-50 rounded-3xl border border-gray-100 relative group overflow-hidden">
            <div class="flex justify-between items-start mb-6">
              <h3 class="font-black uppercase text-sm tracking-[0.2em] text-gray-900">03.2 // Mail-API (EmailJS)</h3>
              <Mail class="w-5 h-5 text-red-600" />
            </div>
            <div class="text-sm italic text-gray-600 space-y-4 leading-relaxed">
              <p>Betreiber: <strong>EmailJS.com</strong> (gBridge s.r.o.), Loretánské náměstí 109/3, 118 00 Prag, Tschechien.</p>
              <p>Details: Übermittlung der Formulardaten zur E-Mail-Zustellung. Absicherung durch EU-Standardvertragsklauseln (SCC).</p>
              <p>Link: <a href="https://www.emailjs.com/legal/privacy-policy/" target="_blank" class="text-red-600 underline">EmailJS Privacy Policy</a></p>
            </div>
          </div>

          <div class="p-8 bg-gray-50 rounded-3xl border border-gray-100 relative group overflow-hidden">
            <div class="flex justify-between items-start mb-6">
              <h3 class="font-black uppercase text-sm tracking-[0.2em] text-gray-900">03.3 // Analyse (GA4)</h3>
              <Activity class="w-5 h-5 text-red-600" />
            </div>
            <div class="text-sm italic text-gray-600 space-y-4 leading-relaxed">
              <p>Betreiber: <strong>Google Ireland Ltd.</strong>, Gordon House, Barrow Street, Dublin 4, Irland.</p>
              <p>Rechtliches: Ein AV-Vertrag nach Art. 28 DSGVO wurde geschlossen. Die Übermittlung in die USA ist durch das Data Privacy Framework (DPF) abgesichert.</p>
              <p>Link: <a href="https://policies.google.com/privacy?hl=de" target="_blank" class="text-red-600 underline">Google Datenschutzerklärung</a></p>
            </div>
          </div>

          <div class="p-8 bg-gray-50 rounded-3xl border border-gray-100 relative group overflow-hidden">
            <div class="flex justify-between items-start mb-6">
              <h3 class="font-black uppercase text-sm tracking-[0.2em] text-gray-900">03.4 // Security (reCAPTCHA)</h3>
              <Lock class="w-5 h-5 text-red-600" />
            </div>
            <div class="text-sm italic text-gray-600 space-y-4 leading-relaxed">
              <p>Betreiber: <strong>Google Ireland Ltd.</strong>, Gordon House, Barrow Street, Dublin 4, Irland.</p>
              <p>Zweck: Missbrauchsschutz der Formulare. Das Skript wird erst nach expliziter Einwilligung im Cookie-Banner geladen.</p>
              <p>Link: <a href="https://policies.google.com/terms?hl=de" target="_blank" class="text-red-600 underline">Google Nutzungsbedingungen</a></p>
            </div>
          </div>
        </section>

        <section class="border-t border-gray-100 pt-16">
          <div class="flex flex-wrap gap-8 text-xs font-black uppercase tracking-widest italic text-gray-400">
            <NuxtLink to="/" class="hover:text-red-600 transition-colors">Startseite</NuxtLink>
            <NuxtLink to="/impressum" class="hover:text-red-600 transition-colors">Impressum</NuxtLink>
            <NuxtLink to="/kontakt" class="hover:text-red-600 transition-colors">Kontakt</NuxtLink>
          </div>
        </section>

      </div>
    </main>
  </div>
</template>

<script setup>
import {
  ShieldCheck, User, Mail, Globe,
  Server, Activity, Lock, Code, Github
} from 'lucide-vue-next'

definePageMeta({
  layout: 'guest'
})

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
    { name: 'description', content: 'DSGVO Dokumentation der Web-Infrastruktur: Nuxt.js, IONOS, EmailJS und Google Services.' },
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