import Vue from 'vue';
import ZViewRoot from './ZViewRoot';
import ZView403 from './ZView403';
import ZView404 from './ZView404';
import ZView500 from './ZView500';
export const ZAdmin = Vue.extend(ZViewRoot).extend({
  name: 'z-admin',
  computed: {
    appWrapClass() {
      const parent = this.$parent ? this.$parent.$parent : null;

      if (parent && parent.noWrap) {
        return 'v-application--wrap';
      }

      return '';
    }

  }
});
export { ZView403, ZView404, ZView500 };
export default ZAdmin;
//# sourceMappingURL=index.js.map