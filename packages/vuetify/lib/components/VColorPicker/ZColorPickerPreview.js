import mixins from '../../util/mixins';
import VColorPickerPreview from './VColorPickerPreview';
export const ZColorPickerPreview = mixins(VColorPickerPreview).extend({
  name: 'z-color-picker-preview',
  methods: {
    genDot() {
      const dot = VColorPickerPreview.options.methods.genDot.call(this);

      if (dot.data) {
        dot.data.on = {
          click: () => {
            this.$emit('action:dot');
          }
        };
      }

      return dot;
    },

    genTrack(options) {
      if (options.on) {
        options.on.click = () => {
          if (!this.sliderMoved) {
            this.$emit('action:slider', 'click');
            this.$emit('update:after', 'slider');
          }

          this.sliderMoved = false;
        };

        options.on.end = () => {
          this.sliderMoved = true;
          this.$emit('action:slider', 'move');
          this.$emit('update:after', 'slider');
        };
      }

      return VColorPickerPreview.options.methods.genTrack.call(this, options);
    }

  }
});
export default ZColorPickerPreview;
//# sourceMappingURL=ZColorPickerPreview.js.map