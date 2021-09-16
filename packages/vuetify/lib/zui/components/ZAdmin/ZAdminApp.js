import Vue from 'vue';
import { ZApp } from '../../../components';
import "../../../../src/zui/components/ZAdmin/styles/ZAdmin.scss";
export const ZAdminApp = Vue.extend({
  name: 'z-admin-application',

  render(h) {
    return h(ZApp, {
      staticClass: 'z-admin-application',
      props: {
        noWrap: true
      }
    }, [h('RouterView', {
      staticClass: 'v-application--wrap'
    })]);
  }

});
export default ZAdminApp;
//# sourceMappingURL=ZAdminApp.js.map