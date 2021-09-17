import Vue, { VueConstructor } from 'vue'
import * as directives from './directives'
import {
  ZuiOptions,
  ZuiCoreDescription,
  ZMenuOption, CreateAdminOptions,
} from '../../types'
import { UIEvent } from './events/UIEvent'
import { ZMenuClass } from './ZMenu'
import { ZRouterClass } from './ZRouter'
import { ZThemeClass } from './ZTheme'
import { ZModalClass } from './ZModal'
import { ZMessageClass } from './ZMessage'
import { ZAuthClass } from './ZAuth'
import debug from './util/debug'

let instance: ZuiCoreClass

export class ZuiCoreClass extends UIEvent implements ZuiCoreDescription {
  static type: 'app' | 'admin' | '' = '';
  static initialized = false;
  static callbackList: Function[] = [];
  static readyCheck (): void {
    if (!ZuiCoreClass.initialized) {
      window.console.warn('Zui is not initialized! Please use $zui.ready(callback) and call when ready')
    }
  }

  constructor (options?: ZuiOptions) {
    super()
    if (!instance) {
      instance = this
      ZuiCoreClass.setting(options)
      this.on('ready', () => {
        ZuiCoreClass.initialized = true
        if (ZuiCoreClass.callbackList) {
          ZuiCoreClass.callbackList.forEach(fn => {
            fn()
          })
          ZuiCoreClass.callbackList = []
        }
      })
    }
    return instance
  }

  ready (callback: () => void): void {
    ZuiCoreClass.callbackList.push(callback)
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
   * App 重定向路径
   */
  get appRedirect (): string {
    return (ZuiCoreClass.$options as CreateAdminOptions).redirect || ''
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
    } else {
      let type = ''
      switch (ZuiCoreClass.type) {
        case 'app':
          type = 'createApp'
          break
        case 'admin':
          type = 'createAdmin'
          break
      }
      debug.warn(`请在 ${type} 中配置 openHome，实现重定向跳转！`)
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
  static $theme: ZThemeClass;

  static settingVuetify (vuetify: any) {
    ZuiCoreClass.$vuetify = vuetify
    ZuiCoreClass.$vuetifyInstalled = true
    ZThemeClass.settingVuetify(vuetify)
  }

  static setting (options?: ZuiOptions) {
    if (options) {
      ZuiCoreClass.$options = options
      ZuiCoreClass.$theme = new ZThemeClass(options.appKey || '', {
        mainMenuWidth: (options as CreateAdminOptions).defaultMenuWidth,
      })
      ZMessageClass.appId = options.appId || 'app'
    }
  }

  static genInstance (): ZuiCoreClass {
    if (!instance) {
      instance = new ZuiCoreClass()
    }
    return instance
  }

  static install (Vue: VueConstructor, options: ZuiOptions) {
    ZuiCoreClass.setting(options)
    const core = ZuiCoreClass.genInstance()

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
          this.$themeStore = core.$theme.themeStore
        } else {
          $options.parent && (this.$theme = $options.parent.$theme)
        }
      },
    })
  }
}
