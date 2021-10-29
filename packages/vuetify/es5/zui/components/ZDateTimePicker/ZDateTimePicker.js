"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _mixins = _interopRequireDefault(require("./../../../util/mixins"));

var _helpers = require("./../../../util/helpers");

var _components = require("../../../components");

var _ZDateTimePickerInner = _interopRequireDefault(require("./ZDateTimePickerInner"));

require("../../../../src/zui/components/ZDateTimePicker/ZDataTimePicker.scss");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var _default = (0, _mixins.default)().extend({
  name: 'z-date-time-picker',
  props: {
    value: {
      type: String,
      default: null
    },
    min: {
      type: String,
      default: null
    },
    max: {
      type: String,
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
  data: function data() {
    return {
      pickerDate: '',
      inputDate: '',
      visible: false
    };
  },
  computed: {
    inputWidthValue: function inputWidthValue() {
      var w = this.inputWidth;

      if (typeof w === 'number' || !isNaN(w)) {
        return w + 'px';
      }

      return w;
    }
  },
  watch: {
    value: {
      immediate: true,
      handler: function handler(val) {
        this.pickerDate = val || new Date().toISOString();
        this.inputDate = val || '';
      }
    }
  },
  methods: {
    setDateTimePicker: function setDateTimePicker(val) {},
    genActivatorSlot: function genActivatorSlot(props) {
      var slotData = Object.assign(props, {
        formatDate: this.pickerDate
      });
      var activatorSlots = (0, _helpers.getSlot)(this, 'activator', slotData);

      if (activatorSlots && activatorSlots.length > 0) {
        return activatorSlots[activatorSlots.length - 1];
      }

      return this.$createElement(_components.ZTextField, _objectSpread({}, props, {
        props: _objectSpread({
          value: this.inputDate,
          readonly: true,
          outlined: true,
          color: this.color,
          placeholder: this.placeholder || '选择时间'
        }, props.props),
        style: {
          width: this.inputWidthValue
        }
      }));
    }
  },
  render: function render(h) {
    var _this = this;

    return h(_components.ZMenu, {
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
        input: function input(val) {
          return _this.visible = val;
        }
      },
      scopedSlots: {
        activator: this.genActivatorSlot
      }
    }, [h(_ZDateTimePickerInner.default, {
      attrs: {
        color: this.color
      },
      props: {
        value: this.pickerDate,
        start: this.min,
        end: this.max
      },
      on: {
        ok: function ok(val) {
          _this.visible = false;
          _this.pickerDate = val;
          _this.inputDate = val;

          _this.$emit('input', val);
        },
        cancel: function cancel() {
          _this.visible = false;
        }
      }
    })]);
  }
});

exports.default = _default;
//# sourceMappingURL=ZDateTimePicker.js.map