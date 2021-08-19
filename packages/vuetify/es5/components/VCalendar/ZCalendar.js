"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.ZCalendarMonthly = exports.ZCalendarWeekly = exports.ZCalendarDaily = exports.ZCalendarCategory = exports.ZCalendar = void 0;

var _mixins = _interopRequireDefault(require("../../util/mixins"));

var _index = require("./index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ZCalendar = (0, _mixins.default)(_index.VCalendar).extend({
  name: 'z-calendar'
});
exports.ZCalendar = ZCalendar;
var ZCalendarCategory = (0, _mixins.default)(_index.VCalendarCategory).extend({
  name: 'z-calendar-category'
});
exports.ZCalendarCategory = ZCalendarCategory;
var ZCalendarDaily = (0, _mixins.default)(_index.VCalendarDaily).extend({
  name: 'z-calendar-daily'
});
exports.ZCalendarDaily = ZCalendarDaily;
var ZCalendarWeekly = (0, _mixins.default)(_index.VCalendarWeekly).extend({
  name: 'z-calendar-weekly'
});
exports.ZCalendarWeekly = ZCalendarWeekly;
var ZCalendarMonthly = (0, _mixins.default)(_index.VCalendarMonthly).extend({
  name: 'z-calendar-monthly'
});
exports.ZCalendarMonthly = ZCalendarMonthly;
var _default = {
  $_vuetify_subcomponents: {
    ZCalendar: ZCalendar,
    ZCalendarCategory: ZCalendarCategory,
    ZCalendarDaily: ZCalendarDaily,
    ZCalendarWeekly: ZCalendarWeekly,
    ZCalendarMonthly: ZCalendarMonthly
  }
};
exports.default = _default;
//# sourceMappingURL=ZCalendar.js.map