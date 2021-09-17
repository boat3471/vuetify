import VueRouter from 'vue-router';
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

  addNotFoundRoute(route, notFoundComponent) {
    if (route.children && route.children.length > 0) {
      // 如果已经存在，则不添加
      const needed = !(route.children.some(i => i.path === '*') || route.path === '/' || route.path === '*');

      if (needed) {
        route.children.push({
          path: '*',
          component: notFoundComponent
        });
      }

      route.children.forEach(child => this.addNotFoundRoute(child, notFoundComponent));
    }
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
  /**
   * 生成完整路径
   * @param path
   * @param parentPath
   */


  genFullPathByMenu(path, parentPath) {
    if (path.indexOf('/') !== 0) {
      return `/${parentPath || ''}/${path}`.replace(/\/+/g, '/');
    }

    return path;
  }

  parseUsrRoutes(routes, parentPath) {
    const list = [];
    routes.forEach(route => {
      if (route) {
        route.path = this.genFullPathByMenu(route.path);
        route.name = route.name || `usr-${route.path.replace(/\//g, '-')}`;
        list.push(route);
      }
    });
    return list;
  }
  /**
   * 根据菜单生成路由列表
   * @param menus
   * @param rootList
   * @param parentPath
   */


  genRoutesByMenus(menus, rootList, parentPath = '/') {
    const list = [];

    if (menus) {
      menus.forEach(menu => {
        if (!menu.path && !menu.href && (!menu.children || menu.children.length < 1)) {
          window.console.warn(`菜单配置无法生成路由: \n ${JSON.stringify(menu, null, 4)}`);
          return;
        }

        menu.path = menu.path || '';
        let path = (menu.path || '').indexOf('/') === 0 ? menu.path : `${parentPath}/${menu.path}`;
        path = path.replace(/\/{2,}/g, '/');

        if (menu.path) {
          const route = {
            name: menu.name,
            path: path || '',
            component: menu.component,
            meta: {
              name: menu.name || menu.title,
              ...menu.meta
            }
          };

          if (menu.redirect) {
            route.redirect = menu.redirect;
          }

          if (menu.alias) {
            route.alias = menu.alias;
          }

          if (menu.beforeEnter) {
            route.beforeEnter = menu.beforeEnter;
          }

          route.name = (route.path || '').replace(/\//g, '-');
          rootList.push(route);
        }

        if (menu.children && menu.children.length > 0) {
          this.genRoutesByMenus(menu.children, rootList, path);
        }
      });
    }

    return list;
  }
  /** 生成异常路由 */


  genExceptionRoute(name = '', path = '') {
    const list = [];
    list.push({
      name: `${name}-403`,
      path: `${path}/403`.replace(/\/\//g, '/'),
      component: ZView403
    });
    list.push({
      name: `${name}-500`,
      path: `${path}/500`.replace(/\/\//g, '/'),
      component: ZView500
    });
    list.push({
      name: `${name}-404`,
      path: `${path}/*`.replace(/\/\//g, '/'),
      component: ZView404
    });
    return list;
  }
  /**
   * 根据菜单创建路由列表
   * @param menus
   * @param redirect
   */


  createRoutesByMenus(menus = [], redirect = '/home') {
    if (menus && menus.length > 0) {
      const children = [];
      children.push(...this.genRoutesByMenus(menus, children, '/'));
      children.push(...this.genExceptionRoute()); // children.push({ name: '--empty', path: '', redirect })

      return children;
    }

    return [];
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

    const menuRoutes = this.createRoutesByMenus(options.menus, '');
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

  get self() {
    return ZRouterClass.router;
  }

  get currentRouter() {
    return ZRouterClass.router;
  }

  get currentRoute() {
    return ZRouterClass.router.currentRoute;
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
      ZRouterClass.menus = menus = menus || []; // todo 待完成，动态添加菜单

      const routes = []; // genRoutesByOptions(options)

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