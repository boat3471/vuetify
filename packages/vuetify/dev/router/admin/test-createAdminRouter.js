// import { createAdminRouter } from '@zwd/z-ui'
import Vue from 'vue'
import VueRouter from 'vue-router'
// import { menus } from './menus'
// import App from './App.vue'
import Test from './Test.vue'
import Test1 from './Test1.vue'

// export const router = createAdminRouter({
//   // menus,
//   // redirect: '/eee/eee-1/eee-1-1/eee-1-1-1',
//   // redirect: 'aaa',
//   routerOptions: {
//     routes: [
//       // {
//       //   path: '',
//       //   component: App,
//       //   meta: {
//       //     a: 'home',
//       //   },
//       // },
//       {
//         name: 'aaa',
//         path: '/aaa',
//         component: Test,
//       },
//       {
//         name: 'bbb',
//         path: '/bbb',
//         component: Test1,
//       },
//       // {
//       //   path: 'aaaa',
//       //   component: App,
//       //   meta: {
//       //     a: 'aaaa',
//       //   },
//       //   children: [
//       //     {
//       //       path: 'aaaa',
//       //       component: App,
//       //       meta: {
//       //         a: 'aaaa-aaaa',
//       //       },
//       //     },
//       //     {
//       //       path: '/aaaa1',
//       //       component: App,
//       //       meta: {
//       //         a: 'aaaa-aaaa',
//       //       },
//       //     },
//       //   ],
//       // },
//     ],
//   },
// })

Vue.use(VueRouter)
export const router = new VueRouter({
  routes: [
    {
      path: '/bbb',
      component: Test1,
    },
    {
      path: '/aaa',
      component: Test,
    },
  ],
})
