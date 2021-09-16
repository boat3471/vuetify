import VueRouter from 'vue-router';
import { createRoutesByMenus, genFullPath, genRoutesByOptions } from './util/generatorRouter';
import { ZAdmin, ZApp } from '../components';
import { ZView403, ZView404, ZView500, ZDefaultLogin } from './components/ZAdmin';
import Vue from 'vue';
let instance;
export class ZAppRouter {
  constructor() {
    this._router = null;
    this.isRenderRouterView = false;
  }

  genRoute(path, comp, def) {
    if (comp === true) {
      return [{
        path,
        component: def
      }];
    }

    if (comp) {
      return [{
        path,
        component: comp
      }];
    }

    return [];
  }

  getRouter() {
    if (this._router) {
      return this._router;
    }

    this._router = new VueRouter(this.routerOptions);
    return this._router;
  }

  setting(options) {
    if (options) {
      this.isRenderRouterView = !options.appMain && !options.appHome;
      this.appHome = options.appHome;
      this.appMain = options.appMain || ZApp;
      const routerOptions = options.routerOptions || Object.create(null);
      const routes = routerOptions.routes || [];
      routes.push(...this.genRoute('/login', options.appLogin, ZDefaultLogin));
      routes.push(...this.genRoute('/500', options.appServerError, ZView500));
      routes.push(...this.genRoute('/403', options.appNotAccess, ZView403));
      routes.push(...this.genRoute('*', options.appNotFound, ZView404));
      routerOptions.routes = routes;
      this.routerOptions = routerOptions;
    }
  }

}
export class ZAdminRouter extends ZAppRouter {
  genComp(usr, def) {
    if (typeof usr === 'boolean') {
      return usr ? def : undefined;
    }

    return usr || def;
  }

  get defaultHome() {
    return Vue.extend({
      name: 'z-admin-default-home',

      render(h) {
        return h('div', {
          staticClass: 'z-admin-default-home'
        });
      }

    });
  }

  parseUsrRoutes(routes, parentPath) {
    const list = [];
    routes.forEach(route => {
      if (route) {
        route.path = genFullPath(route.path);
        route.name = route.name || `usr-${route.path.replace(/\//g, '-')}`;
        list.push(route);
      }
    });
    return list;
  }

  setting(options) {
    const NotFoundElement = this.genComp(options.appNotFound, ZView404);
    const NotFoundRoute = {
      path: '*',
      component: NotFoundElement
    };
    const routeLogin = {
      name: 'r__login',
      path: '/login',
      component: this.genComp(options.appLogin, ZDefaultLogin)
    };
    const route500 = {
      name: 'r__500',
      path: '/500',
      component: this.genComp(options.appServerError, ZView500)
    };
    const route403 = {
      name: 'r__403',
      path: '/403',
      component: this.genComp(options.appNotAccess, ZView403)
    };
    const route404 = {
      name: 'r__404',
      path: '/404',
      component: NotFoundElement
    };
    const routeRoot404 = {
      name: 'r__root_404',
      path: '*',
      component: NotFoundElement
    };
    const routeRoot = {
      name: 'r__root',
      path: '/',
      component: options.appMain || ZAdmin
    };
    let routeHome = {
      name: 'r__home',
      path: '/',
      component: options.appHome || this.defaultHome
    };
    let beforeChildren = [routeHome];
    const middleChildren = [];
    const afterChildren = [NotFoundRoute]; // 初始化用户自定义重定向路径

    const routerOptions = options.routerOptions || {};
    const usrRoutes = routerOptions.routes || [];
    const [usrHome, ...otherHomes] = usrRoutes.filter(i => /^\/?$/.test(i.path));

    if (usrHome) {
      let homeElement = options.appHome || this.defaultHome;

      if ('component' in usrHome && usrHome.component) {
        homeElement = usrHome.component;
      }

      routeHome = {
        name: 'r__home',
        ...usrHome,
        path: '/',
        component: homeElement
      };
      beforeChildren = [routeHome, ...otherHomes];
    }

    const menuRoutes = createRoutesByMenus(options.menus, '');
    middleChildren.push(...this.parseUsrRoutes(usrRoutes, '/'));

    if (options.redirect) {
      routeHome.redirect = options.redirect;
    }

    routeRoot.children = [...beforeChildren, ...middleChildren, ...menuRoutes, ...afterChildren];
    routerOptions.routes = [routeLogin, route500, route403, route404, routeRoot, routeRoot404];
    this.routerOptions = routerOptions;
  }

}
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
      const options = ZRouterClass.adminRouter || {};
      ZRouterClass.menus = menus = menus || [];
      const routes = genRoutesByOptions(options);
      const routerOptions = options.routerOptions || Object.create(null);
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

  static genAppRouter(options) {
    const appRouter = new ZAppRouter();
    appRouter.setting(options);
    ZRouterClass.appRouter = appRouter;
    return appRouter;
  }

  static genAdminRouter(options) {
    const adminRouter = new ZAdminRouter();
    adminRouter.setting(options);
    ZRouterClass.adminRouter = adminRouter;
    return adminRouter;
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