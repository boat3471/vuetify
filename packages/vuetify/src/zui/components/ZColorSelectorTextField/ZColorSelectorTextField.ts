import { VNode } from 'vue'
import mixins from '../../../util/mixins'
import { ColorInfo, ZColorSelectorMixin } from '../../mixins/ZColorSelectorMixin'
import { ZColorSelectorRect, ZTextField } from '../../../components'

export default mixins(ZColorSelectorMixin).extend({
  name: 'z-color-selector-text-filed',
  props: {
    value: {
      type: String,
      default: '',
    },
    defaultValue: {
      type: String,
      default: '#FFFFFF',
    },
    position: {
      type: String,
      default: 'prepend',
    },
    inputWidth: {
      type: String || Number,
      default: '120px',
    },
    transparent: Boolean,
    closeOnContentClick: Boolean,
  },

  data () {
    return {
      colorData: {},
      inputValue: this.value,
      rectColor: this.value,
    }
  },
  computed: {},
  watch: {
    value: {
      immediate: true,
      handler (value) {
        const theme = this.findThemeByName(value)
        if (theme) {
          this.inputValue = theme.name
          this.rectColor = theme.color || ''
        } else {
          this.inputValue = value
          this.rectColor = value
        }
      },
    },
  },
  methods: {
    checkColor (val: string) {
      val = val.trim()
      if (!val) {
        return true
      }
      const theme = this.findThemeByName(val)
      if (theme) {
        return true
      }
      const info = this.getColorInfo(val)
      if (info.valid) {
        return true
      }
      return '无效的颜色'
    },
    onColorChange (info: ColorInfo) {
      this.inputValue = info.name
      this.rectColor = info.color
      this.$emit('change', info)
    },
    onInputValue (val: string) {
      this.inputValue = val
      this.emitChange(val)
    },
    onInputChange (event: KeyboardEvent | FocusEvent) {
      if ((event as KeyboardEvent).key === 'Enter' || (event as FocusEvent).type === 'blur') {
        const val = this.inputValue.trim()
        this.emitChange(val)
      }
    },
    emitChange (val: string) {
      if (val) {
        const theme = this.findThemeByName(val)
        if (theme) {
          this.rectColor = theme.color || ''
          this.$emit('change', {
            name: theme.name,
            color: theme.color,
            isTheme: true,
          })
        } else {
          const info = this.getColorInfo(val)
          if (info && info.valid) {
            this.rectColor = info.value === 'transparent' ? 'transparent' : (info.hex || '')
            this.$emit('change', {
              name: val,
              color: info.hex,
            })
          }
        }
      }
    },
    genPrependSlot () {
      return this.$createElement(ZColorSelectorRect, {
        slot: 'prepend',
        props: {
          width: '22',
          height: '22',
          value: this.rectColor,
          defaultValue: this.defaultValue,
          transparent: this.transparent,
          closeOnContentClick: this.closeOnContentClick,
        },
        on: {
          change: this.onColorChange,
        },
      })
    },
  },

  render (h): VNode {
    return h(ZTextField, {
      staticClass: 'z-color-selector-rect--card',
      attrs: {
        ...this.$attrs,
      },
      props: {
        value: this.inputValue,
        outlined: true,
        hideDetails: true,
        xs: true,
        width: this.inputWidth,
        rules: [this.checkColor],
      },
      style: {
        width: this.inputWidth || '120px',
      },
      on: {
        blur: this.onInputChange,
        keydown: this.onInputChange,
        input: this.onInputValue,
      },
    }, [this.genPrependSlot()])
  },
})
