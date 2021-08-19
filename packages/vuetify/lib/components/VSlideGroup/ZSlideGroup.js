import mixins from '../../util/mixins';
import { VSlideGroup, VSlideItem } from './index';
export const ZSlideGroup = mixins(VSlideGroup).extend({
  name: 'z-slide-group'
});
export const ZSlideItem = mixins(VSlideItem).extend({
  name: 'z-slide-item'
});
export default {
  $_vuetify_subcomponents: {
    ZSlideGroup,
    ZSlideItem
  }
};
//# sourceMappingURL=ZSlideGroup.js.map