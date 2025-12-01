import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    // Otimizações de build (usando esbuild que é mais rápido)
    minify: 'esbuild',
    // Code splitting
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['vue', 'vue-router']
        }
      }
    },
    // Otimização de chunks
    chunkSizeWarningLimit: 1000,
    // Sourcemaps apenas em dev
    sourcemap: false,
    // Otimizar CSS
    cssCodeSplit: true
  },
  // Otimizações de performance
  optimizeDeps: {
    include: ['vue', 'vue-router']
  },
  // Server config
  server: {
    hmr: {
      overlay: false
    }
  }
})
