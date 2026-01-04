<template>
  <div class="fixed top-0 left-0 w-full z-[100]">
    <header class="relative z-[110] bg-white/95 backdrop-blur-xl border-b border-gray-100 transition-all duration-500">
      <div class="max-w-7xl mx-auto flex justify-between items-center px-4 md:px-10 py-3 md:py-4">

        <NuxtLink to="/" class="flex items-center space-x-2 md:space-x-3 group shrink-0">
          <div class="bg-red-600 p-1.5 md:p-2 rounded-xl group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-red-200">
            <LucideLaptop class="h-5 w-5 md:h-6 md:w-6 text-white" />
          </div>
          <span class="text-base sm:text-lg md:text-2xl font-black text-gray-900 uppercase tracking-tighter italic group-hover:text-red-600 transition-colors leading-none">
            VelWeb<span class="text-red-600 group-hover:text-gray-900">Solutions</span>
          </span>
        </NuxtLink>

        <nav class="hidden lg:flex items-center space-x-8 xl:space-x-10">
          <NuxtLink
            v-for="link in mainLinks"
            :key="link.to"
            :to="link.to"
            class="nav-link text-[11px] font-black uppercase tracking-[0.2em] italic text-gray-500 hover:text-red-600 transition-all relative py-2"
            active-class="text-red-600 is-active"
          >
            {{ link.label }}
          </NuxtLink>

          <div
            class="relative py-2"
            @mouseenter="showDropdown = true"
            @mouseleave="showDropdown = false"
            ref="dropdownContainer"
          >
            <button
              @click.stop="toggleDropdown"
              class="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] italic text-gray-500 hover:text-red-600 transition-all focus:outline-none"
              :class="{ 'text-red-600': isDropdownRouteActive || showDropdown }"
            >
              Terminal
              <LucideChevronDown class="h-4 w-4 transition-transform duration-300" :class="{ 'rotate-180': showDropdown }" />
            </button>

            <transition name="dropdown-slide">
              <div v-if="showDropdown" class="absolute top-full right-0 mt-1 w-56 bg-white rounded-3xl shadow-3xl border border-gray-100 py-4 overflow-hidden z-[120]">
                <NuxtLink
                  v-for="sub in dropdownLinks"
                  :key="sub.to"
                  :to="sub.to"
                  @click="showDropdown = false"
                  class="block px-8 py-3 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:bg-red-50 hover:text-red-600 transition-all italic border-l-4 border-transparent hover:border-red-600"
                  active-class="text-red-600 bg-red-50 border-red-600"
                >
                  {{ sub.label }}
                </NuxtLink>
              </div>
            </transition>
          </div>
        </nav>

        <div class="flex items-center gap-2 sm:gap-4 md:gap-6 shrink-0">
          <NuxtLink
            to="/kontakt"
            class="cta-button ml-1 sm:ml-0 relative group/cta overflow-hidden bg-gray-900 text-white px-3 py-2.5 sm:px-5 sm:py-3 md:px-8 md:py-4 rounded-xl md:rounded-2xl font-black text-[10px] md:text-xs uppercase tracking-[0.1em] md:tracking-[0.2em] hover:bg-red-600 transition-all shadow-xl italic flex items-center gap-2 active:scale-95"
          >
            <span class="relative flex h-1.5 w-1.5 md:h-2 md:w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-1.5 w-1.5 md:h-2 md:w-2 bg-red-500"></span>
            </span>

            <span class="hidden sm:inline">Anfrage.exe</span>
            <span class="sm:hidden">Start.exe</span>

            <LucideTerminal class="w-3 h-3 text-red-500 group-hover/cta:text-white transition-colors" />

            <div class="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/cta:animate-[shimmer_2s_infinite]"></div>
          </NuxtLink>

          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="lg:hidden p-2.5 sm:p-3 bg-gray-50 rounded-xl text-gray-900 focus:outline-none active:scale-90 transition-all border border-gray-100"
          >
            <LucideMenu v-if="!mobileMenuOpen" class="h-5 w-5" />
            <LucideX v-else class="h-5 w-5 text-red-600" />
          </button>
        </div>
      </div>
    </header>

    <div class="relative z-[100] bg-gray-50/80 backdrop-blur-md border-b border-gray-100 py-2 px-4 md:px-6">
      <div class="max-w-7xl mx-auto flex items-center">
        <nav aria-label="Breadcrumb">
          <ol class="flex items-center space-x-2 text-[9px] font-black uppercase tracking-[0.2em] italic">
            <li>
              <NuxtLink to="/" class="text-red-600 flex items-center gap-1 opacity-70 hover:opacity-100 transition-opacity">
                <LucideHome class="w-3 h-3" /> ROOT
              </NuxtLink>
            </li>
            <li class="text-gray-300">/</li>
            <li class="text-gray-900 flex items-center gap-1 truncate max-w-[140px] sm:max-w-none">
              <LucideTerminal class="w-3 h-3 text-red-600" /> {{ currentPathName }}
            </li>
          </ol>
        </nav>
      </div>
    </div>

    <transition name="mobile-fade">
      <div v-if="mobileMenuOpen" class="lg:hidden fixed inset-x-0 top-[57px] sm:top-[65px] md:top-[73px] bg-white border-t-4 border-red-600 shadow-2xl h-[calc(100vh-57px)] overflow-y-auto z-[105]">
        <div class="p-6 pb-24 space-y-2">
          <p class="text-[10px] font-black text-gray-400 uppercase tracking-[0.3em] mb-4 ml-4 italic">// System_Navigation</p>

          <NuxtLink
            v-for="link in allLinks"
            :key="link.to"
            :to="link.to"
            @click="mobileMenuOpen = false"
            class="px-6 py-4 rounded-2xl text-xl font-black uppercase tracking-tighter italic flex items-center justify-between transition-all hover:bg-gray-50 active:bg-red-50"
            active-class="bg-red-600 text-white shadow-lg shadow-red-200"
          >
            {{ link.label }}
            <component :is="link.icon" class="h-5 w-5 opacity-30" />
          </NuxtLink>

          <NuxtLink
            to="/kontakt"
            @click="mobileMenuOpen = false"
            class="mt-8 px-6 py-8 rounded-3xl bg-gray-900 text-white text-2xl font-black uppercase italic flex items-center justify-between shadow-2xl active:scale-95 transition-transform"
          >
            <div class="flex flex-col">
              <span class="text-[10px] text-red-500 tracking-[0.3em] mb-1">INITIALIZE</span>
              <span>PROJEKT START</span>
            </div>
            <LucideZap class="h-8 w-8 text-red-500 animate-pulse" />
          </NuxtLink>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import {
  LucideLaptop, LucideChevronDown, LucideMenu, LucideX,
  LucideHome, LucideTerminal, LucideCode, LucideDollarSign,
  LucideLayers, LucideBookOpen, LucideAward, LucideZap,
  LucideUser, LucideCalculator, LucideHelpCircle
} from 'lucide-vue-next'

