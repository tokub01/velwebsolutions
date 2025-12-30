<template>
  <div class="font-sans text-gray-900 bg-white selection:bg-red-100 selection:text-red-600 antialiased">

    <header class="relative min-h-[80vh] flex items-center bg-gradient-to-br from-red-700 via-red-600 to-red-500 text-white overflow-hidden mt-[72px] lg:mt-[81px]">
      <div class="absolute inset-0 z-0 pointer-events-none opacity-15">
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,white_1px,transparent_0)] bg-[size:32px_32px] md:bg-[size:48px_48px]"></div>
        <div class="absolute -top-1/4 -right-1/4 w-[600px] h-[600px] bg-white/20 blur-[120px] rounded-full"></div>
      </div>

      <div class="relative z-10 w-full max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-12 py-16 md:py-24 lg:py-32">
        <div class="flex flex-col lg:grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">

          <div class="w-full lg:col-span-8 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div class="inline-flex items-center gap-2 px-4 py-2 mb-6 md:mb-10 rounded-full bg-white text-red-600 shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <span class="relative flex h-2 w-2">
                <span class="animate-ping absolute h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
              </span>
              <span class="text-[9px] md:text-[11px] font-black uppercase tracking-[0.25em] italic">
                Scientific_Review_Cycle: 2025.Q1
              </span>
            </div>

            <h1 class="text-[12vw] sm:text-[10vw] lg:text-[8vw] xl:text-[9.5vw] font-[1000] leading-[0.8] tracking-[-0.05em] uppercase italic mb-8 md:mb-12">
              Engineering <br/>
              <span class="text-white/90 underline decoration-white/20 decoration-8 underline-offset-[10px]">Insights.</span>
            </h1>

            <div class="max-w-2xl lg:max-w-3xl lg:border-l-4 lg:border-white/30 lg:pl-10">
              <p class="text-lg sm:text-xl md:text-2xl lg:text-3xl text-red-50 leading-relaxed font-semibold italic opacity-95">
                Kein Marketing-Sprech. Nur harte Fakten zu <span class="text-white">skalierbaren Systemen</span>, algorithmischer Effizienz und der mathematischen Präzision moderner Web-Architekturen.
              </p>
            </div>
          </div>

          <div class="hidden lg:flex lg:col-span-4 justify-center relative w-full h-full min-h-[400px]">
            <div class="absolute inset-0 flex items-center justify-center">
              <div class="w-full max-w-[380px] bg-white/10 backdrop-blur-2xl border border-white/20 p-8 rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] rotate-6 hover:rotate-0 transition-all duration-1000 group">
                <div class="flex gap-2 mb-6">
                  <div class="w-2.5 h-2.5 rounded-full bg-red-400/50"></div>
                  <div class="w-2.5 h-2.5 rounded-full bg-white/20"></div>
                </div>
                <div class="font-mono text-[11px] leading-relaxed text-red-100/90">
                  <p class="text-white font-bold">// Quality_Gate_Status</p>
                  <p class="mt-2">> Testing Big-O Complexity...</p>
                  <p class="text-white">> [PASS] O(log n) efficiency.</p>
                  <p class="mt-2 text-white font-black underline uppercase">Evidence Based Dev</p>
                </div>
                <div class="absolute -top-12 -right-8 bg-white text-red-600 w-32 h-32 rounded-full flex flex-col items-center justify-center shadow-2xl -rotate-12 border-4 border-red-50/50 group-hover:rotate-0 transition-transform duration-700">
                  <span class="text-4xl font-black italic">{{ blogPosts?.length || 0 }}</span>
                  <span class="text-[9px] font-black uppercase tracking-widest mt-1">Reports</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <nav class="sticky top-[72px] lg:top-[81px] z-30 bg-white/90 backdrop-blur-xl border-b border-gray-100 py-6 md:py-8 px-4 sm:px-6">
      <div class="max-w-7xl mx-auto flex flex-wrap justify-center gap-3">
        <button
          v-for="cat in [
            'Alle Berichte',
            'Laravel Deep-Dive',
            'Vue.js Patterns',
            'System-Architektur',
            'Wissenschaft & Code'
          ]"
          :key="cat"
          @click="selectedCategory = cat"
          :class="['px-5 md:px-8 py-2.5 md:py-3 rounded-full text-[9px] md:text-[10px] font-black uppercase tracking-widest transition-all italic border-2',
            selectedCategory === cat
              ? 'bg-red-600 border-red-600 text-white shadow-lg scale-105'
              : 'bg-white border-gray-100 text-gray-500 hover:border-red-600 hover:text-red-600'
          ]"
        >
          {{ cat }}
        </button>
      </div>
    </nav>

    <section class="py-16 md:py-24 px-4 sm:px-6 md:px-12 bg-white">
      <div class="max-w-[1800px] mx-auto">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6 md:gap-10">
          <article
            v-for="post in filteredPosts"
            :key="post.id"
            @click="navigateTo(`/blog/${post.slug}`)"
            class="group cursor-pointer flex flex-col bg-gray-50 rounded-[2.5rem] md:rounded-[3.5rem] border-2 border-transparent hover:border-red-600 hover:bg-white transition-all duration-500 hover:shadow-2xl h-full overflow-hidden"
          >
            <div class="relative h-60 md:h-72 w-full overflow-hidden bg-gray-200">
              <img
                :src="post.image || 'https://images.unsplash.com/photo-1518433278988-d71c1e90e7df?q=80&w=2570'"
                :alt="post.title"
                class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div class="absolute top-6 left-6">
                <span class="px-4 py-2 bg-red-600 text-white text-[8px] md:text-[10px] font-black uppercase tracking-widest italic rounded-lg shadow-xl">
                  {{ post.category }}
                </span>
              </div>
            </div>

            <div class="p-8 md:p-10 flex flex-col flex-grow">
              <div class="flex items-center gap-3 text-[9px] font-black text-gray-400 uppercase tracking-[0.2em] italic mb-6">
                <span>{{ formatDate(post.publishedAt) }}</span>
                <span class="w-1.5 h-1.5 bg-red-600 rounded-full"></span>
                <span class="text-gray-900">{{ post.readTime }} DEEP_READ</span>
              </div>
              <h2 class="text-2xl md:text-3xl font-black text-gray-900 uppercase italic tracking-tighter leading-[0.95] mb-6 group-hover:text-red-600 transition-colors">
                {{ post.title }}
              </h2>
              <p class="text-gray-500 text-sm md:text-base font-medium italic leading-relaxed line-clamp-3 mb-10">
                {{ post.excerpt }}
              </p>
              <div class="mt-auto pt-8 border-t border-gray-100 flex justify-between items-center">
                <span class="text-[9px] md:text-[10px] font-black uppercase tracking-widest italic text-gray-900 group-hover:text-red-600 transition-colors">
                  VIEW_TECHNICAL_PROOF.pdf <span class="ml-2 inline-block transition-transform group-hover:translate-x-2">→</span>
                </span>
                <LucideArrowUpRight class="w-5 h-5 text-gray-300 group-hover:text-red-600 transition-colors" />
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>

    <section class="py-24 px-4 sm:px-6 bg-white text-center">
      <div class="max-w-5xl mx-auto bg-gray-900 p-10 md:p-24 rounded-[3rem] md:rounded-[5rem] text-white shadow-3xl relative overflow-hidden">
        <div class="absolute inset-0 opacity-5 bg-[size:30px_30px] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)]"></div>
        <div class="relative z-10">
          <h3 class="text-4xl md:text-7xl font-black mb-8 italic uppercase tracking-tighter leading-none">Architektur <br/><span class="text-red-600 text-5xl md:text-9xl">validieren.</span></h3>
          <p class="text-lg md:text-xl text-gray-400 mb-12 font-medium italic max-w-2xl mx-auto">
            Hinterlassen Sie keine technischen Schulden. Ich analysiere Ihre bestehende Codebase nach wissenschaftlichen Metriken und schlage messbare Optimierungen vor.
          </p>
          <NuxtLink to="/kontakt" class="inline-block bg-red-600 text-white px-10 md:px-16 py-5 md:py-8 rounded-[2rem] font-black text-xl md:text-2xl hover:bg-white hover:text-red-600 transition-all shadow-2xl uppercase italic transform hover:scale-105 tracking-widest">
            Audit_Request.exe
          </NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
