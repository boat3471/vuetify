"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZWindowItem = exports.ZWindow = void 0;

var _mixins = _interopRequireDefault(require("../../util/mixins"));

var _index = require("./index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZWindow = (0, _mixins.default)(_index.VWindow).extend({
  name: 'z-window'
});
exports.ZWindow = ZWindow;
var ZWindowItem = (0, _mixins.default)(_index.VWindowItem).extend({
  name: 'z-window-item'
});
exports.ZWindowItem = ZWindowItem;
var _default = {
  $_vuetify_subcomponents: {
    ZWindow: ZWindow,
    ZWindowItem: ZWindowItem
  }
};
exports.default = _default;
//# sourceMappingURL=ZWindow.js.map