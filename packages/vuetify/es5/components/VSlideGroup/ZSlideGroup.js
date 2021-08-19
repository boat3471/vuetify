"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZSlideItem = exports.ZSlideGroup = void 0;

var _mixins = _interopRequireDefault(require("../../util/mixins"));

var _index = require("./index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZSlideGroup = (0, _mixins.default)(_index.VSlideGroup).extend({
  name: 'z-slide-group'
});
exports.ZSlideGroup = ZSlideGroup;
var ZSlideItem = (0, _mixins.default)(_index.VSlideItem).extend({
  name: 'z-slide-item'
});
exports.ZSlideItem = ZSlideItem;
var _default = {
  $_vuetify_subcomponents: {
    ZSlideGroup: ZSlideGroup,
    ZSlideItem: ZSlideItem
  }
};
exports.default = _default;
//# sourceMappingURL=ZSlideGroup.js.map