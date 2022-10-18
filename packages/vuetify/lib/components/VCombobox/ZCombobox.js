import VCombobox from './VCombobox';
import mixins from '../../util/mixins';
const ZCombobox = mixins(VCombobox).extend({
  name: 'z-combobox',
  props: {
    dense: {
      type: Boolean,

      default() {
        return this.$themeStore.denseMode === true;
      }

    }
  }
});
export { ZCombobox };
export default ZCombobox;
//# sourceMappingURL=ZCombobox.js.map