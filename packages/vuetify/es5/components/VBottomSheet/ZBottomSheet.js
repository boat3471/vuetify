"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZBottomSheet = void 0;

var _VBottomSheet = _interopRequireDefault(require("./VBottomSheet"));

var _mixins = _interopRequireDefault(require("../../util/mixins"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZBottomSheet = (0, _mixins.default)(_VBottomSheet.default).extend({
  name: 'z-bottom-sheet'
});
exports.ZBottomSheet = ZBottomSheet;
var _default = ZBottomSheet;
exports.default = _default;
//# sourceMappingURL=ZBottomSheet.js.map