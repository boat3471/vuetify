"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZMenu = void 0;

var _VMenu = _interopRequireDefault(require("./VMenu"));

var _mixins = _interopRequireDefault(require("../../util/mixins"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZMenu = (0, _mixins.default)(_VMenu.default).extend({
  name: 'z-menu'
});
exports.ZMenu = ZMenu;
var _default = ZMenu;
exports.default = _default;
//# sourceMappingURL=ZMenu.js.map