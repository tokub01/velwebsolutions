<template>
  <footer class="bg-gray-900 border-t-8 border-red-600 pt-24 pb-12 text-white selection:bg-red-600 selection:text-white">
    <div class="max-w-7xl mx-auto px-6 grid md:grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24">

      <div class="space-y-8">
        <div class="flex items-center gap-4 group">
          <div class="bg-red-600 p-3 rounded-2xl group-hover:rotate-12 transition-transform shadow-lg shadow-red-900/20">
            <LucideLaptop class="h-8 w-8 text-white" />
          </div>
          <h3 class="text-3xl font-black italic uppercase tracking-tighter">
            VelWeb<span class="text-red-600">Solutions</span>
          </h3>
        </div>
        <p class="text-gray-400 text-lg leading-relaxed italic font-medium max-w-md">
          High-End Engineering für <span class="text-white">Web-Applikationen</span> & digitale Infrastruktur.
          Fokus auf Performance, Clean Code und skalierbare Systeme.
        </p>
        <div class="flex gap-4">
          <NuxtLink to="https://www.linkedin.com/in/tobias-kubina-9683a6199" target="_blank" class="p-4 bg-gray-800 rounded-2xl hover:bg-red-600 transition-all hover:-translate-y-1">
            <LucideLinkedin class="h-6 w-6 text-white" />
          </NuxtLink>
          <a href="mailto:info@velwebsolutions.de" class="p-4 bg-gray-800 rounded-2xl hover:bg-red-600 transition-all hover:-translate-y-1">
            <LucideMail class="h-6 w-6 text-white" />
          </a>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-8">
        <div class="space-y-6">
          <h4 class="text-[10px] font-black text-red-600 uppercase tracking-[0.3em] italic">// Services</h4>
          <ul class="space-y-4">
            <li><NuxtLink to="/leistungen" class="footer-link">Leistungen</NuxtLink></li>
            <li><NuxtLink to="/preise" class="footer-link">Preise</NuxtLink></li>
            <li><NuxtLink to="/projekte" class="footer-link">Projekte</NuxtLink></li>
            <li><NuxtLink to="/blog" class="footer-link">Blog</NuxtLink></li>
          </ul>
        </div>
        <div class="space-y-6">
          <h4 class="text-[10px] font-black text-red-600 uppercase tracking-[0.3em] italic">// Terminal</h4>
          <ul class="space-y-4">
            <li><NuxtLink to="/faq" class="footer-link">FAQ</NuxtLink></li>
            <li><NuxtLink to="/technologien" class="footer-link">Stack</NuxtLink></li>
            <li><NuxtLink to="/kostenrechner" class="footer-link">Rechner</NuxtLink></li>
            <li><NuxtLink to="/ueber-mich" class="footer-link">Profil</NuxtLink></li>
          </ul>
        </div>
      </div>

      <div class="bg-gray-800/50 p-10 rounded-[3rem] border border-gray-700/50 space-y-8 relative overflow-hidden">
        <div class="absolute top-0 right-0 p-6 opacity-10">
          <LucideSend class="w-24 h-24" />
        </div>
        <div>
          <h4 class="text-[10px] font-black text-red-600 uppercase tracking-[0.3em] mb-4 italic">// Schnittstelle</h4>
          <div class="space-y-4">
            <a href="mailto:info@velwebsolutions.de" class="text-xl font-black text-white hover:text-red-600 transition-colors block italic tracking-tighter uppercase whitespace-nowrap">
              info@velwebsolutions.de
            </a>
            <p class="text-gray-400 font-mono text-xs tracking-tighter italic">
              Status: Available <br>
              Response: &lt; 24h
            </p>
          </div>
        </div>
        <NuxtLink to="/kontakt" class="block w-full py-5 bg-white text-gray-900 text-center rounded-2xl font-black uppercase tracking-widest hover:bg-red-600 hover:text-white transition-all italic shadow-xl">
          Start_Project.exe
        </NuxtLink>
      </div>
    </div>

    <div class="max-w-7xl mx-auto px-6 mt-20">
      <details class="group border-t border-gray-800">
        <summary class="list-none py-6 cursor-pointer flex items-center justify-between text-gray-500 hover:text-red-600 transition-colors">
          <span class="text-[10px] font-black uppercase tracking-[0.3em] italic">System Registry // Local SEO Units</span>
          <LucideChevronDown class="w-5 h-5 transition-transform group-open:rotate-180" />
        </summary>
        <div class="pb-10">
          <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-x-8 gap-y-4">
            <NuxtLink
              v-for="(data, slug) in cityContent"
              :key="slug"
              :to="'/vue-js-entwicklung-' + slug"
              class="text-[10px] text-gray-600 hover:text-white font-bold uppercase tracking-widest italic transition-colors"
            >
              ./{{ data.cityName }}
            </NuxtLink>
          </div>
        </div>
      </details>
    </div>

    <div class="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-6">
      <p class="text-[10px] font-black text-gray-600 uppercase tracking-[0.2em] italic text-center md:text-left">
        © {{ currentYear }} Tobias Kubina // VelWebSolutions <br class="md:hidden">
        <span class="text-red-900/50 ml-2 hidden md:inline">|</span>
        Fullstack Software Engineering
      </p>
      <div class="flex gap-8 items-center">
        <button
          @click="isBannerVisible = true"
          class="text-[10px] font-black text-gray-500 hover:text-red-600 uppercase tracking-[0.2em] italic transition-colors outline-none"
        >
          Privacy_Settings
        </button>
        <NuxtLink to="/impressum" class="text-[10px] font-black text-gray-500 hover:text-white uppercase tracking-[0.2em] italic">Impressum</NuxtLink>
        <NuxtLink to="/datenschutz" class="text-[10px] font-black text-gray-500 hover:text-white uppercase tracking-[0.2em] italic">Datenschutz</NuxtLink>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { cityContent } from '~/data/cityContent'

const currentYear = new Date().getFullYear()

// Zugriff auf den globalen State des Cookie-Banners
const isBannerVisible = useState('cookie_banner_visible')

const scrollToTop = () => {
  if (process.client) {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
</script>

<style scoped>
.footer-link {
  @apply text-gray-400 hover:text-white transition-colors font-bold uppercase italic text-sm tracking-widest;
}

details summary::-webkit-details-marker {
  display: none;
}
</style>