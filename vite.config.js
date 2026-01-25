import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  base: '/site/',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@/design-system': path.resolve(__dirname, './src/design-system'),
      '@/components': path.resolve(__dirname, './src/components'),
    },
  },
  server: {
    port: 3000,
    open: true
  }
})
