"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZFileInput = void 0;

var _VFileInput = _interopRequireDefault(require("./VFileInput"));

var _mixins = _interopRequireDefault(require("../../util/mixins"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZFileInput = (0, _mixins.default)(_VFileInput.default).extend({
  name: 'z-file-input',
  props: {
    dense: {
      type: Boolean,
      default: function _default() {
        return this.$themeStore.denseMode === true;
      }
    }
  }
});
exports.ZFileInput = ZFileInput;
var _default2 = ZFileInput;
exports.default = _default2;
//# sourceMappingURL=ZFileInput.js.map