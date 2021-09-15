import Vue from 'vue'; // import mixins from '../../../util/mixins'

import { ZMenu, ZTextField } from '../../../components';
import { dateTimeFormat, dateTimeFormatDate } from './helper';
import ZDataTimePickerInner from './ZDateTimePickerInner';
import "../../../../src/zui/components/ZDateTimePicker/ZDataTimePicker.scss";
export default Vue.extend({
  name: 'z-date-time-picker',
  props: {
    value: {
      type: [String, Number, Date],
      default: null
    },
    start: {
      type: [String, Number, Date],
      default: null
    },
    end: {
      type: [String, Number, Date],
      default: null
    },
    showCurrent: {
      type: Boolean,
      default: true
    }
  },

  data() {
    return {
      dateTimeString: null,
      dateTimePicker: null,
      pickerVisible: false,
      min: null,
      max: null
    };
  },

  computed: {},
  watch: {
    value: {
      immediate: true,

      handler(val) {
        if (val) {
          this.dateTimeString = dateTimeFormat(val);
          this.setDateTimePicker(val);
        } else {
          this.dateTimeString = null;
          this.dateTimePicker = null;
        }
      }

    },
    start: {
      immediate: true,

      handler(val) {
        if (val) {
          this.min = dateTimeFormatDate(val);
        }
      }

    },
    end: {
      immediate: true,

      handler(val) {
        if (val) {
          this.max = dateTimeFormatDate(val);
        }
      }

    },

    pickerVisible(visible) {
      if (visible) {
        const {
          value,
          start
        } = this.$props;

        if (value) {
          this.setDateTimePicker(value);
          return;
        }

        if (start) {
          this.setDateTimePicker(start);
          return;
        }

        if (this.$props.showCurrent) {
          if (this.dateTimeString) {
            this.setDateTimePicker(new Date(this.dateTimeString));
          } else {
            this.setDateTimePicker(new Date());
          }
        }
      }
    }

  },
  methods: {
    setDateTimePicker(val) {
      this.dateTimePicker = dateTimeFormatDate(val);
    },

    onPickerOk(value) {
      this.pickerVisible = false;
      this.dateTimeString = value;
      this.$emit('input', value);
    },

    genActivatorSlot(props) {
      return this.$createElement(ZTextField, { ...props,
        attrs: { ...this.$attrs,
          ...props.attrs
        },
        props: {
          value: this.dateTimeString,
          readonly: true,
          outlined: true,
          ...props.props
        },
        style: {
          width: '145px'
        }
      });
    }

  },

  render(h) {
    return h(ZMenu, {
      staticClass: 'z-date-time-picker--inner',
      attrs: { ...this.$attrs
      },
      props: {
        value: this.pickerVisible,
        offsetY: true,
        contentClass: 'z-date-time-picker',
        transition: 'scale-transition',
        closeOnContentClick: false
      },
      on: {
        input: val => this.pickerVisible = val
      },
      scopedSlots: {
        activator: this.genActivatorSlot
      }
    }, [h(ZDataTimePickerInner, {
      attrs: { ...this.$attrs
      },
      props: {
        value: this.dateTimePicker,
        start: this.min,
        end: this.max
      },
      on: {
        ok: this.onPickerOk,
        cancel: () => {
          this.pickerVisible = false;
        }
      }
    })]);
  }

});
//# sourceMappingURL=ZDateTimePicker.js.map