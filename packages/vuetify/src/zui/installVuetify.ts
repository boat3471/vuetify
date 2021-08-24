import Vue from 'vue'
import { Zui } from '@zwd/z-ui'

// import '../styles/vuetify.scss'
// import '@mdi/font/css/materialdesignicons.css'

import { themeStore } from './services/theme/'
import { GlobalVuetifyPreset } from '@zwd/z-ui/types/services/presets'
import { VuetifyThemeVariant } from '@zwd/z-ui/types/services/theme'

Vue.use(Zui)

export function getVuetify (options?: GlobalVuetifyPreset) {
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
    icons: {},
    ...options,
  })
}
