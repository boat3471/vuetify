import Vue from 'vue'
import {
  ZuiOptions,
  ZuiCoreDescription,
  ZThemeColorsOptions,
  ZThemeCustomOptions,
  ZAuthOptions,
  ZMenuOption,
  ZuiGlobalPreset,
} from '../../types'
import { themeTool, themeStore } from './services/ZuiTheme'
import { UIEvent } from './events/UIEvent'
import { VuetifyThemeVariant } from '../../types/services/theme'
import { ZMenuClass } from './ZMenu'
import { ZRouterClass } from './ZRouter'
import { ZThemeClass } from './ZTheme'

export class ZuiCoreClass extends UIEvent implements ZuiCoreDescription {
  get $menu (): ZMenuClass {
    return ZMenuClass.genInstance()
  }

  get $router (): ZRouterClass {
    return ZRouterClass.genInstance()
  }

  get $theme (): ZThemeClass {
    return ZThemeClass.genInstance()
  }

  /**
   * App名称
   */
  get appName () {
    return ZuiCoreClass.$options.appName || ''
  }

  /**
   * App编号
   */
  get appId () {
    return ZuiCoreClass.$options.appId || ''
  }

  /**
   * 获取主菜单列表
   */
  get menus (): ZMenuOption[] {
    return ZMenuClass.__menusData
  }

  /**
   * 获取主菜单列表
   */
  get auth (): ZAuthOptions {
    return ZuiCoreClass.$auth
  }

  /**
   * 获取默认主题状态
   */
  get darkStatus (): boolean {
    return themeStore.darkStatus || false
  }

  /**
   * 获取默认主题大小
   */
  get defaultSize (): string {
    return ZuiCoreClass.$options.defaultSize || 's'
  }

  /**
   * 获取默认的提示背景色
   */
  get defaultTooltipColor (): string {
    return ZuiCoreClass.$options.defaultTooltipColor || '#616161'
  }

  /**
   * 获取默认的提示背景色
   */
  get defaultTooltipSize (): string {
    return ZuiCoreClass.$options.defaultTooltipSize || 's'
  }

  /**
   * 改变主题暗色
   */
  changeDark (status = false) {
    if (ZuiCoreClass.$vuetifyInstalled) {
      // 更新vuetify
      ZuiCoreClass.$vuetify.theme.dark = status

      // 更新store
      themeTool.settingTheme({
        darkStatus: status,
      })

      // 更新视图
      themeTool.settingHtmlClass()

      // 更新颜色
      themeTool.updateColorByDark()

      // 通知视图
      this.emit('changeDark', status)
    }
  }

  /**
   * 改变主题颜色
   * @param options
   */
  changeThemeColors (options: ZThemeColorsOptions) {
    if (ZuiCoreClass.$vuetify && options) {
      if (options.darkColors) {
        const darkDefault = ZuiCoreClass.$vuetify.theme.themes.dark || {}
        const dark = {
          ...options.darkColors,
          ...darkDefault,
        }
        ZuiCoreClass.$vuetify.theme.themes.dark = dark
        themeTool.settingDarkColor(dark)
      }

      if (options.lightColors) {
        const lightDefault = ZuiCoreClass.$vuetify.theme.themes.light || {}
        const light = {
          ...options.lightColors,
          ...lightDefault,
        }
        ZuiCoreClass.$vuetify.theme.themes.light = light
        themeTool.settingLightColor(light)
      }

      this.emit('changeThemeColors')
    }
  }

  /**
   * 改变关键主题色
   * @param color
   */
  changePrimaryColor (color: string) {
    themeTool.settingPrimaryColor(color)
    if (ZuiCoreClass.$vuetify) {
      if (this.darkStatus) {
        ZuiCoreClass.$vuetify.theme.themes.dark.primary = color
      } else {
        ZuiCoreClass.$vuetify.theme.themes.light.primary = color
      }
      this.emit('changePrimaryColor', color)
    }
  }

  /**
   * 改变主题
   * @param options
   */
  changeTheme (options: ZThemeCustomOptions) {
    themeTool.settingTheme(options)
    this.emit('changeTheme', options)
  }

  /**
   * 获取皮肤可响应对象
   */
  getThemeStore (): ZThemeCustomOptions {
    return themeStore
  }

  /**
   * 获取主颜色
   */
  getPrimaryColor (): string {
    return themeStore.primaryColor || ''
  }

  /**
   * 重置所有菜单激活状态
   */
  resetMenusActive (menus?: ZMenuOption[]) {
    (menus || this.menus).forEach(item => {
      item.active = false
      if (item.children && item.children.length > 0) {
        this.resetMenusActive(item.children)
      }
    })
  }

  /**
   * 根据展开模式，更新菜单激活状态
   * @param menu
   */
  updateMenusActiveByExpandMode (menu: ZMenuOption) {
    if (themeStore.mainMenuExpandMode) {
      return
    }
    const siblings = menu.parent ? (menu.parent.children || []) : this.menus
    siblings.forEach(m => {
      if (m.path !== menu.path && m.children && m.children.length > 0) {
        m.active = false
      }
    })
  }

  /**
   * 子级是否有选中的菜单
   * @param menu
   */
  isActiveChildren (menu: ZMenuOption): boolean {
    if (!menu.children || menu.children.length === 0) {
      return menu.active || false
    }
    let active = false
    menu.children.forEach(m => {
      if (!m.children || m.children.length === 0) {
        active = m.active || false
      } else {
        active = this.isActiveChildren(m)
      }
    })
    return active
  }

  /**
   * 回到首页
   */
  openHome () {
    const { openHome } = ZuiCoreClass.$options as any

    if (openHome) {
      openHome()
      return true
    }
    return false
  }

  /**
   * 回到登录页面
   */
  openLogin () {
    const { openLogin } = ZuiCoreClass.$options as any

    if (openLogin) {
      openLogin()
    }
  }

  static $app: Vue;

  /** @internal */
  static $vuetifyInstalled = false;

  /** @internal */
  static $vuetify: any = {
    theme: {
      dark: true,
    },
  };

  /** @internal */
  static $options: ZuiOptions = {};

  /** @internal */
  static $auth: ZAuthOptions = {};

  /**
   * 设置UI配置
   * @internal
   * @param options
   */
  static setting (options: ZuiOptions) {
    ZuiCoreClass.$options = options
    themeTool.loadLocalData(options.appId)
    themeTool.settingHtmlClass()
  }

  /**
   * 设置认证配置信息
   * @internal
   * @param options
   */
  static settingAuth (options: ZAuthOptions) {
    ZuiCoreClass.$auth = options
  }

  static getDefaultPreset (): ZuiGlobalPreset {
    return {
      theme: {
        dark: themeStore.darkStatus,
        themes: {
          dark: themeStore.darkColors as VuetifyThemeVariant,
          light: themeStore.lightColors as VuetifyThemeVariant,
        },
      },
    }
  }

  static __instance: ZuiCoreClass

  static genInstance (): ZuiCoreClass {
    if (!ZuiCoreClass.__instance) {
      ZuiCoreClass.__instance = new ZuiCoreClass()
    }
    return ZuiCoreClass.__instance
  }
}

/**
 * 全局通知实例:
 * 1. 可在vue组件内部使用 `this.$ui` <br>
 * 2. 可引入使用 `import {ZuiCore} = '@zwd/z-ui';`
 */
export const ZuiCore = ZuiCoreClass.genInstance()
