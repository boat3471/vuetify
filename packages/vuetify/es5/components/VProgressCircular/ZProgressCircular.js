"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZProgressCircular = void 0;

var _VProgressCircular = _interopRequireDefault(require("./VProgressCircular"));

var _mixins = _interopRequireDefault(require("../../util/mixins"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZProgressCircular = (0, _mixins.default)(_VProgressCircular.default).extend({
  name: 'z-progress-circular'
});
exports.ZProgressCircular = ZProgressCircular;
var _default = ZProgressCircular;
exports.default = _default;
//# sourceMappingURL=ZProgressCircular.js.map