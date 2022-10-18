import mixins from '../../util/mixins';
import { VToolbar, VToolbarItems, VToolbarTitle } from './index';
export const ZToolbar = mixins(VToolbar).extend({
  name: 'z-toolbar',
  props: {
    dense: {
      type: Boolean,

      default() {
        return this.$themeStore.denseMode === true;
      }

    }
  }
});
export const ZToolbarItems = mixins(VToolbarItems).extend({
  name: 'z-toolbar-items'
});
export const ZToolbarTitle = mixins(VToolbarTitle).extend({
  name: 'z-toolbar-title'
});
export default {
  $_vuetify_subcomponents: {
    ZToolbar,
    ZToolbarItems,
    ZToolbarTitle
  }
};
//# sourceMappingURL=ZToolbar.js.map