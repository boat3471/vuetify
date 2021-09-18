"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ZRouter = exports.ZRouterClass = exports.ZAdminRouter = exports.ZAppRouter = void 0;

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _components = require("../components");

var _ZAdmin = require("./components/ZAdmin");

var _vue = _interopRequireDefault(require("vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var instance;

var ZAppRouter =
/*#__PURE__*/
function () {
  function ZAppRouter() {
    _classCallCheck(this, ZAppRouter);

    this._router = null;
    this.isRenderRouterView = false;
  }

  _createClass(ZAppRouter, [{
    key: "genRoute",
    value: function genRoute(path, comp, def) {
      if (comp === true) {
        return [{
          path: path,
          component: def
        }];
      }

      if (comp) {
        return [{
          path: path,
          component: comp
        }];
      }

      return [];
    }
  }, {
    key: "getRouter",
    value: function getRouter() {
      if (this._router) {
        return this._router;
      }

      this._router = new _vueRouter.default(this.routerOptions);
      return this._router;
    }
  }, {
    key: "addNotFoundRoute",
    value: function addNotFoundRoute(route, notFoundComponent) {
      var _this = this;

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
          return _this.addNotFoundRoute(child, notFoundComponent);
        });
      }
    }
  }, {
    key: "setting",
    value: function setting(options) {
      if (options) {
        this.isRenderRouterView = !options.appMain && !options.appHome;
        this.appHome = options.appHome;
        this.appMain = options.appMain || _components.ZApp;
        var routerOptions = options.routerOptions || Object.create(null);
        var routes = routerOptions.routes || [];
        routes.push.apply(routes, _toConsumableArray(this.genRoute('/login', options.appLogin, _ZAdmin.ZDefaultLogin)));
        routes.push.apply(routes, _toConsumableArray(this.genRoute('/500', options.appServerError, _ZAdmin.ZView500)));
        routes.push.apply(routes, _toConsumableArray(this.genRoute('/403', options.appNotAccess, _ZAdmin.ZView403)));
        routes.push.apply(routes, _toConsumableArray(this.genRoute('*', options.appNotFound, _ZAdmin.ZView404)));
        routerOptions.routes = routes;
        this.routerOptions = routerOptions;
      }
    }
  }]);

  return ZAppRouter;
}();

exports.ZAppRouter = ZAppRouter;

