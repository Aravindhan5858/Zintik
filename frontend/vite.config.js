import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    host: true,
    // open the browser automatically in dev
    open: true,
    // file watching settings
    watch: {
      usePolling: false,
    },
    hmr: {
      overlay: false,
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          'react-query': ['@tanstack/react-query'],
          'react-hot-toast': ['react-hot-toast'],
        },
      },
    },
  },
  optimizeDeps: {
    include: ['react', 'react-dom', '@tanstack/react-query', 'react-hot-toast'],
  },
})