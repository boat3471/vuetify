import VIcon from './VIcon';
import mixins from '../../util/mixins';
const ZIcon = mixins(VIcon).extend({
  name: 'z-icon',
  props: {
    dense: {
      type: Boolean,

      default() {
        return this.$themeStore.denseMode === true;
      }

    }
  }
});
export { ZIcon };
export default ZIcon;
//# sourceMappingURL=ZIcon.js.map