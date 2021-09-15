"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZRangeSlider = void 0;

var _VRangeSlider = _interopRequireDefault(require("./VRangeSlider"));

var _mixins = _interopRequireDefault(require("../../util/mixins"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZRangeSlider = (0, _mixins.default)(_VRangeSlider.default).extend({
  name: 'z-range-slider'
});
exports.ZRangeSlider = ZRangeSlider;
var _default = ZRangeSlider;
exports.default = _default;
//# sourceMappingURL=ZRangeSlider.js.map