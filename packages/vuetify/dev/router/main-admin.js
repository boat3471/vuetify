/* eslint-disable no-console, no-unused-vars, max-len */

import '@mdi/font/css/materialdesignicons.css'
import '../../dist/zui.css'
import { menus } from './admin/menus'
import { createAdmin } from '@zwd/z-ui'
import { router } from './admin/test-createAdminRouter'

const app = createAdmin({
  // appMain: Main,
  defaultMenuWidth: 300,
  defaultDense: true,
  menus,
  componentOptions: {
    router,
  },
  // openHome () {
  //   console.info(1111)
  // },
})

// app.$router && console.info(app.$router.options)

setTimeout(() => {
  app.$menu.settingMenus([
    {
      name: 'aaa',
      path: '/aaa',
      icon: 'mdi-view-dashboard-outline',
    },
    {
      name: 'bbb',
      path: '/bbb',
      icon: 'mdi-view-dashboard-outline',
    },
  ])
}, 3000)
