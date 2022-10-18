"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZIcon = void 0;

var _VIcon = _interopRequireDefault(require("./VIcon"));

var _mixins = _interopRequireDefault(require("../../util/mixins"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZIcon = (0, _mixins.default)(_VIcon.default).extend({
  name: 'z-icon',
  props: {
    dense: {
      type: Boolean,
      default: function _default() {
        return this.$themeStore.denseMode === true;
      }
    }
  }
});
exports.ZIcon = ZIcon;
var _default2 = ZIcon;
exports.default = _default2;
//# sourceMappingURL=ZIcon.js.map