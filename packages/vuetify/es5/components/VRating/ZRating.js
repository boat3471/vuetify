"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZRating = void 0;

var _VRating = _interopRequireDefault(require("./VRating"));

var _mixins = _interopRequireDefault(require("../../util/mixins"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZRating = (0, _mixins.default)(_VRating.default).extend({
  name: 'z-rating'
});
exports.ZRating = ZRating;
var _default = ZRating;
exports.default = _default;
//# sourceMappingURL=ZRating.js.map