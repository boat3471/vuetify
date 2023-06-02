import Vue, { ComponentOptions, CreateElement, VNode } from 'vue'
import { CreateAppOptions, RouteComponent, Zui } from '../../types'
import { ZuiCoreClass } from './ZuiCore'
import { ZRouterCore } from './ZRouter'
import { createZui } from './createZui'
import { ZApp } from '../components/VApp/ZApp'

/**
 * 创建主程序
 */
function createMain (
  h: CreateElement,
  options: CreateAppOptions,
  appMain?: RouteComponent,
  appHome?: RouteComponent,
  isRenderRouterView = false
) {
  options = options || {}
  const children: VNode = isRenderRouterView
    ? h('RouterView')
    : appHome ? h(appHome) : h('')
  return h(appMain || ZApp, {
    staticClass: `z-app ${options.appClass || ''}`,
    props: {
      id: options.appId || 'app',
    },
  }, [children])
}

/**
 * 创建APP, 基于@zwd/z-ui
 * @param options
 */
export function createApp (options: CreateAppOptions): Vue {
  options = options || {}

  ZuiCoreClass.type = 'app'

  // 安装 zui-core
  Vue.use(ZuiCoreClass, options)

  const { $theme } = ZuiCoreClass.genInstance()
  const presetOptions = $theme.getDefaultPreset(options.presetOptions)
  const ui = createZui(presetOptions, options.useOptions)
  ZuiCoreClass.settingVuetify(ui.framework)

  const componentOptions: ComponentOptions<any> = options.componentOptions || {}

  const appRouter = ZRouterCore.appRouter

  let appMain: RouteComponent | undefined
  let appHome: RouteComponent | undefined
  let isRenderRouterView = false

  if (appRouter) {
    appMain = appRouter.appMain
    appHome = appRouter.appHome
    isRenderRouterView = appRouter.isRenderRouterView
  }

  // 如果用户传了自定义的 router
  if (componentOptions.router) {
    ZRouterCore.router = componentOptions.router
  } else {
    appMain = options.appMain
    appHome = options.appHome
    isRenderRouterView = false
  }

  // 如果存在路由，但未设置appMain和appHome，则使用options中的配置；
  appMain = appMain || options.appMain
  appHome = appHome || options.appHome

  ZuiCoreClass.$app = new Vue({
    el: options.appId || '#app',
    vuetify: ui as unknown as Zui,
    render (createElement) {
      return createMain(createElement, options, appMain, appHome, isRenderRouterView)
    },
    ...componentOptions,
  })
  return ZuiCoreClass.$app
}
