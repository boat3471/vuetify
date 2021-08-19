"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZParallax = void 0;

var _VParallax = _interopRequireDefault(require("./VParallax"));

var _mixins = _interopRequireDefault(require("../../util/mixins"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZParallax = (0, _mixins.default)(_VParallax.default).extend({
  name: 'z-parallax'
});
exports.ZParallax = ZParallax;
var _default = ZParallax;
exports.default = _default;
//# sourceMappingURL=ZParallax.js.map