"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZPagination = void 0;

var _VPagination = _interopRequireDefault(require("./VPagination"));

var _mixins = _interopRequireDefault(require("../../util/mixins"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZPagination = (0, _mixins.default)(_VPagination.default).extend({
  name: 'z-pagination'
});
exports.ZPagination = ZPagination;
var _default = ZPagination;
exports.default = _default;
//# sourceMappingURL=ZPagination.js.map