import Vue from 'vue';
import VueRouter from 'vue-router';
import { genAppRoutesByOptions, genRoutesByOptions } from './util/generatorRouter';
/**
 * 创建路由，可根据菜单生成路由，菜单为可选项
 * @param options
 * @param menus
 */

export function createRouter(options, menus) {
  Vue.use(VueRouter);
  const routes = genAppRoutesByOptions(options, menus || []);
  const routerOptions = options.options || Object.create(null);
  routerOptions.routes = routes;
  return new VueRouter(routerOptions);
}
/**
 * 创建Admin系统路由，可根据菜单生成路由，菜单为可选项
 * @param options
 * @param menus
 */

export function createAdminRouter(options, menus) {
  Vue.use(VueRouter);
  const routes = genRoutesByOptions(options, menus || []);
  const routerOptions = options.options || Object.create(null);
  routerOptions.routes = routes;
  return new VueRouter(routerOptions);
}
//# sourceMappingURL=createRouter.js.map