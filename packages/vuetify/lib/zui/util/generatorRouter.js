import Vue from 'vue';
import { ZView403, ZView404, ZView500, ZDefaultLogin } from '../components/ZAdmin';
import debug from './debug';
const defaultHome = Vue.extend({
  name: 'z-admin-default-home',

  render(h) {
    return h('div', {
      staticClass: 'z-admin-default-home'
    });
  }

});
/** 生成异常路由 */

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
/** 添加404 */

function addNotFoundRoute(route, notFoundComponent) {
  if (route.children && route.children.length > 0) {
    // 如果已经存在，则不添加
    const needed = !(route.children.some(i => i.path === '*') || route.path === '/' || route.path === '*');

    if (needed) {
      route.children.push({
        path: '*',
        component: notFoundComponent
      });
    }

    route.children.forEach(child => addNotFoundRoute(child, notFoundComponent));
  }
}

debug.ignore(addNotFoundRoute);

function parseUsrRoutes(routes, parentPath) {
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

function genComp(usr, def) {
  if (typeof usr === 'boolean') {
    return usr ? def : undefined;
  }

  return usr || def;
}
/**
 * 根据选项生成路由列表
 */


export function genRoutesByOptions(options) {
  const NotFoundElement = genComp(options.appNotFound, ZView404);
  const NotFoundRoute = {
    path: '*',
    component: NotFoundElement
  };
  const routeLogin = {
    name: 'r__login',
    path: '/login',
    component: genComp(options.appLogin, ZDefaultLogin)
  };
  const route500 = {
    name: 'r__500',
    path: '/500',
    component: genComp(options.appServerError, ZView500)
  };
  const route403 = {
    name: 'r__403',
    path: '/403',
    component: genComp(options.appNotAccess, ZView403)
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
    component: options.appMain
  };
  let routeHome = {
    name: 'r__home',
    path: '/',
    component: options.appHome || defaultHome
  };
  let beforeChildren = [routeHome];
  const middleChildren = [];
  const afterChildren = [NotFoundRoute]; // 初始化用户自定义重定向路径

  const routerOptions = options.routerOptions || {};
  const usrRoutes = routerOptions.routes || [];
  const [usrHome, ...otherHomes] = usrRoutes.filter(i => /^\/?$/.test(i.path));

  if (usrHome) {
    let homeElement = options.appHome || defaultHome;

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
  } // console.info('usrRoutes', usrRedirect, usrRoutes)
  // const redirect = usrRedirect || ''
  // routeRoot.children = createRoutesByMenus(menus, redirect)
  // addNotFoundRoute(routeRoot, Comp404)


  middleChildren.push(...parseUsrRoutes(usrRoutes, '/'));
  routeRoot.children = [...beforeChildren, ...middleChildren, ...afterChildren];
  return [routeLogin, route500, route403, route404, routeRoot, routeRoot404];
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