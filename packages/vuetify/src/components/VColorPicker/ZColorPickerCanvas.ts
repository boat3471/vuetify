import mixins from '../../util/mixins'
import VColorPickerCanvas from './VColorPickerCanvas'

export const ZColorPickerCanvas = mixins(VColorPickerCanvas).extend({
  name: 'z-color-picker-canvas',
  methods: {
    emitColor (x: number, y: number) {
      VColorPickerCanvas.options.methods.emitColor.call(this, x, y)
    },
    handleClick (e: MouseEvent) {
      VColorPickerCanvas.options.methods.handleClick.call(this, e)
      if (!(this as any).mouseMove) {
        this.$emit('action:canvas', 'click')
        this.$emit('update:after', 'canvas')
      }
    },
    handleMouseDown (e: MouseEvent) {
      (this as any).mouseMove = false
      VColorPickerCanvas.options.methods.handleMouseDown.call(this, e)
    },
    handleMouseMove (e: MouseEvent) {
      (this as any).mouseMove = true
      VColorPickerCanvas.options.methods.handleMouseMove.call(this, e)
    },
    handleMouseUp () {
      VColorPickerCanvas.options.methods.handleMouseUp.call(this)
      if ((this as any).mouseMove) {
        this.$emit('action:canvas', 'move')
        this.$emit('update:after', 'canvas')
      }
    },
  },
})

export default ZColorPickerCanvas
