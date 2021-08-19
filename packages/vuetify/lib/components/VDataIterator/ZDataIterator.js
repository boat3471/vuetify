import mixins from '../../util/mixins';
import { VDataIterator, VDataFooter } from './index';
export const ZDataIterator = mixins(VDataIterator).extend({
  name: 'z-data-iterator'
});
export const ZDataFooter = mixins(VDataFooter).extend({
  name: 'z-data-footer'
});
export default {
  $_vuetify_subcomponents: {
    ZDataIterator,
    ZDataFooter
  }
};
//# sourceMappingURL=ZDataIterator.js.map