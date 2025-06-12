<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <Header />

  <main class="content">
    <RouterView />
  </main>

  <Footer />
</template>

<style scoped>
.content {
  min-height: calc(100vh - 120px); /* adjust based on header/footer height */
  padding: 1rem;
}
</style>
