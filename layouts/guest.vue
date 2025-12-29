<template>
  <div class="flex flex-col min-h-dvh">

    <PageHeader />

    <main class="flex-grow">
      <slot />
    </main>

    <footer class="mt-auto">
      <PageFooter />
    </footer>
  </div>
</template>