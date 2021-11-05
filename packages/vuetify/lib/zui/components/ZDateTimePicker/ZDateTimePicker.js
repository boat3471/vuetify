import mixins from './../../../util/mixins';
import { getSlot } from './../../../util/helpers';
import { ZMenu, ZTextField } from '../../../components';
import ZDataTimePickerInner from './ZDateTimePickerInner';
import "../../../../src/zui/components/ZDateTimePicker/ZDataTimePicker.scss";
import { dateTimeFormat } from './helper';
export default mixins().extend({
  name: 'z-date-time-picker',
  props: {
    value: {
      type: [String, Number],
      default: null
    },
    min: {
      type: [String, Number],
      default: null
    },
    max: {
      type: [String, Number],
      default: null
    },
    showCurrent: {
      type: Boolean,
      default: true
    },
    inputWidth: {
      type: [String, Number],
      default: '155px'
    },
    color: {
      type: String,
      default: ''
    },
    placeholder: {
      type: String,
      default: 'setting datetime'
    }
  },

  data() {
    return {
      pickerDate: '',
      inputDate: '',
      visible: false,
      minDate: '',
      maxDate: ''
    };
  },

  computed: {
    inputWidthValue() {
      const w = this.inputWidth;

      if (typeof w === 'number' || !isNaN(w)) {
        return w + 'px';
      }

      return w;
    }

  },
  watch: {
    value: {
      immediate: true,

      handler(val) {
        if (val) {
          this.pickerDate = new Date(val).toISOString();
        } else {
          this.pickerDate = new Date().toISOString();
        }

        this.inputDate = dateTimeFormat(this.pickerDate);
      }

    },
    min: {
      immediate: true,

      handler(val) {
        if (val) {
          this.minDate = new Date(val).toISOString();
        } else {
          this.minDate = '';
        }
      }

    },
    max: {
      immediate: true,

      handler(val) {
        if (val) {
          this.maxDate = new Date(val).toISOString();
        } else {
          this.maxDate = '';
        }
      }

    }
  },
  methods: {
    setDateTimePicker(val) {},

    genActivatorSlot(props) {
      const slotData = Object.assign(props, {
        dateFormat: this.inputDate,
        dateValue: +new Date(this.inputDate)
      });
      const activatorSlots = getSlot(this, 'activator', slotData);

      if (activatorSlots && activatorSlots.length > 0) {
        return activatorSlots[activatorSlots.length - 1];
      }

      return this.$createElement(ZTextField, { ...props,
        props: {
          value: this.inputDate,
          readonly: true,
          outlined: true,
          color: this.color,
          placeholder: this.placeholder || '选择时间',
          ...props.props
        },
        style: {
          width: this.inputWidthValue
        }
      });
    }

  },

  render(h) {
    return h(ZMenu, {
      staticClass: 'z-date-time-picker--inner',
      props: {
        value: this.visible,
        offsetY: true,
        contentClass: 'z-date-time-picker',
        transition: 'scale-transition',
        closeOnContentClick: false,
        maxWidth: 600
      },
      on: {
        input: val => this.visible = val
      },
      scopedSlots: {
        activator: this.genActivatorSlot
      }
    }, [h(ZDataTimePickerInner, {
      attrs: {
        color: this.color
      },
      props: {
        value: this.pickerDate,
        start: this.minDate,
        end: this.maxDate
      },
      on: {
        ok: val => {
          this.visible = false;
          this.pickerDate = val;
          this.inputDate = val;
          this.$emit('input', val);
        },
        cancel: () => {
          this.visible = false;
        }
      }
    })]);
  }

});
//# sourceMappingURL=ZDateTimePicker.js.map