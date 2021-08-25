import Vue from 'vue'
import Zui from '../framework'
import { ZuiGlobalPreset, ZuiUseOptions } from '../../types'
import { VuetifyThemeVariant } from '../../types/services/theme'
import { themeStore } from './services/theme'
import { ZMessageClass } from './ZMessage'
import { ZModalClass } from './ZModal'
import { ZuiToolClass } from './ZuiTool'

/**
 * 创建一个 Zui 实例，包含 $vuetify、$ui、$message、$modal
 */
export function createZui (options?: ZuiGlobalPreset, useOptions?: ZuiUseOptions) {
  // 安装 vuetify
  Vue.use(Zui, useOptions)

  // 安装 $message
  Vue.use(ZMessageClass)

  // 安装 $modal
  Vue.use(ZModalClass)

  // 安装 $ui
  Vue.use(ZuiToolClass)

  const { darkStatus, darkColors, lightColors } = themeStore.theme
  const html: HTMLHtmlElement = document.documentElement as HTMLHtmlElement
  html.className = darkStatus ? 'theme--dark' : 'theme--light'
  options = options || {}
  return new Zui({
    theme: {
      dark: darkStatus,
      themes: {
        dark: darkColors as VuetifyThemeVariant,
        light: lightColors as VuetifyThemeVariant,
      },
    },
    ...options,
  })
}
