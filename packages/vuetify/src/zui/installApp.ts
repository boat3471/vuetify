import Vue, { ComponentOptions, CreateElement } from 'vue'
import { ZApp } from '../components/'
import { getVuetify } from './installVuetify'
import { ZMessageContainer } from './components/ZMessage'
import { UICore } from './UICore'
// import './installDirectives'
import { CreateAppOptions } from '@zwd/z-ui'

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
      createElement(ZMessageContainer),
    ]
  )
}

/**
 * 创建APP, 基于@zwd/z-ui
 * @param options
 */
export function createApp (options: CreateAppOptions): Vue {
  UICore.setting(options || {})
  const componentOptions: ComponentOptions<any> = options.componentOptions || {}
  const vuetify = getVuetify(options.vuetifyOptions)
  UICore.$vuetify = vuetify.framework
  UICore.$vuetifyInstalled = true
  UICore.$app = new Vue({
    el: '#app',
    vuetify,
    render (createElement) {
      return createMain(createElement, options)
    },
    ...componentOptions,
  })
  return UICore.$app
}
