import { createRouter, createWebHistory, createMemoryHistory } from 'vue-router'
import Home from './pages/Home.vue'
import About from './pages/About.vue'
import Industries from './pages/Industries.vue'

export const routes = [
  { 
    path: '/', 
    component: Home,
    name: 'home'
  },
  { 
    path: '/about', 
    component: About,
    name: 'about'
  },
  { 
    path: '/industries', 
    component: Industries,
    name: 'industries'
  },
]

export const router = createRouter({
  history: import.meta.env.SSR ? createMemoryHistory() : createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0 }
    }
  }
})
