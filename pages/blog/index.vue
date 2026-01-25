<template>
  <NuxtLayout name="guest">
    <div class="font-sans text-zinc-900 bg-white selection:bg-red-100 selection:text-red-600 antialiased overflow-x-hidden">

      <header class="relative pt-40 pb-20 md:pt-64 md:pb-40 bg-red-600 text-white overflow-hidden">
        <div class="absolute inset-0 z-0">
          <div class="absolute inset-0 bg-gradient-to-br from-red-700 via-red-600 to-red-500"></div>
          <div class="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,white_1px,transparent_0)] bg-[size:40px_40px] opacity-10"></div>
          <div class="absolute -top-24 -right-24 w-96 h-96 bg-white/10 blur-[100px] rounded-full"></div>
        </div>

        <div class="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6">
          <div class="grid lg:grid-cols-12 gap-12 items-center">
            <div class="lg:col-span-8 text-left">
              <div class="inline-flex items-center gap-3 px-4 py-2 mb-8 rounded-xl bg-black/20 backdrop-blur-xl border border-white/10 text-white shadow-2xl transition-transform duration-500">
                <span class="relative flex h-2 w-2">
                  <span class="animate-ping absolute h-full w-full rounded-full bg-red-400 opacity-75"></span>
                  <span class="relative inline-flex rounded-full h-2 w-2 bg-red-600"></span>
                </span>
                <span class="text-[9px] md:text-[11px] font-black uppercase tracking-[0.3em] italic text-white">Engineering_Journal // V2.6</span>
              </div>

              <h1 class="text-[clamp(2.5rem,10vw,8.5rem)] font-[1000] leading-[0.85] tracking-tighter uppercase italic mb-10">
                System<br/>
                <span class="text-white/80 underline decoration-white/20 decoration-4 md:decoration-8 underline-offset-[5px] md:underline-offset-[15px]">Architecture.</span>
              </h1>

              <div class="max-w-2xl border-l-2 md:border-l-4 border-white/30 pl-6 md:pl-10 py-2">
                <p class="text-lg md:text-3xl text-red-50 leading-tight font-light italic opacity-95">
                  Analysen zur <span class="text-white font-bold">algorithmischen Entropie</span> und der mathematischen Präzision hochverfügbarer Infrastrukturen.
                </p>
              </div>
            </div>

            <div class="hidden lg:flex lg:col-span-4 relative">
              <div class="w-full bg-zinc-950/40 backdrop-blur-3xl border border-white/10 p-8 rounded-[3rem] shadow-3xl rotate-3 hover:rotate-0 transition-all duration-1000 group">
                <div class="flex gap-2 mb-6">
                  <div class="w-3 h-3 rounded-full bg-red-500"></div>
                  <div class="w-3 h-3 rounded-full bg-amber-500"></div>
                  <div class="w-3 h-3 rounded-full bg-emerald-500"></div>
                </div>
                <div class="font-mono text-[11px] leading-relaxed text-red-50/70">
                  <p class="text-white font-bold">~/velweb/blog --list</p>
                  <p class="mt-2 text-zinc-500"># Fetching technical_logs...</p>
                  <p class="mt-1">> Latency: 12ms</p>
                  <p class="text-red-500">> Scalability: 0.99</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <nav class="sticky top-0 z-50 bg-white/80 backdrop-blur-2xl border-b border-zinc-100 py-4 md:py-6 px-4">
        <div class="max-w-7xl mx-auto flex overflow-x-auto no-scrollbar justify-start md:justify-center gap-2 md:gap-4 pb-2 md:pb-0">
          <button v-for="cat in categories" :key="cat" @click="selectedCategory = cat"
            :class="['whitespace-nowrap px-6 py-3 rounded-2xl text-[9px] md:text-[11px] font-black uppercase tracking-[0.2em] transition-all italic border-2',
            selectedCategory === cat ? 'bg-red-600 border-red-600 text-white shadow-xl scale-105' : 'bg-white border-zinc-100 text-zinc-400 hover:border-red-600 hover:text-red-600']">
            {{ cat === 'Alle' ? 'Alle_Berichte' : cat }}
          </button>
        </div>
      </nav>

      <section class="py-16 md:py-32 px-4 md:px-6 bg-zinc-50/50">
        <div class="max-w-7xl mx-auto">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
            <article v-for="post in filteredPosts" :key="post.id" @click="navigateTo(`/blog/${post.slug}`)"
              class="group cursor-pointer flex flex-col bg-white rounded-[2.5rem] md:rounded-[3.5rem] border border-zinc-100 hover:border-red-600 transition-all duration-700 hover:shadow-3xl overflow-hidden">

              <div class="relative h-64 md:h-80 overflow-hidden bg-zinc-200">
                <img :src="post.image" class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0" />
                <div class="absolute inset-0 bg-gradient-to-t from-zinc-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div class="absolute top-6 left-6">
                  <span class="px-4 py-2 bg-white text-red-600 text-[9px] font-black uppercase italic rounded-xl shadow-2xl">{{ post.category }}</span>
                </div>
              </div>

              <div class="p-8 md:p-12 flex flex-col flex-grow">
                <div class="text-[9px] font-black text-zinc-400 uppercase italic mb-6 tracking-[0.2em] flex justify-between">
                  <span>{{ formatDate(post.publishedAt) }}</span>
                  <span class="text-red-600">{{ post.readTime }} MIN READ</span>
                </div>
                <h2 class="text-2xl md:text-4xl font-black text-zinc-900 uppercase italic leading-[0.9] mb-6 group-hover:text-red-600 transition-colors tracking-tighter">
                  {{ post.title }}
                </h2>
                <p class="text-zinc-500 text-sm md:text-base italic line-clamp-3 mb-10 leading-relaxed">
                  {{ post.excerpt }}
                </p>

                <div class="mt-auto pt-8 border-t border-zinc-50 flex justify-between items-center text-[10px] font-black uppercase italic group-hover:text-red-600 transition-colors tracking-widest">
                  <span>Read_Access.sh</span>
                  <div class="w-10 h-10 rounded-full bg-zinc-50 group-hover:bg-red-600 group-hover:text-white flex items-center justify-center transition-all">
                    <span class="group-hover:translate-x-1 transition-transform">→</span>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section class="py-20 md:py-40 px-4 md:px-6 bg-white">
        <div class="max-w-7xl mx-auto bg-zinc-900 p-10 md:p-32 rounded-[3rem] md:rounded-[6rem] text-white shadow-3xl relative overflow-hidden text-center">
          <div class="absolute inset-0 opacity-5 bg-[size:40px_40px] bg-[radial-gradient(circle_at_center,white_1px,transparent_0)]"></div>

          <div class="relative z-10 max-w-4xl mx-auto">
            <h3 class="text-4xl md:text-8xl font-[1000] mb-10 italic uppercase tracking-tighter leading-none">
              Stack <span class="text-red-600">optimieren.</span>
            </h3>
            <p class="text-lg md:text-2xl text-zinc-400 mb-12 font-light italic leading-relaxed">
              Hinterlassen Sie keine technischen Schulden. Ich analysiere Ihre Architektur nach wissenschaftlichen Metriken und Performance-KPIs.
            </p>
            <NuxtLink to="/kontakt" class="inline-block bg-red-600 text-white px-12 py-6 md:px-20 md:py-10 rounded-2xl md:rounded-[2.5rem] font-black text-lg md:text-2xl hover:bg-white hover:text-red-600 transition-all uppercase italic shadow-2xl tracking-widest">
              Audit_Request.exe
            </NuxtLink>
          </div>
        </div>
      </section>

    </div>
  </NuxtLayout>
</template>

<script setup>
import { blogPosts } from '~/data/blogPosts'
import { LucideTerminal } from 'lucide-vue-next'

definePageMeta({ layout: 'guest' })

const selectedCategory = ref('Alle')
const categories = computed(() => ['Alle', ...new Set(blogPosts.map(p => p.category))])
const filteredPosts = computed(() => {
  let posts = selectedCategory.value === 'Alle' ? blogPosts : blogPosts.filter(p => p.category === selectedCategory.value)
  return [...posts].sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
})
const formatDate = (d) => new Date(d).toLocaleDateString('de-DE', { year: 'numeric', month: 'long', day: 'numeric' })

useHead({
  title: 'Engineering Blog | System Architecture & Insights',
  meta: [{ name: 'description', content: 'Technische Analysen zu High-End Software-Architekturen, Laravel-Engineering und Skalierbarkeit.' }]
})
</script>

<style scoped>
.shadow-3xl {
  box-shadow: 0 50px 100px -20px rgba(0, 0, 0, 0.45);
}

.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
</style>