import mixins from '../../util/mixins';
import VColorPickerCanvas from './VColorPickerCanvas';
export const ZColorPickerCanvas = mixins(VColorPickerCanvas).extend({
  name: 'z-color-picker-canvas',
  methods: {
    emitColor(x, y) {
      VColorPickerCanvas.options.methods.emitColor.call(this, x, y);
    },

    handleClick(e) {
      VColorPickerCanvas.options.methods.handleClick.call(this, e);

      if (!this.mouseMove) {
        this.$emit('action:canvas', 'click');
        this.$emit('update:after', 'canvas');
      }
    },

    handleMouseDown(e) {
      this.mouseMove = false;
      VColorPickerCanvas.options.methods.handleMouseDown.call(this, e);
    },

    handleMouseMove(e) {
      this.mouseMove = true;
      VColorPickerCanvas.options.methods.handleMouseMove.call(this, e);
    },

    handleMouseUp() {
      VColorPickerCanvas.options.methods.handleMouseUp.call(this);

      if (this.mouseMove) {
        this.$emit('action:canvas', 'move');
        this.$emit('update:after', 'canvas');
      }
    }

  }
});
export default ZColorPickerCanvas;
//# sourceMappingURL=ZColorPickerCanvas.js.map