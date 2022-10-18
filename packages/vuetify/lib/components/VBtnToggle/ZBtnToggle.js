import VBtnToggle from './VBtnToggle';
import mixins from '../../util/mixins';
const ZBtnToggle = mixins(VBtnToggle).extend({
  name: 'z-btn-toggle',
  props: {
    dense: {
      type: Boolean,

      default() {
        return this.$themeStore.denseMode === true;
      }

    }
  }
});
export { ZBtnToggle };
export default ZBtnToggle;
//# sourceMappingURL=ZBtnToggle.js.map