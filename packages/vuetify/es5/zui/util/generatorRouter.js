"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.genExceptionRoute = genExceptionRoute;
exports.genRoutesByOptions = genRoutesByOptions;
exports.genRoutesByMenus = genRoutesByMenus;
exports.createRoutesByMenus = createRoutesByMenus;
exports.genFullPath = genFullPath;

var _vue = _interopRequireDefault(require("vue"));

var _ZAdmin = require("../components/ZAdmin");

var _debug = _interopRequireDefault(require("./debug"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var defaultHome = _vue.default.extend({
  name: 'z-admin-default-home',
  render: function render(h) {
    return h('div', {
      staticClass: 'z-admin-default-home'
    });
  }
});
/** 生成异常路由 */


function genExceptionRoute() {
  var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
  var path = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var list = [];
  list.push({
    name: "".concat(name, "-403"),
    path: "".concat(path, "/403").replace(/\/\//g, '/'),
    component: _ZAdmin.ZView403
  });
  list.push({
    name: "".concat(name, "-500"),
    path: "".concat(path, "/500").replace(/\/\//g, '/'),
    component: _ZAdmin.ZView500
  });
  list.push({
    name: "".concat(name, "-404"),
    path: "".concat(path, "/*").replace(/\/\//g, '/'),
    component: _ZAdmin.ZView404
  });
  return list;
}
/** 添加404 */


function addNotFoundRoute(route, notFoundComponent) {
  if (route.children && route.children.length > 0) {
    // 如果已经存在，则不添加
    var needed = !(route.children.some(function (i) {
      return i.path === '*';
    }) || route.path === '/' || route.path === '*');

    if (needed) {
      route.children.push({
        path: '*',
        component: notFoundComponent
      });
    }

    route.children.forEach(function (child) {
      return addNotFoundRoute(child, notFoundComponent);
    });
  }
}

_debug.default.ignore(addNotFoundRoute);

function parseUsrRoutes(routes, parentPath) {
  var list = [];
  routes.forEach(function (route) {
    if (route) {
      route.path = genFullPath(route.path);
      route.name = route.name || "usr-".concat(route.path.replace(/\//g, '-'));
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


function genRoutesByOptions(options) {
  var NotFoundElement = genComp(options.appNotFound, _ZAdmin.ZView404);
  var NotFoundRoute = {
    path: '*',
    component: NotFoundElement
  };
  var routeLogin = {
    name: 'r__login',
    path: '/login',
    component: genComp(options.appLogin, _ZAdmin.ZDefaultLogin)
  };
  var route500 = {
    name: 'r__500',
    path: '/500',
    component: genComp(options.appServerError, _ZAdmin.ZView500)
  };
  var route403 = {
    name: 'r__403',
    path: '/403',
    component: genComp(options.appNotAccess, _ZAdmin.ZView403)
  };
  var route404 = {
    name: 'r__404',
    path: '/404',
    component: NotFoundElement
  };
  var routeRoot404 = {
    name: 'r__root_404',
    path: '*',
    component: NotFoundElement
  };
  var routeRoot = {
    name: 'r__root',
    path: '/',
    component: options.appMain
  };
  var routeHome = {
    name: 'r__home',
    path: '/',
    component: options.appHome || defaultHome
  };
  var beforeChildren = [routeHome];
  var middleChildren = [];
  var afterChildren = [NotFoundRoute]; // 初始化用户自定义重定向路径

  var routerOptions = options.routerOptions || {};
  var usrRoutes = routerOptions.routes || [];

  var _usrRoutes$filter = usrRoutes.filter(function (i) {
    return /^\/?$/.test(i.path);
  }),
      _usrRoutes$filter2 = _toArray(_usrRoutes$filter),
      usrHome = _usrRoutes$filter2[0],
      otherHomes = _usrRoutes$filter2.slice(1);

  if (usrHome) {
    var homeElement = options.appHome || defaultHome;

    if ('component' in usrHome && usrHome.component) {
      homeElement = usrHome.component;
    }

    routeHome = _objectSpread({
      name: 'r__home'
    }, usrHome, {
      path: '/',
      component: homeElement
    });
    beforeChildren = [routeHome].concat(_toConsumableArray(otherHomes));
  } // console.info('usrRoutes', usrRedirect, usrRoutes)
  // const redirect = usrRedirect || ''
  // routeRoot.children = createRoutesByMenus(menus, redirect)
  // addNotFoundRoute(routeRoot, Comp404)


  middleChildren.push.apply(middleChildren, _toConsumableArray(parseUsrRoutes(usrRoutes, '/')));
  routeRoot.children = [].concat(_toConsumableArray(beforeChildren), middleChildren, afterChildren);
  return [routeLogin, route500, route403, route404, routeRoot, routeRoot404];
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