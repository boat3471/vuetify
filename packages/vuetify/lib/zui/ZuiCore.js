import * as directives from './directives';
import { UIEvent } from './events/UIEvent';
import { ZMenuClass } from './ZMenu';
import { ZRouterClass } from './ZRouter';
import { ZThemeClass } from './ZTheme';
import { ZModalClass } from './ZModal';
import { ZMessageClass } from './ZMessage';
import { ZAuthClass } from './ZAuth';
let instance;
export class ZuiCoreClass extends UIEvent {
  constructor(options) {
    super();

    if (!instance) {
      instance = this;
      ZuiCoreClass.setting(options);
      this.on('ready', () => {
        ZuiCoreClass.initialized = true;

        if (ZuiCoreClass.callbackList) {
          ZuiCoreClass.callbackList.forEach(fn => {
            fn();
          });
          ZuiCoreClass.callbackList = [];
        }
      });
    }

    return instance;
  }

  static readyCheck() {
    if (!ZuiCoreClass.initialized) {
      window.console.warn('Zui is not initialized! Please use $zui.ready(callback) and call when ready');
    }
  }

  ready(callback) {
    ZuiCoreClass.callbackList.push(callback);
  }

  get $menu() {
    return ZMenuClass.genInstance();
  }

  get $router() {
    return ZRouterClass.genInstance();
  }

  get $theme() {
    return ZuiCoreClass.$theme;
  }

  get $modal() {
    return ZModalClass.genInstance();
  }

  get $message() {
    return ZMessageClass.genInstance();
  }

  get $auth() {
    return ZAuthClass.genInstance();
  }
  /**
   * App名称
   */


  get appName() {
    return ZuiCoreClass.$options.appName || '';
  }
  /**
   * App唯一标示
   */


  get appKey() {
    return ZuiCoreClass.$options.appKey || '';
  }
  /**
   * App编号
   */


  get appId() {
    return ZuiCoreClass.$options.appId || '';
  }
  /**
   * App 重定向路径
   */


  get appRedirect() {
    return ZuiCoreClass.$options.redirect || '';
  }
  /**
   * 获取主菜单列表
   */


  get menus() {
    return ZMenuClass.__menusData;
  }
  /**
   * 获取默认主题状态
   */


  get darkStatus() {
    return this.$theme.darkStatus || false;
  }
  /**
   * 获取默认主题大小
   */


  get defaultSize() {
    return ZuiCoreClass.$options.defaultSize || 's';
  }
  /**
   * 获取默认的提示背景色
   */


  get defaultTooltipColor() {
    return ZuiCoreClass.$options.defaultTooltipColor || '#616161';
  }
  /**
   * 获取默认的提示背景色
   */


  get defaultTooltipSize() {
    return ZuiCoreClass.$options.defaultTooltipSize || 's';
  }
  /**
   * 回到首页
   */


  openHome() {
    const {
      openHome
    } = ZuiCoreClass.$options;

    if (openHome) {
      openHome();
      return true;
    }

    return false;
  }
  /**
   * 回到登录页面
   */


  openLogin() {
    const {
      openLogin
    } = ZuiCoreClass.$options;

    if (openLogin) {
      openLogin();
    }
  }

  static settingVuetify(vuetify) {
    ZuiCoreClass.$vuetify = vuetify;
    ZuiCoreClass.$vuetifyInstalled = true;
    ZThemeClass.settingVuetify(vuetify);
  }

  static setting(options) {
    if (options) {
      ZuiCoreClass.$options = options;
      ZuiCoreClass.$theme = new ZThemeClass(options.appKey || '');
      ZMessageClass.appId = options.appId || 'app';
    }
  }

  static genInstance() {
    if (!instance) {
      instance = new ZuiCoreClass();
    }

    return instance;
  }

  static install(Vue, options) {
    ZuiCoreClass.setting(options);
    const core = ZuiCoreClass.genInstance();

    if (!ZuiCoreClass.install.initialized) {
      ZuiCoreClass.install.initialized = true;
    } // 安装Zui指令


    Object.keys(directives).forEach(name => {
      Vue.directive(name, directives[name]);
    });
    Vue.mixin({
      beforeCreate() {
        const $options = this.$options; // 安装 ZuiCore

        if (!this.$ui) {
          this.$ui = core;
        } else {
          $options.parent && (this.$ui = $options.parent.$ui);
        } // 安装 ZModal


        if (!this.$modal) {
          this.$modal = core.$modal;
        } else {
          $options.parent && (this.$modal = $options.parent.$modal);
        } // 安装 ZMessage


        if (!this.$message) {
          this.$message = core.$message;
        } else {
          $options.parent && (this.$message = $options.parent.$message);
        } // 安装 ZMenu


        if (!this.$menu) {
          this.$menu = core.$menu;
        } else {
          $options.parent && (this.$menu = $options.parent.$menu);
        } // 安装 ZTheme


        if (!this.$theme) {
          this.$theme = core.$theme;
          this.$themeStore = core.$theme.themeStore;
        } else {
          $options.parent && (this.$theme = $options.parent.$theme);
        }
      }

    });
  }

}
ZuiCoreClass.initialized = false;
ZuiCoreClass.callbackList = [];
/** @internal */

ZuiCoreClass.$vuetifyInstalled = false;
/** @internal */

ZuiCoreClass.$vuetify = {
  theme: {
    dark: true
  }
};
/** @internal */

ZuiCoreClass.$options = {};
//# sourceMappingURL=ZuiCore.js.map