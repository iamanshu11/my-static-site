<template>
  <header class="fixed top-0 w-full z-50 bg-white shadow-md">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-2 font-inter">
      <div class="flex justify-between items-center h-16">
        <!-- Logo -->
        <div class="flex-shrink-0">
          <div class="flex flex-col items-start">
            <div class="text-2xl font-bold">
              <img
              src="/img/logo.png"
            />
            </div>
          </div>
        </div>

        <!-- Desktop Navigation and Sign Up Button -->
        <div class="hidden md:flex items-center bg-white rounded-full p-2 shadow-md">
          <nav class="flex space-x-4">
            <router-link
              to="/"
              class="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-bold transition-colors duration-200"
              active-class="text-purple-600"
            >
              Home
            </router-link>
            <router-link
              to="/product"
              class="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-bold transition-colors duration-200"
              active-class="text-purple-600"
            >
              Product
            </router-link>
            <router-link
              to="/company"
              class="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-bold transition-colors duration-200"
              active-class="text-purple-600"
            >
              Company
            </router-link>
            <router-link
              to="/help"
              class="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-bold transition-colors duration-200"
              active-class="text-purple-600"
            >
              Help
            </router-link>
            <router-link
              to="/login"
              class="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-bold transition-colors duration-200"
              active-class="text-purple-600"
            >
              Log In
            </router-link>
          </nav>
          <button class="ml-4 px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50">
            Sign Up
          </button>
        </div>

        <!-- Mobile menu button -->
        <div class="md:hidden">
          <button
            @click="isOpen = !isOpen"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-purple-600 focus:outline-none"
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
            class="block text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            active-class="text-purple-600"
          >
            Home
          </router-link>
          <router-link
            to="/product"
            class="block text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            active-class="text-purple-600"
          >
            Product
          </router-link>
          <router-link
            to="/company"
            class="block text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            active-class="text-purple-600"
          >
            Company
          </router-link>
          <router-link
            to="/help"
            class="block text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            active-class="text-purple-600"
          >
            Help
          </router-link>
          <router-link
            to="/login"
            class="block text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-base font-medium transition-colors duration-200"
            active-class="text-purple-600"
          >
            Log In
          </router-link>
          <button class="block w-full text-left px-3 py-2 bg-purple-600 text-white rounded-md text-base font-medium hover:bg-purple-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-opacity-50">
            Sign Up
          </button>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'

const isOpen = ref(false)
</script>
  