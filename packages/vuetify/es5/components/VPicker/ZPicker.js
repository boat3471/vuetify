"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZPicker = void 0;

var _VPicker = _interopRequireDefault(require("./VPicker"));

var _mixins = _interopRequireDefault(require("../../util/mixins"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZPicker = (0, _mixins.default)(_VPicker.default).extend({
  name: 'z-picker'
});
exports.ZPicker = ZPicker;
var _default = ZPicker;
exports.default = _default;
//# sourceMappingURL=ZPicker.js.map