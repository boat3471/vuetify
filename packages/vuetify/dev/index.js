import Vue from 'vue'
import App from './App'
import router from './router'
import vuetify from './vuetify'
import { ZMessage } from 'vuetify'

Vue.config.performance = true

Vue.use(ZMessage)

const vm = new Vue({
  data: () => ({ isLoaded: document.readyState === 'complete' }),
  vuetify,
  router,
  render (h) {
    return this.isLoaded ? h(App) : undefined
  },
}).$mount('#app')

// Prevent layout jump while waiting for styles
vm.isLoaded || window.addEventListener('load', () => {
  vm.isLoaded = true
})

// import { createApp } from '@zwd/z-ui'
//
// createApp({
// })
