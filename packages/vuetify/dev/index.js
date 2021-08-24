import '@mdi/font/css/materialdesignicons.css'
import '../dist/vuetify.css'
import Vue from 'vue'
import App from './App'
import router from './router'
import vuetify from './vuetify'
import { ZMessage, ZModal } from '../'

Vue.config.performance = true

Vue.use(ZMessage)
Vue.use(ZModal)

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

// import { createApp, ZModal } from '@zwd/z-ui'
// import '@mdi/font/css/materialdesignicons.css'
//
// createApp({
//   componentOptions: {
//     mounted () {
//       // eslint-disable-next-line no-console
//       console.info(111)
//       ZModal.info('asdasd')
//     },
//   },
// })
