import VInput from './VInput';
import mixins from '../../util/mixins';
const ZInput = mixins(VInput).extend({
  name: 'z-input',
  props: {
    dense: {
      type: Boolean,

      default() {
        return this.$themeStore.denseMode === true;
      }

    }
  }
});
export { ZInput };
export default ZInput;
//# sourceMappingURL=ZInput.js.map