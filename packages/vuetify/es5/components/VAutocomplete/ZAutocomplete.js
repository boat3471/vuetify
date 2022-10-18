"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZAutocomplete = void 0;

var _VAutocomplete = _interopRequireDefault(require("./VAutocomplete"));

var _mixins = _interopRequireDefault(require("../../util/mixins"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZAutocomplete = (0, _mixins.default)(_VAutocomplete.default).extend({
  name: 'z-autocomplete',
  props: {
    dense: {
      type: Boolean,
      default: function _default() {
        return this.$themeStore.denseMode === true;
      }
    }
  }
});
exports.ZAutocomplete = ZAutocomplete;
var _default2 = ZAutocomplete;
exports.default = _default2;
//# sourceMappingURL=ZAutocomplete.js.map