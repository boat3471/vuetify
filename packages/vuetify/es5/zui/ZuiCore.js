"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ZuiCoreClass = void 0;

var directives = _interopRequireWildcard(require("./directives"));

var _UIEvent2 = require("./events/UIEvent");

var _ZMenu = require("./ZMenu");

var _ZRouter = require("./ZRouter");

var _ZTheme = require("./ZTheme");

var _ZModal = require("./ZModal");

var _ZMessage = require("./ZMessage");

var _ZAuth = require("./ZAuth");

var _debug = _interopRequireDefault(require("./util/debug"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var instance;

var ZuiCoreClass =
/*#__PURE__*/
function (_UIEvent) {
  _inherits(ZuiCoreClass, _UIEvent);

  function ZuiCoreClass(options) {
    var _this;

    _classCallCheck(this, ZuiCoreClass);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ZuiCoreClass).call(this));

    if (!instance) {
      instance = _assertThisInitialized(_this);
      ZuiCoreClass.setting(options);

      _this.on('ready', function () {
        ZuiCoreClass.initialized = true;

        if (ZuiCoreClass.callbackList) {
          ZuiCoreClass.callbackList.forEach(function (fn) {
            fn();
          });
          ZuiCoreClass.callbackList = [];
        }
      });
    }

    return _possibleConstructorReturn(_this, instance);
  }

  _createClass(ZuiCoreClass, [{
    key: "ready",
    value: function ready(callback) {
      ZuiCoreClass.callbackList.push(callback);
    }
  }, {
    key: "openHome",

    /**
     * 回到首页
     */
    value: function openHome() {
      var openHome = ZuiCoreClass.$options.openHome;

      if (openHome) {
        openHome();
        return true;
      } else {
        var type = '';

        switch (ZuiCoreClass.type) {
          case 'app':
            type = 'createApp';
            break;

          case 'admin':
            type = 'createAdmin';
            break;
        }

        _debug.default.warn("\u8BF7\u5728 ".concat(type, " \u4E2D\u914D\u7F6E openHome\uFF0C\u5B9E\u73B0\u91CD\u5B9A\u5411\u8DF3\u8F6C\uFF01"));
      }

      return false;
    }
    /**
     * 回到登录页面
     */

  }, {
    key: "openLogin",
    value: function openLogin() {
      var openLogin = ZuiCoreClass.$options.openLogin;

      if (openLogin) {
        openLogin();
      }
    }
  }, {
    key: "$menu",
    get: function get() {
      return _ZMenu.ZMenuClass.genInstance();
    }
  }, {
    key: "$router",
    get: function get() {
      return _ZRouter.ZRouterClass.genInstance();
    }
  }, {
    key: "$theme",
    get: function get() {
      return ZuiCoreClass.$theme;
    }
  }, {
    key: "$modal",
    get: function get() {
      return _ZModal.ZModalClass.genInstance();
    }
  }, {
    key: "$message",
    get: function get() {
      return _ZMessage.ZMessageClass.genInstance();
    }
  }, {
    key: "$auth",
    get: function get() {
      return _ZAuth.ZAuthClass.genInstance();
    }
    /**
     * App名称
     */

  }, {
    key: "appName",
    get: function get() {
      return ZuiCoreClass.$options.appName || '';
    }
    /**
     * App唯一标示
     */

  }, {
    key: "appKey",
    get: function get() {
      return ZuiCoreClass.$options.appKey || '';
    }
    /**
     * App编号
     */

  }, {
    key: "appId",
    get: function get() {
      return ZuiCoreClass.$options.appId || '';
    }
    /**
     * App 重定向路径
     */

  }, {
    key: "appRedirect",
    get: function get() {
      return ZuiCoreClass.$options.redirect || '';
    }
    /**
     * 获取主菜单列表
     */

  }, {
    key: "menus",
    get: function get() {
      return _ZMenu.ZMenuClass.__menusData;
    }
    /**
     * 获取默认主题状态
     */

  }, {
    key: "darkStatus",
    get: function get() {
      return this.$theme.darkStatus || false;
    }
    /**
     * 获取默认主题大小
     */

  }, {
    key: "defaultSize",
    get: function get() {
      return ZuiCoreClass.$options.defaultSize || 's';
    }
    /**
     * 获取默认的提示背景色
     */

  }, {
    key: "defaultTooltipColor",
    get: function get() {
      return ZuiCoreClass.$options.defaultTooltipColor || '#616161';
    }
    /**
     * 获取默认的提示背景色
     */

  }, {
    key: "defaultTooltipSize",
    get: function get() {
      return ZuiCoreClass.$options.defaultTooltipSize || 's';
    }
  }], [{
    key: "readyCheck",
    value: function readyCheck() {
      if (!ZuiCoreClass.initialized) {
        window.console.warn('Zui is not initialized! Please use $zui.ready(callback) and call when ready');
      }
    }
  }, {
    key: "settingVuetify",
    value: function settingVuetify(vuetify) {
      ZuiCoreClass.$vuetify = vuetify;
      ZuiCoreClass.$vuetifyInstalled = true;

      _ZTheme.ZThemeClass.settingVuetify(vuetify);
    }
  }, {
    key: "setting",
    value: function setting(options) {
      if (options) {
        ZuiCoreClass.$options = options;
        ZuiCoreClass.$theme = new _ZTheme.ZThemeClass(options.appKey || '', {
          mainMenuWidth: options.defaultMenuWidth
        });
        _ZMessage.ZMessageClass.appId = options.appId || 'app';
      }
    }
  }, {
    key: "genInstance",
    value: function genInstance() {
      if (!instance) {
        instance = new ZuiCoreClass();
      }

      return instance;
    }
  }, {
    key: "install",
    value: function install(Vue, options) {
      ZuiCoreClass.setting(options);
      var core = ZuiCoreClass.genInstance();

      if (!ZuiCoreClass.install.initialized) {
        ZuiCoreClass.install.initialized = true;
      } // 安装Zui指令


      Object.keys(directives).forEach(function (name) {
        Vue.directive(name, directives[name]);
      });
      Vue.mixin({
        beforeCreate: function beforeCreate() {
          var $options = this.$options; // 安装 ZuiCore

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
  }]);

  return ZuiCoreClass;
}(_UIEvent2.UIEvent);

exports.ZuiCoreClass = ZuiCoreClass;
ZuiCoreClass.type = '';
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