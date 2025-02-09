import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import * as fs from 'node:fs'

export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    {
      name: 'copy-sitemap',
      writeBundle() {
        fs.copyFileSync('public/sitemap.xml', 'dist/sitemap.xml')
      }
    },
    {
      name: 'add-cache-headers',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url?.includes('iosevka')) {
            res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
          }
          next();
        });
      }
    }
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  publicDir: 'public',
  build: {
    // Enable minification and compression
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log']
      },
      format: {
        comments: false
      }
    },
    // Enable HTML minification
    rollupOptions: {
      input: {
        main: './index.html',
      },
      output: {
        manualChunks: {
          'vendor': ['vue', 'vue-router'],
        },
        // Enable code splitting
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    },
    // Enable compression size reporting
    reportCompressedSize: true,
    // Optimize chunk size
    chunkSizeWarningLimit: 500,
    cssCodeSplit: true,
    // Enable source maps for production
    sourcemap: false
  },
  // Enable gzip compression
  server: {
    strictPort: true,
    middlewareMode: false
  }
})
