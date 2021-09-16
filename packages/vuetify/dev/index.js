/* eslint-disable no-console, no-unused-vars, max-len */
import '@mdi/font/css/materialdesignicons.css'
import '../dist/zui.css'
import Main from './Main'
import App from './App'
import { createApp, createAdmin, createRouter, createAdminRouter } from '@zwd/z-ui'
import { menus } from './menus'
import Test from './Test'

// const router = createRouter({
//   appMain: Main,
//   appNotFound: true,
//   routerOptions: {
//     routes: [
//       { name: 'aaa', path: '/aaa', meta: { a: 2 }, component: App },
//       { name: 'root', path: '/', component: App, meta: { a: 'root' }, children: [{ name: 'aaa', path: 'aaa', meta: { a: 1 }, component: App }] },
//     ],
//   },
// })
//
// const app = createApp({
//   appHome: App,
//   appMain: Main,
//   componentOptions: {
//     router,
//   },
// })

const router = createAdminRouter({
  menus,
  redirect: '/eee/eee-1/eee-1-1/eee-1-1-1',
  routerOptions: {
    routes: [
      {
        path: '',
        component: App,
        meta: {
          a: 'home',
        },
      },
      {
        path: 'aaaa',
        component: App,
        meta: {
          a: 'aaaa',
        },
        children: [
          {
            path: 'aaaa',
            component: App,
            meta: {
              a: 'aaaa-aaaa',
            },
          },
          {
            path: '/aaaa1',
            component: App,
            meta: {
              a: 'aaaa-aaaa',
            },
          },
        ],
      },
    ],
  },
})

const app = createAdmin({
  appMain: Main,
  appHome: App,
  menus,
  componentOptions: {
    router,
  },
})

app.$router && console.info(app.$router.options)
