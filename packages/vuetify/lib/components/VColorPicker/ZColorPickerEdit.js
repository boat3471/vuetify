import mixins from '../../util/mixins';
import VColorPickerEdit from './VColorPickerEdit';
export const ZColorPickerEdit = mixins(VColorPickerEdit).extend({
  name: 'z-color-picker-edit',
  methods: {
    genInput(target, attrs, value, on) {
      if (on) {
        const that = this;
        const input = on.input;

        on.input = e => {
          input && input(e);
          clearTimeout(that.inputTimer);
          that.inputTimer = setTimeout(() => {
            that.updateInput(e);
          }, 100);
        };
      }

      return VColorPickerEdit.options.methods.genInput.call(this, target, attrs, value, on);
    },

    updateInput(e) {
      const target = e.target;

      if (target) {
        // const last = target.dataset['last'];
        // target.dataset['last'] = target.value;
        const nextElement = target.nextElementSibling;
        const flag = nextElement ? nextElement.innerText : '';
        this.$emit('action:input', flag);
        this.$emit('update:after', 'input');
      }
    }

  }
});
export default ZColorPickerEdit;
//# sourceMappingURL=ZColorPickerEdit.js.map