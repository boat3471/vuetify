import { createRouter } from '@zwd/z-ui'

import Main from './Main.vue'
import Home from './Home.vue'

export const router = createRouter({
  appMain: Main,
  appHome: Home,
  appNotFound: true,
  routerOptions: {
    routes: [
      // { name: 'aaa', path: '/aaa', meta: { a: 2 }, component: () => import('./A.vue') },
      {
        name: 'root',
        path: '/',
        meta: { a: 'root' },
        component: Home,
        children: [
          { name: 'aaa', path: '/aaa', meta: { a: 'aaa' }, component: () => import('./A.vue') },
          { name: 'bbb', path: '/bbb', meta: { a: 'bbb' }, component: () => import('./B.vue') },
        ],
      },
    ],
  },
})
