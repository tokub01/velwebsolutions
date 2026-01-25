<template>
  <div v-if="post" class="font-sans text-gray-900 bg-white selection:bg-red-100 selection:text-red-600 antialiased min-h-screen">

    <header class="relative min-h-[60vh] flex items-center bg-red-600 text-white overflow-hidden">
      <div class="absolute inset-0 z-0">
        <div class="absolute inset-0 bg-gradient-to-br from-red-700 via-red-600 to-red-500"></div>
        <div class="absolute inset-0 bg-[radial-gradient(circle_at_2px_2px,white_1px,transparent_0)] bg-[size:40px_40px] opacity-10"></div>
        <div class="absolute -top-24 -right-24 w-96 h-96 bg-white/10 blur-[100px] rounded-full"></div>
      </div>

      <div class="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div class="grid lg:grid-cols-12 gap-12 items-center">
          <div class="lg:col-span-8 flex flex-col items-center lg:items-start text-center lg:text-left">

            <NuxtLink to="/blog" class="inline-flex items-center gap-3 px-4 py-2 mb-8 rounded-xl bg-white text-red-600 shadow-2xl transform hover:scale-105 transition-all duration-500 group">
              <LucideArrowLeft class="w-4 h-4 transition-transform group-hover:-translate-x-1" />
              <span class="text-[10px] md:text-[11px] font-black uppercase tracking-[0.3em] italic">ZURÜCK_ZUR_ÜBERSICHT</span>
            </NuxtLink>

            <h1 class="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-[1000] leading-[0.9] tracking-tighter uppercase italic mb-8">
              {{ post.title }}
            </h1>

            <div class="max-w-2xl lg:border-l-4 lg:border-white/30 lg:pl-8">
              <p class="text-lg md:text-xl text-red-50 leading-relaxed font-semibold italic opacity-95">
                {{ post.excerpt }}
              </p>
            </div>
          </div>

          <div class="hidden lg:flex lg:col-span-4 relative">
            <div class="w-full bg-white/10 backdrop-blur-2xl border border-white/20 p-8 rounded-[3rem] shadow-2xl rotate-3">
              <div class="flex gap-2 mb-6 text-white/40">
                <LucideTerminal class="w-5 h-5" />
                <div class="w-2.5 h-2.5 rounded-full bg-white/40 ml-auto"></div>
                <div class="w-2.5 h-2.5 rounded-full bg-white/20"></div>
              </div>
              <div class="font-mono text-[10px] leading-relaxed text-red-50/90">
                <p class="text-white font-bold italic">STATUS: RENDERING_CORE</p>
                <p class="mt-2 text-white/60 uppercase">Category: {{ post.category }}</p>
                <p class="mt-1 uppercase text-white">Read_Time: {{ post.readTime }} MIN</p>
                <p class="mt-1 uppercase text-white/60 italic">Published: {{ post.publishedAt }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>

    <main class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div class="article-content" v-html="post.content"></div>

      <section class="mt-32">
        <div class="bg-gray-900 rounded-[3.5rem] p-10 md:p-20 text-white relative overflow-hidden group">
          <div class="absolute inset-0 opacity-5 bg-[size:30px_30px] bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)]"></div>
          <div class="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
            <div class="text-center md:text-left">
              <h3 class="text-3xl md:text-5xl font-black uppercase italic tracking-tighter mb-4">Projekt <span class="text-red-600">validieren?</span></h3>
              <p class="text-gray-400 font-medium italic max-w-md">Lass uns deine Architektur nach wissenschaftlichen Metriken analysieren.</p>
            </div>
            <NuxtLink to="/kontakt" class="bg-red-600 text-white px-10 py-5 rounded-2xl font-black text-lg hover:bg-white hover:text-red-600 transition-all uppercase italic shadow-2xl flex items-center gap-4">
              Audit_Request.exe <LucideArrowRight class="w-5 h-5" />
            </NuxtLink>
          </div>
        </div>
      </section>
    </main>

  </div>
</template>

<script setup>
import { blogPosts } from '~/data/blogPosts'
import { LucideTerminal, LucideArrowLeft, LucideArrowRight } from 'lucide-vue-next'

definePageMeta({ layout: 'guest' })

const route = useRoute()
const post = computed(() => blogPosts.find(p => p.slug === route.params.slug))

useHead({
  title: post.value ? `${post.value.title} | Velweb Engineering` : 'Loading...'
})
</script>

<style scoped>
/* Styling für den injizierten HTML Content */
.article-content :deep(section) {
  margin-bottom: 5rem;
}

.article-content :deep(h2) {
  font-size: clamp(2rem, 5vw, 3.5rem);
  font-weight: 1000;
  text-transform: uppercase;
  font-style: italic;
  letter-spacing: -0.05em;
  line-height: 0.95;
  margin-bottom: 2rem;
  color: #111827;
}

.article-content :deep(p) {
  font-size: 1.125rem;
  line-height: 1.8;
  color: #4b5563;
  margin-bottom: 1.5rem;
  font-style: italic;
}

/* Anpassung für Bilder im Artikel */
.article-content :deep(img) {
  border-radius: 2rem;
  margin: 3rem 0;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.1);
}
</style>