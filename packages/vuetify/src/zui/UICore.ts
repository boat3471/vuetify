import { DarkDefaultColors, LightDefaultColors, themeStore } from './services/theme'
import { UIEvent } from './UIEvent'
import { UIOptions } from '@zwd/z-ui'
import { ThemeColorsOptions, ThemeCustomOptions } from '@zwd/z-ui'
import { AdminAuthOptions, AdminMainMenuOption } from '@zwd/z-ui'

export class UICore extends UIEvent {
  /**
   * 改变主题暗色
   */
  changeDark (status = false) {
    if (UICore.$vuetifyInstalled) {
      // 更新vuetify
      UICore.$vuetify.theme.dark = status

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
    if (UICore.$vuetify && options) {
      if (options.darkColors) {
        const darkDefault = UICore.$vuetify.theme.themes.dark || {}
        const dark = {
          ...options.darkColors,
          ...darkDefault,
        }
        UICore.$vuetify.theme.themes.dark = dark
        themeStore.settingDarkColor(dark)
      }

      if (options.lightColors) {
        const lightDefault = UICore.$vuetify.theme.themes.light || {}
        const light = {
          ...options.lightColors,
          ...lightDefault,
        }
        UICore.$vuetify.theme.themes.light = light
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
      if (UICore.$vuetify) {
        UICore.$vuetify.theme.themes.dark.primary = color
        this.emit('changePrimaryColor', color)
      }
    } else {
      themeStore.settingLightColor({ primary: color })
      if (UICore.$vuetify) {
        UICore.$vuetify.theme.themes.light.primary = color
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
   * 获取默认主题状态
   */
  get darkStatus (): boolean {
    return themeStore.theme.darkStatus || false
  }

  /**
   * 获取默认主题大小
   */
  get defaultSize (): string {
    return UICore.$options.defaultSize || 's'
  }

  /**
   * 获取默认的提示背景色
   */
  get defaultTooltipColor (): string {
    return UICore.$options.defaultTooltipColor || '#616161'
  }

  /**
   * 获取默认的提示背景色
   */
  get defaultTooltipSize (): string {
    return UICore.$options.defaultTooltipSize || 's'
  }

  /**
   * App名称
   */
  get appName () {
    return UICore.$options.appName || ''
  }

  /**
   * App编号
   */
  get appId () {
    return UICore.$options.appId
  }

  /**
   * 获取主菜单列表
   */
  get menus (): AdminMainMenuOption[] {
    return UICore.$menus
  }

  /**
   * 获取主菜单列表
   */
  get auth (): AdminAuthOptions {
    return UICore.$auth
  }

  /**
   * 回到首页
   */
  openHome () {
    const { openHome } = UICore.$options as any

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
    const { openLogin } = UICore.$options as any

    if (openLogin) {
      openLogin()
    }
  }

  /**
   * 设置UI配置
   * @internal
   * @param options
   */
  static setting (options: UIOptions) {
    UICore.$options = options
    themeStore.settingThemeData(options.appId || 'app')
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
   * 设置菜单配置信息
   * @internal
   * @param menus
   */
  static settingMenus (menus: AdminMainMenuOption[]) {
    UICore.$menus = menus
  }

  /**
   * 设置认证配置信息
   * @internal
   * @param options
   */
  static settingAuth (options: AdminAuthOptions) {
    UICore.$auth = options
  }
}
