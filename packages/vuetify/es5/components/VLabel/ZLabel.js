"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZLabel = void 0;

var _VLabel = _interopRequireDefault(require("./VLabel"));

var _mixins = _interopRequireDefault(require("../../util/mixins"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZLabel = (0, _mixins.default)(_VLabel.default).extend({
  name: 'z-label'
});
exports.ZLabel = ZLabel;
var _default = ZLabel;
exports.default = _default;
//# sourceMappingURL=ZLabel.js.map