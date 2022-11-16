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
    contentStyle: {
      type: Object,
      default () {
        return {}
      },
    },
    transparent: {
      type: Boolean,
      default: true,
    },
    none: {
      type: Boolean,
      default: true,
    },
    closeOnContentClick: Boolean,
  },

  data () {
    return {
      colorData: {},
      colorHex: '',
      colorName: '',
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

        switch (value) {
          case 'transparent':
            this.colorHex = 'transparent'
            this.colorName = 'transparent'
            break
          case '':
          case 'none':
            this.colorHex = ''
            this.colorName = 'none'
            break
          default:
            this.colorHex = info.color || ''
            this.colorName = info.name
        }
      },
    },
  },
  methods: {
    onColorReady (info: ColorInfo) {
      this.colorHex = info.color === 'none' ? '' : (info.color || '')
      this.colorName = info.name
    },
    onColorChange (info: ColorInfo) {
      this.colorHex = info.color === 'none' ? '' : (info.color || '')
      this.colorName = info.name
      this.$emit('change', info)
    },
    genColorSelector (): VNode {
      const data: VNodeData = {
        props: {
          value: this.colorHex,
          defaultValue: this.colorHex,
          transparent: this.transparent,
          none: this.none,
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
      const bg = this.colorName === 'transparent' ? 'transparent-bg' : ''
      const data: VNodeData = {
        staticClass: `d-flex align-center justify-center ${bg} ${this.contentClass}`,
        props: {
          outlined: true,
          flat: true,
        },
        style: {
          cursor: 'pointer',
          width: this.w,
          height: this.h,
          backgroundColor: this.colorHex,
          ...this.contentStyle,
        },
        ...props,
      }
      const icons = []
      if (this.colorName === 'none' || this.colorName === '') {
        icons.push(this.$createElement('z-icon', { props: { size: '16'} },'mdi-cancel'))
      }
      return this.$createElement(ZCard, data, icons)
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
