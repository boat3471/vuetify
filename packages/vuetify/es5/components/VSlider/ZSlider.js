"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZSlider = void 0;

var _VSlider = _interopRequireDefault(require("./VSlider"));

var _mixins = _interopRequireDefault(require("../../util/mixins"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZSlider = (0, _mixins.default)(_VSlider.default).extend({
  name: 'z-slider'
});
exports.ZSlider = ZSlider;
var _default = ZSlider;
exports.default = _default;
//# sourceMappingURL=ZSlider.js.map