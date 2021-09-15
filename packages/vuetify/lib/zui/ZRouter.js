import VueRouter from 'vue-router';
import { genRoutesByOptions } from './util/generatorRouter';
let instance;
export class ZRouterClass {
  constructor() {
    if (!instance) {
      instance = this;
    }

    return instance;
  }

  get currentRouter() {
    return ZRouterClass.router;
  }

  get currentRoutePath() {
    return ZRouterClass.router.currentRoute.path;
  }

  getRouter() {
    return ZRouterClass.router;
  }

  addRoutesByMenus(menus = []) {
    const router = this.currentRouter;

    if (router) {
      const options = ZRouterClass.options || {};
      ZRouterClass.menus = menus = menus || [];
      const routes = genRoutesByOptions(options, menus);
      const routerOptions = options.options || Object.create(null);
      routerOptions.routes = routes;
      const newRouter = new VueRouter(routerOptions);
      router.matcher = newRouter.matcher; // 强制刷新当前路由

      const route = router.currentRoute;
      router.replace({
        path: route.path,
        query: { ...route.query,
          t: Date.now() + ''
        }
      }).then();
      router.replace({
        path: route.path,
        query: { ...route.query
        }
      }).then();
    }
  }
  /**
   * 设置路由器
   * @internal
   */


  setting(options, menus) {
    ZRouterClass.options = options = options || {};
    ZRouterClass.menus = menus = menus || [];
    const routes = genRoutesByOptions(options, menus);
    const routerOptions = options.options || Object.create(null);
    routerOptions.routes = routes;
    const router = new VueRouter(routerOptions);
    ZRouterClass.router = router;
    return router;
  }

  static genInstance() {
    if (!instance) {
      instance = new ZRouterClass();
    }

    return instance;
  }

}
export const ZRouter = ZRouterClass.genInstance();
//# sourceMappingURL=ZRouter.js.map