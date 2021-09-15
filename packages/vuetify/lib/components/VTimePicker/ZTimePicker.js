import mixins from '../../util/mixins';
import { VTimePicker, VTimePickerClock, VTimePickerTitle } from './index';
export const ZTimePicker = mixins(VTimePicker).extend({
  name: 'z-time-picker'
});
export const ZTimePickerClock = mixins(VTimePickerClock).extend({
  name: 'z-time-picker-clock'
});
export const ZTimePickerTitle = mixins(VTimePickerTitle).extend({
  name: 'z-time-picker-title'
});
export default {
  $_vuetify_subcomponents: {
    ZTimePicker,
    ZTimePickerClock,
    ZTimePickerTitle
  }
};
//# sourceMappingURL=ZTimePicker.js.map