"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZDataFooter = exports.ZDataIterator = void 0;

var _mixins = _interopRequireDefault(require("../../util/mixins"));

var _index = require("./index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZDataIterator = (0, _mixins.default)(_index.VDataIterator).extend({
  name: 'z-data-iterator'
});
exports.ZDataIterator = ZDataIterator;
var ZDataFooter = (0, _mixins.default)(_index.VDataFooter).extend({
  name: 'z-data-footer'
});
exports.ZDataFooter = ZDataFooter;
var _default = {
  $_vuetify_subcomponents: {
    ZDataIterator: ZDataIterator,
    ZDataFooter: ZDataFooter
  }
};
exports.default = _default;
//# sourceMappingURL=ZDataIterator.js.map