"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRouter = createRouter;
exports.createAdminRouter = createAdminRouter;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _generatorRouter = require("./util/generatorRouter");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * 创建路由，可根据菜单生成路由，菜单为可选项
 * @param options
 * @param menus
 */
function createRouter(options, menus) {
  _vue.default.use(_vueRouter.default);

  var routes = (0, _generatorRouter.genAppRoutesByOptions)(options, menus || []);
  var routerOptions = options.options || Object.create(null);
  routerOptions.routes = routes;
  return new _vueRouter.default(routerOptions);
}
/**
 * 创建Admin系统路由，可根据菜单生成路由，菜单为可选项
 * @param options
 * @param menus
 */


function createAdminRouter(options, menus) {
  _vue.default.use(_vueRouter.default);

  var routes = (0, _generatorRouter.genRoutesByOptions)(options, menus || []);
  var routerOptions = options.options || Object.create(null);
  routerOptions.routes = routes;
  return new _vueRouter.default(routerOptions);
}
//# sourceMappingURL=createRouter.js.map