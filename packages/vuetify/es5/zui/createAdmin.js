"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createAdmin = createAdmin;

var _vue = _interopRequireDefault(require("vue"));

var _ZAdmin = require("./components/ZAdmin");

var _ZuiCore = require("./ZuiCore");

var _createZui = require("./createZui");

var _ZRouter = require("./ZRouter");

var _installRouter = require("./util/installRouter");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 创建主程序
 * @internal
 */
function createMain(h, options, appMain, appHome) {
  var Content = appMain || appHome;
  return h(_ZAdmin.ZAdminApp, {
    staticClass: "z-app ".concat(options.appClass || ''),
    props: {
      id: options.appId || 'app'
    }
  }, [Content ? h(Content) : null]);
}
/**
 * 创建Admin, 基于 @zwd/z-ui
 * @param options
 */


function createAdmin(options) {
  options = options || {};
  _ZuiCore.ZuiCoreClass.type = 'admin'; // 安装 vue-router

  (0, _installRouter.installRouter)(); // 安装 zui-core

  _vue.default.use(_ZuiCore.ZuiCoreClass, options);

  var _ZuiCoreClass$genInst = _ZuiCore.ZuiCoreClass.genInstance(),
      $menu = _ZuiCoreClass$genInst.$menu,
      $theme = _ZuiCoreClass$genInst.$theme,
      $auth = _ZuiCoreClass$genInst.$auth; // 设置认证


  $auth.setting(options.auth || {}); // 设置菜单

  $menu.settingMenus(options.menus || [], false); // 设置 vuetify and zui

  var presetOptions = $theme.getDefaultPreset(options.presetOptions);
  var ui = (0, _createZui.createZui)(presetOptions, options.useOptions);

  _ZuiCore.ZuiCoreClass.settingVuetify(ui.framework);

  var componentOptions = options.componentOptions || {};

  var adminRouter = _ZRouter.ZRouterClass.adminRouter || _ZRouter.ZRouterClass.genAdminRouter({
    appMain: options.appMain,
    appHome: options.appHome,
    redirect: options.redirect,
    router: componentOptions.router
  });

  var router = componentOptions.router;

  if (adminRouter) {
    router = adminRouter.getRouter();
  }

  if (router) {
    componentOptions.router = router;
    _ZRouter.ZRouterClass.router = router;
  }

  _ZuiCore.ZuiCoreClass.$app = new _vue.default(_objectSpread({
    el: options.appId || '#app',
    vuetify: ui,
    render: function render(h) {
      var appMain = adminRouter.appMain || options.appMain;
      var appHome = adminRouter.appHome || options.appHome;
      return createMain(h, options, appMain, appHome);
    }
  }, componentOptions));
  return _ZuiCore.ZuiCoreClass.$app;
}
//# sourceMappingURL=createAdmin.js.map