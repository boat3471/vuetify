"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZSheet = void 0;

var _VSheet = _interopRequireDefault(require("./VSheet"));

var _mixins = _interopRequireDefault(require("../../util/mixins"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZSheet = (0, _mixins.default)(_VSheet.default).extend({
  name: 'z-sheet'
});
exports.ZSheet = ZSheet;
var _default = ZSheet;
exports.default = _default;
//# sourceMappingURL=ZSheet.js.map