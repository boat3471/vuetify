"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZData = void 0;

var _VData = _interopRequireDefault(require("./VData"));

var _mixins = _interopRequireDefault(require("../../util/mixins"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZData = (0, _mixins.default)(_VData.default).extend({
  name: 'z-data'
});
exports.ZData = ZData;
var _default = ZData;
exports.default = _default;
//# sourceMappingURL=ZData.js.map