const route = useRoute()
const mobileMenuOpen = ref(false)
const showDropdown = ref(false)
const dropdownContainer = ref(null)

const toggleDropdown = () => { showDropdown.value = !showDropdown.value }

if (process.client) {
  window.addEventListener('click', (e) => {
    if (dropdownContainer.value && !dropdownContainer.value.contains(e.target)) {
      showDropdown.value = false
    }
  })
}

watch(mobileMenuOpen, (val) => {
  if (process.client) {
    document.body.style.overflow = val ? 'hidden' : 'auto'
  }
})

const mainLinks = [
  { to: '/leistungen', label: 'Leistungen', icon: LucideCode },
  { to: '/preise', label: 'Preise', icon: LucideDollarSign },
  { to: '/projekte', label: 'Projekte', icon: LucideLayers },
  { to: '/blog', label: 'Blog', icon: LucideBookOpen }
]

const dropdownLinks = [
  { to: '/erfolgsgeschichten', label: 'Case Studies', icon: LucideAward },
  { to: '/technologien', label: 'Stack', icon: LucideZap },
  { to: '/ueber-mich', label: 'Profil', icon: LucideUser },
  { to: '/kostenrechner', label: 'Rechner', icon: LucideCalculator },
  { to: '/faq', label: 'FAQ', icon: LucideHelpCircle }
]

