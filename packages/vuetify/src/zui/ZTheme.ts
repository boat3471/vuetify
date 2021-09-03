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

export class ZThemeClass extends UIEvent implements ZThemeDescription {
  themeStore: ZThemeCustomOptions = {}

  constructor (appKey: string) {
    super()
    if (!instance) {
      instance = this
      ZThemeClass.appKey = ZThemeClass.appKey || appKey || 'com.zpmc.app'
      const darkStatus = ZThemeClass.getLocalOption('darkStatus', false)
      ZThemeClass.darkColors = ZThemeClass.getLocalOption('darkColors', DefaultDarkColors)
      ZThemeClass.lightColors = ZThemeClass.getLocalOption('lightColors', DefaultLightColors)
      this.themeStore = Vue.observable({
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

        /**
         * 紧凑模式, 将会影响所有组件的紧凑模式
         * 1. true: 开启紧凑模式
         * 2. false: 关闭紧凑模式
         */
        denseMode: ZThemeClass.getLocalOption('denseMode', true),

        /**
         * 主菜单宽度
         */
        mainMenuWidth: ZThemeClass.getLocalOption('mainMenuWidth', 275),

        /**
         * 主菜单展开模式
         * 1. true: 允许展开多个
         * 2. false: 只能展开一个
         */
        mainMenuExpandMode: ZThemeClass.getLocalOption('mainMenuExpandMode', false),

        /**
         * 主导航(抽屉)模式:
         * 1. 'flex': 只能将菜单收缩起来, 将出现浮动菜单
         * 2. 'visible': 在顶部栏左侧出现一个按钮控制菜单的显示和隐藏
         */
        mainNavMode: ZThemeClass.getLocalOption('mainNavMode', MainNavMode.Visible),

        /**
         * 主导航(抽屉)显示位置
         * 1. 在顶部栏下方
         * 2. 在顶部栏左侧
         */
        mainNavPosition: ZThemeClass.getLocalOption('mainNavPosition', true),

        /**
         * 主导航(抽屉)是否收起, 只会在mini模式时作用
         */
        mainNavMiniMode: ZThemeClass.getLocalOption('mainNavMiniMode', false),

        /**
         * 主导航(抽屉)是否隐藏, 只会在非mini模式时作用
         */
        mainNavVisible: ZThemeClass.getLocalOption('mainNavVisible', false),
      })
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

  /**
   * 设置暗色调颜色配置
   * @param options
   */
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

  /**
   * 设置亮色调颜色配置
   * @param options
   */
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

  /**
   * 设置关键主题色，会区别当前色调
   */
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
   * 设置皮肤，可以只更新皮肤局部选项
   * @param options
   */
  settingTheme (options: ZThemeCustomOptions) {
    if (options) {
      const themeStore = this.themeStore
      Object.keys(options).forEach(key => {
        (themeStore as any)[key] = (options as any)[key]
      })
      this.resetColor(themeStore.darkStatus || false)
      ZThemeClass.setLocalOptions(themeStore)

      this.emit('changeTheme', themeStore)
    }
  }

  /**
   * 设置html跟节点样式
   */
  settingHtmlClass (darkStatus: boolean) {
    const html: HTMLHtmlElement = document.documentElement as HTMLHtmlElement
    html.className = darkStatus ? 'theme--dark' : 'theme--light'
  }

  /**
   * 改变主题暗色
   */
  changeDark (status = false) {
    if (ZThemeClass.vuetifyInstalled) {
      // 更新vuetify
      ZThemeClass.vuetify.theme.dark = status

      // 更新store
      this.settingTheme({
        darkStatus: status,
      })

      // 更新视图
      this.settingHtmlClass(status)

      // 更新颜色
      this.resetColor(status)

      // 通知视图
      this.emit('changeDark', status)
    }
  }

  /**
   * 改变主题颜色
   * @param options
   */
  changeThemeColors (options: ZThemeColorsOptions) {
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

  /**
   * 获取主颜色
   */
  getPrimaryColor (): string {
    return this.themeStore.primaryColor || ''
  }

  getDefaultPreset (): ZuiGlobalPreset {
    return {
      theme: {
        dark: this.darkStatus,
        themes: {
          dark: ZThemeClass.darkColors as VuetifyThemeVariant,
          light: ZThemeClass.lightColors as VuetifyThemeVariant,
        },
      },
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
  private static themeJson: any = {}
  private static darkColors: ZColorsOptions = {}
  private static lightColors: ZColorsOptions = {}
  private static vuetifyInstalled = false
  private static vuetify: any = {
    theme: {
      dark: true,
    },
  };

  private static getLocalKey () {
    return `${ZThemeClass.appKey}-${'Theme-Options'.toLocaleUpperCase()}`
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
      default:
        return ZThemeClass.themeJson[name]
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

  public static genInstance (appKey?: string): ZThemeClass {
    if (!instance) {
      instance = new ZThemeClass(appKey || '')
    }
    return instance
  }
}
