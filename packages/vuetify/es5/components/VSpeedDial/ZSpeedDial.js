"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZSpeedDial = void 0;

var _VSpeedDial = _interopRequireDefault(require("./VSpeedDial"));

var _mixins = _interopRequireDefault(require("../../util/mixins"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZSpeedDial = (0, _mixins.default)(_VSpeedDial.default).extend({
  name: 'z-speed-dial'
});
exports.ZSpeedDial = ZSpeedDial;
var _default = ZSpeedDial;
exports.default = _default;
//# sourceMappingURL=ZSpeedDial.js.map