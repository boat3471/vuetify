"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZApp = void 0;

var _VApp = _interopRequireDefault(require("./VApp"));

var _mixins = _interopRequireDefault(require("../../util/mixins"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZApp = (0, _mixins.default)(_VApp.default).extend({
  name: 'z-app'
});
exports.ZApp = ZApp;
var _default = ZApp;
exports.default = _default;
//# sourceMappingURL=ZApp.js.map