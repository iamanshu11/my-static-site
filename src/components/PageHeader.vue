<template>
  <div class="bg-gradient-to-r from-blue-600 to-blue-800 text-white">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
      <div class="text-center">
        <h1 class="text-4xl md:text-5xl font-bold mb-4">{{ title }}</h1>
        <p class="text-xl text-blue-100 max-w-3xl mx-auto">{{ description }}</p>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  }
})
</script> 