"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZVirtualScroll = void 0;

var _VVirtualScroll = _interopRequireDefault(require("./VVirtualScroll"));

var _mixins = _interopRequireDefault(require("../../util/mixins"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZVirtualScroll = (0, _mixins.default)(_VVirtualScroll.default).extend({
  name: 'z-virtual-scroll'
});
exports.ZVirtualScroll = ZVirtualScroll;
var _default = ZVirtualScroll;
exports.default = _default;
//# sourceMappingURL=ZVirtualScroll.js.map