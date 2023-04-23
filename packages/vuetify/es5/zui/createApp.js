"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createApp = createApp;

var _vue = _interopRequireDefault(require("vue"));

var _ZuiCore = require("./ZuiCore");

var _ZRouter = require("./ZRouter");

var _createZui = require("./createZui");

var _ZApp = require("../components/VApp/ZApp");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 创建主程序
 */
function createMain(h, options, appMain, appHome) {
  var isRenderRouterView = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : false;
  options = options || {};
  var children = isRenderRouterView ? h('RouterView') : appHome ? h(appHome) : h('');
  return h(appMain || _ZApp.ZApp, {
    staticClass: "z-app ".concat(options.appClass || ''),
    props: {
      id: options.appId || 'app'
    }
  }, [children]);
}
/**
 * 创建APP, 基于@zwd/z-ui
 * @param options
 */


function createApp(options) {
  options = options || {};
  _ZuiCore.ZuiCoreClass.type = 'app'; // 安装 zui-core

  _vue.default.use(_ZuiCore.ZuiCoreClass, options);

  var _ZuiCoreClass$genInst = _ZuiCore.ZuiCoreClass.genInstance(),
      $theme = _ZuiCoreClass$genInst.$theme;

  var presetOptions = $theme.getDefaultPreset(options.presetOptions);
  var ui = (0, _createZui.createZui)(presetOptions, options.useOptions);

  _ZuiCore.ZuiCoreClass.settingVuetify(ui.framework);

  var componentOptions = options.componentOptions || {};
  var appRouter = _ZRouter.ZRouterClass.appRouter;
  var appMain;
  var appHome;
  var isRenderRouterView = false;

  if (appRouter) {
    appMain = appRouter.appMain;
    appHome = appRouter.appHome;
    isRenderRouterView = appRouter.isRenderRouterView;
  } // 如果用户传了自定义的 router


  if (componentOptions.router) {
    _ZRouter.ZRouterClass.router = componentOptions.router;
  } else {
    appMain = options.appMain;
    appHome = options.appHome;
    isRenderRouterView = false;
  } // 如果存在路由，但未设置appMain和appHome，则使用options中的配置；


  appMain = appMain || options.appMain;
  appHome = appHome || options.appHome;
  _ZuiCore.ZuiCoreClass.$app = new _vue.default(_objectSpread({
    el: options.appId || '#app',
    vuetify: ui,
    render: function render(createElement) {
      return createMain(createElement, options, appMain, appHome, isRenderRouterView);
    }
  }, componentOptions));
  return _ZuiCore.ZuiCoreClass.$app;
}
//# sourceMappingURL=createApp.js.map