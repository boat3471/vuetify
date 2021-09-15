"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ZThemeClass = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _UIEvent2 = require("./events/UIEvent");

var _options = require("./options");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var DefaultLightColors = {
  primary: '#1976D2',
  secondary: '#424242',
  accent: '#82B1FF',
  error: '#FF5252',
  info: '#2196F3',
  success: '#4CAF50',
  warning: '#FB8C00'
};
var DefaultDarkColors = {
  primary: '#2196F3',
  secondary: '#424242',
  accent: '#FF4081',
  error: '#FF5252',
  info: '#2196F3',
  success: '#4CAF50',
  warning: '#FB8C00'
};
var instance;

var ZThemeClass =
/*#__PURE__*/
function (_UIEvent) {
  _inherits(ZThemeClass, _UIEvent);

  function ZThemeClass(appKey) {
    var _this;

    _classCallCheck(this, ZThemeClass);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ZThemeClass).call(this));
    _this.themeStore = {};

    if (!instance) {
      instance = _assertThisInitialized(_this);
      ZThemeClass.appKey = ZThemeClass.appKey || appKey || 'com.zpmc.app';
      var darkStatus = ZThemeClass.getLocalOption('darkStatus', false);
      ZThemeClass.darkColors = ZThemeClass.getLocalOption('darkColors', DefaultDarkColors);
      ZThemeClass.lightColors = ZThemeClass.getLocalOption('lightColors', DefaultLightColors);
      _this.themeStore = _vue.default.observable({
        darkStatus: darkStatus,
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
        mainNavMode: ZThemeClass.getLocalOption('mainNavMode', _options.MainNavMode.Visible),
        mainNavPosition: ZThemeClass.getLocalOption('mainNavPosition', true),
        mainNavMiniMode: ZThemeClass.getLocalOption('mainNavMiniMode', true),
        mainNavVisible: ZThemeClass.getLocalOption('mainNavVisible', false),
        footerVisible: ZThemeClass.getLocalOption('footerVisible', false),
        appBarVisible: ZThemeClass.getLocalOption('appBarVisible', false),
        cameraModel: ZThemeClass.getLocalOption('cameraModel', false)
      });

      _this.settingHtmlClass(darkStatus);

      if (_this.themeStore.mainNavMode === _options.MainNavMode.Visible) {
        _this.themeStore.mainNavMiniMode = false;
      }
    }

    return _possibleConstructorReturn(_this, instance);
  }

  _createClass(ZThemeClass, [{
    key: "settingTheme",
    value: function settingTheme(options) {
      if (options) {
        var themeStore = this.themeStore;
        Object.keys(options).forEach(function (key) {
          themeStore[key] = options[key];
        });
        this.settingDarkStatus(themeStore.darkStatus);
        this.settingPrimaryColor(themeStore.primaryColor || '');
        ZThemeClass.setLocalOptions(themeStore);
        this.emit('changeTheme', themeStore);
      }
    }
  }, {
    key: "settingDarkColor",
    value: function settingDarkColor(options) {
      if (options) {
        var darkColors = this.themeStore.darkColors;
        Object.keys(options).forEach(function (key) {
          darkColors[key] = options[key];
        });
        this.resetColor(this.themeStore.darkStatus || false);
        ZThemeClass.setLocalOptions(this.themeStore); // 更新vuetify
      }
    }
  }, {
    key: "settingLightColor",
    value: function settingLightColor(options) {
      if (options) {
        var lightColors = this.themeStore.lightColors;
        Object.keys(options).forEach(function (key) {
          lightColors[key] = options[key];
        });
        this.resetColor(this.themeStore.darkStatus || false);
        ZThemeClass.setLocalOptions(this.themeStore); // 更新vuetify
      }
    }
  }, {
    key: "settingThemeColors",
    value: function settingThemeColors(options) {
      if (ZThemeClass.vuetify && options) {
        if (options.darkColors) {
          var darkDefault = ZThemeClass.vuetify.theme.themes.dark || {};

          var dark = _objectSpread({}, options.darkColors, {}, darkDefault);

          ZThemeClass.vuetify.theme.themes.dark = dark;
          this.settingDarkColor(dark);
        }

        if (options.lightColors) {
          var lightDefault = ZThemeClass.vuetify.theme.themes.light || {};

          var light = _objectSpread({}, options.lightColors, {}, lightDefault);

          ZThemeClass.vuetify.theme.themes.light = light;
          this.settingLightColor(light);
        }

        this.emit('changeThemeColors');
      }
    }
  }, {
    key: "settingPrimaryColor",
    value: function settingPrimaryColor(color) {
      var _this$themeStore = this.themeStore,
          darkStatus = _this$themeStore.darkStatus,
          darkColors = _this$themeStore.darkColors,
          lightColors = _this$themeStore.lightColors;

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

  }, {
    key: "settingHtmlClass",
    value: function settingHtmlClass(darkStatus) {
      var html = document.documentElement;
      html.className = darkStatus ? 'theme--dark' : 'theme--light';
    }
  }, {
    key: "settingDarkStatus",
    value: function settingDarkStatus() {
      var status = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (ZThemeClass.vuetifyInstalled) {
        // 更新vuetify
        ZThemeClass.vuetify.theme.dark = status; // 更新store

        this.themeStore.darkStatus = status; // 更新视图

        this.settingHtmlClass(status); // 更新颜色

        this.resetColor(status); // 通知视图

        this.emit('changeDark', status);
      }
    }
  }, {
    key: "getPrimaryColor",
    value: function getPrimaryColor() {
      return this.themeStore.primaryColor || '';
    }
  }, {
    key: "getDefaultPreset",
    value: function getDefaultPreset(options) {
      return _objectSpread({
        theme: {
          dark: this.darkStatus,
          themes: {
            dark: ZThemeClass.darkColors,
            light: ZThemeClass.lightColors
          }
        }
      }, options);
    }
  }, {
    key: "resetColor",
    value: function resetColor(darkStatus) {
      var options = this.themeStore;
      options.primaryColor = ZThemeClass.getColor('primary', darkStatus);
      options.secondaryColor = ZThemeClass.getColor('secondary', darkStatus);
      options.accentColor = ZThemeClass.getColor('accent', darkStatus);
      options.errorColor = ZThemeClass.getColor('error', darkStatus);
      options.infoColor = ZThemeClass.getColor('info', darkStatus);
      options.successColor = ZThemeClass.getColor('success', darkStatus);
      options.warningColor = ZThemeClass.getColor('warning', darkStatus);
    }
  }, {
    key: "mainNavMiniMode",
    get: function get() {
      return this.themeStore.mainNavMiniMode || false;
    }
  }, {
    key: "darkStatus",
    get: function get() {
      return this.themeStore.darkStatus || false;
    }
  }], [{
    key: "getLocalKey",
    value: function getLocalKey() {
      return "".concat(ZThemeClass.appKey.toLocaleUpperCase(), "-").concat('Theme-Options'.toLocaleUpperCase());
    }
  }, {
    key: "getLocalOption",
    value: function getLocalOption(name, defaultValue) {
      if (!ZThemeClass.themeJson) {
        var themeJson = localStorage.getItem(ZThemeClass.getLocalKey());

        try {
          ZThemeClass.themeJson = JSON.parse(themeJson || '{}');
        } catch (e) {
          ZThemeClass.themeJson = {};
        }
      }

      var value = ZThemeClass.themeJson[name];

      switch (_typeof(defaultValue)) {
        case 'object':
          return _objectSpread({}, defaultValue, {}, value);

        case 'boolean':
          return typeof value === 'boolean' ? value : defaultValue;

        case 'number':
          return typeof value === 'number' ? value : defaultValue;

        default:
          return value || defaultValue;
      }
    }
  }, {
    key: "setLocalOptions",
    value: function setLocalOptions(options) {
      localStorage.setItem(ZThemeClass.getLocalKey(), JSON.stringify(options));
    }
  }, {
    key: "getColor",
    value: function getColor(name, darkStatus) {
      var darkColors = ZThemeClass.darkColors || {};
      var lightColors = ZThemeClass.lightColors || {};
      return (darkStatus ? darkColors[name] : lightColors[name]) || '';
    }
  }, {
    key: "settingVuetify",
    value: function settingVuetify(vuetify) {
      ZThemeClass.vuetify = vuetify;
      ZThemeClass.vuetifyInstalled = true;
    }
  }, {
    key: "genInstance",
    value: function genInstance() {
      if (!instance) {
        var message = 'Zui Uninitialized, Please use the createApp/createAdmin, Initialize your app！';
        window.console.error(message);
        throw new Error(message);
      }

      return instance;
    }
  }]);

  return ZThemeClass;
}(_UIEvent2.UIEvent);

exports.ZThemeClass = ZThemeClass;
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