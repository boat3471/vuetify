"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZColorSelector = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _index = _interopRequireDefault(require("../../../components/ZColorSelector/index.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @ts-ignore
var ZColorSelector = _vue.default.extend(_index.default).extend({
  name: 'z-color-selector'
});

exports.ZColorSelector = ZColorSelector;
var _default = ZColorSelector;
exports.default = _default;
//# sourceMappingURL=index.js.map