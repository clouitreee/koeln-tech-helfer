import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },

  server: {
    host: '127.0.0.1',
    port: 5173,
    strictPort: true,
    open: false,
    cors: false,
    hmr: { overlay: true }
  },

  preview: {
    host: '127.0.0.1',
    port: 4173,
    strictPort: true,
    open: false
  },

  build: {
    target: 'es2019',
    sourcemap: false
  },

  optimizeDeps: {
    force: false
  }
})
