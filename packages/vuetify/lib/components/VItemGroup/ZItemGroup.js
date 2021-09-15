import mixins from '../../util/mixins';
import { VItem, VItemGroup } from './index';
export const ZItem = mixins(VItem).extend({
  name: 'z-item'
});
export const ZItemGroup = mixins(VItemGroup).extend({
  name: 'z-item-group'
});
export default {
  $_vuetify_subcomponents: {
    ZItem,
    ZItemGroup
  }
};
//# sourceMappingURL=ZItemGroup.js.map