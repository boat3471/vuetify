import Vue, { ComponentOptions, CreateElement } from 'vue'
import VueRouter from 'vue-router'
import ZViewAdmin from './components/ZAdmin/ZViewAdmin'
import { CreateAdminOptions, Zui } from '../../types'

import { ZuiCoreClass, ZuiCore } from './ZuiCore'
import { createZui } from './createZui'

/**
 * 创建主程序
 * @internal
 * @param h
 * @param options
 */
function createMain (h: CreateElement, options: CreateAdminOptions) {
  return h(
    // 主视图, 及其选项
    ZViewAdmin,
    {
      staticClass: `z-app ${options.appClass || ''}`,
      props: {
        id: options.appId || 'app',
      },
    },
    // 子元素列表
    [
      options.appHome ? h(options.appHome) : null,
    ]
  )
}

/**
 * 创建Admin, 基于 @zwd/z-ui
 * @param options
 */
export function createAdmin (options: CreateAdminOptions): Vue {
  if (!options) {
    options = options || {}
  }
  // 安装 vue-router
  Vue.use(VueRouter)

  const { $menu, $router } = ZuiCore

  // 设置UI配置
  ZuiCoreClass.setting(options || {})
  // 设置认证
  ZuiCoreClass.settingAuth(options.auth || {})
  // 设置菜单
  $menu.settingMenus(options.menus || [], false)

  // 生成 vuetify and zui
  const ui = createZui(options.presetOptions, options.useOptions)
  ZuiCoreClass.$vuetify = ui.framework
  ZuiCoreClass.$vuetifyInstalled = true

  const componentOptions: ComponentOptions<any> = options.componentOptions || {}
  let router = componentOptions.router
  if (!router) {
    router = $router.createRouter(options.routerOptions || {}, options.menus || [])
  }

  $router.settingRouter(router)

  // 生成路由管理器（Router）

  // 生成 vue 选项
  const vueOptions: ComponentOptions<any> = {
    el: '#app',
    vuetify: ui as unknown as Zui,
    mounted () {
      console.info('app mounted')
    },
    render (h) {
      return createMain(h, options)
    },
    router,
    ...componentOptions,
  }

  ZuiCoreClass.$app = new Vue(vueOptions)
  return ZuiCoreClass.$app
}
