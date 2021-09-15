"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZCounter = void 0;

var _VCounter = _interopRequireDefault(require("./VCounter"));

var _mixins = _interopRequireDefault(require("../../util/mixins"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZCounter = (0, _mixins.default)(_VCounter.default).extend({
  name: 'z-counter'
});
exports.ZCounter = ZCounter;
var _default = ZCounter;
exports.default = _default;
//# sourceMappingURL=ZCounter.js.map