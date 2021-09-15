import VNavigationDrawer from './VNavigationDrawer';
import mixins from '../../util/mixins';
const ZNavigationDrawer = mixins(VNavigationDrawer).extend({
  name: 'z-navigation-drawer',
  methods: {
    updateMiniVariant(val) {
      this.$emit('change:mini-variant', val);
      if (this.miniVariant !== val) this.$emit('update:mini-variant', val);
    }

  }
});
export { ZNavigationDrawer };
export default ZNavigationDrawer;
//# sourceMappingURL=ZNavigationDrawer.js.map