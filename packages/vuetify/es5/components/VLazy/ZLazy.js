"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZLazy = void 0;

var _VLazy = _interopRequireDefault(require("./VLazy"));

var _mixins = _interopRequireDefault(require("../../util/mixins"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZLazy = (0, _mixins.default)(_VLazy.default).extend({
  name: 'z-lazy'
});
exports.ZLazy = ZLazy;
var _default = ZLazy;
exports.default = _default;
//# sourceMappingURL=ZLazy.js.map