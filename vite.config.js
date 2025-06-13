// vite.config.js
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [vue(), tailwindcss()],
  ssgOptions: {
    script: 'async',
    formatting: 'minify',
    includedRoutes: () => ['/', '/privacy-policy', '/terms-conditions', '/user-agreement', '/cookie-policy' ]
  },
  base: '/'
})

