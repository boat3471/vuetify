/* eslint-disable no-console */
import '@mdi/font/css/materialdesignicons.css'
import '../dist/zui.css'
import App from './App'
import { createAdmin, createRouter } from '@zwd/z-ui'
// import { menus } from './menus'
import Test from './Test'

const router = createRouter({
  options: {
    routes: [
      { name: 'root', path: '/', component: App },
      { name: 'aaa', path: 'aaa', component: Test },
    ],
  },
})

// createApp({
//   appHome: App,
//   componentOptions: {
//     router,
//   },
// })

createAdmin({
  componentOptions: {
    router,
    mounted () {
    },
  },
})
