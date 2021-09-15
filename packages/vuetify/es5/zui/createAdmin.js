"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createAdmin = createAdmin;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _ZViewAdmin = _interopRequireDefault(require("./components/ZAdmin/ZViewAdmin"));

var _ZuiCore = require("./ZuiCore");

var _ZRouter = require("./ZRouter");

var _createZui = require("./createZui");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 创建主程序
 * @internal
 * @param h
 * @param options
 */
function createMain(h, options) {
  return h( // 主视图, 及其选项
  _ZViewAdmin.default, {
    staticClass: "z-app ".concat(options.appClass || ''),
    props: {
      id: options.appId || 'app'
    }
  }, // 子元素列表
  [options.appHome ? h(options.appHome) : null]);
}
/**
 * 创建Admin, 基于 @zwd/z-ui
 * @param options
 */


function createAdmin(options) {
  if (!options) {
    options = options || {};
  } // 安装 vue-router


  _vue.default.use(_vueRouter.default); // 安装 zui-core


  _vue.default.use(_ZuiCore.ZuiCoreClass, options);

  var _ZuiCoreClass$genInst = _ZuiCore.ZuiCoreClass.genInstance(),
      $menu = _ZuiCoreClass$genInst.$menu,
      $router = _ZuiCoreClass$genInst.$router,
      $theme = _ZuiCoreClass$genInst.$theme,
      $auth = _ZuiCoreClass$genInst.$auth; // 设置认证


  $auth.setting(options.auth || {}); // 设置菜单

  $menu.settingMenus(options.menus || [], false); // 设置 vuetify and zui

  var presetOptions = $theme.getDefaultPreset(options.presetOptions);
  var ui = (0, _createZui.createZui)(presetOptions, options.useOptions);

  _ZuiCore.ZuiCoreClass.settingVuetify(ui.framework); // 设置路由管理器（Router）


  var componentOptions = options.componentOptions || {};
  var router = componentOptions.router;

  if (!router) {
    router = $router.setting(options.routerOptions || {}, options.menus || []);
  }

  _ZRouter.ZRouterClass.router = router; // 生成 vue 选项

  var vueOptions = _objectSpread({
    el: options.appId || '#app',
    vuetify: ui,
    mounted: function mounted() {},
    render: function render(h) {
      return createMain(h, options);
    },
    router: router
  }, componentOptions);

  _ZuiCore.ZuiCoreClass.$app = new _vue.default(vueOptions);
  return _ZuiCore.ZuiCoreClass.$app;
}
//# sourceMappingURL=createAdmin.js.map