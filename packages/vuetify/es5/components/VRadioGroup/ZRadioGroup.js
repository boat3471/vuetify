"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZRadio = exports.ZRadioGroup = void 0;

var _mixins = _interopRequireDefault(require("../../util/mixins"));

var _index = require("./index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZRadioGroup = (0, _mixins.default)(_index.VRadioGroup).extend({
  name: 'z-radio-group'
});
exports.ZRadioGroup = ZRadioGroup;
var ZRadio = (0, _mixins.default)(_index.VRadio).extend({
  name: 'z-radio'
});
exports.ZRadio = ZRadio;
var _default = {
  $_vuetify_subcomponents: {
    ZRadioGroup: ZRadioGroup,
    ZRadio: ZRadio
  }
};
exports.default = _default;
//# sourceMappingURL=ZRadioGroup.js.map