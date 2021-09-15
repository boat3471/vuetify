"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZResponsive = void 0;

var _VResponsive = _interopRequireDefault(require("./VResponsive"));

var _mixins = _interopRequireDefault(require("../../util/mixins"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZResponsive = (0, _mixins.default)(_VResponsive.default).extend({
  name: 'z-responsive'
});
exports.ZResponsive = ZResponsive;
var _default = ZResponsive;
exports.default = _default;
//# sourceMappingURL=ZResponsive.js.map