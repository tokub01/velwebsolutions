<template>
  <div class="fixed top-0 left-0 w-full z-[1000]">
    <header class="relative z-[2000] bg-white/95 backdrop-blur-xl border-b border-gray-100">
      <div class="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-10 py-3 sm:py-4">

        <NuxtLink to="/" class="flex items-center gap-2 group shrink-0">
          <div class="bg-red-600 p-2 rounded-xl group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-red-200">
            <LucideLaptop class="h-5 w-5 sm:h-6 text-white" />
          </div>
          <div class="flex flex-col">
             <span class="text-sm sm:text-lg font-black text-gray-900 uppercase tracking-tighter italic leading-none">
               VelWeb<span class="text-red-600">Solutions</span>
             </span>
             <span class="text-[8px] font-bold text-gray-400 uppercase tracking-[0.2em] leading-none mt-1 hidden xs:block">Tobias Kubina</span>
          </div>
        </NuxtLink>

        <nav class="hidden lg:flex items-center space-x-8">
          <NuxtLink
            v-for="link in mainLinks"
            :key="link.to"
            :to="link.to"
            class="nav-link text-[11px] font-black uppercase tracking-widest italic text-gray-500 hover:text-red-600 transition-all relative py-2"
            active-class="text-red-600 is-active"
          >
            {{ link.label }}
          </NuxtLink>

          <div class="relative py-2" @mouseenter="showDropdown = true" @mouseleave="showDropdown = false">
            <button class="flex items-center gap-2 text-[11px] font-black uppercase tracking-widest italic text-gray-500 hover:text-red-600 transition-all">
              Info <LucideChevronDown class="h-3.5 w-3.5 transition-transform" :class="{ 'rotate-180': showDropdown }" />
            </button>
            <transition name="dropdown-slide">
              <div v-if="showDropdown" class="absolute top-full right-0 mt-1 w-56 bg-white rounded-3xl shadow-3xl border border-gray-100 py-4 z-[3000]">
                <NuxtLink
                  v-for="sub in dropdownLinks"
                  :key="sub.to"
                  :to="sub.to"
                  class="block px-8 py-3 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:bg-red-50 hover:text-red-600 transition-all italic border-l-4 border-transparent hover:border-red-600"
                >
                  {{ sub.label }}
                </NuxtLink>
              </div>
            </transition>
          </div>
        </nav>

        <div class="flex items-center gap-3">
          <NuxtLink
            to="/kontakt"
            class="relative flex items-center gap-2 bg-gray-900 text-white px-4 py-2.5 sm:px-6 rounded-xl font-black text-[10px] uppercase tracking-widest hover:bg-red-600 transition-all shadow-lg italic"
          >
            <span class="hidden sm:inline">ANFRAGEN</span>
            <LucideSend class="h-3.5 w-3.5 text-red-500" />
          </NuxtLink>

          <button
            @click="mobileMenuOpen = !mobileMenuOpen"
            class="lg:hidden p-3 bg-gray-100 rounded-xl text-gray-900 active:scale-95 transition-transform"
            aria-label="Menü öffnen"
          >
            <LucideMenu v-if="!mobileMenuOpen" class="h-6 w-6" />
            <LucideX v-else class="h-6 w-6 text-red-600" />
          </button>
        </div>
      </div>
    </header>

    <div class="relative z-[10] bg-gray-50/80 backdrop-blur-md border-b border-gray-100 py-2 px-4 sm:px-10">
      <div class="max-w-7xl mx-auto">
        <nav aria-label="Breadcrumb">
          <ol class="flex items-center space-x-2 text-[9px] font-bold uppercase tracking-widest italic text-gray-400">
            <li class="flex items-center gap-1.5"><LucideHome class="w-3 h-3 text-red-600" /> <span class="hidden xs:inline">START</span></li>
            <li>/</li>
            <li class="text-gray-900 truncate">{{ currentPathName }}</li>
          </ol>
        </nav>
      </div>
    </div>

    <transition name="mobile-menu">
      <div v-if="mobileMenuOpen" class="lg:hidden fixed inset-0 top-[60px] bg-white z-[4000] overflow-y-auto">
        <div class="p-6 flex flex-col space-y-4">
          <p class="text-[10px] font-black text-red-600 uppercase tracking-[0.3em] mb-2 px-4">Navigation</p>

          <NuxtLink
            v-for="link in allLinks"
            :key="link.to"
            :to="link.to"
            @click="mobileMenuOpen = false"
            class="w-full px-6 py-5 rounded-2xl flex items-center justify-between bg-gray-50 border border-gray-100 active:bg-red-50 active:border-red-200 transition-all group"
          >
            <div class="flex items-center gap-4">
              <component :is="iconMap[link.icon]" class="h-5 w-5 text-gray-400 group-active:text-red-600" />
              <span class="text-lg font-black uppercase tracking-tighter italic text-gray-800 group-active:text-red-600">
                {{ link.label }}
              </span>
            </div>
            <LucideChevronDown class="h-5 w-5 -rotate-90 text-gray-300" />
          </NuxtLink>

          <div class="pt-10 px-6 border-t border-gray-100 mt-auto">
            <div class="flex flex-col gap-1">
              <span class="text-[10px] font-bold text-gray-400 uppercase tracking-widest">Verfügbarkeit</span>
              <span class="text-sm font-black italic uppercase text-gray-900 flex items-center gap-2">
                <span class="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span> Remote verfügbar
              </span>
            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import {
  Laptop, ChevronDown, Menu, X, Home, Send,
  Code, Zap, User, HelpCircle
} from 'lucide-vue-next'

