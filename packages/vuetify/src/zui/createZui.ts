import Vue from 'vue'
import Zui from '../framework'
import { GlobalVuetifyPreset } from '../../types/services/presets'
import { VuetifyThemeVariant } from '../../types/services/theme'
import { themeStore } from './services/theme'
import { ZMessageCore } from './ZMessage'
import { ZModalCore } from './ZModal'
import { ZuiCore } from './ZuiCore'

/**
 * 创建一个 Zui 实例，包含 $vuetify、$ui、$message、$modal
 * @param options
 */
export function createZui (options?: GlobalVuetifyPreset) {
  // 安装 vuetify
  Vue.use(Zui)

  // 安装 $message
  Vue.use(ZMessageCore)

  // 安装 $modal
  Vue.use(ZModalCore)

  // 安装 $ui
  Vue.use(ZuiCore)

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
