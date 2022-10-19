"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZFileInput = void 0;

var _VFileInput = _interopRequireDefault(require("./VFileInput"));

var _mixins = _interopRequireDefault(require("../../util/mixins"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZFileInput = (0, _mixins.default)(_VFileInput.default).extend({
  name: 'z-file-input'
});
exports.ZFileInput = ZFileInput;
var _default = ZFileInput;
exports.default = _default;
//# sourceMappingURL=ZFileInput.js.map