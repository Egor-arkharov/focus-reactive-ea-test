import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "@/styles/global.scss" as *;`
      }
    }
  },
  plugins: [react(), svgr()],
  resolve: {
    alias: {
      '@': '/src'
    }
  }
});