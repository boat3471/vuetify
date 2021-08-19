"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZNavigationDrawer = void 0;

var _VNavigationDrawer = _interopRequireDefault(require("./VNavigationDrawer"));

var _mixins = _interopRequireDefault(require("../../util/mixins"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZNavigationDrawer = (0, _mixins.default)(_VNavigationDrawer.default).extend({
  name: 'z-navigation-drawer'
});
exports.ZNavigationDrawer = ZNavigationDrawer;
var _default = ZNavigationDrawer;
exports.default = _default;
//# sourceMappingURL=ZNavigationDrawer.js.map