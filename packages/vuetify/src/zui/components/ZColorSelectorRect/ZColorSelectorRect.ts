import { VNode, VNodeData } from 'vue'
import mixins from '../../../util/mixins'
import { ColorInfo, ZColorSelectorMixin } from '../../mixins/ZColorSelectorMixin'
import { ZColorSelector, ZMenu, ZCard } from '../../../components'

export default mixins(ZColorSelectorMixin).extend({
  name: 'z-color-selector-rect',
  props: {
    height: {
      type: [Number, String],
      default: 20,
    },
    width: {
      type: [Number, String],
      default: 20,
    },
    value: {
      type: String,
      default: '',
    },
    contentClass: {
      type: String,
      default: '',
    },
    transparent: Boolean,
    closeOnContentClick: Boolean,
  },

  data () {
    return {
      colorData: {},
      colorHex: '',
    }
  },
  computed: {
    w () {
      const w = this.width as number
      return isNaN(w) ? w : `${w}px`
    },
    h () {
      const h = this.height as number
      return isNaN(h) ? h : `${h}px`
    },
  },
  watch: {
    value: {
      immediate: true,
      handler (value) {
        const info = this.getColorByName(value)
        this.colorHex = info.color
      },
    },
  },
  methods: {
    onColorReady (info: ColorInfo) {
      this.colorHex = info.color || ''
    },
    onColorChange (info: ColorInfo) {
      this.colorHex = info.color
      this.$emit('change', info)
    },
    genColorSelector (): VNode {
      const data: VNodeData = {
        props: {
          value: this.colorHex,
          defaultValue: this.colorHex,
          transparent: this.transparent,
        },
        on: {
          ready: this.onColorReady,
          change: this.onColorChange,
        },
      }
      const colorSelector = this.$createElement(ZColorSelector, data, [])
      return this.$createElement(ZCard, {
        props: {
          flat: true,
        },
      }, [colorSelector])
    },
    genActivatorSlot (props: VNodeData) {
      const data: VNodeData = {
        props: {
          outlined: true,
          flat: true,
          class: this.contentClass,
        },
        style: {
          display: 'inline-block',
          cursor: 'pointer',
          width: this.w,
          height: this.h,
          backgroundColor: this.value === 'transparent' ? 'transparent' : this.colorHex,
        },
        ...props,
      }
      return this.$createElement(ZCard, data, [])
    },
  },

  render (h): VNode {
    return h(ZMenu, {
      staticClass: 'z-color-selector-rect--card',
      class: {},
      props: {
        closeOnContentClick: this.closeOnContentClick === true,
        eager: true,
        offsetY: true,
      },
      scopedSlots: {
        activator: this.genActivatorSlot,
      },
    }, [
      this.genColorSelector(),
    ])
  },
})
