import Vue from 'vue'; // import mixins from '../../../util/mixins'

import { ZCard, ZRow, ZCol, ZBtn, ZDatePicker, ZTimePicker } from '../../../components';
import { dateTimeFormat } from './helper';
export default Vue.extend({
  name: 'z-date-time-picker-inner',
  props: {
    value: {
      type: [String, Date, Number],
      default: null
    },
    start: {
      type: [String, Date, Number],
      default: null
    },
    end: {
      type: [String, Date, Number],
      default: null
    }
  },

  data() {
    return {
      date: '',
      time: '',
      min: '',
      max: '',
      okDisabled: false,
      showMin: false,
      showMax: false
    };
  },

  watch: {
    value: {
      immediate: true,

      handler(val) {
        if (val) {
          const [date, time] = dateTimeFormat(val).split(' ');
          this.date = date;
          this.time = time;
        } else {
          this.date = '';
          this.time = '';
        }
      }

    },
    start: {
      immediate: true,

      handler(val) {
        this.min = val ? dateTimeFormat(val) : val;

        if (val) {
          this.showMin = true;
        }
      }

    },
    end: {
      immediate: true,

      handler(val) {
        this.max = val ? dateTimeFormat(val) : val;

        if (val) {
          this.showMax = true;
        }
      }

    },

    date(val) {
      this.check(new Date(`${val} ${this.time}`));
    },

    time(val) {
      this.check(new Date(`${this.date} ${val}`));
    }

  },

  mounted() {
    const {
      value
    } = this.$props;
    this.check(value);
  },

  methods: {
    check(date) {
      if (date) {
        const {
          start,
          end
        } = this.$props;

        if (start) {
          this.okDisabled = date.getTime() < start.getTime();
          return;
        }

        if (end) {
          this.okDisabled = date.getTime() > end.getTime();
          return;
        }
      }

      this.okDisabled = false;
    },

    onOk() {
      const dateTime = dateTimeFormat(`${this.date} ${this.time}`);
      this.$emit('input', dateTime);
      this.$emit('ok', dateTime);
    },

    onCancel() {
      this.$emit('cancel');
    },

    onNow() {
      const now = new Date();
      const dateTime = dateTimeFormat(now);
      const [date, time] = dateTime.split(' ');
      this.date = date;
      this.time = time;
      this.check(now);
    },

    onMin() {
      const {
        start
      } = this.$props;
      const dateTime = dateTimeFormat(start);
      const [date, time] = dateTime.split(' ');
      this.date = date;
      this.time = time;
      this.check(start);
    },

    onMax() {
      const {
        end
      } = this.$props;
      const dateTime = dateTimeFormat(end);
      const [date, time] = dateTime.split(' ');
      this.date = date;
      this.time = time;
      this.check(end);
    },

    genContent() {
      return this.$createElement(ZRow, {
        props: {
          noGutters: true
        }
      }, [this.genDatePicker(), this.genTimePicker()]);
    },

    genDatePicker() {
      const dataPicker = this.$createElement(ZDatePicker, {
        staticClass: 'dt-date-picker',
        attrs: { ...this.$attrs
        },
        props: {
          value: this.date,
          min: this.min,
          max: this.max,
          fullWidth: true
        }
      });
      return this.$createElement(ZCol, {
        staticClass: 'dt-date-picker-col',
        props: {
          cols: 6
        }
      }, [dataPicker]);
    },

    genTimePicker() {
      const timePicker = this.$createElement(ZTimePicker, {
        staticClass: 'dt-time-picker',
        attrs: { ...this.$attrs
        },
        props: {
          value: this.time,
          format: '24hr',
          useSeconds: true,
          fullWidth: true
        }
      });
      return this.$createElement(ZCol, {
        staticClass: 'dt-time-picker-col',
        props: {
          cols: 6
        }
      }, [timePicker]);
    },

    genBtn(label, click, color) {
      return this.$createElement(ZBtn, {
        staticClass: 'mr-2',
        props: {
          text: true,
          s: true,
          outlined: true,
          color
        },
        on: {
          click
        }
      }, [label]);
    },

    genFooter() {
      const errorSpan = this.okDisabled ? this.$createElement('span', {
        staticClass: 'error--text text-caption'
      }, ['Out of range']) : null;
      const errorCol = this.$createElement(ZCol, {}, [errorSpan]);
      const nowBtn = this.genBtn('now', this.onNow);
      const minBtn = this.genBtn('min', this.onMin);
      const maxBtn = this.genBtn('max', this.onMax);
      const cancelBtn = this.genBtn('cancel', this.onCancel, 'secondary');
      const okBtn = this.$createElement(ZBtn, {
        props: {
          s: true,
          outlined: true,
          color: this.$attrs.color || 'primary',
          disabled: this.okDisabled
        },
        on: {
          click: this.onOk
        }
      }, ['sure']);
      const actionCol = this.$createElement(ZCol, {
        props: {
          cols: 'auto'
        }
      }, [nowBtn, this.showMin ? minBtn : null, this.showMax ? maxBtn : null, cancelBtn, okBtn]);
      return this.$createElement(ZRow, {
        staticClass: 'pa-4',
        props: {
          noGutters: true,
          justify: 'center',
          align: 'center'
        }
      }, [errorCol, actionCol]);
    }

  },

  render(h) {
    return h(ZCard, {
      staticClass: 'z-date-time-picker--inner',
      attrs: { ...this.$attrs
      },
      props: {},
      style: {},
      on: {}
    }, [this.genContent(), this.genFooter()]);
  }

});
//# sourceMappingURL=ZDateTimePickerInner.js.map