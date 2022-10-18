import VAutocomplete from './VAutocomplete';
import mixins from '../../util/mixins';
const ZAutocomplete = mixins(VAutocomplete).extend({
  name: 'z-autocomplete',
  props: {
    dense: {
      type: Boolean,

      default() {
        return this.$themeStore.denseMode === true;
      }

    }
  }
});
export { ZAutocomplete };
export default ZAutocomplete;
//# sourceMappingURL=ZAutocomplete.js.map