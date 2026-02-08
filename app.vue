<template>
  <div class="antialiased font-sans overflow-hidden">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>

    <CookieBanner />
  </div>
</template>

<script setup>
/**
 * Globaler Setup-Bereich der App.
 * Hier kannst du App-weite Konfigurationen vornehmen.
 */

// Beispiel für globale SEO-Tags oder HTML-Attribute
useHead({
  htmlAttrs: {
    lang: 'de'
  },
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk}` : 'VelWebSolutions - Engineering & Design';
  },
  meta: [
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'theme-color', content: '#dc2626' } // red-600
  ]
})
</script>

<style>
/**
 * Globale CSS-Transitions für sanfte Seitenwechsel
 */
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

/* Scrollbar-Styling für einen cleanen Look */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: #f1f1f1;
}
::-webkit-scrollbar-thumb {
  background: #dc2626;
  border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover {
  background: #b91c1c;
}
</style>