<template>
  <div class="font-sans text-gray-900 bg-white selection:bg-red-100 selection:text-red-600 antialiased">
    <header class="relative min-h-[75vh] flex items-center bg-red-600 text-white overflow-hidden">
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-gradient-to-br from-red-700 via-red-600 to-red-500"></div>
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,white_1px,transparent_0)] bg-[size:40px_40px] opacity-10"></div>
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-white/10 blur-[100px] rounded-full"></div>
      </div>

      <div class="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div class="grid lg:grid-cols-12 gap-12 items-center">
          <div class="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div class="inline-flex items-center gap-3 px-4 py-2 mb-8 rounded-xl bg-white text-red-600 shadow-2xl transform hover:scale-105 transition-transform duration-500">
              <span class="relative flex h-2 w-2">
                <span class="animate-ping absolute h-full w-full rounded-full bg-red-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
              </span>
              <span class="text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] italic">Peer_Reviewed_Content // STACK_V2.5</span>
            </div>

            <h1 class="text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] xl:text-[6.5rem] font-[1000] leading-[0.85] tracking-tighter uppercase italic mb-8">
              System<br/>
              <span class="text-white/80 underline decoration-white/20 decoration-8 underline-offset-[10px]">Architecture.</span>
            </h1>

            <div class="max-w-xl lg:border-l-4 lg:border-white/30 lg:pl-8">
              <p class="text-lg md:text-xl lg:text-2xl text-red-50 leading-relaxed font-semibold italic opacity-95">
                Analysen zur <span class="text-white">algorithmischen Entropie</span>, mathematischen Validierung von Laravel-Patterns und der Präzision hochverfügbarer Infrastrukturen.
              </p>
            </div>
          </div>

          <div class="hidden lg:flex lg:col-span-5 relative">
            <div class="w-full bg-white/10 backdrop-blur-2xl border border-white/20 p-8 rounded-[3rem] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.2)] rotate-3 hover:rotate-0 transition-all duration-1000 group">
              <div class="flex gap-2 mb-6 text-white/40">
                <LucideTerminal class="w-5 h-5" />
                <div class="w-2.5 h-2.5 rounded-full bg-white/40 ml-auto"></div>
                <div class="w-2.5 h-2.5 rounded-full bg-white/20"></div>
              </div>
              <div class="font-mono text-[11px] leading-relaxed text-red-50/90">
                <p class="text-white font-bold">~/velweb/blog --list --technical</p>
                <p class="mt-2 text-white/60"># Fetching scientific_proofs...</p>
                <p class="mt-1">> [STDOUT] Latency: 12ms</p>
                <p class="text-white">> [STDOUT] Scalability_Index: 0.99</p>
              </div>
              <div class="absolute -top-10 -right-6 bg-white text-red-600 w-28 h-28 rounded-full flex flex-col items-center justify-center shadow-2xl -rotate-12 border-4 border-red-50/50 group-hover:rotate-0 transition-transform duration-700">
                <span class="text-3xl font-black italic">{{ blogPosts?.length || 0 }}</span>
                <span class="text-[8px] font-black uppercase tracking-widest mt-1">Logs</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <nav class="sticky top-[60px] lg:top-[73px] z-30 bg-white/90 backdrop-blur-xl border-b border-gray-100 py-6 px-4">
      <div class="max-w-7xl mx-auto flex flex-wrap justify-center gap-3">
        <button v-for="cat in categories" :key="cat" @click="selectedCategory = cat" :class="['px-6 py-2.5 rounded-full text-[10px] font-black uppercase tracking-widest transition-all italic border-2', selectedCategory === cat ? 'bg-red-600 border-red-600 text-white shadow-lg scale-105' : 'bg-white border-gray-100 text-gray-400 hover:border-red-600 hover:text-red-600']">
          {{ cat === 'Alle' ? 'Alle_Berichte' : cat }}
        </button>
      </div>
    </nav>

    <section class="py-16 md:py-24 px-4 sm:px-6 lg:px-12 bg-gray-50/30">
      <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        <article v-for="post in filteredPosts" :key="post.id" @click="navigateTo(`/blog/${post.slug}`)" class="group cursor-pointer flex flex-col bg-white rounded-[2.5rem] border border-gray-100 hover:border-red-600 transition-all duration-500 hover:shadow-2xl overflow-hidden">
          <div class="relative h-64 overflow-hidden bg-gray-100">
            <img :src="post.image" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            <div class="absolute top-6 left-6"><span class="px-4 py-2 bg-red-600 text-white text-[9px] font-black uppercase italic rounded-lg shadow-xl">{{ post.category }}</span></div>
          </div>
          <div class="p-8 md:p-10 flex flex-col flex-grow">
            <div class="text-[9px] font-black text-gray-400 uppercase italic mb-4 tracking-widest">{{ formatDate(post.publishedAt) }} // {{ post.readTime }} MIN READ</div>
            <h2 class="text-2xl md:text-3xl font-black text-gray-900 uppercase italic leading-tight mb-4 group-hover:text-red-600 transition-colors">{{ post.title }}</h2>
            <p class="text-gray-500 text-sm md:text-base italic line-clamp-3 mb-8">{{ post.excerpt }}</p>
            <div class="mt-auto pt-6 border-t border-gray-50 flex justify-between items-center text-[10px] font-black uppercase italic group-hover:text-red-600">
              OPEN_LOG.sh <span class="group-hover:translate-x-2 transition-transform">→</span>
            </div>
          </div>
        </article>
      </div>
    </section>

    <section class="py-24 px-4 sm:px-6 bg-white text-center">
      <div class="max-w-5xl mx-auto bg-gray-900 p-12 md:p-24 rounded-[4rem] text-white shadow-3xl relative overflow-hidden">
        <div class="absolute inset-0 opacity-5 bg-[size:30px_30px] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)]"></div>
        <div class="relative z-10">
          <h3 class="text-4xl md:text-7xl font-black mb-8 italic uppercase tracking-tighter leading-none">Code <span class="text-red-600">validieren.</span></h3>
          <p class="text-lg md:text-xl text-gray-400 mb-12 font-medium italic max-w-2xl mx-auto">Hinterlassen Sie keine technischen Schulden. Ich analysiere Ihre Architektur nach wissenschaftlichen Metriken.</p>
          <NuxtLink to="/kontakt" class="inline-block bg-red-600 text-white px-10 py-5 rounded-2xl font-black text-xl hover:bg-white hover:text-red-600 transition-all uppercase italic shadow-2xl">Audit_Request.exe</NuxtLink>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { blogPosts } from '~/data/blogPosts'
import { LucideTerminal, LucideZap } from 'lucide-vue-next'

definePageMeta({ layout: 'guest' })

const selectedCategory = ref('Alle')
const categories = computed(() => ['Alle', ...new Set(blogPosts.map(p => p.category))])
const filteredPosts = computed(() => {
  let posts = selectedCategory.value === 'Alle' ? blogPosts : blogPosts.filter(p => p.category === selectedCategory.value)
  return [...posts].sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
})
const formatDate = (d) => new Date(d).toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' })

useHead({ title: 'Engineering Blog | System Architecture & Insights' })
</script>