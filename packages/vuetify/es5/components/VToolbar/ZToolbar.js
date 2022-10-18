"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZToolbarTitle = exports.ZToolbarItems = exports.ZToolbar = void 0;

var _mixins = _interopRequireDefault(require("../../util/mixins"));

var _index = require("./index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZToolbar = (0, _mixins.default)(_index.VToolbar).extend({
  name: 'z-toolbar',
  props: {
    dense: {
      type: Boolean,
      default: function _default() {
        return this.$themeStore.denseMode === true;
      }
    }
  }
});
exports.ZToolbar = ZToolbar;
var ZToolbarItems = (0, _mixins.default)(_index.VToolbarItems).extend({
  name: 'z-toolbar-items'
});
exports.ZToolbarItems = ZToolbarItems;
var ZToolbarTitle = (0, _mixins.default)(_index.VToolbarTitle).extend({
  name: 'z-toolbar-title'
});
exports.ZToolbarTitle = ZToolbarTitle;
var _default2 = {
  $_vuetify_subcomponents: {
    ZToolbar: ZToolbar,
    ZToolbarItems: ZToolbarItems,
    ZToolbarTitle: ZToolbarTitle
  }
};
exports.default = _default2;
//# sourceMappingURL=ZToolbar.js.map