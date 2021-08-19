"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZMessageContainer = exports.zMessageContainer = void 0;

var _vue = _interopRequireDefault(require("vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var zMessageContainer;
exports.zMessageContainer = zMessageContainer;

var ZMessageContainer = _vue.default.extend({
  name: 'z-message-container',
  mounted: function mounted() {
    exports.zMessageContainer = zMessageContainer = this;
  },
  render: function render(createElement) {
    return createElement('div', {
      class: {
        'z-message-container': true
      },
      attrs: {}
    });
  }
});

exports.ZMessageContainer = ZMessageContainer;
var _default = ZMessageContainer;
exports.default = _default;
//# sourceMappingURL=ZMessageContainer.js.map