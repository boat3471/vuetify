import mixins from '../../util/mixins';
import VSwitch from './VSwitch';
import "../../../src/components/VSwitch/ZSwitch.scss";
export const ZSwitch = mixins(VSwitch).extend({
  name: 'z-switch',
  props: {
    hideDetails: {
      type: [Boolean, String],
      default: 'auto'
    }
  },
  computed: {
    classes() {
      const map = VSwitch.options.computed.classes.call(this);
      Object.assign(map, {
        'z-switch': true
      });
      return map;
    }

  }
});
export default ZSwitch;
//# sourceMappingURL=ZSwitch.js.map