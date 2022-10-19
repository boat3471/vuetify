"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZInput = void 0;

var _VInput = _interopRequireDefault(require("./VInput"));

var _mixins = _interopRequireDefault(require("../../util/mixins"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZInput = (0, _mixins.default)(_VInput.default).extend({
  name: 'z-input'
});
exports.ZInput = ZInput;
var _default = ZInput;
exports.default = _default;
//# sourceMappingURL=ZInput.js.map