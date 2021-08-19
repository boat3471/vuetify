"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZAppBarTitle = exports.ZAppBarNavIcon = exports.ZAppBar = void 0;

var _VAppBar = _interopRequireDefault(require("./VAppBar"));

var _VAppBarNavIcon = _interopRequireDefault(require("./VAppBarNavIcon"));

var _VAppBarTitle = _interopRequireDefault(require("./VAppBarTitle"));

var _mixins = _interopRequireDefault(require("../../util/mixins"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZAppBar = (0, _mixins.default)(_VAppBar.default).extend({
  name: 'z-app-bar'
});
exports.ZAppBar = ZAppBar;
var ZAppBarNavIcon = (0, _mixins.default)(_VAppBarNavIcon.default).extend({
  name: 'z-app-bar-nav-icon'
});
exports.ZAppBarNavIcon = ZAppBarNavIcon;
var ZAppBarTitle = (0, _mixins.default)(_VAppBarTitle.default).extend({
  name: 'z-app-bar-title'
});
exports.ZAppBarTitle = ZAppBarTitle;
var _default = {
  $_vuetify_subcomponents: {
    ZAppBar: ZAppBar,
    ZAppBarNavIcon: ZAppBarNavIcon,
    ZAppBarTitle: ZAppBarTitle
  }
};
exports.default = _default;
//# sourceMappingURL=ZAppBar.js.map