"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZThemeProvider = void 0;

var _VThemeProvider = _interopRequireDefault(require("./VThemeProvider"));

var _mixins = _interopRequireDefault(require("../../util/mixins"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZThemeProvider = (0, _mixins.default)(_VThemeProvider.default).extend({
  name: 'z-theme-provider'
});
exports.ZThemeProvider = ZThemeProvider;
var _default = ZThemeProvider;
exports.default = _default;
//# sourceMappingURL=ZThemeProvider.js.map