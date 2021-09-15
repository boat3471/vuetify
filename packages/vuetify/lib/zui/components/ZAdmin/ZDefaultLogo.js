import Vue from 'vue';
import { logo } from './assets/logo';
export const ZDefaultLogo = Vue.extend({
  name: 'z-default-logo',
  props: {},

  data() {
    return {};
  },

  watch: {},

  created() {},

  mounted() {},

  methods: {},

  render(h) {
    return h('div', {
      domProps: {
        innerHTML: logo
      },
      style: {
        lineHeight: 0
      }
    });
  }

});
export default ZDefaultLogo;
//# sourceMappingURL=ZDefaultLogo.js.map