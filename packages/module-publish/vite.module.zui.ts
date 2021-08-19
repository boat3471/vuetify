import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'
import { resolve } from 'path'
import { transformImportModule } from './src/plugins'

export default defineConfig({
  base: './',
  plugins: [createVuePlugin()],
  build: {
    outDir: 'dist/zui',
    assetsDir: '.',
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      external: ['vue'],
      input: {
        index: resolve(__dirname, 'index-zui.html'),
      },
      plugins: [
        transformImportModule(),
      ],
      output: {
        extend: true,
        globals: {
          vue: 'Vue',
        },
        chunkFileNames () {
          const pkg = require('../vuetify/package.json')
          return `zui.${pkg.version}.module.js`
        },
        minifyInternalExports: false,
      },
    },
  },
})