import { blogPosts } from '~/data/blogPosts'
import { LucideArrowUpRight } from 'lucide-vue-next'

definePageMeta({ layout: 'guest' })

// State & Filtering Logic
const selectedCategory = ref('Alle')

const categories = computed(() => {
  if (!blogPosts || !Array.isArray(blogPosts)) return ['Alle']
  return ['Alle', ...new Set(blogPosts.map(p => p.category))]
})

const filteredPosts = computed(() => {
  if (!blogPosts || !Array.isArray(blogPosts)) return []
  let posts = selectedCategory.value === 'Alle'
    ? blogPosts
    : blogPosts.filter(p => p.category === selectedCategory.value)
  return [...posts].sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
})

const formatDate = (date) => {
  if (!date) return ''
  return new Date(date).toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' })
}

useHead({
  title: 'Knowledge Transfer | Engineering Blog',
  meta: [{ name: 'description', content: 'Technisch fundierte Berichte über Laravel, Vue.js und High-End Software-Engineering.' }]
})
</script>

<style scoped>
.shadow-3xl { box-shadow: 0 50px 100px -20px rgba(0, 0, 0, 0.45); }
img { animation: reveal 0.8s cubic-bezier(0.2, 1, 0.3, 1) forwards; }
@keyframes reveal {
  from { opacity: 0; transform: scale(1.05); }
  to { opacity: 1; transform: scale(1); }
}
h1 { text-shadow: 0 10px 30px rgba(0,0,0,0.1); }
</style>