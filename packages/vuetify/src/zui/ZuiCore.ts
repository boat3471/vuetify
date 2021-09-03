import Vue, { VueConstructor } from 'vue'
import * as directives from './directives'
import {
  ZuiOptions,
  ZuiCoreDescription,
  ZMenuOption,
} from '../../types'
import { UIEvent } from './events/UIEvent'
import { ZMenuClass } from './ZMenu'
import { ZRouterClass } from './ZRouter'
import { ZThemeClass } from './ZTheme'
import { ZModalClass } from './ZModal'
import { ZMessageClass } from './ZMessage'
import { ZAuthClass } from './ZAuth'

let instance: ZuiCoreClass

export class ZuiCoreClass extends UIEvent implements ZuiCoreDescription {
  constructor (options: ZuiOptions) {
    super()
    if (!instance) {
      instance = this
      ZuiCoreClass.$options = options
      ZuiCoreClass.$theme = new ZThemeClass(options.appKey || '')
    }
    return instance
  }

  get $menu (): ZMenuClass {
    return ZMenuClass.genInstance()
  }

  get $router (): ZRouterClass {
    return ZRouterClass.genInstance()
  }

  get $theme (): ZThemeClass {
    return ZuiCoreClass.$theme
  }

  get $modal (): ZModalClass {
    return ZModalClass.genInstance()
  }

  get $message (): ZMessageClass {
    return ZMessageClass.genInstance()
  }

  get $auth (): ZAuthClass {
    return ZAuthClass.genInstance()
  }

  /**
   * App名称
   */
  get appName () {
    return ZuiCoreClass.$options.appName || ''
  }

  /**
   * App唯一标示
   */
  get appKey () {
    return ZuiCoreClass.$options.appKey || ''
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
   * 获取默认主题状态
   */
  get darkStatus (): boolean {
    return this.$theme.darkStatus || false
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
  static $theme: ZThemeClass

  static settingVuetify (vuetify: any) {
    ZuiCoreClass.$vuetify = vuetify
    ZuiCoreClass.$vuetifyInstalled = true
    ZThemeClass.settingVuetify(vuetify)
  }

  static genInstance (): ZuiCoreClass {
    if (!instance) {
      throw new Error('Zui Uninitialized, Please use the createApp/createAdmin, Initialize your app！')
    }
    return instance
  }

  static install (Vue: VueConstructor, options: ZuiOptions) {
    const core = new ZuiCoreClass(options)

    if (!(ZuiCoreClass.install as any).initialized) {
      (ZuiCoreClass.install as any).initialized = true
    }

    // 安装Zui指令
    Object.keys(directives).forEach(name => {
      Vue.directive(name, (directives as any)[name])
    })

    Vue.mixin({
      beforeCreate () {
        const $options = this.$options

        // 安装 ZuiCore
        if (!this.$ui) {
          this.$ui = core
        } else {
          $options.parent && (this.$ui = $options.parent.$ui)
        }

        // 安装 ZModal
        if (!this.$modal) {
          this.$modal = core.$modal
        } else {
          $options.parent && (this.$modal = $options.parent.$modal)
        }

        // 安装 ZMessage
        if (!this.$message) {
          this.$message = core.$message
        } else {
          $options.parent && (this.$message = $options.parent.$message)
        }

        // 安装 ZMenu
        if (!this.$menu) {
          this.$menu = core.$menu
        } else {
          $options.parent && (this.$menu = $options.parent.$menu)
        }

        // 安装 ZTheme
        if (!this.$theme) {
          this.$theme = core.$theme
        } else {
          $options.parent && (this.$theme = $options.parent.$theme)
        }
      },
    })
  }
}

/**
 * 全局通知实例:
 * 1. 可在vue组件内部使用 `this.$ui` <br>
 * 2. 可引入使用 `import {ZuiCore} = '@zwd/z-ui';`
 */
export const ZuiCore = ZuiCoreClass.genInstance()
