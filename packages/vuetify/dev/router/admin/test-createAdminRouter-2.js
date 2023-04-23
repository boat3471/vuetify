import { createAdminRouter } from '@zwd/z-ui'
import { menus } from './menus'
import Main from './Main.vue'
import Home from './Home.vue'

import Components from './Components.vue'
import Test from './Test.vue'

export const router = createAdminRouter({
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
