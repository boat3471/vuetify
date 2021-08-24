import { VueConstructor } from 'vue'
import { UIOptions, ZuiCore as ZuiCoreType, ThemeColorsOptions, ThemeCustomOptions, AdminAuthOptions, AdminMainMenuOption } from '../../types'
import { DarkDefaultColors, LightDefaultColors, themeStore } from './services/theme'
import { UIEvent } from './UIEvent'

export class ZuiManager extends UIEvent {
  /**
   * App名称
   */
  get appName () {
    return ZuiManager.$options.appName || ''
  }

  /**
   * App编号
   */
  get appId () {
    return ZuiManager.$options.appId
  }

  /**
   * 获取主菜单列表
   */
  get menus (): AdminMainMenuOption[] {
    return ZuiManager.$menus
  }

  /**
   * 获取主菜单列表
   */
  get auth (): AdminAuthOptions {
    return ZuiManager.$auth
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
    return ZuiManager.$options.defaultSize || 's'
  }

  /**
   * 获取默认的提示背景色
   */
  get defaultTooltipColor (): string {
    return ZuiManager.$options.defaultTooltipColor || '#616161'
  }

  /**
   * 获取默认的提示背景色
   */
  get defaultTooltipSize (): string {
    return ZuiManager.$options.defaultTooltipSize || 's'
  }

  /**
   * 改变主题暗色
   */
  changeDark (status = false) {
    if (ZuiManager.$vuetifyInstalled) {
      // 更新vuetify
      ZuiManager.$vuetify.theme.dark = status

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
    if (ZuiManager.$vuetify && options) {
      if (options.darkColors) {
        const darkDefault = ZuiManager.$vuetify.theme.themes.dark || {}
        const dark = {
          ...options.darkColors,
          ...darkDefault,
        }
        ZuiManager.$vuetify.theme.themes.dark = dark
        themeStore.settingDarkColor(dark)
      }

      if (options.lightColors) {
        const lightDefault = ZuiManager.$vuetify.theme.themes.light || {}
        const light = {
          ...options.lightColors,
          ...lightDefault,
        }
        ZuiManager.$vuetify.theme.themes.light = light
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
      if (ZuiManager.$vuetify) {
        ZuiManager.$vuetify.theme.themes.dark.primary = color
        this.emit('changePrimaryColor', color)
      }
    } else {
      themeStore.settingLightColor({ primary: color })
      if (ZuiManager.$vuetify) {
        ZuiManager.$vuetify.theme.themes.light.primary = color
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
    const { openHome } = ZuiManager.$options as any

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
    const { openLogin } = ZuiManager.$options as any

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
  static $options: UIOptions = {};

  /** @internal */
  static $menus: AdminMainMenuOption[] = [];

  /** @internal */
  static $auth: AdminAuthOptions = {};

  /**
   * 设置UI配置
   * @internal
   * @param options
   */
  static setting (options: UIOptions) {
    ZuiManager.$options = options
    themeStore.settingThemeData(options.appId || 'app')
  }

  /**
   * 设置菜单配置信息
   * @internal
   * @param menus
   */
  static settingMenus (menus: AdminMainMenuOption[]) {
    ZuiManager.$menus = menus
  }

  /**
   * 设置认证配置信息
   * @internal
   * @param options
   */
  static settingAuth (options: AdminAuthOptions) {
    ZuiManager.$auth = options
  }

  static __installed = false

  static __instance: ZuiManager

  static genInstance (): ZuiManager {
    if (!ZuiManager.__instance) {
      ZuiManager.__instance = new ZuiManager()
    }
    return ZuiManager.__instance
  }

  install (Vue: VueConstructor) {
    Vue.mixin({
      beforeCreate () {
        const $options = this.$options
        if (!this.$ui) {
          this.$ui = ZuiManager.genInstance() as ZuiCoreType
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
 * 2. 可引入使用 `import {ZuiManager} = '@zwd/z-ui';`
 */
export const ZuiCore = ZuiManager.genInstance()
