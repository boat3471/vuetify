import Vue from 'vue'; // import mixins from '../../../util/mixins'

import { ZCard, ZRow, ZCol, ZBtn, ZDatePicker, ZTimePicker } from '../../../components';
import { compareDate, compareTime, dateTimeFormat } from './helper';
export default Vue.extend({
  name: 'z-date-time-picker-inner',
  props: {
    value: {
      type: String,
      default: null
    },
    start: {
      type: String,
      default: null
    },
    end: {
      type: String,
      default: null
    }
  },

  data() {
    return {
      date: '',
      time: '',
      dateMin: '',
      dateMax: '',
      timeMinOriginal: '',
      timeMin: '',
      timeMaxOriginal: '',
      timeMax: '',
      hour: '',
      minute: '',
      second: '',
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
          this.date = date || '';
          this.time = time || '';
        } else {
          this.date = '';
          this.time = '';
        }
      }

    },
    start: {
      immediate: true,

      handler(val) {
        if (val) {
          this.dateMin = dateTimeFormat(val, 'date');
          this.timeMinOriginal = dateTimeFormat(val, 'time');
          this.timeMin = '';
          this.showMin = true;
        }

        this.updateDate();
      }

    },
    end: {
      immediate: true,

      handler(val) {
        if (val) {
          this.dateMax = dateTimeFormat(val, 'date');
          this.timeMaxOriginal = dateTimeFormat(val, 'time');
          this.timeMax = '';
          this.showMax = true;
        }

        this.updateDate();
      }

    },
    date: {
      immediate: true,

      handler() {
        this.updateDate();
      }

    },
    time: {
      immediate: true,

      handler() {
        this.updateDate();
      }

    }
  },

  mounted() {},

  methods: {
    updateDate() {
      if (this.time) {
        const splits = this.time.split(':');
        this.hour = splits[0];
        this.minute = splits[1];
        this.second = splits[2];
      }

      this.timeMin = '';
      this.timeMax = '';

      if (this.date) {
        if (this.dateMin && this.date === this.dateMin) {
          this.timeMin = this.timeMinOriginal;
        }

        if (this.dateMax && this.date === this.dateMax) {
          this.timeMax = this.timeMaxOriginal;
        }

        if (this.dateMin && compareDate(this.date, this.dateMin) === -1) {
          this.timeMin = this.timeMinOriginal;
          this.timeMax = this.timeMinOriginal;
        }

        if (this.timeMin && compareTime(this.time, this.timeMin) === -1) {
          this.time = this.timeMinOriginal;
        }

        if (this.dateMax && compareDate(this.date, this.dateMax) === 1) {
          this.timeMin = this.timeMaxOriginal;
          this.timeMax = this.timeMaxOriginal;
        }

        if (this.timeMax && compareTime(this.time, this.timeMax) === 1) {
          this.time = this.timeMaxOriginal;
        }
      }
    },

    onOk() {
      const dateTime = dateTimeFormat(`${this.date} ${this.hour}:${this.minute}:${this.second}`);
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
    },

    onMin() {
      const {
        start
      } = this.$props;
      const dateTime = dateTimeFormat(start);
      const [date, time] = dateTime.split(' ');
      this.date = date;
      this.time = time;
    },

    onMax() {
      const {
        end
      } = this.$props;
      const dateTime = dateTimeFormat(end);
      const [date, time] = dateTime.split(' ');
      this.date = date;
      this.time = time;
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
          min: this.dateMin,
          max: this.dateMax,
          fullWidth: true
        },
        on: {
          change: val => {
            this.date = val;
          }
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
          min: this.timeMin,
          max: this.timeMax,
          useSeconds: true,
          fullWidth: true
        },
        on: {
          'click:hour': val => {
            this.hour = val;
            this.time = `${val}:${this.minute}:${this.second}`;
          },
          'click:minute': val => {
            this.minute = val;
            this.time = `${this.hour}:${val}:${this.second}`;
          },
          'click:second': val => {
            this.second = val;
            this.time = `${this.hour}:${this.minute}:${val}`;
          },
          change: val => {
            this.time = val;
          }
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
      const errorCol = this.$createElement(ZCol, {}, []);
      const nowBtn = this.genBtn('now', this.onNow);
      const minBtn = this.genBtn('min', this.onMin);
      const maxBtn = this.genBtn('max', this.onMax);
      const cancelBtn = this.genBtn('cancel', this.onCancel, 'secondary');
      const okBtn = this.$createElement(ZBtn, {
        props: {
          s: true,
          outlined: true,
          color: 'primary'
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
      attrs: {},
      props: {},
      style: {},
      on: {}
    }, [this.genContent(), this.genFooter()]);
  }

});
//# sourceMappingURL=ZDateTimePickerInner.js.map