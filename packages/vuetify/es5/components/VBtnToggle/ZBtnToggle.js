"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZBtnToggle = void 0;

var _VBtnToggle = _interopRequireDefault(require("./VBtnToggle"));

var _mixins = _interopRequireDefault(require("../../util/mixins"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZBtnToggle = (0, _mixins.default)(_VBtnToggle.default).extend({
  name: 'z-btn-toggle',
  props: {
    dense: {
      type: Boolean,
      default: function _default() {
        return this.$themeStore.denseMode === true;
      }
    }
  }
});
exports.ZBtnToggle = ZBtnToggle;
var _default2 = ZBtnToggle;
exports.default = _default2;
//# sourceMappingURL=ZBtnToggle.js.map