"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZMessageContainer = void 0;

var _vue = _interopRequireDefault(require("vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZMessageContainer = _vue.default.extend({
  name: 'z-message-container',
  render: function render(createElement) {
    return createElement('div', {
      staticClass: 'z-message-container'
    });
  }
});

exports.ZMessageContainer = ZMessageContainer;
var _default = ZMessageContainer;
exports.default = _default;
//# sourceMappingURL=ZMessageContainer.js.map