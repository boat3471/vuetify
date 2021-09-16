import Vue from 'vue';
import VueRouter from 'vue-router';
import { ZRouterClass } from './ZRouter';
/**
 * 创建路由，可根据菜单生成路由，菜单为可选项
 * @param options
 */

export function createRouter(options) {
  Vue.use(VueRouter);
  const zRouter = ZRouterClass.genAppRouter(options);
  return zRouter.getRouter();
}
/**
 * 创建Admin系统路由，可根据菜单生成路由，菜单为可选项
 * @param options
 */

export function createAdminRouter(options) {
  Vue.use(VueRouter);
  const zRouter = ZRouterClass.genAdminRouter(options);
  return zRouter.getRouter();
}
//# sourceMappingURL=createRouter.js.map