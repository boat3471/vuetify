"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZTreeviewNode = exports.ZTreeview = void 0;

var _mixins = _interopRequireDefault(require("../../util/mixins"));

var _index = require("./index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZTreeview = (0, _mixins.default)(_index.VTreeview).extend({
  name: 'z-treeview',
  props: {
    dense: {
      type: Boolean,
      default: function _default() {
        return this.$themeStore.denseMode === true;
      }
    }
  }
});
exports.ZTreeview = ZTreeview;
var ZTreeviewNode = (0, _mixins.default)(_index.VTreeviewNode).extend({
  name: 'z-treeview-node'
});
exports.ZTreeviewNode = ZTreeviewNode;
var _default2 = {
  $_vuetify_subcomponents: {
    ZTreeview: ZTreeview,
    ZTreeviewNode: ZTreeviewNode
  }
};
exports.default = _default2;
//# sourceMappingURL=ZTreeview.js.map