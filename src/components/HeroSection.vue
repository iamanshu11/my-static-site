<template>
  <div
    class="relative min-h-screen flex items-center bg-cover bg-center"
    :style="{ backgroundImage: `url(${vectorHome})` }"
  >
    <div class="container mx-auto flex flex-col md:flex-row items-center justify-between px-6 font-inter">
      <!-- Left Side Content -->
      <div class="max-w-3xl p-6 rounded-lg">
        <!-- <p class="font-bold text-sm text-gray-700">2M+ Users</p> -->
        <h1 class="text-5xl font-bold leading-tight mt-2">
          Send Money Between Canada and Nigeria
        </h1>
        <p class="text-gray-600 mt-2">
          Need to send money securely? With Tranxfa, it’s quick, easy, and reliable. No long processes. No hidden charges. Just simple, smooth transfers you can trust.
        </p>
      </div>

      <!-- Right Side - Calculator -->
      <div class="w-full md:w-1/3 mt-10 md:mt-0">
        <Calculator />
      </div>
    </div>
  </div>
</template>

<script setup>
import Calculator from './Calculator.vue'
import vectorHome from '/img/vector-home.png'
</script>
