"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZAlert = void 0;

var _VAlert = _interopRequireDefault(require("./VAlert"));

var _mixins = _interopRequireDefault(require("../../util/mixins"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZAlert = (0, _mixins.default)(_VAlert.default).extend({
  name: 'z-alert',
  props: {
    dense: {
      type: Boolean,
      default: function _default() {
        return this.$themeStore.denseMode === true;
      }
    }
  }
});
exports.ZAlert = ZAlert;
var _default2 = ZAlert;
exports.default = _default2;
//# sourceMappingURL=ZAlert.js.map