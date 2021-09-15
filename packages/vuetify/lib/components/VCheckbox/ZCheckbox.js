import mixins from '../../util/mixins';
import { VCheckbox, VSimpleCheckbox } from './index';
export const ZCheckbox = mixins(VCheckbox).extend({
  name: 'z-checkbox',
  props: {
    hideDetails: {
      type: [Boolean, String],
      default: 'auto'
    }
  }
});
export const ZSimpleCheckbox = mixins(VSimpleCheckbox).extend({
  name: 'z-simple-checkbox'
});
export default {
  $_vuetify_subcomponents: {
    ZCheckbox,
    ZSimpleCheckbox
  }
};
//# sourceMappingURL=ZCheckbox.js.map