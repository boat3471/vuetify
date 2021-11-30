import Vue from 'vue'
import { ZThemeDescription } from '../../types/zui/ZTheme'
import { ZColorsOptions, ZThemeColorsOptions, ZThemeCustomOptions, ZuiGlobalPreset } from '../../types'
import { UIEvent } from './events/UIEvent'
import { VuetifyThemeVariant } from '../../types/services/theme'
import { MainNavMode } from './options'

const DefaultLightColors: ZColorsOptions = {
  primary: '#1976D2',
  secondary: '#424242',
  accent: '#82B1FF',
  error: '#FF5252',
  info: '#2196F3',
  success: '#4CAF50',
  warning: '#FB8C00',
}

const DefaultDarkColors: ZColorsOptions = {
  primary: '#2196F3',
  secondary: '#424242',
  accent: '#FF4081',
  error: '#FF5252',
  info: '#2196F3',
  success: '#4CAF50',
  warning: '#FB8C00',
}

let instance: ZThemeClass

interface DefaultOptions {
  mainMenuWidth?: number
}

export class ZThemeClass extends UIEvent implements ZThemeDescription {
  themeStore: ZThemeCustomOptions = {}

  constructor (appKey: string, options: DefaultOptions) {
    super()
    if (!instance) {
      instance = this
      ZThemeClass.appKey = ZThemeClass.appKey || appKey || 'com.zpmc.app'
      const darkStatus = ZThemeClass.getLocalOption('darkStatus', false)
      ZThemeClass.darkColors = ZThemeClass.getLocalOption('darkColors', DefaultDarkColors)
      ZThemeClass.lightColors = ZThemeClass.getLocalOption('lightColors', DefaultLightColors)
      this.themeStore = Vue.observable<ZThemeCustomOptions>(
        {
          darkStatus,

          darkColors: ZThemeClass.darkColors,
          lightColors: ZThemeClass.lightColors,

          primaryColor: ZThemeClass.getColor('primary', darkStatus),
          secondaryColor: ZThemeClass.getColor('secondary', darkStatus),
          accentColor: ZThemeClass.getColor('accent', darkStatus),
          errorColor: ZThemeClass.getColor('error', darkStatus),
          infoColor: ZThemeClass.getColor('info', darkStatus),
          successColor: ZThemeClass.getColor('success', darkStatus),
          warningColor: ZThemeClass.getColor('warning', darkStatus),
          denseMode: ZThemeClass.getLocalOption('denseMode', true),
          mainMenuWidth: ZThemeClass.getLocalOption('mainMenuWidth', options.mainMenuWidth || 275),
          mainMenuExpandMode: ZThemeClass.getLocalOption('mainMenuExpandMode', false),
          mainNavMode: ZThemeClass.getLocalOption('mainNavMode', MainNavMode.Visible),
          mainNavPosition: ZThemeClass.getLocalOption('mainNavPosition', true),
          mainNavMiniMode: ZThemeClass.getLocalOption('mainNavMiniMode', true),
          mainNavVisible: ZThemeClass.getLocalOption('mainNavVisible', false),

          footerVisible: ZThemeClass.getLocalOption('footerVisible', false),
          appBarVisible: ZThemeClass.getLocalOption('appBarVisible', false),
          cameraModel: ZThemeClass.getLocalOption('cameraModel', false),
        }
      )
      this.settingHtmlClass(darkStatus)
      if (this.themeStore.mainNavMode === MainNavMode.Visible) {
        this.themeStore.mainNavMiniMode = false
      }
    }
    return instance
  }

  get mainNavMiniMode (): boolean {
    return this.themeStore.mainNavMiniMode || false
  }

  get darkStatus (): boolean {
    return this.themeStore.darkStatus || false
  }

  settingTheme (options: ZThemeCustomOptions) {
    if (options) {
      const themeStore = this.themeStore
      Object.keys(options).forEach(key => {
        (themeStore as any)[key] = (options as any)[key]
      })

      this.settingDarkStatus(themeStore.darkStatus)
      this.settingPrimaryColor(themeStore.primaryColor || '')
      ZThemeClass.setLocalOptions(themeStore)

      this.emit('changeTheme', themeStore)
    }
  }

  settingDarkColor (options: ZColorsOptions) {
    if (options) {
      const darkColors: any = this.themeStore.darkColors
      Object.keys(options).forEach(key => {
        darkColors[key] = (options as any)[key]
      })
      this.resetColor(this.themeStore.darkStatus || false)
      ZThemeClass.setLocalOptions(this.themeStore)

      // 更新vuetify
    }
  }

  settingLightColor (options: ZColorsOptions) {
    if (options) {
      const lightColors: any = this.themeStore.lightColors
      Object.keys(options).forEach(key => {
        lightColors[key] = (options as any)[key]
      })
      this.resetColor(this.themeStore.darkStatus || false)
      ZThemeClass.setLocalOptions(this.themeStore)

      // 更新vuetify
    }
  }

