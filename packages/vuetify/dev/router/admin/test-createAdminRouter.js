import { createAdminRouter } from '@zwd/z-ui'
import { menus } from './menus'
import App from './App.vue'

export const router = createAdminRouter({
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
