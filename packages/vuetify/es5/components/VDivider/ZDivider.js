"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZDivider = void 0;

var _VDivider = _interopRequireDefault(require("./VDivider"));

var _mixins = _interopRequireDefault(require("../../util/mixins"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZDivider = (0, _mixins.default)(_VDivider.default).extend({
  name: 'z-divider'
});
exports.ZDivider = ZDivider;
var _default = ZDivider;
exports.default = _default;
//# sourceMappingURL=ZDivider.js.map