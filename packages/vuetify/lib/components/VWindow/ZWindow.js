import mixins from '../../util/mixins';
import { VWindow, VWindowItem } from './index';
export const ZWindow = mixins(VWindow).extend({
  name: 'z-window'
});
export const ZWindowItem = mixins(VWindowItem).extend({
  name: 'z-window-item'
});
export default {
  $_vuetify_subcomponents: {
    ZWindow,
    ZWindowItem
  }
};
//# sourceMappingURL=ZWindow.js.map