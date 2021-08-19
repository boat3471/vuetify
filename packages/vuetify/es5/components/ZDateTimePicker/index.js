"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZDateTimePicker = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _index = _interopRequireDefault(require("../../../components/ZDateTimePicker/index.vue"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// @ts-ignore
var ZDateTimePicker = _vue.default.extend(_index.default).extend({
  name: 'z-date-time-picker'
});

exports.ZDateTimePicker = ZDateTimePicker;
var _default = ZDateTimePicker;
exports.default = _default;
//# sourceMappingURL=index.js.map