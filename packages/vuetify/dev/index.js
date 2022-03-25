/* eslint-disable no-console, no-unused-vars, max-len */
import '@mdi/font/css/materialdesignicons.css'
import '../dist/zui.css'
import Main from './Main'
import Home from './Home'
import Components from './Components'
import { createApp, createAdmin, createRouter, createAdminRouter } from '@zwd/z-ui'
import { menus } from './menus'
import Test from './Test'
import './icon.loader'

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

// const router = createAdminRouter({
//   menus,
//   redirect: '/eee/eee-1/eee-1-1/eee-1-1-1',
//   routerOptions: {
//     routes: [
//       {
//         path: '',
//         component: App,
//         meta: {
//           a: 'home',
//         },
//       },
//       {
//         path: 'aaaa',
//         component: App,
//         meta: {
//           a: 'aaaa',
//         },
//         children: [
//           {
//             path: 'aaaa',
//             component: App,
//             meta: {
//               a: 'aaaa-aaaa',
//             },
//           },
//           {
//             path: '/aaaa1',
//             component: App,
//             meta: {
//               a: 'aaaa-aaaa',
//             },
//           },
//         ],
//       },
//     ],
//   },
// })

const router = createAdminRouter({
  appMain: Main,
  redirect: 'home',
  menus,
  routerOptions: {
    routes: [
      {
        path: '/',
        children: [
          {
            name: '首页',
            path: 'home',
            component: Home,
          },
          {
            name: '系统组件',
            path: 'components',
            component: Components,
          },
        ],
      },
      {
        path: 'bbbb',
        meta: {
          name: 'bbbb',
        },
        component: Test,
      },
    ],
  },
})

const app = createAdmin({
  appMain: Main,
  appHome: Home,
  defaultMenuWidth: 300,
  menus,
  componentOptions: {
    router,
  },
  openHome () {
    console.info(1111)
  },
})

app.$router && console.info(app.$router.options)
