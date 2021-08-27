import Vue from 'vue'
import { ColorsOptions, ThemeCustomOptions } from '../../../types'
import { MainNavMode } from './MainNavMode'

const DefaultLightColors: ColorsOptions = {
  primary: '#1976D2',
  secondary: '#424242',
  accent: '#82B1FF',
  error: '#FF5252',
  info: '#2196F3',
  success: '#4CAF50',
  warning: '#FB8C00',
}

const DefaultDarkColors: ColorsOptions = {
  primary: '#2196F3',
  secondary: '#424242',
  accent: '#FF4081',
  error: '#FF5252',
  info: '#2196F3',
  success: '#4CAF50',
  warning: '#FB8C00',
}

const localTool = {
  key: '',
  getKey (): string {
    return `${this.key}-${'Theme-Options'.toLocaleUpperCase()}`
  },
  getLocalOptions (): ThemeCustomOptions {
    const themeJson = localStorage.getItem(this.getKey())
    try {
      return JSON.parse(themeJson || '{}')
    } catch (e) {
      // ignore
    }
    return {}
  },

  setLocalOptions (options: ThemeCustomOptions) {
    localStorage.setItem(this.getKey(), JSON.stringify(options))
  },
}

export const themeStore: ThemeCustomOptions = Vue.observable({
  /**
   * 暗色调颜色
   */
  darkColors: { ...DefaultDarkColors },

  /**
   * 亮色调颜色
   */
  lightColors: { ...DefaultLightColors },

  primaryColor: '',
  secondaryColor: '',
  accentColor: '',
  errorColor: '',
  infoColor: '',
  successColor: '',
  warningColor: '',

  /**
   * 开启暗色调
   */
  darkStatus: false,

  /**
   * 紧凑模式, 将会影响所有组件的紧凑模式
   * 1. true: 开启紧凑模式
   * 2. false: 关闭紧凑模式
   */
  denseMode: true,

  /**
   * 主菜单宽度
   */
  mainMenuWidth: 275,

  /**
   * 主菜单展开模式
   * 1. true: 允许展开多个
   * 2. false: 只能展开一个
   */
  mainMenuExpandMode: false,

  /**
   * 主导航(抽屉)模式:
   * 1. 'flex': 只能将菜单收缩起来, 将出现浮动菜单
   * 2. 'visible': 在顶部栏左侧出现一个按钮控制菜单的显示和隐藏
   */
  mainNavMode: MainNavMode.Visible,

  /**
   * 主导航(抽屉)显示位置
   * 1. 在顶部栏下方
   * 2. 在顶部栏左侧
   */
  mainNavPosition: true,

  /**
   * 主导航(抽屉)是否收起, 只会在mini模式时作用
   */
  mainNavMiniMode: false,

  /**
   * 主导航(抽屉)是否隐藏, 只会在非mini模式时作用
   */
  mainNavVisible: false,
})

/** @internal */
class ZuiThemeTool {
  /**
   * 设置暗色调颜色配置
   * @param options
   */
  settingDarkColor (options: ColorsOptions) {
    if (options) {
      themeStore.darkColors = {
        ...themeStore.darkColors,
        ...options,
      }
      this.updateColorByDark()
      localTool.setLocalOptions(themeStore)
    }
  }

  /**
   * 设置亮色调颜色配置
   * @param options
   */
  settingLightColor (options: ColorsOptions) {
    if (options) {
      themeStore.lightColors = {
        ...themeStore.lightColors,
        ...options,
      }
      this.updateColorByDark()
      localTool.setLocalOptions(themeStore)
    }
  }

  /**
   * 设置关键主题色，会区别当前色调
   */
  settingPrimaryColor (color: string) {
    if (themeStore.darkStatus) {
      themeStore.darkColors && (themeStore.darkColors.primary = color)
    } else {
      themeStore.lightColors && (themeStore.lightColors.primary = color)
    }
    themeStore.primaryColor = color
    localTool.setLocalOptions(themeStore)
  }

  /**
   * 更新当前色调下的所有主题色值
   */
  updateColorByDark () {
    themeStore.primaryColor = this.getColorByDark('primary')
    themeStore.secondaryColor = this.getColorByDark('secondary')
    themeStore.accentColor = this.getColorByDark('accent')
    themeStore.errorColor = this.getColorByDark('error')
    themeStore.infoColor = this.getColorByDark('info')
    themeStore.successColor = this.getColorByDark('success')
    themeStore.warningColor = this.getColorByDark('warning')
  }

  /**
   * 设置皮肤，可以只更新皮肤局部选项
   * @param options
   */
  settingTheme (options: ThemeCustomOptions) {
    if (options) {
      Object.keys(options).forEach(key => {
        (themeStore as any)[key] = (options as any)[key]
      })
      this.updateColorByDark()
      localTool.setLocalOptions(themeStore)
    }
  }

  /**
   * 设置html跟节点样式
   */
  settingHtmlClass () {
    const html: HTMLHtmlElement = document.documentElement as HTMLHtmlElement
    html.className = themeStore.darkStatus ? 'theme--dark' : 'theme--light'
  }

  /**
   * 加载本地数据，并初始化数据
   */
  loadLocalData (val = 'app') {
    localTool.key = val.toLocaleUpperCase()
    const { getBool } = this

    const localOptions = localTool.getLocalOptions()
    const darkStatus = getBool(localOptions.darkStatus, false)
    const darkColors = localOptions.darkColors || themeStore.darkColors || {}
    const lightColors = localOptions.lightColors || themeStore.lightColors || {}
    themeStore.darkColors = darkColors
    themeStore.lightColors = lightColors
    themeStore.darkStatus = darkStatus
    themeStore.denseMode = getBool(localOptions.denseMode, true)
    themeStore.mainNavMode = localOptions.mainNavMode || MainNavMode.Visible
    themeStore.mainNavPosition = getBool(localOptions.mainNavPosition, true)
    themeStore.mainNavMiniMode = getBool(localOptions.mainNavMiniMode, false)
    themeStore.mainNavVisible = getBool(localOptions.mainNavVisible, false)
    themeStore.mainMenuWidth = localOptions.mainMenuWidth || 275
    themeStore.mainMenuExpandMode = getBool(localOptions.mainNavVisible, false)

    this.updateColorByDark()

    if (themeStore.mainNavMode === MainNavMode.Visible) {
      themeStore.mainNavMiniMode = false
    }
  }

  private getBool (val: any, defaultValue: boolean): boolean {
    return typeof val === 'boolean' ? val : defaultValue
  }

  private getColorByDark (name: string): string {
    const darkColors: any = themeStore.darkColors || {}
    const lightColors: any = themeStore.lightColors || {}
    return (themeStore.darkStatus ? darkColors[name] : lightColors[name]) || ''
  }
}

export const themeTool = new ZuiThemeTool()
