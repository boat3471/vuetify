import Vue from 'vue';
import { UIEvent } from './events/UIEvent';
import { MainNavMode } from './options';
const DefaultLightColors = {
  primary: '#1976D2',
  secondary: '#424242',
  accent: '#82B1FF',
  error: '#FF5252',
  info: '#2196F3',
  success: '#4CAF50',
  warning: '#FB8C00'
};
const DefaultDarkColors = {
  primary: '#2196F3',
  secondary: '#424242',
  accent: '#FF4081',
  error: '#FF5252',
  info: '#2196F3',
  success: '#4CAF50',
  warning: '#FB8C00'
};
let instance;
export class ZThemeClass extends UIEvent {
  constructor(appKey) {
    super();
    this.themeStore = {};

    if (!instance) {
      instance = this;
      ZThemeClass.appKey = ZThemeClass.appKey || appKey || 'com.zpmc.app';
      const darkStatus = ZThemeClass.getLocalOption('darkStatus', false);
      ZThemeClass.darkColors = ZThemeClass.getLocalOption('darkColors', DefaultDarkColors);
      ZThemeClass.lightColors = ZThemeClass.getLocalOption('lightColors', DefaultLightColors);
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
        denseMode: ZThemeClass.getLocalOption('denseMode', true),
        mainMenuWidth: ZThemeClass.getLocalOption('mainMenuWidth', 275),
        mainMenuExpandMode: ZThemeClass.getLocalOption('mainMenuExpandMode', false),
        mainNavMode: ZThemeClass.getLocalOption('mainNavMode', MainNavMode.Visible),
        mainNavPosition: ZThemeClass.getLocalOption('mainNavPosition', true),
        mainNavMiniMode: ZThemeClass.getLocalOption('mainNavMiniMode', true),
        mainNavVisible: ZThemeClass.getLocalOption('mainNavVisible', false),
        footerVisible: ZThemeClass.getLocalOption('footerVisible', false),
        appBarVisible: ZThemeClass.getLocalOption('appBarVisible', false),
        cameraModel: ZThemeClass.getLocalOption('cameraModel', false)
      });
      this.settingHtmlClass(darkStatus);

