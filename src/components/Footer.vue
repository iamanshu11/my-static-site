<template>
  <footer class="bg-gray-200 text-gray-800 font-inter">
    <div class="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Company Info and Connect Us -->
        <div>
          <div class="flex flex-col items-start mb-6">
            <div class="text-2xl font-bold">
              <span class="text-purple-700">tran</span><span class="text-gray-800">xfa</span>
            </div>
            <div class="text-xs text-gray-500">Money Transfer</div>
          </div>

          <h3 class="text-lg font-semibold mb-4">Connect us</h3>
          <div class="flex space-x-4">
            <a href="#" class="text-gray-600 hover:text-purple-600 transition-colors duration-200">
              <img src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png" alt="Instagram" class="h-8 w-8" />
            </a>
            <a href="#" class="text-gray-600 hover:text-purple-600 transition-colors duration-200">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Facebook_icon.svg/2048px-Facebook_icon.svg.png" alt="Facebook" class="h-8 w-8" />
            </a>
            <a href="#" class="text-gray-600 hover:text-purple-600 transition-colors duration-200">
              <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/X_logo_2023.svg/1200px-X_logo_2023.svg.png" alt="X" class="h-8 w-8" />
            </a>
          </div>
        </div>

        <!-- Question Links -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Question</h3>
          <ul class="space-y-2 text-gray-600">
            <li>
              <router-link to="/how-it-works" class="hover:text-purple-600 transition-colors duration-200">
                How it works
              </router-link>
            </li>
            <li>
              <router-link to="/help" class="hover:text-purple-600 transition-colors duration-200">
                Help Center
              </router-link>
            </li>
            <li>
              <router-link to="/privacy-policy" class="hover:text-purple-600 transition-colors duration-200">
                Privacy Policy
              </router-link>
            </li>
            <li>
              <router-link to="/terms-conditions" class="hover:text-purple-600 transition-colors duration-200">
                Terms & Conditions
              </router-link>
            </li>
            <li>
              <router-link to="/user-agreement" class="hover:text-purple-600 transition-colors duration-200">
                User Agreement
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Company and Services -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Company</h3>
          <ul class="space-y-2 text-gray-600 mb-6">
            <li>
              <router-link to="/about" class="hover:text-purple-600 transition-colors duration-200">
                About
              </router-link>
            </li>
          </ul>

          <h3 class="text-lg font-semibold mb-4">Services</h3>
          <ul class="space-y-2 text-gray-600 mb-6">
            <li>
              <router-link to="/money-transfer" class="hover:text-purple-600 transition-colors duration-200">
                Money Transfer
              </router-link>
            </li>
          </ul>

          <h3 class="text-lg font-semibold mb-4">Cookie Policy</h3>
          <ul class="space-y-2 text-gray-600">
            <li>
              <router-link to="/cookie-policy" class="hover:text-purple-600 transition-colors duration-200">
                Cookie Policy
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Bottom Copyright Bar -->
    <div class="bg-purple-700 py-4 text-center text-white text-sm">
      <p>Tranxfa All rights reserved ©2024</p>
    </div>
  </footer>
</template>

<script setup>
// Script for Footer
</script>
  