<template>
    <div v-if="post" class="font-sans text-gray-900 bg-white selection:bg-red-100 selection:text-red-600 pt-32">
      <article>
        <header class="max-w-4xl mx-auto px-6 mb-20">
          <NuxtLink to="/blog" class="inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-red-600 mb-12 group italic">
            <LucideArrowLeft class="w-4 h-4 transition-transform group-hover:-translate-x-2" />
            ZURÜCK_ZUR_ÜBERSICHT
          </NuxtLink>

          <div class="flex items-center gap-4 text-xs font-black text-gray-400 uppercase tracking-[0.2em] mb-6 italic">
            <span class="text-red-600">{{ post.category }}</span>
            <span class="w-1 h-1 bg-gray-300 rounded-full"></span>
            <span>{{ formatDate(post.publishedAt) }}</span>
            <span class="w-1 h-1 bg-gray-300 rounded-full"></span>
            <span>{{ post.readTime }} Lesezeit</span>
          </div>

          <h1 class="text-4xl md:text-7xl font-black uppercase italic tracking-tighter leading-[0.9] mb-12">
            {{ post.title }}
          </h1>

          <div class="flex items-center gap-6 p-8 bg-gray-50 rounded-[2.5rem] border border-gray-100">
            <div class="w-16 h-16 bg-gray-900 rounded-2xl overflow-hidden shadow-lg border-2 border-white">
              <img src="/tobias_kubina.jpeg" alt="Author" class="w-full h-full object-cover" />
            </div>
            <div>
              <div class="text-[10px] font-black text-red-600 uppercase tracking-widest italic mb-1">// Author_Unit</div>
              <div class="text-lg font-black uppercase italic tracking-tighter">{{ post.author }}</div>
              <div class="text-xs font-bold text-gray-500 italic uppercase tracking-widest">{{ post.authorRole }}</div>
            </div>
          </div>
        </header>

        <div class="max-w-7xl mx-auto px-6 mb-24">
          <div class="rounded-[4rem] overflow-hidden shadow-3xl bg-gray-900 aspect-[21/9]">
            <img :src="post.image" :alt="post.imageAlt" class="w-full h-full object-cover opacity-90" />
          </div>
        </div>

        <div class="max-w-4xl mx-auto px-6 pb-44">
          <div class="article-content prose prose-xl prose-red max-w-none font-medium italic leading-relaxed text-gray-700" v-html="post.content"></div>

          <div class="mt-24 pt-12 border-t border-gray-100 flex flex-wrap gap-3">
            <span v-for="tag in post.tags" :key="tag" class="px-6 py-3 bg-gray-50 text-gray-500 text-[10px] font-black uppercase tracking-widest rounded-xl italic">
              # {{ tag }}
            </span>
          </div>
        </div>
      </article>
    </div>
  </template>

  <script setup>
  import { blogPosts } from '~/data/blogPosts'

  definePageMeta({
    layout: 'guest'
  })

  const route = useRoute()
  const post = computed(() => blogPosts.find(p => p.slug === route.params.slug))

  // 404 Handling falls Post nicht existiert
  if (!post.value) {
    throw createError({ statusCode: 404, statusMessage: 'Beitrag nicht gefunden' })
  }

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('de-DE', {
      year: 'numeric', month: 'long', day: 'numeric'
    });
  };

  useHead({
    title: `${post.value.title} | Engineering Blog`,
    meta: [{ name: 'description', content: post.value.excerpt }]
  })
  </script>

  <style scoped>
  @reference "tailwindcss";

  .shadow-3xl {
    box-shadow: 0 35px 60px -15px rgba(0, 0, 0, 0.2);
  }

  .article-content :deep(h2) {
    @apply text-3xl md:text-5xl font-black text-gray-900 uppercase italic tracking-tighter mt-20 mb-8 leading-none;
  }
  /* Weitere Styles aus deiner BlogPage.vue hierher übernehmen */
  </style>