import mixins from '../../util/mixins';
import VTextField from './VTextField';
import generateZSizeable from '../../zui/util/generateZSizeable';
import "../../../src/zui/styles/ZTextField/index.scss";
const Sizeable = generateZSizeable(['v-text-field-size--x-small', 'v-text-field-size--small', 'v-text-field-size--default', 'v-text-field-size--large', 'v-text-field-size--x-large']);
export const ZTextField = mixins(VTextField, Sizeable).extend({
  name: 'z-text-field',
  props: {
    hideDetails: {
      type: [Boolean, String],
      default: 'auto'
    }
  },
  computed: {
    classes() {
      const sizeableClasses = this.sizeableClasses;
      return { ...VTextField.options.computed.classes.call(this),
        ...sizeableClasses
      };
    }

  },
  methods: {
    genInput() {
      const input = VTextField.options.methods.genInput.call(this);

      if (input.data && input.data.attrs) {
        // 2020-02-05
        // 修改默认输入框自动补全为禁用模式
        input.data.attrs.autocomplete = this.$attrs.autocomplete || 'off';
      }

      return input;
    }

  }
});
export default ZTextField;
//# sourceMappingURL=ZTextField.js.map