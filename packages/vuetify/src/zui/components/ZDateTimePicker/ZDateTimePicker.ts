import { CreateElement, VNode, VNodeData } from 'vue'
import mixins from './../../../util/mixins'
import { getSlot } from './../../../util/helpers'
import { ZMenu, ZTextField } from '../../../components'
import ZDataTimePickerInner from './ZDateTimePickerInner'
import './ZDataTimePicker.scss'

export default mixins().extend({
  name: 'z-date-time-picker',
  props: {
    value: {
      type: String,
      default: null,
    },
    min: {
      type: String,
      default: null,
    },
    max: {
      type: String,
      default: null,
    },
    showCurrent: {
      type: Boolean,
      default: true,
    },
    inputWidth: {
      type: [String, Number],
      default: '155px',
    },
    color: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: 'setting datetime',
    }
  },

  data () {
    return {
      pickerDate: '',
      inputDate: '',
      visible: false,
    }
  },
  computed: {
    inputWidthValue (): string {
      const w = this.inputWidth
      if (typeof w === 'number' || !isNaN(w)) {
        return w + 'px'
      }
      return w
    },
  },
  watch: {
    value: {
      immediate: true,
      handler (val: any) {
        this.pickerDate = val || new Date().toISOString()
        this.inputDate = val || ''
      },
    },
  },
  methods: {
    setDateTimePicker (val: any) {
    },
    genActivatorSlot (props: VNodeData): VNodeData {
      const slotData = Object.assign(props, {
        formatDate: this.pickerDate,
      })
      const activatorSlots = getSlot(this, 'activator', slotData)
      if (activatorSlots && activatorSlots.length > 0) {
        return activatorSlots[activatorSlots.length - 1]
      }
      return this.$createElement(ZTextField, {
        ...props,
        props: {
          value: this.inputDate,
          readonly: true,
          outlined: true,
          color: this.color,
          placeholder: this.placeholder || '选择时间',
          ...props.props,
        },
        style: {
          width: this.inputWidthValue,
        },
      })
    },
  },

  render (h: CreateElement): VNode {
    return h(ZMenu, {
      staticClass: 'z-date-time-picker--inner',
      props: {
        value: this.visible,
        offsetY: true,
        contentClass: 'z-date-time-picker',
        transition: 'scale-transition',
        closeOnContentClick: false,
        maxWidth: 600,
      },
      on: {
        input: (val: boolean) => (this.visible = val),
      },
      scopedSlots: {
        activator: this.genActivatorSlot,
      },
    }, [
      h(ZDataTimePickerInner, {
        attrs: {
          color: this.color,
        },
        props: {
          value: this.pickerDate,
          start: this.min,
          end: this.max,
        },
        on: {
          ok: (val: any) => {
            this.visible = false
            this.pickerDate = val
            this.inputDate = val
            this.$emit('input', val)
          },
          cancel: () => {
            this.visible = false
          },
        },
      }),
    ])
  },
})
