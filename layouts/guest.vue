<template>
  <div class="flex flex-col min-h-dvh">

    <PageHeader />

    <main class="flex-grow">
      <slot />
    </main>

    <footer class="mt-auto">
      <PageFooter />
    </footer>
    <CookieBanner />
  </div>
</template>

<script setup>
/**
 * In Nuxt 3 sind keine manuellen Imports für Komponenten in /components nötig.
 * Auch Vue-Funktionen wie ref, computed oder hooks wie useRoute()
 * stehen hier ohne Import direkt zur Verfügung.
 */
</script>