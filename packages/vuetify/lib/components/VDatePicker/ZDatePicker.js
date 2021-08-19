import mixins from '../../util/mixins';
import { VDatePicker, VDatePickerTitle, VDatePickerHeader, VDatePickerDateTable, VDatePickerMonthTable, VDatePickerYears } from './index';
export const ZDatePicker = mixins(VDatePicker).extend({
  name: 'z-date-picker'
});
export const ZDatePickerTitle = mixins(VDatePickerTitle).extend({
  name: 'z-date-picker-title'
});
export const ZDatePickerHeader = mixins(VDatePickerHeader).extend({
  name: 'z-date-picker-header'
});
export const ZDatePickerDateTable = mixins(VDatePickerDateTable).extend({
  name: 'z-date-picker-date-table'
});
export const ZDatePickerMonthTable = mixins(VDatePickerMonthTable).extend({
  name: 'z-date-picker-month-table'
});
export const ZDatePickerYears = mixins(VDatePickerYears).extend({
  name: 'z-date-picker-years'
});
export default {
  $_vuetify_subcomponents: {
    ZDatePicker,
    ZDatePickerTitle,
    ZDatePickerHeader,
    ZDatePickerDateTable,
    ZDatePickerMonthTable,
    ZDatePickerYears
  }
};
//# sourceMappingURL=ZDatePicker.js.map