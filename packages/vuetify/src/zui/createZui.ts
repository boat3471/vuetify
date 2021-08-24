import Vue from 'vue'
import Zui from '../framework'
import { themeStore } from './services/theme'
import { GlobalVuetifyPreset } from '../../types/services/presets'
import { VuetifyThemeVariant } from '../../types/services/theme'

export function createZui (options?: GlobalVuetifyPreset) {
  Vue.use(Zui)
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
