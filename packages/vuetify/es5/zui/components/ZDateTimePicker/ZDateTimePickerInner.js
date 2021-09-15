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
  data: function data() {
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
      handler: function handler(val) {
        if (val) {
          var _dateTimeFormat$split = (0, _helper.dateTimeFormat)(val).split(' '),
              _dateTimeFormat$split2 = _slicedToArray(_dateTimeFormat$split, 2),
              date = _dateTimeFormat$split2[0],
              time = _dateTimeFormat$split2[1];

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
      handler: function handler(val) {
        this.min = val ? (0, _helper.dateTimeFormat)(val) : val;

        if (val) {
          this.showMin = true;
        }
      }
    },
    end: {
      immediate: true,
      handler: function handler(val) {
        this.max = val ? (0, _helper.dateTimeFormat)(val) : val;

        if (val) {
          this.showMax = true;
        }
      }
    },
    date: function date(val) {
      this.check(new Date("".concat(val, " ").concat(this.time)));
    },
    time: function time(val) {
      this.check(new Date("".concat(this.date, " ").concat(val)));
    }
  },
  mounted: function mounted() {
    var value = this.$props.value;
    this.check(value);
  },
  methods: {
    check: function check(date) {
      if (date) {
        var _this$$props = this.$props,
            start = _this$$props.start,
            end = _this$$props.end;

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
    onOk: function onOk() {
      var dateTime = (0, _helper.dateTimeFormat)("".concat(this.date, " ").concat(this.time));
      this.$emit('input', dateTime);
      this.$emit('ok', dateTime);
    },
    onCancel: function onCancel() {
      this.$emit('cancel');
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
      this.check(now);
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
      this.check(start);
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
      this.check(end);
    },
    genContent: function genContent() {
      return this.$createElement(_components.ZRow, {
        props: {
          noGutters: true
        }
      }, [this.genDatePicker(), this.genTimePicker()]);
    },
    genDatePicker: function genDatePicker() {
      var dataPicker = this.$createElement(_components.ZDatePicker, {
        staticClass: 'dt-date-picker',
        attrs: _objectSpread({}, this.$attrs),
        props: {
          value: this.date,
          min: this.min,
          max: this.max,
          fullWidth: true
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
      var timePicker = this.$createElement(_components.ZTimePicker, {
        staticClass: 'dt-time-picker',
        attrs: _objectSpread({}, this.$attrs),
        props: {
          value: this.time,
          format: '24hr',
          useSeconds: true,
          fullWidth: true
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
      var errorSpan = this.okDisabled ? this.$createElement('span', {
        staticClass: 'error--text text-caption'
      }, ['Out of range']) : null;
      var errorCol = this.$createElement(_components.ZCol, {}, [errorSpan]);
      var nowBtn = this.genBtn('now', this.onNow);
      var minBtn = this.genBtn('min', this.onMin);
      var maxBtn = this.genBtn('max', this.onMax);
      var cancelBtn = this.genBtn('cancel', this.onCancel, 'secondary');
      var okBtn = this.$createElement(_components.ZBtn, {
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
      attrs: _objectSpread({}, this.$attrs),
      props: {},
      style: {},
      on: {}
    }, [this.genContent(), this.genFooter()]);
  }
});

exports.default = _default;
//# sourceMappingURL=ZDateTimePickerInner.js.map