"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZFooter = void 0;

var _VFooter = _interopRequireDefault(require("./VFooter"));

var _mixins = _interopRequireDefault(require("../../util/mixins"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZFooter = (0, _mixins.default)(_VFooter.default).extend({
  name: 'z-footer'
});
exports.ZFooter = ZFooter;
var _default = ZFooter;
exports.default = _default;
//# sourceMappingURL=ZFooter.js.map