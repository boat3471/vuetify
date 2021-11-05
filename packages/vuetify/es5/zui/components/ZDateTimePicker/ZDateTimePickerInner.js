"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _components = require("../../../components");

var _helper = require("./helper");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var _default = _vue.default.extend({
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
  data: function data() {
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
      handler: function handler(val) {
        this.updateValue(val);
      }
    },
    start: {
      immediate: true,
      handler: function handler(val) {
        if (val) {
          this.dateMin = (0, _helper.dateTimeFormat)(val, 'date');
          this.timeMinOriginal = (0, _helper.dateTimeFormat)(val, 'time');
          this.timeMin = '';
          this.showMin = true;
        }

        this.updateDate();
      }
    },
    end: {
      immediate: true,
      handler: function handler(val) {
        if (val) {
          this.dateMax = (0, _helper.dateTimeFormat)(val, 'date');
          this.timeMaxOriginal = (0, _helper.dateTimeFormat)(val, 'time');
          this.timeMax = '';
          this.showMax = true;
        }

        this.updateDate();
      }
    },
    date: {
      immediate: true,
      handler: function handler() {
        this.updateDate();
      }
    },
    time: {
      immediate: true,
      handler: function handler() {
        this.updateDate();
      }
    }
  },
  mounted: function mounted() {},
  methods: {
    updateValue: function updateValue(val) {
      if (val) {
        var _dateTimeFormat$split = (0, _helper.dateTimeFormat)(val).split(' '),
            _dateTimeFormat$split2 = _slicedToArray(_dateTimeFormat$split, 2),
            date = _dateTimeFormat$split2[0],
            time = _dateTimeFormat$split2[1];

        this.date = date || '';
        this.time = time || '';
      } else {
        this.date = '';
        this.time = '';
      }

      this.updateDate();
    },
    updateDate: function updateDate() {
      if (this.time) {
        var splits = this.time.split(':');
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

        if (this.dateMin && (0, _helper.compareDate)(this.date, this.dateMin) === -1) {
          this.timeMin = this.timeMinOriginal;
          this.timeMax = this.timeMinOriginal;
        }

        if (this.timeMin && (0, _helper.compareTime)(this.time, this.timeMin) === -1) {
          this.time = this.timeMinOriginal;
        }

        if (this.dateMax && (0, _helper.compareDate)(this.date, this.dateMax) === 1) {
          this.timeMin = this.timeMaxOriginal;
          this.timeMax = this.timeMaxOriginal;
        }

        if (this.timeMax && (0, _helper.compareTime)(this.time, this.timeMax) === 1) {
          this.time = this.timeMaxOriginal;
        }
      }
    },
    onOk: function onOk() {
      var dateTime = (0, _helper.dateTimeFormat)("".concat(this.date, " ").concat(this.hour, ":").concat(this.minute, ":").concat(this.second));
      this.$emit('input', dateTime);
      this.$emit('ok', dateTime);
    },
    onCancel: function onCancel() {
      this.updateValue(this.value);
      var dateTime = (0, _helper.dateTimeFormat)("".concat(this.date, " ").concat(this.hour, ":").concat(this.minute, ":").concat(this.second));
      this.$emit('cancel', dateTime);
    },
    onNow: function onNow() {
      var now = new Date();
      var dateTime = (0, _helper.dateTimeFormat)(now);

      var _dateTime$split = dateTime.split(' '),
          _dateTime$split2 = _slicedToArray(_dateTime$split, 2),
          date = _dateTime$split2[0],
          time = _dateTime$split2[1];

      this.date = date;
      this.time = time;
    },
    onMin: function onMin() {
      var start = this.$props.start;
      var dateTime = (0, _helper.dateTimeFormat)(start);

      var _dateTime$split3 = dateTime.split(' '),
          _dateTime$split4 = _slicedToArray(_dateTime$split3, 2),
          date = _dateTime$split4[0],
          time = _dateTime$split4[1];

      this.date = date;
      this.time = time;
    },
    onMax: function onMax() {
      var end = this.$props.end;
      var dateTime = (0, _helper.dateTimeFormat)(end);

      var _dateTime$split5 = dateTime.split(' '),
          _dateTime$split6 = _slicedToArray(_dateTime$split5, 2),
          date = _dateTime$split6[0],
          time = _dateTime$split6[1];

      this.date = date;
      this.time = time;
    },
    genContent: function genContent() {
      return this.$createElement(_components.ZRow, {
        props: {
          noGutters: true
        }
      }, [this.genDatePicker(), this.genTimePicker()]);
    },
    genDatePicker: function genDatePicker() {
      var _this = this;

      var dataPicker = this.$createElement(_components.ZDatePicker, {
        staticClass: 'dt-date-picker',
        attrs: _objectSpread({}, this.$attrs),
        props: {
          value: this.date,
          min: this.dateMin,
          max: this.dateMax,
          fullWidth: true
        },
        on: {
          change: function change(val) {
            _this.date = val;
          }
        }
      });
      return this.$createElement(_components.ZCol, {
        staticClass: 'dt-date-picker-col',
        props: {
          cols: 6
        }
      }, [dataPicker]);
    },
    genTimePicker: function genTimePicker() {
      var _this2 = this;

      var timePicker = this.$createElement(_components.ZTimePicker, {
        staticClass: 'dt-time-picker',
        attrs: _objectSpread({}, this.$attrs),
        props: {
          value: this.time,
          format: '24hr',
          min: this.timeMin,
          max: this.timeMax,
          useSeconds: true,
          fullWidth: true
        },
        on: {
          'click:hour': function clickHour(val) {
            _this2.hour = val;
            _this2.time = "".concat(val, ":").concat(_this2.minute, ":").concat(_this2.second);
          },
          'click:minute': function clickMinute(val) {
            _this2.minute = val;
            _this2.time = "".concat(_this2.hour, ":").concat(val, ":").concat(_this2.second);
          },
          'click:second': function clickSecond(val) {
            _this2.second = val;
            _this2.time = "".concat(_this2.hour, ":").concat(_this2.minute, ":").concat(val);
          },
          change: function change(val) {
            _this2.time = val;
          }
        }
      });
      return this.$createElement(_components.ZCol, {
        staticClass: 'dt-time-picker-col',
        props: {
          cols: 6
        }
      }, [timePicker]);
    },
    genBtn: function genBtn(label, click, color) {
      return this.$createElement(_components.ZBtn, {
        staticClass: 'mr-2',
        props: {
          text: true,
          s: true,
          outlined: true,
          color: color
        },
        on: {
          click: click
        }
      }, [label]);
    },
    genFooter: function genFooter() {
      var errorCol = this.$createElement(_components.ZCol, {}, []);
      var nowBtn = this.genBtn('now', this.onNow);
      var minBtn = this.genBtn('min', this.onMin);
      var maxBtn = this.genBtn('max', this.onMax);
      var cancelBtn = this.genBtn('cancel', this.onCancel, 'secondary');
      var okBtn = this.$createElement(_components.ZBtn, {
        props: {
          s: true,
          outlined: true,
          color: 'primary'
        },
        on: {
          click: this.onOk
        }
      }, ['sure']);
      var actionCol = this.$createElement(_components.ZCol, {
        props: {
          cols: 'auto'
        }
      }, [nowBtn, this.showMin ? minBtn : null, this.showMax ? maxBtn : null, cancelBtn, okBtn]);
      return this.$createElement(_components.ZRow, {
        staticClass: 'pa-4',
        props: {
          noGutters: true,
          justify: 'center',
          align: 'center'
        }
      }, [errorCol, actionCol]);
    }
  },
  render: function render(h) {
    return h(_components.ZCard, {
      staticClass: 'z-date-time-picker--inner',
      attrs: {},
      props: {},
      style: {},
      on: {}
    }, [this.genContent(), this.genFooter()]);
  }
});

exports.default = _default;
//# sourceMappingURL=ZDateTimePickerInner.js.map