import mixins from '../../util/mixins';
import VTextarea from './VTextarea';
import generateZSizeable from '../../zui/util/generateZSizeable';
import "../../../src/zui/styles/ZTextarea/index.scss";
const ZTextareaSizeable = generateZSizeable(['z-textarea-size--x-small', 'z-textarea-size--small', 'z-textarea-size--default', 'z-textarea-size--large', 'z-textarea-size--x-large']);
export const ZTextarea = mixins(VTextarea, ZTextareaSizeable).extend({
  name: 'z-textarea',
  props: {
    hideDetails: {
      type: [Boolean, String],
      default: 'auto'
    }
  },
  computed: {
    classes() {
      const sizeableClasses = this.sizeableClasses;
      return { ...VTextarea.options.computed.classes.call(this),
        ...sizeableClasses
      };
    }

  }
});
export default ZTextarea;
//# sourceMappingURL=ZTextarea.js.map