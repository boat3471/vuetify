"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZBottomNavigation = void 0;

var _VBottomNavigation = _interopRequireDefault(require("./VBottomNavigation"));

var _mixins = _interopRequireDefault(require("../../util/mixins"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZBottomNavigation = (0, _mixins.default)(_VBottomNavigation.default).extend({
  name: 'z-bottom-navigation'
});
exports.ZBottomNavigation = ZBottomNavigation;
var _default = ZBottomNavigation;
exports.default = _default;
//# sourceMappingURL=ZBottomNavigation.js.map