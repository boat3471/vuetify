"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ZRouter = exports.ZRouterClass = void 0;

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _generatorRouter = require("./util/generatorRouter");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var instance;

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
        var options = ZRouterClass.options || {};
        ZRouterClass.menus = menus = menus || [];
        var routes = (0, _generatorRouter.genRoutesByOptions)(options, menus);
        var routerOptions = options.options || Object.create(null);
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
    /**
     * 设置路由器
     * @internal
     */

  }, {
    key: "setting",
    value: function setting(options, menus) {
      ZRouterClass.options = options = options || {};
      ZRouterClass.menus = menus = menus || [];
      var routes = (0, _generatorRouter.genRoutesByOptions)(options, menus);
      var routerOptions = options.options || Object.create(null);
      routerOptions.routes = routes;
      var router = new _vueRouter.default(routerOptions);
      ZRouterClass.router = router;
      return router;
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