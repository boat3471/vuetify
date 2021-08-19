"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZOverflowBtn = void 0;

var _VOverflowBtn = _interopRequireDefault(require("./VOverflowBtn"));

var _mixins = _interopRequireDefault(require("../../util/mixins"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZOverflowBtn = (0, _mixins.default)(_VOverflowBtn.default).extend({
  name: 'z-overflow-btn'
});
exports.ZOverflowBtn = ZOverflowBtn;
var _default = ZOverflowBtn;
exports.default = _default;
//# sourceMappingURL=ZOverflowBtn.js.map