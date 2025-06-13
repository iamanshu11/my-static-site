<template>
  <div class="bg-cyan-100 py-20 px-4 text-center font-inter">
    <div class="max-w-4xl mx-auto mb-16">
      <h2 class="text-4xl font-bold text-gray-800 leading-tight mb-4">Money for life's crucial moments — in time<br />and without hidden fees</h2>
      <p class="text-gray-600 text-lg">
        When it comes to global money transfers, every transaction becomes more than just a monetary exchange: It becomes an opportunity to strengthen connections and nurture ties with the people and places that have shaped us.
      </p>
    </div>

    <div class="relative max-w-6xl mx-auto overflow-hidden">
      <div class="flex transition-transform duration-700 ease-in-out" :style="{ transform: `translateX(-${currentIndex * (100 / itemsPerPage)}%)` }">
        <div v-for="(testimonial, index) in testimonials" :key="index" class="flex-none w-full md:w-1/2 lg:w-1/4 p-4">
          <div class="bg-purple-600 text-white rounded-3xl p-6 text-left h-full flex flex-col justify-between">
            <p class="text-lg mb-4">{{ testimonial.text }}</p>
            <p class="font-bold text-xl">{{ testimonial.author }}</p>
          </div>
        </div>
      </div>

      <!-- Navigation Buttons -->
      <button @click="prevSlide" class="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg opacity-75 hover:opacity-100 focus:outline-none">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
      </button>
      <button @click="nextSlide" class="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-lg opacity-75 hover:opacity-100 focus:outline-none">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const testimonials = ref([
  {
    text: 'Easy to use, quick to send, and no hidden fees. Tranxfa made my monthly transfers so much easier.',
    author: 'Rachel'
  },
  {
    text: 'Great platform, great rates. I\'ve tried other platforms before, but nothing compares to the experience here.',
    author: 'Michael'
  },
  {
    text: 'I don\'t have to worry when I send money now. It always gets there fast and without any issues.',
    author: 'Esther'
  },
  {
    text: 'Everything is straightforward, and the support team is helpful too. Happy I found Tranxfa.',
    author: 'David'
  },
  {
    text: 'Everything is straightforward, and the support team is helpful too. Happy I found Tranxfa.',
    author: 'David'
  },
]);

const currentIndex = ref(0);
const intervalId = ref(null);
const itemsPerPage = ref(4);

const totalSlides = computed(() => Math.ceil(testimonials.value.length / itemsPerPage.value));

const startAutoSlide = () => {
  clearInterval(intervalId.value);
  intervalId.value = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % totalSlides.value;
  }, 3000);
};

const nextSlide = () => {
  clearInterval(intervalId.value);
  currentIndex.value = (currentIndex.value + 1) % totalSlides.value;
  startAutoSlide();
};

const prevSlide = () => {
  clearInterval(intervalId.value);
  currentIndex.value = (currentIndex.value - 1 + totalSlides.value) % totalSlides.value;
  startAutoSlide();
};

onMounted(() => {
  const updateItemsPerPage = () => {
    if (window.innerWidth >= 1024) {
      itemsPerPage.value = 4;
    } else if (window.innerWidth >= 768) {
      itemsPerPage.value = 2;
    } else {
      itemsPerPage.value = 1;
    }
    currentIndex.value = 0;
    startAutoSlide(); // Restart auto-slide with new itemsPerPage
  };

  window.addEventListener('resize', updateItemsPerPage);
  updateItemsPerPage();
  startAutoSlide();
});

onBeforeUnmount(() => {
  clearInterval(intervalId.value);
});

import { computed } from 'vue';
</script>

<style scoped>
/* Add any custom styles here if needed */
</style> 