const allLinks = [...mainLinks, ...dropdownLinks]

const currentPathName = computed(() => {
  const path = route.path
  if (path.includes('kontakt')) return 'Schnittstelle_Kontakt'
  if (path.includes('preise')) return 'Investitions_Modelle'
  if (path.includes('faq')) return 'Knowledge_Base'
  if (path.includes('leistungen')) return 'Service_Engineering'
  if (path.includes('projekte')) return 'Referenz_Protokolle'
  if (path.includes('blog')) return 'Dev_Journal'
  if (path.includes('erfolgsgeschichten')) return 'Case_Studies'
  if (path.includes('technologien')) return 'System_Stack'
  if (path.includes('ueber-mich')) return 'Developer_Profile'
  if (path.includes('kostenrechner')) return 'Budget_Calculator'
  return 'System_Core'
})

const isDropdownRouteActive = computed(() => dropdownLinks.some(link => route.path.startsWith(link.to)))
</script>

<style scoped>
/* AGGRESSIVE MECHANICAL WOBBLE - Kurze Frequenz, langes Intervall (12s) */
@keyframes aggressive-wobble {
  0%, 92%, 100% { transform: rotate(0deg) scale(1); }
  93% { transform: rotate(-4deg) scale(1.08); }
  94% { transform: rotate(4deg) scale(1.08); }
  95% { transform: rotate(-4deg) scale(1.08); }
  96% { transform: rotate(4deg) scale(1.08); }
  97% { transform: rotate(0deg) scale(1); }
}

/* RADAR SCANNER GLOW - Sanftes aber stetiges Pulsieren */
@keyframes radar-glow {
  0% { box-shadow: 0 0 0 0 rgba(220, 38, 38, 0.5); }
  70% { box-shadow: 0 0 20px 10px rgba(220, 38, 38, 0); }
  100% { box-shadow: 0 0 0 0 rgba(220, 38, 38, 0); }
}

/* SHIMMER EFFECT */
@keyframes shimmer {
  0% { transform: translateX(-150%); opacity: 0; }
  50% { opacity: 1; }
  100% { transform: translateX(150%); opacity: 0; }
}

.cta-button {
  /* Kombiniert Wobble und Radar-Glow */
  animation:
    aggressive-wobble 12s infinite ease-in-out,
    radar-glow 3s infinite ease-in-out;
  transition: all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.cta-button:hover {
  animation: none;
  transform: scale(1.05) rotate(-1deg);
  background-color: #dc2626;
  box-shadow: 0 20px 40px -10px rgba(220, 38, 38, 0.4);
}

/* NAV LINKS */
.nav-link::after {
  content: ''; position: absolute; bottom: -4px; left: 0;
  width: 0; height: 3px; background-color: #dc2626;
  transition: width 0.3s cubic-bezier(0.19, 1, 0.22, 1);
}
.nav-link:hover::after, .nav-link.is-active::after { width: 100%; }

/* TRANSITIONS */
.dropdown-slide-enter-active, .dropdown-slide-leave-active { transition: all 0.3s ease; }
.dropdown-slide-enter-from, .dropdown-slide-leave-to { opacity: 0; transform: translateY(10px); }

.mobile-fade-enter-active, .mobile-fade-leave-active { transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1); }
.mobile-fade-enter-from { opacity: 0; transform: translateY(-20px); }
.mobile-fade-leave-to { opacity: 0; transform: translateY(-20px); }

.shadow-3xl { box-shadow: 0 30px 60px -15px rgba(0, 0, 0, 0.15); }
</style>