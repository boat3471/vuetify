import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'
import { resolve } from 'path'

export default defineConfig({
  base: './',
  plugins: [createVuePlugin()],
  build: {
    outDir: 'dist/vue',
    assetsDir: '.',
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      external: [''],
      input: {
        index: resolve(__dirname, 'index-vue.html'),
      },
      output: {
        extend: true,
        minifyInternalExports: false,
        chunkFileNames () {
          const pkg = require('./package.json')
          const v = pkg.dependencies.vue
          return `vue.${v}.module.js`
        },
      },
    },
  },
})
