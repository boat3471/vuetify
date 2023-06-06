import Vue from 'vue';
import { ZApp } from '../../../components';
import { getSlot } from '../../../util/helpers';
import "../../../../src/zui/components/ZAdmin/styles/ZAdmin.scss";
export const ZAdminApp = Vue.extend({
  name: 'z-admin-application',

  render(h) {
    const defaultSlot = getSlot(this) || h('RouterView', {
      staticClass: 'v-application--wrap'
    });
    return h(ZApp, {
      staticClass: 'z-admin-application',
      props: {
        noWrap: true
      }
    }, [defaultSlot]);
  }

});
export default ZAdminApp;
//# sourceMappingURL=ZAdminApp.js.map