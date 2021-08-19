import { defineConfig } from 'vite'
import { createVuePlugin } from 'vite-plugin-vue2'

export default defineConfig({
  plugins: [createVuePlugin()],
  build: {
    outDir: 'dist',
    assetsDir: '.',
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      external: [],
      output: {
        extend: true,
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
