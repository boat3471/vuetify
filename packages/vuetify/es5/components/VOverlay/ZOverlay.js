"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZOverlay = void 0;

var _VOverlay = _interopRequireDefault(require("./VOverlay"));

var _mixins = _interopRequireDefault(require("../../util/mixins"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZOverlay = (0, _mixins.default)(_VOverlay.default).extend({
  name: 'z-overlay'
});
exports.ZOverlay = ZOverlay;
var _default = ZOverlay;
exports.default = _default;
//# sourceMappingURL=ZOverlay.js.map