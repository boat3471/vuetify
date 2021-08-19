"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZSparkline = void 0;

var _VSparkline = _interopRequireDefault(require("./VSparkline"));

var _mixins = _interopRequireDefault(require("../../util/mixins"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZSparkline = (0, _mixins.default)(_VSparkline.default).extend({
  name: 'z-sparkline'
});
exports.ZSparkline = ZSparkline;
var _default = ZSparkline;
exports.default = _default;
//# sourceMappingURL=ZSparkline.js.map