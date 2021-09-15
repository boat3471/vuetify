"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "ZView403", {
  enumerable: true,
  get: function get() {
    return _ZView.default;
  }
});
Object.defineProperty(exports, "ZView404", {
  enumerable: true,
  get: function get() {
    return _ZView2.default;
  }
});
Object.defineProperty(exports, "ZView500", {
  enumerable: true,
  get: function get() {
    return _ZView3.default;
  }
});
exports.default = exports.ZAdmin = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _ZViewRoot = _interopRequireDefault(require("./ZViewRoot"));

var _ZView = _interopRequireDefault(require("./ZView403"));

var _ZView2 = _interopRequireDefault(require("./ZView404"));

var _ZView3 = _interopRequireDefault(require("./ZView500"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZAdmin = _vue.default.extend(_ZViewRoot.default).extend({
  name: 'z-admin',
  computed: {
    appWrapClass: function appWrapClass() {
      var parent = this.$parent ? this.$parent.$parent : null;

      if (parent && parent.noWrap) {
        return 'v-application--wrap';
      }

      return '';
    }
  }
});

exports.ZAdmin = ZAdmin;
var _default = ZAdmin;
exports.default = _default;
//# sourceMappingURL=index.js.map