var ZAdminRouter =
/*#__PURE__*/
function (_ZAppRouter) {
  _inherits(ZAdminRouter, _ZAppRouter);

  function ZAdminRouter() {
    _classCallCheck(this, ZAdminRouter);

    return _possibleConstructorReturn(this, _getPrototypeOf(ZAdminRouter).apply(this, arguments));
  }

  _createClass(ZAdminRouter, [{
    key: "genComp",
    value: function genComp(usr, def) {
      if (typeof usr === 'boolean') {
        return usr ? def : undefined;
      }

      return usr || def;
    }
  }, {
    key: "genFullPathByMenu",

    /**
     * 生成完整路径
     * @param path
     * @param parentPath
     */
    value: function genFullPathByMenu(path, parentPath) {
      if (path.indexOf('/') !== 0) {
        return "/".concat(parentPath || '', "/").concat(path).replace(/\/+/g, '/');
      }

      return path;
    }
  }, {
    key: "parseUsrRoutes",
    value: function parseUsrRoutes(routes, parentPath) {
      var _this2 = this;

      var list = [];
      routes.forEach(function (route) {
        if (route) {
          route.path = _this2.genFullPathByMenu(route.path);
          route.name = route.name || "usr-".concat(route.path.replace(/\//g, '-'));
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

  }, {
    key: "genRoutesByMenus",
    value: function genRoutesByMenus(menus, rootList) {
      var _this3 = this;

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
            _this3.genRoutesByMenus(menu.children, rootList, path);
          }
        });
      }

      return list;
    }
    /** 生成异常路由 */

  }, {
    key: "genExceptionRoute",
    value: function genExceptionRoute() {
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
    /**
     * 根据菜单创建路由列表
     * @param menus
     * @param redirect
     */

  }, {
    key: "createRoutesByMenus",
    value: function createRoutesByMenus() {
      var menus = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var redirect = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '/home';

      if (menus && menus.length > 0) {
        var children = [];
        children.push.apply(children, _toConsumableArray(this.genRoutesByMenus(menus, children, '/')));
        children.push.apply(children, _toConsumableArray(this.genExceptionRoute())); // children.push({ name: '--empty', path: '', redirect })

        return children;
      }

      return [];
    }
  }, {
    key: "setting",
    value: function setting(options) {
      var NotFoundElement = this.genComp(options.appNotFound, _ZAdmin.ZView404);
      var NotFoundRoute = {
        path: '*',
        component: NotFoundElement
      };
      var routeLogin = {
        name: 'r__login',
        path: '/login',
        component: this.genComp(options.appLogin, _ZAdmin.ZDefaultLogin)
      };
      var route500 = {
        name: 'r__500',
        path: '/500',
        component: this.genComp(options.appServerError, _ZAdmin.ZView500)
      };
      var route403 = {
        name: 'r__403',
        path: '/403',
        component: this.genComp(options.appNotAccess, _ZAdmin.ZView403)
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
        path: '/',
        component: options.appMain || _components.ZAdmin
      };
      var routeHome = {
        path: '',
        component: options.appHome || this.defaultHome
      }; // 跟节点所有前置子节点

      var beforeChildren = [routeHome]; // 跟节点所有中置子节点

      var middleChildren = []; // 跟节点所有后置子节点

      var afterChildren = [NotFoundRoute]; // 给Home设置重定向

      options.redirect && (routeHome.redirect = options.redirect);
      var routerOptions = options.routerOptions || {};
      var usrRoutes = routerOptions.routes || [];
      var usrRedirect = '';
      usrRoutes.forEach(function (route) {
        if (route.path === '/' || route.path === '') {
          var children = route.children;
          delete route.children;

          if ('component' in route && route.component) {
            routeHome.component = route.component;
          } // 设置用户自定义的重定向，会忽略options中定义的重定向


          !usrRedirect && (usrRedirect = route.redirect); // 添加所有子组件到跟路由

          middleChildren.push.apply(middleChildren, _toConsumableArray(children));
        } else {
          middleChildren.push(route);
        }
      });
      usrRedirect && (routeHome.redirect = usrRedirect);
      var menuRoutes = this.createRoutesByMenus(options.menus, '');
      routeRoot.children = [].concat(beforeChildren, middleChildren, _toConsumableArray(menuRoutes), afterChildren);
      routerOptions.routes = [routeLogin, route500, route403, route404, routeRoot, routeRoot404];
      this.routerOptions = routerOptions;
    }
  }, {
    key: "defaultHome",
    get: function get() {
      return _vue.default.extend({
        name: 'z-admin-default-home',
        render: function render(h) {
          return h('div', {
            staticClass: 'z-admin-default-home'
          });
        }
      });
    }
  }]);

  return ZAdminRouter;
}(ZAppRouter);

exports.ZAdminRouter = ZAdminRouter;

var ZRouterClass =
/*#__PURE__*/
function () {
  function ZRouterClass() {
    _classCallCheck(this, ZRouterClass);

    if (!instance) {
      instance = this;
    }

    return instance;
  }

  _createClass(ZRouterClass, [{
    key: "getRouter",
    value: function getRouter() {
      return ZRouterClass.router;
    }
  }, {
    key: "addRoutesByMenus",
    value: function addRoutesByMenus() {
      var menus = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      var router = this.currentRouter;

      if (router) {
        var options = ZRouterClass.adminRouter || {};
        ZRouterClass.menus = menus = menus || []; // todo 待完成，动态添加菜单

        var routes = []; // genRoutesByOptions(options)

        var routerOptions = options.routerOptions || Object.create(null);
        routerOptions.routes = routes;
        var newRouter = new _vueRouter.default(routerOptions);
        router.matcher = newRouter.matcher; // 强制刷新当前路由

        var route = router.currentRoute;
        router.replace({
          path: route.path,
          query: _objectSpread({}, route.query, {
            t: Date.now() + ''
          })
        }).then();
        router.replace({
          path: route.path,
          query: _objectSpread({}, route.query)
        }).then();
      }
    }
  }, {
    key: "self",
    get: function get() {
      return ZRouterClass.router;
    }
  }, {
    key: "currentRouter",
    get: function get() {
      return ZRouterClass.router;
    }
  }, {
    key: "currentRoute",
    get: function get() {
      return ZRouterClass.router.currentRoute;
    }
  }, {
    key: "currentRoutePath",
    get: function get() {
      return ZRouterClass.router.currentRoute.path;
    }
  }], [{
    key: "genAppRouter",
    value: function genAppRouter(options) {
      var appRouter = new ZAppRouter();
      appRouter.setting(options);
      ZRouterClass.appRouter = appRouter;
      return appRouter;
    }
  }, {
    key: "genAdminRouter",
    value: function genAdminRouter(options) {
      var adminRouter = new ZAdminRouter();
      adminRouter.setting(options);
      ZRouterClass.adminRouter = adminRouter;
      return adminRouter;
    }
  }, {
    key: "genInstance",
    value: function genInstance() {
      if (!instance) {
        instance = new ZRouterClass();
      }

      return instance;
    }
  }]);

  return ZRouterClass;
}();

exports.ZRouterClass = ZRouterClass;
var ZRouter = ZRouterClass.genInstance();
exports.ZRouter = ZRouter;
//# sourceMappingURL=ZRouter.js.map