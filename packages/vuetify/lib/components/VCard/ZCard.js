import mixins from '../../util/mixins';
import { VCard, VCardActions, VCardSubtitle, VCardText, VCardTitle } from './index';
export const ZCard = mixins(VCard).extend({
  name: 'z-card'
});
export const ZCardActions = mixins(VCardActions).extend({
  name: 'z-card-actions'
});
export const ZCardSubtitle = mixins(VCardSubtitle).extend({
  name: 'z-card-subtitle'
});
export const ZCardText = mixins(VCardText).extend({
  name: 'z-card-text'
});
export const ZCardTitle = mixins(VCardTitle).extend({
  name: 'z-card-title'
});
export default {
  $_vuetify_subcomponents: {
    ZCard,
    ZCardActions,
    ZCardSubtitle,
    ZCardText,
    ZCardTitle
  }
};
//# sourceMappingURL=ZCard.js.map