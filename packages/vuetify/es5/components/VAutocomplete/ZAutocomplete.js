"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZAutocomplete = void 0;

var _VAutocomplete = _interopRequireDefault(require("./VAutocomplete"));

var _mixins = _interopRequireDefault(require("../../util/mixins"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZAutocomplete = (0, _mixins.default)(_VAutocomplete.default).extend({
  name: 'z-autocomplete'
});
exports.ZAutocomplete = ZAutocomplete;
var _default = ZAutocomplete;
exports.default = _default;
//# sourceMappingURL=ZAutocomplete.js.map