  settingThemeColors (options: ZThemeColorsOptions) {
    if (ZThemeClass.vuetify && options) {
      if (options.darkColors) {
        const darkDefault = ZThemeClass.vuetify.theme.themes.dark || {}
        const dark = {
          ...options.darkColors,
          ...darkDefault,
        }
        ZThemeClass.vuetify.theme.themes.dark = dark
        this.settingDarkColor(dark)
      }

      if (options.lightColors) {
        const lightDefault = ZThemeClass.vuetify.theme.themes.light || {}
        const light = {
          ...options.lightColors,
          ...lightDefault,
        }
        ZThemeClass.vuetify.theme.themes.light = light
        this.settingLightColor(light)
      }

      this.emit('changeThemeColors')
    }
  }

  settingPrimaryColor (color: string) {
    const { darkStatus, darkColors, lightColors } = this.themeStore
    if (darkStatus) {
      darkColors && (darkColors.primary = color)
    } else {
      lightColors && (lightColors.primary = color)
    }
    this.themeStore.primaryColor = color
    ZThemeClass.setLocalOptions(this.themeStore)

    // 更新vuetify
    if (ZThemeClass.vuetify) {
      if (this.darkStatus) {
        ZThemeClass.vuetify.theme.themes.dark.primary = color
      } else {
        ZThemeClass.vuetify.theme.themes.light.primary = color
      }
      this.emit('changePrimaryColor', color)
    }
  }

  /**
   * 设置html跟节点样式
   */
  settingHtmlClass (darkStatus: boolean) {
    const html: HTMLHtmlElement = document.documentElement as HTMLHtmlElement
    html.className = darkStatus ? 'theme--dark' : 'theme--light'
  }

  settingDarkStatus (status = false) {
    if (ZThemeClass.vuetifyInstalled) {
      // 更新vuetify
      ZThemeClass.vuetify.theme.dark = status

      // 更新store
      this.themeStore.darkStatus = status

      // 更新视图
      this.settingHtmlClass(status)

      // 更新颜色
      this.resetColor(status)

      // 更新本地记录
      ZThemeClass.setLocalOptions(this.themeStore)

      // 通知视图
      this.emit('changeDark', status)
    }
  }

  getPrimaryColor (): string {
    return this.themeStore.primaryColor || ''
  }

  getDefaultPreset (options?: ZuiGlobalPreset): ZuiGlobalPreset {
    return {
      theme: {
        dark: this.darkStatus,
        themes: {
          dark: ZThemeClass.darkColors as VuetifyThemeVariant,
          light: ZThemeClass.lightColors as VuetifyThemeVariant,
        },
      },
      ...options,
    }
  }

  resetColor (darkStatus: boolean) {
    const options = this.themeStore
    options.primaryColor = ZThemeClass.getColor('primary', darkStatus)
    options.secondaryColor = ZThemeClass.getColor('secondary', darkStatus)
    options.accentColor = ZThemeClass.getColor('accent', darkStatus)
    options.errorColor = ZThemeClass.getColor('error', darkStatus)
    options.infoColor = ZThemeClass.getColor('info', darkStatus)
    options.successColor = ZThemeClass.getColor('success', darkStatus)
    options.warningColor = ZThemeClass.getColor('warning', darkStatus)
  }

  private static appKey = ''
  private static themeJson: any = null
  private static darkColors: ZColorsOptions = {}
  private static lightColors: ZColorsOptions = {}
  private static vuetifyInstalled = false
  private static vuetify: any = {
    theme: {
      dark: true,
    },
  };

  private static getLocalKey () {
    return `${ZThemeClass.appKey.toLocaleUpperCase()}-${'Theme-Options'.toLocaleUpperCase()}`
  }

  private static getLocalOption (name: string, defaultValue: any): any {
    if (!ZThemeClass.themeJson) {
      const themeJson = localStorage.getItem(ZThemeClass.getLocalKey())
      try {
        ZThemeClass.themeJson = JSON.parse(themeJson || '{}')
      } catch (e) {
        ZThemeClass.themeJson = {}
      }
    }
    const value = ZThemeClass.themeJson[name]
    switch (typeof defaultValue) {
      case 'object':
        return {
          ...defaultValue,
          ...value,
        }
      case 'boolean':
        return typeof value === 'boolean' ? value : defaultValue
      case 'number':
        return typeof value === 'number' ? value : defaultValue
      default:
        return value || defaultValue
    }
  }

  private static setLocalOptions (options: ZThemeCustomOptions) {
    localStorage.setItem(ZThemeClass.getLocalKey(), JSON.stringify(options))
  }

  private static getColor (name: string, darkStatus: boolean): string {
    const darkColors: any = ZThemeClass.darkColors || {}
    const lightColors: any = ZThemeClass.lightColors || {}
    return (darkStatus ? darkColors[name] : lightColors[name]) || ''
  }

  static settingVuetify (vuetify: any) {
    ZThemeClass.vuetify = vuetify
    ZThemeClass.vuetifyInstalled = true
  }

  public static genInstance (): ZThemeClass {
    if (!instance) {
      const message = 'Zui Uninitialized, Please use the createApp/createAdmin, Initialize your app！'
      window.console.error(message)
      throw new Error(message)
    }
    return instance
  }
}
