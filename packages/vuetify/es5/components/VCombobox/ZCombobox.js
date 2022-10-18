"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZCombobox = void 0;

var _VCombobox = _interopRequireDefault(require("./VCombobox"));

var _mixins = _interopRequireDefault(require("../../util/mixins"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZCombobox = (0, _mixins.default)(_VCombobox.default).extend({
  name: 'z-combobox',
  props: {
    dense: {
      type: Boolean,
      default: function _default() {
        return this.$themeStore.denseMode === true;
      }
    }
  }
});
exports.ZCombobox = ZCombobox;
var _default2 = ZCombobox;
exports.default = _default2;
//# sourceMappingURL=ZCombobox.js.map