const route = useRoute()
const mobileMenuOpen = ref(false)
const showDropdown = ref(false)

// Icons
const LucideLaptop = Laptop
const LucideChevronDown = ChevronDown
const LucideMenu = Menu
const LucideX = X
const LucideHome = Home
const LucideSend = Send

const iconMap = {
  LucideCode: Code,
  LucideZap: Zap,
  LucideUser: User,
  LucideHelpCircle: HelpCircle
}

const mainLinks = [
  { to: '/leistungen', label: 'Leistungen', icon: 'LucideCode' },
  { to: '/ueber-mich', label: 'Über mich', icon: 'LucideUser' }
]

const dropdownLinks = [
  { to: '/technologien', label: 'Technologien', icon: 'LucideZap' },
  { to: '/faq', label: 'FAQ', icon: 'LucideHelpCircle' }
]

const allLinks = [...mainLinks, ...dropdownLinks]

const currentPathName = computed(() => {
  const p = route.path
  if (p.includes('leistungen')) return 'Leistungen'
  if (p.includes('ueber-mich')) return 'Über mich'
  if (p.includes('kontakt')) return 'Kontakt'
  if (p.includes('faq')) return 'Hilfe'
  return 'Willkommen'
})

const isDropdownRouteActive = computed(() => dropdownLinks.some(l => route.path.startsWith(l.to)))
</script>

<style scoped>
/* Mobile Menu Animation */
.mobile-menu-enter-active, .mobile-menu-leave-active {
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.mobile-menu-enter-from { opacity: 0; transform: translateY(-10px); }
.mobile-menu-leave-to { opacity: 0; transform: translateY(10px); }

/* Desktop Dropdown Animation */
.dropdown-slide-enter-active, .dropdown-slide-leave-active { transition: all 0.2s ease-out; }
.dropdown-slide-enter-from, .dropdown-slide-leave-to { opacity: 0; transform: translateY(8px); }

.nav-link::after {
  content: ''; position: absolute; bottom: -2px; left: 0; width: 0; height: 3px;
  background-color: #dc2626; transition: width 0.3s ease;
}
.nav-link:hover::after, .nav-link.is-active::after { width: 100%; }

.shadow-3xl { box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.15); }

@media (max-width: 400px) {
  .xs\:block { display: none; }
}
</style>