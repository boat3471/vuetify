"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZProgressLinear = void 0;

var _VProgressLinear = _interopRequireDefault(require("./VProgressLinear"));

var _mixins = _interopRequireDefault(require("../../util/mixins"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZProgressLinear = (0, _mixins.default)(_VProgressLinear.default).extend({
  name: 'z-progress-linear'
});
exports.ZProgressLinear = ZProgressLinear;
var _default = ZProgressLinear;
exports.default = _default;
//# sourceMappingURL=ZProgressLinear.js.map