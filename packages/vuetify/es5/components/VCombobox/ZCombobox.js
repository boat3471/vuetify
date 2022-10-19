"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZCombobox = void 0;

var _VCombobox = _interopRequireDefault(require("./VCombobox"));

var _mixins = _interopRequireDefault(require("../../util/mixins"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZCombobox = (0, _mixins.default)(_VCombobox.default).extend({
  name: 'z-combobox'
});
exports.ZCombobox = ZCombobox;
var _default = ZCombobox;
exports.default = _default;
//# sourceMappingURL=ZCombobox.js.map