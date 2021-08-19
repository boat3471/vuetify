"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZContent = void 0;

var _VContent = _interopRequireDefault(require("./VContent"));

var _mixins = _interopRequireDefault(require("../../util/mixins"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZContent = (0, _mixins.default)(_VContent.default).extend({
  name: 'z-content'
});
exports.ZContent = ZContent;
var _default = ZContent;
exports.default = _default;
//# sourceMappingURL=ZContent.js.map