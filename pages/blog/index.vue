<template>
  <div class="font-sans text-gray-900 bg-white selection:bg-red-100 selection:text-red-600">
    <nav class="bg-gray-50 py-4 px-6 mt-16 border-b border-gray-100" aria-label="Breadcrumb">
      <ol class="max-w-7xl mx-auto flex items-center space-x-2 text-sm">
        <li>
          <NuxtLink to="/" class="text-red-600 hover:text-red-700 hover:underline transition-colors font-black uppercase tracking-tighter italic">Zentrale</NuxtLink>
        </li>
        <li class="text-gray-400">/</li>
        <li class="text-gray-700 font-black uppercase tracking-tighter italic">Engineering Blog</li>
      </ol>
    </nav>

    <section class="relative py-24 md:py-44 bg-gradient-to-br from-red-700 via-red-600 to-red-500 text-white px-6 overflow-hidden">
      <div class="absolute inset-0 opacity-10 pointer-events-none">
        <div class="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      </div>
      <div class="relative z-10 max-w-7xl mx-auto text-center">
        <h1 class="text-5xl md:text-9xl font-black mb-8 leading-[0.85] tracking-tighter uppercase italic">
          Engineering <br/><span class="text-white/90 underline decoration-white/30 italic">Journal</span>
        </h1>
        <p class="text-xl md:text-2xl text-red-50 max-w-3xl mx-auto leading-relaxed font-medium italic opacity-90">
          Deep-Dives in Software-Architektur, skalierbare Systeme und High-Performance Web-Engineering.
        </p>
      </div>
    </section>

    <section class="py-24 px-6 max-w-7xl mx-auto">
      <div class="flex flex-wrap justify-center gap-4 mb-20">
        <button
          v-for="cat in categories"
          :key="cat"
          @click="selectedCategory = cat"
          :class="[
            'px-8 py-3 rounded-2xl font-black uppercase italic tracking-widest text-xs transition-all duration-300',
            selectedCategory === cat ? 'bg-red-600 text-white shadow-xl scale-105' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
          ]"
        >
          {{ cat }}
        </button>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-12 md:gap-16">
        <article
          v-for="post in filteredPosts"
          :key="post.slug"
          class="group cursor-pointer"
          @click="navigateTo(`/blog/${post.slug}`)"
        >
          <div class="relative mb-8 rounded-[2.5rem] overflow-hidden bg-gray-900 aspect-[16/10] shadow-2xl transition-transform duration-700 group-hover:scale-[1.02]">
            <img :src="post.image" :alt="post.imageAlt" class="object-cover w-full h-full opacity-80 group-hover:opacity-100 transition-all duration-700 group-hover:scale-110" />
            <div class="absolute top-6 left-6">
              <span class="px-4 py-2 bg-white/90 backdrop-blur text-red-600 text-[10px] font-black uppercase tracking-widest rounded-xl italic shadow-lg">
                {{ post.category }}
              </span>
            </div>
          </div>

          <div class="space-y-4 px-2">
            <div class="flex items-center gap-4 text-[10px] font-black text-gray-400 uppercase tracking-widest italic">
              <span>{{ formatDate(post.publishedAt) }}</span>
              <span class="w-1 h-1 bg-red-600 rounded-full"></span>
              <span>{{ post.readTime }}</span>
            </div>
            <h2 class="text-2xl md:text-3xl font-black text-gray-900 uppercase italic tracking-tighter leading-none group-hover:text-red-600 transition-colors duration-300">
              {{ post.title }}
            </h2>
            <p class="text-gray-500 font-medium italic leading-relaxed line-clamp-3">
              {{ post.excerpt }}
            </p>
          </div>
        </article>
      </div>
    </section>
  </div>
</template>

<script setup>
import { blogPosts } from '~/data/blogPosts'

definePageMeta({
  layout: 'guest'
})

const selectedCategory = ref('Alle')
const categories = ['Alle', ...new Set(blogPosts.map(p => p.category))]

const filteredPosts = computed(() => {
  let posts = selectedCategory.value === 'Alle'
    ? blogPosts
    : blogPosts.filter(p => p.category === selectedCategory.value);
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
  meta: [{ name: 'description', content: 'Deep-Dives in moderne Softwareentwicklung, Laravel und Vue.js.' }]
})
</script>