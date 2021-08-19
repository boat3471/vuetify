"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZSnackbar = void 0;

var _VSnackbar = _interopRequireDefault(require("./VSnackbar"));

var _mixins = _interopRequireDefault(require("../../util/mixins"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZSnackbar = (0, _mixins.default)(_VSnackbar.default).extend({
  name: 'z-snackbar'
});
exports.ZSnackbar = ZSnackbar;
var _default = ZSnackbar;
exports.default = _default;
//# sourceMappingURL=ZSnackbar.js.map