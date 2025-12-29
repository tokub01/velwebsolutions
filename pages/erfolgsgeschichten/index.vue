<template>
    <div class="font-sans text-gray-900 bg-white selection:bg-red-100 selection:text-red-600">
      <header class="relative py-24 md:py-44 bg-gradient-to-br from-red-700 via-red-600 to-red-500 text-white px-6 overflow-hidden mt-[81px]">
        <div class="absolute inset-0 opacity-10 pointer-events-none">
          <div class="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
        </div>
        <div class="relative z-10 max-w-6xl mx-auto text-center">
          <span class="inline-block px-5 py-2 mb-6 rounded-full bg-white text-red-600 text-[10px] font-black uppercase tracking-[0.2em] shadow-xl italic">
            // Digital_Transformation_Logs
          </span>
          <h1 class="text-5xl md:text-9xl font-black mb-10 leading-[0.85] tracking-tighter uppercase italic">
            Success <br/><span class="text-white/90 underline decoration-white/30 italic">Stories.</span>
          </h1>
        </div>
      </header>

      <section class="py-24 px-6 max-w-7xl mx-auto">
        <div class="grid md:grid-cols-2 gap-12">
          <NuxtLink
            v-for="story in stories"
            :key="story.id"
            :to="`/erfolgsgeschichten/${story.slug}`"
            class="group block bg-gray-50 rounded-[3rem] overflow-hidden border border-gray-100 hover:shadow-3xl transition-all"
          >
            <div class="p-12">
              <div class="flex items-center gap-4 mb-8">
                <span class="px-4 py-1 bg-red-600 text-white text-[10px] font-black uppercase italic italic tracking-widest">{{ story.category }}</span>
                <span class="text-[10px] font-black text-gray-400 uppercase italic">{{ story.readTime }} Lesezeit</span>
              </div>
              <h2 class="text-3xl font-black uppercase italic tracking-tighter mb-6 group-hover:text-red-600 transition-colors leading-none">
                {{ story.title }}
              </h2>
              <p class="text-gray-500 italic font-medium leading-relaxed mb-8">{{ story.excerpt }}</p>
              <div class="flex flex-wrap gap-2">
                <span v-for="tag in story.tags" :key="tag" class="text-[9px] font-bold text-gray-400 border border-gray-200 px-3 py-1 rounded-full uppercase tracking-tighter italic">#{{ tag }}</span>
              </div>
            </div>
          </NuxtLink>
        </div>
      </section>
    </div>
  </template>

  <script setup>
  import { stories } from '~/data/stories'
  definePageMeta({ layout: 'guest' })
  useHead({ title: 'Erfolgsgeschichten & Case Studies | VelWebSolutions' })
  </script>