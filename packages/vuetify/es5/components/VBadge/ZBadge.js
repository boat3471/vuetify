"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZBadge = void 0;

var _VBadge = _interopRequireDefault(require("./VBadge"));

var _mixins = _interopRequireDefault(require("../../util/mixins"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZBadge = (0, _mixins.default)(_VBadge.default).extend({
  name: 'z-badge'
});
exports.ZBadge = ZBadge;
var _default = ZBadge;
exports.default = _default;
//# sourceMappingURL=ZBadge.js.map