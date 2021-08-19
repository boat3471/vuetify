import mixins from '../../util/mixins';
import { VCalendar, VCalendarCategory, VCalendarDaily, VCalendarWeekly, VCalendarMonthly } from './index';
export const ZCalendar = mixins(VCalendar).extend({
  name: 'z-calendar'
});
export const ZCalendarCategory = mixins(VCalendarCategory).extend({
  name: 'z-calendar-category'
});
export const ZCalendarDaily = mixins(VCalendarDaily).extend({
  name: 'z-calendar-daily'
});
export const ZCalendarWeekly = mixins(VCalendarWeekly).extend({
  name: 'z-calendar-weekly'
});
export const ZCalendarMonthly = mixins(VCalendarMonthly).extend({
  name: 'z-calendar-monthly'
});
export default {
  $_vuetify_subcomponents: {
    ZCalendar,
    ZCalendarCategory,
    ZCalendarDaily,
    ZCalendarWeekly,
    ZCalendarMonthly
  }
};
//# sourceMappingURL=ZCalendar.js.map