"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZTimePickerTitle = exports.ZTimePickerClock = exports.ZTimePicker = void 0;

var _mixins = _interopRequireDefault(require("../../util/mixins"));

var _index = require("./index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZTimePicker = (0, _mixins.default)(_index.VTimePicker).extend({
  name: 'z-time-picker'
});
exports.ZTimePicker = ZTimePicker;
var ZTimePickerClock = (0, _mixins.default)(_index.VTimePickerClock).extend({
  name: 'z-time-picker-clock'
});
exports.ZTimePickerClock = ZTimePickerClock;
var ZTimePickerTitle = (0, _mixins.default)(_index.VTimePickerTitle).extend({
  name: 'z-time-picker-title'
});
exports.ZTimePickerTitle = ZTimePickerTitle;
var _default = {
  $_vuetify_subcomponents: {
    ZTimePicker: ZTimePicker,
    ZTimePickerClock: ZTimePickerClock,
    ZTimePickerTitle: ZTimePickerTitle
  }
};
exports.default = _default;
//# sourceMappingURL=ZTimePicker.js.map