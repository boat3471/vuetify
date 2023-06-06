import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'
import { resolve } from 'path'
import { transformImportModule } from './src/plugins'
const pkg = require('../vuetify/package.json')
const vue = require('vue/package.json')

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
        transformImportModule({
          vue: vue.version,
          zui: pkg.version,
        }),
      ],
      output: {
        extend: true,
        globals: {
          vue: 'Vue',
          '@zwd/z-ui': 'Zui',
        },
        chunkFileNames () {
          return `zui.${pkg.version}.module.js`
        },
        minifyInternalExports: false,
      },
    },
  },
})
