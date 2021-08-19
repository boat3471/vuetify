"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZChip = void 0;

var _VChip = _interopRequireDefault(require("./VChip"));

var _mixins = _interopRequireDefault(require("../../util/mixins"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZChip = (0, _mixins.default)(_VChip.default).extend({
  name: 'z-chip'
});
exports.ZChip = ZChip;
var _default = ZChip;
exports.default = _default;
//# sourceMappingURL=ZChip.js.map