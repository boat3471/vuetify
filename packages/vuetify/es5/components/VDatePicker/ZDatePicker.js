"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZDatePickerYears = exports.ZDatePickerMonthTable = exports.ZDatePickerDateTable = exports.ZDatePickerHeader = exports.ZDatePickerTitle = exports.ZDatePicker = void 0;

var _mixins = _interopRequireDefault(require("../../util/mixins"));

var _index = require("./index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZDatePicker = (0, _mixins.default)(_index.VDatePicker).extend({
  name: 'z-date-picker'
});
exports.ZDatePicker = ZDatePicker;
var ZDatePickerTitle = (0, _mixins.default)(_index.VDatePickerTitle).extend({
  name: 'z-date-picker-title'
});
exports.ZDatePickerTitle = ZDatePickerTitle;
var ZDatePickerHeader = (0, _mixins.default)(_index.VDatePickerHeader).extend({
  name: 'z-date-picker-header'
});
exports.ZDatePickerHeader = ZDatePickerHeader;
var ZDatePickerDateTable = (0, _mixins.default)(_index.VDatePickerDateTable).extend({
  name: 'z-date-picker-date-table'
});
exports.ZDatePickerDateTable = ZDatePickerDateTable;
var ZDatePickerMonthTable = (0, _mixins.default)(_index.VDatePickerMonthTable).extend({
  name: 'z-date-picker-month-table'
});
exports.ZDatePickerMonthTable = ZDatePickerMonthTable;
var ZDatePickerYears = (0, _mixins.default)(_index.VDatePickerYears).extend({
  name: 'z-date-picker-years'
});
exports.ZDatePickerYears = ZDatePickerYears;
var _default = {
  $_vuetify_subcomponents: {
    ZDatePicker: ZDatePicker,
    ZDatePickerTitle: ZDatePickerTitle,
    ZDatePickerHeader: ZDatePickerHeader,
    ZDatePickerDateTable: ZDatePickerDateTable,
    ZDatePickerMonthTable: ZDatePickerMonthTable,
    ZDatePickerYears: ZDatePickerYears
  }
};
exports.default = _default;
//# sourceMappingURL=ZDatePicker.js.map