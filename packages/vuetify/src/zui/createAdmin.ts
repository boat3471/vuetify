import Vue, { ComponentOptions, CreateElement } from 'vue'
import VueRouter from 'vue-router'
import ZViewAdmin from './components/ZAdmin/ZViewAdmin'
import { ZAdminOptions, Zui } from '../../types'
import { ZuiToolClass, ZuiTool } from './ZuiTool'
import { createZui } from './createZui'

Vue.use(VueRouter)

/**
 * 创建主程序
 * @internal
 * @param createElement
 * @param options
 */
function createMain (createElement: CreateElement, options: ZAdminOptions) {
  return createElement(
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
      options.appHome ? createElement(options.appHome) : null,
    ]
  )
}

/**
 * 创建Admin, 基于@zwd/z-ui
 * @param options
 */
export function createAdmin (options: ZAdminOptions): Vue {
  // 设置UI配置
  ZuiToolClass.setting(options || {})
  ZuiToolClass.settingAuth(options.auth || {})

  // 生成 vuetify
  const ui = createZui(options.presetOptions, options.useOptions)
  ZuiToolClass.$vuetify = ui.framework
  ZuiToolClass.$vuetifyInstalled = true

  // 生成路由配置
  const componentOptions: ComponentOptions<any> = options.componentOptions || {}
  const router = componentOptions.router

  // 创建vue选项
  const vueOptions: ComponentOptions<any> = {
    el: '#app',
    vuetify: ui as unknown as Zui,
    render (createElement) {
      return createMain(createElement, options)
    },
    ...componentOptions,
  }

  // 设置路由
  if (!router) {
    throw new Error('路由信息未配置, 使用 adminRouter 生成配置文件;')
  }

  ZuiTool.on('menuViewComplete', () => {
    ZuiTool.emit('initMenus')
  })

  ZuiToolClass.$app = new Vue(vueOptions)
  return ZuiToolClass.$app
}
