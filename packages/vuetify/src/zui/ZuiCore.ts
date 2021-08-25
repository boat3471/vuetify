import { VueConstructor } from 'vue'
import { UIOptions, ZuiTool as ZuiToolType, ThemeColorsOptions, ThemeCustomOptions, AdminAuthOptions, AdminMainMenuOption } from '../../types'
import { DarkDefaultColors, LightDefaultColors, themeStore } from './services/theme'
import { UIEvent } from './util/UIEvent'

export class ZuiCore extends UIEvent {
  /**
   * App名称
   */
  get appName () {
    return ZuiCore.$options.appName || ''
  }

  /**
   * App编号
   */
  get appId () {
    return ZuiCore.$options.appId
  }

  /**
   * 获取主菜单列表
   */
  get menus (): AdminMainMenuOption[] {
    return ZuiCore.$menus
  }

  /**
   * 获取主菜单列表
   */
  get auth (): AdminAuthOptions {
    return ZuiCore.$auth
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
    return ZuiCore.$options.defaultSize || 's'
  }

  /**
   * 获取默认的提示背景色
   */
  get defaultTooltipColor (): string {
    return ZuiCore.$options.defaultTooltipColor || '#616161'
  }

  /**
   * 获取默认的提示背景色
   */
  get defaultTooltipSize (): string {
    return ZuiCore.$options.defaultTooltipSize || 's'
  }

  /**
   * 改变主题暗色
   */
  changeDark (status = false) {
    if (ZuiCore.$vuetifyInstalled) {
      // 更新vuetify
      ZuiCore.$vuetify.theme.dark = status

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
    if (ZuiCore.$vuetify && options) {
      if (options.darkColors) {
        const darkDefault = ZuiCore.$vuetify.theme.themes.dark || {}
        const dark = {
          ...options.darkColors,
          ...darkDefault,
        }
        ZuiCore.$vuetify.theme.themes.dark = dark
        themeStore.settingDarkColor(dark)
      }

      if (options.lightColors) {
        const lightDefault = ZuiCore.$vuetify.theme.themes.light || {}
        const light = {
          ...options.lightColors,
          ...lightDefault,
        }
        ZuiCore.$vuetify.theme.themes.light = light
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
      if (ZuiCore.$vuetify) {
        ZuiCore.$vuetify.theme.themes.dark.primary = color
        this.emit('changePrimaryColor', color)
      }
    } else {
      themeStore.settingLightColor({ primary: color })
      if (ZuiCore.$vuetify) {
        ZuiCore.$vuetify.theme.themes.light.primary = color
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
    const { openHome } = ZuiCore.$options as any

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
    const { openLogin } = ZuiCore.$options as any

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
    ZuiCore.$options = options
    themeStore.settingThemeData(options.appId || 'app')
  }

  /**
   * 设置菜单配置信息
   * @internal
   * @param menus
   */
  static settingMenus (menus: AdminMainMenuOption[]) {
    ZuiCore.$menus = menus
  }

  /**
   * 设置认证配置信息
   * @internal
   * @param options
   */
  static settingAuth (options: AdminAuthOptions) {
    ZuiCore.$auth = options
  }

  static __instance: ZuiCore

  static genInstance (): ZuiCore {
    if (!ZuiCore.__instance) {
      ZuiCore.__instance = new ZuiCore()
    }
    return ZuiCore.__instance
  }

  static install (Vue: VueConstructor, options: any) {
    if ((ZuiCore.install as any).__installed) return
    (ZuiCore.install as any).__installed = true

    Vue.mixin({
      beforeCreate () {
        const $options = this.$options
        if (!this.$ui) {
          this.$ui = ZuiCore.genInstance() as ZuiToolType
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
export const ZuiTool = ZuiCore.genInstance()
