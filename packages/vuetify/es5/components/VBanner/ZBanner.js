"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZBanner = void 0;

var _VBanner = _interopRequireDefault(require("./VBanner"));

var _mixins = _interopRequireDefault(require("../../util/mixins"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZBanner = (0, _mixins.default)(_VBanner.default).extend({
  name: 'z-banner'
});
exports.ZBanner = ZBanner;
var _default = ZBanner;
exports.default = _default;
//# sourceMappingURL=ZBanner.js.map