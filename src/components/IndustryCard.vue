<template>
  <div class="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-200">
    <img
      :src="image"
      :alt="title"
      class="w-full h-48 object-cover"
    />
    <div class="p-6">
      <h3 class="text-xl font-semibold text-gray-900 mb-2">{{ title }}</h3>
      <p class="text-gray-600 mb-4">{{ description }}</p>
      <ul class="space-y-2">
        <li v-for="(feature, index) in features" :key="index" class="flex items-center text-gray-600">
          <svg class="w-5 h-5 text-blue-600 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
          </svg>
          {{ feature }}
        </li>
      </ul>
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
  },
  image: {
    type: String,
    required: true
  },
  features: {
    type: Array,
    required: true
  }
})
</script> 