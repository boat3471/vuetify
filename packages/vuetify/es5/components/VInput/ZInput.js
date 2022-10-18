"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZInput = void 0;

var _VInput = _interopRequireDefault(require("./VInput"));

var _mixins = _interopRequireDefault(require("../../util/mixins"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZInput = (0, _mixins.default)(_VInput.default).extend({
  name: 'z-input',
  props: {
    dense: {
      type: Boolean,
      default: function _default() {
        return this.$themeStore.denseMode === true;
      }
    }
  }
});
exports.ZInput = ZInput;
var _default2 = ZInput;
exports.default = _default2;
//# sourceMappingURL=ZInput.js.map