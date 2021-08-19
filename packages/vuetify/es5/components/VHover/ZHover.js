"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZHover = void 0;

var _VHover = _interopRequireDefault(require("./VHover"));

var _mixins = _interopRequireDefault(require("../../util/mixins"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZHover = (0, _mixins.default)(_VHover.default).extend({
  name: 'z-hover'
});
exports.ZHover = ZHover;
var _default = ZHover;
exports.default = _default;
//# sourceMappingURL=ZHover.js.map