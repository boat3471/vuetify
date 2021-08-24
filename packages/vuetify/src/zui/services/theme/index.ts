import { ColorsOptions, ThemeCustomOptions } from '@zwd/z-ui'

export const LightDefaultColors: ColorsOptions = {
  primary: '#1976D2',
  secondary: '#424242',
  accent: '#82B1FF',
  error: '#FF5252',
  info: '#2196F3',
  success: '#4CAF50',
  warning: '#FB8C00',
}

export const DarkDefaultColors: ColorsOptions = {
  primary: '#2196F3',
  secondary: '#424242',
  accent: '#FF4081',
  error: '#FF5252',
  info: '#2196F3',
  success: '#4CAF50',
  warning: '#FB8C00',
}

/**
 * 本地缓存键前缀
 */
let StorageKey = ''

/** @internal */
class ThemeStore {
    theme: ThemeCustomOptions = {};

    settingDarkColor (options: ColorsOptions) {
      if (options) {
        const theme = this.theme
        theme.darkColors = {
          ...theme.darkColors,
          ...options,
        }
        const storageKey = this.generateStorageKey('Theme-Options')
        localStorage.setItem(storageKey, JSON.stringify(theme))
      }
    }

    settingLightColor (options: ColorsOptions) {
      if (options) {
        const theme = this.theme
        theme.lightColors = {
          ...theme.lightColors,
          ...options,
        }
        const storageKey = this.generateStorageKey('Theme-Options')
        localStorage.setItem(storageKey, JSON.stringify(theme))
      }
    }

    settingTheme (options: ThemeCustomOptions) {
      if (options) {
        const theme = this.theme
        Object.keys(options).forEach(key => {
          (theme as any)[key] = (options as any)[key]
        })
        const storageKey = this.generateStorageKey('Theme-Options')
        localStorage.setItem(storageKey, JSON.stringify(theme))
      }
    }

    generateStorageKey (name: string) {
      return `${StorageKey}-${name.toLocaleUpperCase()}`
    }

    settingThemeData (appId: string) {
      StorageKey = appId.toLocaleUpperCase()

      const themeKey = this.generateStorageKey('Theme-Options')
      const themeJson = localStorage.getItem(themeKey)
      const theme: ThemeCustomOptions = JSON.parse(themeJson || '{}')
      const darkColor = theme.darkColors || {}
      const lightColor = theme.lightColors || {}
      const darkStatus = theme.darkStatus
      const denseMode = theme.denseMode
      const miniMenuMode = theme.miniMenuMode
      const menuDisplayMode = theme.menuDisplayMode
      const menuExpandMode = theme.menuExpandMode
      const menuWidth = theme.menuWidth
      const miniMenuLayout = theme.miniMenuLayout
      const menuVisible = theme.menuVisible

      this.theme = {
        darkColors: { ...DarkDefaultColors, ...darkColor },
        lightColors: { ...LightDefaultColors, ...lightColor },
        darkStatus: darkStatus === undefined ? false : darkStatus,
        denseMode: denseMode === undefined ? true : denseMode,
        miniMenuMode: miniMenuMode === undefined ? true : miniMenuMode,
        menuDisplayMode: menuDisplayMode === undefined ? true : menuDisplayMode,
        menuExpandMode: menuExpandMode === undefined ? false : menuExpandMode,
        menuWidth: menuWidth === undefined ? 275 : menuWidth,
        miniMenuLayout: miniMenuLayout === undefined ? false : miniMenuLayout,
        menuVisible: menuVisible === undefined ? true : menuVisible,
      }

      if (!this.theme.miniMenuMode) {
        this.theme.miniMenuLayout = false
      }
    }
}

export const themeStore = new ThemeStore()
