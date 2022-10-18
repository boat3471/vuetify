import VFileInput from './VFileInput';
import mixins from '../../util/mixins';
const ZFileInput = mixins(VFileInput).extend({
  name: 'z-file-input',
  props: {
    dense: {
      type: Boolean,

      default() {
        return this.$themeStore.denseMode === true;
      }

    }
  }
});
export { ZFileInput };
export default ZFileInput;
//# sourceMappingURL=ZFileInput.js.map