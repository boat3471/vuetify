"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZRating = void 0;

var _VRating = _interopRequireDefault(require("./VRating"));

var _mixins = _interopRequireDefault(require("../../util/mixins"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZRating = (0, _mixins.default)(_VRating.default).extend({
  name: 'z-rating',
  props: {
    dense: {
      type: Boolean,
      default: function _default() {
        return this.$themeStore.denseMode === true;
      }
    }
  }
});
exports.ZRating = ZRating;
var _default2 = ZRating;
exports.default = _default2;
//# sourceMappingURL=ZRating.js.map