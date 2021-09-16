"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ZRouter = exports.ZRouterClass = exports.ZAdminRouter = exports.ZAppRouter = void 0;

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _generatorRouter = require("./util/generatorRouter");

var _components = require("../components");

var _ZAdmin = require("./components/ZAdmin");

var _vue = _interopRequireDefault(require("vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

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
    key: "parseUsrRoutes",
    value: function parseUsrRoutes(routes, parentPath) {
      var list = [];
      routes.forEach(function (route) {
        if (route) {
          route.path = (0, _generatorRouter.genFullPath)(route.path);
          route.name = route.name || "usr-".concat(route.path.replace(/\//g, '-'));
          list.push(route);
        }
      });
      return list;
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
        name: 'r__root',
        path: '/',
        component: options.appMain || _components.ZAdmin
      };
      var routeHome = {
        name: 'r__home',
        path: '/',
        component: options.appHome || this.defaultHome
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
        var homeElement = options.appHome || this.defaultHome;

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
      }

      var menuRoutes = (0, _generatorRouter.createRoutesByMenus)(options.menus, '');
      middleChildren.push.apply(middleChildren, _toConsumableArray(this.parseUsrRoutes(usrRoutes, '/')));

      if (options.redirect) {
        routeHome.redirect = options.redirect;
      }

      routeRoot.children = [].concat(_toConsumableArray(beforeChildren), middleChildren, _toConsumableArray(menuRoutes), afterChildren);
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
        ZRouterClass.menus = menus = menus || [];
        var routes = (0, _generatorRouter.genRoutesByOptions)(options);
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
    key: "currentRouter",
    get: function get() {
      return ZRouterClass.router;
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