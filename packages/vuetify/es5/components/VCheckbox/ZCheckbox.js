"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZSimpleCheckbox = exports.ZCheckbox = void 0;

var _mixins = _interopRequireDefault(require("../../util/mixins"));

var _index = require("./index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZCheckbox = (0, _mixins.default)(_index.VCheckbox).extend({
  name: 'z-checkbox',
  props: {
    hideDetails: {
      type: [Boolean, String],
      default: 'auto'
    }
  }
});
exports.ZCheckbox = ZCheckbox;
var ZSimpleCheckbox = (0, _mixins.default)(_index.VSimpleCheckbox).extend({
  name: 'z-simple-checkbox'
});
exports.ZSimpleCheckbox = ZSimpleCheckbox;
var _default = {
  $_vuetify_subcomponents: {
    ZCheckbox: ZCheckbox,
    ZSimpleCheckbox: ZSimpleCheckbox
  }
};
exports.default = _default;
//# sourceMappingURL=ZCheckbox.js.map