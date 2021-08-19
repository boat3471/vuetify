"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZMain = void 0;

var _VMain = _interopRequireDefault(require("./VMain"));

var _mixins = _interopRequireDefault(require("../../util/mixins"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZMain = (0, _mixins.default)(_VMain.default).extend({
  name: 'z-main'
});
exports.ZMain = ZMain;
var _default = ZMain;
exports.default = _default;
//# sourceMappingURL=ZMain.js.map