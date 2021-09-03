import '@mdi/font/css/materialdesignicons.css'
import '../dist/vuetify.css'
import App from './App'
import Test from './Test'
import Test1 from './Test1'
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

import { createAdmin, createMenus, ZMenu } from '@zwd/z-ui'

const menus = createMenus([
  {
    name: '仪表盘',
    path: 'aaa',
    component: Test,
    icon: 'mdi-view-dashboard-outline',
  },
  {
    name: 'Components',
    path: 'bbb',
    component: Test,
    icon: 'mdi-cube-outline',
    children: [
      {
        name: 'Buttons',
        path: 'bbb-1',
        component: Test,
        icon: 'mdi-palette-outline',
        children: [
          {
            name: 'Ji Mei Button',
            path: 'bbb-1-1',
            component: Test,
            icon: 'mdi-map',
            children: [
              {
                name: 'bbb-1-1-1',
                path: 'bbb-1-1-1',
                icon: 'mdi-account-multiple-outline',
                component: Test,
              },
              {
                name: 'bbb-1-1-2',
                path: 'bbb-1-1-2',
                component: Test,
              },
            ],
          },
          {
            name: 'Yu Ge Button',
            path: 'bbb-1-2',
            component: Test,
          },
        ],
      },
      {
        name: 'Tables',
        path: 'bbb-2',
        component: Test,
        children: [
          {
            name: 'bbb-2-1',
            path: 'bbb-2-1',
            component: Test,
          },
          {
            name: 'bbb-2-2',
            path: 'bbb-2-2',
            component: Test,
          },
        ],
      },
      {
        name: 'Charts',
        path: 'bbb-3',
        component: Test,
        icon: 'mdi-chart-bar-stacked',
      },
    ],
  },
  {
    name: 'Charts',
    path: 'ccc',
    icon: 'mdi-chart-bar-stacked',
    children: [
      {
        name: 'ccc-1',
        path: 'ccc-1',
        children: [
          {
            name: 'ccc-1-1',
            path: 'ccc-1-1',
            component: Test1,
          },
        ],
      },
    ],
  },
  {
    name: 'Filters',
    path: 'ddd',
    href: 'http://www.baidu.com',
    icon: 'mdi-one-up',
  },
  {
    name: 'Components',
    path: 'eee',
    component: Test,
    icon: 'mdi-cube-outline',
    children: [
      {
        name: 'Buttons',
        path: 'eee-1',
        component: Test,
        icon: 'mdi-palette-outline',
        children: [
          {
            name: 'Ji Mei Button',
            path: 'eee-1-1',
            component: Test,
            icon: 'mdi-map',
            children: [
              {
                name: 'eee-1-1-1',
                path: 'eee-1-1-1',
                icon: 'mdi-account-multiple-outline',
                component: Test,
              },
              {
                name: 'eee-1-1-2',
                path: 'eee-1-1-2',
                component: Test,
              },
            ],
          },
          {
            name: 'Yu Ge Button',
            path: 'eee-1-2',
            component: Test,
          },
        ],
      },
      {
        name: 'Tables',
        path: 'eee-2',
        component: Test,
        children: [
          {
            name: 'eee-2-1',
            path: 'eee-2-1',
            component: Test,
          },
          {
            name: 'eee-2-2',
            path: 'eee-2-2',
            component: Test,
          },
        ],
      },
      {
        name: 'Charts',
        path: 'eee-3',
        component: Test,
        icon: 'mdi-chart-bar-stacked',
      },
    ],
  },
])
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

createAdmin({
  appHome: App,
  menus,
  routerOptions: {
  },
  componentOptions: {
    mounted () {
    },
  },
})
