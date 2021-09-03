import Vue, { ComponentOptions, CreateElement } from 'vue'
import { CreateAppOptions, Zui } from '../../types'
import { ZApp } from '../components'
import { ZuiCoreClass } from './ZuiCore'
import { createZui } from './createZui'

/**
 * 创建主程序
 * @param createElement
 * @param options
 */
function createMain (createElement: CreateElement, options: CreateAppOptions) {
  return createElement(
    // 主视图
    options.appMain || ZApp,
    // 主视图配置选项
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
 * 创建APP, 基于@zwd/z-ui
 * @param options
 */
export function createApp (options: CreateAppOptions): Vue {
  if (!options) {
    options = options || {}
  }

  // 安装 zui-core
  Vue.use(ZuiCoreClass, options)

  const { $theme } = ZuiCoreClass.genInstance()
  const presetOptions = $theme.getDefaultPreset(options.presetOptions)
  const componentOptions: ComponentOptions<any> = options.componentOptions || {}
  const ui = createZui(presetOptions, options.useOptions)

  ZuiCoreClass.settingVuetify(ui.framework)
  ZuiCoreClass.$app = new Vue({
    el: options.appId || '#app',
    vuetify: ui as unknown as Zui,
    render (createElement) {
      return createMain(createElement, options)
    },
    ...componentOptions,
  })
  return ZuiCoreClass.$app
}
