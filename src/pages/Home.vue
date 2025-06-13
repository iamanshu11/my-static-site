<template>
  <div>
    <HeroSection />
    <WhyPeople />
    <TransfersSection />
    <HowItWorks />
    <PopularCorridors />
    <CrucialMomentsSlider />
    <StartSending />
  </div>
</template>

<script setup>
import HeroSection from '../components/HeroSection.vue'
import WhyPeople from '../components/WhyPeople.vue'
import TransfersSection from '../components/TransfersSection.vue'
import HowItWorks from '../components/HowItWorks.vue'
import PopularCorridors from '../components/PopularCorridors.vue'
import CrucialMomentsSlider from '../components/CrucialMomentsSlider.vue'
import StartSending from '../components/StartSending.vue'

import { onMounted } from 'vue'

onMounted(() => {
  window.scrollTo(0, 0)
})
</script>
