"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createRouter = createRouter;
exports.createAdminRouter = createAdminRouter;
exports.createRoutes = createRoutes;

var _ZRouter = require("./ZRouter");

var _installRouter = require("./util/installRouter");

/**
 * 创建路由，可根据菜单生成路由，菜单为可选项
 * @param options
 */
function createRouter(options) {
  (0, _installRouter.installRouter)();

  var zRouter = _ZRouter.ZRouterClass.genAppRouter(options);

  return zRouter.getRouter();
}
/**
 * 创建Admin系统路由，可根据菜单生成路由，菜单为可选项
 * @param options
 */


function createAdminRouter(options) {
  (0, _installRouter.installRouter)();

  var zRouter = _ZRouter.ZRouterClass.genAdminRouter(options);

  return zRouter.getRouter();
}

function createRoutes(routes) {
  return routes;
}
//# sourceMappingURL=createRouter.js.map