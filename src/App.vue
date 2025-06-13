<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <Header />

  <main class="content pt-16">
    <RouterView />
  </main>

  <Footer />
</template>

<style scoped>
.content {
  min-height: calc(100vh - 264px); /* Adjusted for fixed header (64px) and estimated footer height (200px) */
}
</style>
