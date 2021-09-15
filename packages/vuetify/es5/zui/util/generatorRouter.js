"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.genExceptionRoute = genExceptionRoute;
exports.addNotFoundRoute = addNotFoundRoute;
exports.genRoutesByOptions = genRoutesByOptions;
exports.genAppRoutesByOptions = genAppRoutesByOptions;
exports.genRoutesByMenus = genRoutesByMenus;
exports.createRoutesByMenus = createRoutesByMenus;
exports.genFullPath = genFullPath;

var _ZView = _interopRequireDefault(require("../components/ZAdmin/ZView403"));

var _ZView2 = _interopRequireDefault(require("../components/ZAdmin/ZView500"));

var _ZView3 = _interopRequireDefault(require("../components/ZAdmin/ZView404"));

var _ZDefaultLogin = _interopRequireDefault(require("../components/ZAdmin/ZDefaultLogin"));

var _ZAdmin = _interopRequireDefault(require("../components/ZAdmin"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/**
 * 生成异常路由
 * @param name
 * @param path
 */
function genExceptionRoute() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var list = [];
  list.push({
    name: "".concat(name, "-403"),
    path: "".concat(path, "/403").replace(/\/\//g, '/'),
    component: _ZView.default
  });
  list.push({
    name: "".concat(name, "-500"),
    path: "".concat(path, "/500").replace(/\/\//g, '/'),
    component: _ZView2.default
  });
  list.push({
    name: "".concat(name, "-404"),
    path: "".concat(path, "/*").replace(/\/\//g, '/'),
    component: _ZView3.default
  });
  return list;
}
/**
 * 添加404
 * @param route
 * @param notFound
 */


function addNotFoundRoute(route, notFound) {
  if (route.children && route.children.length > 0) {
    if (route.path !== '/') {
      route.children.push({
        path: '*',
        component: notFound
      });
    }

    route.children.forEach(function (child) {
      return addNotFoundRoute(child, notFound);
    });
  }
}
/**
 * 根据选项生成路由列表
 */


function genRoutesByOptions(options, menus, routeRoot) {
  var routerOptions = options.options || {};
  var routeLogin = {
    name: 'r__login',
    path: '/login',
    component: _ZDefaultLogin.default
  };
  var route500 = {
    name: 'r__500',
    path: '/500',
    component: _ZView2.default
  };
  var route403 = {
    name: 'r__403',
    path: '/403',
    component: _ZView.default
  };
  var route404 = {
    name: 'r__404',
    path: '/404',
    component: _ZView3.default
  };
  var routeNotFound = {
    name: 'r__not__found',
    path: '*',
    component: _ZView3.default
  };
  routeRoot = routeRoot || {
    name: 'r__root',
    path: '/*',
    component: _ZAdmin.default,
    children: [routeNotFound]
  };
  /** 路由集 */

  var routes = [routeLogin, route500, route403, route404, routeRoot]; // 初始化用户自定义路由

  var tempRedirect;
  var tempRoutes = routerOptions.routes || [];
  tempRoutes.forEach(function (route) {
    if (route && route.path) {
      if (route.path === '/') {
        tempRedirect = route.redirect || '';
      }

      route.path = genFullPath(route.path); // 检查是否和默认路由冲突，冲突则将用户路由覆盖默认路由

      var tempRoute = routes.find(function (i) {
        return i.path === route.path;
      });

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
  var redirect = options.routeHome ? options.routeHome.redirect : tempRedirect || '/home';
  routeRoot.children = createRoutesByMenus(menus, redirect);
  options.routeHome && Object.assign(routeRoot, options.routeHome);
  options.routeLogin && Object.assign(routeLogin, options.routeLogin);
  options.route500 && Object.assign(route500, options.route500);
  options.route403 && Object.assign(route403, options.route403);
  options.route404 && Object.assign(route404, options.route404);
  options.route404 && Object.assign(routeNotFound, options.route404);
  return routes;
}

function genAppRoutesByOptions(options, menus) {
  var routeNotFound = {
    name: 'r__not__found',
    path: '/*',
    component: _ZView3.default
  };
  return genRoutesByOptions(options, menus, routeNotFound);
}
/**
 * 根据菜单生成路由列表
 * @param menus
 * @param rootList
 * @param parentPath
 */


function genRoutesByMenus(menus, rootList) {
  var parentPath = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '/';
  var list = [];

  if (menus) {
    menus.forEach(function (menu) {
      if (!menu.path && !menu.href && (!menu.children || menu.children.length < 1)) {
        window.console.warn("\u83DC\u5355\u914D\u7F6E\u65E0\u6CD5\u751F\u6210\u8DEF\u7531: \n ".concat(JSON.stringify(menu, null, 4)));
        return;
      }

      menu.path = menu.path || '';
      var path = (menu.path || '').indexOf('/') === 0 ? menu.path : "".concat(parentPath, "/").concat(menu.path);
      path = path.replace(/\/{2,}/g, '/');

      if (menu.path) {
        var route = {
          name: menu.name,
          path: path || '',
          component: menu.component,
          meta: _objectSpread({
            name: menu.name || menu.title
          }, menu.meta)
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


function createRoutesByMenus() {
  var menus = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var redirect = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '/home';

  if (menus && menus.length > 0) {
    var children = [];
    children.push.apply(children, _toConsumableArray(genRoutesByMenus(menus, children, '/')));
    children.push.apply(children, _toConsumableArray(genExceptionRoute())); // children.push({ name: '--empty', path: '', redirect })

    return children;
  }

  return [];
}
/**
 * 生成完整路径
 * @param path
 * @param parentPath
 */


function genFullPath(path, parentPath) {
  if (path.indexOf('/') !== 0) {
    return "/".concat(parentPath || '', "/").concat(path).replace(/\/+/g, '/');
  }

  return path;
}
//# sourceMappingURL=generatorRouter.js.map