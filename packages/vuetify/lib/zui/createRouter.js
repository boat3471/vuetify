import { ZRouterClass } from './ZRouter';
import { installRouter } from './util/installRouter';
/**
 * 创建路由，可根据菜单生成路由，菜单为可选项
 * @param options
 */

export function createRouter(options) {
  installRouter();
  const zRouter = ZRouterClass.genAppRouter(options);
  return zRouter.getRouter();
}
/**
 * 创建Admin系统路由，可根据菜单生成路由，菜单为可选项
 * @param options
 */

export function createAdminRouter(options) {
  installRouter();
  const zRouter = ZRouterClass.genAdminRouter(options);
  return zRouter.getRouter();
}
//# sourceMappingURL=createRouter.js.map