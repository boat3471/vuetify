"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _components = require("../../../components");

var _helper = require("./helper");

var _ZDateTimePickerInner = _interopRequireDefault(require("./ZDateTimePickerInner"));

require("../../../../src/zui/components/ZDateTimePicker/ZDataTimePicker.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = _vue.default.extend({
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
  data: function data() {
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
      handler: function handler(val) {
        if (val) {
          this.dateTimeString = (0, _helper.dateTimeFormat)(val);
          this.setDateTimePicker(val);
        } else {
          this.dateTimeString = null;
          this.dateTimePicker = null;
        }
      }
    },
    start: {
      immediate: true,
      handler: function handler(val) {
        if (val) {
          this.min = (0, _helper.dateTimeFormatDate)(val);
        }
      }
    },
    end: {
      immediate: true,
      handler: function handler(val) {
        if (val) {
          this.max = (0, _helper.dateTimeFormatDate)(val);
        }
      }
    },
    pickerVisible: function pickerVisible(visible) {
      if (visible) {
        var _this$$props = this.$props,
            value = _this$$props.value,
            start = _this$$props.start;

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
    setDateTimePicker: function setDateTimePicker(val) {
      this.dateTimePicker = (0, _helper.dateTimeFormatDate)(val);
    },
    onPickerOk: function onPickerOk(value) {
      this.pickerVisible = false;
      this.dateTimeString = value;
      this.$emit('input', value);
    },
    genActivatorSlot: function genActivatorSlot(props) {
      return this.$createElement(_components.ZTextField, _objectSpread({}, props, {
        attrs: _objectSpread({}, this.$attrs, {}, props.attrs),
        props: _objectSpread({
          value: this.dateTimeString,
          readonly: true,
          outlined: true
        }, props.props),
        style: {
          width: '145px'
        }
      }));
    }
  },
  render: function render(h) {
    var _this = this;

    return h(_components.ZMenu, {
      staticClass: 'z-date-time-picker--inner',
      attrs: _objectSpread({}, this.$attrs),
      props: {
        value: this.pickerVisible,
        offsetY: true,
        contentClass: 'z-date-time-picker',
        transition: 'scale-transition',
        closeOnContentClick: false
      },
      on: {
        input: function input(val) {
          return _this.pickerVisible = val;
        }
      },
      scopedSlots: {
        activator: this.genActivatorSlot
      }
    }, [h(_ZDateTimePickerInner.default, {
      attrs: _objectSpread({}, this.$attrs),
      props: {
        value: this.dateTimePicker,
        start: this.min,
        end: this.max
      },
      on: {
        ok: this.onPickerOk,
        cancel: function cancel() {
          _this.pickerVisible = false;
        }
      }
    })]);
  }
});

exports.default = _default;
//# sourceMappingURL=ZDateTimePicker.js.map