"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZTabsSlider = exports.ZTabItem = exports.ZTabsItems = exports.ZTab = exports.ZTabs = void 0;

var _mixins = _interopRequireDefault(require("../../util/mixins"));

var _index = require("./index");

var _generateZSizeable = _interopRequireDefault(require("../../zui/util/generateZSizeable"));

require("../../../src/zui/styles/ZTabs/index.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var Sizeable = (0, _generateZSizeable.default)(['v-tabs-size--x-small', 'v-tabs-size--small', 'v-tabs-size--default', 'v-tabs-size--large', 'v-tabs-size--x-large']);
var ZTabs = (0, _mixins.default)(_index.VTabs, Sizeable).extend({
  name: 'z-tabs',
  computed: {
    classes: function classes() {
      var sizeableClasses = this.sizeableClasses;
      return _objectSpread({}, _index.VTabs.options.computed.classes.call(this), {}, sizeableClasses);
    }
  }
});
exports.ZTabs = ZTabs;
var ZTab = (0, _mixins.default)(_index.VTab).extend({
  name: 'z-tab'
});
exports.ZTab = ZTab;
var ZTabsItems = (0, _mixins.default)(_index.VTabsItems).extend({
  name: 'z-tabs-items'
});
exports.ZTabsItems = ZTabsItems;
var ZTabItem = (0, _mixins.default)(_index.VTabItem).extend({
  name: 'z-tab-item'
});
exports.ZTabItem = ZTabItem;
var ZTabsSlider = (0, _mixins.default)(_index.VTabsSlider).extend({
  name: 'z-tabs-slider'
});
exports.ZTabsSlider = ZTabsSlider;
var _default = {
  $_vuetify_subcomponents: {
    ZTabs: ZTabs,
    ZTab: ZTab,
    ZTabsItems: ZTabsItems,
    ZTabItem: ZTabItem,
    ZTabsSlider: ZTabsSlider
  }
};
exports.default = _default;
//# sourceMappingURL=ZTabs.js.map