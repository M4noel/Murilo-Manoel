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
    // Otimizações de build
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.log em produção
        drop_debugger: true
      }
    },
    // Code splitting
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['vue', 'vue-router'],
          'icons': ['@fortawesome/fontawesome-free']
        }
      }
    },
    // Otimização de chunks
    chunkSizeWarningLimit: 1000,
    // Sourcemaps apenas em dev
    sourcemap: false
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
