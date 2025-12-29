<template>
    <div v-if="story" class="font-sans text-gray-900 bg-white selection:bg-red-100 selection:text-red-600">
      <header class="relative py-32 md:py-56 bg-gray-900 text-white px-6 overflow-hidden mt-[81px]">
        <div class="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070')] bg-cover bg-center"></div>
        <div class="relative z-10 max-w-5xl mx-auto">
          <NuxtLink to="/erfolgsgeschichten" class="inline-flex items-center gap-2 text-red-500 font-black uppercase italic text-xs mb-12 hover:gap-4 transition-all">
            <LucideArrowLeft class="w-4 h-4" /> Zurück zur Übersicht
          </NuxtLink>
          <div class="text-red-600 font-black uppercase italic tracking-widest text-sm mb-6">// Case_Study_Report</div>
          <h1 class="text-4xl md:text-8xl font-black uppercase italic tracking-tighter leading-[0.85] mb-12">
            {{ story.title }}
          </h1>

          <div class="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-white/10">
            <div>
              <div class="text-[10px] font-black text-gray-500 uppercase italic mb-2">Branche</div>
              <div class="font-bold italic">{{ story.industry }}</div>
            </div>
            <div>
              <div class="text-[10px] font-black text-gray-500 uppercase italic mb-2">Dauer</div>
              <div class="font-bold italic">{{ story.duration }}</div>
            </div>
            <div>
              <div class="text-[10px] font-black text-gray-500 uppercase italic mb-2">Scope</div>
              <div class="font-bold italic">{{ story.projectScope }}</div>
            </div>
            <div>
              <div class="text-[10px] font-black text-gray-500 uppercase italic mb-2">Resultat</div>
              <div class="text-red-500 font-black italic">{{ story.result }}</div>
            </div>
          </div>
        </div>
      </header>

      <article class="py-24 px-6 max-w-4xl mx-auto italic-content">
        <div class="article-content" v-html="story.content"></div>
      </article>

      <section class="py-24 bg-gray-50 px-6 text-center border-t border-gray-100">
        <h3 class="text-4xl font-black uppercase italic mb-8">Bereit für Ihre eigene <span class="text-red-600">Transformation?</span></h3>
        <NuxtLink to="/kontakt" class="inline-block bg-gray-900 text-white px-12 py-6 rounded-2xl font-black uppercase italic tracking-widest hover:bg-red-600 transition-all">Projekt anfragen</NuxtLink>
      </section>
    </div>
  </template>

  <script setup>
  import { stories } from '~/data/stories'

  const route = useRoute()
  const story = stories.find(s => s.slug === route.params.slug)

  if (!story) {
    throw createError({ statusCode: 404, statusMessage: 'Story not found', fatal: true })
  }

  useHead({
    title: `${story.title} | Case Study | VelWebSolutions`,
    meta: [{ name: 'description', content: story.excerpt }]
  })
  definePageMeta({ layout: 'guest' })
  </script>

  <style scoped>
  @reference "tailwindcss";

  .article-content :deep(h2) {
    @apply text-3xl md:text-5xl font-black mt-20 mb-8 uppercase tracking-tighter italic text-gray-900 border-l-[12px] border-red-600 pl-8;
  }

  .article-content :deep(p) {
    @apply text-xl md:text-2xl text-gray-700 leading-relaxed font-medium italic mb-10;
  }

  .article-content :deep(ul) {
    @apply space-y-4 mb-10;
  }

  .article-content :deep(li) {
    @apply text-lg md:text-xl font-bold italic text-gray-600 flex items-start gap-3;
  }
  .article-content :deep(li::before) {
    content: '→';
    @apply text-red-600 font-black;
  }
  </style>