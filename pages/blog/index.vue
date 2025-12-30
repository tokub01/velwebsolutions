<template>
  <div class="font-sans text-gray-900 bg-white selection:bg-red-100 selection:text-red-600">
    <nav class="bg-gray-50 py-4 px-6 md:px-12 mt-16 border-b border-gray-100" aria-label="Breadcrumb">
      <ol class="w-full flex items-center space-x-2 text-[10px] font-black uppercase tracking-widest italic">
        <li>
          <NuxtLink to="/" class="text-red-600 hover:underline">Zentrale</NuxtLink>
        </li>
        <li class="text-gray-400">/</li>
        <li class="text-gray-700 font-bold uppercase tracking-tighter italic">Engineering Blog</li>
      </ol>
    </nav>

    <header class="relative py-24 md:py-44 bg-gradient-to-br from-red-700 via-red-600 to-red-500 text-white px-6 md:px-12 overflow-hidden">
      <div class="absolute inset-0 opacity-10 pointer-events-none">
        <div class="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>

      <div class="relative z-10 w-full text-center">
        <span class="inline-block px-5 py-2 mb-6 rounded-full bg-white text-red-600 text-[10px] font-black uppercase tracking-[0.2em] shadow-xl italic">
          ✓ Wissenschaftlich fundiertes Engineering
        </span>
        <h1 class="text-6xl md:text-[11vw] font-black mb-10 leading-[0.8] tracking-tighter uppercase italic">
          Knowledge <br/><span class="text-white/90 underline decoration-white/30 italic">Transfer.</span>
        </h1>
        <p class="text-xl md:text-3xl text-red-50 max-w-6xl mx-auto leading-relaxed font-medium italic opacity-90">
          Detaillierte Deep-Dives in Software-Architektur, Performance-Optimierung und die wirtschaftliche Relevanz von High-End Systemen.
        </p>
      </div>
    </header>

    <div class="sticky top-16 z-30 bg-white/80 backdrop-blur-md border-b border-gray-100 py-8 px-6 md:px-12">
      <div class="w-full flex flex-wrap justify-center gap-4">
        <button
          v-for="cat in categories"
          :key="cat"
          @click="selectedCategory = cat"
          :class="['px-8 py-3 rounded-full text-[10px] font-black uppercase tracking-widest transition-all italic border-2',
            selectedCategory === cat ? 'bg-red-600 border-red-600 text-white shadow-lg' : 'bg-white border-gray-100 text-gray-500 hover:border-red-600 hover:text-red-600'
          ]"
        >
          {{ cat }}
        </button>
      </div>
    </div>

    <section class="py-24 px-6 md:px-12 w-full">
      <div class="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 3xl:grid-cols-5 gap-8 md:gap-12">
        <article
          v-for="post in filteredPosts"
          :key="post.id"
          @click="navigateTo(`/blog/${post.slug}`)"
          class="group cursor-pointer flex flex-col bg-gray-50 rounded-[3rem] md:rounded-[4rem] border-2 border-gray-50 hover:border-red-600 hover:bg-white transition-all duration-500 hover:shadow-2xl h-full overflow-hidden"
        >
          <div class="relative h-64 md:h-80 w-full overflow-hidden bg-gray-200">
            <img
              :src="post.image || '/images/fallback-engineering.jpg'"
              :alt="post.title"
              @error="(e) => e.target.src = 'https://images.unsplash.com/photo-1518433278988-d71c1e90e7df?q=80&w=2570'"
              class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>

            <div class="absolute top-6 left-6 md:top-10 md:left-10">
              <span class="px-4 py-2 bg-red-600 text-white text-[10px] font-black uppercase tracking-widest italic rounded-lg shadow-2xl">
                {{ post.category }}
              </span>
            </div>
          </div>

          <div class="p-8 md:p-12 flex flex-col justify-between flex-grow">
            <div class="space-y-6">
              <div class="flex items-center gap-4 text-[9px] font-black text-gray-400 uppercase tracking-[0.3em] italic">
                <span>{{ formatDate(post.publishedAt) }}</span>
                <span class="w-1 h-1 bg-red-600 rounded-full"></span>
                <span>{{ post.readTime }}</span>
              </div>

              <h2 class="text-2xl md:text-4xl font-black text-gray-900 uppercase italic tracking-tighter leading-[0.85] group-hover:text-red-600 transition-colors">
                {{ post.title }}
              </h2>

              <p class="text-gray-500 text-sm md:text-base font-medium italic leading-relaxed line-clamp-3">
                {{ post.excerpt }}
              </p>
            </div>

            <div class="mt-10 pt-10 border-t border-gray-100 flex justify-between items-center">
              <div class="text-[10px] font-black uppercase tracking-widest italic text-gray-900 group-hover:text-red-600 transition-colors">
                VIEW_REPORT.log <span class="ml-2 inline-block transition-transform group-hover:translate-x-2">→</span>
              </div>
              <LucideArrowUpRight class="w-6 h-6 text-gray-300 group-hover:text-red-600 transition-colors" />
            </div>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<script setup>
import { blogPosts } from '~/data/blogPosts'
import { LucideArrowUpRight } from 'lucide-vue-next'

definePageMeta({
  layout: 'guest'
})

const selectedCategory = ref('Alle')
const categories = ['Alle', ...new Set(blogPosts.map(p => p.category))]

const filteredPosts = computed(() => {
  let posts = selectedCategory.value === 'Alle'
    ? blogPosts
    : blogPosts.filter(p => p.category === selectedCategory.value);

  // Neueste zuerst
  return [...posts].sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));
});

const formatDate = (date) => {
  return new Date(date).toLocaleDateString('de-DE', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

useHead({
  title: 'Engineering Blog | VelWebSolutions',
  meta: [
    { name: 'description', content: 'Technisch fundierte Artikel über Software-Architektur, Laravel und Vue.js Performance.' }
  ]
})
</script>

<style scoped>
/* Sanfter Bildübergang beim Laden */
img {
  opacity: 0;
  animation: fadeIn 0.5s ease-in forwards;
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
</style>