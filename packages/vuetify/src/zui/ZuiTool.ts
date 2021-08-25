import { VueConstructor } from 'vue'
import { ZuiOptions, ZuiToolDescription, ThemeColorsOptions, ThemeCustomOptions, ZAuthOptions, ZMainMenuOption } from '../../types'
import { DarkDefaultColors, LightDefaultColors, themeStore } from './services/theme'
import { UIEvent } from './util/UIEvent'

export class ZuiToolClass extends UIEvent {
  /**
   * App名称
   */
  get appName () {
    return ZuiToolClass.$options.appName || ''
  }

  /**
   * App编号
   */
  get appId () {
    return ZuiToolClass.$options.appId
  }

  /**
   * 获取主菜单列表
   */
  get menus (): ZMainMenuOption[] {
    return ZuiToolClass.$menus
  }

  /**
   * 获取主菜单列表
   */
  get auth (): ZAuthOptions {
    return ZuiToolClass.$auth
  }

  /**
   * 获取默认主题状态
   */
  get darkStatus (): boolean {
    return themeStore.theme.darkStatus || false
  }

  /**
   * 获取默认主题大小
   */
  get defaultSize (): string {
    return ZuiToolClass.$options.defaultSize || 's'
  }

  /**
   * 获取默认的提示背景色
   */
  get defaultTooltipColor (): string {
    return ZuiToolClass.$options.defaultTooltipColor || '#616161'
  }

  /**
   * 获取默认的提示背景色
   */
  get defaultTooltipSize (): string {
    return ZuiToolClass.$options.defaultTooltipSize || 's'
  }

  /**
   * 改变主题暗色
   */
  changeDark (status = false) {
    if (ZuiToolClass.$vuetifyInstalled) {
      // 更新vuetify
      ZuiToolClass.$vuetify.theme.dark = status

      // 更新store
      themeStore.settingTheme({
        darkStatus: status,
      })

      // 更新视图
      const html: HTMLHtmlElement = document.documentElement as HTMLHtmlElement
      html.className = status ? 'theme--dark' : 'theme--light'

      // 切换颜色

      // 通知视图
      this.emit('changeDark', status)
    }
  }

  /**
   * 改变主题颜色
   * @param options
   */
  changeThemeColors (options: ThemeColorsOptions) {
    if (ZuiToolClass.$vuetify && options) {
      if (options.darkColors) {
        const darkDefault = ZuiToolClass.$vuetify.theme.themes.dark || {}
        const dark = {
          ...options.darkColors,
          ...darkDefault,
        }
        ZuiToolClass.$vuetify.theme.themes.dark = dark
        themeStore.settingDarkColor(dark)
      }

      if (options.lightColors) {
        const lightDefault = ZuiToolClass.$vuetify.theme.themes.light || {}
        const light = {
          ...options.lightColors,
          ...lightDefault,
        }
        ZuiToolClass.$vuetify.theme.themes.light = light
        themeStore.settingLightColor(light)
      }

      this.emit('changeThemeColors')
    }
  }

  /**
   * 改变关键主题色
   * @param color
   */
  changePrimaryColor (color: string) {
    const { darkStatus } = themeStore.theme
    if (darkStatus) {
      themeStore.settingDarkColor({ primary: color })
      if (ZuiToolClass.$vuetify) {
        ZuiToolClass.$vuetify.theme.themes.dark.primary = color
        this.emit('changePrimaryColor', color)
      }
    } else {
      themeStore.settingLightColor({ primary: color })
      if (ZuiToolClass.$vuetify) {
        ZuiToolClass.$vuetify.theme.themes.light.primary = color
        this.emit('changePrimaryColor', color)
      }
    }
  }

  /**
   * 改变主题
   * @param options
   */
  changeTheme (options: ThemeCustomOptions) {
    themeStore.settingTheme(options)
    this.emit('changeTheme', options)
  }

  /**
   * 获取主题选项
   */
  getThemeOptions (): ThemeCustomOptions {
    return themeStore.theme
  }

  /**
   * 获取主颜色
   */
  getPrimaryColor (): string {
    const { darkStatus, darkColors, lightColors } = themeStore.theme
    if (darkStatus) {
      if (darkColors && darkColors.primary) {
        return darkColors.primary
      }
      return DarkDefaultColors.primary || ''
    }
    if (lightColors && lightColors.primary) {
      return lightColors.primary
    }
    return LightDefaultColors.primary || ''
  }

  /**
   * 回到首页
   */
  openHome () {
    const { openHome } = ZuiToolClass.$options as any

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
    const { openLogin } = ZuiToolClass.$options as any

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
  static $menus: ZMainMenuOption[] = [];

  /** @internal */
  static $auth: ZAuthOptions = {};

  /**
   * 设置UI配置
   * @internal
   * @param options
   */
  static setting (options: ZuiOptions) {
    ZuiToolClass.$options = options
    themeStore.settingThemeData(options.appId || 'app')
  }

  /**
   * 设置菜单配置信息
   * @internal
   * @param menus
   */
  static settingMenus (menus: ZMainMenuOption[]) {
    ZuiToolClass.$menus = menus
  }

  /**
   * 设置认证配置信息
   * @internal
   * @param options
   */
  static settingAuth (options: ZAuthOptions) {
    ZuiToolClass.$auth = options
  }

  static __instance: ZuiToolClass

  static genInstance (): ZuiToolClass {
    if (!ZuiToolClass.__instance) {
      ZuiToolClass.__instance = new ZuiToolClass()
    }
    return ZuiToolClass.__instance
  }

  static install (Vue: VueConstructor, options: any) {
    if ((ZuiToolClass.install as any).__installed) return
    (ZuiToolClass.install as any).__installed = true

    Vue.mixin({
      beforeCreate () {
        const $options = this.$options
        if (!this.$ui) {
          this.$ui = ZuiToolClass.genInstance() as ZuiToolDescription
        } else {
          $options.parent && (this.$ui = $options.parent.$ui)
        }
      },
    })
  }
}

/**
 * 全局通知实例:
 * 1. 可在vue组件内部使用 `this.$ui` <br>
 * 2. 可引入使用 `import {ZuiTool} = '@zwd/z-ui';`
 */
export const ZuiTool = ZuiToolClass.genInstance()
