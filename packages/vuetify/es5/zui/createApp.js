"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createApp = createApp;

var _vue = _interopRequireDefault(require("vue"));

var _components = require("../components");

var _ZuiCore = require("./ZuiCore");

var _ZRouter = require("./ZRouter");

var _createZui = require("./createZui");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 创建主程序
 * @param createElement
 * @param options
 */
function createMain(createElement, options) {
  options = options || {};
  var children = [];
  var appHome = options.appHome ? createElement(options.appHome) : null;

  if (!appHome) {
    if (options.componentOptions && options.componentOptions.router) {
      children.push(createElement(_vue.default.component('RouterView')));
    }
  } else {
    children.push(appHome);
  }

  return createElement( // 主视图
  options.appMain || _components.ZApp, // 主视图配置选项
  {
    staticClass: "z-app ".concat(options.appClass || ''),
    props: {
      id: options.appId || 'app'
    }
  }, // 子元素列表
  children);
}
/**
 * 创建APP, 基于@zwd/z-ui
 * @param options
 */


function createApp(options) {
  if (!options) {
    options = options || {};
  } // 安装 zui-core


  _vue.default.use(_ZuiCore.ZuiCoreClass, options);

  var _ZuiCoreClass$genInst = _ZuiCore.ZuiCoreClass.genInstance(),
      $theme = _ZuiCoreClass$genInst.$theme;

  var presetOptions = $theme.getDefaultPreset(options.presetOptions);
  var componentOptions = options.componentOptions || {};
  var ui = (0, _createZui.createZui)(presetOptions, options.useOptions);
  componentOptions.router && (_ZRouter.ZRouterClass.router = componentOptions.router);

  _ZuiCore.ZuiCoreClass.settingVuetify(ui.framework);

  _ZuiCore.ZuiCoreClass.$app = new _vue.default(_objectSpread({
    el: options.appId || '#app',
    vuetify: ui,
    render: function render(createElement) {
      return createMain(createElement, options);
    }
  }, componentOptions));
  return _ZuiCore.ZuiCoreClass.$app;
}
//# sourceMappingURL=createApp.js.map