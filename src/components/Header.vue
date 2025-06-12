<template>
  <header class="bg-white shadow-md">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <img src="/src/assets/logo.svg" alt="Logo" class="h-8 w-auto" />
        </div>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex space-x-8">
          <router-link 
            to="/" 
            class="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            active-class="text-blue-600"
          >
            Home
          </router-link>
          <router-link 
            to="/about" 
            class="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            active-class="text-blue-600"
          >
            About
          </router-link>
          <router-link 
            to="/industries" 
            class="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
            active-class="text-blue-600"
          >
            Industries
          </router-link>
        </nav>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button 
            @click="isOpen = !isOpen"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-600 focus:outline-none"
          >
            <svg 
              class="h-6 w-6" 
              :class="{'hidden': isOpen, 'block': !isOpen}"
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg 
              class="h-6 w-6" 
              :class="{'block': isOpen, 'hidden': !isOpen}"
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <div 
        class="md:hidden" 
        :class="{'block': isOpen, 'hidden': !isOpen}"
      >
        <div class="px-2 pt-2 pb-3 space-y-1">
          <router-link 
            to="/" 
            class="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            active-class="text-blue-600"
          >
            Home
          </router-link>
          <router-link 
            to="/about" 
            class="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            active-class="text-blue-600"
          >
            About
          </router-link>
          <router-link 
            to="/industries" 
            class="block text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            active-class="text-blue-600"
          >
            Industries
          </router-link>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
</script>
  