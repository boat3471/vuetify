"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZChipGroup = void 0;

var _VChipGroup = _interopRequireDefault(require("./VChipGroup"));

var _mixins = _interopRequireDefault(require("../../util/mixins"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZChipGroup = (0, _mixins.default)(_VChipGroup.default).extend({
  name: 'z-chip-group'
});
exports.ZChipGroup = ZChipGroup;
var _default = ZChipGroup;
exports.default = _default;
//# sourceMappingURL=ZChipGroup.js.map