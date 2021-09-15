import ZView403 from '../components/ZAdmin/ZView403';
import ZView500 from '../components/ZAdmin/ZView500';
import ZView404 from '../components/ZAdmin/ZView404';
import ZDefaultLogin from '../components/ZAdmin/ZDefaultLogin';
import ZAdmin from '../components/ZAdmin';
/**
 * 生成异常路由
 * @param name
 * @param path
 */

export function genExceptionRoute(name = '', path = '') {
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
 * 添加404
 * @param route
 * @param notFound
 */

export function addNotFoundRoute(route, notFound) {
  if (route.children && route.children.length > 0) {
    if (route.path !== '/') {
      route.children.push({
        path: '*',
        component: notFound
      });
    }

    route.children.forEach(child => addNotFoundRoute(child, notFound));
  }
}
/**
 * 根据选项生成路由列表
 */

export function genRoutesByOptions(options, menus, routeRoot) {
  const routerOptions = options.options || {};
  const routeLogin = {
    name: 'r__login',
    path: '/login',
    component: ZDefaultLogin
  };
  const route500 = {
    name: 'r__500',
    path: '/500',
    component: ZView500
  };
  const route403 = {
    name: 'r__403',
    path: '/403',
    component: ZView403
  };
  const route404 = {
    name: 'r__404',
    path: '/404',
    component: ZView404
  };
  const routeNotFound = {
    name: 'r__not__found',
    path: '*',
    component: ZView404
  };
  routeRoot = routeRoot || {
    name: 'r__root',
    path: '/*',
    component: ZAdmin,
    children: [routeNotFound]
  };
  /** 路由集 */

  const routes = [routeLogin, route500, route403, route404, routeRoot]; // 初始化用户自定义路由

  let tempRedirect;
  const tempRoutes = routerOptions.routes || [];
  tempRoutes.forEach(route => {
    if (route && route.path) {
      if (route.path === '/') {
        tempRedirect = route.redirect || '';
      }

      route.path = genFullPath(route.path); // 检查是否和默认路由冲突，冲突则将用户路由覆盖默认路由

      const tempRoute = routes.find(i => i.path === route.path);

      if (tempRoute) {
        Object.assign(tempRoute, route);
      } else {
        // 给路由增加 404
        addNotFoundRoute(route, route404.component);
        routes.splice(4, 0, route);
      }
    }
  });
  addNotFoundRoute(routeRoot, route404.component);
  const redirect = options.routeHome ? options.routeHome.redirect : tempRedirect || '/home';
  routeRoot.children = createRoutesByMenus(menus, redirect);
  options.routeHome && Object.assign(routeRoot, options.routeHome);
  options.routeLogin && Object.assign(routeLogin, options.routeLogin);
  options.route500 && Object.assign(route500, options.route500);
  options.route403 && Object.assign(route403, options.route403);
  options.route404 && Object.assign(route404, options.route404);
  options.route404 && Object.assign(routeNotFound, options.route404);
  return routes;
}
export function genAppRoutesByOptions(options, menus) {
  const routeNotFound = {
    name: 'r__not__found',
    path: '/*',
    component: ZView404
  };
  return genRoutesByOptions(options, menus, routeNotFound);
}
/**
 * 根据菜单生成路由列表
 * @param menus
 * @param rootList
 * @param parentPath
 */

export function genRoutesByMenus(menus, rootList, parentPath = '/') {
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
        genRoutesByMenus(menu.children, rootList, path);
      }
    });
  }

  return list;
}
/**
 * 根据菜单创建路由列表
 * @param menus
 * @param redirect
 */

export function createRoutesByMenus(menus = [], redirect = '/home') {
  if (menus && menus.length > 0) {
    const children = [];
    children.push(...genRoutesByMenus(menus, children, '/'));
    children.push(...genExceptionRoute()); // children.push({ name: '--empty', path: '', redirect })

    return children;
  }

  return [];
}
/**
 * 生成完整路径
 * @param path
 * @param parentPath
 */

export function genFullPath(path, parentPath) {
  if (path.indexOf('/') !== 0) {
    return `/${parentPath || ''}/${path}`.replace(/\/+/g, '/');
  }

  return path;
}
//# sourceMappingURL=generatorRouter.js.map