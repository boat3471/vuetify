import { VNode, VNodeData } from 'vue'
import mixins from '../../util/mixins'
import VColorPickerPreview from './VColorPickerPreview'

export const ZColorPickerPreview = mixins(VColorPickerPreview).extend({
  name: 'z-color-picker-preview',
  methods: {
    genDot (): VNode {
      const dot = VColorPickerPreview.options.methods.genDot.call(this)
      if (dot.data) {
        dot.data.on = {
          click: () => {
            this.$emit('action:dot')
          },
        }
      }
      return dot
    },
    genTrack (options: VNodeData): VNode {
      if (options.on) {
        options.on.click = () => {
          if (!(this as any).sliderMoved) {
            this.$emit('action:slider', 'click')
            this.$emit('update:after', 'slider')
          }
          (this as any).sliderMoved = false
        }
        options.on.end = () => {
          (this as any).sliderMoved = true
          this.$emit('action:slider', 'move')
          this.$emit('update:after', 'slider')
        }
      }
      return VColorPickerPreview.options.methods.genTrack.call(this, options)
    },
  },
})

export default ZColorPickerPreview
