"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRouter = createRouter;
exports.createAdminRouter = createAdminRouter;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _ZRouter = require("./ZRouter");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 创建路由，可根据菜单生成路由，菜单为可选项
 * @param options
 */
function createRouter(options) {
  _vue.default.use(_vueRouter.default);

  var zRouter = _ZRouter.ZRouterClass.genAppRouter(options);

  return zRouter.getRouter();
}
/**
 * 创建Admin系统路由，可根据菜单生成路由，菜单为可选项
 * @param options
 */


function createAdminRouter(options) {
  _vue.default.use(_vueRouter.default);

  var zRouter = _ZRouter.ZRouterClass.genAdminRouter(options);

  return zRouter.getRouter();
}
//# sourceMappingURL=createRouter.js.map