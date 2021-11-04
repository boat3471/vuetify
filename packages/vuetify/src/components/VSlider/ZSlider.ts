import VSlider from './VSlider'
import mixins from '../../util/mixins'
import { getSlot } from './../../util/helpers'
import { VNode } from 'vue'

const ZSlider = mixins(VSlider).extend({
  name: 'z-slider',
  props: {
    trackHeight: {
      type: [String, Number],
      default: '2px',
    },
    trackRadius: {
      type: [String, Number],
      default: 0,
    },
    trackPointerEvents: {
      type: String,
      default: 'auto',
    },
  },
  methods: {
    genThumb () {
      const thumbSlots = getSlot(this, 'thumb')
      if (thumbSlots) {
        return thumbSlots
      }
      return this.$createElement(
        'div',
        this.setBackgroundColor(this.computedThumbColor, {
          staticClass: 'v-slider__thumb',
        })
      )
    },
    genTrackContainer (): VNode {
      const children = [
        this.$createElement('div', this.setBackgroundColor(this.computedTrackColor, {
          staticClass: 'v-slider__track-background',
          style: this.trackStyles,
        })),
        this.$createElement('div', this.setBackgroundColor(this.computedTrackFillColor, {
          staticClass: 'v-slider__track-fill',
          style: this.trackFillStyles,
        })),
      ]

      const h = isNaN(Number(this.trackHeight)) ? this.trackHeight : this.trackHeight + 'px'
      const r = isNaN(Number(this.trackRadius)) ? this.trackRadius : this.trackRadius + 'px'

      return this.$createElement('div', {
        staticClass: 'v-slider__track-container',
        style: {
          height: h,
          borderRadius: r,
          overflow: 'hidden',
          pointerEvents: this.trackPointerEvents,
        },
        ref: 'track',
      }, children)
    },
  },
})

export { ZSlider }
export default ZSlider
