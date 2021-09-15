"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZForm = void 0;

var _VForm = _interopRequireDefault(require("./VForm"));

var _mixins = _interopRequireDefault(require("../../util/mixins"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZForm = (0, _mixins.default)(_VForm.default).extend({
  name: 'z-form'
});
exports.ZForm = ZForm;
var _default = ZForm;
exports.default = _default;
//# sourceMappingURL=ZForm.js.map