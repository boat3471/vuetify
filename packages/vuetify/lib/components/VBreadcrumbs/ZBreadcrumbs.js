import mixins from '../../util/mixins';
import { VBreadcrumbs, VBreadcrumbsItem, VBreadcrumbsDivider } from './index';
export const ZBreadcrumbs = mixins(VBreadcrumbs).extend({
  name: 'z-breadcrumbs'
});
export const ZBreadcrumbsItem = mixins(VBreadcrumbsItem).extend({
  name: 'z-breadcrumbs-item'
});
export const ZBreadcrumbsDivider = mixins(VBreadcrumbsDivider).extend({
  name: 'z-breadcrumbs-divider'
});
export default {
  $_vuetify_subcomponents: {
    ZBreadcrumbs,
    ZBreadcrumbsItem,
    ZBreadcrumbsDivider
  }
};
//# sourceMappingURL=ZBreadcrumbs.js.map