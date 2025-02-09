import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import { compression } from 'vite-plugin-compression2'
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
    compression({
      compressionOptions: {
        level: 9, // Maximum compression level
      },
      skipIfLargerOrEqual: false,
      include: [
        /\.(js|mjs|cjs|json)$/,  // JavaScript files
        /\.(css)$/,              // CSS files
        /\.(html)$/,             // HTML files
        /\.(svg)$/,              // SVG files
        /\.(txt|xml|md)$/,       // Text files
      ],
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    target: 'esnext', // Optimize for modern browsers
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log']
      }
    },
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['vue', 'vue-router'],
          'utils': ['./src/utils/fontLoader.ts'],
        },
        chunkFileNames: 'assets/[name].[hash].js',
        entryFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash].[ext]'
      }
    },
    cssCodeSplit: true,
    reportCompressedSize: false, // Disable size reporting for faster builds
    chunkSizeWarningLimit: 500
  }
})
