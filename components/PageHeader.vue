<template>
  <div class="fixed top-0 left-0 w-full z-[100]">
    <header class="bg-white/95 backdrop-blur-xl border-b border-gray-100 transition-all duration-500">
      <div class="max-w-7xl mx-auto flex justify-between items-center px-6 md:px-10 py-4">

        <NuxtLink to="/" class="flex items-center space-x-3 group">
          <div class="bg-red-600 p-2 rounded-xl group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-red-200">
            <LucideLaptop class="h-6 w-6 text-white" />
          </div>
          <span class="text-xl md:text-2xl font-black text-gray-900 uppercase tracking-tighter italic group-hover:text-red-600 transition-colors">
            VelWeb<span class="text-red-600 group-hover:text-gray-900">Solutions</span>
          </span>
        </NuxtLink>

        <nav class="hidden lg:flex items-center space-x-10">
          <NuxtLink
            v-for="link in mainLinks"
            :key="link.to"
            :to="link.to"
            class="nav-link text-[11px] font-black uppercase tracking-[0.2em] italic text-gray-500 hover:text-red-600 transition-all relative py-2"
            active-class="text-red-600 is-active"
          >
            {{ link.label }}
          </NuxtLink>

          <div class="relative py-2" @mouseenter="showDropdown = true" @mouseleave="showDropdown = false">
            <button
              class="flex items-center gap-2 text-[11px] font-black uppercase tracking-[0.2em] italic text-gray-500 hover:text-red-600 transition-all focus:outline-none"
              :class="{ 'text-red-600': isDropdownRouteActive }"
            >
              Terminal <LucideChevronDown class="h-4 w-4 transition-transform" :class="{ 'rotate-180': showDropdown }" />
            </button>
            <transition name="dropdown-slide">
              <div v-if="showDropdown" class="absolute top-full right-0 mt-1 w-56 bg-white rounded-3xl shadow-3xl border border-gray-100 py-4 overflow-hidden">
                <NuxtLink
                  v-for="sub in dropdownLinks"
                  :key="sub.to"
                  :to="sub.to"
                  class="block px-8 py-3 text-[10px] font-black uppercase tracking-widest text-gray-400 hover:bg-red-50 hover:text-red-600 transition-all italic border-l-4 border-transparent hover:border-red-600"
                  active-class="text-red-600 bg-red-50 border-red-600"
                >
                  {{ sub.label }}
                </NuxtLink>
              </div>
            </transition>
          </div>
        </nav>

        <div class="hidden lg:block">
          <NuxtLink to="/kontakt" class="bg-gray-900 text-white px-8 py-4 rounded-2xl font-black text-xs uppercase tracking-[0.2em] hover:bg-red-600 transition-all shadow-xl hover:-rotate-1 italic">
            Anfrage.exe
          </NuxtLink>
        </div>

        <button @click="mobileMenuOpen = !mobileMenuOpen" class="lg:hidden p-3 bg-gray-50 rounded-2xl text-gray-900">
          <LucideMenu v-if="!mobileMenuOpen" class="h-6 w-6" />
          <LucideX v-else class="h-6 w-6 text-red-600" />
        </button>
      </div>
    </header>

    <div class="bg-gray-50/80 backdrop-blur-md border-b border-gray-100 py-2 px-6">
      <div class="max-w-7xl mx-auto flex items-center justify-between">
        <nav aria-label="Breadcrumb">
          <ol class="flex items-center space-x-2 text-[9px] font-black uppercase tracking-[0.2em] italic">
            <li>
              <NuxtLink to="/" class="text-red-600 flex items-center gap-1 opacity-70 hover:opacity-100">
                <LucideHome class="w-3 h-3" /> ROOT
              </NuxtLink>
            </li>
            <li class="text-gray-300">/</li>
            <li class="text-gray-900 flex items-center gap-1">
              <LucideTerminal class="w-3 h-3 text-red-600" /> {{ currentPathName }}
            </li>
          </ol>
        </nav>
      </div>
    </div>

    <transition name="mobile-fade">
      <div v-if="mobileMenuOpen" class="lg:hidden absolute inset-x-0 top-full bg-white border-t-4 border-red-600 shadow-2xl h-[calc(100vh-80px)] overflow-y-auto p-8">
        <nav class="flex flex-col space-y-2">
          <NuxtLink
            v-for="link in allLinks"
            :key="link.to"
            :to="link.to"
            @click="mobileMenuOpen = false"
            class="px-6 py-5 rounded-2xl text-2xl font-black uppercase tracking-tighter italic flex items-center justify-between transition-colors"
            active-class="bg-red-600 text-white"
          >
            {{ link.label }}
            <component :is="iconMap[link.icon]" class="h-6 w-6 opacity-20" />
          </NuxtLink>
        </nav>
      </div>
    </transition>
  </div>
</template>

<script setup>
// 1. Importiere die benötigten Icons einzeln
import {
  Code, DollarSign, Layers, BookOpen,
  Award, Zap, User, Calculator, HelpCircle
} from 'lucide-vue-next'

const route = useRoute()
const mobileMenuOpen = ref(false)
const showDropdown = ref(false)

// 2. Erstelle ein Mapping-Objekt, damit Vue die Strings den Komponenten zuordnen kann
const iconMap = {
  LucideCode: Code,
  LucideDollarSign: DollarSign,
  LucideLayers: Layers,
  LucideBookOpen: BookOpen,
  LucideAward: Award,
  LucideZap: Zap,
  LucideUser: User,
  LucideCalculator: Calculator,
  LucideHelpCircle: HelpCircle
}

const mainLinks = [
  { to: '/leistungen', label: 'Leistungen', icon: 'LucideCode' },
  { to: '/preise', label: 'Preise', icon: 'LucideDollarSign' },
  { to: '/projekte', label: 'Projekte', icon: 'LucideLayers' },
  { to: '/blog', label: 'Blog', icon: 'LucideBookOpen' }
]

const dropdownLinks = [
  { to: '/erfolgsgeschichten', label: 'Case Studies', icon: 'LucideAward' },
  { to: '/technologien', label: 'Stack', icon: 'LucideZap' },
  { to: '/ueber-mich', label: 'Profil', icon: 'LucideUser' },
  { to: '/kostenrechner', label: 'Rechner', icon: 'LucideCalculator' },
  { to: '/faq', label: 'FAQ', icon: 'LucideHelpCircle' }
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
  return 'System_Core'
})

const isDropdownRouteActive = computed(() => {
  return dropdownLinks.some(link => route.path.startsWith(link.to))
})
</script>

<style scoped>
.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 3px;
  background-color: #dc2626;
  transition: width 0.3s cubic-bezier(0.19, 1, 0.22, 1);
}
.nav-link:hover::after, .nav-link.is-active::after { width: 100%; }
.dropdown-slide-enter-active, .dropdown-slide-leave-active { transition: all 0.3s ease; }
.dropdown-slide-enter-from, .dropdown-slide-leave-to { opacity: 0; transform: translateY(10px); }
.mobile-fade-enter-active, .mobile-fade-leave-active { transition: all 0.4s ease; }
.mobile-fade-enter-from, .mobile-fade-leave-to { opacity: 0; transform: translateX(100%); }
.shadow-3xl { box-shadow: 0 30px 60px -15px rgba(0, 0, 0, 0.15); }
</style>