      if (this.themeStore.mainNavMode === MainNavMode.Visible) {
        this.themeStore.mainNavMiniMode = false;
      }
    }

    return instance;
  }

  get mainNavMiniMode() {
    return this.themeStore.mainNavMiniMode || false;
  }

  get darkStatus() {
    return this.themeStore.darkStatus || false;
  }

  settingTheme(options) {
    if (options) {
      const themeStore = this.themeStore;
      Object.keys(options).forEach(key => {
        themeStore[key] = options[key];
      });
      this.settingDarkStatus(themeStore.darkStatus);
      this.settingPrimaryColor(themeStore.primaryColor || '');
      ZThemeClass.setLocalOptions(themeStore);
      this.emit('changeTheme', themeStore);
    }
  }

  settingDarkColor(options) {
    if (options) {
      const darkColors = this.themeStore.darkColors;
      Object.keys(options).forEach(key => {
        darkColors[key] = options[key];
      });
      this.resetColor(this.themeStore.darkStatus || false);
      ZThemeClass.setLocalOptions(this.themeStore); // 更新vuetify
    }
  }

  settingLightColor(options) {
    if (options) {
      const lightColors = this.themeStore.lightColors;
      Object.keys(options).forEach(key => {
        lightColors[key] = options[key];
      });
      this.resetColor(this.themeStore.darkStatus || false);
      ZThemeClass.setLocalOptions(this.themeStore); // 更新vuetify
    }
  }

  settingThemeColors(options) {
    if (ZThemeClass.vuetify && options) {
      if (options.darkColors) {
        const darkDefault = ZThemeClass.vuetify.theme.themes.dark || {};
        const dark = { ...options.darkColors,
          ...darkDefault
        };
        ZThemeClass.vuetify.theme.themes.dark = dark;
        this.settingDarkColor(dark);
      }

      if (options.lightColors) {
        const lightDefault = ZThemeClass.vuetify.theme.themes.light || {};
        const light = { ...options.lightColors,
          ...lightDefault
        };
        ZThemeClass.vuetify.theme.themes.light = light;
        this.settingLightColor(light);
      }

      this.emit('changeThemeColors');
    }
  }

  settingPrimaryColor(color) {
    const {
      darkStatus,
      darkColors,
      lightColors
    } = this.themeStore;

    if (darkStatus) {
      darkColors && (darkColors.primary = color);
    } else {
      lightColors && (lightColors.primary = color);
    }

    this.themeStore.primaryColor = color;
    ZThemeClass.setLocalOptions(this.themeStore); // 更新vuetify

    if (ZThemeClass.vuetify) {
      if (this.darkStatus) {
        ZThemeClass.vuetify.theme.themes.dark.primary = color;
      } else {
        ZThemeClass.vuetify.theme.themes.light.primary = color;
      }

      this.emit('changePrimaryColor', color);
    }
  }
  /**
   * 设置html跟节点样式
   */


  settingHtmlClass(darkStatus) {
    const html = document.documentElement;
    html.className = darkStatus ? 'theme--dark' : 'theme--light';
  }

  settingDarkStatus(status = false) {
    if (ZThemeClass.vuetifyInstalled) {
      // 更新vuetify
      ZThemeClass.vuetify.theme.dark = status; // 更新store

      this.themeStore.darkStatus = status; // 更新视图

      this.settingHtmlClass(status); // 更新颜色

      this.resetColor(status); // 通知视图

      this.emit('changeDark', status);
    }
  }

  getPrimaryColor() {
    return this.themeStore.primaryColor || '';
  }

  getDefaultPreset(options) {
    return {
      theme: {
        dark: this.darkStatus,
        themes: {
          dark: ZThemeClass.darkColors,
          light: ZThemeClass.lightColors
        }
      },
      ...options
    };
  }

  resetColor(darkStatus) {
    const options = this.themeStore;
    options.primaryColor = ZThemeClass.getColor('primary', darkStatus);
    options.secondaryColor = ZThemeClass.getColor('secondary', darkStatus);
    options.accentColor = ZThemeClass.getColor('accent', darkStatus);
    options.errorColor = ZThemeClass.getColor('error', darkStatus);
    options.infoColor = ZThemeClass.getColor('info', darkStatus);
    options.successColor = ZThemeClass.getColor('success', darkStatus);
    options.warningColor = ZThemeClass.getColor('warning', darkStatus);
  }

  static getLocalKey() {
    return `${ZThemeClass.appKey.toLocaleUpperCase()}-${'Theme-Options'.toLocaleUpperCase()}`;
  }

  static getLocalOption(name, defaultValue) {
    if (!ZThemeClass.themeJson) {
      const themeJson = localStorage.getItem(ZThemeClass.getLocalKey());

      try {
        ZThemeClass.themeJson = JSON.parse(themeJson || '{}');
      } catch (e) {
        ZThemeClass.themeJson = {};
      }
    }

    const value = ZThemeClass.themeJson[name];

    switch (typeof defaultValue) {
      case 'object':
        return { ...defaultValue,
          ...value
        };

      case 'boolean':
        return typeof value === 'boolean' ? value : defaultValue;

      case 'number':
        return typeof value === 'number' ? value : defaultValue;

      default:
        return value || defaultValue;
    }
  }

  static setLocalOptions(options) {
    localStorage.setItem(ZThemeClass.getLocalKey(), JSON.stringify(options));
  }

  static getColor(name, darkStatus) {
    const darkColors = ZThemeClass.darkColors || {};
    const lightColors = ZThemeClass.lightColors || {};
    return (darkStatus ? darkColors[name] : lightColors[name]) || '';
  }

  static settingVuetify(vuetify) {
    ZThemeClass.vuetify = vuetify;
    ZThemeClass.vuetifyInstalled = true;
  }

  static genInstance() {
    if (!instance) {
      const message = 'Zui Uninitialized, Please use the createApp/createAdmin, Initialize your app！';
      window.console.error(message);
      throw new Error(message);
    }

    return instance;
  }

}
ZThemeClass.appKey = '';
ZThemeClass.themeJson = null;
ZThemeClass.darkColors = {};
ZThemeClass.lightColors = {};
ZThemeClass.vuetifyInstalled = false;
ZThemeClass.vuetify = {
  theme: {
    dark: true
  }
};
//# sourceMappingURL=ZTheme.js.map