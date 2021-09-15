import Vue from 'vue';
import { ZApp } from '../../../components';
import "../../../../src/zui/components/ZAdmin/styles/ZAdmin.scss";
export const ZViewAdmin = Vue.extend({
  name: 'z-admin-application',
  props: {},

  data() {
    return {};
  },

  watch: {},

  created() {},

  mounted() {},

  methods: {},

  render(h) {
    const RouterView = Vue.component('RouterView');
    return h(ZApp, {
      staticClass: 'z-admin-application',
      props: {
        noWrap: true
      }
    }, [h(RouterView)]);
  }

});
export default ZViewAdmin;
//# sourceMappingURL=ZViewAdmin.js.map