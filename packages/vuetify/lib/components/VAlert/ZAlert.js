import VAlert from './VAlert';
import mixins from '../../util/mixins';
const ZAlert = mixins(VAlert).extend({
  name: 'z-alert',
  props: {
    dense: {
      type: Boolean,

      default() {
        return this.$themeStore.denseMode === true;
      }

    }
  }
});
export { ZAlert };
export default ZAlert;
//# sourceMappingURL=ZAlert.js.map