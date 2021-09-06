import '@mdi/font/css/materialdesignicons.css'
import '../dist/vuetify.css'
import App from './App'
// import router from './router'
// import vuetify from './vuetify'
// import { ZMessage, ZModal } from '../'
//
// Vue.config.performance = true
//
// Vue.use(ZMessage)
// Vue.use(ZModal)
//
// const vm = new Vue({
//   data: () => ({ isLoaded: document.readyState === 'complete' }),
//   vuetify,
//   router,
//   render (h) {
//     return this.isLoaded ? h(App) : undefined
//   },
// }).$mount('#app')
//
// // Prevent layout jump while waiting for styles
// vm.isLoaded || window.addEventListener('load', () => {
//   vm.isLoaded = true
// })

import { ZMenu, createAdminRouter, createAdmin } from '@zwd/z-ui'
import { menus } from './menus'
import Test from './Test'

const router = createAdminRouter({
  options: {
    routes: [
      // { name: 'root', path: '/', component: Test },
      { name: 'aaa', path: 'aaa', component: Test },
    ],
  },
})

// 假设菜单是异步获取的
// eslint-disable-next-line no-new
new Promise(resolve => {
  setTimeout(() => {
    resolve(menus)
  }, 1000)
}).then(menus => {
  // ZMenu.settingMenus(menus)
  ZMenu.settingMenus([])
})

// createApp({
//   appHome: App,
//   componentOptions: {
//     router,
//   },
// })

createAdmin({
  appHome: App,
  menus,
  componentOptions: {
    router,
    mounted () {
    },
  },
})
