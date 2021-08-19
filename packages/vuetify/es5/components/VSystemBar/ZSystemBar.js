"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZSystemBar = void 0;

var _VSystemBar = _interopRequireDefault(require("./VSystemBar"));

var _mixins = _interopRequireDefault(require("../../util/mixins"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZSystemBar = (0, _mixins.default)(_VSystemBar.default).extend({
  name: 'z-system-bar'
});
exports.ZSystemBar = ZSystemBar;
var _default = ZSystemBar;
exports.default = _default;
//# sourceMappingURL=ZSystemBar.js.map