"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZImg = void 0;

var _VImg = _interopRequireDefault(require("./VImg"));

var _mixins = _interopRequireDefault(require("../../util/mixins"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZImg = (0, _mixins.default)(_VImg.default).extend({
  name: 'z-img'
});
exports.ZImg = ZImg;
var _default = ZImg;
exports.default = _default;
//# sourceMappingURL=ZImg.js.map