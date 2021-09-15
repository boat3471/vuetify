"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZAvatar = void 0;

var _VAvatar = _interopRequireDefault(require("./VAvatar"));

var _mixins = _interopRequireDefault(require("../../util/mixins"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZAvatar = (0, _mixins.default)(_VAvatar.default).extend({
  name: 'z-avatar'
});
exports.ZAvatar = ZAvatar;
var _default = ZAvatar;
exports.default = _default;
//# sourceMappingURL=ZAvatar.js.map