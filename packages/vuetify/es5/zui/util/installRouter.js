"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.installRouter = installRouter;
Object.defineProperty(exports, "VueRouter", {
  enumerable: true,
  get: function get() {
    return _vueRouter.default;
  }
});

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function installRouter() {
  var installVueRouter = _vueRouter.default.install;

  if (installVueRouter.installed !== true) {
    try {
      _vue.default.use(_vueRouter.default);
    } catch (e) {// ignore
    }
  }
}
//# sourceMappingURL=installRouter.js.map