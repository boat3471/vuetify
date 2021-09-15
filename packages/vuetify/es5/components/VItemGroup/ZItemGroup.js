"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZItemGroup = exports.ZItem = void 0;

var _mixins = _interopRequireDefault(require("../../util/mixins"));

var _index = require("./index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZItem = (0, _mixins.default)(_index.VItem).extend({
  name: 'z-item'
});
exports.ZItem = ZItem;
var ZItemGroup = (0, _mixins.default)(_index.VItemGroup).extend({
  name: 'z-item-group'
});
exports.ZItemGroup = ZItemGroup;
var _default = {
  $_vuetify_subcomponents: {
    ZItem: ZItem,
    ZItemGroup: ZItemGroup
  }
};
exports.default = _default;
//# sourceMappingURL=ZItemGroup.js.map