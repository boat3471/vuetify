import Vue, { ComponentOptions, CreateElement } from 'vue'
import { CreateAppOptions } from '../../types'
import { ZApp } from '../components'
import { ZuiCore } from './ZuiCore'
import './directives/install'
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
  ZuiCore.setting(options || {})
  const componentOptions: ComponentOptions<any> = options.componentOptions || {}
  const ui = createZui(options.vuetifyOptions)
  ZuiCore.$vuetify = ui.framework
  ZuiCore.$vuetifyInstalled = true
  ZuiCore.$app = new Vue({
    el: '#app',
    // @ts-ignore
    vuetify: ui,
    render (createElement) {
      return createMain(createElement, options)
    },
    ...componentOptions,
  })
  return ZuiCore.$app
}
