import Vue, { ComponentOptions, CreateElement } from 'vue'
import { ZAdminApp } from './components/ZAdmin'
import { CreateAdminOptions, RouteComponent, Zui } from '../../types'

import { ZuiCoreClass } from './ZuiCore'
import { createZui } from './createZui'
import { ZRouterCore } from './ZRouter'
import { installRouter } from './util/installRouter'

/**
 * 创建主程序
 * @internal
 */
function createMain (h: CreateElement, options: CreateAdminOptions, appMain?: any, appHome?: RouteComponent) {
  const Content = appMain || appHome
  return h(ZAdminApp, {
    staticClass: `z-app ${options.appClass || ''}`,
    props: {
      id: options.appId || 'app',
    },
  },
  [Content ? h(Content) : null]
  )
}

/**
 * 创建Admin, 基于 @zwd/z-ui
 * @param options
 */
export function createAdmin (options: CreateAdminOptions): Vue {
  options = options || {}

  ZuiCoreClass.type = 'admin'

  // 安装 vue-router
  installRouter()

  // 安装 zui-core
  Vue.use(ZuiCoreClass, options)

  const { $menu, $theme, $auth } = ZuiCoreClass.genInstance()

  // 设置认证
  $auth.setting(options.auth || {})

  // 设置菜单
  $menu.settingMenus(options.menus || [])

  // 设置 vuetify and zui
  const presetOptions = $theme.getDefaultPreset(options.presetOptions)
  const ui = createZui(presetOptions, options.useOptions)
  ZuiCoreClass.settingVuetify(ui.framework)

  const componentOptions: ComponentOptions<any> = options.componentOptions || {}

  const adminRouter = ZRouterCore.adminRouter || ZRouterCore.genAdminRouter({
    appMain: options.appMain,
    appHome: options.appHome,
    redirect: options.redirect,
    router: componentOptions.router,
  })

  let router = componentOptions.router

  if (adminRouter) {
    router = adminRouter.getRouter()
  }

  if (router) {
    componentOptions.router = router
    ZRouterCore.router = router
  }

  ZuiCoreClass.$app = new Vue({
    el: options.appId || '#app',
    vuetify: ui as unknown as Zui,
    render (h) {
      const appMain = adminRouter.appMain || options.appMain
      const appHome = adminRouter.appHome || options.appHome
      return createMain(h, options, appMain, appHome)
    },
    ...componentOptions,
  })
  return ZuiCoreClass.$app
}
